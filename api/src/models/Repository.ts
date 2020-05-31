import mongoose from 'mongoose'
import { Board } from './Board'

export interface Repository {
  repo_id: number
  repo_url: string
  name: string
  owner: string
  description: string
  boards: Board[]
}

interface RepositoryDocument extends Repository, mongoose.Document {}

const RepositoryScheme = new mongoose.Schema({
  repo_id: {
    type: Number,
    required: true
  },
  repo_url: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  boards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Boards'
  }]
})

export default mongoose.model<RepositoryDocument>('Repositories', RepositoryScheme)
