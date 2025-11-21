import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Product {
  name: string;
  price: string;
  pricePerPart: string;
  parts: string;
  tags: string[];
  composition: string[];
  image: string;
  chefNote: string;
}

const products: Product[] = [
  {
    name: "PISTACHE RUBIS SIGNATURE",
    price: "CHF 53",
    pricePerPart: "Soit CHF 6.60 par part",
    parts: "6-8 parts",
    tags: ["Sans Lactose", "Vegan", "IG Bas"],
    chefNote: "Une alliance audacieuse entre la noblesse de la pistache de Sicile et l'acidité vive de la framboise. Une création qui célèbre la générosité de la nature, sans compromis sur l'intensité des saveurs.",
    composition: [
      "Pistache pure – Framboise – Vanille",
      "Biscuit pistache & citron vert",
      "Croustillant praliné pistache",
      "Confit framboise rubis",
      "Mousse 100 % pistache pure",
      "Ganache montée chantilly pistache",
      "Décor : Chantilly marbré"
    ],
    image: "/images/pistache.webp"
  },
  {
    name: "VANILLE INTENSE",
    price: "CHF 43",
    pricePerPart: "Soit CHF 5.40 par part",
    parts: "6-8 parts",
    tags: ["Sans Lactose", "IG Bas"],
    chefNote: "Un retour aux sources, une vanille fumée qui réveille les souvenirs d'enfance. L'élégance d'un praliné fruité qui transforme la simplicité en moment d'exception.",
    composition: [
      "Vanille fumée – Praliné amande/noisette fruité",
      "Biscuit amande–vanille",
      "Croustillant Amande",
      "Crémeux 100% vanille",
      "Praliné noisette-amande",
      "Mousse vanille légère",
      "Ganache montée vanille",
      "Décor : pochage horizontal fin"
    ],
    image: "/images/vanille.webp"
  },
  {
    name: "NOCTURNE MANDARINE (Velours Brun)",
    price: "CHF 42",
    pricePerPart: "Soit CHF 5.25 par part",
    parts: "6-8 parts",
    tags: ["Sans Gluten", "IG Bas", "Végan"],
    chefNote: "Une plongée dans l'intensité d'un chocolat noir grand cru, réveillée par la fraîcheur espiègle de la mandarine et l'élégance du combava. Une création puissante et réconfortante.",
    composition: [
      "Chocolat intense – Mandarine – Kombava",
      "Biscuit chocolat moelleux",
      "Croustillant reconstitué et grué de cacao caramélisé",
      "Confit mandarine plein fruit & zestes",
      "Gel chocolat noir infusé au combava",
      "Mousse chocolat noir 70% et gingembre",
      "Décor : effet velours chocolat noir"
    ],
    image: "/images/choco.webp"
  }
];

const CollectionSection = () => {
  return (
    <section
      id="collection-section"
      className="relative py-20 lg:py-32 px-4 lg:px-8 bg-gradient-dark overflow-hidden"
    >
      {/* Décorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6 tracking-wide">
            La Collection Exclusive
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </motion.div>

        {/* Products - Alternating Layout */}
        <div className="space-y-16 md:space-y-24">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div
                  className={`glass-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 ${
                    isEven
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } flex flex-col md:flex`}
                >
                  {/* Image */}
                  <div className="md:w-1/2 aspect-[4/3] md:aspect-square bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                      {product.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full text-cream text-xs font-body font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-gold mb-6 tracking-wide">
                      {product.name}
                    </h3>

                    {/* Le mot du Chef */}
                    <motion.div
                      className="mb-6 p-5 bg-gold/10 border-l-4 border-gold rounded-r-lg"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <p className="text-cream/90 font-body italic text-base md:text-lg leading-relaxed">
                        "{product.chefNote}"
                      </p>
                    </motion.div>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-heading text-4xl md:text-5xl text-cream">{product.price}</span>
                        <span className="text-cream/60 text-base font-body">({product.parts})</span>
                      </div>
                      <p className="text-gold/80 text-base font-body">{product.pricePerPart}</p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-cream/90 font-body font-semibold text-base mb-3">Les secrets de sa composition :</p>
                      <ul className="space-y-2 text-sm md:text-base text-cream/70 font-body">
                        {product.composition.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;

