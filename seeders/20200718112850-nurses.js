'"use strict"'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "nurses", //as in table
      [
        {
          name: "Karla",
          lastName: "woo",
          email: "charles@io.com",
          phone: 897605,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tomas",
          lastName: "luous",
          email: "louis@tui.com",
          phone: 897605,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("nurses", null, {});
  },
};

