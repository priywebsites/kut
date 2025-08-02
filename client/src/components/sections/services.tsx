import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";
import ServiceCard from "../ui/service-card";
import { Crown, Scissors, Users, Palette, Slice, Baby } from "lucide-react";

const Services = () => {
  const { ref, controls } = useScrollAnimation();

  const services = [
    {
      icon: Scissors,
      title: "SIGNATURE CUT",
      price: "$45",
      duration: "45 min",
      features: [
        "Personalized consultation",
        "Precision cutting technique",
        "Professional styling",
        "Finishing touches"
      ]
    },
    {
      icon: Users,
      title: "BEARD SCULPTING",
      price: "$35",
      duration: "30 min",
      features: [
        "Expert beard shaping",
        "Slice-sharp lineup",
        "Hot towel treatment",
        "Premium beard oil"
      ]
    },
    {
      icon: Slice,
      title: "HOT TOWEL SHAVE",
      price: "$40",
      duration: "30 min",
      features: [
        "Traditional straight razor",
        "Multi-stage hot towel prep",
        "Premium shaving cream",
        "Soothing aftercare"
      ]
    },
    {
      icon: Baby,
      title: "KIDS CUT",
      price: "$30",
      duration: "25 min",
      features: [
        "Age-appropriate styling",
        "Patient, gentle approach",
        "Fun atmosphere",
        "12 years and under"
      ]
    },
    {
      icon: Palette,
      title: "STYLING & COLOR",
      price: "$50",
      duration: "60 min",
      features: [
        "Professional color consultation",
        "Premium hair products",
        "Custom styling techniques",
        "Maintenance guidance"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-24 ultra-gradient relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
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
            OUR{" "}
            <span className="font-bold bg-gradient-to-r from-black via-blue-600 to-black bg-clip-text text-transparent">SERVICES</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience premium grooming services tailored to your unique style and preferences
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-600 mb-6">
            Ready to experience premium grooming? Book your appointment today.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
