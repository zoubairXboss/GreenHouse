import React from 'react';
import { motion } from 'framer-motion';



function About({ about }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div>


      {/* Hero Header */}
      {/* <section className="bg-emerald-50 pt-32 pb-24 text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-6 drop-shadow-sm">
              {about.title}
            </h1>
            <p className="text-lg md:text-xl text-emerald-800 max-w-3xl mx-auto leading-relaxed opacity-90">
              {about.subtitle}
            </p>
          </motion.div>
        </div>
      </section> */}



      <section className="relative bg-emerald-950 py-32 overflow-hidden text-center text-white">
              {/* Subtle geometric pattern */}
              <div className="absolute inset-0 opacity-10" 
                   style={{ 
                     backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                     backgroundSize: '40px 40px' 
                   }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950/80"></div>
      
              <div className="relative container mx-auto px-6 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{about.title}</h1>
                  <p className="text-emerald-200 text-lg md:text-xl max-w-2xl mx-auto">{about.subtitle}</p>
                </motion.div>
              </div>
            </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image Section */}
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Decorative Background Shape */}
              <div className="absolute top-4 -left-4 w-full h-full bg-orange-100 rounded-3xl -z-10 transform -rotate-1"></div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="/images/homeimage.jpg"
                  alt="Moroccan ingredients" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              className="lg:w-1/2"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6"
              >
                {about.mission_title}
              </motion.h2>
              
              <motion.div variants={fadeInUp} className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                <p>{about.mission_text1}</p>
                <p>{about.mission_text2}</p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-sm font-bold tracking-widest text-emerald-700 uppercase mb-6">
                  {about.values_title}
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0"></span>
                    <span className="font-medium text-gray-800 text-lg">{about.v1}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0"></span>
                    <span className="font-medium text-gray-800 text-lg">{about.v2}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0"></span>
                    <span className="font-medium text-gray-800 text-lg">{about.v3}</span>
                  </li>
                </ul>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
