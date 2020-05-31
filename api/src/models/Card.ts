import mongoose from 'mongoose'
import { Board } from './Board'

export interface User {
  issue_id: number
  issue_url: string
  title: string
  description: string
  order: number
  board: Board
  created_at: Date
  update_at: Date
  closed_at: Date
}

type UserDocument = User & mongoose.Document

const UserScheme = new mongoose.Schema({
  issue_id: {
    type: Number,
    required: true
  },
  issue_url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  board: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Boards'
  },
  created_at: Date,
  update_at: Date,
  closed_at: Date
}, {
  timestamps: true
})

export default mongoose.model<UserDocument>('Users', UserScheme)
