import { motion } from "framer-motion";
import { Instagram, Facebook, MapPin } from "lucide-react";
import AnimatedButton from "../ui/animated-button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Our Work" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: MapPin, href: "https://www.google.com/maps/place/2556+Sparkman+Dr+NW,+Huntsville,+AL+35810", label: "Google Maps" }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank", "noopener noreferrer");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <motion.h3
              className="text-3xl font-bold mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              KUT'N UP
            </motion.h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Premium grooming services in the heart of Huntsville. Experience the art of precision cutting and luxury styling.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.button
                  key={social.label}
                  onClick={() => handleNavClick(social.href)}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} className="group-hover:text-white transition-colors duration-300" />
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <motion.li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>2556 Sparkman Dr NW</li>
              <li>Huntsville, AL 35810</li>
              <li>
                <a
                  href="tel:+12564685606"
                  className="hover:text-white transition-colors duration-300"
                >
                  +1 (256) 468-5606
                </a>
              </li>
            </ul>
            
            <AnimatedButton
              variant="secondary"
              size="sm"
              onClick={() => handleNavClick("tel:+12564685606")}
            >
              Call Now
            </AnimatedButton>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              &copy; {currentYear} Kut'n Up Barber Shop. All rights reserved.
            </p>
            <div className="text-center">
              <AnimatedButton
                variant="ghost"
                size="sm"
                onClick={() => handleNavClick("#")}
              >
                Back to Top
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
