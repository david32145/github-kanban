import { Model, DataTypes, Sequelize } from 'sequelize'

class Card extends Model {
  public issue_id!: number
  public issue_url!: string
  public title!: string
  public description?: string
  public number!: number
  public order!: number
  public board_id!: number
  public readonly createdAt!: Date
  public readonly updateAt!: Date
  public closedAt?: Date

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

  public static associate (sequelize: Sequelize) {
    this.belongsTo(sequelize.model('Board'), {
      as: 'boards',
      foreignKey: 'board_id'
    })
  }
}

export default Card
