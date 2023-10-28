/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { UserCondition } from "../../App";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const [AllCheck, setChecked] = useState("");
  const [afterFilter, setafterFilter] = useState([]);
  const item = useContext(UserCondition);
  const cartAdded = item[4];
 

  useEffect(() => {
    let filterItem = [...new Set(cartAdded)];
    setafterFilter(filterItem);
  }, []);

  let subtotal = 0;
  const handleDeleteBtn = () => {
    if (AllCheck) {
      setafterFilter([]);
    }
  };
  const handleRemove = (p) => {
    let updatedCart = afterFilter.filter((item) => item.id !== p.id);
    setafterFilter(updatedCart);
  };

  return (
    <div className="bg-[#F4F4F4] flex justify-center">
      <div className="sm:w-[80%] w-[90%] py-4 flex lg:flex-row flex-col ">
        <div className="w-full lg:w-[65%] lg:mx-3 ">
          <div className="flex justify-between items-center bg-white">
            <div className="flex items-center pl-4">
              <input
                type="checkbox"
                className="accent-pink-500 cursor-pointer "
                onClick={() => {
                  if (AllCheck == "") {
                    setChecked("checked");
                  } else {
                    setChecked("");
                  }
                }}
              />
              <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900">
                SELECT ALL
              </label>
            </div>{" "}
            <p
              onClick={handleDeleteBtn}
              className="pr-4 hover:text-red-500 cursor-pointer"
            >
              DELETE
            </p>
          </div>
          {afterFilter.map((p) => {
            const value = p.quantity == 0 ? 1 : p.quantity;
            subtotal = p.price * value + subtotal;

            return (
              <CartItem
                key={p.id}
                p={p}
                AllCheck={AllCheck}
                handleRemove={handleRemove}
              ></CartItem>
            );
          })}
        </div>
        <div className="w-full lg:w-[35%] bg-white rounded">
          <h1 className="text-[20px] p-3">Order Summary</h1>
          <div className="flex justify-between px-3 py-1">
            <p>Subtotal ({afterFilter.length} items)</p>
            <p>৳ {subtotal}</p>
          </div>
          <div className="flex px-3 my-4">
            <input
              className="mr-3 border p-2 w-[70%]"
              type="text"
              placeholder="Enter Voucher Code"
            />
            <button className="bg-[#25A5D8] hover:bg-[#398eaf] text-white px-3 w-[30%]">
              APPLY
            </button>
          </div>
          <div className="flex justify-between px-3 my-4">
            <h1>Total</h1>
            <p className="text-[18px] text-orange-500">৳ {subtotal}</p>
          </div>
          <div className="px-3 pb-6">
            <button className="bg-orange-500 w-full py-2 text-white  ">
              PROCEED TO CHECKOUT ({afterFilter.length})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
