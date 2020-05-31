import { AxiosError } from 'axios'

export function extractAPIError (error: AxiosError) {
  if (error.response) {
    if (error.response.status === 403) {
      return {
        type: 'FORBIDDEN',
        status: 403,
        message: 'Not allowed for this repository'
      }
    }
    if (error.response.status === 404) {
      return {
        type: 'REPO_NOT_FOUND',
        status: 404,
        message: 'Repository not found'
      }
    }
  }
  return {
    type: 'SERVER_CONNECTION_REFUSED',
    status: 500,
    message: 'No server connection'
  }
}
