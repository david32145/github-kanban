import { Request, Response } from 'express'
import { AxiosError } from 'axios'
import GitHubAPI from 'services/githubApi'
import RepositoryModel, { Repository } from 'models/Repository'
import BoardModel from 'models/Board'
import { extractAPIError, getDefauldBoards } from 'utils/apiError'

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
      let repository: Repository | null = await RepositoryModel.findOne()
        .where({ name: repo_name, owner: repo_owner })
        .populate('boards')
        .lean()
      if (repository) {
        return res.status(200).send(repository)
      }
      const response = await GitHubAPI.get<GitHubRepoResponse>(`/repos/${repo_owner}/${repo_name}`)

      const boards = await BoardModel.create(getDefauldBoards())
      repository = {
        repo_url: response.data.html_url,
        boards: boards.map(board => board._id),
        description: response.data.description,
        name: response.data.name,
        owner: response.data.owner.login,
        repo_id: response.data.id
      }
      const createdRepository = await RepositoryModel.create(repository)
      await createdRepository.populate('boards').execPopulate()
      return res.status(201).send(createdRepository)
    } catch (err) {
      const error = extractAPIError(err as AxiosError)
      return res.status(error.status).send(error)
    }
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const repository = await RepositoryModel.findById(req.params.id)
      .populate('boards')
    return res.status(200).send(repository)
  }

  public async index (req: Request, res: Response): Promise<Response> {
    const repositories = await RepositoryModel.find()
      .populate('boards')
      .exec()
    return res.status(200).send(repositories)
  }
}

export default new RepositoryController()
