import React from 'react';
import { TrendingUp, Clock, Home, Award, Users, Building2, Cpu, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from './CountUp';

export default function About() {
  const metrics = [
    {
      icon: <Home className="w-6 h-6" />,
      value: 600,
      suffix: '+',
      label: 'Homes Sold',
      description: 'Successfully closed transactions',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: 1.2,
      prefix: '$',
      suffix: 'B+',
      label: 'Sales Volume',
      description: 'Total transaction volume',
      decimals: 2,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: 20,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Industry experience',
    },
  ];

  const advantages = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Innovative Technology Integration',
      description: 'Leveraging AI and digital media for enhanced property marketing and data-driven insights',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Cross-Industry Expertise',
      description: 'Combining experience in real estate, customer service, and creative industries for unique solutions',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Client-Centered Approach',
      description: 'Delivering personalized strategies and seamless experiences from start to finish',
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Personal Introduction */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl max-w-md mx-auto">
                <img
                  src="https://www.compass.com/m/13/9960d9ef-8da4-41d2-ad4b-d2a519040f3e/origin.jpg"
                  alt="Jared Richey"
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-black rounded-lg -z-10" />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Meet Jared Richey
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                As the founder of Richey Realty, Jared is a dynamic professional dedicated to 
                leveraging technology and media to enhance brand visibility and operational 
                efficiency in the luxury real estate market of Southern California. His expertise 
                in AI-driven workflow optimization, digital media production, and strategic 
                communications brings a forward-thinking approach that sets him apart from other agents.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-black text-white rounded-lg">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700">Luxury Property Specialist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-black text-white rounded-lg">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700">Member of Mark Todd and Associates</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Our Unique Advantage */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Unique Advantage</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining innovative technology with traditional real estate expertise to deliver 
              exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className={`p-4 bg-gradient-to-r ${advantage.gradient} text-white rounded-xl inline-block mb-4`}
                  variants={iconVariants}
                >
                  {advantage.icon}
                </motion.div>
                <motion.h4 
                  className="text-xl font-semibold text-gray-900 mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 }}
                >
                  {advantage.title}
                </motion.h4>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.4 }}
                >
                  {advantage.description}
                </motion.p>
                <motion.div
                  className={`w-full h-1 bg-gradient-to-r ${advantage.gradient} mt-4 rounded-full`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center group transform hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-4 bg-black text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <CountUp
                  end={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                />
                <div className="text-lg font-medium text-gray-900 mb-2 mt-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mark Todd and Associates Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Building2 className="w-8 h-8 text-black" />
              <h3 className="text-3xl font-bold">Mark Todd and Associates</h3>
            </motion.div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proud member of Orange County's premier luxury real estate team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h4 className="text-2xl font-semibold mb-4">Team Excellence</h4>
                <ul className="space-y-4">
                  <motion.li
                    className="flex items-start gap-3"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Users className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                    <span>Collaborative approach combining decades of expertise</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-3"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <TrendingUp className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                    <span>Over $1.2 billion in successful transactions</span>
                  </motion.li>
                </ul>
              </div>

              <div className="bg-black text-white p-8 rounded-2xl">
                <h4 className="text-2xl font-semibold mb-4">Our Commitment</h4>
                <p className="text-gray-300 leading-relaxed">
                  We believe in exceeding expectations by combining traditional real estate practices 
                  with innovative technology solutions. Our team's dedication to excellence ensures 
                  that your real estate goals are not just met but surpassed, whether you're searching 
                  for your dream oceanfront property or looking to sell your luxury home.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Modern office meeting"
                className="rounded-2xl shadow-2xl object-cover w-full h-[600px] transform hover:scale-[1.02] transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-black rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}