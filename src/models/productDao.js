const dataSource = require("./dataSource");
const productController = require("../controllers/productController");

const showMain = async (req, res) => {
  await dataSource.query(`SELECT * FROM PRODUCT, PRODUCT_IMAGE`);
};

const showSpecificProduct = async (productId) => {
  await dataSource.query(
    `SELECT * FROM PRODUCT, PRODUCT_IMAGE WHERE PRODUCT.ID = [$productId] `
  );
};