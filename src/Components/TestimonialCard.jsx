import React from "react";
import MoneyBag from "../assets/moneybag.png";
import BikroyJobs from "../assets/bikroyjobs.png";

const TestimonialCard = () => {
  return (
    <div className="py-5">
      <div className="grid md:grid-cols-2 md:border dark:border-white md:shadow-[0_0_15px_#ddd] gap-10 md:gap-0 md:rounded-xl">
        <div className="md:border-r flex items-center p-8 gap-8 shadow-[0_0_15px_#ddd] md:shadow-none rounded-xl md:rounded-r-none">
          <div>
            <img src={MoneyBag} alt="bag" className="w-48" />
          </div>
          <div className="flex flex-col justify-between items-start gap-2">
            <h2 className="text-2xl font-bold text-[#2f3432]">
              Start making money!
            </h2>
            <p className="text-sm text-[#2f3432]">
              Do you have something to sell? Post your first ad and start making
              money!
            </p>
            <button className="bg-yellowBrand px-4 py-2 rounded-full flex  items-center">
              <svg viewBox="0 0 18 18" className="w-5 mr-2">
                <path
                  d="M9 1C4.6 1 1 4.6 1 9s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4.6 9.3h-3.4v3.4H7.9v-3.4H4.4V8h3.4V4.6h2.3V8h3.4l.1 2.3z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#673500"
                ></path>
              </svg>
              <span className="font-bold text-sm text-grayBrand">
                Post your ad for free
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start gap-2 p-8 shadow-[0_0_15px_#ddd] md:shadow-none rounded-xl  md:rounded-l-none">
          <img src={BikroyJobs} alt="BikroyJobs" className="w-1/2" />
          <p>
            Looking to hire or get hired in Bangladesh ? Get access to 800k+ CVs
            or browse through 800+ job vacancies!
          </p>

          <button className="bg-blue-600 px-10 py-2 rounded-full flex  items-center">
            <span className="font-bold text-sm text-white">Explore more</span>
            <svg viewBox="0 0 16 16" className="w-5 ml-2">
              <path
                d="M8 0a8 8 0 1 0 0 16A8 8 0 1 0 8 0zM6.467 12l-.934-.933L8.6 8 5.533 4.933 6.467 4l4 4-4 4z"
                fillRule="evenodd"
                fill="#FFFFFF"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
