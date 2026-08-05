'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function About() {
  return (
    <section id="about-section" className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Doodles - Static for cleaner look */}
      <div className="absolute top-20 right-10 text-7xl opacity-40 pointer-events-none">⭐</div>
      <div className="absolute bottom-32 left-5 text-6xl opacity-45 pointer-events-none">📖</div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-3">ABOUT US</p>
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              A Few Words About Our Kindergarten
            </h2>

          <div className="flex justify-left">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
            </div>
            
            <p className="text-gray-600 mt-6 mb-6 leading-relaxed">
              Kindergarten is more than just learning – it&apos;s a place where children grow emotionally, creatively, and academically. During our teachers create a safe and joyful space where every child can thrive.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Safe and secure environment',
                'Experienced and caring teachers',
                'Fun-based learning approach',
                'Individual attention to each child',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-3 items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.08, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
            >
              Learn More About Us →
            </motion.button>
          </motion.div>

          {/* Right Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="col-span-2 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/study-Wk6IAtjBAZRn0liVurANBoVDBB0xuC.png"
                  alt="Children studying"
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-lg relative"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/classroom-PDkmjHXupFHo9llxIMuNpU1CKukT8J.png"
                  alt="Classroom"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-center">
                  <div className="text-2xl">25+</div>
                  <div className="text-xs">Years</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/drawing-CoVzZRYeTZ0wQaUU8fYlyBg9gA4E9l.png"
                  alt="Art activities"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
