const sequelize = require("../connect");
const { DataTypes } = require("sequelize");

// Create the User model
const Roles = sequelize.define(
  "Roles",
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Roles",
    freezeTableName: true,
    timestamps: false, // Assuming you don't want Sequelize to automatically add the `createdAt` and `updatedAt` fields
  }
);

module.exports = Roles;
