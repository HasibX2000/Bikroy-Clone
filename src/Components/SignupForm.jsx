import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const SignupForm = () => {
  return (
    <div className="w-full md:pl-7">
      <div>
        <form action="" className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-xs text-blackBrand">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className=" border border-graytwoBrand px-2 py-1 rounded focus:outline-1"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs text-blackBrand">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className=" border border-graytwoBrand px-2 py-1 rounded focus:outline-1"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-xs text-blackBrand">
              Password
            </label>
            <input
              type="password"
              placeholder="Password (at least 5 characters)"
              className=" border border-graytwoBrand px-2 py-1 rounded focus:outline-1"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPass" className="text-xs text-blackBrand">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className=" border border-graytwoBrand px-2 py-1 rounded focus:outline-1"
              required
            />
          </div>
          <Button type="submit" text="Sign Up" classes="bg-brand text-white" />
        </form>
        <p className="text-xs text-center text-blackBrand my-3">
          By signing up for an account you agree to our
          <Link className="block text-blue-500"> Terms and Conditions</Link>
        </p>
        <p className="text-sm text-center text-blackBrand my-3 font-bold">
          Already have an account?
        </p>
        <Button classes="bg-[#FAFAFA] text-blackBrand" text="Login" />
      </div>
    </div>
  );
};

export default SignupForm;
