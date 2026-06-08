import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import videoSource from '../assets/enterintro.mp4';

gsap.registerPlugin(SplitText);

export default function Splash({ onComplete }) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 1. Split text for premium typewriter/reveal animation on mount
    const split = new SplitText(textRef.current, { type: 'chars' });
    
    split.chars.forEach((char) => char.classList.add('text-gradient'));
  
    gsap.from(split.chars, {
      opacity: 0,
      scale: 1.4,
      z: 100,
      stagger: 0.04,
      duration: 1,
      ease: 'power3.out',
    });

    // 2. Event listener tracking video progression physics
    const handleTimeUpdate = () => {
      // Trigger transition sequence exactly 0.8 seconds before video file terminates
      const transitionThreshold = video.duration - 0.8;

      if (video.currentTime >= transitionThreshold) {
        // Remove listener immediately so timeline only instances once
        video.removeEventListener('timeupdate', handleTimeUpdate);
        executeExitSequence();
      }
    };

    const executeExitSequence = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete(); // Unmount block callback
        }
      });

      tl.to(split.chars, {
        scale: 0.3,
        opacity: 0,
        filter: 'blur(10px)',
        stagger: { each: 0.01, from: 'center' }, // Shrinks inward to center point
        duration: 0.6,
        ease: 'power3.in'
      })
      .to(video, {
        opacity: 0,
        scale: 1.05, // Subtle backward camera pull away effect
        duration: 0.4,
        ease: 'power2.inOut'
      }, '-=0.4')
      .to(overlayRef.current, {
        opacity: 1, // Deep black transition flash
        backgroundColor: '#050505',
        duration: 0.4
      }, '-=0.4');
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      split.revert();
    };
  }, [onComplete]);

  return (
    <section ref={sectionRef} className="relative w-full h-[100dvh] overflow-hidden bg-black select-none">
      <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
        
        {/* Core Media Node - Fully Scaled and Stabilized */}
        <video 
          ref={videoRef}
          autoPlay 
          loop={false} // Must be false so duration engine calculates termination point
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
        >
          <source src={videoSource} type="video/mp4" />
        </video>

        {/* Ambient Darkener Overlays */}
        <div ref={overlayRef} className="absolute inset-0 bg-black opacity-40 pointer-events-none z-10" />
        
        {/* Centered HUD Title Header Layout - Shielded Against Multi-Line Wraps */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12 z-20">
          <h1 
            ref={textRef} 
            className="title p-2 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest uppercase font-sans text-white leading-snug max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-none drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
          >
            Welcome To My Portfolio
          </h1>
        </div>

      </div>
    </section>
  );
}