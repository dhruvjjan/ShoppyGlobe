// Description: Header component with navigation links, search functionality, and cart count display.

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice"; 


const Header = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state)=> state.cart.cartItems)
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setLocalSearchQuery] = useState(""); 
    

    const handleSearchToggle = () => {
        setShowSearch((prev) => !prev);
        setSearchQuery(""); 
    };

    const handleSearchChange = (e) => {
      const query = e.target.value;          
      setLocalSearchQuery(query);                  
      dispatch(setSearchQuery(query));           
    };



  return (
    <header className="bg-blue-500 shadow-md text-white p-4">
      <nav className="flex justify-between items-center mx-20 max-w-6xl">
        <h1 className="text-xl font-bold  ">ShoppyGlobe 🛒</h1>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline font-bold" : "hover:underline"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            {showSearch ? (
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="px-2 py-1 rounded text-blue-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                onBlur={() => setShowSearch(false)} // Optional: hide when focus is lost
              />
            ) : (
              <button
                onClick={handleSearchToggle}
                className="flex items-center space-x-1 hover:underline "
              >
                Search
              </button>
            )}
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "underline font-bold" : "hover:underline"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "underline font-bold" : "hover:underline"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <div className="relative">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-bold underline"
                    : "hover:underline text-yellow-300 font-bold"
                }
              >
                Cart
              </NavLink>
              
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
