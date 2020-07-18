'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class onDuty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  onDuty.init({
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'onDuty',
  });
  return onDuty;
};