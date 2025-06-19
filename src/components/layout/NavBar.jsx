"use client";
import { useState, useCallback, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with subtle animation */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <a href="/" className="flex items-center gap-2">
              <span className="sr-only">AgriMart</span>
              <svg
                className="h-8 w-8 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13L12 18L19 13M12 18V6M12 6L5 11L12 18M12 6L19 11L12 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                AgriMart
              </h1>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-800 hover:text-green-700 transition-colors duration-200"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <motion.a
              href="/account"
              className="p-2 rounded-full text-gray-700 hover:text-green-700 hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <UserIcon className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="/cart"
              className="p-2 rounded-full text-gray-700 hover:text-green-700 hover:bg-gray-100 transition-colors duration-200 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </motion.a>
            <motion.button
              className="ml-2 px-4 py-2 rounded-md bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-4">
            <motion.a
              href="/cart"
              className="p-2 text-gray-700 hover:text-green-700 relative"
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </motion.a>
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
      >
        <div className="fixed inset-0 z-10 bg-black/30 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full max-w-xs overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-in-out">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <a href="/" className="flex items-center gap-2">
              <svg
                className="h-8 w-8 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13L12 18L19 13M12 18V6M12 6L5 11L12 18M12 6L19 11L12 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                AgriMart
              </h1>
            </a>
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="px-6 py-4 space-y-1">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 rounded-lg text-base font-medium text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                whileTap={{ scale: 0.98 }}
                onClick={toggleMobileMenu}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          <div className="px-6 py-4 border-t border-gray-100">
            <motion.a
              href="/account"
              className="flex items-center py-3 px-4 rounded-lg text-base font-medium text-gray-800 hover:bg-gray-50 transition-colors duration-200"
              whileTap={{ scale: 0.98 }}
              onClick={toggleMobileMenu}
            >
              <UserIcon className="h-5 w-5 mr-3 text-gray-600" />
              My Account
            </motion.a>
            <motion.a
              href="/cart"
              className="flex items-center py-3 px-4 rounded-lg text-base font-medium text-gray-800 hover:bg-gray-50 transition-colors duration-200"
              whileTap={{ scale: 0.98 }}
              onClick={toggleMobileMenu}
            >
              <ShoppingCartIcon className="h-5 w-5 mr-3 text-gray-600" />
              Cart
              <span className="ml-auto bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </motion.a>
          </div>
          <div className="px-6 py-4">
            <motion.button
              className="w-full py-2.5 rounded-md bg-gradient-to-r from-green-600 to-green-700 text-white font-medium shadow-sm hover:shadow-md transition-all duration-200"
              whileTap={{ scale: 0.98 }}
            >
              Sign In
            </motion.button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
