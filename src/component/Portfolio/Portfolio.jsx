import Hero from "../Hero section/Hero"
import Skill from "../Skill/Skill"
import About from "../About/About"
import Review from "../Review/Review"
import Contact from "../Contact/Contact"
import Error from "../Error/Error"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Portfolio = () => {
  return <Router>
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
  </Router>;
};

export default Portfolio;
