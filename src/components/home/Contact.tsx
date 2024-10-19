import React from "react";

const ContactSection = () => {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center py-10">
      <div className="max-w-7xl w-full p-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Get in Touch</h2>
        <p className="text-center mb-8 text-gray-600">
          We’d love to hear from you! Fill out the form below or contact us via email or phone.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-200 font-semibold"
            >
              Send Message
            </button>
          </form>
          <div className="flex flex-col justify-center bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">Contact Information</h3>
            <p className="mb-2 text-gray-600">
              <strong>Email:</strong> <a href="mailto:info@example.com" className="text-indigo-500">info@example.com</a>
            </p>
            <p className="mb-2 text-gray-600">
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-indigo-500">+1 (234) 567-890</a>
            </p>
            <p className="mb-2 text-gray-600">
              <strong>Address:</strong> 123 Main St, City, Country
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-2">Location</h4>
              <iframe
                title="Google Map"
                className="w-full h-40 rounded-lg shadow-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.940635171902!2d-122.084!3d37.421998999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7e50c151171%3A0x5d6514d3c21c1c35!2sGoogleplex!5e0!3m2!1sen!2sus!4v1611234567890!5m2!1sen!2sus"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
