'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Fights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      knockdowns: {
        type: Sequelize.INTEGER
      },
      attempted_strikes: {
        type: Sequelize.INTEGER
      },
      strikes_landed: {
        type: Sequelize.INTEGER
      },
      sig_attempt: {
        type: Sequelize.INTEGER
      },
      sig_landed: {
        type: Sequelize.INTEGER
      },
      takedowns_attempted: {
        type: Sequelize.INTEGER
      },
      takedowns: {
        type: Sequelize.INTEGER
      },
      submission_attempts: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Fights');
  }
};