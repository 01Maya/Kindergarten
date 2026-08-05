
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative bg-transparent pt-6 md:pt-10 pb-24 overflow-visible z-20">
      {/* Floating Background Blobs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-sky-100/40 blur-3xl"
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            bg-white
            rounded-[42px]
            border
            border-white/80
            shadow-[0_25px_80px_rgba(0,0,0,0.06)]
            px-8
            sm:px-12
            md:px-16
            lg:px-20
            xl:px-24
            py-12
            md:py-14
            lg:py-16
            overflow-visible
          "
        >
          <div className="grid grid-cols-1 xl:grid-cols-[380px_420px_1fr] items-center gap-10 lg:gap-14">
            {/* Backpack */}
            <motion.div
              className="flex justify-center xl:justify-start"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/cta bag.png"
                alt="School Backpack"
                width={500}
                height={500}
                priority
                className="
                  object-contain
                  w-[260px]
                  sm:w-[300px]
                  lg:w-[360px]
                  xl:w-[420px]
                  h-auto
                  drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]
                "
              />
            </motion.div>

            {/* Content */}
            <div className="text-center xl:text-left max-w-[420px] mx-auto xl:mx-0">
              <span className="text-orange-500 text-sm font-medium">
                Stay Connected
              </span>

              <h3
                className="
                  mt-2
                  text-3xl
                  sm:text-4xl
                  lg:text-[52px]
                  font-extrabold
                  text-[#1B1B2F]
                  leading-[1.1]
                  tracking-[-0.02em]
                "
              >
                Get Updates
                <br />
                & Special Offers
                <br />
                for Your Little
                <br />
                Ones
              </h3>

              <p className="mt-4 text-base text-gray-500">
                Join our newsletter and never miss an update.
              </p>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="relative w-full max-w-[620px] mx-auto xl:mx-0"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full
                    md:flex-1
                    h-[62px]
                    px-7
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    shadow-sm
                    text-gray-700
                    placeholder:text-gray-400
                    outline-none
                    transition-all
                    focus:ring-4
                    focus:ring-blue-100
                    focus:border-blue-300
                  "
                />

                <motion.button
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    w-full
                    md:w-auto
                    h-[62px]
                    px-10
                    rounded-full
                    bg-[#2563EB]
                    text-white
                    font-semibold
                    shadow-[0_12px_30px_rgba(37,99,235,0.35)]
                    hover:bg-[#1D4ED8]
                    transition-all
                    whitespace-nowrap
                  "
                >
                  Subscribe
                </motion.button>
              </div>

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
                className="hidden xl:block absolute -right-10 top-0 text-blue-300"
              >
                <Send size={44} strokeWidth={1.5} />
              </motion.div>

              {/* Dotted Path */}
              <svg
                className="hidden xl:block absolute -right-2 top-8"
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

          {/* Decorative Doodles */}
          <motion.div
            animate={{ rotate: [0, 8, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-5 right-28 hidden xl:block opacity-20 text-xl"
          >
            ⭐
          </motion.div>

          <motion.div
            animate={{ x: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-8 right-32 hidden xl:block opacity-25 text-3xl"
          >
            🌈
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-5 left-20 hidden xl:block opacity-20 text-xl"
          >
            ☁️
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

