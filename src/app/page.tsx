'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Droplets,
  Sparkles,
  Palette,
  Paintbrush,
  Camera,
  Wind,
  Sun,
  UserCheck,
  Heart,
  Eye,
  Star,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
  ArrowUp,
  Send,
  Quote,
  Award,
  Users,
  CalendarDays,
  Crown,
  Gem,
  Flower2,
  Layers,
  Wand2,
  CircleDot,
  Brush,
} from 'lucide-react'

/* ─── Scroll-triggered animation wrapper ─── */
function FadeIn({ children, delay = 0, direction = 'up', className = '' }: {
  children: React.ReactNode; delay?: number; direction?: 'up' | 'down' | 'left' | 'right'; className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const dirs = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  }
  const d = dirs[direction]
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...d }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...d }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── DATA ─── */
const specialFeatures = [
  { icon: Droplets, title: 'Waterproof Makeup', desc: 'Long-lasting formulas that withstand tears, rain, and humidity — look flawless from morning to midnight without a single touch-up needed.' },
  { icon: Sparkles, title: 'Glossy Makeup', desc: 'High-shine, luminous finishes that catch the light beautifully, giving your skin a dewy, fresh-from-within glow.' },
  { icon: Palette, title: 'Deep Skin Tone Makeup', desc: 'Expert color matching and specialized techniques designed specifically to celebrate and enhance deeper complexions.' },
  { icon: Paintbrush, title: 'Pigmented Skin Makeup', desc: 'Advanced correction and coverage techniques for pigmented skin, ensuring an even, radiant, and natural-looking canvas.' },
  { icon: Camera, title: 'HD Makeup', desc: 'Camera-ready formulas that provide a smooth, invisible finish under high-definition cameras and harsh lighting.' },
  { icon: Wind, title: 'Airbrush Makeup', desc: 'Ultra-fine mist application for a lightweight, seamless, and perfectly even coverage that feels like a second skin.' },
  { icon: Sun, title: 'Sweat Proof Makeup', desc: 'All-day confidence with smudge-proof, transfer-resistant formulas that stay put through heat, sweat, and activity.' },
  { icon: UserCheck, title: 'Groom Makeup', desc: 'Refined, masculine grooming looks — from natural enhancement to dapper coverage for the modern gentleman.' },
  { icon: Heart, title: 'Dewy Finish Makeup', desc: 'Radiant, hydrated, and lit-from-within glow using illuminating products that keep skin looking fresh all day.' },
]

const makeupServices = [
  { icon: Flower2, title: 'Natural Makeup', desc: 'Light foundation, soft blush, and neutral tones to enhance your natural beauty without masking it.' },
  { icon: Eye, title: 'No-Makeup Makeup', desc: 'Minimal products that make your skin look fresh, healthy, and naturally flawless — your skin but better.' },
  { icon: Gem, title: 'Soft Glam Makeup', desc: 'Smooth base with soft contour, neutral eyeshadow, and subtle lashes for an effortlessly elegant look.' },
  { icon: Crown, title: 'Full Glam Makeup', desc: 'Bold eyeshadow, heavy contour, dramatic lashes, and strong lip color for events and photoshoots.' },
  { icon: Layers, title: 'Bridal Makeup', desc: 'Long-lasting, waterproof makeup designed to look absolutely perfect throughout wedding ceremonies and photos.' },
  { icon: Camera, title: 'HD Makeup', desc: 'Special products that give a smooth, flawless finish under high-definition cameras and bright lighting.' },
  { icon: Wind, title: 'Airbrush Makeup', desc: 'Applied with an airbrush machine for a lightweight, flawless, and perfectly even coverage.' },
  { icon: CircleDot, title: 'Matte Makeup', desc: 'Velvety, shine-free finish that controls oil and stays immaculate all day long.' },
  { icon: Sparkles, title: 'Dewy Makeup', desc: 'Luminous, glowing skin with hydrating products for a fresh, youthful, and radiant appearance.' },
  { icon: Eye, title: 'Smokey Eye Makeup', desc: 'Dark, expertly blended eyeshadow around the eyes for a dramatic, sultry, and captivating look.' },
  { icon: Palette, title: 'Bold Makeup', desc: 'Vibrant colors, graphic liners, and statement lips for a show-stopping, unforgettable appearance.' },
  { icon: Paintbrush, title: 'Nude Makeup', desc: 'Neutral, skin-toned palette that enhances your features without being overpowering.' },
  { icon: Star, title: 'Party Makeup', desc: 'Glamorous, fun looks with shimmer and bold accents perfect for celebrations and nights out.' },
  { icon: Award, title: 'Festive Makeup', desc: 'Rich, opulent looks perfect for festivals and cultural celebrations with shimmering highlights.' },
  { icon: Crown, title: 'Traditional Makeup', desc: 'Classic styles that honor cultural heritage with timeless, elegant beauty traditions.' },
  { icon: Wand2, title: 'Editorial Makeup', desc: 'Creative, avant-garde looks for fashion shoots, artistic projects, and magazine features.' },
  { icon: Gem, title: 'Minimal Makeup', desc: 'Clean, simple application focusing on skin quality with just a few carefully chosen products.' },
  { icon: Heart, title: 'Korean Glass Skin Makeup', desc: 'Translucent, poreless-looking skin with a glass-like luminous finish inspired by K-beauty.' },
  { icon: Flower2, title: 'Vintage Makeup', desc: 'Retro-inspired looks from different decades — from pin-up girl to old Hollywood glamour.' },
  { icon: Brush, title: 'Monochrome Makeup', desc: 'Single-color theme across eyes, lips, and cheeks for a cohesive, modern, and chic look.' },
]

const testimonials = [
  { name: 'Priya Sharma', role: 'Bride', text: 'My bridal makeup was absolutely stunning! It lasted the entire day through tears, dancing, and hugs. I felt like a princess.', rating: 5 },
  { name: 'Ananya Reddy', role: 'Model', text: 'The HD makeup for my photoshoot was flawless. Every shot looked magazine-ready. Truly a gifted artist!', rating: 5 },
  { name: 'Kavitha Nair', role: 'Event Client', text: 'From the consultation to the final look, everything was perfect. The airbrush makeup felt so light yet looked so full coverage.', rating: 5 },
  { name: 'Meera Joshi', role: 'Bride', text: 'I chose the Korean glass skin look for my reception and got so many compliments! Absolutely magical transformation.', rating: 5 },
  { name: 'Roshni Patel', role: 'Party Client', text: 'Best party makeup I have ever had. Bold, glamorous, and it stayed perfect all night long. Highly recommend!', rating: 5 },
  { name: 'Divya Menon', role: 'Editorial Client', text: 'The editorial look created for our fashion campaign was beyond creative. Such vision and artistry!', rating: 5 },
]

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: CalendarDays, value: '8+', label: 'Years Experience' },
  { icon: Heart, value: '200+', label: 'Bridal Looks' },
  { icon: Award, value: '50+', label: 'Awards Won' },
]

/* ═══════════════════════════════════════════════════ */
/* ─── MAIN PAGE COMPONENT ─── */
/* ═══════════════════════════════════════════════════ */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showTopBtn, setShowTopBtn] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      setShowTopBtn(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFF5EE', color: '#3D2B1F' }}>

      {/* ═══════════ NAVBAR ═══════════ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#B76E79]" />
              <span className="font-script text-2xl sm:text-3xl text-[#3D2B1F]">Ira Artistry</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Services', 'Gallery', 'About', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium tracking-wide text-[#5C4033] hover:text-[#B76E79] transition-colors duration-300 relative after:content-[\'\'] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#B76E79] after:transition-all after:duration-300 hover:after:w-full">
                  {item}
                </a>
              ))}
              <Button asChild className="rounded-full px-6 py-2 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#FFCBA4', color: '#3D2B1F', border: 'none' }}>
                <a href="#contact">Book Now</a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t"
              style={{ borderColor: '#F0D5C5' }}
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {['Home', 'Services', 'Gallery', 'About', 'Contact'].map(item => (
                  <a key={item} href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-[#5C4033] hover:text-[#B76E79] transition-colors py-2">
                    {item}
                  </a>
                ))}
                <Button asChild className="rounded-full mt-2 text-sm font-semibold"
                  style={{ backgroundColor: '#FFCBA4', color: '#3D2B1F', border: 'none' }}>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Book Now</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ═══════════ HERO ═══════════ */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src="/images/hero-banner.png" alt="Professional Makeup Artistry" fill className="object-cover" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,203,164,0.85) 0%, rgba(183,110,121,0.65) 50%, rgba(61,43,31,0.5) 100%)' }} />
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 left-10 w-20 h-20 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #FFE5D9, transparent)' }}
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-40 right-16 w-32 h-32 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #E8B4B8, transparent)' }}
        />
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #FFCBA4, transparent)' }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-script text-2xl sm:text-3xl md:text-4xl text-white mb-4"
          >
            Where Beauty Meets Artistry
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif-heading text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Professional Makeup
            <span className="block mt-2" style={{ color: '#FFE5D9' }}>for Every Occasion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-10 font-serif-body text-lg sm:text-xl leading-relaxed"
          >
            From bridal bliss to editorial excellence, we craft personalized makeup experiences
            that celebrate your unique beauty and leave a lasting impression.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="rounded-full px-8 py-3 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#FFFFFF', color: '#B76E79', border: 'none' }}>
              <a href="#services">
                Explore Services <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#B76E79]">
              <a href="#contact">Book Appointment</a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/70"
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════════ SPECIAL FEATURES ═══════════ */}
      <section id="features" className="py-20 sm:py-28 px-4" style={{ background: 'linear-gradient(180deg, #FFF5EE 0%, #FFE5D9 50%, #FFF5EE 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="font-script text-2xl sm:text-3xl mb-2" style={{ color: '#B76E79' }}>Why Choose Us</p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">What Makes Us Special</h2>
            <p className="text-[#5C4033] max-w-2xl mx-auto font-serif-body text-lg">
              We use premium products and specialized techniques to deliver flawless, long-lasting makeup for every skin type and occasion.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {specialFeatures.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.08}>
                <Card className="group border-none shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden h-full"
                  style={{ backgroundColor: '#FFFFFF' }}>
                  <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{ background: 'linear-gradient(135deg, #FFE5D9, #FFCBA4)' }}>
                      <feature.icon className="w-8 h-8" style={{ color: '#B76E79' }} />
                    </div>
                    <h3 className="font-serif-heading text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-[#5C4033] font-serif-body text-base leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MAKEUP SERVICES ═══════════ */}
      <section id="services" className="py-20 sm:py-28 px-4" style={{ backgroundColor: '#FFF5EE' }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="font-script text-2xl sm:text-3xl mb-2" style={{ color: '#B76E79' }}>Our Expertise</p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Makeup Services</h2>
            <p className="text-[#5C4033] max-w-2xl mx-auto font-serif-body text-lg">
              From natural elegance to full glam transformation, we offer a comprehensive range of makeup services tailored to your unique style and vision.
            </p>
          </FadeIn>

          {/* Featured service card */}
          <FadeIn className="mb-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image src="/images/bridal-look.png" alt="Bridal Makeup" fill className="object-cover" />
                  <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(to top, rgba(61,43,31,0.6), transparent)' }} />
                </div>
                <div className="p-8 sm:p-12 flex flex-col justify-center" style={{ background: 'linear-gradient(135deg, #FFE5D9, #E8B4B8)' }}>
                  <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-4 w-fit"
                    style={{ backgroundColor: '#B76E79', color: '#FFFFFF' }}>
                    MOST POPULAR
                  </span>
                  <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold mb-4">Bridal Makeup</h3>
                  <p className="text-[#3D2B1F] font-serif-body text-lg leading-relaxed mb-6">
                    Your wedding day deserves nothing less than perfection. Our bridal makeup service is designed to make you feel absolutely radiant and confident, with long-lasting, waterproof formulas that look stunning through every ceremony, photo, and celebration moment.
                  </p>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#B76E79] text-[#B76E79]" />)}
                    <span className="text-sm text-[#3D2B1F] ml-2 font-medium">Loved by 200+ Brides</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {makeupServices.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.05} direction={i % 2 === 0 ? 'left' : 'right'}>
                <Card className="group border-none shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-pointer overflow-hidden h-full"
                  style={{ backgroundColor: '#FFFFFF', borderTop: '3px solid #FFE5D9' }}>
                  <CardContent className="p-5 sm:p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ background: 'linear-gradient(135deg, #FFF0E6, #FFE5D9)' }}>
                        <service.icon className="w-5 h-5" style={{ color: '#B76E79' }} />
                      </div>
                      <h3 className="font-serif-heading text-lg font-semibold leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-[#5C4033] font-serif-body text-sm leading-relaxed flex-1">{service.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT SECTION ═══════════ */}
      <section id="about" className="py-20 sm:py-28 px-4 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFF5EE 0%, #FFE5D9 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <FadeIn direction="left">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/images/about-image.png" alt="Makeup Artist at Work" width={864} height={1152} className="w-full h-auto object-cover" />
                </div>
                {/* Floating accent */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl -z-10"
                  style={{ background: 'linear-gradient(135deg, #E8B4B8, #FFCBA4)' }}
                />
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full -z-10"
                  style={{ background: 'linear-gradient(135deg, #FFE5D9, #B76E79)' }}
                />
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn direction="right">
              <div>
                <p className="font-script text-2xl sm:text-3xl mb-2" style={{ color: '#B76E79' }}>Our Story</p>
                <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">About the Artist</h2>
                <div className="space-y-4 font-serif-body text-lg text-[#5C4033] leading-relaxed">
                  <p>
                    With over eight years of dedicated experience in the art of makeup, our founder has transformed the faces and confidence of hundreds of clients across India. What started as a passionate love affair with colors and creativity has blossomed into one of the most sought-after makeup artistry studios in the region.
                  </p>
                  <p>
                    Trained under internationally acclaimed makeup artists and certified in advanced HD, airbrush, and editorial techniques, our artist brings a unique blend of technical precision and artistic vision to every client. Every face tells a story, and we believe in enhancing your natural beauty to create looks that are as unique as you are.
                  </p>
                  <p>
                    From intimate bridal suites to grand wedding stages, from high-fashion editorial shoots to festive celebrations, our commitment to excellence and personalized service has earned us the trust of over 500 delighted clients and recognition across the beauty industry.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                  {stats.map((stat, i) => (
                    <FadeIn key={stat.label} delay={i * 0.1}>
                      <div className="text-center p-4 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }}>
                        <stat.icon className="w-6 h-6 mx-auto mb-2" style={{ color: '#B76E79' }} />
                        <p className="font-serif-heading text-2xl sm:text-3xl font-bold">{stat.value}</p>
                        <p className="text-xs sm:text-sm text-[#5C4033] mt-1">{stat.label}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY ═══════════ */}
      <section id="gallery" className="py-20 sm:py-28 px-4" style={{ backgroundColor: '#FFF5EE' }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="font-script text-2xl sm:text-3xl mb-2" style={{ color: '#B76E79' }}>Portfolio</p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-[#5C4033] max-w-2xl mx-auto font-serif-body text-lg">
              A glimpse into the transformations we create — every face tells a story, and every look is a masterpiece.
            </p>
          </FadeIn>

          {/* Masonry-ish grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {[
              { src: '/images/bridal-look.png', alt: 'Bridal Makeup', label: 'Bridal Glow', tall: true },
              { src: '/images/gallery-2.png', alt: 'Party Makeup', label: 'Glam Night', tall: false },
              { src: '/images/gallery-1.png', alt: 'Natural Makeup', label: 'Natural Beauty', tall: false },
              { src: '/images/gallery-3.png', alt: 'Korean Glass Skin', label: 'Glass Skin', tall: true },
              { src: '/images/about-image.png', alt: 'Makeup Artistry', label: 'The Process', tall: true },
              { src: '/images/gallery-4.png', alt: 'Vintage Glam', label: 'Vintage Vibes', tall: false },
            ].map((img, i) => (
              <FadeIn key={img.src} delay={i * 0.1}>
                <div className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                  <div className={img.tall ? 'aspect-[3/4]' : 'aspect-square'}>
                    <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end"
                    style={{ background: 'linear-gradient(to top, rgba(61,43,31,0.8) 0%, transparent 60%)' }}>
                    <div className="p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="font-script text-xl text-[#FFE5D9]">{img.label}</p>
                      <p className="text-white/80 text-sm mt-1">{img.alt}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="py-20 sm:py-28 px-4" style={{ background: 'linear-gradient(180deg, #FFE5D9 0%, #FFF5EE 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="font-script text-2xl sm:text-3xl mb-2" style={{ color: '#B76E79' }}>Testimonials</p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          </FadeIn>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-none shadow-xl overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
                  <CardContent className="p-8 sm:p-12 text-center">
                    <Quote className="w-12 h-12 mx-auto mb-6" style={{ color: '#FFCBA4' }} />
                    <p className="font-serif-body text-xl sm:text-2xl text-[#3D2B1F] leading-relaxed mb-8 italic">
                      &ldquo;{testimonials[activeTestimonial].text}&rdquo;
                    </p>
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#B76E79] text-[#B76E79]" />
                      ))}
                    </div>
                    <p className="font-serif-heading text-lg font-semibold">{testimonials[activeTestimonial].name}</p>
                    <p className="text-sm mt-1" style={{ color: '#B76E79' }}>{testimonials[activeTestimonial].role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-8' : ''}`}
                  style={{ backgroundColor: i === activeTestimonial ? '#B76E79' : '#FFCBA4' }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CONTACT SECTION ═══════════ */}
      <section id="contact" className="py-20 sm:py-28 px-4" style={{ backgroundColor: '#FFF5EE' }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="font-script text-2xl sm:text-3xl mb-2" style={{ color: '#B76E79' }}>Reach Out</p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-[#5C4033] max-w-2xl mx-auto font-serif-body text-lg">
              Ready to transform your look? Book your appointment today and let us create magic together.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <FadeIn className="md:col-span-3" direction="left">
              <Card className="border-none shadow-xl p-6 sm:p-8 lg:p-10" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="font-serif-heading text-2xl font-semibold mb-6">Book an Appointment</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#5C4033] mb-1.5 block">Full Name</label>
                    <Input placeholder="Your name" className="rounded-xl border-[#F0D5C5] focus:border-[#B76E79]" style={{ backgroundColor: '#FFF5EE' }} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#5C4033] mb-1.5 block">Email</label>
                    <Input type="email" placeholder="your@email.com" className="rounded-xl border-[#F0D5C5] focus:border-[#B76E79]" style={{ backgroundColor: '#FFF5EE' }} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#5C4033] mb-1.5 block">Phone</label>
                    <Input type="tel" placeholder="+91 XXXXX XXXXX" className="rounded-xl border-[#F0D5C5] focus:border-[#B76E79]" style={{ backgroundColor: '#FFF5EE' }} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#5C4033] mb-1.5 block">Service</label>
                    <select className="w-full h-10 rounded-xl border border-[#F0D5C5] px-3 text-sm focus:outline-none focus:border-[#B76E79]" style={{ backgroundColor: '#FFF5EE', color: '#3D2B1F' }}>
                      <option value="">Select a service</option>
                      {makeupServices.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#5C4033] mb-1.5 block">Preferred Date</label>
                    <Input type="date" className="rounded-xl border-[#F0D5C5] focus:border-[#B76E79]" style={{ backgroundColor: '#FFF5EE' }} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#5C4033] mb-1.5 block">Event Type</label>
                    <select className="w-full h-10 rounded-xl border border-[#F0D5C5] px-3 text-sm focus:outline-none focus:border-[#B76E79]" style={{ backgroundColor: '#FFF5EE', color: '#3D2B1F' }}>
                      <option value="">Select event type</option>
                      <option>Bridal / Wedding</option>
                      <option>Party / Celebration</option>
                      <option>Photoshoot</option>
                      <option>Editorial / Fashion</option>
                      <option>Festival / Traditional</option>
                      <option>Corporate Event</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-sm font-medium text-[#5C4033] mb-1.5 block">Message</label>
                  <Textarea placeholder="Tell us about your vision..." rows={4} className="rounded-xl border-[#F0D5C5] focus:border-[#B76E79] resize-none" style={{ backgroundColor: '#FFF5EE' }} />
                </div>
                <Button size="lg" className="w-full mt-6 rounded-xl py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{ backgroundColor: '#B76E79', color: '#FFFFFF', border: 'none' }}>
                  <Send className="w-4 h-4 mr-2" /> Send Booking Request
                </Button>
              </Card>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn className="md:col-span-2" direction="right">
              <div className="space-y-6">
                <Card className="border-none shadow-lg p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 className="font-serif-heading text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Phone, text: '+91 98765 43210', label: 'Call Us' },
                      { icon: Mail, text: 'hello@glowbydesign.com', label: 'Email Us' },
                      { icon: MapPin, text: 'Studio 42, Fashion Street, Mumbai 400001', label: 'Visit Us' },
                    ].map(item => (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #FFE5D9, #FFCBA4)' }}>
                          <item.icon className="w-5 h-5" style={{ color: '#B76E79' }} />
                        </div>
                        <div>
                          <p className="text-xs text-[#8B7355] uppercase tracking-wider">{item.label}</p>
                          <p className="text-sm font-medium text-[#3D2B1F]">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="border-none shadow-lg p-6" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 className="font-serif-heading text-xl font-semibold mb-4">Working Hours</h3>
                  <div className="space-y-3">
                    {[
                      { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
                      { day: 'Saturday', time: '9:00 AM - 5:00 PM' },
                      { day: 'Sunday', time: 'By Appointment Only' },
                    ].map(item => (
                      <div key={item.day} className="flex items-center justify-between">
                        <span className="text-sm text-[#5C4033]">{item.day}</span>
                        <span className="text-sm font-medium text-[#3D2B1F]">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="border-none shadow-lg p-6" style={{ background: 'linear-gradient(135deg, #B76E79, #E8B4B8)' }}>
                  <h3 className="font-serif-heading text-xl font-semibold mb-4 text-white">Follow Us</h3>
                  <p className="text-white/80 text-sm mb-4">Stay updated with our latest looks, tips, and behind-the-scenes moments.</p>
                  <div className="flex gap-3">
                    {[Instagram, Facebook, Twitter].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                        <Icon className="w-5 h-5 text-white" />
                      </a>
                    ))}
                  </div>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="pt-16 pb-8 px-4" style={{ backgroundColor: '#3D2B1F', color: '#FFE5D9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12" style={{ borderBottom: '1px solid rgba(255,229,217,0.15)' }}>
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-[#FFCBA4]" />
                <span className="font-script text-2xl text-[#FFE5D9]">Ira Artistry</span>
              </div>
              <p className="text-sm text-[#FFE5D9]/60 leading-relaxed mb-4">
                Transforming faces and boosting confidence through the art of professional makeup. Every look is a celebration of your unique beauty.
              </p>
              <div className="flex gap-3">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-[#B76E79] transition-colors duration-300" style={{ backgroundColor: 'rgba(255,229,217,0.1)' }}>
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif-heading text-base font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2.5">
                {['Home', 'Services', 'Gallery', 'About', 'Contact'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-sm text-[#FFE5D9]/60 hover:text-[#FFCBA4] transition-colors duration-300">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-serif-heading text-base font-semibold mb-4 text-white">Popular Services</h4>
              <ul className="space-y-2.5">
                {['Bridal Makeup', 'HD Makeup', 'Airbrush Makeup', 'Party Makeup', 'Korean Glass Skin'].map(s => (
                  <li key={s}>
                    <a href="#services" className="text-sm text-[#FFE5D9]/60 hover:text-[#FFCBA4] transition-colors duration-300">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-serif-heading text-base font-semibold mb-4 text-white">Newsletter</h4>
              <p className="text-sm text-[#FFE5D9]/60 mb-4">Subscribe for beauty tips, special offers, and latest updates.</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="rounded-lg text-sm border-none focus:ring-0" style={{ backgroundColor: 'rgba(255,229,217,0.1)', color: '#FFE5D9' }} />
                <Button size="sm" className="rounded-lg shrink-0 px-4" style={{ backgroundColor: '#B76E79', color: '#FFFFFF', border: 'none' }}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#FFE5D9]/40">&copy; {new Date().getFullYear()} Ira Artistry. All rights reserved.</p>
            <p className="text-xs text-[#FFE5D9]/40">Crafted with love & passion</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: '#B76E79', color: '#FFFFFF' }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
