'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsTo(models.Rol, {
        foreignKey: 'id_rol',
      });
    }
  }

  Users.init({
    user: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    id_rol: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Users',
    underscored: true,
  });

  return Users;
};
