function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
          About Us
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-900 text-white p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Quality</h3>
              </div>
              <p className="text-gray-700">
                We are committed to providing the highest quality chemical products that meet industry standards and exceed customer expectations.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-900 text-white p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Service</h3>
              </div>
              <p className="text-gray-700">
                Our dedicated team provides exceptional customer service, technical support, and reliable delivery to ensure your success.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-900 text-white p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Safety</h3>
              </div>
              <p className="text-gray-700">
                Safety is our top priority. All our products meet strict safety regulations and come with comprehensive safety documentation.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-900 text-white p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Innovation</h3>
              </div>
              <p className="text-gray-700">
                We stay ahead of industry trends and continuously innovate to provide cutting-edge chemical solutions for your business needs.
              </p>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-900 to-blue-700 text-white p-10 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              At ToberChem, we are dedicated to delivering premium chemical products and services that empower businesses to succeed. 
              With years of expertise and a commitment to excellence, we build lasting partnerships based on trust, reliability, and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

