'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      role:{
        type: Sequelize.ENUM,
        values: ['hr', 'employee'],
        default: 'employee'
      },
      casual_leave:{
        type: Sequelize.FLOAT,
        default: 6
      },
      sick_leave:{
        type: Sequelize.FLOAT,
        default: 6
      },
      paid_leave:{
        type: Sequelize.FLOAT,
        default: 6
      },
      lwp:{
        type: Sequelize.FLOAT,
        default: 0
      },
      isDeleted:{
        type: Sequelize.BOOLEAN,
        default: false
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};