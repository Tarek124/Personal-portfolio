import "./navigation.css";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  const [mobileMenu, setMobilemenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef?.current?.contains(event.target)) {
        setMobilemenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  return (
    <motion.div className="2xl:mx-[12rem] mx-2 flex justify-between items-center py-2 ">
      <div className="flex items-center">
        <h1 className="cursor-pointer p-2 font-semibold logoName font-['Staatliches']">
          <Link to="/">T<span className="text-[#8c41f5] mx-[0.4px]">A</span>REK</Link>
        </h1>
      </div>
      <ul className="hidden md:flex gap-4">
        <Link to="/" className="listItem">
          Home
        </Link>
        <Link to="about" className="listItem">
          About
        </Link>
        <Link to="work" className="listItem">
          Review
        </Link>
        <Link to="contact" className="listItem">
          Contact
        </Link>
      </ul>
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
          className="z-50 h-[100%] bg-gradient-to-r from-purple-500 to-pink-500 p-6 w-[40%] fixed top-0 right-0"
        >
          <ul className="my-6 flex flex-col text-[20px]">
            <Link to="/" className="text-white my-4 hover:text-[#ffffffc9]">
              Home
            </Link>
            <Link to="about" className="text-white my-4 hover:text-[#ffffffc9]">
              About
            </Link>
            <Link to="work" className="text-white my-4 hover:text-[#ffffffc9]">
              Review
            </Link>
            <Link
              to="contact"
              className="text-white my-4 hover:text-[#ffffffc9]"
            >
              Contact
            </Link>
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navigation;
