const foodPartnerModel = require("../models/foodPartnerModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerFoodPartner(req, res) {
  const { name, email, password, phone, address, contactName } = req.body;

  //   Validating details
  if (!name || !email || !password || !phone || !address || !contactName) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  //   Checking whether food partner is already existed
  const isAccountAlreadyExists = await foodPartnerModel.findOne({ email });

  //   Validating Food Partner
  if (isAccountAlreadyExists) {
    return res.status(400).json({
      message: "Food partner account already exists",
    });
  }

  //   Hashing Password
  const hashedPassword = await bcrypt.hash(password, 10);

  const foodPartner = await foodPartnerModel.create({
    name,
    email,
    password: hashedPassword,
    phone,
    address,
    contactName,
  });

  //   Token Creation
  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.JWT_SECRET
  );

  //  Assigning token to Cookies
  res.cookie("token", token);

  res.status(200).json({
    message: "Food partner registered sucessfully",
    foodPartner: {
      _id: foodPartner._id,
      email: foodPartner.email,
      name: foodPartner.name,
      address: foodPartner.address,
      contactName: foodPartner.contactName,
      phone: foodPartner.phone,
    },
  });
}

// Login Food Partner
async function loginFoodPartner(req, res) {
  const { email, password } = req.body;

  //   Validating details
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  //   Checking user
  const foodPartner = await foodPartnerModel.findOne({ email });

  //Validating User
  if (!foodPartner) {
    return res.status(400).json({
      message: "No user found",
    });
  }

  //   Validating Password
  const isPasswordMatched = await bcrypt.compare(
    password,
    foodPartner.password
  );

  // Validating User
  if (!isPasswordMatched) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  //   Token Generation
  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "Food partner logged in sucessfully",
    foodPartner: {
      _id: foodPartner._id,
      email: foodPartner.email,
      name: foodPartner.name,
    },
  });
}

// Logout food partner

async function logoutFoodPartner(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "Food parnter logged out sucessfully",
  });
}

module.exports = {
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
};
