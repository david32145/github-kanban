import { Model, DataTypes, Sequelize } from 'sequelize'

class Repository extends Model {
  public repository_id!: number
  public repository_url!: string
  public name!: string
  public owner!: string
  public user_id!: number
  public description?: string

  static initScheme (sequelize: Sequelize) {
    this.init({
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
        allowNull: false
      },
      description: {
        type: DataTypes.STRING
      }
    }, {
      sequelize,
      tableName: 'repositories'
    })
  }

  public static associate (sequelize: Sequelize) {
    this.hasMany(sequelize.model('Board'), {
      as: 'boards',
      foreignKey: 'repository_id'
    })
  }
}

export default Repository
