'use client';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCartIcon, XMarkIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { removeFromCart, updateQuantity } from '@/redux/features/cartSlice';

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const subtotal = useSelector(state => state.cart.subtotal);
  const deliveryFee = useSelector(state => state.cart.deliveryFee);
  const total = subtotal + deliveryFee;
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <Image 
                  src="/images/icons/empty-cart.svg" 
                  alt="Empty cart" 
                  width={96} 
                  height={96} 
                  className="opacity-50" 
                />
              </div>
              <h2 className="text-xl font-medium text-gray-600 mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven't added any products to your cart yet.</p>
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-ghana-green-600 hover:bg-ghana-green-700"
                >
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  Browse Products
                </motion.button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                  <ul role="list" className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <motion.li
                        key={item.id}
                        className="p-4 sm:p-6 flex flex-col sm:flex-row"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden w-full sm:w-24 h-24 mb-4 sm:mb-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <div className="flex-1 sm:ml-6 flex flex-col justify-between">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                              <p className="mt-1 text-sm text-gray-500">{item.farmer}</p>
                              <p className="mt-1 text-sm text-gray-500">{item.location}</p>
                            </div>
                            <p className="text-base font-medium text-gray-900">₵{item.price.toFixed(2)}</p>
                          </div>
                          <div className="mt-4 flex justify-between items-center">
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button
                                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                className="p-2 text-gray-600 hover:text-ghana-green-600"
                              >
                                <MinusIcon className="h-4 w-4" />
                              </button>
                              <span className="px-4 py-1 text-gray-900">{item.quantity}</span>
                              <button
                                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                className="p-2 text-gray-600 hover:text-ghana-green-600"
                              >
                                <PlusIcon className="h-4 w-4" />
                              </button>
                            </div>
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-gray-500 hover:text-red-500"
                            >
                              <XMarkIcon className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white shadow-sm rounded-lg p-6 sticky top-8">
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
                  <div className="flow-root">
                    <div className="-my-4 divide-y divide-gray-200">
                      <div className="py-4 flex justify-between">
                        <p className="text-base text-gray-600">Subtotal</p>
                        <p className="text-base font-medium text-gray-900">₵{subtotal.toFixed(2)}</p>
                      </div>
                      <div className="py-4 flex justify-between">
                        <p className="text-base text-gray-600">Delivery Fee</p>
                        <p className="text-base font-medium text-gray-900">₵{deliveryFee.toFixed(2)}</p>
                      </div>
                      <div className="py-4 flex justify-between">
                        <p className="text-base font-medium text-gray-900">Total</p>
                        <p className="text-base font-bold text-ghana-green-600">₵{total.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    {isAuthenticated ? (
                      <Link href="/checkout">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-ghana-green-600 hover:bg-ghana-green-700"
                        >
                          Proceed to Checkout
                        </motion.button>
                      </Link>
                    ) : (
                      <Link href="/auth">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-ghana-green-600 hover:bg-ghana-green-700"
                        >
                          Sign in to Checkout
                        </motion.button>
                      </Link>
                    )}
                  </div>
                  <div className="mt-4">
                    <Link href="/shop">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex justify-center items-center px-6 py-3 border border-ghana-green-600 rounded-md shadow-sm text-base font-medium text-ghana-green-600 bg-white hover:bg-ghana-green-50"
                      >
                        Continue Shopping
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}