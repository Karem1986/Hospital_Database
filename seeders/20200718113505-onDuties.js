'"use strict"'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "onDuties", //as in table
      [
        {
          date: "Saturday 10/08/20",
          doctorId: 1,
          nurseId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "Tuesday 10/08/20",
          doctorId: 2,
          nurseId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("onDuties", null, {});
  },
};
