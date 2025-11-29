import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, Menu, X, Sprout } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



function Navbar({ nav, children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const itLogin = localStorage.getItem('isLogin')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: nav.market, path: "/marketplace" },
    { name: nav.how, path: "/How_it_Works" },
    { name: nav.about, path: "/about" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-gray-800"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-emerald-100 text-emerald-700' : 'bg-white/20 text-white'}`}>
                <img src='/logo.jpg' alt="logo" className="w-7.5 h-7.5 rounded-full border-2 border-emerald-500 shadow-lg object-cover"  />
            </div>
            <div className="flex flex-col">
                <span className={`font-bold text-xl leading-none ${isScrolled ? 'text-emerald-950' : 'text-white'}`}>GreenHouse</span>
                <span className={`text-[10px] tracking-widest uppercase ${isScrolled ? 'text-emerald-600' : 'text-emerald-200'}`}>Morocco</span>
            </div>
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex items-center bg-gray-100/10 border border-gray-200/20 rounded-full px-4 py-2 w-96 mx-8 focus-within:bg-white focus-within:text-gray-800 transition-colors">
            <input 
                type="text" 
                placeholder="Search products..." 
                className={`bg-transparent border-none outline-none w-full text-sm placeholder-gray-400 ${isScrolled ? 'text-gray-800' : 'text-white focus:text-gray-800'}`}
            />
            <Search size={18} className="text-gray-400 cursor-pointer hover:text-emerald-500" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Language Toggle (Children) */}
            <div className="border-l pl-4 border-gray-500/30">
                {children}
            </div>

            <Link
              to="/become_a_seller"
              className="text-emerald-500 hover:text-emerald-600 transition-colors"
            >
              {nav.become}
            </Link>

            {itLogin === 'false'&&

              <Link
                to="/login"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                  isScrolled
                      ? "bg-emerald-900 text-white hover:bg-emerald-800"
                      : "bg-white text-emerald-900 hover:bg-emerald-50"
                }`}
              >
                <User size={16} />
                {nav.login}
              </Link>
            }

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white text-gray-800 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium border-b border-gray-100 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex justify-between items-center py-2">
                 <span>Language</span>
                 {children}
              </div>
              <Link
                to="/become_a_seller"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-emerald-600 font-medium"
              >
                {nav.become}
              </Link>
              {itLogin === 'false'&&
              
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-emerald-900 text-white text-center py-3 rounded-xl font-bold"
                >
                  {nav.login}
                </Link>
              }
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;