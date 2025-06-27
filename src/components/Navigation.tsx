
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Get the element's position relative to the viewport
    const elementPosition = element.getBoundingClientRect().top;
    // Get the current scroll position
    const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset
    
    // Scroll to the adjusted position
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-l border-b border-gray-200/50 shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            Droney
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("mission")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Mission
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>

          <button 
            onClick={() => scrollToSection("contact")}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-gray-900 px-6 py-2 rounded-full hover:bg-white/30 transition-all duration-200 font-medium shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
