const productService = require("../services/productService");

const showMain = async (req, res) => {
  // const { product_id } = req.body;

  await productService.showMain(req, res);

  res.status(201).json({ message: "show main product" });
};
const showSpecificProduct = async (req, res) => {
  await userService.signUp(req, res);

  res.status(201).json({ message: "SHOW SPECIFIC PRODUCT COMPLETE " });
};

module.exports = {
  showMain,
  showSpecificProduct,
};