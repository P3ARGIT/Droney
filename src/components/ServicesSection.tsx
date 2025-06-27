import { Check } from "lucide-react";
import { Link } from "react-router-dom";

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

  const midSectionImage = "/MidSection.jpg";

  const plans = [
    {
      name: "Basic",
      price: "199",
      description: "Perfect for single-day projects or short events",
      features: [
        "Professional drone operator",
        "video editing",
        "4K video delivery",
        "Raw footage included",
        "professional colour grading",
      ]
    },
    {
      name: "Professional",
      price: "499",
      description: "For comprehensive property or event coverage",
      features: [
        "All basic features",
        "Multiple locations",
        "Rush delivery available",
        "1 feedback round"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "999",
      description: "For large-scale projects with extensive coverage",
      features: [
        "All professional features",
        "3D elements in video",
        "Additional regular camera shots",
        "2 feedback rounds",
        "Priority support",
        "Future 10% discount on next project",
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-white">
      <div className="max-w-7xl mx-auto px-2">
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

        {/* Pricing Section */}
        <div id="pricing" className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-6">Simple, transparent pricing</h2>
            <p className="text-xl text-gray-600">
              Choose the perfect aerial package for your project needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl bg-white border transition-all duration-300 hover:shadow-lg ${
                  plan.popular ? "ring-2 ring-blue-500" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-full">
                    Popular
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-bold">€{plan.price}</span>
                    <span className="text-gray-600 ml-2">/project</span>
                  </div>
                  <button 
  onClick={() => window.location.href = `#/contact?plan=${plan.name}`}
  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
    plan.popular 
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50"
  }`}
>
  Get Started
</button>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;