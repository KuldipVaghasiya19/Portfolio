import { motion } from 'framer-motion'
import { FiCalendar, FiAward } from 'react-icons/fi'
import { IoRibbon } from 'react-icons/io5'

const Certifications = () => {

const certifications = [
  {
    id: 1,
    name: "AWS Academy Cloud Foundations",
    organization: "AWS Academy",
    date: "Feb 2025",
    credentialId: "AWS-FND-2025", // You can replace this with actual ID if available
    description: "Fundamentals of cloud computing and AWS core services",
    icon: <IoRibbon className="text-3xl text-primary-600" />
  },
  {
    id: 2,
    name: "AWS Academy Machine Learning Foundations",
    organization: "AWS Academy",
    date: "June 2025",
    credentialId: "AWS-MLF-2025", // Replace with real ID if applicable
    description: "Introduction to machine learning concepts and AWS ML services",
    icon: <IoRibbon className="text-3xl text-primary-600" />
  }
];


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
    <section id="certifications" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            My <span className="text-primary-600">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle"
          >
            Professional certifications and achievements
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="certification-card bg-white rounded-xl shadow-card p-8 hover:shadow-card-hover border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{cert.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-primary-600 font-medium mb-2">{cert.organization}</p>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <FiCalendar className="mr-2" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <FiAward className="mr-2" />
                    <span>Credential ID: {cert.credentialId}</span>
                  </div>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications