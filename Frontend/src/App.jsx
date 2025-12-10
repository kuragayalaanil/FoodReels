import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegister from "./pages/auth/userRegister";
import UserLogin from "./pages/auth/UserLogin";
import FoodPartnerRegister from "./pages/auth/FoodPartnerRegister";
import FoodPartnerLogin from "./pages/auth/FoodPartnerLogin";
import ChooseRegister from "./pages/auth/ChooseRegister";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<ChooseRegister />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route
          path="/food-partner/register"
          element={<FoodPartnerRegister />}
        />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
