import axios from 'axios'

const GitHubAPI = axios.create({
  baseURL: 'https://api.github.com'
})

export default GitHubAPI
