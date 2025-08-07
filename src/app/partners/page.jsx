'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Sample partners data
const partners = [
  {
    id: 1,
    name: 'Ghana Agricultural Association',
    logo: '/images/partners/gaa-logo.png',
    description: 'A leading agricultural association promoting sustainable farming practices across Ghana.',
    website: 'https://example.com/gaa'
  },
  {
    id: 2,
    name: 'Organic Farmers Network',
    logo: '/images/partners/ofn-logo.png',
    description: 'A network of organic farmers committed to chemical-free farming and environmental stewardship.',
    website: 'https://example.com/ofn'
  },
  {
    id: 3,
    name: 'AgriTech Ghana',
    logo: '/images/partners/agritech-logo.png',
    description: 'Providing innovative technological solutions to enhance agricultural productivity in Ghana.',
    website: 'https://example.com/agritech'
  },
  {
    id: 4,
    name: 'Ghana Ministry of Food and Agriculture',
    logo: '/images/partners/mofa-logo.png',
    description: 'Government ministry responsible for agricultural policy and development in Ghana.',
    website: 'https://example.com/mofa'
  },
  {
    id: 5,
    name: 'Rural Development Fund',
    logo: '/images/partners/rdf-logo.png',
    description: 'Supporting rural communities and small-scale farmers with financial assistance and resources.',
    website: 'https://example.com/rdf'
  },
  {
    id: 6,
    name: 'Ghana Export Promotion Authority',
    logo: '/images/partners/gepa-logo.png',
    description: 'Facilitating the export of Ghanaian agricultural products to international markets.',
    website: 'https://example.com/gepa'
  },
];

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    quote: "Our partnership with AgriMart has significantly increased our market reach and connected us with customers we wouldn't have reached otherwise.",
    author: "Kwame Asante",
    position: "Director, Ghana Agricultural Association",
    image: "/images/testimonials/kwame.jpg"
  },
  {
    id: 2,
    quote: "AgriMart's commitment to promoting sustainable farming aligns perfectly with our mission. Together, we're making a real difference in Ghana's agricultural sector.",
    author: "Ama Boateng",
    position: "Coordinator, Organic Farmers Network",
    image: "/images/testimonials/ama.jpg"
  },
  {
    id: 3,
    quote: "The technology integration and market access provided by AgriMart has helped our member farmers increase their income by over 30% in the past year.",
    author: "Dr. Kofi Mensah",
    position: "CEO, AgriTech Ghana",
    image: "/images/testimonials/kofi.jpg"
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-ghana-green-700 font-poppins mb-4">
            Our Partners
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading organizations across Ghana&apos;s agricultural ecosystem to support farmers and deliver the best products to consumers
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div 
              key={partner.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center p-6">
                <div className="w-full h-full flex items-center justify-center bg-ghana-green-50 rounded-lg">
                  <span className="text-ghana-green-700 font-bold text-xl">{partner.name}</span>
                  <span className="text-sm block mt-2">(Logo will be added later)</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ghana-green-700 mb-2">{partner.name}</h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-ghana-green-600 hover:text-ghana-green-700 font-medium flex items-center"
                >
                  Visit Website
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ghana-green-700 font-poppins mb-4">
              Partner Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear what our partners have to say about working with AgriMart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-ghana-green-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + (0.1 * index) }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-ghana-green-100 flex items-center justify-center mr-4">
                    <span className="text-ghana-green-700 font-bold">{testimonial.author.split(' ')[0][0]}{testimonial.author.split(' ')[1][0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Become a Partner Section */}
        <motion.div 
          className="bg-ghana-green-50 rounded-xl p-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-ghana-green-700 mb-4">Become a Partner</h2>
            <p className="text-gray-600 mb-6">
              Join our growing network of agricultural partners and help us transform Ghana&apos;s farming sector. 
              Whether you&apos;re a farmers&apos; association, an agri-tech company, or a government agency, we&apos;d love to collaborate with you.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-ghana-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-ghana-green-700 transition-colors duration-300"
              >
                Contact Us to Partner
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}