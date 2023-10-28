import { useContext, useEffect } from "react";
import BannerSlider from "../Shop Component/Banner Slider/BannerSlider";
import Product from "../Shop Component/Product/Product";
import { UserCondition } from "../App";

const MyShop = () => {
  const user = useContext(UserCondition);
  const condition = user[1];
  useEffect(()=>  condition(true) , [])
  return (
    <div>
      <BannerSlider></BannerSlider>
      <Product></Product>
    </div>
  );
};

export default MyShop;
