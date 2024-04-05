import { useState, useContext } from "react";
import logo from "../utils/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // useEffect(() => {
  //   // console.log("useEffect Callled from Header Component");
  // }, []);

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
    //#3a516d rgba(58,81,109,255)
    <div className="flex justify-between bg-pink-200 shadow-xl sm:bg-yellow-50 lg:bg-green-50 text-base">
      {/* if device size is less than < sm show pink or device size is grater than > sm show yellow or device size is greater than > lg show green */}
      <div className="logo-container">
        <Link to="/">
          <img className="w-52  " src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4 ">
          <li className="px-4 font-bold">
            Online Status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold">
            <Link className=" px-4 " to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4 font-bold">
            <Link className=" px-4" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4 font-bold">
            <Link className="px-4" to="/grocery">
              Grocery
            </Link>
          </li>

          <li className="px-4 font-bold ">
            <Link to={"/cart"}>Cart - ({cartItems.length}) 🛒</Link>
          </li>
          <li>
            <Link to={"/login"}>
              <button className="px-4 font-bold" onClick={log}>
                {btnNameReact}
              </button>
            </Link>
          </li>

          <li className="font-bold px-4 ">
            {"👤"}
            {loggedInUser}
          </li>
          {/* <li>{onlineStatus ? "🟢" : "🔴"}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
