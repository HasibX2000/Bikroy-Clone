import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";

const Homepage = () => {
  return (
    <div className="bg-brand relative">
      <div className="container">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Homepage;
