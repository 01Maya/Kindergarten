'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Maria Fisher',
    text: 'The kindergarten is a magical place for my child! She has learned so much while having fun every day. The teachers are kind and truly care.',
    image: 'parent1.png',
  },
  {
    name: 'Jenny Swift',
    text: 'My son has developed confidence and social skills that we couldn\'t have asked for. The holistic approach to learning is excellent.',
    image: 'parent3.png',
  },
  {
    name: 'Sarah Johnson',
    text: 'Amazing experience! The team ensures every child gets individual attention. We are very happy with our choice.',
    image: 'parent2.png',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="bg-[#EEF7FF] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-45 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl">💬</div>
        <div className="absolute bottom-20 right-10 text-5xl">⭐</div>
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-3">TESTIMONIALS</p>
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900" style={{ letterSpacing: '-0.02em' }}>What Parents Say</h2>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            <motion.button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              whileHover={{ scale: 1.15, boxShadow: '0 15px 30px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.9 }}
              className="flex-shrink-0 bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex-1 bg-white rounded-3xl p-8 sm:p-12 shadow-lg border-2 border-transparent hover:border-blue-200 transition-all"
            >
              <motion.div 
                className="flex justify-center mb-8"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover border-4 border-blue-100 shadow-md"
                />
              </motion.div>
              <p className="text-gray-700 text-lg sm:text-xl mb-8 leading-relaxed">
                &quot;{testimonials[current].text}&quot;
              </p>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {testimonials[current].name}
              </h4>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.span 
                    key={i} 
                    className="text-orange-400 text-2xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    ❤︎
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              whileHover={{ scale: 1.15, boxShadow: '0 15px 30px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.9 }}
              className="flex-shrink-0 bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Dots */}
          <motion.div 
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all ${
                  i === current ? 'bg-blue-600 w-8 h-2' : 'bg-gray-300 w-2 h-2'
                }`}
                whileHover={{ scale: 1.2 }}
                animate={{ width: i === current ? 32 : 8 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
