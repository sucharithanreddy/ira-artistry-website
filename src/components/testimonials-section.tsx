'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Bride',
    rating: 5,
    text: 'Glow by Design made my wedding day absolutely perfect. The makeup lasted through tears, dancing, and every moment in between. I felt like a true princess!',
    image: 'S',
  },
  {
    name: 'Priya Sharma',
    role: 'Fashion Model',
    rating: 5,
    text: 'Working with this artist for editorial shoots is always a dream. The attention to detail, the creativity, and the flawless execution are unmatched in the industry.',
    image: 'P',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Event Attendee',
    rating: 5,
    text: 'I booked a party makeup session and was blown away by the transformation. The products felt so light yet looked so glamorous. Highly recommend!',
    image: 'E',
  },
  {
    name: 'Aisha Patel',
    role: 'Repeat Client',
    rating: 5,
    text: 'I have been coming to Glow by Design for three years now. Every single time, the result exceeds my expectations. The airbrush technique is absolutely incredible.',
    image: 'A',
  },
  {
    name: 'Jessica Chen',
    role: 'Bridal Party',
    rating: 5,
    text: 'The whole bridal party looked stunning! The artist managed to create unique but cohesive looks for each of us. So professional and talented.',
    image: 'J',
  },
  {
    name: 'Olivia Thompson',
    role: 'Content Creator',
    rating: 5,
    text: 'For HD camera work, no one does it better. My content looks absolutely flawless and I constantly get compliments on my makeup from followers.',
    image: 'O',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#FFF5EE] to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFE5D9]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[#B76E79] text-sm tracking-[0.3em] uppercase font-medium">Testimonials</span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl text-[#3D2B1F] mt-3 mb-5 font-bold">
            What Our Clients Say
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#B76E79] to-transparent mx-auto" />
        </motion.div>

        {/* Testimonials Carousel - Desktop */}
        <div className="hidden md:block">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: `-${currentIndex * (100 / visibleCount + 2)}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="flex-shrink-0 w-[calc(33.333%-1rem)]"
                  >
                    <div className="bg-white rounded-2xl p-8 border border-[#F0D5C5]/40 hover:shadow-xl hover:shadow-[#FFCBA4]/10 transition-all duration-500 h-full relative group">
                      {/* Quote icon */}
                      <div className="absolute top-6 right-6">
                        <Quote className="w-8 h-8 text-[#FFCBA4]/30" />
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#FFCBA4] fill-[#FFCBA4]" />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-[#5C4033] font-serif-body text-base leading-relaxed mb-6 italic">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFCBA4] to-[#E8B4B8] flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">{testimonial.image}</span>
                        </div>
                        <div>
                          <h4 className="font-serif-heading text-base font-semibold text-[#3D2B1F]">
                            {testimonial.name}
                          </h4>
                          <p className="text-[#B76E79] text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full border-2 border-[#F0D5C5] flex items-center justify-center text-[#8B7355] hover:bg-[#FFCBA4] hover:text-[#3D2B1F] hover:border-[#FFCBA4] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                disabled={currentIndex === maxIndex}
                className="w-12 h-12 rounded-full border-2 border-[#F0D5C5] flex items-center justify-center text-[#8B7355] hover:bg-[#FFCBA4] hover:text-[#3D2B1F] hover:border-[#FFCBA4] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(maxIndex + 1)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-[#B76E79]' : 'w-2 bg-[#F0D5C5] hover:bg-[#FFCBA4]'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Testimonials */}
        <div className="md:hidden space-y-4">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#F0D5C5]/40 relative"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 text-[#FFCBA4]/30" />
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#FFCBA4] fill-[#FFCBA4]" />
                ))}
              </div>
              <p className="text-[#5C4033] font-serif-body text-sm leading-relaxed mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFCBA4] to-[#E8B4B8] flex items-center justify-center">
                  <span className="text-white font-semibold text-xs">{testimonial.image}</span>
                </div>
                <div>
                  <h4 className="font-serif-heading text-sm font-semibold text-[#3D2B1F]">{testimonial.name}</h4>
                  <p className="text-[#B76E79] text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
