import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Loader2, MapPin, CheckCircle, Construction, AlertTriangle } from 'lucide-react';
import { Toaster, toast } from 'sonner';

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const contacts = [
    { email: 'owen@moarenergy.co.zw', name: 'Owen', title: '' },
    { email: 'roy@moarenergy.co.zw', name: 'Roy', title: '' },
    { email: 'mark@moarenergy.co.zw', name: 'Mark', title: '' }
  ];

  const services = [
    'Mineral Processing & Trading',
    'Renewable Energy',
    'Energy Trading',
  ];

  const handleCopyEmail = (email) => {
    setIsLoading(true);
    navigator.clipboard.writeText(email);
    toast.success('Email copied to clipboard');
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleCopyPhone = (phone) => {
    setIsLoading(true);
    navigator.clipboard.writeText(phone);
    toast.success('Phone number copied to clipboard');
    setTimeout(() => setIsLoading(false), 500);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const constructionBanner = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "spring", stiffness: 200, damping: 20 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden">
      <Toaster position="top-center" />
      
      {/* Construction Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, #F7941D 20px, #F7941D 40px)',
          transform: 'rotate(45deg) scale(2)',
          animation: 'movePattern 20s linear infinite'
        }} />
      </div>
      
      <main className="container mx-auto px-4 py-8 md:py-16 relative">
        <motion.div
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { staggerChildren: 0.2 }
          }}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Header Section */}
          <div className="text-center space-y-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mb-8"
            >
              <Loader2 className="w-12 h-12 mx-auto text-[#F7941D]" />
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F7941D] to-[#58595B]"
            >
              MOAR ENERGY & COMMODITIES
            </motion.h1>
            
            {/* Enhanced Construction Notice */}
            <motion.div
              variants={constructionBanner}
              className="bg-[#F7941D]/20 backdrop-blur-sm rounded-xl p-6 mt-8 border-2 border-[#F7941D] shadow-lg"
            >
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Construction className="w-8 h-8 text-[#F7941D] animate-pulse" />
                <AlertTriangle className="w-8 h-8 text-[#F7941D] animate-pulse" />
              </div>
              <h2 className="text-2xl font-bold text-[#F7941D]">Website Under Construction</h2>
              <p className="text-white/80 mt-2">We're building something amazing. Check back soon!</p>
            </motion.div>
          </div>

          {/* Services Section */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Our Expertise</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(247, 148, 29, 0.2)' }}
                  className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg transition-all duration-200"
                >
                  <CheckCircle className="w-5 h-5 text-[#F7941D]" />
                  <span>{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Address Section */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <p className="text-lg text-[#F7941D]">
              36 Silwood Close, Chisipite Business Centre, Harare
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-center">Connect With Us</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {contacts.map((contact, index) => (
                <motion.button
                  key={contact.email}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCopyEmail(contact.email)}
                  className="flex flex-col items-center space-y-2 bg-white/5 hover:bg-[#F7941D]/10 rounded-xl p-6 transition-all duration-200"
                >
                  <Mail className="w-6 h-6 text-[#F7941D]" />
                  <div className="text-center">
                    <p className="font-semibold">{contact.name}</p>
                    <p className="text-sm mt-1">{contact.email}</p>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCopyPhone('+263 78 004 9196')}
                className="flex flex-col items-center space-y-2 bg-white/5 hover:bg-[#F7941D]/10 rounded-xl p-6 transition-all duration-200"
              >
                <Phone className="w-6 h-6 text-[#F7941D]" />
                <div className="text-center">
                  <p className="font-semibold">Mobile</p>
                  <p className="text-sm mt-1">+263 78 004 9196</p>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCopyPhone('+26324249614')}
                className="flex flex-col items-center space-y-2 bg-white/5 hover:bg-[#F7941D]/10 rounded-xl p-6 transition-all duration-200"
              >
                <Phone className="w-6 h-6 text-[#F7941D]" />
                <div className="text-center">
                  <p className="font-semibold">Landline</p>
                  <p className="text-sm mt-1">+26324249614</p>
                </div>
              </motion.button>
            </div>

            <motion.div 
              variants={fadeInUp}
              className="flex items-center justify-center space-x-2 text-sm text-[#F7941D] mt-8"
            >
              <MapPin className="w-4 h-4" />
              <span>Harare, Zimbabwe</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default LandingPage;