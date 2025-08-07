"use client";
import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { removeFromCart, updateQuantity } from '@/redux/features/cartSlice';
import { useCartAnimation } from '@/hooks/useCartAnimation';
import { useCartNotification } from '@/hooks/useCartNotification';
import { useCartPersist } from '@/hooks/useCartPersist';

export default function CartModal({ open, setOpen }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const subtotal = useSelector(state => state.cart.subtotal);
  const deliveryFee = useSelector(state => state.cart.deliveryFee);
  const total = subtotal + deliveryFee;
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  // initializing custom hooks
  const { animateCartItem, animateRemoveFromCart } = useCartAnimation();
  const { notifyRemoveFromCart, NotificationComponent } = useCartNotification();
  useCartPersist(); // Initialize cart persistence

  // for animation targets
  const cartItemRefs = useRef({});

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(id);
      return;
    }
    const itemElement = cartItemRefs.current[id];
    if (itemElement) {
      animateCartItem(() => {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
      });
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    const itemElement = cartItemRefs.current[id];
    if (itemElement) {
      animateRemoveFromCart(itemElement);
      setTimeout(() => {
        dispatch(removeFromCart(id));
        notifyRemoveFromCart();
      }, 300);
    } else {
      dispatch(removeFromCart(id));
      notifyRemoveFromCart();
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md bg-ghana-pattern bg-opacity-5">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-xl font-bold text-ghana-green-700 font-poppins">
                            Your Market Basket
                          </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200">
                            {cartItems.map((item) => (
                              <motion.li
                                key={item.id}
                                className="flex py-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                ref={el => cartItemRefs.current[item.id] = el}
                              >
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <Image
                                    src={item.imageUrl}
                                    alt={item.name}
                                    width={96}
                                    height={96}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>{item.name}</h3>
                                      <p className="ml-4">GH₵{item.price.toFixed(2)}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.farmer}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex items-center space-x-2">
                                      <motion.button
                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                        className="text-ghana-green-600 hover:text-ghana-green-700 font-medium px-3 py-1 rounded-full border border-ghana-green-200 hover:bg-ghana-green-50 transition-colors duration-200"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                      >
                                        -
                                      </motion.button>
                                      <span className="text-ghana-green-700 font-medium min-w-[2rem] text-center">
                                        {item.quantity}
                                      </span>
                                      <motion.button
                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                        className="text-ghana-green-600 hover:text-ghana-green-700 font-medium px-3 py-1 rounded-full border border-ghana-green-200 hover:bg-ghana-green-50 transition-colors duration-200"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                      >
                                        +
                                      </motion.button>
                                    </div>

                                    <div className="flex">
                                      <motion.button
                                        type="button"
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="font-medium text-ghana-red-600 hover:text-ghana-red-700 px-3 py-1 rounded-full border border-ghana-red-200 hover:bg-ghana-red-50 transition-colors duration-200"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                      >
                                        Remove
                                      </motion.button>
                                    </div>
                                  </div>
                                </div>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-ghana-gold-200 px-4 py-6 sm:px-6 bg-white bg-opacity-90 rounded-t-2xl shadow-lg">
                      <NotificationComponent />
                      <div className="space-y-4 bg-ghana-green-50 p-4 rounded-lg">
                        <div className="flex justify-between text-base font-medium text-ghana-green-700">
                          <p>Subtotal</p>
                          <p>GH₵{subtotal.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between text-base font-medium text-ghana-green-700">
                          <p>Delivery Fee</p>
                          <p>GH₵{deliveryFee.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between text-lg font-bold text-ghana-green-800 pt-4 border-t border-ghana-green-200">
                          <p>Total Amount</p>
                          <p className="font-poppins">GH₵{total.toFixed(2)}</p>
                        </div>
                        <p className="text-sm text-ghana-green-600 text-center italic">Free delivery for orders above GH₵100</p>
                      </div>
                      <div className="mt-6 space-y-3">
                        {!isAuthenticated && (
                          <Link href="/auth">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="flex w-full items-center justify-center rounded-lg border-2 border-ghana-green-400 bg-ghana-green-500 px-6 py-3 text-base font-bold text-white shadow-md hover:bg-ghana-green-600 hover:border-ghana-green-500 transition-all duration-300"
                              onClick={() => setOpen(false)}
                            >
                              Sign In to Checkout
                            </motion.button>
                          </Link>
                        )}
                        
                        {isAuthenticated && cartItems.length > 0 && (
                          <>
                            <Link href="/cart">
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex w-full items-center justify-center rounded-lg border-2 border-ghana-green-400 bg-ghana-green-500 px-6 py-3 text-base font-bold text-white shadow-md hover:bg-ghana-green-600 hover:border-ghana-green-500 transition-all duration-300"
                                onClick={() => setOpen(false)}
                              >
                                View Cart
                              </motion.button>
                            </Link>
                            <Link href="/checkout">
                                <motion.button
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="flex w-full items-center justify-center rounded-lg border-2 border-ghana-gold-400 bg-ghana-gold-500 px-6 py-3 text-base font-bold text-white shadow-md hover:bg-ghana-gold-600 hover:border-ghana-gold-500 transition-all duration-300"
                                  onClick={() => setOpen(false)}
                                >
                                  Checkout
                                </motion.button>
                              </Link>
                            </>
                          )}
                          
                          {isAuthenticated && cartItems.length === 0 && (
                            <div className="text-center space-y-4">
                              <Image
                                src="/images/icons/empty-cart.svg"
                                alt="Empty Market Basket"
                                width={192}
                                height={192}
                                className="mx-auto"
                              />
                              <div className="space-y-2">
                                <p className="text-lg font-medium text-ghana-green-700">Your Market Basket is Empty</p>
                                <p className="text-sm text-ghana-green-600">Add some fresh farm products to get started!</p>
                              </div>
                            </div>
                          )}
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-ghana-green-600 hover:text-ghana-green-700 underline decoration-2 underline-offset-4 hover:decoration-ghana-gold-400 transition-all duration-300"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> →</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
