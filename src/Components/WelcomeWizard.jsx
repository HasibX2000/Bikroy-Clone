import React, { useContext } from "react";
import WelcomeAbout from "./WelcomeAbout";
import BasicLogin from "./BasicLogin";
import ThemeContext from "../Contexts/ThemeContext";
import EmailLogin from "./EmailLogin";
import SignupForm from "./SignupForm";

const WelcomeWizard = () => {
  const { loginbox, setLoginbox } = useContext(ThemeContext);
  return (
    <div className="relative flex justify-center items-center">
      <div
        className="bg-opBlack w-screen md:h-screen overflow-hidden fixed top-0 "
        onClick={() => setLoginbox(!loginbox)}
      ></div>

      <div className="flex md:rounded-md border-2 bg-white p-7 w-screen md:w-[50rem] flex-col md:flex-row fixed top-20  ">
        <WelcomeAbout />
        {/* <BasicLogin /> */}
        {/* <EmailLogin /> */}
        <SignupForm />
      </div>
    </div>
  );
};

export default WelcomeWizard;
