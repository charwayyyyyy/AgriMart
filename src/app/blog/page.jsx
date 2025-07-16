'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Sustainable Farming Practices in Ghana',
    excerpt: 'Learn about how Ghanaian farmers are adopting sustainable farming practices to combat climate change and improve crop yields.',
    imageUrl: '/images/blog/sustainable-farming.jpg',
    date: 'June 15, 2023',
    author: 'Kwame Mensah',
    category: 'Sustainability'
  },
  {
    id: 2,
    title: 'The Rise of Organic Farming in West Africa',
    excerpt: 'Organic farming is gaining popularity across West Africa. Discover how this trend is transforming agriculture in the region.',
    imageUrl: '/images/blog/organic-farming.jpg',
    date: 'July 3, 2023',
    author: 'Ama Serwaa',
    category: 'Organic Farming'
  },
  {
    id: 3,
    title: 'Technology Innovations for Small-Scale Farmers',
    excerpt: 'New technologies are helping small-scale farmers increase productivity and access markets. Here is how tech is changing farming in Ghana.',
    imageUrl: '/images/blog/farming-tech.jpg',
    date: 'August 12, 2023',
    author: 'Yaw Owusu',
    category: 'Technology'
  },
  {
    id: 4,
    title: 'Traditional Farming Knowledge: Preserving Ghanas Agricultural Heritage',
    excerpt: 'Traditional farming methods contain valuable knowledge that can complement modern techniques. Learn how farmers are preserving this heritage.',
    imageUrl: '/images/blog/traditional-farming.jpg',
    date: 'September 5, 2023',
    author: 'Abena Pokuaa',
    category: 'Culture'
  },
  {
    id: 5,
    title: 'Market Access: Connecting Farmers to Consumers',
    excerpt: 'Improving market access is crucial for farmer livelihoods. Discover initiatives that are helping bridge the gap between farmers and consumers.',
    imageUrl: '/images/blog/market-access.jpg',
    date: 'October 20, 2023',
    author: 'Kofi Adu',
    category: 'Markets'
  },
  {
    id: 6,
    title: 'Climate-Resilient Crops for Ghanas Changing Weather Patterns',
    excerpt: 'As climate change affects weather patterns, farmers are turning to resilient crop varieties. Learn about the crops that thrive in Ghanas evolving climate.',
    imageUrl: '/images/blog/climate-crops.jpg',
    date: 'November 8, 2023',
    author: 'Akosua Mensah',
    category: 'Climate Change'
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-ghana-green-700 font-poppins mb-4">
            AgriMart Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Insights, stories, and knowledge from Ghana's agricultural community
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden lg:flex">
            <div className="lg:w-1/2 h-64 lg:h-auto bg-gray-300 relative">
              <div className="absolute inset-0 bg-ghana-green-700 flex items-center justify-center text-white text-lg font-medium">
                Featured Post Image
                <br />
                (Will be added later)
              </div>
            </div>
            <div className="p-8 lg:w-1/2">
              <div className="uppercase tracking-wide text-sm text-ghana-gold-500 font-semibold">Featured</div>
              <h2 className="mt-2 text-2xl font-bold text-ghana-green-700 font-poppins">
                Transforming Agriculture in Ghana: Challenges and Opportunities
              </h2>
              <p className="mt-3 text-gray-600">
                Ghana's agricultural sector is undergoing significant transformation. This comprehensive article explores the challenges farmers face and the opportunities that lie ahead for sustainable growth and development.
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-ghana-green-100 flex items-center justify-center">
                  <span className="text-ghana-green-700 font-bold">AM</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Dr. Akosua Manu</p>
                  <p className="text-sm text-gray-500">May 28, 2023 • 12 min read</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="#" className="text-ghana-green-600 hover:text-ghana-green-700 font-medium flex items-center">
                  Read Full Article
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <div className="h-48 bg-gray-300 relative">
                <div className="absolute inset-0 bg-ghana-green-100 flex items-center justify-center text-ghana-green-700 text-sm font-medium">
                  Blog Image
                  <br />
                  (Will be added later)
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-ghana-gold-500">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-ghana-green-700 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-ghana-green-100 flex items-center justify-center">
                      <span className="text-ghana-green-700 font-bold text-xs">{post.author.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-700">{post.author}</span>
                  </div>
                  <Link href="#" className="text-ghana-green-600 hover:text-ghana-green-700 text-sm font-medium">
                    Read more →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          className="mt-16 bg-ghana-green-50 rounded-xl p-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-ghana-green-700 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Stay updated with the latest farming tips, market trends, and agricultural news from Ghana</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border-gray-300 focus:ring-ghana-green-500 focus:border-ghana-green-500"
                required
              />
              <button 
                type="submit"
                className="bg-ghana-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-ghana-green-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}