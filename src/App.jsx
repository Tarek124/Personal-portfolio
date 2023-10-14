import About from "./component/About/About";
import Hero from "./component/Hero section/Hero";
import Navigation from "./component/Navigation/Navigation";
import Review from "./component/Review/Review";
import Contact from "./component/Contact/Contact";
import Skill from "./component/Skill/Skill";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState } from "react";
import Login from "./component/Log in/Login";
import Error from "./component/Error/Error";
import "./App.css"
import fbicon from "./icon/facebook.svg"
import instaicon from "./icon/instagram.svg"
import { motion } from "framer-motion";


function App() {
  const [login, setlogin] = useState(false);
  return (
    <>
      {" "}
      <Login login={login} setlogin={setlogin}></Login>
      {login && (
        <Router>
          <div className="top-0 md:relative sticky bg-white z-50">
            <Navigation></Navigation>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero></Hero>
                  <Skill></Skill>
                  <About></About>
                  <Review></Review>
                  <Contact></Contact>
                </>
              }
            />
            <Route path="/" element={<Skill />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Review />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      )}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
      className="fbIcon flex md:flex-col fixed md:right-8 right-1 md:top-[40%] justify-center items-center px-1 md:h-[120px] bottom-2">
        <div className="md:w-16 w-10 md:h-16 h-10 flex justify-center items-center"><a href="https://www.facebook.com/abdullahal.tarek.37" target="blank"><img className="w-8 md:w-12 transition  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300" src={fbicon} alt="" /></a></div>
        <div className="md:w-16 w-10 md:h-16 h-10 flex justify-center items-center"><a href="https://www.instagram.com/abdullah_al_tarek/" target="blank"> <img className="w-8 md:w-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300" src={instaicon} alt="" /></a></div>
      </motion.div>
    </>
  );
}

export default App;
