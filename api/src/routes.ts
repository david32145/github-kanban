import { Router } from 'express'

import RepositoryController from 'controllers/RepositoryController'

const routes = Router()

routes
  .get('/repositories', RepositoryController.index)
  .post('/repositories', RepositoryController.store)

export default routes
