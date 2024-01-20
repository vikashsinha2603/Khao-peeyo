import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Tastify from "../assets/Tastify.png";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
      <div className="h-20 mx-auto px-40 flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-20 h-20 ml-8 bg-black" alt="logo" src={Tastify}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 text-[18px] font-medium">
          <li className="px-4 hover:scale-110 transition-transform duration-300 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="px-4">
            <Link to="/about">About Us</Link>
          </li> */}
          {/* <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li> */}
          <li className="px-4 hover:scale-110 transition-transform duration-300 ease-in-out">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 relative mr-8 my-auto hover:scale-110 transition-transform duration-300 ease-in-out">
            <Link to="/cart">
              <BsCart4 />
              <span className="text-[0.5rem] text-center absolute bg-red-200 rounded-full w-5 h-5 top-[-10] left-8">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <button
            className="login hover:scale-110 transition-transform duration-300 ease-in-out"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

        </ul>
      </div>
    </div>
    
  );
};

export default Header;
