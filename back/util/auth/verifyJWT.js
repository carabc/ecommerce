const jwt = require("jsonwebtoken");
const Users = require("../database/models/Users");
const Roles = require("../database/models/Roles");

const verifyJWT = async (req, res, next) => {
  // get the token from the cookie in the request headers
  let token = "";
  if (req.headers.cookie && req.headers.cookie.startsWith("token")) {
    token = req.headers.cookie.split("=")[1];
  }

  if (token === "") {
    return res.status(401).json({
      message: "Unauthenticated",
    });
  }

  // verify the token
  let decoded = jwt.verify(token, process.env.JWT_SECRET);

  // find the user in the database using decoded.email
  let user = await Users.findOne({
    where: {
      ID: decoded.id,
    },
    attributes: ["Email", "FirstName", "LastName"],
    include: {
      model: Roles,
      attributes: [["Name", "RoleName"]],
    },
    raw: true,
  });

  if (!user) {
    return res.status(401).json({
      message: "Unauthenticated",
    });
  }

  // attach the user to the request object
  req.user = {
    Email: user.Email,
    FirstName: user.FirstName,
    LastName: user.LastName,
    RoleName: user["Role.RoleName"],
  };

  next();
};

module.exports = verifyJWT;
