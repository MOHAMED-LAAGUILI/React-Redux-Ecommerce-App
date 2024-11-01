import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import NoFoundProductImage from "../assets/images/no-products-found.png"
const SearchResultsPage = () => {
  const filteredProducts = useSelector((state) => state.products.filteredData); // Get filtered products from the store
  const searchTerm = useSelector((state) => state.products.searchTerm); // Get the current search term from the store

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Results for {` '${searchTerm}' `}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg p-4 hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image} // Assume product image URL is stored in 'product.image'
                  alt={product.name}
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{product.name}</h3>
              </Link>
              <div className="flex justify-between items-center mb-4">
                <span className="text-red-600 font-bold text-lg">${product.price}</span>
                <div className="flex space-x-2">
                  <button className="text-gray-600 hover:text-red-600 transition">
                    <FaHeart />
                  </button>
                  <button className="text-gray-600 hover:text-red-600 transition">
                    <FaCartPlus />
                  </button>
                </div>
              </div>
              <Link
                to={`/product/${product.id}`}
                className="block bg-red-600 text-white text-center py-2 rounded hover:bg-red-500 transition"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center">
            <img
              src={NoFoundProductImage}
              alt="No matching product found"
              className="w-48 h-auto mx-auto"
            />
            <p className="text-2xl text-gray-600 mt-4">No matching product found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
