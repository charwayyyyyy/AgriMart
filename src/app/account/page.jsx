'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function AccountPage() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [activeTab, setActiveTab] = useState('profile');

  // Sample user data (in a real app, this would come from the backend)
  const userData = {
    name: 'Kwame Asante',
    email: 'kwame.asante@example.com',
    phone: '+233 20 123 4567',
    address: '123 Independence Ave, Accra',
    joinDate: 'January 15, 2023',
  };

  // Sample order history
  const orderHistory = [
    {
      id: 'ORD-2023-001',
      date: 'November 10, 2023',
      total: 125.75,
      status: 'Delivered',
      items: [
        { name: 'Fresh Tomatoes', quantity: 2, price: 15.99 },
        { name: 'Premium Cucumber', quantity: 1, price: 45.99 },
        { name: 'Fresh Plantains', quantity: 3, price: 12.99 },
      ]
    },
    {
      id: 'ORD-2023-002',
      date: 'October 25, 2023',
      total: 89.97,
      status: 'Delivered',
      items: [
        { name: 'Fresh Avocado', quantity: 4, price: 12.99 },
        { name: 'Fresh Lettuce', quantity: 2, price: 12.99 },
      ]
    },
    {
      id: 'ORD-2023-003',
      date: 'November 15, 2023',
      total: 63.96,
      status: 'Processing',
      items: [
        { name: 'Fresh Tomatoes', quantity: 4, price: 15.99 },
      ]
    },
  ];

  // Sample wishlist items
  const wishlistItems = [
    {
      id: 'w1',
      name: 'Organic Cassava',
      price: 18.99,
      imageUrl: '/images/products/cassava.jpg',
      farmer: 'Yaw Owusu',
      location: 'Eastern Region',
    },
    {
      id: 'w2',
      name: 'Premium Yam',
      price: 22.50,
      imageUrl: '/images/products/yam.jpg',
      farmer: 'Ama Serwaa',
      location: 'Brong Ahafo Region',
    },
    {
      id: 'w3',
      name: 'Fresh Pineapple',
      price: 15.75,
      imageUrl: '/images/products/pineapple.jpg',
      farmer: 'Kwame Mensah',
      location: 'Central Region',
    },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FFFDF7] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="w-20 h-20 bg-ghana-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-ghana-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-ghana-green-700">Sign In Required</h2>
            <p className="text-gray-600">Please sign in to access your account information, order history, and wishlist.</p>
            <Link href="/auth">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-ghana-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-ghana-green-700 transition-colors duration-300"
              >
                Sign In
              </motion.button>
            </Link>
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <Link href="/auth" className="text-ghana-green-600 hover:text-ghana-green-700 font-medium">
                Create one now
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-ghana-green-700 font-poppins">My Account</h1>
          <p className="mt-2 text-gray-600">Manage your profile, orders, and wishlist</p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Account Navigation Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'profile' ? 'text-ghana-green-700 border-b-2 border-ghana-green-500' : 'text-gray-500 hover:text-ghana-green-600'}`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'orders' ? 'text-ghana-green-700 border-b-2 border-ghana-green-500' : 'text-gray-500 hover:text-ghana-green-600'}`}
            >
              Order History
            </button>
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'wishlist' ? 'text-ghana-green-700 border-b-2 border-ghana-green-500' : 'text-gray-500 hover:text-ghana-green-600'}`}
            >
              Wishlist
            </button>
          </div>

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <motion.div 
              className="p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-ghana-green-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-ghana-green-700 text-4xl font-bold">{userData.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{userData.name}</h3>
                    <p className="text-gray-500">Member since {userData.joinDate}</p>
                    <button className="mt-4 text-ghana-green-600 hover:text-ghana-green-700 font-medium">
                      Change Profile Picture
                    </button>
                  </div>
                </div>
                
                <div className="md:w-2/3 md:pl-8 md:border-l md:border-gray-200">
                  <h3 className="text-xl font-bold text-ghana-green-700 mb-4">Personal Information</h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          defaultValue={userData.name}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ghana-green-500 focus:ring-ghana-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          defaultValue={userData.email}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ghana-green-500 focus:ring-ghana-green-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          defaultValue={userData.phone}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ghana-green-500 focus:ring-ghana-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          defaultValue={userData.address}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ghana-green-500 focus:ring-ghana-green-500"
                        />
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="px-6 py-2 bg-ghana-green-600 text-white font-medium rounded-lg shadow-sm hover:bg-ghana-green-700 transition-colors duration-300"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-ghana-green-700 mb-4">Password</h3>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
                          <input
                            type="password"
                            id="currentPassword"
                            name="currentPassword"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ghana-green-500 focus:ring-ghana-green-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                          <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ghana-green-500 focus:ring-ghana-green-500"
                          />
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-ghana-green-600 text-white font-medium rounded-lg shadow-sm hover:bg-ghana-green-700 transition-colors duration-300"
                        >
                          Update Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <motion.div 
              className="p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-ghana-green-700 mb-6">Order History</h3>
              
              {orderHistory.length > 0 ? (
                <div className="space-y-6">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex flex-wrap justify-between items-center">
                        <div>
                          <span className="font-medium text-gray-900">Order {order.id}</span>
                          <span className="ml-4 text-sm text-gray-500">{order.date}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {order.status}
                          </span>
                          <span className="font-medium text-gray-900">GH₵{order.total.toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Items</h4>
                        <ul className="divide-y divide-gray-200">
                          {order.items.map((item, index) => (
                            <li key={index} className="py-2 flex justify-between">
                              <div className="flex items-center">
                                <span className="text-gray-600">{item.quantity}x</span>
                                <span className="ml-2 text-gray-900">{item.name}</span>
                              </div>
                              <span className="text-gray-900">GH₵{(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex justify-end">
                        <button className="text-ghana-green-600 hover:text-ghana-green-700 font-medium text-sm">
                          View Order Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-ghana-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-ghana-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Orders Yet</h3>
                  <p className="text-gray-600 mb-6">You haven't placed any orders yet. Start shopping to see your orders here.</p>
                  <Link href="/shop">
                    <button className="px-6 py-2 bg-ghana-green-600 text-white font-medium rounded-lg shadow-sm hover:bg-ghana-green-700 transition-colors duration-300">
                      Browse Products
                    </button>
                  </Link>
                </div>
              )}
            </motion.div>
          )}

          {/* Wishlist Tab */}
          {activeTab === 'wishlist' && (
            <motion.div 
              className="p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-ghana-green-700 mb-6">My Wishlist</h3>
              
              {wishlistItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                      <div className="h-48 bg-gray-200 relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                          Product Image
                          <br />
                          (Will be added later)
                        </div>
                        <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-medium text-gray-900 mb-1">{item.name}</h4>
                        <p className="text-sm text-gray-500 mb-2">{item.farmer} • {item.location}</p>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-lg font-bold text-ghana-green-700">GH₵{item.price.toFixed(2)}</span>
                          <button className="px-4 py-2 bg-ghana-green-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-ghana-green-700 transition-colors duration-300">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-ghana-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-ghana-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Your Wishlist is Empty</h3>
                  <p className="text-gray-600 mb-6">Save items you like to your wishlist and they will appear here.</p>
                  <Link href="/shop">
                    <button className="px-6 py-2 bg-ghana-green-600 text-white font-medium rounded-lg shadow-sm hover:bg-ghana-green-700 transition-colors duration-300">
                      Discover Products
                    </button>
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}