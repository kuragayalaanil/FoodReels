const { uploadFile } = require("../services/storageService");
const foodModel = require("../models/foodModel.js");
const { v4: uuid } = require("uuid");

async function createFood(req, res) {
  const fileUplodResult = await uploadFile(req.file.buffer, uuid());

  const foodItem = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    video: fileUplodResult.url,
    foodPartner: req.foodPartner._id,
  });

  res.status(201).json({
    message: "Food Created Sucessfuylly",
    foodItem,
  });
}

async function getFoodItems(req, res) {
  const foodItems = await foodModel.find({});
  res.status(200).json({
    message: "Food items fetched Sucessfully",
    foodItems,
  });
}
module.exports = { createFood, getFoodItems };
