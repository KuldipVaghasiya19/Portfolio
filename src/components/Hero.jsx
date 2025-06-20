import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-white to-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm uppercase tracking-widest text-primary-600 font-semibold"
            >
              Software Engineer
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-2 leading-tight"
            >
              Hello, I'm<br />
              <span className="text-primary-600">
                <TypeAnimation
                  sequence={[
                    'Kuldip Vaghasiya',
                    2000,
                    'a Developer',
                    2000,
                    'a Designer',
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mt-6 max-w-2xl"
            >
             I’m a passionate software engineer who builds responsive, user-friendly digital solutions across the full tech stack. With a focus on clean code and modern technologies, I turn ideas into high-quality, impactful experiences. Let’s connect!
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={() => window.location.href = '#contact'}
                className="btn-primary"
              >
                Get in Touch
              </button>
              <button
                onClick={() => window.location.href = '#projects'}
                className="btn-outline"
              >
                View Projects
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex space-x-6"
            >
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin size={24} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiTwitter size={24} />
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex justify-center"
          >
            <motion.div 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-600 shadow-xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="src/assets/kuldip.jpg"
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero