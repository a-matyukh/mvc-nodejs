const express = require("express");
const homeRouter = express.Router();
const homeController = require("../controllers/homeController.js");
 
homeRouter.get("/about", homeController.about);
homeRouter.get("/", homeController.index);
 
module.exports = homeRouter;