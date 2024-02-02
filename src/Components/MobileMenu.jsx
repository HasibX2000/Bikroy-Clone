/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import BikroyLogo from "../assets/logo.png";
import Tag from "../assets/tag.png";
import Login from "../assets/smallLogin.png";
import Safe from "../assets/safe.png";
import FAQ from "../assets/faq.png";
import Money from "../assets/money.png";
import Play from "../assets/play.png";
import MoreIcon from "../assets/more.png";
import CloseIcon from "../assets/close.png";

const MobileMenu = ({ show, setShow }) => {
  return (
    <div className="absolute left-0 top-0 w-screen flex lg:hidden transition-all translate-x-0 ease-in-out duration-[3s] overflow-x-hidden">
      <div className="w-2/3 bg-blackBrand h-screen py-3 relative">
        <ul className="p-4">
          <li className="mb-4 ml-2">
            <Link to="/">
              <img src={BikroyLogo} alt="Logo" />
            </Link>
          </li>
          <li className="border-b border-graytwoBrand">
            <Link
              to="/"
              className="flex items-center text-graytwoBrand text-sm  py-3"
            >
              <img src={Tag} alt="All Ads" className="w-8 mr-3" />
              <span>All ads in Bikroy</span>
            </Link>
          </li>

          <li className="border-b border-graytwoBrand">
            <Link
              to="/"
              className="flex items-center text-graytwoBrand text-sm  py-3"
            >
              <img src={Login} alt="Login" className="w-8 mr-3" />
              <span>Login</span>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="flex items-center text-graytwoBrand text-sm  py-3"
            >
              <img src={Safe} alt="safe" className="w-8 mr-3" />
              <span>Stay safe</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center text-graytwoBrand text-sm  py-3"
            >
              <img src={FAQ} alt="FAQ" className="w-8 mr-3" />
              <span>FAQ</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center text-graytwoBrand text-sm  py-3"
            >
              <img src={Money} alt="Fast" className="w-8 mr-3" />
              <span>How to sell fast?</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center text-graytwoBrand text-sm  py-3"
            >
              <img src={Play} alt="Download" className="w-7 mr-3" />
              <span>Download Bikroy</span>
            </Link>
          </li>
          <li className="border-b border-graytwoBrand">
            <Link
              to="/"
              className="flex items-center text-graytwoBrand text-sm  py-3"
            >
              <img src={MoreIcon} alt="More" className="w-8 mr-3" />
              <span>More...</span>
            </Link>
          </li>
        </ul>
        <div className="w-full flex justify-center px-4">
          <button className="text-graytwoBrand border px-3 py-1 rounded-2xl border-graytwoBrand">
            বাংলা
          </button>
        </div>
        <img
          onClick={() => setShow(!show)}
          src={CloseIcon}
          alt="close"
          className="w-8 top-5 right-5 absolute cursor-pointer"
        />
      </div>
      <div className="w-1/3" onClick={() => setShow(!show)}></div>
    </div>
  );
};

export default MobileMenu;
