import { Model, DataTypes, Sequelize } from 'sequelize'

class User extends Model {
  public readonly id!: number
  public username!: string
  public description!: string
  public access_token?: string

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initScheme (sequelize: Sequelize) {
    this.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING
      },
      access_token: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'users'
    })
  }
}

export default User
