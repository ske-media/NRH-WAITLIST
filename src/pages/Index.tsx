import SnowParticles from "@/components/SnowParticles";
import HeroSection from "@/components/HeroSection";
import ChefSection from "@/components/ChefSection";
import CollectionSection from "@/components/CollectionSection";
import BundleSection from "@/components/BundleSection";
import NutritionalSection from "@/components/NutritionalSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import B2BSection from "@/components/B2BSection";
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
        <ChefSection />
        <CollectionSection />
        <BundleSection />
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
