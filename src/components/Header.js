import { useState, useContext } from "react";
import logo from "../utils/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const log = () => {
    // btnNameReact === "Login"? setBtnNameReact("Logout"): setBtnNameReact("Login");
    if (btnNameReact === "Login") {
      return setBtnNameReact("Logout");
    } else if (btnNameReact === "Logout") {
      return setBtnNameReact("Login");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-green-100 text-base shadow-xl p-2">
      {/* Change background color based on screen size */}
      <div className="logo-container">
        <Link to="/">
          <img className="w-24 sm:w-36 rounded-lg" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex flex-wrap items-center text-xs sm:text-sm md:text-lg">
        <ul className="flex flex-wrap p-4 m-0 sm:m-4">
          <li className="px-2 sm:px-4 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 sm:px-4 font-bold">
            <Link className="px-2 sm:px-4" to="/about">
              About
            </Link>
          </li>
          <li className="px-2 sm:px-4 font-bold">
            <Link className="px-2 sm:px-4" to="/contact">
              Contact
            </Link>
          </li>
          <li className="px-2 sm:px-4 font-bold">
            <Link className="px-2 sm:px-4" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-2 sm:px-4 font-bold">
            <Link to={"/cart"}>Cart - ({cartItems.length}) 🛒</Link>
          </li>
          {/* <li className="px-2 sm:px-4">
            <Link to={"/login"}>
              <button className="px-2 sm:px-4 font-bold" onClick={log}>
                {btnNameReact}
              </button>
            </Link>
          </li> */}
          {/* <li className="font-bold px-2 sm:px-4">
            {"👤"}
            {loggedInUser}
          </li> */}
          <li className="px-2 sm:px-4 font-bold">
            Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
