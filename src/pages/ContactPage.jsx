import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Cihan Yildiz - Get Expert Real Estate Consulting</title>
        <meta name="description" content="Contact Cihan Yildiz for expert real estate consulting, property management, maintenance consulting, and investment analysis services. Free consultation available." />
        <meta property="og:title" content="Contact Cihan Yildiz - Get Expert Real Estate Consulting" />
        <meta property="og:description" content="Contact Cihan Yildiz for expert real estate consulting, property management, maintenance consulting, and investment analysis services. Free consultation available." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden bg-black">
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://horizons-cdn.hostinger.com/8926b371-f519-44eb-af77-4ae82faf4e9e/a2f49d41c4d3e42d853aa1b6b5fd217f.png')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="gradient-text">Get in Touch</span>
              <br />
              <span className="text-white">Let's Discuss Your Property Goals</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your real estate investments? Our expert team is here to provide personalized solutions for your property needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-thunders-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <ContactMap />
    </>
  );
};

export default ContactPage;