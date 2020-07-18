"use strict";
const bcrypt = require('bcrypt')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "doctors", //as in table
      [
        {
          name: "Charles",
          lastName: "Hurstuin",
          email: "charles@io.com",
          password: bcrypt.hashSync("457", 10),
          specialty: "surgeon",
          phone: 897605,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Louis",
          lastName: "kurtijn",
          email: "louis@tui.com",
          password: bcrypt.hashSync("221", 10),
          specialty: "cancer",
          phone: 897605,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("doctors", null, {});
  },
};
