const { ALUNOS_TABLE, TURMA_TABLE } = require("../../enums/tables");

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(ALUNOS_TABLE, {
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
  },

  down: (queryInterface) => {
    return queryInterface.dropTable(ALUNOS_TABLE);
  },
};
