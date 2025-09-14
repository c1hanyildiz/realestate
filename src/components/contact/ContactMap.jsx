import React from 'react';
import { motion } from 'framer-motion';

const ContactMap = () => {
  return (
    <section className="py-20 bg-thunders-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Visit Our <span className="gradient-text">Office</span>
          </h2>
          <p className="text-lg text-gray-300">
            Located in the heart of New York, we're easily accessible for in-person consultations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 text-center"
        >
          <img  class="w-full h-96 object-cover rounded-xl" alt="Cihan Yildiz office location map" src="https://images.unsplash.com/photo-1690565914436-9a09ea223c38" />
          <div className="mt-6 space-y-2">
            <h3 className="text-xl font-bold text-white">Cihan Yildiz</h3>
            <p className="text-gray-300">242 West 30th Street, Suite 604</p>
            <p className="text-gray-300">NY 10001</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;