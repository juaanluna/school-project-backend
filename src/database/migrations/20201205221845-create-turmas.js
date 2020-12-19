const { TURMA_TABLE, ESCOLAS_TABLE } = require("../../enums/tables");

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(TURMA_TABLE, {
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
    return queryInterface.dropTable(TURMA_TABLE);
  },
};
