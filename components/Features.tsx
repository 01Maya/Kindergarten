'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '🍲',
    title: 'Healthy & Delicious meals',
    description: 'Having a healthy diet full of nutrients tailored to each child.',
  },
  {
    icon: '🔤',
    title: 'Professional Teachers',
    description: 'Choosing skilled & pro teachers in teaching & communicating with children.',
  },
  {
    icon: '🎮',
    title: 'Funny Games',
    description: 'Performing fun & engaging activities & strengthening team work.',
  },
  {
    icon: '📖',
    title: 'Education Program',
    description: 'A balanced & modern educational program to increase children\'s knowledge.',
  },
];

export default function Features() {
  return (
    <section id="about" className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-45 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl">🪄</div>
        <div className="absolute bottom-20 right-10 text-5xl">🌈</div>
      </div>
      {/* Background decorative line */}
      <div className="absolute top-0 left-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-30 transform -translate-x-1/2"></div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-orange-500 font-bold text-sm tracking-widest mb-3 uppercase">WHY CHOOSE US</p>
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            We Provide Your Child<br />with an Opportunity
          </h2>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 rounded-full"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-[#EEF7FF] rounded-2xl p-8 text-center border-2 border-transparent transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)', borderColor: '#2563EB' }}
            >
              <motion.div 
                className="text-5xl mb-4 inline-block"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
