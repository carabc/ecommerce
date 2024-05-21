const createProduct = async (req, res, next) => {
  try {
    console.log(req.user);
    return res.status(200).json({
      message: "Product created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const editProduct = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Product edited successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const getProduct = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Product fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getProducts = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Products fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createProduct,
  editProduct,
  deleteProduct,
  getProduct,
  getProducts,
};
