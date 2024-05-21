const Users = require("../models/Users");
const Products = require("../models/Products");
const Reviews = require("../models/Reviews");
const Orders = require("../models/Orders");
const Roles = require("../models/Roles");

const associateModels = () => {
  try {
    console.log("Associating models...".bgWhite.blue.bold);
    // users and orders
    Users.hasMany(Orders, {
      foreignKey: "UserID",
      sourceKey: "ID",
    });

    Orders.belongsTo(Users);

    // associate users and reviews
    Users.hasMany(Reviews, {
      foreignKey: "UserID",
      sourceKey: "ID",
    });
    Reviews.belongsTo(Users);

    // associate products and reviews
    Products.hasMany(Reviews, {
      foreignKey: "ProductID",
      sourceKey: "ID",
    });
    Reviews.belongsTo(Products);

    // associate Roles and Users
    Roles.hasMany(Users, {
      foreignKey: "RoleID",
      sourceKey: "ID",
    });
    Users.belongsTo(Roles);

    console.log("Models associated successfully".bgWhite.green.bold);
  } catch (error) {
    console.log(error.bgBlack.red);
  }
};

module.exports = associateModels;
