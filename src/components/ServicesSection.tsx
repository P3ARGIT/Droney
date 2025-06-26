
const ServicesSection = () => {
  const services = [
    {
      title: "Aerial Real Estate Tours",
      description: "Showcase properties from breathtaking angles that highlight location, scale, and surroundings.",
      icon: "🏠",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Event Coverage",
      description: "Capture weddings, sports, festivals, and corporate events with cinematic aerial footage.",
      icon: "🎉",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Tourism & Marketing",
      description: "Create compelling promotional content that showcases destinations and experiences.",
      icon: "🌍",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Social Content",
      description: "Help influencers and brands create engaging content with unique aerial perspectives.",
      icon: "📱",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Construction Progress",
      description: "Document project development with regular aerial surveys and progress reports.",
      icon: "🏗️",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Landscape Analysis",
      description: "Professional aerial surveys for land development, agriculture, and environmental studies.",
      icon: "🗺️",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            The Sky Inspires Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our passion for flight, creativity, and cutting-edge technology drives us to 
            capture the world from perspectives that inspire and amaze. Every project is 
            an opportunity to push the boundaries of aerial storytelling.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Placeholder */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12 border-2 border-dashed border-gray-200">
            <div className="text-6xl text-gray-300 mb-6">🎬</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Portfolio Coming Soon</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're curating our best aerial footage to showcase the quality and creativity 
              of our work. Stay tuned for an immersive portfolio experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
