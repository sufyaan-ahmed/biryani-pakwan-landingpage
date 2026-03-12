import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Heart, ShieldCheck, Truck } from 'lucide-react';

const services = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: 'Dine-in Experience',
    description: 'Enjoy your favorite biryani in our clean and comfortable seating area.'
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Fast Takeaway',
    description: 'Quick service for those on the go. Freshly packed and ready in minutes.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Quality Ingredients',
    description: 'We use only the finest basmati rice and fresh meat for every dish.'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Made with Love',
    description: 'Traditional recipes passed down through generations for that authentic taste.'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-surface rounded-3xl border border-white/5 hover:border-secondary/20 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-background transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
