import { Sequelize } from 'sequelize'

import Board from './models/Board'
import Card from './models/Card'
import Repository from './models/Repository'
import User from './models/User'

const sequelize = new Sequelize('mysql://root:root@localhost:13306/github_kanban')

Board.initScheme(sequelize)
Card.initScheme(sequelize)
Repository.initScheme(sequelize)
User.initScheme(sequelize)

Board.associate(sequelize)
Repository.associate(sequelize)
Card.associate(sequelize)
