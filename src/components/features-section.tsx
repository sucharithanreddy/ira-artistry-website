'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Droplets,
  Sparkles,
  Palette,
  Layers,
  Camera,
  Wind,
  Thermometer,
  User,
  Sun,
} from 'lucide-react';

const features = [
  {
    icon: Droplets,
    title: 'Waterproof Makeup',
    description: 'Long-lasting formulas that withstand any weather',
  },
  {
    icon: Sparkles,
    title: 'Glossy Makeup',
    description: 'High-shine finishes for a luminous glow',
  },
  {
    icon: Palette,
    title: 'Deep Skin Tone Makeup',
    description: 'Expert color matching for deeper complexions',
  },
  {
    icon: Layers,
    title: 'Pigmented Skin Makeup',
    description: 'Specialized techniques for pigmented skin',
  },
  {
    icon: Camera,
    title: 'HD Makeup',
    description: 'Camera-ready flawless finish',
  },
  {
    icon: Wind,
    title: 'Airbrush Makeup',
    description: 'Precision application for a seamless look',
  },
  {
    icon: Thermometer,
    title: 'Sweat Proof Makeup',
    description: 'All-day confidence without touch-ups',
  },
  {
    icon: User,
    title: 'Groom Makeup',
    description: 'Dapper looks for the modern gentleman',
  },
  {
    icon: Sun,
    title: 'Dewy Finish Makeup',
    description: 'Radiant, fresh-from-within glow',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="features" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FFE5D9]/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8B4B8]/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-[#B76E79] text-sm tracking-[0.3em] uppercase font-medium">Our Expertise</span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl text-[#3D2B1F] mt-3 mb-5 font-bold">
            What Makes Us Special
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#B76E79] to-transparent mx-auto" />
          <p className="text-[#8B7355] mt-6 text-lg font-serif-body max-w-2xl mx-auto">
            Discover our signature makeup specialties, each crafted to perfection with premium products and expert techniques.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group relative bg-gradient-to-br from-[#FFF5EE] to-[#FFE5D9]/50 rounded-2xl p-6 sm:p-8 border border-[#F0D5C5]/50 hover:border-[#FFCBA4] transition-all duration-500 hover:shadow-xl hover:shadow-[#FFCBA4]/10 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFCBA4] to-[#E8B4B8] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-serif-heading text-xl text-[#3D2B1F] font-semibold mb-2 group-hover:text-[#B76E79] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#8B7355] text-sm sm:text-base font-serif-body leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#FFCBA4]/0 group-hover:border-[#FFCBA4]/30 rounded-tr-lg transition-all duration-500" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#FFCBA4]/0 group-hover:border-[#FFCBA4]/30 rounded-bl-lg transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
