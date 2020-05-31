import moduleAlias from 'module-alias'

import app from './app'
moduleAlias.addPath('./dist')

const PORT = process.env.PORT || 3333

app.listen(PORT, function (...err) {
  if (err.length > 0) {
    console.error(err)
  } else {
    console.log(`Server is running in http://localhost:${PORT}`)
  }
})
