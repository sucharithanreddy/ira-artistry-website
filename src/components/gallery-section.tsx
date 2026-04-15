'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Eye, X } from 'lucide-react';

const galleryImages = [
  {
    src: '/images/hero-banner.png',
    alt: 'Professional Makeup Artistry',
    title: 'Editorial Look',
    category: 'Editorial',
    span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/bridal-look.png',
    alt: 'Bridal Makeup',
    title: 'Bridal Beauty',
    category: 'Bridal',
    span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-2',
  },
  {
    src: '/images/gallery-2.png',
    alt: 'Creative Makeup',
    title: 'Creative Vision',
    category: 'Creative',
    span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
  },
  {
    src: '/images/about-image.png',
    alt: 'Glamour Makeup',
    title: 'Glamour Look',
    category: 'Glamour',
    span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
  },
  {
    src: '/images/gallery-1.png',
    alt: 'Festival Makeup',
    title: 'Festive Glow',
    category: 'Festival',
    span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
  },
  {
    src: '/images/hero-banner.png',
    alt: 'Natural Beauty',
    title: 'Natural Radiance',
    category: 'Natural',
    span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#FFE5D9]/30 rounded-full -translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-[#E8B4B8]/15 rounded-full translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[#B76E79] text-sm tracking-[0.3em] uppercase font-medium">Portfolio</span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl text-[#3D2B1F] mt-3 mb-5 font-bold">
            Our Work
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#B76E79] to-transparent mx-auto" />
          <p className="text-[#8B7355] mt-6 text-lg font-serif-body max-w-2xl mx-auto">
            A curated collection of our finest work, showcasing the artistry and passion we bring to every look.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[240px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={`${image.title}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${image.span}`}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/80 via-[#3D2B1F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#FFCBA4] text-xs tracking-widest uppercase">{image.category}</span>
                  <h3 className="font-serif-heading text-lg sm:text-xl text-white font-semibold mt-1">{image.title}</h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 border-2 border-[#B76E79] text-[#B76E79] font-semibold rounded-full text-base hover:bg-[#B76E79] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#B76E79]/20">
            View Full Portfolio
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[85vh] w-full aspect-[3/4] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <span className="text-[#FFCBA4] text-xs tracking-widest uppercase">{selectedImage.category}</span>
              <h3 className="font-serif-heading text-2xl text-white font-semibold mt-1">{selectedImage.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
