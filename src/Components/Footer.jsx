import React from "react";
import PlayIconMobile from "../assets/playstore.png";
import PlayIcon from "../assets/playstore.svg";
import AppIconMobile from "../assets/appstore.png";
import AppIcon from "../assets/appstore.svg";
import fbIcon from "../assets/fbicon.png";
import Logo from "../assets/footerlogo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t border-brand my-2">
      <div className="container mx-auto hidden md:block">
        <div className=" flex justify-between pt-4 pb-8 mb-4 border-b border-graytwoBrand">
          <div className="basis-1/2">
            <h3 className="text-blackBrand text-sm font-bold mb-2">
              Download our app
            </h3>
            <div className="grid grid-cols-2 pr-10 mb-3">
              <img src={PlayIcon} alt="PlayIcon" className="w-full" />
              <img src={AppIcon} alt="AppIcon" className="w-full" />
            </div>
            <h3 className="text-blackBrand text-sm font-bold my-2">
              Connect with
            </h3>
            <Link className="flex items-center">
              <img src={fbIcon} className="w-[35px]" />{" "}
              <span className="text-blue-800 font-bold text-sm">
                Like us on facebook
              </span>
            </Link>
            <h3 className="text-blackBrand text-sm font-bold my-2">
              Other countries
            </h3>
            <Link className="text-blue-500 text-sm">Sri Lanka</Link>
          </div>
          <div className="basis-1/4">
            <h3 className="text-blackBrand text-sm font-bold mb-2">
              More From Bikroy
            </h3>
            <ul>
              <li>
                <Link className="text-blue-500 text-sm">Sell Fast</Link>
              </li>
              <li>
                <Link className="text-blue-500 text-sm">Membership</Link>
              </li>
              <li>
                <Link className="text-blue-500 text-sm">Banner Ads</Link>
              </li>
              <li>
                <Link className="text-blue-500 text-sm">Ad Promotions</Link>
              </li>
              <li>
                <Link className="text-blue-500 text-sm">BikesGuide</Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/4">
            <h3 className="text-blackBrand text-sm font-bold mb-2">
              Help & Support
            </h3>
            <ul>
              <li>
                <Link className="text-blue-500 text-sm">FAQ</Link>
              </li>
              <li>
                <Link className="text-blue-500 text-sm">Stay safe</Link>
              </li>
              <li>
                <Link className="text-blue-500 text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/4">
            <h3 className="text-blackBrand text-sm font-bold mb-2">
              Follow Bikroy
            </h3>
            <ul>
              <li>
                <Link className="text-blue-500 text-sm">Blog</Link>
              </li>
              <li>
                <Link className="text-blue-500 text-sm">Facebook</Link>
              </li>
              <li>
                <Link className="text-blue-500 text-sm">Twitter</Link>
              </li>
              <li>
                <Link className="text-blue-500 text-sm">Youtube</Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/4">
            {" "}
            <h3 className="text-blackBrand text-sm font-bold mb-2">
              About Bikroy
            </h3>
            <ul>
              <li>
                <Link className="text-blue-500 text-sm">About Us</Link>
              </li>
              <li>
                <Link className="text-blue-500 text-sm">Careers</Link>
              </li>
              <li>
                <Link className="text-blue-500 text-sm">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link className="text-blue-500 text-sm">Privacy policy</Link>
              </li>{" "}
              <li>
                <Link className="text-blue-500 text-sm">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mb-8">
          <p className="text-sm">Copyright © Saltside Technologies</p>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className=" block md:hidden">
        <div className="flex flex-col justify-center text-center">
          <div className="p-2 border-b border-graytwoBrand">
            <h3 className="text-blackBrand text-sm font-bold mb-2">
              Download our app
            </h3>
            <div className="flex items-center justify-center mb-3">
              <img src={PlayIconMobile} alt="PlayIcon" className="w-1/4" />
              <img src={AppIconMobile} alt="AppIcon" className="w-1/4" />
            </div>
          </div>
          <div className="p-2 border-b border-graytwoBrand">
            <h3 className="text-blackBrand text-sm font-bold my-2">
              Connect with
            </h3>
            <Link className="flex items-center justify-center">
              <img src={fbIcon} className="w-[35px]" />{" "}
              <span className="text-blue-800 font-bold text-sm">
                Like us on facebook
              </span>
            </Link>
          </div>

          <div className="p-4 border-b border-graytwoBrand">
            <Link className="text-blue-500 text-sm">Help & Support </Link>|
            <Link className="text-blue-500 text-sm">More</Link>
          </div>
          <div className="p-4 border-b border-graytwoBrand">
            <button className=" w-fit text-blue-500 text-sm border rounded py-1 px-2 border-blue-500 ">
              বাংলা
            </button>
          </div>
          <h3 className="text-blackBrand text-sm font-bold my-2">
            Other countries
          </h3>
          <Link className="text-blue-500 text-sm">Sri Lanka</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
