import { Link } from "react-router-dom";
import { FaShop } from "react-icons/fa6";
import HeroImage from "../assets/images/e-commerce.jpg";


function HeroCardImage() {
    return (
        <div className="bg-red-100 rounded-lg shadow-lg mb-8">
        <div className="relative">
          <img
            src={HeroImage}
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

    );
}

export default HeroCardImage;