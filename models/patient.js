'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      patient.hasMany(models.doctor) //a patient can have many doctors 
    }
  };
  patient.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.STRING,
    email: DataTypes.STRING,
    diagnostic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'patient',
  });
  return patient;
};