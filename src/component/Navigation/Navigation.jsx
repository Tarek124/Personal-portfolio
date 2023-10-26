import "./navigation.css";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { UserCondition } from "../../App";
import ShopNav from "./ShopNav/ShopNav";

const Navigation = () => {
  const [mobileMenu, setMobilemenu] = useState(false);
  const menuRef = useRef();
  const user = useContext(UserCondition);
  const condition = user[0];
  // console.log(condition);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef?.current?.contains(event.target)) {
        setMobilemenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  return (

    <div className="2xl:mx-[12rem] mx-2 flex justify-between items-center py-2 ">
      <div className="flex items-center">
        <h1 className="cursor-pointer p-2 font-semibold logoName font-['Staatliches']">
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            T<span className="text-[#8c41f5] mx-[0.4px]">A</span>REK
          </Link>
        </h1>
      </div>
      {condition ? 
           <ShopNav></ShopNav>
          : 
          <ul className="hidden md:flex gap-4">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500} className="listItem">
            Home
          </Link>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="listItem">
           About
          </Link>
          <Link to="work" spy={true} smooth={true} offset={50} duration={500} className="listItem">
           Work
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="listItem">
            Contact
          </Link>
        </ul>/* {condition ? "Order" : "Home"} */}




      {/* Hamburger icon  */}
      {mobileMenu === false && (
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
              to={condition ? "order" : "home"} spy={true} smooth={true} offset={50} duration={500}
              className=" my-4 hover:text-[#272727]"
            >
              {condition ? "Order" : "Home"}
            </Link>
            <Link
              to={condition ? "inventory" : "about"} spy={true} smooth={true} offset={50} duration={500}
              className=" my-4 hover:text-[#272727]"
            >
              {condition ? "Inventory" : "About"}
            </Link>
            <Link
              to={condition ? "cart" : "work"} spy={true} smooth={true} offset={50} duration={500}
              className=" my-4 hover:text-[#272727]"
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
              to="contact" spy={true} smooth={true} offset={50} duration={500}
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
