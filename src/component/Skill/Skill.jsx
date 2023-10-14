/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import img1 from "./Rectangle 1.png";
import img2 from "./Rectangle 2.png";
import img3 from "./Rectangle 3.png";
import img4 from "./Rectangle 6.png";
import img5 from "./Rectangle 7.png";
import img6 from "./Rectangle 8.png";
import img7 from "./Rectangle 9.png";

import "./skill.css";
const Skill = () => {
  const imgs = [
    {
      img: img2,
      details:
        "React is built on top of JavaScript, so a React expert should have a strong foundation in JavaScript, including ES6+ features, closures, promises, and asynchronous programming.",
    },
    {
      img: img1,
      details:
        "A Figma expert is skilled in creating visually appealing and functional user interfaces. They have a strong grasp of design principles, including layout, typography, color theory, and spacing.",
    },
    {
      img: img3,
      details:
        "Proficiency in using Firebase services such as Firebase Authentication, Firebase Realtime Database, Firebase Firestore, Firebase Cloud Functions, Firebase Cloud Storage, Firebase Hosting, Firebase Authentication, Firebase Cloud Messaging (FCM)."
    },
    {
      img: img4,
      details:
        " Node.js is known for its versatility and is widely used for building server-side applications, APIs, real-time applications, and more. Here are some key attributes and knowledge areas that define a Node.js expert:",
    },
    {
      img: img5,
      details:
        "Core JavaScript: A strong understanding of the fundamentals of JavaScript, including variables, data types, operators, loops, and conditional statements.",
    },
    {
      img: img6,
      details:
        "A CSS (Cascading Style Sheets) expert is someone who possesses advanced knowledge and extensive experience in working with CSS, a styling language used to control the presentation and layout of web pages.",
    },
    {
      img: img7,
      details:
        "A Redux expert is someone who possesses advanced knowledge and extensive experience in using Redux, a state management library for JavaScript applications, particularly in the context of React.",
    },
  ];
  const [style, setStyle] = useState(false);
  const [details, setDetails] = useState("");
  return (
    <div className="bg-[#11071F] py-6">
      <div className="2xl:mx-[12rem] mx-2">
        <div className="text-white text flex flex-col items-center pt-12">
          <p className="text-[24px]">
            Elevate Your Web Experience with an Expert
            <span className="text-[#A362FF]"> Front-End Developer</span>
          </p>
        </div>
        <div className="flex justify-center gap-4 flex-wrap py-12 relative">
          {imgs.map((img) => {
            return (
              <div className=" h-[48px] w-[48px]">
                <div
                  className="cursor-pointer w-[44px] h-[44px] rounded-full bg-[#a8a8a82d] flex justify-center items-center my-4 hover:w-[47px] hover:h-[47px] hover:transition-all"
                  onClick={() => {
                    setStyle(true);
                    setDetails(img.details);
                  }}
                >
                  <img
                    className={img.img == img3 ? "w-[20px]" : ""}
                    src={img.img}
                    alt=""
                  />
                </div>{" "}
              </div>
            );
          })}
          <div
            className={
              style
                ? "absolute md:overflow-hidden overflow-scroll bottom-40 sm:bottom-24 w-full h-[160] sm:h-[155px] bg-gradient-to-r from-purple-500 to-pink-500 rounded"
                : "hidden"
            }
          >
            <button
              className="rounded px-4 py-1 text-white font-semibold -tracking-tight bg-red-600 hover:bg-red-700 hover:transition-colors"
              onClick={() => {
                setStyle(!style);
              }}
            >
              Esc
            </button>
            <p className="pb-5 pt-2 px-8 text-white text-[20px] font-mono">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
