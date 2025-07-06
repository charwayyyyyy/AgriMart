'use client';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Example suggestions 
  const sampleSuggestions = [
    'Plantain',
    'Cassava',
    'Yam',
    'Cocoyam',
    'Garden Eggs',
    'Kontomire',
    'Palm Oil',
    'Cocoa',
    'Maize',
    'Rice',
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      setIsLoading(true);
      // simulating API call with setTimeout
      setTimeout(() => {
        const filtered = sampleSuggestions.filter(item =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filtered);
        setIsLoading(false);
      }, 300);
    } else {
      setSuggestions([]);
    }

    if (onSearch) {
      onSearch(value);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    if (onSearch) {
      onSearch(suggestion);
    }
  };

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="relative">
        <motion.div
          className="relative rounded-full shadow-sm"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="block w-full rounded-full border-0 py-3 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-700 sm:text-sm sm:leading-6"
            placeholder="Search for fresh produce..."
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {searchTerm && (suggestions.length > 0 || isLoading) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1">
              {isLoading ? (
                <div className="px-4 py-2 text-sm text-gray-500">Loading...</div>
              ) : (
                suggestions.map((suggestion, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                    whileHover={{ backgroundColor: '#f0fdf4' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {suggestion}
                  </motion.button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {searchTerm && suggestions.length === 0 && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div className="px-4 py-2 text-sm text-gray-500">
            No products found. Try a different search term.
          </div>
        </motion.div>
      )}
    </div>
  );
}