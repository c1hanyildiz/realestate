import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioPage = () => {
  const projects = [
    {
      title: 'Cipriani 42nd Street Restoration',
      location: 'New York, NY',
      category: 'Historic Restoration & Maintenance',
      description: 'A prestigious project involving the meticulous restoration of high stone walls and the enrichment of ornate metalwork at the iconic Cipriani 42nd Street.',
      images: [
        'Detailed shot of restored high stone walls at Cipriani 42nd Street',
        'Close-up of enriched metalwork on a wall at Cipriani',
        'Wide view of the grand interior of Cipriani showing restored walls'
      ],
      status: 'Completed'
    },
    {
      title: 'Coastal Villa Renovation',
      location: 'Malibu, CA',
      category: 'Maintenance Consulting',
      description: 'Oversaw a full-scale renovation project for a beachfront villa, enhancing property value by 40% and implementing a sustainable maintenance plan.',
      images: [
        'Luxurious beachfront villa with a modern design post-renovation',
        'Interior shot of the renovated villa with ocean views',
        'Sustainable maintenance features implemented in the villa garden'
      ],
      status: 'Completed'
    }
  ];

  const clients = [
    { name: 'Starlight Investments', logo: 'Corporate building silhouette against a starry night sky' },
    { name: 'Oceanview Properties', logo: 'Stylized wave icon with a sun setting over it' },
    { name: 'Metro Urban Developers', logo: 'Abstract city skyline graphic' },
    { name: 'Pinnacle Realty Group', logo: 'Mountain peak icon' },
    { name: 'Horizon Ventures', logo: 'Sun rising over a distant horizon line' },
    { name: 'Nexus Commercial', logo: 'Interlocking geometric shapes forming a network' },
  ];

  return (
    <>
      <Helmet>
        <title>Our Portfolio - Cihan Yildiz</title>
        <meta name="description" content="Explore the portfolio of Cihan Yildiz, showcasing successful real estate projects, from property management to investment analysis. See our track record of excellence." />
        <meta property="og:title" content="Our Portfolio - Cihan Yildiz" />
        <meta property="og:description" content="Explore the portfolio of Cihan Yildiz, showcasing successful real estate projects, from property management to investment analysis. See our track record of excellence." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
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
              <span className="gradient-text">Our Portfolio</span>
              <br />
              <span className="text-white">A Legacy of Success</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our proven track record of delivering exceptional results across a diverse range of real estate projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-thunders-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A selection of our work showcasing our expertise in management, consulting, and investment.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-thunders rounded-2xl overflow-hidden card-hover group border border-transparent"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                    <div>
                      <p className="text-sm font-semibold text-gold mb-1">{project.category}</p>
                      <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                      <div className="flex items-center text-gray-400 text-sm mt-1">
                        <MapPin size={14} className="mr-1.5" />
                        {project.location}
                      </div>
                    </div>
                    <div className={`mt-4 md:mt-0 text-sm font-medium px-4 py-2 rounded-full self-start ${project.status === 'Completed' ? 'bg-green-600/80 text-white' : 'bg-yellow-600/80 text-black'}`}>
                      {project.status}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="sm:col-span-2 rounded-lg overflow-hidden">
                      <img  class="w-full h-full object-cover" alt={project.images[0]} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <img  class="w-full h-full object-cover" alt={project.images[1]} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                      </div>
                       <div className="rounded-lg overflow-hidden">
                        <img  class="w-full h-full object-cover" alt={project.images[2]} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full border-gold/30 text-gold hover:bg-gold/10 hover:text-gold-light">
                    View Full Case Study <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-thunders">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Valued Clients</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We are proud to partner with leading companies and investors in the real estate industry.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center justify-center space-y-3 p-4 bg-thunders-dark rounded-xl transition-all duration-300 hover:bg-thunders-light"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-black/30 rounded-full">
                  <img  class="w-8 h-8 opacity-70" alt={`${client.name} logo`} src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
                </div>
                <span className="text-white text-sm font-medium text-center">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold to-gold-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Let's Build Your Success Story
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Partner with us to turn your real estate vision into a profitable reality.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-black text-white hover:bg-black/80 px-8 py-3 text-base font-semibold">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;