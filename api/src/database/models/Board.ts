import { Model, DataTypes, Sequelize } from 'sequelize'

class Board extends Model {
  public id!: number
  public type!: 'TODO' | 'DOING' | 'REVIEW' | 'CLOSED'
  public color!: string
  public repository_id!: number

  public static initScheme (sequelize: Sequelize) {
    this.init({
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
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'boards',
      timestamps: false
    })
  }

  public static associate (sequelize: Sequelize) {
    this.hasMany(sequelize.model('Card'), {
      as: 'cards',
      foreignKey: 'board_id'
    })
  }
}

export default Board
