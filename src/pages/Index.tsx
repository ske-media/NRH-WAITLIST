import SubtleParticles from "@/components/SnowParticles";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChefSection from "@/components/ChefSection";
import CollectionSection from "@/components/CollectionSection";
import NutritionalSection from "@/components/NutritionalSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FormSection from "@/components/FormSection";
import B2BSection from "@/components/B2BSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      {/* Sticky Header */}
      <Header />

      {/* Animated Gold Particles Background */}
      <SubtleParticles />

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <ChefSection />
        <CollectionSection />
        <NutritionalSection />
        <TestimonialsSection />
        <FormSection />
        <B2BSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
