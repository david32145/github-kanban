import { Request, Response } from 'express'
import Repository from 'database/models/Repository'
import User from 'database/models/User'
import GitHubAPI from 'rest/GitHubApi'
import Board from 'database/models/Board'
import Card from 'database/models/Card'
import CardRepository from 'database/repository/CardRepository'

interface CardCreateRequest {
  title: string
  description: string
  github_description: string
}

type RouteParams = {
  repository_id: string
}

interface GitHubIssueCreateResponse {
  id: number
  html_url: string,
  number: number
}

class CardController {
  public async store (req: Request<RouteParams, {}, CardCreateRequest>, res: Response): Promise<Response> {
    const user_id = req.headers.authorization as string
    console.log(user_id)
    const repository = await Repository.findOne({
      where: {
        repository_id: req.params.repository_id,
        user_id
      }
    })
    if (repository) {
      const user = await User.findByPk(user_id)
      const response = await GitHubAPI.post<GitHubIssueCreateResponse>(`repos/${user?.username}/${repository.name}/issues`, {
        title: req.body.title,
        body: req.body.github_description
      }, {
        headers: {
          Authorization: `token ${user?.access_token}`
        }
      })
      const countCardsOpened = await Card.count({
        where: {
          '$boards.type$': 'TODO',
          '$boards.repository_id$': repository.repository_id
        },
        include: ['boards']
      })
      const board = await Board.findOne({
        where: {
          repository_id: req.params.repository_id,
          type: 'TODO'
        }
      })
      const card = await Card.create({
        issue_id: response.data.id,
        issue_url: response.data.html_url,
        title: req.body.title,
        number: response.data.number,
        description: req.body.description,
        order: countCardsOpened + 1,
        board_id: board?.id
      })

      return res.status(201).json(card)
    }
    return res.status(404).send({
      error: 'REPOSITORY_NOT_FOUND',
      message: `the repository with id = ${req.params.repository_id} doesn't exists`
    })
  }

  public async moveCard (req: Request, res: Response): Promise<Response> {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const user_id = String(req.headers.authorization)
    const repository_id = String(req.params.repository_id)
    const user = await User.findByPk(user_id)
    const repository = await Repository.findOne({
      where: {
        repository_id,
        user_id
      }
    })

    type X = {[key: string]: number}
    const { card_id, to_board_id, to_card_id }: X = req.body
    const toBoardCount = await CardRepository.countCardByBoard(to_board_id)
    const card = await Card.findByPk(card_id)
    const oldBoardId = card?.board_id
    const oldOrder = card?.order
    if (card?.board_id === to_board_id) {
      const toCard = await Card.findByPk(to_card_id)
      if (card.order < toCard!.order) {
        await CardRepository.shiftLeft(to_board_id, oldOrder || 0, toCard?.order || 0)
      } else {
        await CardRepository.shiftRight(to_board_id, oldOrder || 0, toCard?.order || 0)
      }
      card.order = toCard?.order || 0
      await card.save()
    } else {
      const toBoard = await Board.findByPk(to_board_id)
      const oldBoard = await Board.findByPk(oldBoardId)
      if (toBoard?.type === 'CLOSED') {
        card!.closedAt = new Date()
        await GitHubAPI.patch(`/repos/${user?.username}/${repository?.name}/issues/${card?.number}`, {
          state: 'closed'
        }, {
          headers: {
            Authorization: `token ${user?.access_token}`
          }
        })
      }

      if (oldBoard?.type === 'CLOSED') {
        card!.closedAt = undefined
        await GitHubAPI.patch(`/repos/${user?.username}/${repository?.name}/issues/${card?.number}`, {
          state: 'open'
        }, {
          headers: {
            Authorization: `token ${user?.access_token}`
          }
        })
      }

      if (toBoardCount === 0) {
        card!.board_id = to_board_id
        card!.order = 1
        await card?.save()
      } else {
        const toCard = await Card.findByPk(to_card_id)
        await CardRepository.shiftRightEnd(to_board_id, toCard!.order)

        card!.order = toCard!.order
        card!.board_id = to_board_id
        await card!.save()
      }
      await CardRepository.shiftLeftEnd(oldBoardId || 0, oldOrder || 0)
    }
    return res.status(200).json()
  }
}
export default new CardController()
