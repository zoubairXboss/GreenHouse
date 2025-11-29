import React, { useEffect, useState } from "react";
import { translations } from "./data/content";
import { products } from "./data/products";
import { sellers } from "./data/sellers";
import { users } from "./data/users";
import { orders } from "./data/orders";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Marketplace from "./pages/Marketplace";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import BecomeSeller from "./pages/BecomeSeller";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Register from "./pages/Register";

function App() {


  const [listProducts, setListProducts] = useState(products);
  const [listSellers, setListSellers] = useState(sellers);
  const [ListUsers, setListUsers] = useState(users);
  const [listOrders, setListOrders] = useState(orders);
  // const [isLogin,setIsLogin] = useState(false)
  




  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "en";
  });

  
  const [idUser, setIdUser] = useState(() => {
    return localStorage.getItem("idUser") || "";
  });
  
  localStorage.setItem('idUser',idUser)

  
  const [isLogin, setIsLogin] = useState(() => {
    return localStorage.getItem("isLogin") === "true";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin ? "true" : "false");
    localStorage.setItem("idUser", !isLogin?'':idUser);

  }, [isLogin,idUser]);




  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };




  // useEffect(() => {
  //   localStorage.setItem("isLogin", isLogin === 'true' ? "true" : "false");
  //   // document.body.dir = lang === "ar" ? "rtl" : "ltr";
  // }, [isLogin]);




  const { nav } = translations[lang];
  const { hero, features, home } = translations[lang];
  const { footer } = translations[lang];
  const { howItWorks } = translations[lang];
  const { about } = translations[lang];
  const { pricing } = translations[lang];
  const { incre } = translations[lang]; 
  const { dashboard } = translations[lang]; 

  const categories = [...new Set(listProducts.map((item) => item.category))];

  const Categorys = categories.map((cat) => {
    const productsInCat = listProducts.filter((item) => item.category === cat);
    return {
      category: cat,
      numberProducts: productsInCat.length,
      image: productsInCat[0]?.image || "",
    };
  });

  const firstThreeSellers = listSellers.slice(0, 3);

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar nav={nav} setLang={setLang}>
          <button
            className="text-xs font-bold uppercase tracking-wider px-2 py-1 border rounded hover:bg-white/20 transition-colors"
            onClick={() => {
              setLang(lang === "en" ? "ar" : "en");
            }}
          >
            {lang}
          </button>
        </Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                hero={hero}
                features={features}
                home={home}
                Categorys={Categorys}
                firstThreeSellers={firstThreeSellers}
              />
            }
          />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route
            path="/How_it_Works"
            element={<HowItWorks howItWorks={howItWorks} />}
          />
          <Route path="/about" element={<About about={about} />} />
          <Route path="/become_a_seller" element={<BecomeSeller />} />
          <Route path="/dashboard/:idUser" element={<Dashboard listSellers={listSellers} ListUsers={ListUsers} listProducts={listProducts}  listOrders={listOrders} dashboard={dashboard}/>} />
          <Route path="/pricing" element={<Pricing pricing={pricing} />} />
          <Route path="/login" element={<Login setIsLogin={setIsLogin} incre={incre} ListUsers={ListUsers} setIdUser={setIdUser}/>} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
        <Footer footer={footer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
