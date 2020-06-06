import { Request, Response } from 'express'

import axios from 'axios'
import GitHubAPI from 'services/githubApi'

import User from 'database/User'

const credentials = {
  client_id: '94704ff763ce7e8489e9',
  client_secret: '32ad632712a117b09ba96420a1e086281b822977'
}

interface GitHubTokenResponse {
  access_token: string
  type: string
  scope: string
}

interface GitHubUserResponse {
  id: number
  login: string
  bio: string
}

class AuthController {
  public async store (req: Request, res: Response): Promise<Response> {
    if (req.query.code) {
      console.log(req.query.code)
      const authResponse = await axios.post<GitHubTokenResponse>('https://github.com/login/oauth/access_token', {
        client_id: credentials.client_id,
        client_secret: credentials.client_secret,
        code: req.query.code
      }, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
      const userResponse = await GitHubAPI.get<GitHubUserResponse>('/user', {
        headers: {
          Authorization: `token ${authResponse.data.access_token}`
        }
      })
      type X = [User, boolean]
      const [user, created]: X = await User.findOrCreate({
        where: {
          username: userResponse.data.login
        },
        defaults: {
          username: userResponse.data.login,
          description: userResponse.data.bio,
          access_token: authResponse.data.access_token
        }
      })

      if (!created) {
        user.access_token = authResponse.data.access_token
        user.username = userResponse.data.login
        user.description = userResponse.data.bio
      }

      return res.status(200).json({
        id: user.id,
        username: user.username,
        description: user.description,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      })
    }
    return res.status(400).send('Algo deu errado')
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const username = String(req.params.username)
    const user: User = await User.findOne({
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
