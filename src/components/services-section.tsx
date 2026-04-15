'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Natural Makeup',
    description: 'Light foundation, soft blush, and neutral tones to enhance natural beauty',
    category: 'Everyday',
  },
  {
    title: 'No-Makeup Makeup',
    description: 'Very minimal products used to make the skin look fresh and naturally flawless',
    category: 'Everyday',
  },
  {
    title: 'Soft Glam Makeup',
    description: 'Smooth base with soft contour, neutral eyeshadow, and subtle lashes for an elegant look',
    category: 'Glam',
  },
  {
    title: 'Full Glam Makeup',
    description: 'Bold eyeshadow, heavy contour, dramatic lashes, and strong lip color for events or photoshoots',
    category: 'Glam',
  },
  {
    title: 'Bridal Makeup',
    description: 'Long-lasting, waterproof makeup designed to look perfect throughout wedding ceremonies and photos',
    category: 'Special',
    featured: true,
  },
  {
    title: 'HD Makeup',
    description: 'Uses special products that give a smooth, flawless finish under high-definition cameras',
    category: 'Professional',
  },
  {
    title: 'Airbrush Makeup',
    description: 'Applied with an airbrush machine for a lightweight, flawless, and even coverage',
    category: 'Professional',
  },
  {
    title: 'Matte Makeup',
    description: 'Velvety, shine-free finish that controls oil and lasts all day',
    category: 'Finish',
  },
  {
    title: 'Dewy Makeup',
    description: 'Luminous, glowing skin with hydrating products for a fresh, youthful appearance',
    category: 'Finish',
  },
  {
    title: 'Smokey Eye Makeup',
    description: 'Dark, blended eyeshadow around the eyes for a dramatic, sultry look',
    category: 'Eye',
  },
  {
    title: 'Bold Makeup',
    description: 'Vibrant colors, graphic liners, and statement lips for a show-stopping appearance',
    category: 'Glam',
  },
  {
    title: 'Nude Makeup',
    description: 'Neutral, skin-toned palette that enhances features without being overpowering',
    category: 'Everyday',
  },
  {
    title: 'Party Makeup',
    description: 'Glamorous, fun looks with shimmer and bold accents for celebrations',
    category: 'Special',
  },
  {
    title: 'Festive Makeup',
    description: 'Rich, opulent looks perfect for festivals and cultural celebrations',
    category: 'Special',
  },
  {
    title: 'Traditional Makeup',
    description: 'Classic styles that honor cultural heritage with timeless elegance',
    category: 'Special',
  },
  {
    title: 'Editorial Makeup',
    description: 'Creative, avant-garde looks for fashion shoots and artistic projects',
    category: 'Professional',
  },
  {
    title: 'Minimal Makeup',
    description: 'Clean, simple application focusing on skin quality with just a few products',
    category: 'Everyday',
  },
  {
    title: 'Korean Glass Skin Makeup',
    description: 'Translucent, poreless-looking skin with a glass-like luminous finish',
    category: 'Trending',
  },
  {
    title: 'Vintage Makeup',
    description: 'Retro-inspired looks from different decades, from pin-up to old Hollywood glamour',
    category: 'Trending',
  },
  {
    title: 'Monochrome Makeup',
    description: 'Single-color theme across eyes, lips, and cheeks for a cohesive, modern look',
    category: 'Trending',
  },
];

const categories = ['All', 'Everyday', 'Glam', 'Special', 'Professional', 'Finish', 'Eye', 'Trending'];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FFF5EE] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#FFCBA4]/10 rounded-full translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-[#E8B4B8]/10 rounded-full -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[#B76E79] text-sm tracking-[0.3em] uppercase font-medium">What We Offer</span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl text-[#3D2B1F] mt-3 mb-5 font-bold">
            Our Makeup Services
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#B76E79] to-transparent mx-auto" />
        </motion.div>

        {/* Featured Bridal Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-14 rounded-3xl overflow-hidden max-w-4xl mx-auto"
        >
          <div className="relative aspect-[21/9] sm:aspect-[3/1]">
            <Image
              src="/images/bridal-look.png"
              alt="Bridal Makeup Look"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3D2B1F]/70 via-[#3D2B1F]/30 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 sm:px-16">
              <div>
                <span className="text-[#FFCBA4] text-xs sm:text-sm tracking-[0.3em] uppercase">Most Popular</span>
                <h3 className="font-serif-heading text-2xl sm:text-4xl md:text-5xl text-white font-bold mt-2 mb-3">
                  Bridal Makeup
                </h3>
                <p className="text-white/80 font-serif-body text-base sm:text-lg max-w-md">
                  Your perfect look for the most special day. Long-lasting, waterproof, and absolutely breathtaking.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#FFCBA4] text-[#3D2B1F] shadow-md shadow-[#FFCBA4]/30'
                  : 'bg-white text-[#8B7355] hover:bg-[#FFE5D9] hover:text-[#3D2B1F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-[#F0D5C5]/40 hover:border-[#FFCBA4] transition-all duration-400 hover:shadow-lg hover:shadow-[#FFCBA4]/8 hover:-translate-y-0.5"
            >
              {/* Category badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-[#B76E79] font-medium tracking-wider uppercase bg-[#FFE5D9] px-3 py-1 rounded-full">
                  {service.category}
                </span>
                {service.featured && (
                  <span className="text-xs text-white bg-[#B76E79] px-2.5 py-1 rounded-full font-medium">
                    ★ Popular
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="font-serif-heading text-lg text-[#3D2B1F] font-semibold mb-2 group-hover:text-[#B76E79] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#8B7355] text-sm font-serif-body leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFCBA4] via-[#B76E79] to-[#E8B4B8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
