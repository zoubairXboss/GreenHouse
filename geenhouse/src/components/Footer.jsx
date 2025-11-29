import React from 'react'
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from "react-router-dom";

function Footer({footer}) {
  return (
    <div>
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div className="col-span-1">
                        <div  className="mb-6">
                            <div  className="flex items-center gap-2 group">
                                <div className={`p-2 rounded-lg  'bg-emerald-100 text-emerald-700' : 'bg-white/20 text-white'}`}>
                                    <img src='/logo.jpg' alt="logo" className="w-7.5 h-7.5 rounded-full border-2 border-emerald-500 shadow-lg object-cover"  />
                                </div>
                                <div className="flex flex-col">
                                    <span className={`font-bold text-xl leading-none  'text-emerald-950' : 'text-white'}`}>GreenHouse</span>
                                    <span className={`text-[10px] tracking-widest uppercase  'text-emerald-600' : 'text-emerald-200'}`}>Morocco</span>
                                </div>
                            </div>
                        </div>
                        <p  className="text-sm text-gray-400 mb-4">{footer.desc}</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>


                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{footer.quick_links}</h3>
                        <ul className="space-y-2 text-sm">
                        <li><Link to="/marketplace" className="hover:text-emerald-400">{footer.shop}</Link></li>
                        <li><Link to="/How_it_Works" className="hover:text-emerald-400">{footer.how}</Link></li>
                        <li><Link to="/about" className="hover:text-emerald-400">{footer.story}</Link></li>
                        <li><Link to="/pricing" className="hover:text-emerald-400">{footer.pricing}</Link></li>
                        </ul>
                    </div>
                        

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{footer.support}</h3>
                        <ul className="space-y-2 text-sm">
                        <li><Link to="/contact" className="hover:text-emerald-400">{footer.contact}</Link></li>
                        <li><Link to="/contact" className="hover:text-emerald-400">{footer.faq}</Link></li>
                        <li><Link to="/become_a_seller" className="hover:text-emerald-400">{footer.join}</Link></li>
                        <li><a href="#" className="hover:text-emerald-400">{footer.shipping}</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{footer.contact_title}</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-emerald-500 mt-0.5" />
                            <span>123 Avenue Mohammed VI,<br/>Marrakech, Morocco</span>
                            </li>
                            <li className="flex items-center gap-3">
                            <Phone size={18} className="text-emerald-500" />
                            <span>+212 5 24 00 00 00</span>
                            </li>
                            <li className="flex items-center gap-3">
                            <Mail size={18} className="text-emerald-500" />
                            <span>GreenHouse@gmail.com</span>
                            </li>
                        </ul>
                    </div>


                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} {footer.rights}</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer