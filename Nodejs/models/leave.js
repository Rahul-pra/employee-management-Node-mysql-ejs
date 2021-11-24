'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Leave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Leave.belongsTo(models.User, {
        as: '_userId',
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })
    }
  };
  Leave.init({
    reason: DataTypes.STRING,
    days: DataTypes.FLOAT,
    leave_status: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected'),
      defaultValue: 'pending'
    },
    userId:DataTypes.INTEGER,
    casual_leave:DataTypes.FLOAT,
     sick_leave:DataTypes.FLOAT,
     paid_leave:DataTypes.FLOAT,
     lwp:DataTypes.FLOAT,
     daterange:DataTypes.STRING,
    isDeleted:DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Leave',
  });
  return Leave;
};