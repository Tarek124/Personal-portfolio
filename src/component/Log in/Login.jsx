/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import * as firebase from "firebase/app";
import firebaseConfig from "../../firebase.config";
import { useContext } from "react";
import { UserCondition } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [newUser, setNewUser] = useState(true),
    [user, setUser] = useState({
      userSignedIn: false,
      email: "",
      password: "",
    }),
    history = useNavigate(),
    location = useLocation(),
    ContextUser = useContext(UserCondition),
    setLoggedinUser = ContextUser[3],
    auth = getAuth();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleAuth = (e) => {
    let isFormValid = "";

    const value = e.target.value;
    if (e.target.name === "email") {
      isFormValid = /^\S+@\S+\.\S+$/.test(value);
    } else if (e.target.name === "password") {
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
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          const newError = { ...user };
          newError.error = "";
          newError.photo = false;
          setUser(newError);
          history("/shipment", { replace: true });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const newError = { ...user };
          newError.error = errorMessage;
          setUser(newError);
          alert(user.error);
          // ..
        });
    }
    if (newUser == false && user.email && user.password) {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const newError = { ...user };
          newError.error = "";
          newError.photo = false;
          setUser(newError);
          history("/shipment", { replace: true });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    // console.log(user.email , user.password);
    e.preventDefault();
  };
  // google proverder
  const googleProvider = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const { displayName, email, photoURL } = user;
        const signedInUser = {
          name: displayName,
          email: email,
          userSignedIn: true,
          photo: photoURL,
        };
        setUser(signedInUser);
        history("/shipment", { replace: true });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  setLoggedinUser(user);

  return (
    <section>
      <div className="py-16 mb-8">
        {/* <!-- Component --> */}
        <div className="mx-auto max-w-xl bg-[#f2f2f7] px-5 py-12 text-center md:px-10">
          {/* <!-- Title --> */}
          <h2 className="text-3xl font-semibold py-8">
            Welcome to T<span className="text-[#8c41f5] mx-[0.4px]">A</span>REK!
            Please login.
          </h2>
          {/* <!-- Button --> */}
          <a
            onClick={googleProvider}
            href="#"
            className="mx-auto flex max-w-sm justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
          >
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19d23637f876_GoogleLogo.svg"
              alt=""
              className="mr-4"
            />
            <p className="font-bold">Sign up with Google</p>
          </a>
          {/* <!-- Devider --> */}
          <div className="mx-auto mb-14 mt-14 flex max-w-sm justify-around">
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f3d7490d1b3d86cf9442_Line%203.svg"
              alt=""
              className="inline-block"
            />
            <p className="text-sm text-[#647084]">or sign up with email</p>
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f3d7490d1b3d86cf9442_Line%203.svg"
              alt=""
              className="inline-block"
            />
          </div>
          {/* <!-- Form --> */}
          <form
            className="mx-auto mb-4 max-w-sm pb-4"
            name="wf-form-password"
            method="get"
          >
            <div className="relative">
              <img
                alt=""
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg"
                className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
              />
              <input
                type="email"
                className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]"
                maxLength="256"
                name="email"
                placeholder="Email Address"
                required=""
                onBlur={handleAuth}
              />
            </div>
            <div className="relative mb-4 pb-2">
              <img
                alt=""
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg"
                className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
              />
              <input
                type="password"
                className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]"
                placeholder="Password (min 8 characters)"
                name="password"
                required=""
                onBlur={handleAuth}
              />
            </div>
            <a
              onClick={handleSubmit}
              href="#"
              className="flex max-w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
            >
              <p className="mr-2 font-bold">{newUser ? "SIGN UP" : "LOG IN"}</p>
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
          <p className="text-sm text-[#636262]">
            {newUser ? "Already have an account?" : "New member?"}
            <a
              href="#"
              className="font-[Montserrat,_sans-serif] text-sm font-bold text-black px-1"
              onClick={() => {
                setNewUser(!newUser);
              }}
            >
              {newUser ? "Login now" : "Register here."}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
