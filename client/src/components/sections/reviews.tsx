import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";
import TestimonialCard from "../ui/testimonial-card";
import { Star } from "lucide-react";

const Reviews = () => {
  const { ref, controls } = useScrollAnimation();

  const reviews = [
    {
      name: "Michael Rodriguez",
      role: "Regular Client",
      initials: "MR",
      rating: 5,
      text: "Exceptional service and attention to detail. The best barbershop experience I've had in Huntsville. The atmosphere is professional yet relaxed."
    },
    {
      name: "David Chen",
      role: "First-time Client",
      initials: "DC",
      rating: 5,
      text: "These guys know their craft. My fade was perfect and the hot towel shave was incredibly relaxing. Will definitely be returning."
    },
    {
      name: "James Thompson",
      role: "Loyal Customer",
      initials: "JT",
      rating: 5,
      text: "Premium quality service at a fair price. The barbers are skilled professionals who take pride in their work. Highly recommended!"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="reviews" className="py-24 ultra-gradient relative overflow-hidden" ref={ref}>
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-blue-500' : 'bg-gray-500'}`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={controls}
          variants={headerVariants}
        >
          <h2 className="text-5xl font-light text-black mb-6 leading-tight">
            CLIENT{" "}
            <span className="font-bold">REVIEWS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear what our satisfied clients have to say about their premium grooming experience
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {reviews.map((review, index) => (
            <TestimonialCard
              key={review.name}
              {...review}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              </motion.div>
            ))}
          </div>
          <p className="text-gray-600 text-lg">
            Rated 5.0/5 stars by our valued clients
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
