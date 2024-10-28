import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import { FaCreditCard, FaMagento } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = ({ setOrder }) => {
  const cart = useSelector((state) => state.cart);
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: '',
  });
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const redirect = useNavigate();

  // Show loading spinner if cart or cart.products is undefined
  if (!cart || !cart.products) {
    return (
      <div className="flex justify-center items-center h-screen">
        <TailSpin height="150px" width="150px" color="red" ariaLabel="loading" visible={true} />
      </div>
    );
  }

  // If cart is empty, display a message
  if (cart.products.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-600">
        Your cart is empty. Add items to the cart to proceed to checkout.
      </div>
    );
  }

  // Calculate total
  const total = cart.products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  ).toFixed(2);

  // handleOrder
  const handleOrder = () => {
    // Validate fields
    if (!shippingInfo.address || !shippingInfo.city || !shippingInfo.zip) {
      toast.error('Please fill in all shipping fields.', {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    // If payment method is credit card, validate card fields
    if (paymentMethod === "credit-card") {
      const cardNumber = document.querySelector('input[placeholder="xxxx-xxxx-xxxx-xxxx"]');
      const holderName = document.querySelector('input[placeholder="Holder Name"]');
      const expirationDate = document.querySelector('input[placeholder="MM/YY"]');
      const cvv = document.querySelector('input[placeholder="CVV"]');

      if (!cardNumber.value || !holderName.value || !expirationDate.value || !cvv.value) {
        toast.error('Please fill in all payment fields.', {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        return;
      }
    }

    const newOrder = {
      products: cart.products,
      orderNumber: "235535",
      shippingInformation: shippingInfo,
      totalPrice: total,
    };
    setOrder(newOrder);

    toast.success('Order placed successfully!', {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      icon: <FaMagento />,
    });
    redirect("/order-confirmation");
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* User Information Section */}
      <div className="w-full md:w-2/4 p-4 bg-gray-50 border rounded-md shadow-sm">
        <button 
          onClick={() => setIsInfoOpen(!isInfoOpen)}
          className="flex justify-between w-full p-4 text-left text-gray-800 bg-white border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
        >
          <span className="font-semibold">Billing Information</span>
          <span className={`transform transition-transform ${isInfoOpen ? 'rotate-180' : ''}`}>&#x25BC;</span>
        </button>
        {isInfoOpen && (
          <div className="mt-2 border-t border-gray-200 bg-gray-50">
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full p-2 mt-1 border rounded-md focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="xxxxxxx@gmail.com"
                className="w-full p-2 mt-1 border rounded-md focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                placeholder="+212xxxxxxxxxxxx"
                className="w-full p-2 mt-1 border rounded-md focus:border-blue-500"
              />
            </div>
          </div>
        )}
        <button 
          onClick={() => setIsShippingOpen(!isShippingOpen)}
          className="mt-4 flex justify-between w-full p-4 text-left text-gray-800 bg-white border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
        >
          <span className="font-semibold">Shipping Information</span>
          <span className={`transform transition-transform ${isShippingOpen ? 'rotate-180' : ''}`}>&#x25BC;</span>
        </button>
        {isShippingOpen && (
          <div className="mt-2 border-t border-gray-200 bg-gray-50">
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                type="text"
                className="w-full p-2 mt-1 border rounded-md focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <input
                onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                type="text"
                className="w-full p-2 mt-1 border rounded-md focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Zip</label>
              <input
                onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                type="text"
                className="w-full p-2 mt-1 border rounded-md focus:border-blue-500"
              />
            </div>
          </div>
        )}
        <button 
          onClick={() => setIsPaymentOpen(!isPaymentOpen)}
          className="mt-4 flex justify-between w-full p-4 text-left text-gray-800 bg-white border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
        >
          <span className="font-semibold">Payment Method</span>
          <span className={`transform transition-transform ${isPaymentOpen ? 'rotate-180' : ''}`}>&#x25BC;</span>
        </button>
        {isPaymentOpen && (
          <div className="mt-2 border-t border-gray-200 bg-gray-50">
            <select
              className="w-full p-2 mt-1 border rounded-md focus:border-blue-500"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="cash-on-delivery">Cash on Delivery</option>
              <option value="credit-card">Credit Card</option>
            </select>
            {paymentMethod === "credit-card" && (
              <div className="mt-4 p-4 bg-white border rounded-md shadow">
                <FaCreditCard className="text-green-700 mb-2 text-3xl" />
                <label className="block text-gray-700">Card Number</label>
                <input
                  type="text"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  className="w-full p-2 mt-1 border rounded-md focus:border-blue-500"
                />
                <label className="block text-gray-700">Holder Name</label>
                <input
                  type="text"
                  placeholder="Holder Name"
                  className="w-full p-2 mt-1 border rounded-md focus:border-blue-500"
                />
                <label className="block text-gray-700">Expiration Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-2 mt-1 border rounded-md focus:border-blue-500"
                />
                <label className="block text-gray-700">CVV</label>
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full p-2 mt-1 border rounded-md focus:border-blue-500"
                />
              </div>
            )}
          </div>
        )}
        <button 
          onClick={handleOrder}
          className="mt-6 w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Place Order
        </button>
      </div>
      {/* Order Summary Section */}
      <div className="w-full md:w-2/4 p-4 bg-gray-50 border rounded-md shadow-sm">
        <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
        <ul className="divide-y divide-gray-200">
          {cart.products.map((product, index) => (
            <li key={index} className="flex justify-between py-2">
              <img width={"90"} src={product.image} alt={product.name}/>
              <span>{product.name} (x{product.quantity})</span>
              <span>${(product.price * product.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-4 font-semibold">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  );
};

CheckoutPage.propTypes = {
  setOrder: PropTypes.func.isRequired,
};

export default CheckoutPage;
