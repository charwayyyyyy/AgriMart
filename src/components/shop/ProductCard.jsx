'use client';
import { motion } from 'framer-motion';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function ProductCard({ product }) {
  return (
    <motion.div
      className="group relative bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <p className="text-lg font-bold text-green-700">
            GH₵{product.price.toFixed(2)}
          </p>
        </div>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex justify-between items-center pt-2">
          <p className="text-xs text-gray-600">{product.farmer}</p>
          <p className="text-xs text-gray-600">{product.location}</p>
        </div>
        <motion.button
          className="mt-4 w-full bg-green-700 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-green-800 transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCartIcon className="h-5 w-5" />
          <span>Add to Cart</span>
        </motion.button>
      </div>
      {product.organic && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          Organic
        </div>
      )}
    </motion.div>
  );
}

// Example product prop structure
/*
const product = {
  id: '1',
  name: 'Fresh Tomatoes',
  description: 'Locally grown, organic tomatoes from the Volta Region',
  price: 15.99,
  imageUrl: '/images/tomatoes.jpg',
  farmer: 'Kwame Mensah',
  location: 'Volta Region',
  organic: true,
};
*/