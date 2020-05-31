import mongoose from 'mongoose'

export interface User {
  id: number
  name: string
  description: string
  access_token: string
}

type UserDocument = User & mongoose.Document

export const UserScheme = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  access_token: {
    type: String,
    required: true
  }
})

export default mongoose.model<UserDocument>('Users', UserScheme)
