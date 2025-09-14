import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Wrench, 
  TrendingUp, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Calculator,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ServicesPage = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: Building,
      title: 'Property Management',
      description: 'Comprehensive property management services for residential and commercial properties.',
      features: [
        'Tenant screening and placement',
        'Rent collection and financial reporting',
        'Property maintenance coordination',
        'Legal compliance and documentation',
        'Emergency response services',
        'Regular property inspections'
      ],
      price: 'Starting at $199/month'
    },
    {
      icon: Wrench,
      title: 'Maintenance Consulting',
      description: 'Expert maintenance strategies to preserve and enhance your property value.',
      features: [
        'Preventive maintenance planning',
        'Vendor management and coordination',
        'Cost optimization strategies',
        'Emergency repair protocols',
        'Property condition assessments',
        'Maintenance budget planning'
      ],
      price: 'Starting at $250/consultation'
    },
    {
      icon: TrendingUp,
      title: 'Investment Analysis',
      description: 'Data-driven investment analysis to maximize your real estate returns.',
      features: [
        'Market analysis and trends',
        'ROI calculations and projections',
        'Risk assessment and mitigation',
        'Portfolio optimization',
        'Cash flow analysis',
        'Exit strategy planning'
      ],
      price: 'Starting at $450/analysis'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies for your properties.',
      features: [
        'Insurance review and optimization',
        'Legal compliance audits',
        'Safety and security assessments',
        'Disaster preparedness planning',
        'Liability protection strategies',
        'Regular risk evaluations'
      ],
      price: 'Starting at $350/assessment'
    },
    {
      icon: Users,
      title: 'Tenant Relations',
      description: 'Professional tenant management and relationship building services.',
      features: [
        'Tenant communication management',
        'Lease negotiation and renewal',
        'Conflict resolution services',
        'Tenant satisfaction programs',
        'Move-in/move-out coordination',
        'Community building initiatives'
      ],
      price: 'Starting at $150/month'
    },
    {
      icon: Calculator,
      title: 'Financial Planning',
      description: 'Strategic financial planning and optimization for real estate investments.',
      features: [
        'Budget planning and management',
        'Tax optimization strategies',
        'Cash flow forecasting',
        'Investment portfolio analysis',
        'Financing consultation',
        'Financial reporting and analytics'
      ],
      price: 'Starting at $499/consultation'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We start with a comprehensive consultation to understand your specific needs and goals.'
    },
    {
      step: '02',
      title: 'Custom Strategy',
      description: 'Our experts develop a tailored strategy based on your property portfolio and objectives.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision, keeping you informed every step of the way.'
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Continuous monitoring and optimization to ensure maximum results and satisfaction.'
    }
  ];

  const handleServiceInquiry = (serviceName) => {
    toast({
      title: "Service Inquiry",
      description: `🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
      duration: 5000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Professional Real Estate Services - Cihan Yildiz</title>
        <meta name="description" content="Comprehensive real estate consulting services including property management, maintenance consulting, investment analysis, and risk management solutions from Cihan Yildiz." />
        <meta property="og:title" content="Professional Real Estate Services - Cihan Yildiz" />
        <meta property="og:description" content="Comprehensive real estate consulting services including property management, maintenance consulting, investment analysis, and risk management solutions from Cihan Yildiz." />
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
              <span className="gradient-text">Professional Services</span>
              <br />
              <span className="text-white">for Real Estate Excellence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive consulting solutions designed to maximize your property investments and streamline your real estate operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-thunders-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Service Portfolio</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From property management to investment analysis, we offer comprehensive solutions for all your real estate needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-thunders rounded-2xl p-8 card-hover group border border-transparent h-full flex flex-col"
                >
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                        <Icon size={24} className="text-gold" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle size={16} className="text-gold/80 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-2xl font-bold gradient-text pt-4">{service.price}</div>
                  </div>
                  
                  <Button 
                    onClick={() => handleServiceInquiry(service.title)}
                    className="w-full mt-6 bg-gold hover:bg-gold-light text-black font-semibold"
                  >
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-thunders">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results and client satisfaction at every step.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full text-black font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
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
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Ready to Transform Your Real Estate Portfolio?
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Let our experts help you maximize your property investments with our comprehensive consulting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-black text-white hover:bg-black/80 px-8 py-4 text-base font-semibold">
                <Link to="/contact">
                  Schedule Consultation <Phone className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-black/50 text-black hover:bg-black/10 hover:border-black px-8 py-4 text-base font-semibold">
                <Link to="/property-lookup">
                  Explore Properties
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;