import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";
import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import AnimatedButton from "../ui/animated-button";
import { useToast } from "../../hooks/use-toast";

const Contact = () => {
  const { ref, controls } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const services = [
    "The Royal Package",
    "Signature Cut",
    "Beard Sculpting",
    "Hot Towel Shave",
    "Kids Cut",
    "Styling & Color"
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
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <h2 className="text-5xl font-light text-black mb-6 leading-tight">
            FIND{" "}
            <span className="font-bold">US</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Visit us at our premium location in Huntsville for the ultimate grooming experience
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Business Information */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-black mb-8">Business Details</h3>
              
              <div className="space-y-6">
                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-black text-white p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Address</h4>
                    <p className="text-gray-700 leading-relaxed">
                      2556 Sparkman Dr NW<br/>
                      Huntsville, AL 35810<br/>
                      United States
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-black text-white p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Phone</h4>
                    <p className="text-gray-700">
                      <a href="tel:+12564685606" className="hover:text-black transition-colors duration-300">
                        +1 (256) 468-5606
                      </a>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-black text-white p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Hours</h4>
                    <div className="text-gray-700 space-y-1">
                      <p>Tuesday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 5:00 PM</p>
                      <p>Sunday & Monday: Closed</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <a
                  href="https://www.google.com/maps/place/2556+Sparkman+Dr+NW,+Huntsville,+AL+35810"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AnimatedButton variant="primary" className="w-full sm:w-auto">
                    <MapPin className="mr-2" size={18} />
                    View on Google Maps
                  </AnimatedButton>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-black mb-8">Get In Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300 hover:shadow-md"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300 hover:shadow-md"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300 hover:shadow-md"
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300 hover:shadow-md"
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300 hover:shadow-md"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none resize-none transition-all duration-300 hover:shadow-md"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AnimatedButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    icon={Send}
                  >
                    Send Message
                  </AnimatedButton>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Google Maps Embed */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ delay: 0.4 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.1234567890!2d-86.7234567!3d34.7234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2556%20Sparkman%20Dr%20NW%2C%20Huntsville%2C%20AL%2035810!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
              title="Kut'n Up Barber Shop Location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
