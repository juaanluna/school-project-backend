const { USERS_TABLE, ESCOLAS_TABLE } = require("../enums/tables");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(USERS_TABLE, {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      recoveryCode: {
        allowNull: true,
        type: DataTypes.STRING,
      },
  });

  return Users;
};
