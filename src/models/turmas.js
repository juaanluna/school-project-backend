const { TURMA_TABLE, ESCOLAS_TABLE } = require("../enums/tables");

module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define(TURMA_TABLE, {
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
    escola: {
      allowNull: false,
      type: DataTypes.INTEGER,
      reference: { model: ESCOLAS_TABLE, key: "id" },
    },
  });

  Turmas.associate = models => {
    Turmas.belongsTo(models.Escolas, {
      as:'escolas',
      foreignKey: 'escola',
      sourceKey: 'id',
      allowNull: false,
    })
    
    Turmas.hasMany(models.Alunos, {
      as: 'alunos',
      foreignKey: 'turma',
      sourceKey: 'id',
    })
  }

  return Turmas;
};
