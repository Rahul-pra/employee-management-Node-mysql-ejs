'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Leave, {
        as: '_userId',
        foreignKey: 'userId',
      })
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    role: {
      type: DataTypes.ENUM('hr', 'employee'),
      defaultValue: 'employee'
     },
     casual_leave:DataTypes.FLOAT,
     sick_leave:DataTypes.FLOAT,
     paid_leave:DataTypes.FLOAT,
     lwp:DataTypes.FLOAT,
    isDeleted:DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};