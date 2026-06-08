import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Code, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden ">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-red/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get In <span className="text-neon-red">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-neon-red rounded-full neon-glow mx-auto" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-gray-text max-w-2xl mx-auto"
          >
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </div>

        <div className="flex items-center justify-center text-center gap-16 sm:flex-row">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8  "
          >
            <h3 className="text-2xl font-bold text-white-text">Let's connect</h3>
            <p className="text-gray-text ">
              Feel free to reach out across any of these platforms. I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col justify-center items-center gap-20 sm:flex-row gap-4">
              <a href="https://www.linkedin.com/in/jamesnobel" className="flex items-center gap-4 text-gray-text hover:text-neon-red transition-colors group">
                <div className="w-12 h-12 rounded-full bg-secondary-black border border-gray-text/10 flex items-center justify-center group-hover:border-neon-red/50 group-hover:bg-neon-red/10 transition-all">
                  <Globe size={20} />
                </div>
                <span className="font-medium text-lg">LinkedIn</span>
              </a>
              <a href="https://github.com/jamesnobel252007" className="flex items-center gap-4 text-gray-text hover:text-neon-red transition-colors group">
                <div className="w-12 h-12 rounded-full bg-secondary-black border border-gray-text/10 flex items-center justify-center group-hover:border-neon-red/50 group-hover:bg-neon-red/10 transition-all">
                  <Code size={20} />
                </div>
                <span className="font-medium text-lg">GitHub</span>
              </a>
            </div>
          </motion.div>

        
        </div>
      </div>
    </section>
  );
};

export default Contact;
