import React from "react";
import LocationIcon from "../assets/location.png";
import SearchIcon from "../assets/searchicon.svg";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col justify-end items-center gap-4 py-10">
      <div className="flex items-center bg-brandTwo px-3 py-1.5 rounded-[20px]">
        <img src={LocationIcon} alt="location" className="w-6" />
        <span className="text-white text-md">All of bangladesh</span>
      </div>

      <div className="flex items-center w-full lg:w-5/6 bg-white rounded-full p-1">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="What are you looking for?"
          className="w-full px-4 focus:outline-none text-md"
        />
        <div className="flex justify-center items-center bg-yellowBrand rounded-full p-4">
          <img src={SearchIcon} alt="SearchIcon" className="w-6" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
