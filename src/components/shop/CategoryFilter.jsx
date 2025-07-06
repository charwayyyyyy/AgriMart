"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  { id: "all", name: "All Products" },
  { id: "vegetables", name: "Vegetables", icon: "🥬" },
  { id: "fruits", name: "Fruits", icon: "🍎" },
  { id: "grains", name: "Grains & Cereals", icon: "🌾" },
  { id: "tubers", name: "Tubers & Roots", icon: "🥔" },
  { id: "spices & herbs", name: "Spices & Herbs", icon: "🌿" },
  { id: "livestock", name: "Livestock", icon: "🐓" },
  { id: "processed", name: "Processed Foods", icon: "🥘" },
];

const regions = [
  { id: "all", name: "All Regions" },
  { id: "ashanti", name: "Ashanti Region" },
  { id: "brong", name: "Bono Region" },
  { id: "central", name: "Central Region" },
  { id: "eastern", name: "Eastern Region" },
  { id: "greater-accra", name: "Greater Accra" },
  { id: "northern", name: "Northern Region" },
  { id: "volta", name: "Volta Region" },
  { id: "western", name: "Western Region" },
];

export default function CategoryFilter({ onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [showOrganic, setShowOrganic] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (onFilterChange) {
      onFilterChange({
        category: categoryId,
        region: selectedRegion,
        organic: showOrganic,
        priceRange,
      });
    }
  };

  const handleRegionChange = (regionId) => {
    setSelectedRegion(regionId);
    if (onFilterChange) {
      onFilterChange({
        category: selectedCategory,
        region: regionId,
        organic: showOrganic,
        priceRange,
      });
    }
  };

  const handleOrganicChange = (e) => {
    setShowOrganic(e.target.checked);
    if (onFilterChange) {
      onFilterChange({
        category: selectedCategory,
        region: selectedRegion,
        organic: e.target.checked,
        priceRange,
      });
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceRange([0, parseInt(value)]);
    if (onFilterChange) {
      onFilterChange({
        category: selectedCategory,
        region: selectedRegion,
        organic: showOrganic,
        priceRange: [0, parseInt(value)],
      });
    }
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm ${
                selectedCategory === category.id
                  ? "bg-green-100 text-green-800 font-medium"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.icon && <span>{category.icon}</span>}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Regions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Region</h3>
        <select
          value={selectedRegion}
          onChange={(e) => handleRegionChange(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
        >
          {regions.map((region) => (
            <option key={region.id} value={region.id}>
              {region.name}
            </option>
          ))}
        </select>
      </div>

      {/* Organic Filter */}
      <div className="flex items-center">
        <input
          id="organic"
          type="checkbox"
          checked={showOrganic}
          onChange={handleOrganicChange}
          className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
        />
        <label htmlFor="organic" className="ml-2 block text-sm text-gray-900">
          Organic Products Only
        </label>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Price Range
        </h3>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>GH₵0</span>
            <span>GH₵{priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
