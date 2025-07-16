'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SustainableFarmingPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF7]">
      {/* Hero Section */}
      <div className="bg-ghana-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold font-poppins mb-4">Sustainable Farming Practices</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Eco-friendly farming techniques suitable for Ghana's climate
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <div className="h-80 bg-gray-200 rounded-lg mb-6">
                {/* Placeholder for main image */}
                <div className="h-full w-full flex items-center justify-center bg-ghana-green-100 text-ghana-green-700">
                  <span className="text-lg font-medium">Image: Sustainable Farming in Ghana</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-ghana-green-700 mb-4">Why Sustainable Farming Matters in Ghana</h2>
              <p className="mb-4">
                Sustainable farming practices are essential for Ghana's agricultural future. With changing climate patterns, soil degradation, and water scarcity becoming increasingly common challenges, adopting sustainable methods is not just environmentally responsible—it's economically necessary for long-term farm viability.
              </p>
              <p className="mb-4">
                By implementing sustainable practices, Ghanaian farmers can improve soil health, increase crop yields, reduce input costs, and build resilience against climate change impacts. These approaches also help preserve Ghana's rich biodiversity and natural resources for future generations.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-ghana-green-700 mb-4">Key Sustainable Farming Techniques for Ghana</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-ghana-green-600 mb-3">1. Conservation Agriculture</h3>
                <p className="mb-3">
                  Conservation agriculture is based on three principles: minimal soil disturbance (reduced or no-tillage), permanent soil cover, and crop rotation. These practices help prevent soil erosion, improve soil structure, and increase organic matter content.
                </p>
                <div className="bg-ghana-green-50 p-4 rounded-lg mb-3">
                  <h4 className="font-medium text-ghana-green-700 mb-2">Implementation Tips:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Start with small plots to practice no-till techniques</li>
                    <li>Use cover crops like mucuna or lablab during fallow periods</li>
                    <li>Rotate cereal crops (maize, sorghum) with legumes (groundnuts, cowpeas)</li>
                    <li>Leave crop residues on the field after harvest</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-ghana-green-600 mb-3">2. Agroforestry Systems</h3>
                <p className="mb-3">
                  Agroforestry integrates trees with crop production and/or livestock. This approach is particularly valuable in Ghana's diverse ecological zones, providing multiple benefits including shade, windbreaks, additional income sources, and improved soil fertility.
                </p>
                <div className="bg-ghana-green-50 p-4 rounded-lg mb-3">
                  <h4 className="font-medium text-ghana-green-700 mb-2">Recommended Tree Species:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Moringa - Fast-growing, nutritious leaves, drought-resistant</li>
                    <li>Gliricidia - Nitrogen-fixing, good for fodder and green manure</li>
                    <li>Cashew - Provides nuts for income and shade for crops</li>
                    <li>Shea - Indigenous to northern Ghana, valuable for butter production</li>
                    <li>Mango - Provides fruit, shade, and windbreak</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-ghana-green-600 mb-3">3. Integrated Soil Fertility Management</h3>
                <p className="mb-3">
                  This approach combines organic and inorganic fertilizers with improved germplasm and local knowledge to maximize nutrient use efficiency. It's particularly important in Ghana where soil fertility is often low.
                </p>
                <div className="bg-ghana-green-50 p-4 rounded-lg mb-3">
                  <h4 className="font-medium text-ghana-green-700 mb-2">Practical Applications:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Compost crop residues, animal manure, and household organic waste</li>
                    <li>Apply targeted amounts of mineral fertilizers based on soil tests</li>
                    <li>Use green manures like Canavalia and Mucuna to add nitrogen</li>
                    <li>Practice microdosing - applying small amounts of fertilizer directly to planting holes</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-ghana-green-600 mb-3">4. Water Conservation Techniques</h3>
                <p className="mb-3">
                  With increasing rainfall variability in Ghana, water conservation is critical for sustainable farming. These techniques help capture and retain water for crop use during dry periods.
                </p>
                <div className="bg-ghana-green-50 p-4 rounded-lg mb-3">
                  <h4 className="font-medium text-ghana-green-700 mb-2">Effective Methods:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Construct stone bunds along contours to slow water runoff</li>
                    <li>Dig zai pits (small planting pits that collect water)</li>
                    <li>Create half-moon basins for tree planting in drier areas</li>
                    <li>Use mulching to reduce evaporation and suppress weeds</li>
                    <li>Implement drip irrigation for vegetable production where feasible</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-ghana-green-700 mb-4">Success Stories from Ghanaian Farmers</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold text-ghana-green-600 mb-2">Kofi Mensah, Ashanti Region</h3>
                <p className="italic mb-4">
                  "I started practicing conservation agriculture five years ago on my 3-acre maize farm. By using no-till methods and rotating with cowpeas, I've reduced my fertilizer costs by 40% while increasing yields by 25%. The soil on my farm is now darker and holds water much better during dry spells."
                </p>
                <p>
                  Kofi now trains other farmers in his community on sustainable techniques and has expanded his farm to include agroforestry with cashew trees along the borders.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-ghana-green-600 mb-2">Abena Owusu, Volta Region</h3>
                <p className="italic mb-4">
                  "My vegetable farm used to suffer during the dry season. After implementing water harvesting techniques and mulching, I can now grow vegetables year-round. I've also integrated moringa trees which provide additional income from leaf sales and improve the soil."
                </p>
                <p>
                  Abena's farm has become a demonstration site for sustainable vegetable production, and she now supplies high-quality produce to hotels in the region.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-ghana-green-700 mb-4">Getting Started with Sustainable Farming</h2>
              <p className="mb-4">
                Transitioning to sustainable farming practices doesn't have to happen all at once. Start with these steps:
              </p>
              <ol className="list-decimal pl-5 space-y-2 mb-6">
                <li>Begin with a soil test to understand your current soil health</li>
                <li>Choose one sustainable practice that addresses your main challenge</li>
                <li>Start on a small portion of your farm to test and learn</li>
                <li>Connect with other farmers practicing sustainable methods</li>
                <li>Document your results to track improvements over time</li>
              </ol>
              <p>
                Remember that sustainable farming is a journey of continuous improvement. Each small change contributes to the long-term health of your farm and the environment.
              </p>
            </div>

            <div className="bg-ghana-green-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-ghana-green-700 mb-4">Additional Resources</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Local Support:</h3>
                  <p>Contact your district agricultural extension officer for personalized advice and potential support programs.</p>
                </li>
                <li>
                  <h3 className="font-semibold">Training Opportunities:</h3>
                  <p>The Ministry of Food and Agriculture offers periodic training on sustainable farming techniques. Check with your local MOFA office.</p>
                </li>
                <li>
                  <h3 className="font-semibold">Farmer Groups:</h3>
                  <p>Join or form a farmer group to share knowledge, resources, and experiences with sustainable practices.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/education">
              <span className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-ghana-green-600 hover:bg-ghana-green-700">
                ← Back to Education Platform
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}