function Welcome() {
  return (
    <section id="welcome" className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Welcome to ToberChem
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Your Trusted Partner in Chemical Solutions
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-90">
          Providing high-quality chemicals and exceptional service to industries across Ontario and beyond
        </p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Get In Touch
        </button>
      </div>
    </section>
  )
}

export default Welcome

