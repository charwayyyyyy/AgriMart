'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/shop/ProductCard';
import SearchBar from '@/components/shop/SearchBar';
import CategoryFilter from '@/components/shop/CategoryFilter';

// Sample products data with Ghanaian context
const products = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    description: 'Locally grown, organic tomatoes from the Volta Region',
    price: 15.99,
    imageUrl: '/products/tomatoes.jpg',
    farmer: 'Kwame Mensah',
    location: 'Volta Region',
    organic: true,
    category: 'vegetables',
  },
  {
    id: '2',
    name: 'Premium Cocoa Beans',
    description: 'High-quality cocoa beans from Western Region farms',
    price: 45.99,
    imageUrl: '/products/cocoa.jpg',
    farmer: 'Ama Serwaa',
    location: 'Western Region',
    organic: true,
    category: 'processed',
  },
  {
    id: '3',
    name: 'Fresh Plantains',
    description: 'Sweet plantains from Ashanti Region plantations',
    price: 12.99,
    imageUrl: '/products/plantains.jpg',
    farmer: 'Yaw Owusu',
    location: 'Ashanti Region',
    organic: true,
    category: 'fruits',
  },
  // Add more products as needed
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.farmer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
            Fresh from Ghana's Finest Farms
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover premium quality produce directly from local farmers across Ghana's regions
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <SearchBar onSearch={setSearchQuery} />
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-600">
              No products found. Try adjusting your search or filters.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}