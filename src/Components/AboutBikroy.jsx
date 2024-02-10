import React, { useState } from "react";

const AboutBikroy = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="mt-7">
      <h2 className="text-md font-bold text-blackBrand mb-2">
        About Bikroy, The Largest Marketplace in Bangladesh!
      </h2>
      <p className="text-sm text-blackBrand">
        Bikroy is a platform on which you can buy and sell almost everything! We
        help people buy and sell vehicles, find properties, get jobs or recruit
        employees, buy and sell mobile phones, purchase electronic products, and
        much more. With more than 50 categories our solutions are built to be
        safe, smart, and convenient for our customers.
      </p>

      {show && (
        <div>
          <h3 className="text-md font-bold text-blackBrand mt-5 mb-2">
            Buy, Sell, Rent, or Find Jobs in Bangladesh
          </h3>
          <p className="text-sm text-blackBrand">
            Every month, hundreds of millions of people use Bikroy to find and
            sell mobiles, musical instruments, cars, houses, jobs, and more
            through classified ads. To sell new items or sell used items
            quickly, Bikroy offers Ad Promotion features.
            <br />
            <br />
            Bikroy has an extensive collection of new and used goods, making it
            easier for users to quickly buy new items or buy used items at their
            desired location. To buy online, users easily can reach their
            desired products through filtering options.
            <br />
            <br />
            For businesses, Bikroy has introduced the ‘Membership’ service,
            which helps them expand their businesses online. Members will have
            their virtual shop with a Bikroy URL with free promotions of their
            goods. With different membership categories, businesses can flourish
            as verified members and authorized dealers.
            <br />
            <br />
            With millions of unique monthly visitors, thousands of interested
            buyers, and thousands of active dealers on our platform, Bikroy is
            the Largest Marketplace in Bangladesh.
          </p>

          <h2 className="text-md font-bold text-blackBrand mt-5 mb-2">
            Benefits of Trading at Bikroy
          </h2>

          <p className="text-sm text-blackBrand">
            At Bikroy, we make it so easy to connect people to buy, sell or rent
            goods and services as other classified sites.
          </p>

          <ul className="mt-3 text-sm text-blackBrand list-disc pl-5 leading-6">
            <li>
              Fast & Easy Experience: Navigated buying and selling experience in
              Bangladesh which is simpler, faster, and easier. Shop and sell on
              the go and get your desired products in just a few clicks.
            </li>
            <li>
              Post Ads Free: As a free classified website, we offer free ad
              posting features in many categories for the convenience of the
              users based on their locations.
            </li>
            <li>
              Safe & Secure Shopping: We have listed our verified members and
              authorized dealers to create a safe shopping experience for our
              users.
            </li>
          </ul>
        </div>
      )}

      {show ? (
        <div
          onClick={() => setShow(!show)}
          className="text-blackBrand bg-white text-md flex items-center justify-center md:justify-start gap-2 mt-5"
        >
          Show less <span className="bi bi-chevron-up "></span>
        </div>
      ) : (
        <div
          onClick={() => setShow(!show)}
          className="text-blackBrand bg-white text-md flex items-center justify-center md:justify-start gap-2 mt-5"
        >
          Show More <span className="bi bi-chevron-down "></span>
        </div>
      )}
    </div>
  );
};

export default AboutBikroy;
