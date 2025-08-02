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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dynamic-gradient">
      {/* INSANE Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full animate-pulse-slow"
          animate={{
            y: [0, -30, 15, -20, 0],
            x: [0, 20, -10, 15, 0],
            scale: [1, 1.2, 0.8, 1.1, 1],
            rotate: [0, 180, 90, 270, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-16 w-12 h-12 bg-gradient-to-tr from-gray-400 to-gray-600 rounded-xl animate-morphing"
          animate={{
            y: [0, -40, 20, -15, 0],
            x: [0, -25, 30, -10, 0],
            scale: [1, 0.7, 1.3, 0.9, 1],
            rotate: [0, -90, 180, -45, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-gradient-to-bl from-gray-200 to-gray-500"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            y: [0, -25, 10, -30, 0],
            x: [0, 15, -20, 25, 0],
            scale: [1, 1.4, 0.6, 1.2, 1],
            rotate: [0, 120, 240, 90, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-2/3 right-1/4 w-4 h-16 bg-gradient-to-t from-gray-300 to-gray-600 rounded-full animate-bounce-subtle"
          animate={{
            y: [0, -35, 25, -15, 0],
            x: [0, -30, 20, -5, 0],
            scaleY: [1, 0.8, 1.2, 0.9, 1],
            rotate: [0, 45, -30, 60, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Orbiting Elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute -top-2 -left-2 w-4 h-4 bg-blue-600 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 w-48 h-48"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute -bottom-2 -right-2 w-3 h-3 bg-gray-400 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        {/* Particle System */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-400 rounded-full"
            style={{
              top: `${20 + (i * 7)}%`,
              left: `${10 + (i * 8)}%`,
            }}
            animate={{
              y: [0, -100, 50, -75, 0],
              opacity: [0, 1, 0.5, 1, 0],
              scale: [0, 1, 0.5, 1.2, 0],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
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
          <motion.span
            className="gradient-text-animated inline-block"
            animate={{
              y: [0, -5, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            PRECISION
          </motion.span>
          <motion.span
            className="block font-bold gradient-text-animated"
            initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateX: 0,
              y: [0, -3, 0],
            }}
            transition={{ 
              delay: 0.8, 
              type: "spring", 
              stiffness: 200,
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }
            }}
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

        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(0, 0, 0, 0.3)",
                "0 0 0 20px rgba(0, 0, 0, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <AnimatedButton
              variant="primary"
              size="xl"
              className="shadow-2xl transform transition-all duration-500 animate-pulse-slow"
            >
              <motion.span
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Book Your Experience
              </motion.span>
            </AnimatedButton>
          </motion.div>
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
