"use client";
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { addToCart } from '@/redux/features/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <motion.div
      className="group relative bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="aspect-square w-full overflow-hidden bg-gray-100 relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
        />
        {product.organic && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">
            Organic
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 font-poppins">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        
        <div className="mt-2 flex items-center space-x-2">
          <img
            src="/ghana-pattern.svg"
            alt="Location icon"
            className="h-4 w-4"
          />
          <span className="text-sm text-gray-600">{product.location}</span>
        </div>

        <div className="mt-2 flex items-center space-x-2">
          <span className="text-sm text-gray-600">Farmer:</span>
          <span className="text-sm font-medium text-gray-900">{product.farmer}</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 font-poppins">
            GH₵{product.price.toFixed(2)}
          </span>
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-200"
          >
            <ShoppingCartIcon className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
