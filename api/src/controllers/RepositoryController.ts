import { Request, Response } from 'express'
import RepositoryModel, { Repository } from 'models/Repository'

interface RepositoryCreateBody {
  repoName: string
  id: number
}

class RepositoryController {
  public async store (req: Request<{}, {}, RepositoryCreateBody>, res: Response): Promise<Response> {
    const repo: Repository = {
      name: req.body.repoName,
      description: 'A framework for building native apps with React.',
      id: req.body.id,
      owner: 'facebook'
    }

    const createdRepo = await RepositoryModel.create(repo)

    return res.status(201).send(createdRepo)
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
