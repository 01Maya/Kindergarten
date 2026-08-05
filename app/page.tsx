'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Programs from '@/components/Programs';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import WavyDivider from '@/components/WavyDivider';

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-20"><Hero /></div>
      <div className="text-white bg-[#EEF7FF]"><WavyDivider /></div>
      <Features />
      <div className="text-[#EEF7FF] bg-white"><WavyDivider /></div>
      <Programs />
      <div className="text-white bg-[#EEF7FF]"><WavyDivider /></div>
      <About />
      <div className="text-[#EEF7FF] bg-white"><WavyDivider /></div>
      <Testimonials />
      <div className="text-white bg-[#EEF7FF]"><WavyDivider /></div>
      <Newsletter />
      <Footer />
    </main>
  );
}
