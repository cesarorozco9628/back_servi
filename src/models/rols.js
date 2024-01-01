'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Rol extends Model {
    static associate(models) {
      Rol.hasMany(models.Users, {
        foreignKey: 'id_rol',
      });
    }
  }

  Rol.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rol: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Rol',
    underscored: true,
  });

  return Rol;
};