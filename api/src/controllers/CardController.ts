import { Request, Response } from 'express'
import Repository from 'database/Repository'
import User from 'database/User'
import GitHubAPI from 'services/githubApi'
import Board from 'database/Board'
import Card from 'database/Card'

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
    const repository: Repository = await Repository.findOne({
      where: {
        repository_id: req.params.repository_id,
        user_id
      }
    })
    if (repository) {
      const user: User = await User.findByPk(user_id)
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
      const board: Board = await Board.findOne({
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
        board_id: board.id
      })

      return res.status(201).json(card)
    }
    return res.status(404).send({
      error: 'REPOSITORY_NOT_FOUND',
      message: `the repository with id = ${req.params.repository_id} doesn't exists`
    })
  }
}
export default new CardController()
