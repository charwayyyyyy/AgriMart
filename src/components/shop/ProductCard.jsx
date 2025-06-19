"use client";
import { motion } from "framer-motion";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function ProductCard({ product }) {
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

      {/* Content Container */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Top Row - Name and Price */}
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 flex-grow">
            {product.name}
          </h3>
          <p className="text-lg font-bold text-green-700 whitespace-nowrap pl-2">
            GH₵{product.price.toFixed(2)}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 line-clamp-3 mb-3 flex-grow">
          {product.description}
        </p>

        {/* Farmer and Location */}
        <div className="flex justify-between items-center text-xs text-gray-600 mb-4">
          <p className="truncate max-w-[45%]">{product.farmer}</p>
          <p className="truncate max-w-[45%] text-right">{product.location}</p>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          className="w-full bg-green-700 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-green-800 transition-colors text-sm"
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCartIcon className="h-4 w-4" />
          <span>Add to Cart</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
