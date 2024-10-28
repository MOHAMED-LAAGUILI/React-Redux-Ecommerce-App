import { productsData } from "../Data/MockData";
import { FaPlus, FaStar, FaShoppingBag } from "react-icons/fa";
import { setProducts } from "../Redux-Toolkit/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart } from "../Redux-Toolkit/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify CSS
import TopProductsCard from "./TopProductsCards";
import { Link } from "react-router-dom";

function Shop() {
  //Product dispatch redux
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setProducts(productsData));
  }, [dispatch]);

  // Add to cart
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));

    toast.success("Item added to cart!", {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      icon: <FaShoppingBag />, // custom icon
    });
    /*
    toast.info("This will remain until you close it.", {
      autoClose: false,
    });
    toast.warn("Please check the input fields!", {
      rtl: true,
      icon: <FaAllergies />,
    });
    toast.error("Failed to save data.", {
      theme: "dark",
    });
    */
  };

  return (
    <div className="mt-12  md:px-8 lg:px-16 pb-20">
      <TopProductsCard />
      {/* Enhanced Title with Glow Effect */}
      <div className="text-center mb-10">
        <div className="flex justify-center items-center space-x-4">
          <FaShoppingBag className="text-red-600 text-4xl animate-bounce glow-icon" />
          <h2 className="relative text-4xl font-bold text-red-600 animated-title glow-text">
            Shop - All Products
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.products.map((product) => (
          <Link
            to={`/product/${product.id}`} // This correctly navigates to the product details
            key={product.id}
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer product-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform transform hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-lg md:text-xl text-green-700 mb-4 font-bold">
                  ${product.price}
                </p>

                <div className="flex items-center justify-between mb-4">
                  {/* Star Ratings with Animation */}
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

                  {/* Add to Cart Button with Hover Effect */}
                  <div
                    onClick={(e) => handleAddToCart(e, product)}
                    className="
                    relative bg-red-600 text-2xl text-white p-2 rounded-full shadow-lg 
                    hover:bg-red-500 transition-transform duration-300 transform hover:scale-110 cart-button"
                  >
                    <FaPlus />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Shop;
