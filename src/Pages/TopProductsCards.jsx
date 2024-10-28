import { useEffect } from "react";
import { FaPlus, FaFireAlt, FaStar, FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux-Toolkit/ProductsSlice"; // Import the new action
import { productsData } from "../Data/MockData";
import { toast } from "react-toastify";
import { addToCart } from "../Redux-Toolkit/CartSlice";
import { Link } from "react-router-dom";

function TopProductsCard() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(setProducts(productsData));
  }, [dispatch]);

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
      icon: <FaShoppingBag />,
    });
  };


  return (
    <div className="my-16 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-10">
        <div className="flex justify-center items-center space-x-4">
          <FaFireAlt className="text-red-600 text-3xl animate-pulse" />
          <h2 className="relative text-3xl font-bold text-red-600 animated-title">
            Top / Newest Products
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6 lg:px-8">
        {products?.slice(0, 3).map((product) => (

<Link
  to={`/product/${product.id}`} // This correctly navigates to the product details
  key={product.id}
>
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
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
        <div
          onClick={(e) => handleAddToCart(e, product)} // Ensure this does not interfere with the Link
          className="bg-red-600 text-2xl text-white p-2 rounded-full shadow-lg hover:bg-red-500 transition-transform duration-300 transform hover:scale-110 cart-button"
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

export default TopProductsCard;
