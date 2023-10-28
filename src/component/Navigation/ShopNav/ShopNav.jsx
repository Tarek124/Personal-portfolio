import { Link } from "react-router-dom";
import "./shopNav.css";
const ShopNav = () => {
  return (
    <ul className="hidden md:flex gap-4">
      {" "}
      <Link to="/shop" className="listItem">
        Home
      </Link>
      <Link to="shipment" className="listItem">
        Shipment
      </Link>
      <Link to="cart" className="listItem">
        Cart
      </Link>
      <Link to="contact" className="listItem">
        Contact
      </Link>
    </ul>
  );
};

export default ShopNav;
