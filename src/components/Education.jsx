import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin } from 'react-icons/fi'
import { IoSchool, IoBook, IoLibrary } from 'react-icons/io5'

const Education = () => {
  const educationItems = [
    {
      id: 1,
      degree: "Bachelor of Science in Information Technology",
      institution: "Dharamsinh Desai University",
      location: "Nadiad , Gujarat",
      duration: "2022 - 2026",
      description: "Currently pursuing a B.Tech. with a specialization in Software Engineering. Passionate Web and App Developer.",
      // achievements: ["Dean's List", "Best Capstone Project", "Programming Competition Winner"],
      icon: <IoSchool className="text-4xl text-primary-600" />
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Alpha High School",
      location: "Junagadh , Gujarat",
      duration: "2020 - 2022",
      description: "Completed with distinction in Mathematics.",
      // achievements: ["School Topper", "Science Fair Gold Medal"],
      icon: <IoBook className="text-4xl text-primary-600" />
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "Noble High School",
      location: "Junagadh , Gujarat",
      duration: "2019 - 2020",
      description: "Completed with distinction and ranked 6th in all Gujarat students.",
      // achievements: ["Perfect Attendance", "Best in Science"],
      icon: <IoLibrary className="text-4xl text-primary-600" />
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="education" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            My <span className="text-primary-600">Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle"
          >
            My academic journey and achievements
          </motion.p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 flex items-center"
          >
            <div className="bg-white rounded-xl shadow-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Education & Learning Path</h3>
              <p className="text-gray-600 mb-4">
                My educational journey has equipped me with a strong foundation in computer science principles and practical software development skills. I've consistently pursued excellence in my academic endeavors while participating in various extracurricular activities.
              </p>
              <p className="text-gray-600 mb-4">
                Beyond formal education, I've invested significant time in self-learning through online courses, workshops, and hands-on projects. This continuous learning approach has helped me stay updated with the latest technologies and industry best practices.
              </p>
              <p className="text-gray-600">
                I believe in the power of both theoretical knowledge and practical application. My educational background has given me the tools to approach problems systematically, while my self-directed learning has allowed me to adapt quickly to new technologies and methodologies.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            {educationItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="education-card"
              >
                <div className="flex items-start gap-4">
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{item.degree}</h3>
                    <h4 className="text-primary-600 font-medium mb-2">{item.institution}</h4>
                    
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                      <div className="flex items-center">
                        <FiCalendar className="mr-1" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="mr-1" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education