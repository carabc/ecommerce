const router = require("express").Router();
const {
  createProductReview,
  editProductReview,
  deleteProductReview,
  getProductReviews,
} = require("../controllers/reviewControllers");

router.post("/:productId", createProductReview);
router.get("/:productId", getProductReviews);
router.patch("/:productId/:reviewId", editProductReview);
router.delete("/:productId/:reviewId", deleteProductReview);

module.exports = router;
