import { useContext, useState } from "react";
import { UserCondition } from "../../App";
import DeleveryLocation from "../DeleveryLocation/DeleveryLocation";

const Shipment = () => {
  const item = useContext(UserCondition);
  const [openLocationModal, setOpenLocationModal] = useState(false);
  const [cartAdded, setCartAdded] = useState(item[4]);
  const handleRemove = (p) => {
    let updatedCart = cartAdded.filter((item) => item.id !== p.id);
    setCartAdded(updatedCart);
  };
  let itemTotal = 0;
  let DeliveryFee = 134;
  let Discount = 34;
  return (
    <div className="bg-[#F4F4F4] flex justify-center">
      <DeleveryLocation
        open={openLocationModal}
        close={() => setOpenLocationModal(false)}
      />
      <div className="sm:w-[80%] w-[90%] py-4 flex lg:flex-row flex-col ">
        <div className="w-full lg:w-[65%] lg:mx-3 rounded">
          <div className="w-full flex items-center justify-center bg-white my-1 p-2">
            <div
              onClick={() => {
                setOpenLocationModal(true);
              }}
              className="w-full flex items-center justify-center h-[22px] my-2 text-[#007787] cursor-pointer"
            >
              <span className="mr-1 text-[30px] mb-1">+</span>
              <p>Add New Delivery Address</p>
            </div>{" "}
          </div>
          {cartAdded.map((e) => {
            itemTotal = itemTotal + e.price;
            return (
              <div key={e.id} className="bg-white my-3 rounded p-4 text-[13px]">
                <p>{e.seller}</p>
                <div className="flex md:flex-row flex-col my-2">
                  <div className="cursor-pointer flex">
                    <img
                      src={e.img}
                      className="lg:w-[10%] md:w-[20%] sm:w-[30%] w-[50%] cursor-pointer"
                      alt=""
                    />
                    <div className="px-2">
                      <h1>{e.name}</h1>
                      <p className="text-[#868686] text-[10px]">{e.seller}</p>
                      <div className="text-[#007787] flex justify-center items-center py-1 border text-[10px]">
                        FREE DELEVERY
                      </div>
                    </div>
                  </div>
                  <div className="flex md:my-0 my-3">
                    {" "}
                    <div className="mx-1 md:mx-8">TK.{e.price}</div>
                    <p
                      onClick={() => {
                        handleRemove(e);
                      }}
                      className="mx-6 cursor-pointer hover:text-red-500"
                    >
                      DELETE
                    </p>
                  </div>
                </div>
                <div className="h-[1px] bg-slate-200 my-4"></div>

                <div className="border border-[#007787]  2xl:w-[25%] flex flex-col p-2 rounded-md">
                  <div className="flex text-[#007787]">
                    Standard Delivery{" "}
                    <div className="w-[1.5px] bg-[#007787] mx-2"></div>
                    FREE
                  </div>
                  <p>Receive by 4 Days</p>
                </div>

                <div className="flex justify-between w-full md:w-[50%] p-2 border border-[#d4d4d4] rounded-md mt-4 ">
                  <p>Store Voucher</p>
                  <p className="mr-4 cursor-pointer">Get Voucher</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-[13px] w-full lg:w-[35%] bg-white rounded p-4">
          <p className="">Discount and Payment</p>
          <div className="flex my-2 justify-between">
            <p>Item Voucher</p>
            <p className="cursor-pointer">No Applicable Voucher</p>
          </div>{" "}
          <div className="flex my-4 items-center justify-between">
            <p>Promo code</p>
            <p className="cursor-pointer text-[#b6b6b6] text-[11px] mr-4">
              Enter Store/Daraz Code
            </p>
          </div>
          <div className="flex my-4 border items-center">
            <input
              className="mr-3 outline-none p-2 w-[70%]"
              type="text"
              placeholder="Enter Store/Daraz Code"
            />
            <div className="w-[1.2px] bg-slate-200 h-[25px]"></div>
            <button className="text-[#25A5D8] px-3 w-[30%]">Confirm</button>
          </div>
          <div className="h-[1px] bg-slate-200 my-6"></div>
          <div>
            <p className="font-semibold">Order Summary</p>
            <div className="flex justify-between my-2">
              <div>Items Total</div>
              <div className="mr-4">Tk. {itemTotal}</div>
            </div>
            <div className="flex justify-between my-2">
              <div>Delivery Fee</div>
              <div className="mr-4">Tk. {itemTotal == 0 ? 0 : DeliveryFee}</div>
            </div>
            <div className="flex justify-between my-2">
              <div>Delivery Discount</div>
              <div className="mr-4">Tk. {itemTotal == 0 ? 0 : Discount}</div>
            </div>
            <div className="flex justify-between my-2">
              <div>Total Payment</div>
              <div className="mr-4">
                Tk. {itemTotal == 0 ? 0 : itemTotal + DeliveryFee - Discount}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="py-2 rounded-md text-white mt-4 bg-[#F55606] w-full">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
