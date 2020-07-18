'"use strict"'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "patients", //as in table
      [
        {
          name: "Lee",
          lastName: "woo",
          email: "charles@io.com",
          age: "78",
          diagnostic: "tummy pain",
          doctorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Giarlo",
          lastName: "woo",
          email: "charles@io.com",
          age: "45",
          diagnostic: "Neck pain and cold flu",
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("patients", null, {});
  },
};
