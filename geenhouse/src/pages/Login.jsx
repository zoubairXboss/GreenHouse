// import React, { useState} from 'react'
// import { useNavigate } from 'react-router-dom';

// function Login({setIsLogin,incre,ListUsers}) {

//     const [formLogin,setFormLogin] = useState({email:'',password:''})
//     const [message,setMessage] = useState('')
//     const navigate = useNavigate()

//     function handelForm(e){
//         e.preventDefault()

//         if(!formLogin.email || !formLogin.password){
//             alert('insert tout les champs !!')
//             return
//         }

//         let userTarget = ListUsers.find(item=>item.email === formLogin.email && item.password === formLogin.password )

//         if(userTarget !== undefined){
//             setIsLogin(true)
//             setMessage('')
//             navigate(`/dashboard/${userTarget.id}`)
//         }else{
//             setMessage('this acount not fund')
//             return
//         }

//     }

//     function handelInputs(e){
//         const {value,name} = e.target
//         setFormLogin({ ...formLogin, [name]: value });
//     }

//   return (
//     <div>
//         <br /><br /><br /><br /><br />
//         <h1>{incre.title_login}</h1>

//         <form onSubmit={handelForm}>

//             <div>
//                 <label htmlFor="email">{incre.email_login}</label>
//                 <input type="email" value={formLogin.email} id='email' name='email' onChange={(e)=>{handelInputs(e)}} />
//             </div>
//             <div>
//                 <label htmlFor="password">{incre.pass_word}</label>
//                 <input type="password" value={formLogin.password} id='password' name='password' onChange={(e)=>{handelInputs(e)}} />
//             </div>

//             <button type='submit'>submit</button>
//             <p>{message}</p>

//         </form>
//     </div>
//   )
// }

// export default Login

import React, { useState } from "react";
import { useNavigate, Link,Navigate } from "react-router-dom";
import { Mail, Lock, LogIn, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

function Login({ setIsLogin, incre, ListUsers ,setIdUser}) {
  const [formLogin, setFormLogin] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const itLogin = localStorage.getItem("isLogin")



  

  function handelForm(e) {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    setTimeout(() => {
      if (!formLogin.email || !formLogin.password) {
        setMessage("Please fill in all fields.");
        setIsLoading(false);
        return;
      }

      let userTarget = ListUsers.find(
        (item) =>
          item.email === formLogin.email && item.password === formLogin.password
      );

      if (userTarget !== undefined) {
        setIsLogin(true);
        setIdUser(userTarget.id)
        navigate(`/dashboard/${userTarget.id}`);
      } else {
        setMessage(incre.error_msg);
      }
      setIsLoading(false);
    }, 800);
  }

  function handelInputs(e) {
    const { value, name } = e.target;
    setFormLogin({ ...formLogin, [name]: value });
    if (message) setMessage("");
  }

  return (
    <>
      {itLogin === "true"&&<Navigate to="/" replace />}
      <section className="relative bg-emerald-950 py-32 overflow-hidden text-center text-white">
        {/* Subtle geometric pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950/80"></div>

        <div className="relative container mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{}</h1>
            <p className="text-emerald-200 text-lg md:text-xl max-w-2xl mx-auto">
              {}
            </p>
          </motion.div>
        </div>
      </section>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl flex rounded-2xl shadow-2xl overflow-hidden bg-white min-h-[600px]">
        {/* Left Side: Image (Hidden on Mobile) */}
        <div className="hidden lg:block w-1/2 relative bg-emerald-900">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1920&auto=format&fit=crop"
            alt="Moroccan Door"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent flex flex-col justify-end p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Grow with GreenHouse</h2>
            <p className="text-emerald-100 text-lg">
              Join the largest community of authentic Moroccan cooperatives.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-10">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-700">
                <LogIn size={28} />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                {incre.title_login}
              </h1>
              <p className="text-gray-500 mt-2">
                Enter your credentials to access your dashboard.
              </p>
            </div>

            <form onSubmit={handelForm} className="space-y-6 max-w-sm mx-auto">
              {/* Email Input */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {incre.email_login}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formLogin.email}
                    onChange={handelInputs}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {incre.pass_word}
                  </label>
                  <a
                    href="#"
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-500"
                  >
                    {incre.forgot_pass}
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formLogin.password}
                    onChange={handelInputs}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Error Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm"
                >
                  <AlertCircle size={16} />
                  {message}
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  incre.submit_btn
                )}
              </button>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  {incre.no_account}{" "}
                  <Link
                    to="/register"
                    className="font-semibold text-emerald-600 hover:text-emerald-500"
                  >
                    {incre.register_here}
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
