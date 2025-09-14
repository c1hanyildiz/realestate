import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  ArrowRight, 
  Building, 
  Wrench, 
  Search, 
  BrainCircuit,
  Phone,
  FolderKanban,
  Calculator,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const quickActions = [
    {
      icon: Building,
      title: 'Property Management',
      description: 'Comprehensive property solutions',
      link: '/services',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop',
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: Wrench,
      title: 'Maintenance Consulting',
      description: 'Expert maintenance strategies',
      link: '/services',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
      color: 'from-green-500/20 to-green-600/20'
    },
    {
      icon: Search,
      title: 'Property Lookup',
      description: 'Find your perfect investment',
      link: '/property-lookup',
      image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop',
      color: 'from-purple-500/20 to-purple-600/20'
    },
    {
      icon: BrainCircuit,
      title: 'AI Tools',
      description: 'Data-driven insights',
      link: '/ai-tools',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
      color: 'from-orange-500/20 to-orange-600/20'
    }
  ];

  const dashboardStats = [
    { icon: Building, number: '500+', label: 'Properties Managed', color: 'text-blue-400' },
    { icon: Users, number: '98%', label: 'Client Satisfaction', color: 'text-green-400' },
    { icon: Award, number: '15+', label: 'Years Experience', color: 'text-gold' },
    { icon: TrendingUp, number: '24/7', label: 'Support Available', color: 'text-purple-400' }
  ];

  return (
    <>
      <Helmet>
        <title>Cihan Yildiz - Real Estate Dashboard</title>
        <meta name="description" content="Your comprehensive real estate management dashboard. Access property management, maintenance consulting, AI tools, and property lookup services." />
        <meta property="og:title" content="Cihan Yildiz - Real Estate Dashboard" />
        <meta property="og:description" content="Your comprehensive real estate management dashboard. Access property management, maintenance consulting, AI tools, and property lookup services." />
      </Helmet>

      {/* Hero Dashboard Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24">
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://horizons-cdn.hostinger.com/8926b371-f519-44eb-af77-4ae82faf4e9e/a2f49d41c4d3e42d853aa1b6b5fd217f.png')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Real Estate</span>
              <br />
              <span className="text-white">Command Center</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Your one-stop dashboard for all real estate needs
            </p>
          </motion.div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={action.link} className="block">
                    <div className="relative overflow-hidden rounded-2xl bg-thunders border border-thunders-light card-hover h-80">
                      <div className="absolute inset-0">
                        <img 
                          src={action.image} 
                          alt={action.title}
                          className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${action.color}`}></div>
                      </div>
                      
                      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                        <div className="flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-4 group-hover:bg-gold/30 transition-colors">
                          <Icon size={32} className="text-gold" />
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
                          <p className="text-gray-300 text-sm mb-4">{action.description}</p>
                          
                          <Button size="sm" className="w-full">
                            Get Started <ArrowRight className="ml-2" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Dashboard Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {dashboardStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="glass-effect rounded-xl p-6 text-center">
                  <Icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="px-8 py-4 text-lg">
              <Link to="/contact">
                <Phone className="mr-2" size={20} />
                Schedule Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Link to="/portfolio">
                <FolderKanban className="mr-2" size={20} />
                View Portfolio
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-20 bg-thunders-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="gradient-text">Tools</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 text-center card-hover"
            >
              <Calculator className="mx-auto mb-4 text-gold" size={48} />
              <h3 className="text-xl font-bold text-white mb-3">OPEX Calculator</h3>
              <p className="text-gray-300 mb-6">Benchmark your operating expenses against NYC standards</p>
              <Button asChild className="w-full">
                <Link to="/ai-tools">Try Calculator</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-effect rounded-2xl p-8 text-center card-hover"
            >
              <TrendingUp className="mx-auto mb-4 text-gold" size={48} />
              <h3 className="text-xl font-bold text-white mb-3">ROI Analyzer</h3>
              <p className="text-gray-300 mb-6">Calculate renovation returns with AI-powered insights</p>
              <Button asChild className="w-full">
                <Link to="/ai-tools">Analyze ROI</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-effect rounded-2xl p-8 text-center card-hover"
            >
              <Search className="mx-auto mb-4 text-gold" size={48} />
              <h3 className="text-xl font-bold text-white mb-3">Property Search</h3>
              <p className="text-gray-300 mb-6">Find investment opportunities with advanced filters</p>
              <Button asChild className="w-full">
                <Link to="/property-lookup">Search Properties</Link>
              </Button>
            </motion.div>
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
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-black/80 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust us with their real estate needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-black text-white hover:bg-black/80 px-8 py-4 text-lg">
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-black/50 text-black hover:bg-black/10 hover:border-black px-8 py-4 text-lg">
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;