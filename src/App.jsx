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
    </>
  );
}

export default App;
