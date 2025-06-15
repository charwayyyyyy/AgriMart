'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/shop/ProductCard';
import SearchBar from '@/components/shop/SearchBar';
import CategoryFilter from '@/components/shop/CategoryFilter';
import CartModal from '@/components/shop/CartModal';

// Sample products data
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
    description: 'High-quality cocoa beans from Western Region',
    price: 150.00,
    imageUrl: '/products/cocoa.jpg',
    farmer: 'Yaa Asantewaa',
    location: 'Western Region',
    organic: true,
    category: 'processed',
  },
  {
    id: '3',
    name: 'Garden Eggs',
    description: 'Fresh and nutritious garden eggs',
    price: 10.00,
    imageUrl: '/products/garden-eggs.jpg',
    farmer: 'Abena Osei',
    location: 'Eastern Region',
    organic: true,
    category: 'vegetables',
  },
  // Add more products as needed
];

export default function Shop() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterProducts(query);
  };

  const handleFilter = (filters) => {
    let filtered = products;

    // Filter by category
    if (filters.category !== 'all') {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Filter by region
    if (filters.region !== 'all') {
      filtered = filtered.filter(product => {
        const region = product.location.toLowerCase().replace(' region', '');
        return region === filters.region;
      });
    }

    // Filter organic products
    if (filters.organic) {
      filtered = filtered.filter(product => product.organic);
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    );

    // Apply search query if exists
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const filterProducts = (query) => {
    if (!query) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Sidebar with filters */}
          <div className="lg:col-span-1">
            <CategoryFilter onFilterChange={handleFilter} />
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <SearchBar onSearch={handleSearch} />
            </div>

            <AnimatePresence>
              {filteredProducts.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-500 text-lg">
                    No products found. Try adjusting your filters or search terms.
                  </p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={() => addToCart(product)}
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      <CartModal
        open={isCartOpen}
        setOpen={setIsCartOpen}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}