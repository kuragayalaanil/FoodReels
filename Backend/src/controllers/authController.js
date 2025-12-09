const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User
async function registerUser(req, res) {
  const { fullName, email, password } = req.body;

  //   Validating a user Details
  if (!fullName || !email || !password) {
    return res.status(204).json({
      message: "All fields are required",
    });
  }
  //   Checking a user whether existed or not
  const isUseAlreadyExists = await userModel.findOne({ email });

  //   Validating a user
  if (isUseAlreadyExists) {
    return res.status(400).json({
      message: "User already Existed",
    });
  }

  //   Password Hashing
  const hashedPassword = await bcrypt.hash(password, 10);

  //   Creating new User
  const user = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
  });

  //   Creating a token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  //   Setting up a cookie
  res.cookie("token", token);

  res.status(201).json({
    message: "User Created Sucessfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.email,
    },
  });
}

// Login User
async function loginUser(req, res) {
  const { email, password } = req.body;

  //   Validating Details
  if (!email || !password) {
    return res.status(401).json({
      message: "All Fields are Required",
    });
  }

  //   Checking User
  const user = await userModel.findOne({ email });

  //   Validating a user
  if (!user) {
    return res.status(400).json({
      message: "No User Found",
    });
  }

  //   Comparing Password
  const isPasswordMatched = await bcrypt.compare(password, user.password);

  //  Validating Password
  if (!isPasswordMatched) {
    return res.status(400).json({
      message: "Invalid Credentials",
    });
  }

  //   Token Generation
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  //   Setting up a cookie
  res.cookie("token", token);

  res.status(200).json({
    message: "User logged in Sucessfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

// Logout User
function logoutUser(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "User logged out Sucessfully",
  });
}

module.exports = { registerUser, loginUser, logoutUser };
