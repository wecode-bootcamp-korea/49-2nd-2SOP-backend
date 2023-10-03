const { myDataSource } = require("./dataSource");

// const findCartIndex = async (user_id) => {
//   const userId = await myDataSource.query(`
//     SELECT id
//     FROM user_id = ${user_id}
// `);
//   return userId;
// };
// 카트 번호는 user id와 동일하다.
// 회원가입시 유저한명에 카트가 생긴다.
const addInCart = async (userId, productId, price) => {
  await myDataSource.query(`
  INSERT INTO carts (user_id)
  SELECT id
  FROM users
  WHERE id = ${userId};  
    `);
  // const cart_id = findCartIndex(req.user_id);
  await myDataSource.query(`
    INSERT INTO cart_items (product_id,cart_is,price,quntity) VALUE
    (${productId}, ${cart_id}, ${price}, 1);
    
    `);
};

const showCart = async () => {
  await myDataSource.query(`
    SELECT 
    cart_items.cart_id,
    cart_items.price,
    cart_items.quntity,
    cart_items.product_id,
    cart.id FROM
    cart.id = cart_items.cart_id;
    `);
};

const deleteCartsDao = async (productId) => {
  //     try {
  //         await myDataSource.query(`
  //         SELETE FROM cart WHERE product_id =??` , [productId]
  //         );
  //     } catch (err) {
  //         const error = new Error ("Error Dao");
  //         error.statusCode = 500;
  //         throw error;
  //     }
};

const cartDataFix = async (cartId, cartData) => {
  await myDataSource.query(`
  SELECT`);
};

module.exports = {
  findCartIndex,
  showCart,
  addInCart,
  deleteCartsDao,
  cartDataFix,
};
