import { Router } from 'express'

import RepositoryController from 'controllers/RepositoryController'
import BoardController from 'controllers/BoardController'

const routes = Router()

routes
  .get('/repositories', RepositoryController.index)
  .get('/repositories/:id', RepositoryController.show)
  .post('/repositories', RepositoryController.store)

routes
  .get('/boards/:id', BoardController.show)
  .post('/boards', BoardController.store)

export default routes
