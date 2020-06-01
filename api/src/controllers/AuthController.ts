import { Request, Response } from 'express'

import axios from 'axios'
import GitHubAPI from 'services/githubApi'

import UserModel from 'models/User'

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

      await UserModel.updateOne({
        id: userResponse.data.id
      }, {
        id: userResponse.data.id,
        name: userResponse.data.login,
        description: userResponse.data.bio,
        access_token: authResponse.data.access_token
      }, { upsert: true })

      return res.status(200).send()
    }
    return res.status(400).send('Algo deu errado')
  }

  public async listUser (req: Request, res: Response): Promise<Response> {
    const user = await UserModel.findOne().lean()
    return res.json(user)
  }
}

export default new AuthController()
