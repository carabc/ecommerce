const router = require("express").Router();
const {
  createProduct,
  editProduct,
  getProduct,
  getProducts,
  deleteProduct,
} = require("../controllers/productControllers");
const verifyJWT = require("../util/auth/verifyJWT");
const authorize = require("../util/auth/authorize");

router.post("/", verifyJWT, createProduct);
router.get("/", getProducts);
router.patch("/:id", editProduct);
router.get("/:id", getProduct);
router.delete("/:id", verifyJWT, authorize("Admin"), deleteProduct);

module.exports = router;
