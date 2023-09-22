const express = require("express");

const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const router = express.Router();

router.use("/users", userRouter.router);
router.use("/", productRouter.router);

module.exports = router;
