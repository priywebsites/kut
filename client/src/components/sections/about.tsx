import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";

const About = () => {
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section id="about" className="py-24 dynamic-gradient relative overflow-hidden" ref={ref}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-500 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-tl from-gray-300 to-gray-600"
          style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl group"
            variants={imageVariants}
          >
            <img
              src={`/attached_assets/Screenshot 2025-08-02 at 1.04.01 PM_1754157889780.png?t=${Date.now()}`}
              alt="Kut'n Up Barber Shop storefront"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                // Fallback to placeholder if image doesn't exist
                e.currentTarget.src = "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-5xl font-light text-black mb-8 leading-tight"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              ABOUT{" "}
              <motion.span
                className="font-bold block bg-gradient-to-r from-black via-blue-600 to-black bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                KUT'N UP
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Located in the heart of Huntsville, Kut'n Up Barber Shop delivers
              precision cuts and expert grooming. Our skilled barbers blend
              traditional techniques with modern style, ensuring every client
              leaves looking and feeling like royalty.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 mb-10 leading-relaxed"
              variants={itemVariants}
            >
              We believe that a great haircut is more than just a service—it's an
              experience that boosts confidence and reflects your personal style.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-8"
              variants={containerVariants}
            >
              <motion.div
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-3xl font-bold text-black mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.6 }}
                >
                  5+
                </motion.div>
                <div className="text-gray-600">Years of Excellence</div>
              </motion.div>

              <motion.div
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-3xl font-bold text-black mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.8 }}
                >
                  1000+
                </motion.div>
                <div className="text-gray-600">Happy Clients</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
