import React from "react";
import WelcomeAbout from "./WelcomeAbout";
import BasicLogin from "./BasicLogin";

const WelcomeWizard = () => {
  return (
    <div className="bg-opBlack w-screen md:h-screen overflow-hidden fixed top-0 flex justify-center items-center ">
      <div className=" flex md:rounded-md border-2 bg-white p-7 w-screen md:w-[50rem] flex-col md:flex-row">
        <WelcomeAbout />
        <BasicLogin />
      </div>
    </div>
  );
};

export default WelcomeWizard;
