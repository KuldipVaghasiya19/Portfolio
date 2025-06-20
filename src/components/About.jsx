import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiDatabase, FiGlobe } from 'react-icons/fi'

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="section-title"
          >
            About <span className="text-primary-600">Me</span>
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="section-subtitle"
          >
            Passionate software engineer with expertise in building robust, scalable applications.
          </motion.p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="md:w-1/2"
          >
            <img 
              src="/src/assets/k.jpg" 
              alt="About Me" 
              className="rounded-xl shadow-lg w-3/4 h-[550px] object-cover ml-20"

            />
          </motion.div>
          
          <div className="md:w-1/2">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Who I Am</h3>
              <p className="text-gray-600 mb-6">
                I’m Kuldip Vaghasiya, a passionate Software Engineer driven by curiosity and the desire to create impactful web and mobile applications. With a solid foundation in full-stack development and hands-on experience in projects spanning Android, AI, and e-commerce platforms, I thrive in environments where clean code, performance, and user experience are top priorities.              </p>
              <p className="text-gray-600 mb-8">
                My journey in software development began in college, where I grew curious about how apps and websites are built. Since then, I’ve been learning by building  projects, exploring different tools and technologies, and improving my skills step by step. I enjoy turning ideas into working solutions and constantly look for ways to learn something new and get better at what I do.              </p>   
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <FiCode className="text-primary-600 text-xl" />
                  <span className="text-gray-700">Clean Code Advocate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiLayout className="text-primary-600 text-xl" />
                  <span className="text-gray-700">Frontend Explorer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiDatabase className="text-primary-600 text-xl" />
                  <span className="text-gray-700">Database Designer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiGlobe className="text-primary-600 text-xl" />
                  <span className="text-gray-700">Full Stack Developer</span>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="/public/Resume.pdf" className="btn-outline" download>
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About