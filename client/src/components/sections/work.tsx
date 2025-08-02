import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";
import { useState } from "react";

// Using direct public paths for your barbershop images

const Work = () => {
  const { ref, controls } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const workImages = [
    {
      src: "/attached_assets/barbershop-work-1.png",
      alt: "",
      fallback: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
    },
    {
      src: "/attached_assets/barbershop-work-2.png", 
      alt: "",
      fallback: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
    },
    {
      src: "/attached_assets/barbershop-work-3.png",
      alt: "",
      fallback: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
    },
    {
      src: "/attached_assets/barbershop-work-4.png",
      alt: "",
      fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
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
    <section id="work" className="py-24 mega-gradient relative overflow-hidden" ref={ref}>
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-600 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-tr from-gray-400 to-gray-700"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -120, -240, -360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={controls}
          variants={headerVariants}
        >
          <h2 className="text-5xl font-light text-black mb-6 leading-tight">
            OUR{" "}
            <span className="font-bold bg-gradient-to-r from-black via-blue-600 to-black bg-clip-text text-transparent">WORK</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See the artistry and craftsmanship in action through our portfolio of premium cuts and styles
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {workImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer animate-morphing"
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                rotateY: 10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
              }}
              animate={{
                y: [0, -2, 0],
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                y: {
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }
              }}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-all duration-700"
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onError={(e) => {
                  e.currentTarget.src = image.fallback;
                }}
              />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              


              {/* Animated border */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-500/50 rounded-2xl"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ 
                  scale: hoveredIndex === index ? 0.95 : 1,
                  opacity: hoveredIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
