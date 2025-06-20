import { motion } from 'framer-motion'
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiTool
} from 'react-icons/fi'
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiSpring,
  SiPostgresql,
  SiMysql,
  SiSpringboot,
  SiPython,
  SiGit,
  SiGithub
} from 'react-icons/si'
import { FaJava } from "react-icons/fa";


const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FiCode size={28} />,
      color: "text-blue-500",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <SiReact /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }
      ]
    },
    {
      title: "Backend",
      icon: <FiServer size={28} />,
      color: "text-green-500",
      skills : [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring", icon: <SiSpring /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Spring MVC", icon: <SiSpring /> },
  { name: "Python", icon: <SiPython /> }
]
    },
    {
      title: "Database",
      icon: <FiDatabase size={28} />,
      color: "text-purple-500",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "ChromaDB", icon: <span className="text-lg font-bold">C</span> } // No official icon
      ]
    },
    {
      title: "Tools & Others",
      icon: <FiTool size={28} />,
      color: "text-orange-500",
      skills : [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> }
    ]
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
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            My <span className="text-primary-600">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle"
          >
            Technologies and tools I work with
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="skill-card"
            >
              <motion.div
                variants={itemVariants}
                className={`text-4xl ${category.color} mb-4`}
              >
                {category.icon}
              </motion.div>
              <motion.h3
                variants={itemVariants}
                className="text-xl font-semibold mb-4"
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-col space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
