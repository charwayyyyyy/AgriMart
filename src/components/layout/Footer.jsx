'use client';
import { motion } from 'framer-motion';

const footerNavigation = {
  shop: [
    { name: 'Fresh Produce', href: '#' },
    { name: 'Grains & Cereals', href: '#' },
    { name: 'Livestock', href: '#' },
    { name: 'Farm Equipment', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
  ],
  account: [
    { name: 'Your Account', href: '/account' },
    { name: 'Order History', href: '/orders' },
    { name: 'Wishlist', href: '/wishlist' },
    { name: 'Newsletter', href: '#' },
  ],
  resources: [
    { name: 'Farmer Education', href: '/education' },
    { name: 'Cropping Calendar', href: '/education?tab=calendar' },
    { name: 'SMS Reminders', href: '/education?tab=sms' },
    { name: 'Farming Tips', href: '/education/sustainable-farming' },
  ],
  connect: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'WhatsApp', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white relative" aria-labelledby="footer-heading">
      {/* Back to top button */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-white text-green-600 rounded-full p-3 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      </div>
      
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-12 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              AgriMart
            </motion.h1>
            <p className="text-sm leading-6 text-gray-300">
              Connecting Ghanaian farmers with consumers, bringing fresh produce from farm to table.
            </p>
            <div className="flex space-x-4">
              {footerNavigation.connect.map((item, index) => (
                <motion.a 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-green-800 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <span className="sr-only">{item.name}</span>
                  {/* Social icon placeholder */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-sm font-semibold leading-6 text-white">Shop</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.shop.map((item) => (
                    <motion.li 
                      key={item.name}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <a href={item.href} className="text-xs leading-6 text-gray-300 hover:text-white transition-colors duration-200">
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="mt-8 md:mt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.company.map((item) => (
                    <motion.li 
                      key={item.name}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <a href={item.href} className="text-xs leading-6 text-gray-300 hover:text-white transition-colors duration-200">
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-sm font-semibold leading-6 text-white">Account</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.account.map((item) => (
                    <motion.li 
                      key={item.name}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <a href={item.href} className="text-xs leading-6 text-gray-300 hover:text-white transition-colors duration-200">
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="mt-8 md:mt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.resources.map((item) => (
                    <motion.li 
                      key={item.name}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <a href={item.href} className="text-xs leading-6 text-gray-300 hover:text-white transition-colors duration-200">
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="mt-10 border-t border-white/10 pt-6 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-xs leading-5 text-gray-400 text-center">&copy; {new Date().getFullYear()} AgriMart. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}