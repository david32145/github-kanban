export interface GitHubTokenResponse {
  access_token: string
  type: string
  scope: string
}

export interface GitHubUserResponse {
  id: number
  login: string
  bio: string
}
