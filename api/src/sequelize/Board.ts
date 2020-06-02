import { Model, DataTypes } from 'sequelize'
import sequelize from './database'

class Board extends Model {
  public type!: 'TODO' | 'DOING' | 'REVIEW' | 'CLOSED'
  public color!: string
}

Board.init({
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
  }
}, {
  sequelize,
  tableName: 'boards'
})

export default Board
