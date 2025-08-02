import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import AnimatedButton from "./animated-button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  price: string;
  duration: string;
  features: string[];
  featured?: boolean;
  index: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  price,
  duration,
  features,
  featured = false,
  index
}: ServiceCardProps) => {
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
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      className={`p-8 rounded-2xl shadow-lg transition-all duration-500 group cursor-pointer animate-morphing ${
        featured
          ? "bg-black text-white ring-2 ring-gray-300"
          : "bg-white text-black border border-gray-100 hover:shadow-2xl"
      }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ 
        y: -15,
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
        transition: { type: "spring", stiffness: 300, damping: 30 }
      }}
      animate={{
        y: [0, -3, 0],
        rotateZ: [0, 1, -1, 0],
      }}
      transition={{
        y: {
          duration: 4 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        },
        rotateZ: {
          duration: 6 + index * 0.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.1,
        }
      }}
    >
      <motion.div
        className="mb-6"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
        viewport={{ once: true }}
      >
        <div className={`inline-flex p-4 rounded-2xl ${
          featured ? "bg-white/10" : "bg-gray-100"
        } group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={32} className={featured ? "text-white" : "text-black"} />
        </div>
      </motion.div>

      <motion.h3
        className="text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 + 0.3 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>

      <motion.div
        className={`text-3xl font-light mb-6 ${
          featured ? "text-white" : "text-black"
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 + 0.4 }}
        viewport={{ once: true }}
      >
        {price}
        <span className={`text-lg ml-1 ${
          featured ? "text-gray-300" : "text-gray-500"
        }`}>
          /{duration}
        </span>
      </motion.div>

      <motion.ul
        className={`space-y-3 mb-8 ${
          featured ? "text-gray-200" : "text-gray-600"
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.5 }}
        viewport={{ once: true }}
      >
        {features.map((feature, featureIndex) => (
          <motion.li
            key={feature}
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.6 + featureIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="mr-2 mt-1">•</span>
            {feature}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.8 }}
        viewport={{ once: true }}
      >
        <AnimatedButton
          variant={featured ? "secondary" : "primary"}
          className="w-full"
        >
          Book Now
        </AnimatedButton>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
