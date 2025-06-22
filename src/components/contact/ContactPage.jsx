import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import anime from 'animejs';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import GhanaPattern from '../assets/ghana-pattern.svg';

const ContactPage = () => {
  const formRef = useRef(null);
  const mapRef = useRef(null);
  
  useEffect(() => {
    // Form field animations
    anime({
      targets: '.form-field',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      easing: 'easeOutExpo'
    });
    
    // Map animation
    anime({
      targets: mapRef.current,
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutElastic'
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    anime({
      targets: '.submit-btn',
      scale: [1, 1.1, 1],
      backgroundColor: ['#047857', '#065f46'],
      duration: 500
    });
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h1 
            className="text-4xl font-bold text-green-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            We'd love to hear from you! Reach out for inquiries, partnerships, or just to say hello.
          </motion.p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-6">Send Us a Message</h2>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="form-field">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="submit-btn w-full bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </section>

          {/* Contact Info */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-6">Our Information</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-green-600 mt-1 mr-3" size={18} />
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">123 Farm Road, Accra, Ghana</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className="text-green-600 mt-1 mr-3" size={18} />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+233 24 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaEnvelope className="text-green-600 mt-1 mr-3" size={18} />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">info@agrimart.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="font-semibold text-green-700 mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-green-700 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-green-700 hover:text-green-800 transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-green-700 hover:text-green-800 transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-green-700 hover:text-green-800 transition-colors">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-8 bg-green-100 rounded-lg overflow-hidden aspect-video" ref={mapRef}>
              {/* Placeholder for Google Map integration */}
              <div className="w-full h-full flex items-center justify-center text-green-800">
                <span>Google Map of Accra, Ghana</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;