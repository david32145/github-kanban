import { Request, Response } from 'express'

import GitHubService from 'services/GitHubService'

import User from 'database/models/User'
import UserRepository from 'database/repository/UserRepository'
import ApiError from 'erros/ApiError'

class AuthController {
  public async store (req: Request, res: Response): Promise<Response | void> {
    try {
      const code = String(req.query.code)
      const auth = await GitHubService.login(code)
      const githubUser = await GitHubService.getGitHubUser(auth.access_token)
      await UserRepository.findOrCreateByUsername(githubUser.login, githubUser.bio, auth.access_token)

      const url = process.env.FRONT_END_LOGIN_URL
      if (url) {
        return res.status(200).redirect(url)
      }
      throw new Error('front end url is not provider')
    } catch (err) {
      if (err instanceof ApiError) {
        return res.status(err.code).json(err.toJSON())
      }
      return res.status(500).send()
    }
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const username = String(req.params.username)
    const user = await User.findOne({
      where: {
        username
      },
      attributes: {
        exclude: ['access_token']
      }
    })

    if (user) {
      return res.status(200).json(user)
    }

    return res.status(401).json({
      error: 'USER_NOT_LOGGED',
      message: 'user not logged'
    })
  }
}

export default new AuthController()
