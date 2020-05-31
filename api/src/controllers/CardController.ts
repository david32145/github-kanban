import { Request, Response } from 'express'

class CardController {
  public async store (req: Request, res: Response): Promise<Response> {
    return res.status(201).send('ok')
  }
}
export default new CardController()
