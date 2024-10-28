import { Link } from "react-router-dom";
import {
  categories,
} from "../Data/MockData";
import { FaCircleArrowRight } from "react-icons/fa6";

function Categories() {
    return (
        <div>
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
        </div>
    );
}

export default Categories;