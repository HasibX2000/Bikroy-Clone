import React from "react";
import CategoryData from "../Database/Category.json";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-md">Browse items by category</h2>
        <p className="md:hidden text-blue-500 text-sm">See all</p>
      </div>
      <div className=" md:p-5 flex  justify-start  md:grid md:grid-cols-4 gap-8 md:gap-14 overflow-x-hidden">
        {CategoryData.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Category;
