import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

mongoose.connect('mongodb://localhost:27017/githubkaban', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export default app
