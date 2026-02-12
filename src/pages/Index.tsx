import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LegalSection from "@/components/LegalSection";
import CoworkingSection from "@/components/CoworkingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LegalSection />
        <CoworkingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
