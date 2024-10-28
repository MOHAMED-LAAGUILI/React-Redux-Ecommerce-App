import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { addToCart } from '../Redux-Toolkit/CartSlice';
import { toast } from 'react-toastify';
import { FaPlus } from 'react-icons/fa';

const ProductDetailsPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  // Load product from products array when ID or products change
  useEffect(() => {
    if (products && products.length > 0) {
      const foundProduct = products.find((item) => item.id === parseInt(id)); // Check if the product ID matches
      setProduct(foundProduct);
    }
  }, [id, products]);

  // Handle adding to cart
  const handleAddToCart = () => {
    const itemToAdd = { 
      id: product.id, 
      name: product.name, 
      price: product.price, 
      image: product.image 
    };
    dispatch(addToCart(itemToAdd));
   toast.success(`product ${product.name} added to cart`)
  };

  // Display a "Product Not Found" message if the product is still null
  if (!product) {
    return (
      <div className="container mx-auto text-center py-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Product Not Found for ID: {id}
        </h2>
        <Link to="/" className="text-blue-500 hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8"
        />
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {product.name}
          </h2>
          <span className="text-2xl font-bold text-red-600">${product.price}</span>
          <p className="mt-4">{product.description}</p>
          
    
          <button 
            onClick={handleAddToCart} 
            className="mt-4 bg-red-500 text-white px-4 py-4 rounded-full hover:bg-green-600 transition"
          >
            <FaPlus />
          </button>
         <span className={"text-2xl font-bold"}> Add to cart </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
