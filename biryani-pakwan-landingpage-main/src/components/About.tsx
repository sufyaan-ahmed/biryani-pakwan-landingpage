import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5">
              <img
                src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1000&auto=format&fit=crop"
                alt="Cooking Biryani"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Story</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-2 mb-8 leading-tight">
              A Legacy of <span className="text-secondary">Taste</span> in Al-Falah
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Haroon Biryani & Pakwan Center started with a simple mission: to bring the true, 
              unadulterated flavor of Karachi biryani to the heart of Al-Falah Housing Society. 
              What began as a small passion project has now become a local landmark for food lovers.
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Our secret lies in the balance of spices, the quality of meat, and the patience 
              required to cook the perfect 'Dum' biryani. Every plate we serve is a testament 
              to our commitment to quality and tradition.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-secondary text-3xl font-bold mb-1">8+</h4>
                <p className="text-gray-500 text-sm uppercase tracking-wider">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-secondary text-3xl font-bold mb-1">50k+</h4>
                <p className="text-gray-500 text-sm uppercase tracking-wider">Happy Customers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
