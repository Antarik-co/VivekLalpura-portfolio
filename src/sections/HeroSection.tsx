import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/Buttons';

function FloatingChip({ text, delay, className, floatDelay = 0 }: { text: string, delay: number, className: string, floatDelay?: number }) {
  return (
    <div className={`hidden md:flex absolute z-10 ${className}`}>
      <FadeIn delay={delay} y={15}>
        <motion.div
          animate={{ y: [-6, 6] }}
          transition={{
            duration: 4 + floatDelay,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut'
          }}
          className="rounded-xl border border-[#D7E2EA]/25 bg-white/5 backdrop-blur-sm text-[#D7E2EA] text-xs uppercase tracking-wide px-4 py-2"
        >
          {text}
        </motion.div>
      </FadeIn>
    </div>
  );
}

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      {/* Background Video Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video 
          ref={videoRef}
          src="/hero.webm" 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Scrim */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(180deg, rgba(12,12,12,0.55) 0%, rgba(12,12,12,0.75) 100%)' }} 
        />
      </div>

      {/* Blueprint Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #D7E2EA 1px, transparent 1px), linear-gradient(to bottom, #D7E2EA 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex items-center px-6 md:px-10 pt-6 md:pt-8 w-full z-20">
        <div className="flex justify-between w-full text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
          <a href="#software" className="hover:opacity-70 transition-opacity duration-200">Software</a>
          <a href="#work" className="hover:opacity-70 transition-opacity duration-200">Work</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
        </div>
      </FadeIn>

      {/* Floating Chips */}
      <FloatingChip text="6,000+ ROOFING PLANS" delay={0.7} floatDelay={0} className="top-32 right-[8%]" />
      <FloatingChip text="700+ EXCAVATION PLANS" delay={0.8} floatDelay={1.2} className="top-[45%] left-[6%]" />
      <FloatingChip text="5+ YEARS EXPERIENCE" delay={0.9} floatDelay={0.7} className="bottom-40 right-[12%]" />

      {/* Hero Heading */}
      <div className="flex-grow flex items-center justify-center overflow-hidden z-20">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.85] text-center w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m<br/>Vivek
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative">
        <FadeIn delay={0.35} y={20}>
          <div className="max-w-[220px] sm:max-w-[300px] md:max-w-[360px]">
            <span className="block text-[#D7E2EA] opacity-50 text-xs uppercase tracking-[0.2em] mb-2 font-medium">WHAT I DO</span>
            <p className="text-[#D7E2EA] font-light leading-relaxed text-[clamp(1rem,1.8vw,1.75rem)]">
              Civil engineer &amp; construction estimation manager delivering precision <span className="font-medium">roofing</span>, <span className="font-medium">cladding</span>, and <span className="font-medium">earthworks</span> outcomes for Australian clients.
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
