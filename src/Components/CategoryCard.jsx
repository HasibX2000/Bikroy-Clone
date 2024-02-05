/* eslint-disable react/prop-types */
import React from "react";

const CategoryCard = ({ category }) => {
  const { title, ads, icon } = category;
  return (
    <div className=" flex flex-col shrink-0 md:flex-row items-center gap-3 ">
      <div>
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <div className=" text-center md:text-left">
        <h2 className="font-normal text-md text-[#2f3432]">{title}</h2>
        <p className="text-xs font-light text-[#2f3432]">{ads} ads</p>
      </div>
    </div>
  );
};

export default CategoryCard;
