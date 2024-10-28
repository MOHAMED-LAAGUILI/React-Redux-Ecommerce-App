import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white text-gray-800 pt-20 py-10 drop-shadow-2xl">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Us Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-2 text-red-600">About Us</h2>
                        <p className="text-gray-600">
                            We are an online e-commerce platform dedicated to providing the best products at unbeatable prices. Our mission is to make online shopping easy and enjoyable for everyone.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-2 text-red-600">Quick Links</h2>
                        <ul className="space-y-1">
                            <li><Link to="/" className="hover:text-red-600 hover:underline hover:font-bold transition duration-75">Home</Link></li>
                            <li><Link to="/shop" className="hover:text-red-600 hover:underline hover:font-bold transition duration-75">Shop</Link></li>
                            <li><Link to="/info" className="hover:text-red-600 hover:underline hover:font-bold transition duration-75">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-red-600 hover:underline hover:font-bold transition duration-75">Contact</Link></li>
                            <li><Link to="/terms" className="hover:text-red-600 hover:underline hover:font-bold transition duration-75">TOS</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-red-600 hover:underline hover:font-bold transition duration-75">Policy</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-2 text-red-600">Customer Service</h2>
                        <ul className="space-y-1">
                            <li><Link to="/help" className="hover:text-red-600 hover:underline hover:font-bold transition duration-75">Help Center</Link></li>
                            <li><Link to="/returns" className="hover:text-red-600 hover:underline hover:font-bold transition duration-75">Returns</Link></li>
                            <li><Link to="/shipping" className="hover:text-red-600 hover:underline hover:font-bold transition duration-75">Shipping Info</Link></li>
                            <li><Link to="/faq" className="hover:text-red-600 hover:underline hover:font-bold transition duration-75">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Subscription Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-2 text-red-600">Subscribe</h2>
                        <p className="text-gray-600 mb-2">
                            Sign up to receive updates on promotions, new products, and sales directly to your inbox.
                        </p>
                        <form className="flex items-center space-x-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 w-full border border-gray-300 rounded-md focus:border-red-600"
                            />
                            <button
                                type="submit"
                                className="bg-red-600 text-white p-2 rounded-md hover:bg-red-500 transition duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 border-t pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Contact Us Section */}
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <h2 className="text-xl font-bold mb-2 text-red-600">Contact Us</h2>
                            <p className="text-gray-600">Email: support@eshop.com</p>
                            <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                        </div>

                        {/* Follow Us Section */}
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition duration-300">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition duration-300">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition duration-300">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition duration-300">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="mailto:support@eshop.com" className="text-gray-600 hover:text-red-600 transition duration-300">
                                <FaEnvelope size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-red-600 text-white py-4 mt-6">
                <div className="container mx-auto text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} E-shop. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
