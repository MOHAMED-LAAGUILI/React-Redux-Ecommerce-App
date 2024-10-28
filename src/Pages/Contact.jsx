import { useState } from "react";



export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., sending data to your server
        console.log("Form submitted:", formData);
        // Reset form after submission
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-gray-700 mb-4">
                    If you have any questions, comments, or concerns, please feel free to reach out to us using the form below or through our contact information.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Email: support@codewithmoha.com</li>
                    <li>Phone: +1 (234) 567-8901</li>
                    <li>Address: 123 E-Shop St, Shopping City, SC 12345</li>
                </ul>
            </section>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}