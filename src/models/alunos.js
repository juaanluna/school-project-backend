const { TURMA_TABLE, ALUNOS_TABLE } = require("../enums/tables");

module.exports = (sequelize, DataTypes) => {
  const Alunos = sequelize.define(ALUNOS_TABLE, {
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
    turma: {
      allowNull: false,
      type: DataTypes.INTEGER,
      reference: { model: TURMA_TABLE, key: "id" },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });

  Alunos.associate = models => {
    Alunos.belongsTo(models.Turmas, {
      as: 'turmas',
      foreignKey: 'turma',
      sourceKey: 'id',
      allowNull: false,
    })
  }

  return Alunos;
};
