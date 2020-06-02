import { Model, DataTypes } from 'sequelize'

import sequelize from './database'

class Repository extends Model {
  public repository_id!: number
  public repository_url!: string
  public name!: string
  public owner!: string
  public description?: string
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
  description: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  tableName: 'users'
})

export default Repository
