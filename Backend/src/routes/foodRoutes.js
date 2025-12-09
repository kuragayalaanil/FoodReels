const express = require("express");
const authFoodPartnerMiddleware = require("../middlewares/authFoodPartnerMiddleware.js");
const authUserMiddleware = require("../middlewares/authUserMiddleware.js");
const {
  createFood,
  getFoodItems,
} = require("../controllers/foodController.js");
const router = express.Router();

const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/create-food",
  authFoodPartnerMiddleware,
  upload.single("video"),
  createFood
);

router.get("/foodItems", authUserMiddleware, getFoodItems);
module.exports = router;
