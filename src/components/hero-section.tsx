'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, Sparkles, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner.png"
          alt="Professional Makeup Artistry"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D2B1F]/50 via-[#3D2B1F]/30 to-[#3D2B1F]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#B76E79]/20 to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 left-[10%] w-20 h-20 rounded-full bg-[#FFCBA4]/20 backdrop-blur-sm hidden lg:block"
      />
      <motion.div
        animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-48 right-[15%] w-14 h-14 rounded-full bg-[#E8B4B8]/20 backdrop-blur-sm hidden lg:block"
      />
      <motion.div
        animate={{ y: [-10, 25, -10], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-[20%] w-16 h-16 rounded-full bg-[#F8C8B4]/15 backdrop-blur-sm hidden lg:block"
      />
      <motion.div
        animate={{ y: [20, -10, 20] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-52 right-[10%] w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hidden lg:block"
      />

      {/* Sparkle decorations */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block"
          style={{
            top: `${20 + i * 12}%`,
            left: `${5 + i * 18}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.7,
            ease: 'easeInOut',
          }}
        >
          <Star className="w-3 h-3 text-[#FFCBA4] fill-[#FFCBA4]" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-[#FFCBA4]" />
            <span className="text-[#FFCBA4] text-sm sm:text-base tracking-[0.3em] uppercase font-light">
              Professional Makeup Artistry
            </span>
            <Sparkles className="w-5 h-5 text-[#FFCBA4]" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6"
        >
          Where Beauty
          <br />
          <span className="font-script text-[#FFCBA4] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal">
            Meets Artistry
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-lg sm:text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto font-serif-body"
        >
          Professional Makeup Services for Every Occasion
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#services"
            className="px-8 py-4 bg-[#FFCBA4] text-[#3D2B1F] font-semibold rounded-full text-base sm:text-lg hover:bg-[#FFB88C] transition-all duration-300 hover:shadow-xl hover:shadow-[#FFCBA4]/30 hover:-translate-y-1 w-full sm:w-auto"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-white/60 text-white font-semibold rounded-full text-base sm:text-lg hover:bg-white/15 hover:border-white transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
          >
            Book Appointment
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-white/50 group-hover:text-[#FFCBA4] transition-colors" />
        </motion.div>
      </motion.a>
    </section>
  );
}
