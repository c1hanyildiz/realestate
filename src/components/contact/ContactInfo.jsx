import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, Calendar, CheckCircle } from 'lucide-react';

const ContactInfo = () => {
  const { toast } = useToast();

  const contactInfo = [
    { icon: Phone, title: 'Phone', details: '917-535-3787', description: 'Mon-Fri from 8am to 6pm EST' },
    { icon: Mail, title: 'Email', details: 'cihan@cihan.nyc', description: 'We respond within 24 hours' },
    { icon: MapPin, title: 'Office', details: '242 West 30th Street, Suite 604', description: 'NY 10001' },
    { icon: Clock, title: 'Business Hours', details: 'Monday - Friday: 8am - 6pm', description: 'Saturday: 9am - 4pm' }
  ];

  const features = [
    'Free initial consultation',
    'Expert property analysis',
    'Customized solutions',
    '24/7 emergency support',
    'Transparent pricing',
    'Proven track record'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Contact <span className="gradient-text">Information</span>
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Get in touch with our expert team. We're here to help you achieve your real estate goals with personalized solutions and professional service.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 space-y-3"
            >
              <div className="flex items-center space-x-3">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-lg">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white">{info.title}</h3>
              </div>
              <p className="text-white font-medium">{info.details}</p>
              <p className="text-gray-400 text-sm">{info.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-effect rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4">
          Why Choose <span className="gradient-text">Cihan Yildiz</span>
        </h3>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <CheckCircle size={18} className="text-gold flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-gold to-gold-dark rounded-xl p-6 text-center"
      >
        <Calendar size={32} className="text-black mx-auto mb-4" />
        <h3 className="text-xl font-bold text-black mb-2">Free Consultation Available</h3>
        <p className="text-black/80 mb-4">Schedule a complimentary consultation to discuss your property goals and explore our services.</p>
        <Button
          onClick={() => toast({
            title: "Schedule Consultation",
            description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
            duration: 5000,
          })}
          variant="secondary"
          className="bg-black text-white hover:bg-black/80"
        >
          <Calendar className="mr-2" size={18} />
          Schedule Now
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;