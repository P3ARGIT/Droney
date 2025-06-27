
const ContactSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-700 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-64 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Ready to Take Flight?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Let's discuss your project and create aerial footage that elevates your story. 
          From concept to delivery, we're here to make your vision soar.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-blue-100">hello@droney.com</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-blue-100">+32 472 27 68 09 </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-blue-100">Belgium, Flanders</p>
            <p className="text-blue-100">Btw-nr: BE</p>
          </div>
        </div>

        <button onClick={scrollToPricing} className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
          Start Your Project
        </button>

        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-blue-100">
            © 2025 Droney. Elevating perspectives through professional drone videography.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
