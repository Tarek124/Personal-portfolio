/* eslint-disable react/no-unescaped-entities */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import img from "./DSC_0664.png"
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="block" id="about">
      <div className="py-12 md:py-16 lg:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20"
        >
          <motion.div
            style={{
              transform: isInView ? "none" : "translateX(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="min-h-[330px] overflow-hidden  rounded-md"
          >
            <img
              src={img}
              alt=""
            />
          </motion.div>
          <motion.div
            style={{
              transform: isInView ? "none" : "translateX(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="flex-col flex items-start gap-2"
          >
            <div className="">
              <div className="flex-col flex items-start">
                <div className="flex-col flex items-start gap-2">
                  <div className="flex grid-cols-2 items-center bg-[#c4c4c4] px-3 py-1 rounded-md">
                    <div className="h-2 w-2 min-w-[8px] bg-black rounded-full"></div>
                    <div className="text-sm sm:text-sm ml-2">
                      Available for work
                    </div>
                  </div>
                  <p className="flex-col text-[#808080] text-sm sm:text-xl">
                    Front-End Web Developer
                  </p>
                  <h1 className="font-bold text-4xl md:text-6xl mb-5 md:mb-6 lg:mb-8">
                    Abdullah Al Tarek
                  </h1>
                  <p className="flex-col text-[#808080] text-sm sm:text-xl">
                    Are you in search of a talented React developer to bring
                    your web projects to life? Look no further! I am a seasoned
                    React developer with a passion for creating exceptional web
                    applications and user interfaces.
                  </p>
                </div>
                <div className="mb-8 mt-8 h-px w-full bg-black"></div>
                <div className="flex-col flex items-start gap-2 mb-5 md:mb-6 lg:mb-8">
                  <p className="flex-col text-[#808080] max-[479px]:text-sm">
                    <strong>Education: </strong>I am doing Diploma Engineering
                    on Computer Science Technology
                  </p>
                  <p className="flex-col text-[#808080] max-[479px]:text-sm">
                    <strong>Location:</strong> Feni Computer Institute, Feni,
                    Bangladesh
                  </p>
                </div>
                <div className="flex items-center justify-start gap-4 flex-wrap mb-6 md:mb-10 lg:mb-12">
                  <a
                    href="#"
                    className="flex max-w-full items-center justify-center gap-2.5 p-0 text-center text-sm font-bold uppercase tracking-[0.2px] text-black"
                  >
                    <div>All Achievements </div>
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b1465d46adaf3f26099edf_arrow.svg"
                      alt=""
                      className="inline-block"
                    />
                  </a>
                </div>
                <div className="flex items-center justify-start gap-4 flex-wrap">
                  <a
                    href="#"
                    className="flex-row flex max-w-full items-center justify-center gap-4 bg-black px-6 py-3 text-center font-semibold text-white"
                  >
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b147043fe6ab404e65635e_Envelope.svg"
                      alt=""
                      className="inline-block"
                    />
                    <div>Email Me</div>
                  </a>
                  <a
                    href="#"
                    className="flex-row flex max-w-full items-center justify-center gap-4 border border-solid border-black px-6 py-3 text-center font-semibold text-black"
                  >
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b14704c8616ad7ba080fe0_Note.svg"
                      alt=""
                      className="inline-block"
                    ></img>
                    <div>Resume</div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
