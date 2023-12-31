const { cartService } = require("../services");

const cartItem = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId, id, quantity } = req.body; //selectIndex는 size를 의미함
    console.log("body::",req.body)
    cartService.cartItem(userId, productId, id, quantity);
    res.status(200).json({ message: "cart in success" });
  } catch (error) {
    console.log("error", error);
    res.status(error.status).json({ message: error.message });
  }
};

const cartGet = async (req, res) => {
  try {
    const userId = req.userId;
    const data = await cartService.cartGet(userId);
    res.status(200).json({ data: data });
  } catch (error) {
    console.log("error", error);
    res.status(error.status).json({ message: error.message });
  }
};

const cartDelete = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(req.params);
    const { cartId, productId,id } = req.params;
    //카트 정보가 유저아이디 같은지 확인
    await cartService.cartDelete(cartId, productId,id);
    res.status(200).json({ message: "good" });
  } catch (error) {
    console.log("error", error);
    res.status(error.status).json({ message: error.message });
  }
};

const cartFix = async (req, res) => {
  try {
    const { cartId, quantity, productId,id } = req.body;
    const data = await cartService.cartFix(cartId, quantity, productId,id);
    res.status(200).json({ data: data });
  } catch (error) {
    console.log("error", error);
    res.status(error.status).json({ message: error.message });
  }
};
module.exports = { cartItem, cartGet, cartDelete, cartFix };
