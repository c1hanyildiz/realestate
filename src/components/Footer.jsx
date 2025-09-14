import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Property Management', href: '/services' },
        { name: 'Maintenance Consulting', href: '/services' },
        { name: 'Property Lookup', href: '/property-lookup' },
        { name: 'Investment Analysis', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/contact' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
        { name: 'Careers', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Property Guides', href: '/contact' },
        { name: 'Market Reports', href: '/contact' },
        { name: 'FAQ', href: '/contact' },
        { name: 'Support', href: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];
  
  const logoUrl = "https://horizons-cdn.hostinger.com/8926b371-f519-44eb-af77-4ae82faf4e9e/a2f49d41c4d3e42d853aa1b6b5fd217f.png";

  return (
    <footer className="bg-thunders-dark border-t border-thunders-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Link to="/">
                <img src={logoUrl} alt="Cihan Yildiz Logo" className="h-20 w-auto" />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner in real estate consulting, property management, and maintenance solutions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors">
                  <Mail size={16} />
                  <a href="mailto:cihan@cihan.nyc" className="text-sm">cihan@cihan.nyc</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors">
                  <Phone size={16} />
                  <a href="tel:917-535-3787" className="text-sm">917-535-3787</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin size={16} />
                  <span className="text-sm">242 West 30th Street, Suite 604, NY 10001</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <span className="text-white font-semibold text-base">{section.title}</span>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-gold transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-thunders-light flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Cihan Yildiz. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, color: '#D4AF37' }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-gold transition-colors duration-200"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;