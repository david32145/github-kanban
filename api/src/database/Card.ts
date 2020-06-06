import { Model, DataTypes, Sequelize } from 'sequelize'

class Card extends Model {
  private issue_id!: number
  private issue_url!: string
  private title!: string
  private description?: string
  private number!: number
  private order!: number
  private board_id!: number
  private readonly createdAt!: Date
  private readonly updateAt!: Date
  private closedAt!: Date

  public static initScheme (sequelize: Sequelize) {
    this.init({
      issue_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      issue_url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING
      },
      number: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      order: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      board_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      closedAt: {
        type: DataTypes.DATE
      }
    }, { sequelize, tableName: 'cards' })
  }
}

// Card.belongsTo(Board, {
//   as: 'boards',
//   foreignKey: 'board_id'
// })

export default Card
