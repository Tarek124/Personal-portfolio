import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserCondition } from "../../App";
import "./TopNav";

const TopNav = () => {
  const [style, setStyle] = useState({
    a: "px-3 font-['Poppins'] py-1 bg-white ",
    b: "px-3 font-['Poppins'] py-1",
  });
  const user = useContext(UserCondition);
  const condition = user[1],
    logedInUser = user[2];
  const icon = logedInUser.photo ?  <img className="w-[30px] rounded-full cursor-pointer" src={logedInUser.photo} alt="" /> : "Log Out"
  // console.log(condition);
  return (
    <div className="h-[30px]  text-[12px] sm:text-[16px] flex justify-center">
      <div className="flex w-full lg:w-[65%] bg-[#eeeeee] justify-between px-8">
        <ul className="flex items-center">
          <Link
            to="portfolio"
            onClick={() => {
              const newStyle = { ...style };
              newStyle.a = "px-3 py-3 sm:py-1 bg-white font-['Poppins']";
              newStyle.b = "px-3 font-['Poppins']";
              setStyle(newStyle);
              // console.log(newStyle);
              condition(false);
            }}
            className={style.a}
          >
            PORTFOLIO
          </Link>
          <Link
            to="shop"
            onClick={() => {
              const newStyle = { ...style };
              newStyle.b = "px-3 py-3 sm:py-1 bg-white font-['Poppins']";
              newStyle.a = "px-3 font-['Poppins']";
              setStyle(newStyle);
              condition(true);
            }}
            className={style.b}
          >
            MY SHOP
          </Link>
        </ul>
        <ul className="flex items-center">
          {logedInUser.userSignedIn ? (
           icon
          ) : (
            <Link
              to="login"
              className="cursor-pointer font-['Roboto'] pr-1 hover:text-[#4d4d4d]"
            >
              Log In
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
