import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  author: string;
  location: string;
  emoji: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Mon mari est diabétique. Il n'avait pas goûté une bûche digne de ce nom depuis 5 ans. Hier soir, il a eu les larmes aux yeux. Merci, Chef.",
    author: "Claire B.",
    location: "Genève",
    emoji: "👩"
  },
  {
    text: "Enfin une bûche qui respecte mes contraintes sans sacrifier le goût ! La pistache est incroyable, on dirait vraiment une pâtisserie traditionnelle.",
    author: "Marc D.",
    location: "Genève",
    emoji: "👨"
  },
  {
    text: "J'ai commandé pour toute la famille. Même mes enfants qui ne sont pas habitués aux desserts 'sans' ont adoré. La vanille est exceptionnelle !",
    author: "Sophie M.",
    location: "Annecy",
    emoji: "👩"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 lg:py-32 px-4 lg:px-8 bg-gradient-dark overflow-hidden">
      {/* Décorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6 tracking-wide">
            Ce qu'ils en disent
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icône de guillemet en background */}
              <div className="w-24 h-24 text-gold/10 absolute left-1/2 -translate-x-1/2 -top-6 flex items-center justify-center">
                <span className="text-7xl font-serif leading-none">"</span>
              </div>
              
              {/* Citation */}
              <motion.blockquote
                className="relative glass-card rounded-3xl p-6 md:p-8 shadow-elegant h-full flex flex-col"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
              >
                <p className="font-body text-lg md:text-xl text-cream mb-6 leading-relaxed italic flex-grow">
                  "{testimonial.text}"
                </p>
                
                <footer className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-burgundy/20 border border-gold/40 flex items-center justify-center">
                    <span className="text-xl">{testimonial.emoji}</span>
                  </div>
                  <div className="text-left">
                    <p className="font-heading text-base text-gold font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-cream/70 font-body text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </footer>
              </motion.blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

