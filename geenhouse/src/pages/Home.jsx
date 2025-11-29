import React from "react";
import Stars from "../components/Stars";
import { Link } from "react-router-dom";
import { ShieldCheck, Heart, Truck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";



function Home({ hero, features, home, Categorys, firstThreeSellers }) {
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* ---------------- Section: Hero ---------------- */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/homeimage.jpg" 
            alt="Moroccan Market" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-white pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4 drop-shadow-lg">
              {hero.title1} <br />
              <span className="text-yellow-400">{hero.title2}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg leading-relaxed opacity-90">
              {hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/marketplace">
                <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1">
                  {hero.shopBtn}
                </button>
              </Link>
              <Link to="/become_a_seller">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-emerald-900 transition-all">
                  {hero.joinBtn}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Section: Features ---------------- */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{features.title}</h2>
            <p className="text-gray-600 text-lg">{features.subtitle}</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div variants={fadeInUp} className="bg-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-emerald-100">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-emerald-600">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{features.f1_title}</h3>
              <p className="text-gray-600 leading-relaxed">{features.f1_text}</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeInUp} className="bg-orange-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-orange-100">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-orange-500">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{features.f2_title}</h3>
              <p className="text-gray-600 leading-relaxed">{features.f2_text}</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeInUp} className="bg-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-blue-100">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-blue-500">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{features.f3_title}</h3>
              <p className="text-gray-600 leading-relaxed">{features.f3_text}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Section: Curated Categories ---------------- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{home.cats_title}</h2>
              <p className="text-gray-600">{home.cats_sub}</p>
            </div>
            <Link to="/marketplace">
              <button className="hidden md:flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                {home.view_all} <ArrowRight size={18} />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Categorys.map((item, index) => (
              <Link to="/marketplace" key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-md">
                  <img 
                    src={item.image} 
                    alt={item.category} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-1">{item.category}</h3>
                    <p className="text-gray-300 text-sm">{item.numberProducts} Products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/marketplace">
                <button className="items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors inline-flex">
                    {home.view_all} <ArrowRight size={18} />
                </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Section: Testimonials ---------------- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
          >
            {home.comm_title}
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {firstThreeSellers.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 relative hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="absolute top-8 right-8 text-emerald-100">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.00001 15 9.00001 14 9.00001 13C9.00001 11.8954 9.89543 11 11 11H13V9H11C8.79086 9 7 10.7909 7 13V16C7 18.7614 9.23858 21 12.017 21H14.017ZM21.017 21L21.017 18C21.017 16.8954 20.1216 16 19.017 16H16C16 15 16 14 16 13C16 11.8954 16.8954 11 18 11H20V9H18C15.7909 9 14 10.7909 14 13V16C14 18.7614 16.2386 21 19.017 21H21.017Z" />
                    </svg>
                </div>
                <Stars rating={item.comment.ratingComment} />
                <p className="text-gray-600 mb-8 italic relative z-10 min-h-[80px]">"{item.comment.text}"</p>
                
                <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                  <img src={item.logo} alt="logoSeller" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                  <div>
                    <h5 className="font-bold text-gray-900">{item.comment.user}</h5>
                    <h5 className="text-xs font-semibold text-emerald-600 tracking-wide">{item.location}</h5>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Section: CTA ---------------- */}
      <section className="py-24 bg-emerald-900 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-800/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{home.ready_title}</h1>
            <p className="text-emerald-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              {home.ready_sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/marketplace">
                <button
                  className="
                    w-full sm:w-auto px-8 py-4 
                    bg-white text-emerald-900 font-bold 
                    rounded-full shadow-lg 

                    transition-all duration-300 
                    hover:bg-emerald-600 hover:text-white 
                    hover:shadow-xl hover:scale-105 
                    active:scale-95
                  "
                >
                  {home.ready_shop}
                </button>
              </Link>
              <Link to="/become_a_seller">
                <button className="w-full sm:w-auto px-8 py-4 bg-emerald-800 border border-emerald-700 text-white font-bold rounded-full hover:bg-emerald-700 transition-colors">
                  {home.ready_partner}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;