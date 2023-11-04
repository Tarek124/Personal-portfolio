import "./navigation.css";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { UserCondition } from "../../App";
import ShopNav from "./ShopNav/ShopNav";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [mobileMenu, setMobilemenu] = useState(false);
  const menuRef = useRef();
  const user = useContext(UserCondition);
  const condition = user[0];
  const cartLength = user[6];
  // console.log(condition);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef?.current?.contains(event.target)) {
        setMobilemenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  const navigate = useNavigate();
  const handleNavigate = (e) => {
    navigate(e);
  };
  return (
    <div className="2xl:mx-[12rem] mx-2 flex justify-between items-center py-2 ">
      <div className="flex items-center">
        <h1 className="cursor-pointer p-2 font-semibold logoName font-['Staatliches']">
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            T<span className="text-[#8c41f5] mx-[0.4px]">A</span>REK
          </Link>
        </h1>
      </div>
      {
        condition ? (
          <ShopNav></ShopNav>
        ) : (
          <ul className="hidden md:flex gap-4">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="listItem"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="listItem"
            >
              About
            </Link>
            <Link
              to="work"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="listItem"
            >
              Work
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="listItem"
            >
              Contact
            </Link>
          </ul>
        ) /* {condition ? "Order" : "Home"} */
      }

      {/* Hamburger icon  */}
      {mobileMenu === false && (
        <div className="flex items-center md:hidden">
          <li
            onClick={(e) => {
              handleNavigate("/cart");
              e.preventDefault();
            }}
            className="font-sans block lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700"
          >
            <a href="" role="button" className="relative flex">
              <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
              <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {cartLength}
              </span>
            </a>
          </li>
          <div
            onClick={() => {
              setMobilemenu(!mobileMenu);
            }}
            className="md:hidden h-4 mx-4 "
          >
            <div className="w-5 h-[1.1px] my-1 bg-black"></div>
            <div className="w-5 h-[1.1px] my-1 bg-black"></div>
            <div className="w-5 h-[1.1px] my-1 bg-black"></div>
          </div>
        </div>
      )}
      {/* open Hambuger menu */}
      {mobileMenu && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          ref={menuRef}
          onBlur={() => setMobilemenu(!mobileMenu)}
          className="z-50 h-[100%] bg-white text-[#0f0f0f] p-6 w-[40%] fixed top-0 right-2"
        >
          <ul className="my-6 flex flex-col text-[20px]">
            <Link
              to={condition ? "/shop" : "home"}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=" my-4 hover:text-[#272727]"
              onClick={() => {
                condition && handleNavigate("/shop");
              }}
            >
              Home
            </Link>
            <Link
              to={condition ? "/inventory" : "about"}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=" my-4 hover:text-[#272727]"
              onClick={() => {
                condition && handleNavigate("/inventory");
              }}
            >
              {condition ? "Inventory" : "About"}
            </Link>
            <Link
              to={condition ? "cart" : "work"}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=" my-4 hover:text-[#272727]"
              onClick={() => {
                condition && handleNavigate("/cart");
              }}
            >
              {condition ? (
                <div className="flex items-center">
                  <h1>Cart</h1>
                  {/* <img className="w-4 p-x1" src={img} alt="" /> */}
                </div>
              ) : (
                "Work"
              )}
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="my-4 hover:text-[#272727]"
            >
              Contact
            </Link>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navigation;
