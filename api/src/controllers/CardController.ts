import { Request, Response, response } from 'express'
import RepositoryModel from 'models/Repository'
import UserModel from 'models/User'
import GitHubAPI from 'services/githubApi'
import CardModel from 'models/Card'
import BoardModel from 'models/Board'

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
  url: string
}

class CardController {
  public async store (req: Request<RouteParams, {}, CardCreateRequest>, res: Response): Promise<Response> {
    const repository = await RepositoryModel.findById(req.params.repository_id)
    if (repository) {
      const user = await UserModel.findOne().lean()
      const response = await GitHubAPI.post<GitHubIssueCreateResponse>(`repos/${user?.name}/${repository.name}/issues`, {
        title: req.body.title,
        body: req.body.github_description
      }, {
        headers: {
          Authorization: `token ${user?.access_token}`
        }
      })
      const count = await RepositoryModel.count({
        _id: repository._id,
        'boards.title': 'TODO'
      })
      const card = await CardModel.create({
        issue_id: response.data.id,
        issue_url: response.data.url,
        title: req.body.title,
        description: req.body.description
      })
    }
    return res.status(404).send({
      error: 'REPOSITORY_NOT_FOUND',
      message: `the repository with id = ${req.params.repository_id} doesn't exists`
    })
  }
}
export default new CardController()
