import { Model, DataTypes } from 'sequelize'
import sequelize from './database'
import Repository from './Repository'

class Board extends Model {
  public id!: number
  public type!: 'TODO' | 'DOING' | 'REVIEW' | 'CLOSED'
  public color!: string
  public repository_id!: number
}

Board.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['TODO', 'DOING', 'REVIEW', 'CLOSED']]
    }
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  repository_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Repository,
      key: 'repository_id'
    }
  }
}, {
  sequelize,
  tableName: 'boards',
  timestamps: false
})

export default Board
