import { Sequelize } from 'sequelize'

import Board from './models/Board'
import Card from './models/Card'
import Repository from './models/Repository'
import User from './models/User'
import { development } from 'config/database'

const sequelize = new Sequelize(`${development.dialect}://${development.username}:${development.password}@${development.host}:${development.port}/${development.database}`)

Board.initScheme(sequelize)
Card.initScheme(sequelize)
Repository.initScheme(sequelize)
User.initScheme(sequelize)

Board.associate(sequelize)
Repository.associate(sequelize)
Card.associate(sequelize)
