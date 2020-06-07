import { Request, Response } from 'express'
import { AxiosError } from 'axios'
import GitHubAPI from 'rest/GitHubApi'
import User from 'database/models/User'
import Board from 'database/models/Board'
import Repository from 'database/models/Repository'
import { extractAPIError } from 'utils/apiError'
import { getDefauldBoards } from 'utils/boardUtils'
import Sequelize from 'sequelize'
import Card from 'database/models/Card'

interface RepositoryCreateBody {
  repo_name: string
  repo_owner: string
}

interface GitHubRepoResponse {
  id: number
  name: string
  owner: {
    login: string
  }
  description: string
  html_url: string
}

class RepositoryController {
  public async store (req: Request<{}, {}, RepositoryCreateBody>, res: Response): Promise<Response> {
    const { repo_name, repo_owner } = req.body
    try {
      const user_id = req.headers.authorization as string
      const user = await User.findByPk(user_id)
      const response = await GitHubAPI.get<GitHubRepoResponse>(`/repos/${repo_owner}/${repo_name}`, {
        headers: {
          Authorization: `token ${user?.access_token}`
        }
      })
      const repositoryData = {
        repository_id: response.data.id,
        repository_url: response.data.html_url,
        name: response.data.name,
        owner: response.data.owner.login,
        user_id: user?.id,
        description: response.data.description
      }
      const isNew: boolean = await Repository.upsert(repositoryData)
      const repository = await Repository.findByPk(response.data.id)
      if (!isNew) {
        return res.status(200).json(repository)
      }
      await Board.bulkCreate(getDefauldBoards(repository!.repository_id))

      return res.status(201).send(repository)
    } catch (err) {
      const error = extractAPIError(err as AxiosError)
      return res.status(error.status).send(error)
    }
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const repository_id = String(req.params.repository_id)
    const user_id = req.headers.authorization as string
    const repository = await Repository.findOne({
      where: { repository_id, user_id },
      include: [{
        association: 'boards',
        include: ['cards']
      }],
      order: [[
        {
          model: Board,
          as: 'boards'
        },
        'id',
        'ASC'
      ], [
        { model: Board, as: 'boards' }, { model: Card, as: 'cards' }, 'order', 'ASC'
      ]]

    })

    return res.status(200).json(repository)
  }

  public async index (req: Request, res: Response): Promise<Response> {
    const user_id = req.headers.authorization as string
    const repositories = await Repository.findAll({
      where: { user_id },
      attributes: {
        include: [

          [
            Sequelize.literal(`(
              SELECT count(*) FROM cards JOIN boards on
                cards.board_id = boards.id
                WHERE boards.repository_id = Repository.repository_id
                AND cards.closedAt IS NOT NULL
          )`),
            'completed_cards'
          ],
          [
            Sequelize.literal(`(
              SELECT count(*) FROM cards JOIN boards on
                cards.board_id = boards.id
                WHERE boards.repository_id = Repository.repository_id
          )`),
            'total_cards'
          ]
        ]

      }
    })
    return res.status(200).send(repositories)
  }
}

export default new RepositoryController()
