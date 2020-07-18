"use strict";
//SEPARATE MIGRATION FOR RELATIONS OR FOREIGN KEYS 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("patients", "doctorId", {
      type: Sequelize.INTEGER,
      references: {
        model: "doctors", //always the name here of model plural 
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("onDuties", "doctorId", {
      type: Sequelize.INTEGER,
      references: {
        model: "doctors",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE", //Cascade because onDuties is a join table 
    });

    await queryInterface.addColumn("onDuties", "nurseId", {
      type: Sequelize.INTEGER,
      references: {
        model: "nurses",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("patients", "doctorId");
    await queryInterface.removeColumn("onDuties", "doctorId");
    await queryInterface.removeColumn("onDuties", "nurseId");
  },
};