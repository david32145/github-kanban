const { DataTypes, QueryInterface } = require('sequelize')
if (QueryInterface) {
  console.log('In Typescript')
}

module.exports = {
  /**
   * @param {QueryInterface} queryInterface
   */
  up: (queryInterface) => {
    return queryInterface.createTable('users', {
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
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    })
  },

  /**
   * @param {QueryInterface} queryInterface
   */
  down: (queryInterface) => {
    return queryInterface.dropTable('users')
  }
}
