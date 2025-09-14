import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { User, Mail, Phone, Building, MessageSquare, Send } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  const services = [
    'Property Management',
    'Maintenance Consulting',
    'Investment Analysis',
    'Risk Management',
    'Tenant Relations',
    'Financial Planning',
    'Other'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass-effect rounded-2xl p-8"
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Send us a <span className="gradient-text">Message</span>
          </h2>
          <p className="text-gray-300">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full pl-10 pr-4 py-3 bg-thunders/50 border border-thunders-light rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="John Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full pl-10 pr-4 py-3 bg-thunders/50 border border-thunders-light rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="cihan@cihan.nyc" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 bg-thunders/50 border border-thunders-light rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="917-535-3787" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 bg-thunders/50 border border-thunders-light rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Your Company" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest</label>
            <select name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 bg-thunders/50 border border-thunders-light rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold">
              <option value="">Select a service</option>
              {services.map((service) => (<option key={service} value={service}>{service}</option>))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
              <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full pl-10 pr-4 py-3 bg-thunders/50 border border-thunders-light rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold resize-none" placeholder="Tell us about your property needs and goals..." />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold-light text-black py-4 text-lg">
            <Send className="mr-2" size={20} />
            Send Message
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;