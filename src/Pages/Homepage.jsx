import React, { useContext } from "react";
import Hero from "../Components/Hero";
import Category from "../Components/Category";
import TestimonialCard from "../Components/TestimonialCard";
import QuickLinks from "../Components/QuickLinks";
import AboutBikroy from "../Components/AboutBikroy";
import WelcomeWizard from "../Components/WelcomeWizard";
import ThemeContext from "../Contexts/ThemeContext";

const Homepage = () => {
  const { loginbox, setLoginbox } = useContext(ThemeContext);
  return (
    <div>
      <div className="bg-brand">
        <Hero />
      </div>
      <div className="container">
        <span className="p-5 mt-16 block"></span>
        <Category />
        <TestimonialCard />
        <QuickLinks />
        <AboutBikroy />
      </div>
      {loginbox ? <WelcomeWizard /> : null}
    </div>
  );
};

export default Homepage;
