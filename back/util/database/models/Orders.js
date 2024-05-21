const sequelize = require("../connect");
const { DataTypes } = require("sequelize");

const Orders = sequelize.define(
  "Orders",
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // Assumes you have a Users model defined
        key: "ID",
      },
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Products", // Assumes you have a Products model defined
        key: "ID",
      },
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TotalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "Orders", // Explicitly specify the table name
    timestamps: false, // Assuming you don't want Sequelize to automatically add the `createdAt` and `updatedAt` fields
  }
);

module.exports = Orders;
