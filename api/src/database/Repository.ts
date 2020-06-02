import { Model, DataTypes } from 'sequelize'
import User from './User'

import sequelize from './database'

class Repository extends Model {
  public repository_id!: number
  public repository_url!: string
  public name!: string
  public owner!: string
  public user_id!: number
  public description?: string

  public readonly user?: User;
}

Repository.init({
  repository_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true
  },
  repository_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  owner: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  description: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  tableName: 'users'
})

export default Repository
