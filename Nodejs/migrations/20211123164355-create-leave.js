'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Leaves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reason: {
        type: Sequelize.STRING
      },
      days: {
        type: Sequelize.FLOAT
      },
      leave_status: {
        type: Sequelize.ENUM,
        values: ['pending', 'approved', 'rejected'],
        default: 'pending'
      },
      userId:{
        type: Sequelize.INTEGER
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
      daterange:{
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Leaves');
  }
};