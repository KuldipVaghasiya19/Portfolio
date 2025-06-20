import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DDU E-Connect",
      description: "An Android app built for DDU students to access past papers, announcements, clubs and academic resources across branches and semesters using Firebase and Java.",
      image: "src/assets/DDU_logo.jpeg",
      technologies: ["Android Studio", "Java", "Firebase", "XML", "RecyclerView"],
      github: "https://github.com/KuldipVaghasiya19/DDU_AD_PROJECT",
      live: "https://project-demo.com"
    },
    {
      id: 2,
      title: "SQLify",
      description: "A web tool that converts natural language queries into SQL using Google Palm LLM, Langchain, and Chromadb, built with Streamlit for real-time interaction.",
      image: "src/assets/logo_sqlify.jpg",
      technologies: ["Google Palm LLM", "Langchain", "Streamlit", "ChromaDB", "Python"],
      github: "https://github.com/KuldipVaghasiya19/SQLify",
      live: "https://project-demo.com"
    },
    {
      id: 3,
      title: "ArtSphere",
      description: "A full-stack e-commerce platform where artists can showcase and sell their artworks, featuring secure payments via Razorpay and built with React.js, Node.js, and MongoDB.",
      image: "src/assets/Artsphere.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Razorpay API"],
      github: "https://github.com/KuldipVaghasiya19/Art-Sphere",
      live: "https://project-1-eight-phi.vercel.app/"
    },
    {
      id: 4,
      title: "BankLens",
      description: "BankLens is an AI-powered system designed to analyze bank statements and predict loan eligibility. It streamlines the loan approval process for banks while offering users clear financial insights based on their income and spending patterns",
      image: "src/assets/Banklens.jpg",
      technologies: ["React", "Spring Boot", "Python", "Logistic Regression", "MongoDB"],
      github: "https://github.com/KuldipVaghasiya19/BankLens",
      live: "https://project-demo.com"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            My <span className="text-primary-600">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle"
          >
            A showcase of my recent work and personal projects
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="project-card group"
            >
              <div className="relative overflow-hidden h-48 rounded-t-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects