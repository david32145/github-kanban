import { Request, Response } from 'express'
import BoardModel from 'models/Board'
import RepositoryModel from 'models/Repository'

interface BoardCreateBody {
  type: 'TODO' | 'DOING' | 'REVIEW' | 'CLOSED'
  repository_id: number
  color: string
}

class BoardController {
  public async store (req: Request<{}, {}, BoardCreateBody>, res: Response): Promise<Response> {
    const body = req.body
    const repository = await RepositoryModel.findById(body.repository_id)
    const createdBoard = await BoardModel.create({
      type: body.type,
      color: body.color,
      repository: body.repository_id
    })
    if (repository?.boards) {
      repository.boards.push(createdBoard)
      await repository.save()
    }

    return res.status(201).send(createdBoard.toJSON())
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const board = await BoardModel.findById(req.params.id)
      .populate('repository')
      .lean()
    return res.status(200).send(board)
  }
}

export default new BoardController()
