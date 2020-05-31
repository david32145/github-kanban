import mongoose from 'mongoose'
import { Board } from './Board'

export interface Card {
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

type CardDocument = Card & mongoose.Document

export const CardScheme = new mongoose.Schema({
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
  closed_at: Date
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'update_at' }
})

export default mongoose.model<CardDocument>('Cards', CardScheme)
