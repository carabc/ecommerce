const sequelize = require("../connect");
const { DataTypes } = require("sequelize");

// Create the User model
const Users = sequelize.define(
  "Users",
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "Users",
    freezeTableName: true,
    timestamps: false, // Assuming you don't want Sequelize to automatically add the `createdAt` and `updatedAt` fields
  }
);

module.exports = Users;
