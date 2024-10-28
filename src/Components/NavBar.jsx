// src/Components/NavBar.js
import { Link, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";
import { useState } from "react";
import { FaAt, FaFileContract, FaStore } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Modal from "./AuthModal"; 
import AuthPage from "../Pages/Auth";
import { setSearchTerm } from "../Redux-Toolkit/ProductsSlice";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const products = useSelector((state) => state.cart.products);

  // search term
  const [search, setSearch] = useState();
const dispatch = useDispatch()
const redirect = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setSearchTerm(search))
    redirect('search-result')
  }
  return (
    <nav className="bg-white shadow-md transition duration-300 w-full">
      <ToastContainer position="top-center" />
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="text-red-600 text-2xl font-bold rounded-full shadow-inner border-x-4"
        >
          <img
            src="/src/assets/images/Logo_E-shop.png"
            width="80"
            alt="E-Shop Logo"
          />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow max-w-md">
          <form className="flex items-center w-full" onSubmit={handleSearch}>
            <input
            onChange={(e) => setSearch(e.target.value)}
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

        {/* Cart and Login/Register Modal Trigger */}
        <div className="flex items-center space-x-4">
          <Link
            to="/cart"
            className="relative text-red-600 flex items-center hover:text-red-500 transition duration-300"
          >
            <FaShoppingCart className="mr-6 text-3xl" />
            {products.length > 0 && (
              <span className="absolute top-2 left-7 bg-red-950 px-2 rounded-full text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsModalOpen(true)} // Open modal on button click
            className="flex bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-500 transition duration-300"
          >
            <FaUser className="text-2xl" />
            <span className="ps-2 font-bold">Join</span>
          </button>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden text-red-600 focus:outline-none"
            onClick={toggleMenu}
          >
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

      {/* Modal for AuthPage */}
     {/* Modal for AuthPage */}
<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <AuthPage/>
</Modal>

    </nav>
  );
}
