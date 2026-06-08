import React from 'react'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2, Layers, Flame, Terminal, Atom, Wind, Cpu, Server, Database, Palette, GitBranch, BrainCircuit
} from 'lucide-react';

const skills = [
  { name: "HTML", icon: <Code2 />, color: "text-[#f97316]", glow: "shadow-[#f97316]/20" },
  { name: "CSS", icon: <Layers />, color: "text-[#3b82f6]", glow: "shadow-[#3b82f6]/20" },
  { name: "Bootstrap CSS", icon: <Flame />, color: "text-[#7952b3]", glow: "shadow-[#7952b3]/20" },
  { name: "JavaScript", icon: <Terminal />, color: "text-[#eab308]", glow: "shadow-[#eab308]/20" },
  { name: "React", icon: <Atom />, color: "text-[#00d8ff]", glow: "shadow-[#00d8ff]/20" },
  { name: "Tailwind CSS", icon: <Wind />, color: "text-[#38bdf8]", glow: "shadow-[#38bdf8]/20" },
  { name: "Node.js", icon: <Cpu />, color: "text-[#22c55e]", glow: "shadow-[#22c55e]/20" },
  { name: "Express.js", icon: <Server />, color: "text-[#e2e8f0]", glow: "shadow-[#e2e8f0]/10" },
  { name: "MongoDB", icon: <Database />, color: "text-[#10b981]", glow: "shadow-[#10b981]/20" },
  { name: "Figma", icon: <Palette />, color: "text-[#a259ff]", glow: "shadow-[#a259ff]/20" },
  { name: "Canva", icon: <Palette />, color: "text-[#00c4cc]", glow: "shadow-[#00c4cc]/20" },
  { name: "Git/GitHub", icon: <GitBranch />, color: "text-[#f05032]", glow: "shadow-[#f05032]/20" },
  { name: "RAG", icon: <BrainCircuit />, color: "text-[#ef4444]", glow: "shadow-[#ef4444]/30" }
];

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);

  const triggerRef = useRef(null);
  const ringRef = useRef(null);
  
  useEffect(() => {
    const totalSkills = skills.length;
    
    // Dynamic Responsive Radius Calculation
    const getRadius = () => {
      if (window.innerWidth < 480) return 260;  // Small Mobile
      if (window.innerWidth < 768) return 340;  // Mobile / Tablets
      if (window.innerWidth < 1024) return 420; // Small Laptops
      return 500;                               // Desktop Default
    };

    let radius = getRadius();
    const cards = gsap.utils.toArray(".skill-node");

    const layoutCards = () => {
      cards.forEach((card, index) => {
        const angle = (index / totalSkills) * Math.PI * 2;
        const xPos = Math.sin(angle) * radius;
        const zPos = Math.cos(angle) * radius;
        const rotationY = (index / totalSkills) * 360;

        gsap.set(card, {
          x: xPos,
          z: zPos,
          rotationY: rotationY,
          transformOrigin: "50% 50%",
          backfaceVisibility: "hidden"
        });
      });
    };

    // Run initial configuration layout
    layoutCards();

    // GSAP Scroll Animation Ring
    const spinTimeline = gsap.to(ringRef.current, {
      rotationY: 360,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${totalSkills * 90}%`,
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });

    // Handle Window Resize Events cleanly
    const handleResize = () => {
      const newRadius = getRadius();
      if (newRadius !== radius) {
        radius = newRadius;
        layoutCards();
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="skills">
      <div ref={triggerRef} className="relative w-full h-screen bg-[#050505] overflow-hidden select-none">
        
        {/* Responsive Layout Header Title Adjustment */}
        <div className="w-full max-w-7xl mx-auto px-4 relative z-20">
          <h2 className="absolute top-10 left-1/2 -translate-x-1/2 text-center text-2xl sm:text-3xl md:text-5xl font-bold mb-4 tracking-tight whitespace-nowrap text-white">
            Technical <span className="text-neon-red">Skills</span>
            <div className="w-28 sm:w-40 h-[3px] bg-neon-red rounded-full neon-glow mx-auto mt-2" />
          </h2>
        </div>

        {/* 3D Container Context Space */}
        <div 
          className="relative w-full h-full flex items-center justify-center overflow-hidden" 
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        >
          {/* Card Engine Carousel Ring */}
          <div 
            ref={ringRef}
            className="relative w-[150px] h-[110px] sm:w-[220px] sm:h-[140px] flex items-center justify-center" 
            style={{ transformStyle: "preserve-3d" }}
          >
            {skills.map((skill, idx) => (
              <div 
                key={skill.name} 
                className={`skill-node absolute w-full h-full border border-red-950/40 bg-gradient-to-b from-[#0a0202] to-[#050505] rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-5 backdrop-blur-md shadow-2xl ${skill.glow} transition-all duration-300 group hover:border-neon-red`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Responsive Scale Icon Box */}
                <div className={`text-2xl sm:text-3xl ${skill.color} drop-shadow-[0_0_10px_rgba(239,68,68,0.1)] transition-transform duration-300 group-hover:scale-110`}> 
                  {React.cloneElement(skill.icon, { size: window.innerWidth < 640 ? 20 : 28 })}
                </div>

                {/* Adaptive Text Labels */}
                <div className="text-center">
                  <p className="text-xs sm:text-sm md:text-base lg:text-xl font-bold tracking-wider text-white font-sans uppercase">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills;