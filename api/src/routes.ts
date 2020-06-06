import { Router } from 'express'

import AuthController from 'controllers/AuthController'
import RepositoryController from 'controllers/RepositoryController'
import CardController from 'controllers/CardController'

const routes = Router()

routes
  .get('/login/:username', AuthController.show)
  .get('/login', AuthController.store)

routes
  .get('/repositories', RepositoryController.index)
  .get('/repositories/:repository_id', RepositoryController.show)
  .post('/repositories', RepositoryController.store)

routes
  .post('/repositories/:repository_id/card', CardController.store)

export default routes
