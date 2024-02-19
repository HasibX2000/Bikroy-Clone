import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const EmailLogin = () => {
  return (
    <div className="w-full md:pl-7">
      {/* Main  */}
      <div>
        <form action="" className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <Button type="submit" text="Login" classes="bg-brand text-white" />
        </form>
        <Link className="text-sm text-blue-500 text-center py-3 block">
          Forgot Password?
        </Link>

        <p className="text-sm text-center text-blackBrand my-3 font-bold">
          Don&rsquo;t have an account yet?
        </p>
        <Button classes="bg-[#FAFAFA] text-blackBrand" text="Sign Up" />
      </div>
      {/* Main  */}
    </div>
  );
};

export default EmailLogin;
