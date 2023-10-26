import { useState } from "react";
import data from "../../fakeData/products.json";
import "./product.css";
import { Link } from "react-router-dom";


const Product = () => {
  const [brandStyle, setBrandStyle] = useState(false);
  const product = data;
  const PromotionServices = [
    "Free delevery",
    " Best Price Guaranteed",
    " Authentic Brands",
    "Daraz Verified",
    "Cash On Delivery",
  ];
  const category = [
    "Wig & Hair Extensions & Pads",
    "Hair Accessories",
    "Hair Brushes & Combs",
    "Hair Styling",
    "Shampoo",
    "Hair Treatments",
    "Hair Oils",
    "Hair Coloring",
    "Hair Conditioner",
    "Hair Care Gifts & Value Sets",
    "Hair Care",
  ];
  const brand = [
    "Toppik",
    "VATIKA",
    "Mamaearth",
    "Xpel",
    "TOVCHOCOLOR",
    "Sunsilk",
    "Sevich",
    "Ronshin",
    "Loreal",
    "Dove",
    "Head & Shoulders",
    "OGX",
    "Wazih Organic",
    "Parachte Naturale",
    "myyeah",
    "SatRong Herbals",
    "Shadin Organic",
    "Rongon Herbals",
    "Streax",
    "Pantene",
  ];
//   console.log(product);
  return (
    <div className="flex justify-center w-[80%] mx-auto my-4">
      <div className="w-[20%] mt-2 fliterDiv lg:flex flex-col hidden">
        <div className="lg:flex flex-col hidden">
          <h1 className="w-[100%] font-semibold  text-[22px] my-3">Filter </h1>
          <h1 className="text-[18px] my-1">Promotion & Services</h1>
          <div className="h-[1px] bg-[#e0e0e0] my-2 w-[80%]"></div>
          {PromotionServices.map((i) => {
            return (
              <a
                href="*"
                key={i}
                className="my-1 h-[36px] px-3 py-2 text-[#696868] text-[13px] w-[200px] shadow rounded-xl filterBtn"
              >
                {i}{" "}
              </a>
            );
          })}
        </div>
        <div className="lg:flex flex-col hidden my-5">
          <h1 className="text-[18px] my-1">Category</h1>
          <div className="h-[1px] bg-[#e0e0e0] my-2 w-[80%]"></div>
          <div className="flex flex-col">
            {category.map((i) => {
              return (
                <a
                  href="*"
                  className="text-[#696868] my-1 hover:text-[#F75224]"
                  key={i}
                >
                  {i}
                </a>
              );
            })}
          </div>
        </div>
        <div className="lg:flex flex-col hidden">
          <h1 className="text-[18px] my-1">Brand</h1>
          <div className="h-[1px] bg-[#e0e0e0] my-2 w-[80%]"></div>
          <div className={brandStyle ? "h-[400px] overflow-y-auto" : "h-[200px] overflow-hidden"}>
            {brand.map((i) => {
              return (
                <div key={i} className="checkbox-wrapper-47">
                  <input type="checkbox" name="cb" id="cb-47" />
                  <label className="text-[#696868]" htmlFor="cb-47">
                    {i}
                  </label>
                </div>
              );
            })}
          </div>
          <p
            className="text-[#F75224] cursor-pointer"
            onClick={() => {
            setBrandStyle(!brandStyle)
            }}
          >
            see more...
          </p>
        </div>
      </div>
      <div className="lg:w-[80%] w-full">
        <h1 className="text-[22px] mx-3 mt-2 px-1">Men Collection</h1>
        <p className="mx-3 text-[18px] my-2 px-1 text-[#696868]">
          {product.length} Item found{" "}
        </p>
        <div className="flex flex-wrap justify-center p-1">
          {product.map((pd) => {
            return (
              <Link
                to={"/product/"+pd.id}
                key={pd.id}
                className="hover:shadow lg:w-[215px] w-[250px] mx-3 mb-6 lg:mb-4 lg:shadow-none shadow"
              >
                <img src={pd.img} alt="" />
                <div className="p-2">
                  <div className="overflow-hidden h-[16px] mb-2">
                    <a
                      href=""
                      className=" font-semibold text-[14px] text-blue-400"
                    >
                      {pd.name}
                    </a>
                  </div>
                  <h2 className="text-[#F75224]">$ {pd.price}</h2>

                  <div className="flex items-center gap-1 my-1">
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className={
                          pd.ratings > 1
                            ? "w-4 h-4 text-yellow-300"
                            : "w-4 h-4 text-gray-300 dark:text-gray-500"
                        }
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className={
                          pd.ratings > 2
                            ? "w-4 h-4 text-yellow-300"
                            : "w-4 h-4 text-gray-300 dark:text-gray-500"
                        }
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className={
                          pd.ratings > 3
                            ? "w-4 h-4 text-yellow-300"
                            : "w-4 h-4 text-gray-300 dark:text-gray-500"
                        }
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className={
                          pd.ratings > 4
                            ? "w-4 h-4 text-yellow-300"
                            : "w-4 h-4 text-gray-300 dark:text-gray-500"
                        }
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <p className="text-[10px] text-[#757474]">
                      ({pd.ratingsCount})
                    </p>
                  </div>
                  <p> Stock {pd.stock}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
