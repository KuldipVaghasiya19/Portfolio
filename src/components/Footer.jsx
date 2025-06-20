import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Kuldip<span className="text-primary-500">.Vaghasiya</span></h3>
            <p className="text-gray-400 max-w-md">
              Software engineer specializing in building exceptional digital experiences with clean, efficient code.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              {/* <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a> */}
              <a 
                href="mailto:kuldipvaghasiya0@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
            
            <p className="text-gray-500 text-sm flex items-center">
              <span>© {currentYear} John Doe. All rights reserved.</span>
              {/* <span className="mx-1">•</span>
              <span className="flex items-center">
                Made with <FiHeart className="text-primary-500 mx-1" /> in San Francisco
              </span> */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer