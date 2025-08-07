"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function ContactPage() {
  const formRef = useRef(null);
  
  useEffect(() => {
    // Simple fade-in animation
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el, index) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, 150 * index);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    // Form data would be processed here
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-on-load">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-green-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            We&apos;re here to help and answer any questions you might have. Let&apos;s
            connect and grow together!
          </motion.p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.section
            className="bg-white rounded-xl shadow-lg p-8 animate-on-load"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-6 flex items-center">
              <span className="bg-green-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              Send Us a Message
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="form-field animate-on-load">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-field animate-on-load">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-field animate-on-load">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="form-field animate-on-load">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="animate-on-load w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.section>

          {/* Contact Info */}
          <motion.section
            className="bg-white rounded-xl shadow-lg p-8 animate-on-load"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-6 flex items-center">
              <span className="bg-green-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              Our Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start animate-on-load">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-green-600" size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-lg">Address</h3>
                  <p className="text-gray-600 mt-1">
                    123 Farm Road, Accra, Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-start animate-on-load">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-green-600" size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-lg">Phone</h3>
                  <p className="text-gray-600 mt-1">+233 24 123 4567</p>
                </div>
              </div>

              <div className="flex items-start animate-on-load">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-green-600" size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-lg">Email</h3>
                  <p className="text-gray-600 mt-1">info@agrimart.com</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 animate-on-load">
                <h3 className="font-semibold text-green-700 text-lg mb-4 flex items-center">
                  <span className="bg-green-100 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  Business Hours
                </h3>
                <div className="space-y-3 pl-12">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-green-700">
                      8:00 AM - 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-green-700">
                      9:00 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-green-700">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 animate-on-load">
                <h3 className="font-semibold text-green-700 text-lg mb-4 flex items-center">
                  <span className="bg-green-100 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                  Connect With Us
                </h3>
                <div className="flex space-x-4 pl-12">
                  <button
                    className="bg-green-100 p-3 rounded-full text-green-700 hover:text-white hover:bg-green-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={18} />
                  </button>
                  <button
                    className="bg-green-100 p-3 rounded-full text-green-700 hover:text-white hover:bg-green-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={18} />
                  </button>
                  <button
                    className="bg-green-100 p-3 rounded-full text-green-700 hover:text-white hover:bg-green-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
