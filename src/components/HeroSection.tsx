import { useEffect, useState } from "react";
import DroneModelViewer from "./DroneModelViewer";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen 100vh flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-white pt-20">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
  
  <div className="max-w-7xl w-full mx-auto px-6 flex flex-col items-center justify-center relative z-10 mt-8">
    {/* Main Heading */}
    <div className={`transition-all duration-1000 text-center w-full ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}>
      <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
        Fly{" "}
        <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          With Us
        </span>
      </h1>
    </div>

        {/* Subtitle */}
        <div className={`transition-all duration-1000 delay-300 text-center w-full ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Elevate your storytelling with professional drone videography. 
            Cinematic aerial footage that captures perspectives beyond imagination.
          </p>
        </div>

        {/* CTA Buttons
        <div className={`flex flex-col sm:flex-row gap-4 justify-center w-full transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <button onClick={() => scrollToSection("contact")} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Contact
          </button>
          <button onClick={() => scrollToSection("mission")} className="bg-indigo-500 backdrop-blur-sm border  text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 hover:text-white hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg">
            Learn More
          </button>
          <button onClick={() => scrollToSection("services")} className="bg-emerald-500 backdrop-blur-sm border  text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 hover:text-white hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg">
            Services
          </button>
        </div> */}

        {/* 3D Interactive Drone Model */}
<div className={`mt-16 w-full transition-all duration-1000 delay-700 ${
  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
}`}>
  <div 
    style={{ 
      width: "100vw",  // Set to viewport width
      marginLeft: "calc(-50vw + 50%)",  // This centers the full-width element
      marginTop: "-300px", 
      padding: "0px", 
      height: "100vh",
      position: "relative",
      // Remove border radius for full-width look
      // borderRadius: "20px",
    }}
  >
    <DroneModelViewer />
  </div>
</div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;