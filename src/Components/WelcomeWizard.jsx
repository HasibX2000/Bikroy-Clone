import React from "react";
import PostAd from "../assets/postad.svg";
import FavAd from "../assets/favouritead.svg";
import ManageAd from "../assets/managead.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const WelcomeWizard = () => {
  return (
    <div className="bg-opBlack w-screen h-screen overflow-hidden fixed top-0 flex justify-center items-center ">
      <div className=" flex rounded-md border-2 bg-white p-7 w-[50rem]">
        <div className="w-full border-r pr-2">
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
        <div className="w-full pl-7">
          {/* Main  */}
          <div>
            <form action="" className="flex flex-col gap-2">
              <label htmlFor="number" className="font-bold text-md">
                Continue with mobile number & OTP
              </label>
              <div className="w-full flex">
                <select name="" id="" className="border  w-fit py-1 px-2">
                  <option value="+880">+880</option>
                </select>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Enter your mobile number"
                  className="border  w-full py-1 px-2"
                />
              </div>
              <Button text="Continue" classes="bg-brand text-white" />
            </form>
            <h2 className="text-center font-bold text-graytwoBrand">OR</h2>
            <div>
              <Button
                text="Continue With Google"
                icon="google"
                classes="bg-white text-blackBrand"
              />
              <Button
                text="Continue With Facebook"
                icon="facebook"
                classes="bg-facebookBlue text-white"
              />
              <Button
                text="Continue With Email"
                icon="envelope"
                classes="bg-brand text-white"
              />
            </div>
            <p className="text-sm text-center text-blackBrand my-3">
              By signing up for an account you agree to our
              <Link className="block text-blue-500"> Terms and Conditions</Link>
            </p>
          </div>
          {/* Main  */}
        </div>
      </div>
    </div>
  );
};

export default WelcomeWizard;
