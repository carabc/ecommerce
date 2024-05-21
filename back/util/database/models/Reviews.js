const sequelize = require("../connect");
const { DataTypes } = require("sequelize");

const Reviews = sequelize.define(
  "Reviews",
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Products", // This is a reference to another model
        key: "ID", // This is the column name of the referenced model
      },
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // This is a reference to another model
        key: "ID", // This is the column name of the referenced model
      },
    },
    Rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Review: {
      type: DataTypes.TEXT, // TEXT is used for long text strings, equivalent to varchar(MAX)
      allowNull: false,
    },
    CreatedDate: {
      type: DataTypes.DATE, // smalldatetime can be represented as DATE in Sequelize
      allowNull: false,
    },
  },
  {
    // Model options go here
    tableName: "Reviews", // Explicitly specify the table name
    timestamps: false, // Do not automatically create updatedAt and createdAt timestamps
  }
);

module.exports = Reviews;
