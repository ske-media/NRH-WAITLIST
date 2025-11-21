import SnowParticles from "@/components/SnowParticles";
import HeroSection from "@/components/HeroSection";
import VisualSection from "@/components/VisualSection";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      {/* Animated Gold Particles Background */}
      <SnowParticles />

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <VisualSection />
        <FormSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
