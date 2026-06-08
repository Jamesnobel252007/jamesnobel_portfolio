import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Cpu } from 'lucide-react';

const experiences = [
  {
    title: "English Club Chairman",
    description: "Led the university English Club, organizing events, workshops, and fostering a community of language enthusiasts to improve communication skills among peers.",
    icon: <Users size={24} className="text-neon-red" />,
    date: "Leadership & Community"
  },
  {
    title: "Hackathon Participation",
    description: "Actively participated in multiple high-stakes hackathons, collaborating under pressure to build innovative software solutions and prototypes within tight deadlines.",
    icon: <Award size={24} className="text-neon-red" />,
    date: "Competitive Programming"
  },
  {
    title: "AI Project Development",
    description: "Spearheaded the development of various artificial intelligence projects, including RAG systems and predictive models, bridging the gap between theoretical AI and practical application.",
    icon: <Cpu size={24} className="text-neon-red" />,
    date: "Research & Development"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary-black/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-neon-red">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-neon-red rounded-full neon-glow mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line for Mobile */}
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gray-text/20" />
              
              <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-rich-black border-2 border-neon-red items-center justify-center z-10 neon-glow">
                  {exp.icon}
                </div>
                
                {/* Mobile Dot */}
                <div className="md:hidden absolute left-[-5px] top-6 w-3 h-3 rounded-full bg-neon-red shadow-[0_0_10px_rgba(255,7,58,0.8)]" />

                <div className="md:w-[45%] bg-gradient-to-b from-black via-[#0d0202] to-[#1a0505] border border-gray-text/10 p-6 rounded-2xl hover:border-neon-red/30 transition-colors duration-300">
                  <span className="text-xs font-bold uppercase tracking-wider text-neon-red mb-2 block">{exp.date}</span>
                  <h3 className="text-xl font-bold text-white-text mb-3">{exp.title}</h3>
                  <p className="text-gray-text text-sm leading-relaxed">{exp.description}</p>
                </div>
                
                <div className="hidden md:block md:w-[45%]" />
              </div>
            </motion.div>
          ))}
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[120px] bottom-0 w-px bg-gradient-to-b from-neon-red/50 via-gray-text/20 to-transparent -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
