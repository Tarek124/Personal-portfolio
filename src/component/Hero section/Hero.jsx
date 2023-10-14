/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import img from "./IMG-20230721-WA0099.jpg";
import "./hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="Version1 2xl:mx-[12rem] mx-2 flex  px-6 py-[42px] justify-center items-center gap-[68px] flex-col md:flex-row">
      <div className="HeaderContent grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">
        <div className="TitleSubtitle self-stretch h-[202px] flex-col justify-start items-start gap-6 flex">
          <div className="BrandingImageMaking self-stretch text-zinc-800 text-xl font-semibold font-['Epilogue'] leading-[30px]">
            Front-End Developer{" "}
          </div>
          <div className="VisualDesigner self-stretch bg-gradient-to-r from-[#009379] to-orange-500 text-transparent text-[68px] bg-clip-text font-semibold font-['Epilogue']">
            Hi, I'm Tarek
          </div>
          <div className="ThisIsATemplateFigmaFileTurnedIntoCodeUsingAnimaLearnMoreAtAnimaappCom self-stretch text-zinc-800 text-[17px] font-normal font-['Epilogue'] leading-[27px]">
            From Feni, Bangldesh
          </div>
        </div>
        <Link to="/contact" className="Button cursor-pointer px-16 py-6 bg-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="Contact text-center text-white text-xl font-semibold font-['Epilogue'] leading-[30px]">
            Contact
          </div>
        </Link>
      </div>
      <div className="sm:h-[500px] sm:w-[500px] color flex items-center justify-center  relative">
        <motion.div
         initial={{ opacity: 0, y: -100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           duration: 2,
           delay: 0.5,
           ease: [0, 0.71, 0.2, 1.01],
         }} className="h-[450px] overflow-hidden">
          <img
            className="Headerimage1 grow shrink basis-0 2xl:h-auto w-[300px]"
            src={img}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="sm:block hidden span1 w-[110px] h-[110px] absolute bg-[#fd6756] right-20 top-0"
        ></motion.div>
        <motion.div     initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }} className="sm:block hidden span2 w-[110px] h-[110px] absolute bg-[#009379] left-10 bottom-12"></motion.div>
      </div>
    </div>
  );
};

export default Hero;

// Front end Developer
// hi , i'm Tarek
// From feni, Bangladesh
