const mongoose = require("mongoose");

async function connectDB() {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database Connected Sucessfully");
    })
    .catch((err) => {
      console.log("Mongo DB Connection Error", err);
    });
}

module.exports = connectDB;
