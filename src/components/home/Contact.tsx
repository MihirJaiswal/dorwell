import React from "react";
import { contactInfo } from "../../../constant";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="min-w-screen min-h-screen flex items-center justify-center py-16 px-3 border-b bg-gray-50"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 tracking-tight">
          Knock on Our Door
        </h2>
        <p className="text-center mb-10 md:mb-12 text-lg text-gray-600 leading-relaxed">
          Step through the door and let us know how we can assist you. Leave a message, or drop by our location we&apos;re happy to help!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-bg2 p-8 rounded-lg shadow-lg relative overflow-hidden">
            {/* Semicircular top */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-bg2 rounded-t-full transform -translate-y-10" />
            <form className="mt-10 space-y-6">
              <div>
                <label
                  className="block text-sm font-semibold text-gray-200 mb-2"
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
                  className="block text-sm font-semibold text-gray-200 mb-2"
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
                  className="block text-sm font-semibold text-gray-200 mb-2"
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
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-lg transition duration-300 font-semibold text-lg"
              >
                Open the Door
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-bg1 p-8 rounded-lg shadow-lg relative overflow-hidden">
            {/* Semicircular top */}
            <div className="absolute top-0 left-0 right-0 h-20 transform -translate-y-10" />
            <h3 className="text-3xl font-semibold text-gray-800 mb-4 mt-10">
              Contact Information
            </h3>
            <div className="bg-white p-4 rounded-lg">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4 mb-2">
                  <span className="text-orange-600 text-lg font-medium">
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
            </div>

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
