
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Typewriter from './Typewriter';
import { Send } from 'lucide-react';

export default function Hero() {
  return (
      <section
        id="home"
        className="relative min-h-[700px] bg-[#EEF7FF] px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
      >
      {/* Decorative Doodles */}
      <motion.div
        className="absolute top-10 right-20 text-6xl opacity-20"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ✈️
      </motion.div>

      <motion.div
        className="absolute top-40 right-10 text-4xl opacity-15"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-5 text-5xl opacity-15"
        animate={{ rotate: [0, -8, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🎨
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-10 text-4xl opacity-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        📚
      </motion.div>

      <motion.div
        className="absolute top-20 left-1/3 text-5xl opacity-12"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🌈
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-1/4 text-4xl opacity-12"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🎈
      </motion.div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              <Typewriter
                text="We Put a Little Magic Into all our Kids' lives"
                speed={40}
              />
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-md">
              Kindergarten is often a child&apos;s first introduction to school.
              The learning journey is full of fun, discovery and growth.
            </p>

            <div className="flex gap-4 flex-wrap">
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg"
              >
                Apply Now
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.08,
                  backgroundColor: '#FFF7ED',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-gray-900 border-2 border-orange-500 rounded-full font-bold flex items-center gap-2 transition-all"
              >
                ▶ Watch Our Story
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image */}

          <div className="absolute top-88 right-28 text-4xl opacity-30">🏆</div>

          <div className="absolute top-4 right-6 text-4xl opacity-30">⭐</div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
            <Image
              src="/hero.png"
              alt="Child with books"
              width={500}
              height={600}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]"
            />
            </motion.div>

{/* Art Classes Badge */}
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
  className="
    absolute
    top-[12%]
left-10
sm:left-14
md:left-20
lg:left-24
    bg-white
    rounded-xl
    px-2 sm:px-3 md:px-4
    py-2
    shadow-lg
    flex
    items-center
    gap-2
    z-10
    scale-[0.75]
    sm:scale-90
    md:scale-100
    origin-top-left
  "
>
  <span className="text-base sm:text-lg md:text-2xl">🎨</span>

  <div>
    <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500">
      Creative
    </p>

    <p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-900">
      Art Classes
    </p>
  </div>
</motion.div>

{/* Reading Time Badge */}
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
  className="
    absolute
    bottom-[12%]
    left-0
    sm:left-4
    md:left-2
    bg-white
    rounded-xl
    px-2 sm:px-3 md:px-4
    py-2
    shadow-lg
    flex
    items-center
    gap-2
    z-10
    scale-[0.75]
    sm:scale-90
    md:scale-100
    origin-bottom-left
  "
>
  <span className="text-base sm:text-lg md:text-2xl">📚</span>

  <div>
    <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500">
      Learning
    </p>

    <p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-900">
      Reading Time
    </p>
  </div>
</motion.div>


            {/* Paper Airplane */}
            <motion.div
              animate={{
                x: [0, 10, 0],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="hidden xl:block absolute -right-10 top-10 text-blue-300"
            >
              <Send size={48} strokeWidth={1.5} />
            </motion.div>

            {/* Dotted Path */}
            <svg
              className="hidden xl:block absolute -right-2 top-20"
              width="120"
              height="60"
              viewBox="0 0 120 60"
              fill="none"
            >
              <path
                d="M0 30 C40 0, 80 60, 120 20"
                stroke="#93C5FD"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
          </motion.div>
        </div>


<div className="mt-20 overflow-hidden font-italic">
  <div className="marquee">
    <div className="marquee-content">
      {[
        '🎨 Art',
        '🎵 Music',
        '⚽ Sports',
        '🔬 STEM',
        '📚 Reading',
        '💃 Dance',
        '🎨 Art',
        '🎵 Music',
        '⚽ Sports',
        '🔬 STEM',
        '📚 Reading',
        '💃 Dance',
      ].map((item, i) => (
        <span key={i} className="marquee-item">
          {item}
        </span>
      ))}
    </div>
  </div>
</div>

      </div>
    </section>
  );
}

