const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController.js");

userRouter.use("/postuser", userController.postUser);
userRouter.use("/create", userController.addUser);
userRouter.use("/", userController.getUsers);
 
module.exports = userRouter;