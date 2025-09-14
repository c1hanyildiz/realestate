import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, Star, Building, Wrench, Search, Award, Target, HeartHandshake as Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OpexBenchmarkingTool from '@/components/ai-tools/OpexBenchmarkingTool';

const HomePage = () => {
  const features = [{
    icon: Building,
    title: 'Property Management',
    description: 'Comprehensive solutions for residential and commercial properties.'
  }, {
    icon: Wrench,
    title: 'Maintenance Consulting',
    description: 'Expert strategies to preserve and enhance your property value.'
  }, {
    icon: Search,
    title: 'Property Lookup',
    description: 'Advanced search and analysis tools powered by Zillow data.'
  }];
  const whyChooseUs = [{
    icon: Award,
    title: 'Proven Expertise',
    description: 'Over 15 years of industry experience delivering exceptional results for our clients.'
  }, {
    icon: Target,
    title: 'Tailored Strategies',
    description: 'Customized solutions designed to meet your unique property goals and maximize ROI.'
  }, {
    icon: Handshake,
    title: 'Client-Centric Approach',
    description: 'Your success is our priority. We build lasting partnerships based on trust and transparency.'
  }];
  const stats = [{
    number: '500+',
    label: 'Properties Managed'
  }, {
    number: '98%',
    label: 'Client Satisfaction'
  }, {
    number: '15+',
    label: 'Years Experience'
  }, {
    number: '24/7',
    label: 'Support Available'
  }];
  const testimonials = [{
    name: 'Andrew Choi',
    role: 'Director of Facilities, The Simons Foundations',
    content: 'Cihan\'s expertise in project management, full day and night maintenance, events and hospitality support, and light construction management was invaluable. Truly made things happen!',
    rating: 5
  }, {
    name: 'Mark Furman',
    role: 'Director of Operations, Colliers International REMS US, New York',
    content: 'Cihan provided exceptional support in maintenance, construction, and project management, along with seamless day-to-day operational assistance. A true asset to our team.',
    rating: 5
  }, {
    name: 'Vincent Tavernite',
    role: 'Director of Facilities, Gods Love We Deliver',
    content: 'Thanks to Cihan\'s coordination and communication, we achieved significant cost efficiency in our yearly scheduled tasks. His maintenance support, project management, and consulting were top-notch.',
    rating: 5
  }];
  return <>
      <Helmet>
        <title>Cihan Yildiz - Real Estate Maintenance & Management Consulting</title>
        <meta name="description" content="Cihan Yildiz: Your trusted expert for real estate maintenance and management consulting services. Personalized property solutions with comprehensive property lookup tools." />
        <meta property="og:title" content="Cihan Yildiz - Real Estate Maintenance & Management Consulting" />
        <meta property="og:description" content="Cihan Yildiz: Your trusted expert for real estate maintenance and management consulting services. Personalized property solutions with comprehensive property lookup tools." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://horizons-cdn.hostinger.com/8926b371-f519-44eb-af77-4ae82faf4e9e/a2f49d41c4d3e42d853aa1b6b5fd217f.png')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-6">
            <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }}>
              <span className="gradient-text">Cihan Yildiz</span>
              <br />
              <span className="text-white">Excellence in Property Consulting</span>
            </motion.h1>
            
            <motion.p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }}>Transform your property with expert consulting, comprehensive property management, and cutting-edge AI property lookup tools.</motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }}>
              <Button asChild size="lg" className="pulse-glow bg-gold hover:bg-gold-light text-black px-8 py-3 text-base font-semibold">
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gold/50 text-gold hover:bg-gold/10 hover:text-gold-light px-8 py-3 text-base font-semibold">
                <Link to="/property-lookup">
                  Property Lookup
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }}>
          <div className="w-5 h-8 border-2 border-gold/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gold/60 rounded-full mt-1.5"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-thunders-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive real estate solutions designed to maximize your property potential and investment returns.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <motion.div key={feature.title} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.2
            }} className="bg-thunders rounded-2xl p-8 card-hover group border border-transparent">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors">
                      <Icon size={32} className="text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* OPEX Benchmarking Tool Showcase */}
      <OpexBenchmarkingTool isHomePageVersion={true} />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-thunders">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Partner with <span className="gradient-text">Cihan Yildiz?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We are dedicated to providing unparalleled service and data-driven insights to help you navigate the complexities of the real estate market.
              </p>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return <div key={item.title} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                        <Icon className="text-gold" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>;
              })}
              </div>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} className="relative h-80 lg:h-96">
              <img class="absolute w-full h-full object-cover rounded-2xl shadow-2xl" alt="Team of real estate professionals collaborating in a modern office" src="https://images.unsplash.com/photo-1637622124152-33adfabcc923" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gold/10 to-thunders-light/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            scale: 0.5
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-thunders-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Hear from our satisfied clients who have transformed their real estate investments with our expertise.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <motion.div key={testimonial.name} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2
          }} className="bg-thunders rounded-2xl p-6 card-hover border border-transparent">
                <div className="space-y-4">
                  <div className="flex space-x-1 text-gold">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={18} className="fill-current" />)}
                  </div>
                  <p className="text-gray-300 italic text-sm leading-relaxed">"{testimonial.content}"</p>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-semibold text-white text-base">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold to-gold-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Ready to Elevate Your Property Portfolio?
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who trust Cihan Yildiz for their real estate needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-black text-white hover:bg-black/80 px-8 py-3 text-base font-semibold">
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-black/50 text-black hover:bg-black/10 hover:border-black px-8 py-3 text-base font-semibold">
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
};
export default HomePage;