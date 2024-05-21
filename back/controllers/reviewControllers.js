const createProductReview = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Review for product created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const editProductReview = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Review for product edited successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const deleteProductReview = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Review for product deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getProductReviews = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Reviews for product fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createProductReview,
  editProductReview,
  deleteProductReview,
  getProductReviews,
};
