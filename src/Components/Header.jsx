/* eslint-disable react/prop-types */
import React, { useState } from "react";
import BikroyLogo from "../assets/logo.png";
import ChatIcon from "../assets/chat.png";
import LoginIcon from "../assets/login.png";
import BarsIcon from "../assets/bars.png";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = ({ showLogin, setShowLogin }) => {
  const [show, setShow] = useState(false);
  return (
    <nav className="flex justify-between py-2.5 ">
      <div className="flex gap-4 items-center">
        <img
          src={BarsIcon}
          alt="menu"
          className="w-8 mb-1 md:hidden"
          onClick={() => setShow(!show)}
        />
        <Link>
          <img src={BikroyLogo} alt="Bikroy Logo" className="mr-4" />
        </Link>
        <Link>
          <span className="text-white font-bold text-sm hidden md:block">
            All ads
          </span>
        </Link>
        <button className="text-white text-sm border rounded py-1 px-2 border-green-800 hidden md:block">
          বাংলা
        </button>
      </div>
      <div className="flex gap-5">
        <Link className="flex gap-2 items-center text-white text-sm">
          <img className="w-8" src={ChatIcon} alt="Chat Icon" />{" "}
          <span className="hidden text-xs md:block">Chat</span>
        </Link>
        <p
          onClick={() => setShowLogin(!showLogin)}
          className="flex gap-2 items-center text-white text-sm cursor-pointer"
        >
          <img className="w-8" src={LoginIcon} alt="Login Icon" />{" "}
          <span className="hidden text-xs md:block">Login</span>
        </p>
        <button className="uppercase bg-yellowBrand px-3 text-sm rounded font-semibold text-grayBrand py-2.5 hidden md:block">
          Post your ad
        </button>
      </div>
      {show && <MobileMenu show={show} setShow={setShow} />}
    </nav>
  );
};

export default Header;
