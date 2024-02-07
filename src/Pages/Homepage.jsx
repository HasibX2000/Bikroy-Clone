import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Category from "../Components/Category";
import TestimonialCard from "../Components/TestimonialCard";
import QuickLinks from "../Components/QuickLinks";

const Homepage = () => {
  return (
    <div className="relative">
      <div className="bg-brand">
        <div className="container">
          <Header />
          <Hero />
        </div>
      </div>
      <div className="container">
        <span className="p-5 mt-16 block"></span>
        <Category />
        <TestimonialCard />
        <QuickLinks />
      </div>
    </div>
  );
};

export default Homepage;
