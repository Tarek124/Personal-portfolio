import { useState } from "react";
/* eslint-disable react/prop-types */
const CartItem = (props) => {
  const { p, AllCheck, handleRemove } = props;
  const [count, setcount] = useState(1);
  p.quantity = count;
  p.totalPrice = p.price * count

  return (
    p && (
      <div className="bg-white flex justify-around sm:justify-start my-3 p-1 sm:p-2 items-center ">
        <input
          type="checkbox"
          className="lg:flex hidden w-[5%] accent-pink-500 cursor-pointer mx-2"
          checked={AllCheck}
        />
        <div className="mx-1 sm:mx-3 flex w-[70%]">
          <img className="w-[120px] rounded" src={p.img} alt="" />
          <div>
            <p className="p-2 text-[18px]">{p.name}</p>
            <div className="flex px-2">
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
        </div>
        <div className="w-[15%] sm:w-[20%] flex flex-col items-center ">
          <h1 className="sm:text-[26px] text-[#F85606] px-2 mb-3">
            {" "}
            ৳ {p.price * count}
          </h1>
          <p
            onClick={() => {handleRemove(p)}}
            className="pr-4 hover:text-red-500 cursor-pointer"
          >
            Remove
          </p>
        </div>
      </div>
    )
  );
};

export default CartItem;
