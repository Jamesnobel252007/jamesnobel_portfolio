import React from 'react';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projectsList = [
  {
    id: 1,
    title: "NOVEL_LAUNCH_PAD",
    subtitle: "Immersive literary landing deployment architecture. Utilizes performance-optimized GSAP kinetic scroll pipelines. Features reactive typography and custom motion viewports. Engineered for high-conversion visual storytelling.",
    tags: ["React", "Tailwind CSS", "GSAP Engine", "UI/UX"],
    glow: "shadow-[0_0_40px_rgba(239,68,68,0.25)]"
  },
  {
    id: 2,
    title: "SAEC_AI_CONSULTANT",
    subtitle: "Predictive campus intelligence terminal and assistant network. Powered by LLM orchestration via the Gemini intelligence core. Integrated asynchronous communication over a Flask REST API gateway. Delivers rapid institutional diagnostics and data routing.",
    tags: ["Python", "Flask", "Gemini API", "React", "Tailwind CSS"],
    glow: "shadow-[0_0_40px_rgba(220,38,38,0.25)]"
  },
  {
    id: 3,
    title: "INSTAMETRIC_DASHBOARD",
    subtitle: "Real-time social telemetry data ingestion module. Directly interfaces with structural Instagram Graph endpoints. Aggregates deep engagement vectors into intuitive UI layers. Designed for responsive analytics rendering and monitoring.",
    tags: ["React", "Instagram API", "Tailwind CSS", "Data Analytics"],
    glow: "shadow-[0_0_40px_rgba(185,28,28,0.25)]"
  },
  {
    id: 4,
    title: "RES_Q_MOBILE_CORE",
    subtitle: "Cross-platform emergency rider tracking mobile app node. Compiled natively via Expo Go ecosystem for rapid field execution. Maps live telematics telemetry streaming from localized IoT nodes. Features low-latency crash detection and alerting triggers.",
    tags: ["React Native", "Expo Go", "Tailwind CSS", "IoT Gateway"],
    glow: "shadow-[0_0_40px_rgba(153,27,27,0.25)]"
  },
  {
    id: 5,
    title: "WONDER_SPA_PORTAL",
    subtitle: "Full-stack client onboarding and appointment scheduling node. Features transaction integrity via robust MongoDB cluster schemas. Backed by an atomic Express routing backend layer. Provides an elegant interface for complete service lifecycle tracking.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    glow: "shadow-[0_0_40px_rgba(239,68,68,0.25)]"
  }
];

export default function Projects() {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-slide");

    // Dynamic responsive parameters mapping function
    const getLayoutConfig = () => {
      const isMobile = window.innerWidth < 768;
      return {
        initialXMultiplier: isMobile ? 80 : 400,
        initialZOffset: isMobile ? -120 : -250,
        activeCardX: isMobile ? -20 : -170,
        exitXMultiplier: isMobile ? 120 : 300,
        nextCardXMultiplier: isMobile ? 30 : 120
      };
    };

    let config = getLayoutConfig();

    const initCards = () => {
      cards.forEach((card, index) => {
        const isEven = index % 2 === 0;
        const direction = isEven ? -1 : 1;

        if (index > 0) {
          gsap.set(card, {
            z: index * config.initialZOffset,
            x: direction * config.initialXMultiplier,
            rotationY: direction * -25,
            scale: 1 - index * 0.05,
            opacity: 1 - index * 0.25,
          });
        } else {
          gsap.set(card, {
            rotationY: 25,
            x: config.activeCardX,
            z: 0,
            scale: 1,
            opacity: 1
          });
        }
      });
    };

    initCards();

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${cards.length * 120}%`,
        scrub: 0.5,
        pin: true,
        anticipatePin: 1
      }
    });

    cards.forEach((card, index) => {
      const isEven = index % 2 === 0;
      const currentDirection = isEven ? -1 : 1;

      if (index < cards.length - 1) {
        const nextCard = cards[index + 1];
        const nextDirection = (index + 1) % 2 === 0 ? -1 : 1;

        t1.to(card, {
          z: 500,
          x: currentDirection * config.exitXMultiplier,
          scale: 1.6,
          opacity: 0,
          ease: "power1.inOut"
        }, index)
        .to(nextCard, {
          z: 0,
          x: nextDirection * config.nextCardXMultiplier,
          rotationY: nextDirection * -15,
          scale: 1,
          opacity: 1,
          ease: "power1.inOut"
        }, index);
      }
    });

    const handleResize = () => {
      config = getLayoutConfig();
      initCards();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="projects" ref={triggerRef} className="relative w-full h-screen bg-[#050505] overflow-hidden select-none">
      <div className='relative w-full h-screen'>
        
        {/* Title Section Header */}
        <div className="w-full relative z-30">
          <h2 className='absolute top-10 sm:top-14 left-1/2 -translate-x-1/2 text-center text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white whitespace-nowrap'>
            Featured <span className='text-neon-red'>Projects</span>
            <div className="w-28 sm:w-40 h-[3px] bg-neon-red rounded-full neon-glow mx-auto mt-2" />
          </h2>
        </div>

        {/* 3D Transform Render Area */}
        <div ref={containerRef} className="relative flex items-center justify-center w-full h-full" style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>
          {projectsList.map((project, idx) => (
            <div
              key={project.id}
              className={`project-slide absolute w-[90%] sm:w-[85%] max-w-[640px] h-[420px] sm:h-[380px] rounded-2xl border border-red-950/60 bg-gradient-to-br from-black via-[#0d0202] to-[#1a0505] p-5 sm:p-8 flex flex-col justify-between ${project.glow}`}
            >
              {/* Card Meta details */}
              <div className="overflow-hidden">
                <div className='flex justify-between items-center font-mono text-[9px] sm:text-[10px] tracking-widest text-red-500 mb-4 sm:mb-6'>
                  <span className='opacity-60'> SYSTEM_INDEX // 0{idx + 1}</span>
                </div>

                <h3 className='text-xl sm:text-2xl md:text-3xl font-black tracking-wide font-sans text-white uppercase'>
                  {project.title}
                </h3>
                <p className='text-[11px] sm:text-xs font-mono text-neutral-400 mt-3 sm:mt-4 tracking-normal sm:tracking-wide leading-relaxed overflow-y-auto max-h-[160px] sm:max-h-none pr-1'>
                  {project.subtitle}
                </p>
              </div>

              {/* Tech Stack Footer */}
              <div className="border-t border-red-950/80 pt-4 sm:pt-6 mt-2">
                <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] sm:text-[12px] px-2 py-0.5 sm:py-1 bg-red-950/20 border border-red-900/30 rounded text-neutral-400 hover:text-red-400 transition-colors whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}