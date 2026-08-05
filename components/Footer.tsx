'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-gray-700 border-t border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <span className="text-xl font-black text-gray-900">Kindergarten</span>
            </div>
<p className="text-sm text-gray-600">
  We provide a safe, joyful and nurturing space where every child can thrive.
</p>

<div className="flex gap-4 mt-6">
  <motion.a
    href="#"
    whileHover={{ scale: 1.2 }}
    className="text-blue-600 hover:text-blue-700 text-lg"
  >
    f
  </motion.a>

  <motion.a
    href="#"
    whileHover={{ scale: 1.2 }}
    className="text-pink-600 hover:text-pink-700 text-lg"
  >
    📷
  </motion.a>

  <motion.a
    href="#"
    whileHover={{ scale: 1.2 }}
    className="text-red-600 hover:text-red-700 text-lg"
  >
    ▶
  </motion.a>
</div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-gray-900 mb-4">Our Programs</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Academic</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Creative</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Activity Based</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Play & Learn</a></li>
            </ul>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-gray-900 mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Parent Portal</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Healthy Meals</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Sitemap</a></li>
            </ul>
          </motion.div>

          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-gray-900 mb-4">Photo Gallery</h4>
<div className="grid grid-cols-3 gap-2">
  <div className="relative aspect-square overflow-hidden rounded-lg">
    <Image
      src="/gallery1.png"
      alt="Gallery 1"
      fill
      className="object-cover hover:scale-110 transition-transform duration-300"
    />
  </div>

  <div className="relative aspect-square overflow-hidden rounded-lg">
    <Image
      src="/gallery2.png"
      alt="Gallery 2"
      fill
      className="object-cover hover:scale-110 transition-transform duration-300"
    />
  </div>

  <div className="relative aspect-square overflow-hidden rounded-lg">
    <Image
      src="/gallery3.png"
      alt="Gallery 3"
      fill
      className="object-cover hover:scale-110 transition-transform duration-300"
    />
  </div>

  <div className="relative aspect-square overflow-hidden rounded-lg">
    <Image
      src="/gallery4.png"
      alt="Gallery 4"
      fill
      className="object-cover hover:scale-110 transition-transform duration-300"
    />
  </div>

  <div className="relative aspect-square overflow-hidden rounded-lg">
    <Image
      src="/gallery5.png"
      alt="Gallery 5"
      fill
      className="object-cover hover:scale-110 transition-transform duration-300"
    />
  </div>

  <div className="relative aspect-square overflow-hidden rounded-lg">
    <Image
      src="/gallery6.png"
      alt="Gallery 6"
      fill
      className="object-cover hover:scale-110 transition-transform duration-300"
    />
  </div>
</div>
          </motion.div>
        </div>

        {/* Bottom */}
<motion.div
  className="border-t border-gray-200 pt-8 text-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <p className="text-sm text-gray-600">
    © 2024 Kindergarten. All rights reserved.
  </p>
</motion.div>
      </div>
    </footer>
  );
}
