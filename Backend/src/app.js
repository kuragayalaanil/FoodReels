const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes.js");
const foodPartnerRoutes = require("./routes/foodPartnerRoutes.js");
const foodItems = require("./routes/foodRoutes.js");


const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/food", foodPartnerRoutes);
app.use("/api/food", foodItems);

module.exports = app;
