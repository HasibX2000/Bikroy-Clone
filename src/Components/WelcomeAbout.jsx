import React from "react";
import PostAd from "../assets/postad.svg";
import FavAd from "../assets/favouritead.svg";
import ManageAd from "../assets/managead.svg";

const WelcomeAbout = () => {
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
    </div>
  );
};

export default WelcomeAbout;
