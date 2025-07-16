'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FarmerEducationPage() {
  const [activeTab, setActiveTab] = useState('resources');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [region, setRegion] = useState('');
  const [crop, setCrop] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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

  // Sample educational resources
  const resources = [
    {
      id: 1,
      title: 'Sustainable Farming Practices',
      description: 'Learn about eco-friendly farming techniques suitable for Ghana\'s climate.',
      imageUrl: '/images/education/sustainable-farming.jpg',
      link: '/education/sustainable-farming'
    },
    {
      id: 2,
      title: 'Pest Management',
      description: 'Effective strategies to manage pests while minimizing chemical use.',
      imageUrl: '/images/education/pest-management.jpg',
      link: '/education/pest-management'
    },
    {
      id: 3,
      title: 'Water Conservation',
      description: 'Techniques for efficient water usage during dry seasons.',
      imageUrl: '/images/education/water-conservation.jpg',
      link: '/education/water-conservation'
    },
    {
      id: 4,
      title: 'Soil Health Management',
      description: 'Maintaining soil fertility for better crop yields.',
      imageUrl: '/images/education/soil-health.jpg',
      link: '/education/soil-health'
    },
  ];

  // Sample cropping calendars
  const croppingCalendars = [
    {
      crop: 'Maize',
      seasons: [
        { name: 'Major Season', plantingTime: 'March-April', harvestTime: 'July-August' },
        { name: 'Minor Season', plantingTime: 'August-September', harvestTime: 'November-December' }
      ],
      regions: ['All regions except coastal areas']
    },
    {
      crop: 'Rice',
      seasons: [
        { name: 'Major Season', plantingTime: 'April-May', harvestTime: 'August-September' },
        { name: 'Minor Season', plantingTime: 'September-October', harvestTime: 'December-January' }
      ],
      regions: ['Volta Region', 'Northern Region', 'Upper East']
    },
    {
      crop: 'Cassava',
      seasons: [
        { name: 'Year-round', plantingTime: 'Beginning of rainy season', harvestTime: '9-12 months after planting' }
      ],
      regions: ['All regions']
    },
    {
      crop: 'Yam',
      seasons: [
        { name: 'Main Season', plantingTime: 'December-January', harvestTime: 'July-August' }
      ],
      regions: ['Brong Ahafo', 'Northern Region', 'Volta Region']
    },
    {
      crop: 'Tomatoes',
      seasons: [
        { name: 'Major Season', plantingTime: 'March-April', harvestTime: 'June-July' },
        { name: 'Minor Season', plantingTime: 'August-September', harvestTime: 'November-December' }
      ],
      regions: ['Upper East', 'Brong Ahafo', 'Greater Accra']
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF7]">
      {/* Hero Section */}
      <div className="bg-ghana-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold font-poppins mb-4">Farmer Education Platform</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Access resources, cropping calendars, and SMS reminders to improve your farming practices
            </p>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => handleTabChange('resources')}
              className={`${activeTab === 'resources'
                ? 'border-ghana-green-500 text-ghana-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Educational Resources
            </button>
            <button
              onClick={() => handleTabChange('calendar')}
              className={`${activeTab === 'calendar'
                ? 'border-ghana-green-500 text-ghana-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Cropping Calendar
            </button>
            <button
              onClick={() => handleTabChange('sms')}
              className={`${activeTab === 'sms'
                ? 'border-ghana-green-500 text-ghana-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              SMS Reminders
            </button>
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Educational Resources Tab */}
        {activeTab === 'resources' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-ghana-green-700 mb-8">Educational Resources for Farmers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource) => (
                <motion.div
                  key={resource.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-48 bg-gray-200">
                    {/* Placeholder for image */}
                    <div className="h-full w-full flex items-center justify-center bg-ghana-green-100 text-ghana-green-700">
                      <span className="text-sm font-medium">Image: {resource.title}</span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-ghana-green-700 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4 flex-1">{resource.description}</p>
                    <Link href={resource.link}>
                      <span className="text-ghana-green-600 font-medium hover:text-ghana-green-700 hover:underline">
                        Learn more →
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Cropping Calendar Tab */}
        {activeTab === 'calendar' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-ghana-green-700 mb-8">Ghana Cropping Calendar</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-ghana-green-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-ghana-green-700 uppercase tracking-wider">
                        Crop
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-ghana-green-700 uppercase tracking-wider">
                        Season
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-ghana-green-700 uppercase tracking-wider">
                        Planting Time
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-ghana-green-700 uppercase tracking-wider">
                        Harvest Time
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-ghana-green-700 uppercase tracking-wider">
                        Suitable Regions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {croppingCalendars.flatMap((calendar) => 
                      calendar.seasons.map((season, index) => (
                        <tr key={`${calendar.crop}-${index}`} className="hover:bg-ghana-green-50">
                          {index === 0 ? (
                            <td rowSpan={calendar.seasons.length} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-top">
                              {calendar.crop}
                            </td>
                          ) : null}
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {season.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {season.plantingTime}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {season.harvestTime}
                          </td>
                          {index === 0 ? (
                            <td rowSpan={calendar.seasons.length} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top">
                              {calendar.regions.join(', ')}
                            </td>
                          ) : null}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-8 bg-ghana-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ghana-green-700 mb-4">Understanding Ghana's Agricultural Seasons</h3>
              <p className="text-gray-700 mb-4">
                Ghana generally has two main growing seasons in the south: the major season from March/April to July/August and the minor season from September to November. 
                The northern regions typically have one main growing season from May to September.
              </p>
              <p className="text-gray-700">
                These timings can vary based on local climate conditions and annual rainfall patterns. Always consult with local agricultural extension officers for specific advice for your area.
              </p>
            </div>
          </motion.div>
        )}

        {/* SMS Reminders Tab */}
        {activeTab === 'sms' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
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
          </motion.div>
        )}
      </div>
    </div>
  );
}