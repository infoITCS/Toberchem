function Welcome() {
  return (
    <section 
      id="welcome" 
      className="relative text-white py-20 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.85), rgba(37, 99, 235, 0.85)), url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Welcome to ToberChem
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Your Trusted Partner in Chemical Solutions
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-95 drop-shadow-sm">
          Providing high-quality chemicals and exceptional service to industries across Ontario and beyond
        </p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 backdrop-blur-sm"
        >
          Get In Touch
        </button>
      </div>
      
      {/* Chemical pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-8 h-8 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white rounded-full"></div>
      </div>
    </section>
  )
}

export default Welcome

