import { Request, Response } from 'express'
import { AxiosError } from 'axios'
import GitHubAPI from 'services/githubApi'
import User from 'database/User'
import Board from 'database/Board'
import Repository from 'database/Repository'
import { extractAPIError } from 'utils/apiError'
import { getDefauldBoards } from 'utils/boardUtils'

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
      const user: User = await User.findByPk(user_id)
      const response = await GitHubAPI.get<GitHubRepoResponse>(`/repos/${repo_owner}/${repo_name}`, {
        headers: {
          Authorization: `token ${user.access_token}`
        }
      })
      const repositoryData = {
        repository_id: response.data.id,
        repository_url: response.data.html_url,
        name: response.data.name,
        owner: response.data.owner.login,
        user_id: user.id,
        description: response.data.description
      }
      const isNew: boolean = await Repository.upsert(repositoryData)
      const repository = await Repository.findByPk(response.data.id)
      if (!isNew) {
        return res.status(200).json(repository)
      }
      await Board.bulkCreate(getDefauldBoards(repository.repository_id))

      return res.status(201).send(repository)
    } catch (err) {
      console.log(err)
      const error = extractAPIError(err as AxiosError)
      return res.status(error.status).send(error)
    }
  }

  public async index (req: Request, res: Response): Promise<Response> {
    const repositories = await Repository.findAll()
    return res.status(200).send(repositories)
  }
}

export default new RepositoryController()
