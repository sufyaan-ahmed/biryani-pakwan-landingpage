import React from 'react';
import { motion } from 'motion/react';
import { Star, StarHalf, Clock, Heart } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: 'Special Chicken Biryani',
    description: 'Fragrant basmati rice cooked with tender chicken and authentic spices.',
    price: 'Rs 250',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
    popular: true
  },
  {
    id: 2,
    name: 'Beef Pulao',
    description: 'Rich and flavorful beef pulao with perfectly cooked meat and aromatic rice.',
    price: 'Rs 300',
    image: 'https://media.istockphoto.com/id/2239618839/photo/rice-is-the-staple-and-meals-are-often-served-on-banana-leaves.jpg?s=612x612&w=0&k=20&c=ge2Gv9WZqqirlBQwrjwXbQqScupr5r3LbGNtkvFixCY=',
    popular: true
  },
  {
    id: 3,
    name: 'Chicken Pulao',
    description: 'Light yet savory chicken pulao, a perfect alternative to biryani.',
    price: 'Rs 220',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop',
    popular: false
  },
  {
    id: 4,
    name: 'Raita & Salad',
    description: 'Fresh yogurt dip and seasonal vegetable salad to complement your meal.',
    price: 'Rs 50',
    image: 'https://media.istockphoto.com/id/1333366236/photo/traditional-indian-raita-with-dahi-in-a-bowl-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=XUR1WtTQ2YerurfWZ6frRGZji4dW4DlVBuetYo3IUU8=',
    popular: false
  },
  {
    id: 5,
    name: 'Standard Aaloo Biryani',
    description: 'Fragrant basmati rice cooked with potatoes and spices.',
    price: 'Rs 100',
    image: 'https://media.istockphoto.com/id/2212416321/photo/tomato-rice-with-raita.jpg?s=612x612&w=0&k=20&c=CCuIFs6Wl9t1lKYDY5WAo-bGkaJXlofVL-courrBbRA=',
    popular: false
  },
  {
    id: 6,
    name: 'Coldrinks',
    description: 'Refreshing cold drinks to quench your thirst.',
    price: 'Rs 50 - 150',
    image: 'https://media.istockphoto.com/id/1432926606/photo/strawberry-chilcanos-passion-fruit-chicha-alcoholic-beverages.jpg?s=612x612&w=0&k=20&c=XinQfrhfR0nUtqOqsqXpVQAcQsuDekb3a72j2VAjpNM=',
    popular: false
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm"
          >
            Our Delicious
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-bold mt-2"
          >
            Menu Highlights
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-surface border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-secondary text-background text-xs font-black px-3 py-1 rounded-full uppercase">
                    Popular
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-white text-lg font-bold px-4 py-1 rounded-lg">
                    {item.price}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-bold group-hover:text-secondary transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex text-secondary">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <StarHalf size={16} fill="currentColor" />
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>15-20 min</span>
                  </div>
                  <button className="text-primary hover:text-white transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 italic mb-8">
            * Prices are subject to change. Please confirm while ordering.
          </p>
          <button className="border border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 rounded-xl font-bold transition-all">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
