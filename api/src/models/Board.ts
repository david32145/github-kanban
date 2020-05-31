import mongoose from 'mongoose'
import { Repository } from './Repository'

export interface Board {
  type: 'TODO' | 'DOING' | 'REVIEW' | 'CLOSED'
  repository: Repository
  color: string
}

type BoardDocument = Board & mongoose.Document

export const BoardScheme = new mongoose.Schema({
  type: {
    type: String,
    uppercase: true,
    enum: ['TODO', 'DOING', 'REVIEW', 'CLOSED']
  },
  repository: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Repositories',
    required: true
  },
  color: {
    type: String,
    required: true
  }
})

export default mongoose.model<BoardDocument>('Boards', BoardScheme)
