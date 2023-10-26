import About from "./component/About/About";
import Hero from "./component/Hero section/Hero";
import Navigation from "./component/Navigation/Navigation";
import Review from "./component/Review/Review";
import Contact from "./component/Contact/Contact";
import Skill from "./component/Skill/Skill";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./component/Error/Error";
import "./App.css";
import Footer from "./component/Footer/Footer";
import TopNav from "./component/Top Navigation/TopNav";
import { createContext, useState } from "react";
import MyShop from "./My shop/MyShop";
import ItemReview from "./Shop Component/ItemReview/ItemReview";
import Shipment from "./Shop Component/Shipment/Shipment";
import Login from "./component/Log in/Login";
import PrivateRoute from "./Shop Component/PrivateRoute/PrivateRoute";
import Inventory from "./Shop Component/Inventory/Inventory";
export const UserCondition = createContext();

function App() {
  const [condition, setCondition] = useState(false);
  console.log(condition);
  const [loggedinUser, setLoggedinUser] = useState({});
  console.log(loggedinUser);
  return (
    <UserCondition.Provider
      value={[condition, setCondition, loggedinUser, setLoggedinUser]}
    >
      <Router>
        <div className="top-0 md:relative sticky bg-white z-50">
          <TopNav></TopNav>
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
          />{" "}
          <Route
            path="/portfolio"
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
          <Route path="/shop" element={<MyShop />} />
          <Route path="/product/:productkey" element={<ItemReview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/shipment"
            element={
              <PrivateRoute>
                <Shipment />
              </PrivateRoute>
            }
          />{" "}
          <Route
            path="/inventroy"
            element={
              <PrivateRoute>
                <Inventory />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </UserCondition.Provider>
  );
}

export default App;
