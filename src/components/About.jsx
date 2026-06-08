import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-neon-red">Me</span>
          </h2>
          <div className="w-20 h-1 bg-neon-red rounded-full neon-glow" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=" space-y-6 text-gray-text text-lg leading-relaxed"
          >
            <p>
              I am a passionate <strong className="text-white-text">Frontend Developer</strong> and <strong className="text-white-text">UI Designer</strong> dedicated to building practical, beautiful digital products. With a keen eye for aesthetics and a deep understanding of modern web technologies, I bridge the gap between design and engineering.
            </p>
            <p>
              Beyond traditional frontend development, I have a strong interest in <strong className="text-white-text">AI projects</strong> and exploring how artificial intelligence can be seamlessly integrated into user interfaces to create smarter, more intuitive experiences.
            </p>
            <p>
              My approach focuses on clean code, responsive layouts, and smooth animations that don't just look good, but actively enhance the user's journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { icon: <Terminal className="text-neon-red mb-4" size={32} />, title: 'Frontend Dev', desc: 'Crafting responsive and interactive web applications.' },
              { icon: <Lightbulb className="text-neon-red mb-4" size={32} />, title: 'UI/UX Design', desc: 'Designing intuitive and stunning user interfaces.' },
              { icon: <Code className="text-neon-red mb-4" size={32} />, title: 'AI Integration', desc: 'Building practical digital products with AI.' },
            ].map((item, index) => (
              <div key={index} className={`p-6 rounded-2xl bg-gradient-to-br from-black via-[#0d0202] to-[#1a0505] border border-gray-text/10 hover:border-neon-red/50 transition-colors duration-300 ${index === 2 ? 'sm:col-span-2' : ''}`}>
                {item.icon}
                <h3 className="text-xl font-bold text-white-text mb-2">{item.title}</h3>
                <p className="text-sm text-gray-text">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
