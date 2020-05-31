import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  return res.send('Ok3')
})

export default app
