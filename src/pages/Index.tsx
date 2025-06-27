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
        <title>Droney - Professional Aerial Videography</title>
        
        {/* Favicon - SVG for modern browsers */}
        <link rel="icon" type="image/svg+xml" href="/Droney_logo.svg" />
        
        {/* Fallback favicon for browsers that don't support SVG */}
        <link rel="alternate icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* For iOS devices */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Droney - Professional Aerial Videography" />
        <meta name="description" content="Professional drone videography services for real estate, events, and commercial projects in Belgium." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://droneyantwerp.com/" />
        <meta property="og:title" content="Droney - Professional Aerial Videography" />
        <meta property="og:description" content="Professional drone videography services for real estate, events, and commercial projects in Belgium." />
        <meta property="og:image" content="https://droneyantwerp.com/Droney_logo.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://droneyantwerp.com/" />
        <meta property="twitter:title" content="Droney - Professional Aerial Videography" />
        <meta property="twitter:description" content="Professional drone videography services for real estate, events, and commercial projects in Belgium." />
        <meta property="twitter:image" content="https://droneyantwerp.com/Droney_logo.png" />
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