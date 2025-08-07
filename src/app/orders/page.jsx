'use client';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function OrdersPage() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  
  // Sample orders data
  const [orders] = useState([
    {
      id: 'ORD-2023-001',
      date: '2023-07-15',
      status: 'Delivered',
      total: 78.95,
      items: [
        { id: 1, name: 'Fresh Tomatoes', quantity: 2, price: 15.99 },
        { id: 2, name: 'Premium Cucumber', quantity: 1, price: 45.99 }
      ]
    },
    {
      id: 'ORD-2023-002',
      date: '2023-07-10',
      status: 'Processing',
      total: 38.97,
      items: [
        { id: 3, name: 'Fresh Plantains', quantity: 3, price: 12.99 }
      ]
    },
    {
      id: 'ORD-2023-003',
      date: '2023-07-05',
      status: 'Delivered',
      total: 25.98,
      items: [
        { id: 5, name: 'Fresh Lettuce', quantity: 2, price: 12.99 }
      ]
    }
  ]);

  // State for expanded order details
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const toggleOrderDetails = (orderId) => {
    if (expandedOrderId === orderId) {
      setExpandedOrderId(null);
    } else {
      setExpandedOrderId(orderId);
    }
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
            <p className="text-gray-600 mb-6">You need to be signed in to view your order history.</p>
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
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-ghana-green-700 font-poppins">Your Orders</h1>
          <p className="mt-2 text-gray-600">Track and manage your orders from Ghana's finest farms</p>
        </motion.div>

        {orders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Image 
              src="/images/icons/empty-cart.svg" 
              alt="No Orders" 
              width={128}
              height={128}
              className="w-32 h-32 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-ghana-green-700 mb-2">No Orders Yet</h2>
            <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-ghana-green-600 text-white font-medium rounded-lg shadow-md hover:bg-ghana-green-700 transition-colors duration-300"
              >
                Start Shopping
              </motion.button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <motion.div 
                key={order.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleOrderDetails(order.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      toggleOrderDetails(order.id);
                    }
                  }}
                  tabIndex="0"
                  role="button"
                  aria-expanded={expandedOrderId === order.id}
                >
                  <div className="flex flex-wrap justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-ghana-green-700">{order.id}</h3>
                      <p className="text-sm text-gray-500">Placed on {order.date}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === 'Delivered' 
                          ? 'bg-green-100 text-green-800' 
                          : order.status === 'Processing' 
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                      <span className="font-semibold text-ghana-green-700">GH₵{order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {expandedOrderId === order.id && (
                  <motion.div 
                    className="border-t border-gray-200 p-6 bg-gray-50"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-md font-medium text-ghana-green-700 mb-4">Order Items</h4>
                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-gray-800">{item.name}</p>
                            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                          </div>
                          <p className="font-medium text-gray-800">GH₵{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                      <span className="font-medium text-gray-700">Total Amount:</span>
                      <span className="font-bold text-ghana-green-700">GH₵{order.total.toFixed(2)}</span>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 bg-ghana-green-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-ghana-green-700 transition-colors duration-300"
                      >
                        Track Order
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}