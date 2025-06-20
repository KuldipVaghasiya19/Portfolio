import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = ({ currentSection, setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { id: 'about', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'projects', text: 'Projects' },
    { id: 'education', text: 'Education' },
    { id: 'certifications', text: 'Certifications' },
    { id: 'contact', text: 'Contact' }
  ]

  const handleNavClick = (id) => {
    setCurrentSection(id)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 glass-effect">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-4"
      >
        <div className="flex justify-between items-center">
          <motion.button
            onClick={() => handleNavClick('hero')}
            className="text-xl font-bold gradient-text cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kuldip Vaghasiya
          </motion.button>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-2">
              {navLinks.map(link => (
                <motion.li key={link.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`nav-link ${currentSection === link.id ? 'active' : ''}`}
                  >
                    {link.text}
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>
          
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-effect py-4"
          >
            <ul className="flex flex-col space-y-3 px-6">
              {navLinks.map(link => (
                <motion.li
                  key={link.id}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`nav-link block text-center w-full ${currentSection === link.id ? 'active' : ''}`}
                  >
                    {link.text}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header