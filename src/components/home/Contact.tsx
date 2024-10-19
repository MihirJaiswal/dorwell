import React from "react";
import { contactInfo } from "../../../constant";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="min-w-screen min-h-screen flex items-center justify-center py-16 px-3 border-b"
    >
      <div className="max-w-7xl w-full rounded-lg ">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-10 text-gray-800 tracking-tight">
          Get in Touch
        </h2>
        <p className="text-center mb-10 md:mb-12 text-lg text-gray-600 leading-relaxed">
          We’d love to hear from you! Fill out the form below or contact us via email or phone.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className=" p-8  space-y-6">
            <div>
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-lg transition duration-300 font-semibold text-lg"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="flex flex-col justify-center p-8 bg-white rounded-lg border space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center space-x-4">
                <span className="text-indigo-600 text-lg font-medium">
                  {contact.label}:
                </span>
                {contact.link ? (
                  <a
                    href={contact.link}
                    className="text-gray-700 hover:text-indigo-500 transition"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="text-gray-700">{contact.value}</span>
                )}
              </div>
            ))}

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Location
              </h4>
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <iframe
                  title="Google Map"
                  className="w-full h-60 rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.940635171902!2d78.64326991525777!3d22.7178118456396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39624595f8b112db%3A0x1e200562b54cf86b!2sBisa%20Khedi%2C%20Indore%2C%20Madhya%20Pradesh%20453771!5e0!3m2!1sen!2sin!4v1611234567890!5m2!1sen!2sin"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
