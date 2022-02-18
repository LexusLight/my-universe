//простейшая миграция с cli
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('users', 'password', 'hash')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('users', 'hash', 'password')
  }
};
