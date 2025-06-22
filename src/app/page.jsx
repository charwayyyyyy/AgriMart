"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Testimonials from "@/components/home/Testimonials";

// Sample featured products
const featuredProducts = [
  {
    id: 1,
    name: "Premium Cocoa Beans",
    price: 150.0,
    image: "/products/cocoa.jpg",
    category: "Cash Crops",
    region: "Western Region",
  },
  {
    id: 2,
    name: "Organic Plantain Bunch",
    price: 25.0,
    image: "/products/plantain.jpg",
    category: "Fruits",
    region: "Ashanti Region",
  },
  {
    id: 3,
    name: "Fresh Garden Eggs",
    price: 10.0,
    image: "/products/garden-eggs.jpg",
    category: "Vegetables",
    region: "Volta Region",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-green-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <motion.div
            className="px-6 lg:px-0 lg:pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <motion.a
                    href="#featured"
                    className="inline-flex space-x-6"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="rounded-full bg-green-600/10 px-3 py-1 text-sm font-semibold leading-6 text-green-600 ring-1 ring-inset ring-green-600/10">
                      What's new
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                      <span>Just shipped v1.0</span>
                    </span>
                  </motion.a>
                </div>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Fresh from Ghana's Finest Farms
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Connect directly with local farmers, access fresh produce, and
                  support sustainable agriculture in Ghana. Experience
                  farm-to-table convenience with our modern marketplace.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <motion.a
                    href="/shop"
                    className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Shop Now
                  </motion.a>
                  <motion.a
                    href="/about"
                    className="text-sm font-semibold leading-6 text-gray-900"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-green-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-green-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-green-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            Featured Products
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14">
                        {/* Placeholder for featured product image */}
                        <div className="h-[400px] rounded-md bg-white/5 p-4">
                          <img
                            src="/hero-image.jpg"
                            alt="Farm produce"
                            className="h-full w-full object-cover rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Products Section */}
      <section id="featured" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Discover the finest agricultural products from across Ghana
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <motion.article
                key={product.id}
                className="flex flex-col items-start justify-between bg-white rounded-lg shadow-sm overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-[16/9] w-full object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2023" className="text-gray-500">
                      New Arrival
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {product.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {product.name}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      From {product.region}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-x-4">
                    <div className="text-lg font-bold text-green-700">
                      GH₵{product.price.toFixed(2)}
                    </div>
                    <motion.button
                      className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  );
}
