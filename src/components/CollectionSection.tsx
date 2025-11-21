import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Product {
  name: string;
  price: string;
  pricePerPart: string;
  parts: string;
  tags: string[];
  composition: string[];
  imagePlaceholder: string;
}

const products: Product[] = [
  {
    name: "PISTACHE RUBIS SIGNATURE",
    price: "CHF 53",
    pricePerPart: "Soit CHF 6.60 par part",
    parts: "6-8 parts",
    tags: ["Sans Lactose", "Vegan", "IG Bas"],
    composition: [
      "Pistache pure – Framboise – Vanille",
      "Biscuit pistache & citron vert",
      "Croustillant praliné pistache",
      "Confit framboise rubis",
      "Mousse 100 % pistache pure",
      "Ganache montée chantilly pistache",
      "Décor : Chantilly marbré"
    ],
    imagePlaceholder: "🥧"
  },
  {
    name: "VANILLE INTENSE",
    price: "CHF 43",
    pricePerPart: "Soit CHF 5.40 par part",
    parts: "6-8 parts",
    tags: ["Sans Lactose", "IG Bas"],
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
    imagePlaceholder: "🎂"
  },
  {
    name: "NOCTURNE MANDARINE (Velours Brun)",
    price: "CHF 42",
    pricePerPart: "Soit CHF 5.25 par part",
    parts: "6-8 parts",
    tags: ["Sans Gluten", "IG Bas", "Végan"],
    composition: [
      "Chocolat intense – Mandarine – Kombava",
      "Biscuit chocolat moelleux",
      "Croustillant reconstitué et grué de cacao caramélisé",
      "Confit mandarine plein fruit & zestes",
      "Gel chocolat noir infusé au combava",
      "Mousse chocolat noir 70% et gingembre",
      "Décor : effet velours chocolat noir"
    ],
    imagePlaceholder: "🍰"
  }
];

const CollectionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            La Collection Exclusive
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group glass-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  {product.imagePlaceholder}
                </div>
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
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading text-2xl md:text-3xl text-gold mb-3">
                  {product.name}
                </h3>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-heading text-3xl text-cream">{product.price}</span>
                    <span className="text-cream/60 text-sm font-body">({product.parts})</span>
                  </div>
                  <p className="text-gold/80 text-sm font-body">{product.pricePerPart}</p>
                </div>

                <div className="mt-auto space-y-2">
                  <p className="text-cream/90 font-body font-semibold text-sm mb-2">Composition :</p>
                  <ul className="space-y-1 text-sm text-cream/70 font-body">
                    {product.composition.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionSection;

