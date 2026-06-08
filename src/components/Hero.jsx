import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import profileImage from '../assets/profile.png';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const profile = gsap.fromTo(
      containerRef.current.querySelector('img'),
      { opacity: 0, translateY: 200 }, 
      { opacity: 1, duration: 1, translateY: 0, ease: "power1.in" }
    );

    // 1. Initialize SplitText to break string into character nodes
    const split = new SplitText(textRef.current, {
      type: "chars",
      charsClass: "terminal-char"
    });

    const chars = split.chars;

    // 2. Clear initial state visually (hide chars before animation steps in)
    gsap.set(chars, { display: "none" });

    // 3. Construct the Typewriter Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Optional: clean up split classes once finished to allow standard text selection
        // split.revert(); 
      }
    });

    tl.to(chars, {
      display: "inline-block",
      stagger: {
        each: 0.03, // Velocity speed: time delay between each character print
      },
      ease: "none"
    });

    return () => {
      split.kill(); // Safely kill splits on component unmount
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden bg-black">
       {/* background blobs */}
       <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 right-1/4 w-76 h-76  bg-neon-red/50 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute top-1/2 left-1/1 w-96 h-96 bg-neon-red/30 rounded-full blur-[150px] mix-blend-screen" />
          </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Main Grid Wrapper: Stacks on mobile, splits on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Block */}
          <div className="max-w-2xl mx-auto lg:mx-0 lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5x md:text-6xl font-bold mb-6 tracking-tight leading-tight"
            >
              Hi, <span className="text-neon-red">I'm</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                James Nobel
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              ref={textRef}
              className="subtitle text-lg sm:text-xl md:text-2xl text-neutral-400 mb-10 font-light leading-relaxed"
            >
              Frontend Developer <span className="text-neon-red mx-1.5">|</span> UI Designer{' '}
              <span className="text-neon-red mx-1.5">|</span> AI Project Builder
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-neon-red hover:bg-hover-red text-white rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 neon-glow hover:-translate-y-1"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-neutral-800 text-white rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                Contact Me <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Profile Image Container */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center relative">
            <div className="relative w-64 sm:w-80 lg:w-full max-w-md aspect-square lg:aspect-auto">
              <img
                src={profileImage}
                alt="James Nobel Profile Picture"
                className=" w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(239,68,68,0.15)] "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;