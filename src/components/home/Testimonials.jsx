"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Kwame Mensah",
    role: "Organic Vegetable Farmer",
    location: "Ashanti Region",
    image: "/farmers/kwame.jpg",
    content:
      "AgriMart has transformed how I sell my organic vegetables. I now reach customers across Ghana who value fresh, chemical-free produce. The platform has helped me grow my farm business significantly.",
  },
  {
    id: 1,
    name: "Maud Susu",
    role: "Organic Vegetable Farmer",
    location: "Volta Region",
    image: "/farmers/maud.jpg",
    content:
      "AgriMart has transformed how I sell my organic vegetables. I now reach customers across Ghana who value fresh, chemical-free produce. The platform has helped me grow my farm business significantly.",
  },
  // ... (keep other testimonials the same)
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;
  const swipeConfidenceThreshold = 10000;

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prev) =>
        (prev + newDirection + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20" ref={testimonialRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-green-600">
            Testimonials
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Farmers
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="relative h-[400px] sm:h-[350px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) paginate(1);
                  else if (swipe > swipeConfidenceThreshold) paginate(-1);
                }}
                className="absolute inset-0 bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="h-full flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 flex-shrink-0 flex items-center justify-center p-6 lg:p-8 bg-gray-50">
                    <img
                      className="h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover border-4 border-white shadow-md"
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                    />
                  </div>
                  <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                    <blockquote className="mb-4">
                      <p className="text-base sm:text-lg text-gray-700">
                        "{testimonials[currentIndex].content}"
                      </p>
                    </blockquote>
                    <div className="mt-4">
                      <p className="text-lg font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm sm:text-base text-gray-500">
                        {testimonials[currentIndex].role} •{" "}
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-8 sm:w-10 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-green-600" : "bg-gray-300"
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
