import mongoose from 'mongoose'
import { Board } from './Board'

export interface Repository {
  id: number
  name: string
  owner: string
  description: string
  boards: Board[]
}

type RepositoryDocument = Repository & mongoose.Document

const RepositoryScheme = new mongoose.Schema({
  id: {
    type: Number,
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
