import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram
} from 'react-icons/fi'

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false)
  
  const onSubmit = async (data) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!response.ok) throw new Error('Failed to send email')

    setIsSubmitSuccessful(true)
    reset()
    setTimeout(() => setIsSubmitSuccessful(false), 5000)
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}


  const contactInfo = [
    {
      icon: <FiMail className="text-2xl text-primary-600" />,
      title: "Email",
      value: "kuldipvaghasiya0@gmail.com",
      link: "mailto:kuldipvaghasiya0@gmail.com"
    },
    {
      icon: <FiPhone className="text-2xl text-primary-600" />,
      title: "Phone",
      value: "+91 6351461500",
      link: "tel:+916351461500"
    },
    {
      icon: <FiMapPin className="text-2xl text-primary-600" />,
      title: "Location",
      value: "Junagadh, Gujarat",
      link: "https://maps.google.com/?q=San+Francisco"
    }
  ]

  const socialLinks = [
    { icon: <FiGithub />, link: "https://github.com/KuldipVaghasiya19" },
    { icon: <FiLinkedin />, link: "https://www.linkedin.com/in/kuldip-vaghasiya-518172265/" },
    { icon: <FiInstagram />, link: "https://www.instagram.com/__kuldip_patel__/?hl=en" }
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="section-title"
          >
            Get In <span className="text-primary-600">Touch</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="section-subtitle"
          >
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                key={index}
                className="flex p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  <a 
                    href={item.link} 
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                    target="_blank" 
                    rel="noreferrer"
                  >
                    {item.value}
                  </a>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mt-8"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-4">Connect on Social Media</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-gray-50 rounded-full text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-card p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Me a Message</h3>
              
              {isSubmitSuccessful && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="john.doe@example.com"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Project Inquiry"
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Hello, I'd like to talk about..."
                    {...register("message", { 
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message should be at least 10 characters"
                      }
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full md:w-auto flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <FiSend />
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact