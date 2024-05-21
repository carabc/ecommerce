require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const colors = require("colors");
const sequelize = require("./util/database/connect");
const associateModels = require("./util/database/associations/associations");

// test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully".bgWhite.green.bold);
    // make sequelize associations
    associateModels();
  })
  .catch((error) => {
    console.log(`Database connection failed: ${error}`.bgRed.white.bold);
  });

// create express app
const app = express();
// define cors
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// import the routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const orderRoutes = require("./routes/orderRoutes");

// mount the routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/orders", orderRoutes);

// define the port
const PORT = process.env.PORT || 5000;

//start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgGreen.white.bold);
});
