import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Homepage.jsx";
import AllAds from "../Pages/AllAds.jsx";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ads" element={<AllAds />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
