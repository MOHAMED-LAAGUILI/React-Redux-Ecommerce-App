import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart, decreaseFromCart } from '../Redux-Toolkit/CartSlice';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Modal from 'react-modal';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Rue Rabat Lot Sedraoui no26 , Ksar El Kebir");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newAddress, setNewAddress] = useState(address);

const redirect = useNavigate();

  const handleIncrease = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseFromCart(productId));
  };

  const handleDelete = (productId) => {
    const toastId = toast(
      <div>
        <p>Are you sure you want to remove this item from your cart?</p>
        <button 
          onClick={() => {
            dispatch(removeFromCart(productId));
            toast.success("Item removed from cart!", {
              position: "bottom-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
              icon: <FaTrash />,
            });
            toast.dismiss(toastId);
          }} 
          className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-500 transition duration-300"
        >
          Yes
        </button>
        <button 
          onClick={() => toast.dismiss(toastId)} 
          className="ml-2 bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-500 transition duration-300"
        >
          No
        </button>
      </div>, 
      { autoClose: false }
    );
  };

  const openModal = () => {
    setNewAddress(address); 
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAddressChange = () => {
    setAddress(newAddress);
    closeModal();
  };

  return (
    <div className="mt-12 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row">
      <div className="flex-1 mb-10 md:mb-0 md:mr-4">
        {cart.products.length <= 0 ? (
          <div className="flex items-center justify-center text-white pt-10 w-full">
            <div className="text-center max-w-lg mx-auto">
              <div className="w-full flex justify-center mb-8">
                <div className="max-w-xs w-full">
                  <iframe
                    width="300"
                    height="300"
                    src="https://lottie.host/embed/217d9416-ec15-4600-adcc-bb1d66739507/3LO6NrHL8a.lottie"
                    title="Empty Cart Animation"
                  ></iframe>
                </div>
              </div>
              <p className="text-2xl font-light mb-6 text-gray-800">
                🥲 Your cart is empty!
              </p>
              <Link
                to="/shop"
                className="inline-block px-8 py-4 text-lg font-medium bg-red-600 hover:bg-red-700 transition-colors rounded-full shadow-lg"
              >
                Let’s Shop 😁
              </Link>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto"> {/* Added for horizontal scrolling */}
<table className="min-w-full bg-white border border-gray-200 table-auto">
  <thead>
    <tr>
      <th className="py-2 px-4 border-b text-left">Product</th>
      <th className="py-2 px-4 border-b text-left">Price</th>
      <th className="py-2 px-4 border-b text-left">Quantity</th>
      <th className="py-2 px-4 border-b text-left">SubTotal</th>
      <th className="py-2 px-4 border-b text-left">Action</th>
    </tr>
  </thead>
  <tbody>
    {cart.products.map((product) => {
      const subTotal = (product.price * product.quantity).toFixed(2);
      return (
        <tr key={product.id} className="hover:bg-gray-100">
          <td className="py-2 px-4 border-b flex items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <span className="truncate">{product.name}</span>
          </td>
          <td className="py-2 px-4 border-b whitespace-nowrap">${product.price.toFixed(2)}</td>
          <td className="py-2 px-4 border-b">
            <div className="flex items-center">
              <button
                onClick={() => handleDecrease(product.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 transition duration-300"
                aria-label={`Decrease quantity of ${product.name}`}
              >
                -
              </button>
              <span className="px-1 border text-lg">{product.quantity}</span>
              <button
                onClick={() => handleIncrease(product)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 transition duration-300"
                aria-label={`Increase quantity of ${product.name}`}
              >
                +
              </button>
            </div>
          </td>
          <td className="py-2 px-4 border-b whitespace-nowrap">${subTotal}</td>
          <td className="px-4 border-b">
            <button
              onClick={() => handleDelete(product.id)}
              className="bg-red-600 text-white px-2 py-2 rounded hover:bg-red-500 transition duration-300"
              aria-label={`Remove ${product.name} from cart`}
            >
              <FaTrash />
            </button>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>

          </div>
        )}
      </div>

      <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-md md:ml-4">
        <div className="text-center mb-4">
          <FaShoppingCart className="text-red-600 text-4xl" />
          <h2 className="text-2xl font-bold text-red-600">Cart Summary</h2>
        </div>

        {cart.products.length > 0 ? (
          <div className="bg-white shadow-md rounded-lg p-6 mt-4">
            <h3 className="text-2xl font-bold mb-4">Cart Summary</h3>

            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total Quantity:</span>
              <span className="text-red-600 text-lg">{cart.totalQuantity}</span>
            </div>


            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total Price:</span>
              <span className="text-green-700 text-lg">${cart.totalPrice.toFixed(2)}</span>
            </div>

            <button
              className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-300 font-semibold shadow-lg"
              onClick={() => redirect('/checkout')}
            >
              Proceed to Checkout
            </button>

            <div className="mt-6">
              <label htmlFor="shipping-address" className="block text-lg font-medium mb-2">
                Shipping Address
              </label>
              <p className="border border-gray-300 rounded-md p-2">
                {address}
              </p>
              <button 
                onClick={openModal}
                className="mt-4 w-full bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-300 font-semibold shadow"
              >
                Change Address
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 mt-4">Your cart is empty. Add items to proceed.</p>
        )}
      </div>

      {/* Modal for changing address */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Change Shipping Address"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        ariaHideApp={false}
      >
        <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Change Shipping Address</h2>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2"
            rows="4"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
          <div className="mt-4 flex justify-between">
            <button onClick={closeModal} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">
              Cancel
            </button>
            <button onClick={handleAddressChange} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300">
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CartPage;
