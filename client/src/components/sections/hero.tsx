import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedButton from "../ui/animated-button";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-10 w-4 h-4 bg-gray-300 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: mousePosition.x * 0.5,
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 0.2, ease: "easeOut" },
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-10 w-6 h-6 bg-gray-400 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: mousePosition.x * 0.3,
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
            x: { duration: 0.2, ease: "easeOut" },
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-gray-500 rounded-full"
          animate={{
            y: [0, -10, 0],
            x: mousePosition.x * 0.4,
          }}
          transition={{
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2 },
            x: { duration: 0.2, ease: "easeOut" },
          }}
        />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-light text-black mb-6 leading-tight"
          variants={itemVariants}
        >
          PRECISION
          <motion.span
            className="block font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          >
            MEETS STYLE
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Experience the art of premium grooming at Huntsville's most exclusive barbershop
        </motion.p>

        <motion.div variants={itemVariants}>
          <AnimatedButton
            variant="primary"
            size="xl"
            className="shadow-2xl transform hover:scale-105 transition-transform duration-300"
          >
            Book Your Experience
          </AnimatedButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
