import Header from './components/Header'
import Welcome from './components/Welcome'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Welcome />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

export default App

