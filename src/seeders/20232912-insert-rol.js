'use strict';

module.exports = {
 up: async (queryInterface, Sequelize) => {
   return await queryInterface.bulkInsert('rol', [
    {
        rol: "Admin",
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        rol: "Employees",
        created_at: new Date(),
        updated_at: new Date()
    }
]);
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('rol', null, {});
  }
};
