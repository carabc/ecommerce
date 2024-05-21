const router = require("express").Router();
const {
  createOrder,
  editOrder,
  getOrder,
  getOrders,
  deleteOrder,
} = require("../controllers/orderControllers");

router.post("/", createOrder);
router.get("/", getOrders);
router.patch("/:id", editOrder);
router.get("/:id", getOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
