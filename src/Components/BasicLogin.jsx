import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const BasicLogin = () => {
  return (
    <div className="w-full md:pl-7">
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
  );
};

export default BasicLogin;
