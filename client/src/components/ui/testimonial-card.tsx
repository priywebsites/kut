import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  initials: string;
  rating: number;
  text: string;
  index: number;
}

const TestimonialCard = ({
  name,
  role,
  initials,
  rating,
  text,
  index
}: TestimonialCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group cursor-pointer animate-morphing"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ 
        y: -12,
        scale: 1.03,
        rotateY: 3,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
        transition: { type: "spring", stiffness: 300, damping: 30 }
      }}
      animate={{
        y: [0, -2, 0],
        scale: [1, 1.01, 1],
      }}
      transition={{
        y: {
          duration: 5 + index * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        },
        scale: {
          duration: 4 + index * 0.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }
      }}
    >
      <motion.div
        className="flex items-center mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2 + 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex mr-4">
          {[...Array(rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 + 0.3 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <Star className="w-5 h-5 fill-blue-500 text-blue-500" />
            </motion.div>
          ))}
        </div>
        <span className="text-gray-500 text-sm font-medium">{rating}/5</span>
      </motion.div>

      <motion.p
        className="text-gray-700 mb-6 italic leading-relaxed group-hover:text-black transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.4 }}
        viewport={{ once: true }}
      >
        "{text}"
      </motion.p>

      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 + 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: 5 }}
        >
          {initials}
        </motion.div>
        <div>
          <motion.div
            className="font-semibold text-black group-hover:scale-105 transition-transform duration-300 origin-left"
            whileHover={{ x: 2 }}
          >
            {name}
          </motion.div>
          <div className="text-gray-500 text-sm">{role}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;
