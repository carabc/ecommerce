const router = require("express").Router();
const {
  registerUser,
  editUser,
  getUser,
  getUsers,
  deleteUser,
  loginUser,
  logoutUser,
} = require("../controllers/userControllers");
const verifuyJWT = require("../util/auth/verifyJWT");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifuyJWT, logoutUser);

router.get("/", getUsers);
router.get("/:id", getUser);
router.patch("/:id", editUser);
router.delete("/:id", deleteUser);

module.exports = router;
