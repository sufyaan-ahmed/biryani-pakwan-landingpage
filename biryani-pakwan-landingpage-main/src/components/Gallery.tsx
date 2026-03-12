import React from 'react';
import { motion } from 'motion/react';

const images = [
  'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
  'https://media.istockphoto.com/id/1429662723/photo/biriyani-basmoti-rice-biriyani-mutton-biriyani-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=QIHHkQpYjEa9rdcG03VO-8doR3LTIQWFEPdesSHiPmY=',
  'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop',
  'https://media.istockphoto.com/id/2077426665/photo/selective-focus-of-one-of-the-most-popular-food-in-india-biryani.jpg?s=612x612&w=0&k=20&c=ahBUHtoRh3nxhcqf3ERedUaO0Kbk91REyaIN3NVwQOg=',
  'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop',
  'https://media.istockphoto.com/id/2204467102/photo/delicious-paneer-biryani.jpg?s=612x612&w=0&k=20&c=9Cw5NxobWgtlMtdgdEoWgELYj1gIlpjAlQvz68enH1A='
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm"
          >
            Visual Feast
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-bold mt-2"
          >
            Our Gallery
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <span className="text-white text-2xl">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
