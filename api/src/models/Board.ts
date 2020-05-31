import mongoose from 'mongoose'
import { Card } from './Card'

export interface Board {
  type: 'TODO' | 'DOING' | 'REVIEW' | 'CLOSED'
  cards: Card[]
  color: string
}

type BoardDocument = Board & mongoose.Document

export const BoardScheme = new mongoose.Schema({
  type: {
    type: String,
    uppercase: true,
    enum: ['TODO', 'DOING', 'REVIEW', 'CLOSED']
  },
  color: {
    type: String,
    required: true
  },
  cards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cards'
  }]
})

export default mongoose.model<BoardDocument>('Boards', BoardScheme)
