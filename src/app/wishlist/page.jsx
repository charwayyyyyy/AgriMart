'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingCartIcon, HeartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { addToCart } from '@/redux/features/cartSlice';

export default function WishlistPage() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  
  // Sample wishlist data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: '1',
      name: 'Fresh Tomatoes',
      description: 'Locally grown, organic tomatoes from the Volta Region',
      price: 15.99,
      imageUrl: '/images/products/tomatoes.png',
      farmer: 'Kwame Mensah',
      location: 'Volta Region',
      organic: true,
      category: 'vegetables',
    },
    {
      id: '3',
      name: 'Fresh Plantains',
      description: 'Sweet plantains from Ashanti Region plantations',
      price: 12.99,
      imageUrl: '/images/products/plantains.jpg',
      farmer: 'Yaw Owusu',
      location: 'Ashanti Region',
      organic: true,
      category: 'fruits',
    },
  ]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FFFDF7] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-ghana-green-700 mb-4">Please Sign In</h2>
            <p className="text-gray-600 mb-6">You need to be signed in to view your wishlist.</p>
            <Link href="/auth">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-ghana-green-600 text-white font-medium rounded-lg shadow-md hover:bg-ghana-green-700 transition-colors duration-300"
              >
                Sign In
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-ghana-green-700 font-poppins">Your Wishlist</h1>
          <p className="mt-2 text-gray-600">Save your favorite products from Ghana's finest farms</p>
        </motion.div>

        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <HeartIcon className="w-24 h-24 mx-auto mb-4 text-gray-300" />
            <h2 className="text-xl font-semibold text-ghana-green-700 mb-2">Your Wishlist is Empty</h2>
            <p className="text-gray-600 mb-6">Add items to your wishlist to save them for later.</p>
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-ghana-green-600 text-white font-medium rounded-lg shadow-md hover:bg-ghana-green-700 transition-colors duration-300"
              >
                Explore Products
              </motion.button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <motion.div 
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-48 w-full object-cover object-center"
                  />
                  {item.organic && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">
                      Organic
                    </div>
                  )}
                  <button
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="absolute top-2 left-2 p-1.5 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 text-red-500 hover:text-red-600 transition-colors duration-200 shadow-sm"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex-1 p-4 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 font-poppins">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                  
                  <div className="mt-2 flex items-center space-x-2">
                    <img
                      src="/images/icons/ghana-pattern.svg"
                      alt="Location icon"
                      className="h-4 w-4"
                    />
                    <span className="text-sm text-gray-600">{item.location}</span>
                  </div>

                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Farmer:</span>
                    <span className="text-sm font-medium text-gray-900">{item.farmer}</span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 font-poppins">
                      GH₵{item.price.toFixed(2)}
                    </span>
                    <motion.button
                      onClick={() => handleAddToCart(item)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-200"
                    >
                      <ShoppingCartIcon className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}