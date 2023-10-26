import { useParams, useNavigate  } from "react-router-dom";
import data from "../../fakeData/products.json";
import { useState } from "react";

const ItemReview = () => {
  const [count, setcount] = useState(1);
  const { productkey } = useParams();
  const product = data.find((p) => p.id === productkey);
  const history = useNavigate()
  const handleOrder = ()=>{
    history("/shipment")
  }
  console.log(product);
  return (
    <div className="bg-[#EFF0F5] flex justify-center">
      <div className="bg-white lg:w-[60%] w-[100%] m-8 flex lg:flex-row flex-col">
        <div className="lg:w-[50%] p-2">
          <img src={product.img} alt="" />
        </div>
        <div className="lg:w-[50%] p-4">
          <h1 className="text-[24px]">{product.name}</h1>

          <div className="flex items-center gap-1 my-1">
            <div className="flex items-center space-x-1">
              <svg
                className="w-3 h-3 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className={
                  product.ratings > 1
                    ? "w-3 h-3 text-yellow-300"
                    : "w-3 h-3 text-gray-300 dark:text-gray-500"
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
                  product.ratings > 2
                    ? "w-3 h-3 text-yellow-300"
                    : "w-3 h-3 text-gray-300 dark:text-gray-500"
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
                  product.ratings > 3
                    ? "w-3 h-3 text-yellow-300"
                    : "w-3 h-3 text-gray-300 dark:text-gray-500"
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
                  product.ratings > 4
                    ? "w-3 h-3 text-yellow-300"
                    : "w-3 h-3 text-gray-300 dark:text-gray-500"
                }
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <a href="*" className="text-[12px] text-[#1A9CB7] hover:underline">
              {product.ratingsCount} Rating
            </a>
          </div>
          <div className="text-[#747373] my-2 flex items-center">
            Brand:{" "}
            <a href="*" className="text-[#1A9CB7] hover:underline">
              {product.seller}
            </a>
            <div className="h-[14px] w-[1px] bg-slate-300 mx-1"></div>
            <p className="cursor-pointer text-[#1A9CB7] hover:underline">
              more product from {product.seller}
            </p>
          </div>
          <div className="w-[100%] h-[1px] bg-slate-200 my-4"></div>
          <h1 className="text-[26px] text-[#F85606] px-2 mb-3">
            ৳ {product.price}
          </h1>
          <div className="flex justify-between mt-4">
            <h1 className="text-[#6d6c6c]">Quantity</h1>
            <div className="flex">
              <div
                onClick={() => {
                  if (count > 1) {
                    setcount(count - 1);
                  }
                }}
                className={
                  count > 1
                    ? "cursor-pointer hover:bg-slate-200 bg-slate-100 hover:text-white text-slate-600 text-[20px] w-[30px] flex justify-center items-center"
                    : "cursor-not-allowed hover:bg-slate-200 bg-slate-100 hover:text-white text-slate-600 text-[20px] w-[30px] flex justify-center items-center"
                }
              >
                -
              </div>
              <div className="text-[18px] flex justify-center items-center w-[32px]">
                {count}
              </div>
              <div
                onClick={() => {
                  setcount(count + 1);
                }}
                className="cursor-pointer hover:bg-slate-200 bg-slate-100 hover:text-white text-slate-600 text-[20px] w-[30px] flex justify-center items-center"
              >
                +
              </div>
            </div>
          </div>
          <div className="flex my-8">
            <button onClick={handleOrder} className="w-[50%] mr-2 rounded py-2 px-4 text-white text-[18px] bg-[#2ABBEB] hover:bg-[#39b0d8] transition-colors">
              Buy Now
            </button>{" "}
            <button className="w-[50%] mr-2 rounded py-2 px-4 text-white text-[18px] bg-[#F57224] hover:bg-[#da7439] transition-colors">
              Add to Cart
            </button>
          </div>
          <h1 className="text-slate-500 my-2">Cash on Delivery Available</h1>
          <p>Free Delivery 26 Oct - 30 Oct 3 - 7 day(s)</p>
          <div className="w-[100%] h-[1px] bg-slate-200 my-4"></div>
          <p className="text-slate-500 my-2 text-[14px]">service</p>

          <h1>
            7 Days Returns
            <p className="text-slate-500 ">Change of mind is not applicable</p>
          </h1>
          <h1 className="my-2">Warranty not available</h1>
        </div>
      </div>
    </div>
  );
};

export default ItemReview;
