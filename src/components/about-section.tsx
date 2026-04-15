'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Heart, Award, Clock, Users } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Clock, value: '8+', label: 'Years Experience' },
  { icon: Heart, value: '200+', label: 'Bridal Looks' },
  { icon: Award, value: '50+', label: 'Awards Won' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-20 sm:py-28 bg-gradient-to-b from-white to-[#FFF5EE] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FFE5D9]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#E8B4B8]/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-[#FFCBA4]/20">
                <Image
                  src="/images/about-image.png"
                  alt="Glow by Design Makeup Artist"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/10 to-transparent" />
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#FFCBA4]/30 rounded-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#E8B4B8]/20 rounded-3xl -z-10" />

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 sm:bottom-8 sm:-right-8 bg-white rounded-2xl p-4 sm:p-6 shadow-xl shadow-[#FFCBA4]/15 border border-[#F0D5C5]/50"
              >
                <div className="text-center">
                  <span className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#B76E79]">8+</span>
                  <p className="text-[#8B7355] text-xs sm:text-sm font-serif-body mt-1">Years of<br />Excellence</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#B76E79] text-sm tracking-[0.3em] uppercase font-medium">Our Story</span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl text-[#3D2B1F] mt-3 mb-6 font-bold leading-tight">
              About the Artist
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#B76E79] to-transparent mb-8" />

            <div className="space-y-5 text-[#5C4033] font-serif-body text-lg leading-relaxed">
              <p>
                With over eight years of dedicated passion for the art of makeup, I have had the privilege of transforming
                hundreds of faces for life&apos;s most cherished moments. My journey began with a simple love for colors and
                textures, evolving into a deep understanding of how makeup can reveal the unique beauty within every individual.
              </p>
              <p>
                Trained by some of the industry&apos;s finest artists and certified in HD, airbrush, and editorial techniques,
                I bring a meticulous approach to every look I create. Whether it&apos;s a bride&apos;s dream wedding look,
                a red-carpet appearance, or a subtle everyday glow, I believe in makeup that feels as good as it looks.
              </p>
              <p>
                Every face tells a story, and my mission is to make sure yours is told beautifully. I use only premium,
                skin-friendly products and stay at the forefront of global beauty trends while honoring timeless techniques
                that have defined artistry for generations.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <span className="font-script text-3xl text-[#B76E79]">Glow by Design</span>
              <p className="text-[#8B7355] text-sm mt-1 font-serif-body italic">Founder & Lead Makeup Artist</p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-20 sm:mt-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.4 }}
              className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#F0D5C5]/40 hover:shadow-lg hover:shadow-[#FFCBA4]/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFCBA4] to-[#E8B4B8] flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#3D2B1F]">
                {stat.value}
              </div>
              <div className="text-[#8B7355] text-sm font-serif-body mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
