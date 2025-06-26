
const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Why Only Drones?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Droney focuses exclusively on drone videography to deliver unmatched aerial storytelling. 
            Our specialized approach ensures agility, cost-effectiveness, and cinematic quality that 
            traditional methods simply cannot match.
          </p>
        </div>

        {/* Mission Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Focus Industries</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Real Estate Marketing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Tourism & Hospitality
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Construction & Development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Events & Celebrations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Social Content Creation
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-blue-600">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Problems We Solve</h4>
              <p className="text-gray-600">
                Traditional video footage is often expensive and limited in scope. 
                Our aerial perspective offers scale, impact, and cinematic quality without 
                the need for helicopters or large crews.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-green-500">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Advantage</h4>
              <p className="text-gray-600">
                Rapid deployment, cost-effective solutions, and stunning aerial perspectives 
                that capture your story from angles that were once impossible or prohibitively expensive.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-purple-500">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Promise</h4>
              <p className="text-gray-600">
                Professional-grade equipment, cinematic techniques, and years of aerial 
                videography expertise ensure every shot exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
