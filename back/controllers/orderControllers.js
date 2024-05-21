const createOrder = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Order created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const editOrder = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Order edited successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const deleteOrder = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Order deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const getOrder = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Order fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getOrders = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Orders fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createOrder,
  editOrder,
  deleteOrder,
  getOrder,
  getOrders,
};
