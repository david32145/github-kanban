const { DataTypes, QueryInterface } = require('sequelize')
if (QueryInterface) {
  console.log('In Typescript')
}

module.exports = {
  /**
   * @param {QueryInterface} queryInterface
   */
  up: (queryInterface) => {
    return queryInterface.createTable('cards', {
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
      order: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      board_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: {
            tableName: 'boards'
          },
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      closedAt: {
        type: DataTypes.DATE
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
    return queryInterface.dropTable('cards')
  }
}
