'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SMSReminderService() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [region, setRegion] = useState('');
  const [crop, setCrop] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    // Basic validation
    if (!phoneNumber || !region || !crop) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    // Phone number validation (Ghana format)
    const phoneRegex = /^(\+233|0)[0-9]{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setErrorMessage('Please enter a valid Ghana phone number (e.g., +233XXXXXXXXX or 0XXXXXXXXX)');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setPhoneNumber('');
      setRegion('');
      setCrop('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-ghana-green-700 mb-8">SMS Cropping Calendar Reminders</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-gray-700 mb-6">
          Subscribe to our free SMS service to receive timely reminders about planting, fertilizing, pest control, and harvesting based on your region and crops. Our system uses local weather data and traditional farming calendars to provide personalized recommendations.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <p className="text-red-700">{errorMessage}</p>
            </div>
          )}
          
          {isSuccess && (
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <p className="text-green-700">You have successfully subscribed to SMS reminders!</p>
            </div>
          )}
          
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+233XXXXXXXXX or 0XXXXXXXXX"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ghana-green-500 focus:ring-ghana-green-500"
              required
            />
            <p className="mt-1 text-sm text-gray-500">Enter your Ghana phone number to receive SMS alerts</p>
          </div>
          
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-700">Farming Region</label>
            <select
              id="region"
              name="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ghana-green-500 focus:ring-ghana-green-500"
              required
            >
              <option value="">Select your region</option>
              <option value="Greater Accra">Greater Accra</option>
              <option value="Ashanti">Ashanti</option>
              <option value="Western">Western</option>
              <option value="Eastern">Eastern</option>
              <option value="Central">Central</option>
              <option value="Volta">Volta</option>
              <option value="Northern">Northern</option>
              <option value="Upper East">Upper East</option>
              <option value="Upper West">Upper West</option>
              <option value="Bono">Bono</option>
              <option value="Bono East">Bono East</option>
              <option value="Ahafo">Ahafo</option>
              <option value="Western North">Western North</option>
              <option value="Oti">Oti</option>
              <option value="Savannah">Savannah</option>
              <option value="North East">North East</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="crop" className="block text-sm font-medium text-gray-700">Primary Crop</label>
            <select
              id="crop"
              name="crop"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ghana-green-500 focus:ring-ghana-green-500"
              required
            >
              <option value="">Select your primary crop</option>
              <option value="Maize">Maize</option>
              <option value="Rice">Rice</option>
              <option value="Cassava">Cassava</option>
              <option value="Yam">Yam</option>
              <option value="Plantain">Plantain</option>
              <option value="Cocoa">Cocoa</option>
              <option value="Tomatoes">Tomatoes</option>
              <option value="Peppers">Peppers</option>
              <option value="Groundnuts">Groundnuts</option>
              <option value="Millet">Millet</option>
              <option value="Sorghum">Sorghum</option>
              <option value="Cowpea">Cowpea</option>
            </select>
          </div>
          
          <div className="pt-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-ghana-green-600 hover:bg-ghana-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ghana-green-500 font-medium transition-colors duration-300 disabled:opacity-70"
            >
              {isSubmitting ? 'Processing...' : 'Subscribe to SMS Reminders'}
            </motion.button>
          </div>
        </form>
      </div>
      
      <div className="bg-ghana-green-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-ghana-green-700 mb-4">How It Works</h3>
        <ol className="space-y-4 text-gray-700 list-decimal pl-5">
          <li>Subscribe with your phone number, region, and primary crop</li>
          <li>Receive personalized SMS reminders based on your crop's calendar and local conditions</li>
          <li>Get timely alerts for planting, fertilizing, pest management, and harvesting</li>
          <li>Receive weather alerts that may affect your farming activities</li>
        </ol>
        <p className="mt-4 text-sm text-gray-500">Standard SMS rates may apply. You can unsubscribe at any time by replying STOP to any message.</p>
      </div>
    </div>
  );
}