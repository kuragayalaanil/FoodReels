const express = require("express");
const {
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
} = require("../controllers/foodPartnerController");
const router = express.Router();

router.post("/food-partner/register", registerFoodPartner);
router.post("/food-partner/login", loginFoodPartner);
router.get("/food-partner/logout", logoutFoodPartner);

module.exports = router