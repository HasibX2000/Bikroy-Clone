import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Category from "../Components/Category";
import TestimonialCard from "../Components/TestimonialCard";
import QuickLinks from "../Components/QuickLinks";
import AboutBikroy from "../Components/AboutBikroy";
import Footer from "../Components/Footer";

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
        <AboutBikroy />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
