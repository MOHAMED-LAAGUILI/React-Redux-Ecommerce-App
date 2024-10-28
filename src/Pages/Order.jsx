import { FaCheckCircle, FaInfo } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OrderConfirmationPage = ({ order }) => {
  // If no order details are passed, redirect or display an error
  if (!order || typeof order !== 'object') {
    return <div className="text-center mt-10 text-gray-600">No order details found.</div>;
  }

  // Destructure necessary properties from order
  const {  orderNumber, products, shippingInformation } = order;
  const totalPrice = order.totalPrice ? Number(order.totalPrice) : 0; // Convert to number or set to 0

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-4 text-green-600">
        <FaCheckCircle className="text-3xl mr-2" />
        <h1 className="text-2xl font-semibold">Order Confirmed!</h1>
      </div>
      <h2 className="text-xl font-semibold mb-4">Thank you for your order!</h2>

      <div className="border-b mb-4">
        <h3 className="text-lg font-semibold">Order Summary</h3>
        <div className="mt-2">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between p-2 border-b">
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-md mr-3"
                />
                <div>
                  <p className="text-gray-800 font-medium">{product.name}</p>
                  <p className="text-gray-600">Price: {product.price}</p>
                  <p className="text-gray-600">Quantity: {product.quantity}</p>
                </div>
              </div>
              <p className="text-gray-700 font-semibold">$ {(product.price * product.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b mb-4">
        <h3 className="text-lg font-semibold">Shipping Information</h3>
        <p className="text-gray-800 font-medium">Order Number: {orderNumber}</p>
        <p className="text-gray-800 font-medium">{shippingInformation.address}</p>
        <p className="text-gray-800 font-medium">{shippingInformation.city}, {shippingInformation.state} {shippingInformation.zip}</p>
      </div>

      <div className="border-b mb-4">
        <h3 className="text-lg font-semibold">Payment Method</h3>
        {/* Add payment method details if available */}
      </div>

      <div className="flex justify-between items-center border-t pt-4">
        <h3 className="text-lg font-semibold">Total:</h3>
        <p className="text-lg font-semibold text-gray-800">
          $ {Number.isNaN(totalPrice) ? '0.00' : totalPrice.toFixed(2)}
        </p>
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-md font-semibold">
          Your order number is: <span className="font-bold text-blue-600">{orderNumber}</span>
        </h3>
        <p className="text-gray-600 mt-2">You will receive a confirmation email shortly.</p>
      </div>

      <div className="mt-6 text-center">
        <Link to="/shop" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none ">
          Continue Shopping
        </Link>
<br />
<br />
        <Link to="/shop" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
          <FaInfo /> Track Order
        </Link>
      </div>
    </div>
  );
};

OrderConfirmationPage.propTypes = {
  order: PropTypes.shape({
    orderNumber: PropTypes.string.isRequired,
    totalPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Allow both string and number
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
    shippingInformation: PropTypes.shape({
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default OrderConfirmationPage;
