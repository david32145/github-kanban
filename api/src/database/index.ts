import { Sequelize } from 'sequelize'

import Board from './Board'
import Card from './Card'
import Repository from './Repository'
import User from './User'

const sequelize = new Sequelize('mysql://root:root@localhost:13306/github_kanban')

Board.initScheme(sequelize)
Card.initScheme(sequelize)
Repository.initScheme(sequelize)
User.initScheme(sequelize)

Board.associate(sequelize)
Repository.associate(sequelize)
Card.associate(sequelize)
