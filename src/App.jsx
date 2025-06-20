import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [currentSection, setCurrentSection] = useState('hero')

  const renderSection = () => {
    switch(currentSection) {
      case 'about':
        return <About />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      case 'education':
        return <Education />
      case 'certifications':
        return <Certifications />
      case 'contact':
        return <Contact />
      default:
        return <Hero />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main className="flex-grow pt-16 pb-24">
        {renderSection()}
      </main>
      <Footer />
    </div>
  )
}

export default App;