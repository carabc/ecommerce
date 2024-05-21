const Users = require("../util/database/models/Users");
const Roles = require("../util/database/models/Roles");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

/**
 * Route: POST /api/users
 * req.body: { firstname: string, lastname: string, email: string, password: string }
 */
const registerUser = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password, role } = req.body;
    // check to see if all the information is there
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === "" ||
      role === ""
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    // check to see if the email is already in use
    let user = await Users.findOne({
      where: {
        Email: email,
      },
      raw: true,
    });

    if (user) {
      return res.status(400).json({
        message: "Email is already in use",
      });
    }
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // get the role
    let roleID = await Roles.findOne({
      where: {
        Name: role,
      },
      raw: true,
      attributes: ["ID"],
    });

    // create the user
    await Users.create({
      FirstName: firstname,
      LastName: lastname,
      Email: email,
      Password: hashedPassword,
      RoleID: roleID.ID,
    });

    user = await Users.findOne({
      where: {
        Email: email,
      },
      raw: true,
      attributes: ["FirstName", "LastName", "Email", "ID"],
      include: {
        model: Roles,
        attributes: [["Name", "RoleName"]],
      },
    });

    // send the user back with a http only cookie with token and user information
    let token = jwt.sign({ id: user.ID }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
    });

    console.log(user);

    return res.status(201).json({
      message: "User created successfully",
      user: {
        FirstName: user.FirstName,
        LastName: user.LastName,
        Email: user.Email,
        RoleName: user["Role.RoleName"],
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // check to see if all the information is there
    if (email === "" || password === "") {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    // check to see if the user exists
    let user = await Users.findOne({
      where: {
        Email: email,
      },
      raw: true,
      attributes: ["ID", "FirstName", "LastName", "Email", "Password"],
      include: {
        model: Roles,
        attributes: [["Name", "RoleName"]],
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    // check to see if the password matches
    let isMatch = await bcrypt.compare(password, user.Password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    // send the user back with a http only cookie with token and user information
    let token = jwt.sign({ id: user.ID }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
    });

    return res.status(200).json({
      message: "User logged in successfully",
      user: {
        FirstName: user.FirstName,
        LastName: user.LastName,
        Email: user.Email,
        RoleName: user["Role.RoleName"],
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const logoutUser = async (req, res, next) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      message: "User logged out successfully",
      user: null,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const editUser = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "User edited successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const deleteUser = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const getUser = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "User fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await Users.findAll();

    return res.status(200).json({
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  registerUser,
  editUser,
  deleteUser,
  getUser,
  loginUser,
  getUsers,
  logoutUser,
};
