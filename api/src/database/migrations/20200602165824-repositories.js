const { DataTypes, QueryInterface } = require('sequelize')
if (QueryInterface) {
  console.log('In Typescript')
}

module.exports = {
  /**
   * @param {QueryInterface} queryInterface
   */
  up: (queryInterface) => {
    return queryInterface.createTable('repositories', {
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
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      description: {
        type: DataTypes.STRING
      }
    })
  },

  /**
   * @param {QueryInterface} queryInterface
   */
  down: (queryInterface) => {
    return queryInterface.dropTable('reoositories')
  }
}
