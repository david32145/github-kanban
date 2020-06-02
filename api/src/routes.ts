import { Router } from 'express'

import AuthController from 'controllers/AuthController'
import RepositoryController from 'controllers/RepositoryController'
import CardController from 'controllers/CardController'

const routes = Router()

routes
  .get('/login', AuthController.store)

routes
  .get('/repositories', RepositoryController.index)
  .post('/repositories', RepositoryController.store)

routes
  .post('/repositories/:repository_id/card', CardController.store)

export default routes
