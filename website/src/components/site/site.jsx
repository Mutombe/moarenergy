import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Loader2, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { Toaster, toast } from 'sonner';

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const contacts = [
    { email: 'roy@moarenergy.co.zw', name: 'Roy', title: 'Business Development' },
    { email: 'owen@moarenergy.co.zw', name: 'Owen', title: 'Operations Manager' },
    { email: 'mark@moarenergy.co.zw', name: 'Mark', title: 'Technical Director' }
  ];

  const services = [
    'Energy Trading Solutions',
    'Mineral Resource Management',
    'Commodity Trading Services',
    'Supply Chain Optimization'
  ];

  const handleCopyEmail = (email) => {
    setIsLoading(true);
    navigator.clipboard.writeText(email);
    toast.success('Email copied to clipboard');
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleCopyPhone = () => {
    setIsLoading(true);
    navigator.clipboard.writeText('+263 78 004 9196');
    toast.success('Phone number copied to clipboard');
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-950 text-white">
      <Toaster position="top-center" />
      
      <main className="container mx-auto px-4 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Header Section */}
          <div className="text-center space-y-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mb-8"
            >
              <Loader2 className="w-12 h-12 mx-auto text-blue-400" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400">
              MOAR Energy
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-200">
              Powering Africa's Future Through Strategic Resource Management
            </p>
          </div>

          {/* Services Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
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
                  className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Website Coming Soon</h2>
            <p className="text-lg text-blue-200">
              We're developing a comprehensive platform to showcase our services and expertise in energy and resource management.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-center">Connect With Us</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {contacts.map((contact) => (
                <motion.button
                  key={contact.email}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCopyEmail(contact.email)}
                  className="flex flex-col items-center space-y-2 bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all duration-200"
                >
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div className="text-center">
                    <p className="font-semibold">{contact.name}</p>
                    <p className="text-sm text-blue-200">{contact.title}</p>
                    <p className="text-sm mt-1">{contact.email}</p>
                  </div>
                </motion.button>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCopyPhone}
                className="flex flex-col items-center space-y-2 bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all duration-200 md:col-span-2"
              >
                <Phone className="w-6 h-6 text-blue-400" />
                <div className="text-center">
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm mt-1">+263 78 004 9196</p>
                </div>
              </motion.button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm text-blue-200 mt-8">
              <MapPin className="w-4 h-4" />
              <span>Harare, Zimbabwe</span>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default LandingPage;