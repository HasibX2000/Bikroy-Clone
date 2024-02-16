import React, { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";
import PostAd from "../assets/postad.svg";
import FavAd from "../assets/favouritead.svg";
import ManageAd from "../assets/managead.svg";
import Button from "./Button";

const WelcomeAbout = () => {
  const { sLogin, setSLogin } = useContext(ThemeContext);

  return (
    <div className="w-full md:border-r md:pr-2">
      {/* Left  */}
      <div className="mb-8">
        <h2 className="text-xl font-bold">Welcome to Bikroy</h2>
        <p>Log in to manage your account.</p>
      </div>
      <div>
        <ul className="flex flex-col gap-5">
          <li className="flex items-center gap-3">
            <img src={PostAd} alt="PostAd" />
            Start posting your own ads.
          </li>
          <li className="flex items-center gap-3">
            <img src={FavAd} alt="FavAd" />
            Mark ads as favorite and view them later.
          </li>
          <li className="flex items-center gap-3">
            <img src={ManageAd} alt="ManageAd" />
            View and manage your ads at your convenience.
          </li>
        </ul>
      </div>
      <span onClick={() => setSLogin(!sLogin)}>
        <Button text="Close" classes="mt-5" />
      </span>
    </div>
  );
};

export default WelcomeAbout;
