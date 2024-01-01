'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
 up: async (queryInterface, Sequelize) => {
    const password_admin = await bcrypt.hash('password_admin', 10);
    const password_employees = await bcrypt.hash('password_employees', 10);

   return await queryInterface.bulkInsert('users', [
    {
        user: 'servifacil_admin',
        email: 'servifacil_admin@gmail.com',
        password: password_admin,
        id_rol:1,
        created_at: new Date(),
        updated_at: new Date()
    },{
        user: 'servifacil_employees',
        email: 'servifacil_employees@gmail.com',
        password: password_employees,
        id_rol:2,
        created_at: new Date(),
        updated_at: new Date()
    }
]);
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('users', null, {});
  }
};

