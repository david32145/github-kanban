import axios from 'axios'
import ApiError from 'erros/ApiError'
import GitHubAPI from 'rest/GitHubApi'

import { GitHubTokenResponse, GitHubUserResponse } from 'interfaces/github'

class GitHubService {
  public async login (code?: string): Promise<GitHubTokenResponse> {
    if (!code) {
      throw new ApiError('CODE_IS_REQUIRED', 'The code in query params is not provider', 400)
    }
    try {
      const response = await axios.post<GitHubTokenResponse>('https://github.com/login/oauth/access_token', {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
      }, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
      return response.data
    } catch (err) {
      throw new ApiError('GITHUB_INVALID_CODE', 'The code send is invalid', 400)
    }
  }

  public async getGitHubUser (access_token: string): Promise<GitHubUserResponse> {
    try {
      const response = await GitHubAPI.get<GitHubUserResponse>('/user', {
        headers: {
          Authorization: `token ${access_token}`
        }
      })
      return response.data
    } catch (err) {
      throw new ApiError('GITHUB_USER_NOT_FOUND', 'The user not exist', 404)
    }
  }
}

export default new GitHubService()
