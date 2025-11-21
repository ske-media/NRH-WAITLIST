import { motion } from "framer-motion";

const SubtleParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 10,
    size: 1 + Math.random() * 2,
    initialY: 100 + Math.random() * 20,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gold/20 blur-[1px]"
          style={{
            left: `${particle.left}%`,
            bottom: `${particle.initialY}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -120],
            x: [0, Math.random() * 30 - 15],
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default SubtleParticles;
