/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import * as firebase from "firebase/app";
import firebaseConfig from "../../firebase.config";
import { motion } from "framer-motion";

firebase.initializeApp(firebaseConfig);

const Login = (props) => {
  const { login, setlogin } = props;
  const [user, setUser] = useState({
    userSignedIn: false,
    email: "afrantarek123456789@gmail.com",
    password: "",
  });
  const auth = getAuth();
  const handleInput = (e) => {
    let isFormValid = true;

    const value = e.target.value;
    if (e.target.name === "password") {
      const isPasswordValid = value.length > 6;
      const passwordHasNumber = value;
      isFormValid = isPasswordValid && passwordHasNumber;
    }

    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (user.email && user.password) {
      //   createUserWithEmailAndPassword(auth, user.email, user.password)
      //     .then((userCredential) => {
      //       // Signed up
      //       const user = userCredential.user;
      //       const newError = { ...user };
      //       newError.error = "";
      //       setUser(newError);
      //       // ...
      //     })
      //     .catch((error) => {
      //       const errorCode = error.code;
      //       const errorMessage = error.message;
      //       const newError = { ...user };
      //       newError.error = errorMessage;
      //       setUser(newError);
      //       // ..
      //     });
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const allDetails = userCredential.user;
          console.log(allDetails);

          setlogin(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Password incorrect!");
        });
    }
    // console.log(user.email , user.password);
    e.preventDefault();
  };

  return (
    <div
      className={
        login
          ? "hidden"
          : "grid h-auto grid-cols-1 md:h-screen md:grid-cols-2 gap-0"
      }
    >
      <div className="flex flex-col items-center justify-center bg-white">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="py-16 md:py-24 lg:py-32 px-5 md:px-10"
        >
          <div className="max-w-[480px] text-center md:max-w-[480px]">
            <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
              Only owner can enter this website
            </h2>
            <div className="mx-auto mb-4 max-w-[400px] pb-4">
              <form name="wf-form-password" method="get">
                <div className="relative">
                  <img
                    alt=""
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg"
                    className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                  />
                  <input
                    type="email"
                    className="m-0 mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 align-middle text-sm text-[#333333] focus:border-[#3898ec] pl-14"
                    maxLength="256"
                    name="email"
                    placeholder="Email Address"
                    required=""
                    value="afrantarek123456789@gmail.com"
                  />
                  <div></div>
                  <div></div>
                </div>
                <div className="relative mb-4">
                  <img
                    alt=""
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg"
                    className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                  />
                  <input
                    type="password"
                    className="m-0 mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 align-middle text-sm text-[#333333] focus:border-[#3898ec] pl-14"
                    maxLength="256"
                    name="password"
                    placeholder="Password (min 8 characters)"
                    required=""
                    onBlur={handleInput}
                  />
                  <div></div>
                  <div></div>
                </div>
                <label className="mb-6 flex items-center justify-start font-medium before:table before:content-['_'] before:[grid-area:1/1/2/2] md:mb-10 lg:mb-1 pb-12">
                  <input type="checkbox" name="checkbox" className="m-0 p-0" />
                  <span
                    className="ml-4 inline-block cursor-pointer text-sm"
                    htmlFor="checkbox"
                  >
                    I agree with the{" "}
                    <a href="" className="font-bold text-[#0b0b1f]">
                      Terms &amp; Conditions
                    </a>
                  </span>
                </label>
                <a
                  onClick={handleSubmit}
                  href=""
                  className="flex max-w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
                >
                  <div className="mr-6 font-bold">Log In</div>
                  <div className="h-4 w-4 flex-none">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 21"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Arrow Right</title>
                      <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                    </svg>
                  </div>
                </a>
              </form>
            </div>
            <p className="text-sm text-[#636262]">
              Only{" "}
              <a href="#" className="text-sm font-bold text-black">
                Owner{" "}
              </a>
              can enter this website
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col items-center justify-center bg-[#f2f2f7]"
      >
        <div className="py-16 md:py-24 lg:py-32 px-5 md:px-10">
          <div className="mx-auto max-w-[480px] text-left md:max-w-[480px]">
            <div className="relative left-2 mb-5 flex h-14 w-14 flex-col items-center justify-center bg-[#276ef1] [box-shadow:rgb(171,_196,_245)_-8px_8px] md:mb-6 lg:mb-8">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f5ec37c8c32b17d1c725_Vector-9.svg"
                alt=""
                className="inline-block"
              />
            </div>
            <p className="mb-8 text-[#647084] md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim.
            </p>
            <p className="font-bold">Abdullah Al Tarek</p>
            <p className="text-sm">Junior Front-End Web Developer</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
