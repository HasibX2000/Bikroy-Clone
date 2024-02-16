import React, { useState } from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Category from "../Components/Category";
import TestimonialCard from "../Components/TestimonialCard";
import QuickLinks from "../Components/QuickLinks";
import AboutBikroy from "../Components/AboutBikroy";
import Footer from "../Components/Footer";
import WelcomeWizard from "../Components/WelcomeWizard";
import ThemeContext from "../Contexts/ThemeContext";

const Homepage = () => {
  const [sLogin, setSLogin] = useState(false);
  return (
    <ThemeContext.Provider value={{ sLogin: sLogin, setSLogin: setSLogin }}>
      <div className="relative">
        <div className="bg-brand">
          <div className="container relative">
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
        {sLogin ? <WelcomeWizard /> : null}
      </div>
    </ThemeContext.Provider>
  );
};

export default Homepage;
