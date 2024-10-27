// src/Components/NavBar.js
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaBars, FaTimes, FaHome, FaInfoCircle, FaShieldAlt } from "react-icons/fa";
import {  useState } from "react";
import { FaAt, FaFileContract, FaStore } from "react-icons/fa6";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  return (
    <nav
      className={`bg-white shadow-md transition duration-300 w-full`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-red-600 text-2xl font-bold">
          <img src="/src/assets/images/Logo_E-shop.png" width="80" alt="E-Shop Logo" />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow max-w-md">
          <form className="flex items-center w-full">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:border-red-500 transition duration-300"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-r-full transition duration-300 flex items-center"
            >
              <FaSearch />
            </button>
          </form>
        </div>

        {/* Cart and Login */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-red-600 flex items-center hover:text-red-500 transition duration-300">
            <FaShoppingCart className="mr-1" /> Cart
          </Link>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-500 transition duration-300">
            Login
          </button>

          {/* Hamburger Icon for Mobile */}
          <button className="md:hidden text-red-600 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isMenuOpen && (
        <div className="flex md:hidden justify-center bg-white px-4 py-2">
          <form className="flex items-center w-full">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:border-red-500 transition duration-300"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-r-full transition duration-300 flex items-center"
            >
              <FaSearch />
            </button>
          </form>
        </div>
      )}

      {/* Secondary Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex justify-center items-center space-x-4 bg-gradient-to-r from-red-600 to-red-500 p-3 transition duration-300`}
      >
        {[
          { to: "/", icon: <FaHome />, label: "Home" },
          { to: "/shop", icon: <FaStore />, label: "Shop" },
          { to: "/contact", icon: <FaAt />, label: "Contact" },
          { to: "/info", icon: <FaInfoCircle />, label: "About" },
          { to: "/terms", icon: <FaFileContract />, label: "TOS" },
          { to: "/privacy-policy", icon: <FaShieldAlt />, label: "Policy" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-white flex items-center hover:bg-white hover:bg-opacity-20 transition duration-300 rounded-full px-3 py-2 shadow-sm hover:shadow-md"
          >
            <span className="flex items-center">
              <span className="mr-2">{link.icon}</span>
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
