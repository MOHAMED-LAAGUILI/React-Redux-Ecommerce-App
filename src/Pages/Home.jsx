import { Link } from "react-router-dom";
import {
  categories,
  productsData,
  services,
  specialCategories,
} from "../Data/MockData";
import { FaCircleArrowRight, FaShop, FaPlus } from "react-icons/fa6";
import { setProducts } from "../Redux-Toolkit/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaFireAlt, FaStar } from "react-icons/fa";
import Shop from './Shop';


export default function Home() {

const dispatch = useDispatch();

const products = useSelector((state) => state.products);


useEffect(() => {
  dispatch(setProducts(productsData))
  //eslint-disable-next-line
}, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-red-600">
        Shop by Categories
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {categories.map((category, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Link to={`/category/${category.id}`}>
              <div className="flex items-center p-4 hover:bg-gray-100">
                <FaCircleArrowRight className="text-red-600 mr-2" />
                <span className="font-semibold text-lg text-gray-800">
                  {category.name}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Image Card */}
      <div className="bg-red-100 rounded-lg shadow-lg mb-8">
        <div className="relative">
          <img
            src={"/src/assets/images/e-commerce.jpg"}
            alt={"Shopping bag with shirt and smartphone"}
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-2">
              Code with Moha
            </h2>
            <h3 className="text-xl font-semibold text-white mb-2">
              Welcome to E-Shop
            </h3>
            <p className="text-gray-200 mb-4">
              Millions of products at your fingertips.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition duration-300"
            >
              <FaShop className="mr-2" />
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Services Cards */}
      <h2 className="text-2xl font-bold text-center mb-6 text-red-600">
        Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md rounded-lg p-4 flex items-center"
          >
            <span className="text-red-600 text-3xl mr-4">{service.icon}</span>
            <div>
              <h4 className="font-semibold text-lg">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

{/* Special Categories Section */}
<h2 className="text-2xl font-bold text-center mb-6 text-red-600">
  Special Categories
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8  relative">
  {specialCategories.map((specialCat) => (
    <div
      key={specialCat.id}
      className="bg-white cursor-pointer bg-opacity-90 shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-opacity-100"
    >
      <img
        src={specialCat.imageUrl}
        alt={specialCat.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 absolute  top-32 left-12">
        <h3 className="bg-white rounded-full px-5 text-2xl font-bold text-red-600 text-center">
          {specialCat.name}
        </h3>
      </div>
    </div>
  ))}
</div>

   {/* Custom Product Cards */}
    <div className="mt-12 px-4 md:px-8 lg:px-16">
      {/* Animated Title with Icons */}
      <div className="text-center mb-10">
        <div className="flex justify-center items-center space-x-4">
          <FaFireAlt className="text-red-600 text-3xl animate-pulse" />
          <h2 className="relative text-3xl font-bold text-red-600 animated-title">
          Top / Newest Products
          </h2>
          
        </div>
      </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6 lg:px-8">
  {products.products.slice(0, 3).map((product) => (
    <div
      key={product.id}
      className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">
          {product.name}
        </h3>
        <p className="text-lg md:text-xl text-green-700 mb-4 font-bold">
          ${product.price}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          {/* Star Ratings */}
          <div className="flex space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`${
                        index < 3 ? "text-yellow-500" : "text-gray-300"
                      } star-icon`}
                    />
                  ))}
                </div>
          
          {/* Add to Cart Button */}
          <Link
                  to={`/cart`}
                  className="bg-red-600 text-2xl text-white p-2 rounded-full shadow-lg hover:bg-red-500 transition-transform duration-300 transform hover:scale-110 cart-button"
                >
                  <FaPlus />
                </Link>
        </div>
      </div>
    </div>
  ))}
</div>
</div>


      <Shop />
    </div>
  );
}