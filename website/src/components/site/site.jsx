import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Loader2 } from 'lucide-react';
import { Toaster, toast } from 'sonner';

const LandingPage = () => {
  const contacts = [
    { email: 'roy@moarenergy.co.zw', name: 'Roy' },
    { email: 'owen@moarenergy.co.zw', name: 'Owen' },
    { email: 'mark@moarenergy.co.zw', name: 'Mark' }
  ];

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    toast.success('Email copied to clipboard');
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+263 78 004 9196');
    toast.success('Phone number copied to clipboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-950 text-white">
      <Toaster position="top-center" />
      
      <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8 max-w-2xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mb-8"
          >
            <Loader2 className="w-12 h-12 mx-auto text-blue-400" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400 pb-3">
            MOAR Energy
          </h1>

          <p className="text-xl md:text-2xl text-blue-200 mb-8">
            Specializing in Energy, Mineral and Commodity Trading
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-lg mb-4">
              Our website is currently under development. We're working on bringing you a comprehensive platform to showcase our services.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            
            <div className="space-y-4">
              {contacts.map((contact) => (
                <motion.button
                  key={contact.email}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCopyEmail(contact.email)}
                  className="flex items-center justify-center space-x-2 w-full bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>{contact.name}: {contact.email}</span>
                </motion.button>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCopyPhone}
                className="flex items-center justify-center space-x-2 w-full bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>+263 78 004 9196</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default LandingPage;