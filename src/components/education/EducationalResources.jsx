'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EducationalResources() {
  // Sample educational resources
  const resources = [
    {
      id: 1,
      title: 'Sustainable Farming Practices',
      description: 'Learn about eco-friendly farming techniques suitable for Ghana\'s climate.',
      imageUrl: '/images/education/sustainable-farming.jpg',
      link: '/education/sustainable-farming'
    },
    {
      id: 2,
      title: 'Pest Management',
      description: 'Effective strategies to manage pests while minimizing chemical use.',
      imageUrl: '/images/education/pest-management.jpg',
      link: '/education/pest-management'
    },
    {
      id: 3,
      title: 'Water Conservation',
      description: 'Techniques for efficient water usage during dry seasons.',
      imageUrl: '/images/education/water-conservation.jpg',
      link: '/education/water-conservation'
    },
    {
      id: 4,
      title: 'Soil Health Management',
      description: 'Maintaining soil fertility for better crop yields.',
      imageUrl: '/images/education/soil-health.jpg',
      link: '/education/soil-health'
    },
    {
      id: 5,
      title: 'Post-Harvest Handling',
      description: 'Reduce losses and maintain quality after harvesting your crops.',
      imageUrl: '/images/education/post-harvest.jpg',
      link: '/education/post-harvest'
    },
    {
      id: 6,
      title: 'Market Access Strategies',
      description: 'Connect with buyers and get better prices for your produce.',
      imageUrl: '/images/education/market-access.jpg',
      link: '/education/market-access'
    },
    {
      id: 7,
      title: 'Climate-Smart Agriculture',
      description: 'Adapt your farming practices to changing climate conditions.',
      imageUrl: '/images/education/climate-smart.jpg',
      link: '/education/climate-smart'
    },
    {
      id: 8,
      title: 'Farm Business Management',
      description: 'Learn basic accounting and business skills for your farm.',
      imageUrl: '/images/education/farm-business.jpg',
      link: '/education/farm-business'
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-ghana-green-700 mb-8">Educational Resources for Farmers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource) => (
          <motion.div
            key={resource.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-48 bg-gray-200">
              {/* Placeholder for image */}
              <div className="h-full w-full flex items-center justify-center bg-ghana-green-100 text-ghana-green-700">
                <span className="text-sm font-medium">Image: {resource.title}</span>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-ghana-green-700 mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{resource.description}</p>
              <Link href={resource.link}>
                <span className="text-ghana-green-600 font-medium hover:text-ghana-green-700 hover:underline">
                  Learn more →
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}