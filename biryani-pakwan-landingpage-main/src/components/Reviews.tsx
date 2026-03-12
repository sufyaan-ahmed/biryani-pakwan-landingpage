import React from 'react';
import { motion } from 'motion/react';
import { Star, StarHalf, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Usman Shaikh',
    role: 'Local Guide',
    rating: 5,
    text: 'One of the best biryani spots in Al Falah. The taste is amazing. The rice is perfectly cooked and the spices are just right.',
    image: 'https://i.pravatar.cc/150?u=usman'
  },
  {
    id: 2,
    name: 'Fari Tauseef',
    role: 'Resident',
    rating: 4.5,
    text: 'We order from here often. Very tasty biryani and good service. Their beef pulao is also a must-try for everyone in the area.',
    image: 'https://i.pravatar.cc/150?u=fari'
  },
  {
    id: 3,
    name: 'Arif Nizami',
    role: 'Food Reviewer',
    rating: 4,
    text: 'Affordable and tasty biryani and pulao. Great value for money. The portions are generous and the meat is always tender.',
    image: 'https://i.pravatar.cc/150?u=arif'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-widest uppercase text-sm"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-6xl font-bold mt-2"
            >
              What Our <span className="text-primary">Foodies</span> Say
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-surface p-4 rounded-2xl border border-white/5"
          >
            <div className="flex text-secondary">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
              <StarHalf size={20} fill="currentColor" />
            </div>
            <span className="font-bold">4.1 Average Rating</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface p-8 rounded-3xl border border-white/5 relative group hover:border-primary/20 transition-all"
            >
              <Quote className="absolute top-6 right-8 text-primary/10 w-12 h-12 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full border-2 border-primary/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">{review.role}</p>
                </div>
              </div>

              <div className="flex text-secondary mb-4">
                {[...Array(5)].map((_, i) => {
                  const rating = review.rating;
                  if (i < Math.floor(rating)) {
                    return <Star key={i} size={14} fill="currentColor" />;
                  } else if (i < rating) {
                    return <StarHalf key={i} size={14} fill="currentColor" />;
                  } else {
                    return <Star key={i} size={14} fill="none" className="text-gray-600" />;
                  }
                })}
              </div>

              <p className="text-gray-300 italic leading-relaxed">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
