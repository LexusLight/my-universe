module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('users', 'hash', 'password')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('users', 'password', 'hash')
  }
};
