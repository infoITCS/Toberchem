import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-white text-blue-900 p-2 rounded-lg">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">ToberChem</h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-lg">
            <li>
              <button
                onClick={() => scrollToSection('welcome')}
                className="hover:text-blue-300 transition-colors duration-200"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-blue-300 transition-colors duration-200"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-blue-300 transition-colors duration-200"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4">
            <li>
              <button
                onClick={() => scrollToSection('welcome')}
                className="block w-full text-left py-2 hover:text-blue-300 transition-colors duration-200"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 hover:text-blue-300 transition-colors duration-200"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 hover:text-blue-300 transition-colors duration-200"
              >
                Contact
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header

