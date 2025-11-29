import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from '../components/Reveal';
import {motion} from 'framer-motion';



function pricing({ pricing }) {
  const plans = [
      {
        name: pricing.plans.starter,
        price: 99,
        products: 10,
        features: pricing.plans.starter_features,
        notIncluded: [
          'Paid Marketing Campaigns',
          'Professional Product Photography',
          'Featured Homepage Placement'
        ]
      },
      {
        name: pricing.plans.pro,
        price: 199,
        products: 30,
        isPopular: true,
        features: pricing.plans.pro_features,
        notIncluded: [
          'Dedicated Ad Budget',
          'Professional Product Photography'
        ]
      },
      {
        name: pricing.plans.premium,
        price: 299,
        products: 'Unlimited',
        features: pricing.plans.premium_features,
        notIncluded: []
      }
    ];
  
    return (
      <div >

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{pricing.title}</h1>
            <p className="text-emerald-200 text-lg md:text-xl max-w-2xl mx-auto">{pricing.subtitle}</p>
          </motion.div>
        </div>
      </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-25">

          {/* <Reveal width="100%">
            <div className="text-center mb-20">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">{pricing.title}</h1>
              <p className="text-xl text-gray-600">{pricing.subtitle}</p>
            </div>
          </Reveal> */}
          
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.2} className="h-full">
                <div className={`relative bg-white rounded-3xl shadow-xl flex flex-col transition-transform duration-300 hover:-translate-y-2 ${plan.isPopular ? 'border-2 border-emerald-500 scale-105 z-10 shadow-2xl' : 'border border-gray-100'}`}>
                  {plan.isPopular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8 flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-6">
                      <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                      <span className="text-xl text-gray-500 font-medium ml-1">MAD</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                    <p className="text-emerald-700 font-medium mb-8 bg-emerald-50 p-3 rounded-xl inline-block text-sm">
                      {pricing.limit.replace('{count}', String(plan.products))}
                    </p>
  
                    <ul className="space-y-5 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="bg-green-100 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                              <Check className="h-3 w-3 text-emerald-600" />
                          </div>
                          <span className="text-gray-600 text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-b-3xl border-t border-gray-100">
                     <Link to="/become-a-seller" className={`w-full block text-center py-4 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg ${plan.isPopular ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white text-emerald-600 border border-emerald-600 hover:bg-emerald-50'}`}>
                       {pricing.choose} {plan.name}
                     </Link>
                     <p className="text-xs text-center text-gray-400 mt-4">
                       {pricing.commission}
                     </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    );
}

export default pricing;
