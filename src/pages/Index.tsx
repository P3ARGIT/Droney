
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import { Helmet } from 'react-helmet-async';


const Index = () => {
  return (
    
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Droney</title>
      </Helmet>
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
