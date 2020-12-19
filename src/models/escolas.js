const Sequelize = require('sequelize')
const { ESCOLAS_TABLE } = require("../enums/tables");

module.exports = (sequelize, DataTypes) => {
  const Escolas = sequelize.define(ESCOLAS_TABLE, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    cnpj: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  });

  Escolas.associate = models => {
    Escolas.hasMany(models.Turmas, {
      as: 'turmas',
      foreignKey: 'escola',
      sourceKey: 'id',
    })
  }

  return Escolas;
};
