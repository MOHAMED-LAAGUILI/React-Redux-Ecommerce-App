
export default function InfoPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Information</h1>

            {/* About Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                <p className="text-gray-700">
                    Welcome to Code with Moha E-Shop! We are dedicated to providing you with the best online shopping experience, offering a wide range of products at competitive prices. Our mission is to make shopping easy and enjoyable for everyone.
                </p>
            </section>

            {/* Contact Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-2">
                    If you have any questions or concerns, feel free to reach out to us:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Email: support@codewithmoha.com</li>
                    <li>Phone: +1 (234) 567-8901</li>
                    <li>Address: 123 E-Shop St, Shopping City, SC 12345</li>
                </ul>
            </section>

            {/* Policy Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Policies</h2>
                <h3 className="font-semibold">Return Policy</h3>
                <p className="text-gray-700 mb-2">
                    We accept returns within 30 days of purchase. Items must be in their original condition and packaging. Please contact our support team to initiate a return.
                </p>
                <h3 className="font-semibold">Privacy Policy</h3>
                <p className="text-gray-700 mb-2">
                    Your privacy is important to us. We do not sell or share your personal information with third parties without your consent. For more details, please read our full privacy policy.
                </p>
                <h3 className="font-semibold">Shipping Policy</h3>
                <p className="text-gray-700">
                    We offer standard shipping on all orders. Shipping times may vary based on your location. Please allow 5-7 business days for processing and delivery.
                </p>
            </section>
        </div>
    );
}