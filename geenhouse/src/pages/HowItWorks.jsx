import React from 'react';
import { Search, ShoppingBag, Truck, Store, ClipboardCheck, TrendingUp, Package } from 'lucide-react';
import {motion} from 'framer-motion';



function HowItWorks({ howItWorks }) {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      {/* Hero Section */}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{howItWorks.title}</h1>
            <p className="text-emerald-200 text-lg md:text-xl max-w-2xl mx-auto">{howItWorks.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* For Customers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-16 relative inline-block w-full"
          >
            {howItWorks.customers_title}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-emerald-500 mt-2 rounded-full"></span>
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{howItWorks.c1_title}</h3>
              <p className="text-gray-600 leading-relaxed">{howItWorks.c1_text}</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <ShoppingBag size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{howItWorks.c2_title}</h3>
              <p className="text-gray-600 leading-relaxed">{howItWorks.c2_text}</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{howItWorks.c3_title}</h3>
              <p className="text-gray-600 leading-relaxed">{howItWorks.c3_text}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* For Sellers */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-16 relative inline-block w-full"
          >
            {howItWorks.sellers_title}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-400 mt-2 rounded-full"></span>
          </motion.h2>

          <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-5 text-emerald-700">
                <Store size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{howItWorks.s1_title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{howItWorks.s1_text}</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-5 text-emerald-700">
                <ClipboardCheck size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{howItWorks.s2_title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{howItWorks.s2_text}</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-5 text-emerald-700">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{howItWorks.s3_title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{howItWorks.s3_text}</p>
            </motion.div>

             {/* Card 4 */}
             <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-5 text-emerald-700">
                <Package size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{howItWorks.s4_title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{howItWorks.s4_text}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  );
}

export default HowItWorks;
