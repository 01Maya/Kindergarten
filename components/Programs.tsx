'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const allPrograms = [
  {
    title: 'Math Class',
    price: '$60',
    image:
      'math class.png',
    description: 'Full learning with numbers, shapes, and problem solving.',
    time: '3-6 Years | Mon - Fri | 08:00 AM',
    category: 'academic',
  },
  {
    title: 'Chemistry Class',
    price: '$50',
    image:
      'science.png',
    description: 'Experiment & explore the world of science.',
    time: '4-7 Years | Mon - Fri | 09:00 AM',
    category: 'academic',
  },
  {
    title: 'Drawing Class',
    price: '$32',
    image:
      'drawing.png',
    description: 'Creative drawing & painting to build imagination.',
    time: '3-6 Years | Tue - Sat | 10:00 AM',
    category: 'creative',
  },
  {
    title: 'Sports & Games',
    price: '$45',
    image:
      'sports.png',
    description: 'Fun physical activities & outdoor games.',
    time: '3-6 Years | Wed - Fri | 04:00 PM',
    category: 'activity',
  },
  {
  title: 'Music & Dance',
  price: '$40',
  image: 'music class.png',
  description: 'Fun music, rhythm, singing and dance activities to boost creativity and confidence.',
  time: '3-6 Years | Mon - Thu | 11:00 AM',
  category: 'creative',
},
];

export default function Programs() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPrograms =
    activeTab === 'all'
      ? allPrograms
      : allPrograms.filter(
          (program) => program.category === activeTab
        );

  return (
    <section
      id="programs"
      className="bg-[#EEF7FF] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Doodles */}
      <div className="absolute inset-0 opacity-45">
        <div className="absolute top-10 right-10 text-6xl">📚</div>
        <div className="absolute bottom-20 left-5 text-5xl">✏️</div>
         <div className="absolute top-80 left-50 text-4xl opacity-80">🏆</div>
        
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-3">
            OUR PROGRAMS
          </p>

          <h2
            className="text-5xl sm:text-6xl font-black text-gray-900 mb-8"
            style={{ letterSpacing: '-0.02em' }}
          >
            Our Popular Classes
          </h2>

          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full" />
          </div>

          {/* Tabs */}
          <div className="flex gap-4 justify-center flex-wrap">
            {['all', 'academic', 'creative', 'activity'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
                }`}
              >
                {tab === 'activity'
                  ? 'Activity Based'
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          layout
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-5
          gap-8
          mb-12
        "
        >
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.35 }}
                whileHover={{
                  y: -15,
                  boxShadow:
                    '0 30px 60px rgba(37,99,235,0.20)',
                }}
                className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-lg
                  border
                  border-transparent
                  hover:border-blue-600
                  transition-all
                  duration-300
                "
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="
                      absolute
                      top-4
                      right-4
                      bg-orange-500
                      text-white
                      px-4
                      py-2
                      rounded-full
                      font-bold
                    "
                  >
                    {program.price}
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {program.title}
                  </h3>

                  <p className="text-sm text-orange-500 font-semibold mb-3">
                    Admissions Open
                  </p>

                  <p className="text-gray-600 mb-4">
                    {program.description}
                  </p>

                  <p className="text-sm text-gray-500">
                    {program.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-8
              py-3
              bg-blue-600
              text-white
              rounded-full
              font-semibold
              hover:bg-blue-700
              transition-colors
            "
          >
            View All Classes →
          </motion.button>
        </div>
      </div>
    </section>
  );
}