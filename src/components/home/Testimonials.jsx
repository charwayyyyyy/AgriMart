"use client";
import { useState, useEffect } from "react";
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
    id: 2,
    name: "Abena Osei",
    role: "Cassava and Plantain Farmer",
    location: "Eastern Region",
    image: "/farmers/abena.jpg",
    content:
      "Thanks to AgriMart, I can now sell my cassava and plantain directly to customers in Accra. The platform has eliminated middlemen, allowing me to earn more while providing better prices to my customers.",
  },
  {
    id: 3,
    name: "Yaw Darko",
    role: "Rice Farmer",
    location: "Volta Region",
    image: "/farmers/yaw.jpg",
    content:
      "The support from AgriMart has been incredible. They helped me digitize my rice farming business, and now I have regular customers who appreciate the quality of my local rice varieties.",
  },
  {
    id: 4,
    name: "Efua Tawiah",
    role: "Fruit Farmer",
    location: "Central Region",
    image: "/farmers/efua.jpg",
    content:
      "AgriMart's platform is user-friendly and has helped me showcase my fresh fruits to a wider market. The direct connection with customers has improved my understanding of market demands.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
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
          <div className="relative h-[400px] sm:h-[350px] md:h-[300px] lg:h-[280px]">
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

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="h-full flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 flex-shrink-0 flex items-center justify-center p-6 lg:p-8 bg-gray-50">
                    <img
                      className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-full object-cover border-4 border-white shadow-md"
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
