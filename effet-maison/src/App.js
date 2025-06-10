import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import Nav from './components/Nav/Nav';
import Cart from './pages/cart';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, {useState} from 'react';
import BlurryBackground from './components/BlurryBackground/BlurryBackground';
import Home from './pages/home';
import Popup from './components/Popup/Popup';
import Footer from './pages/footer';
import Catalog from './pages/catalog';

function App() {
  let data = JSON.parse(localStorage.getItem("cart"));
  let c;
  if (data) {
    c = data.length
  } else {
    c = 0
  }
  const [cart, setCart] = React.useState(c);
  const [popupIsActive, setIsActive] = React.useState(false)
  const [popupText, setPopupText] = React.useState("Added to cart");

  function add() {
    setCart(cart + 1)
  }

  if (popupIsActive) {
    setTimeout(() => {
      setIsActive(false);
    }, 3000); // 3 secondes
  }


  const catalogRef = useRef(null);
  const homeRef = useRef(null);
  const usRef = useRef(null);
  
  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView();
  };

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView();
  };

  const scrollToUs = () => {
    usRef.current?.scrollIntoView();
  };

  return (
    <Router>
      <Popup popupIsActive={popupIsActive} popupText={popupText} />
      <Nav cart={cart} links={["Home", "Catalog", "Us"]} refs={[scrollToHome, scrollToCatalog, scrollToUs]} />
      <Routes>
        <Route path="/" element={<Home add={add} setPopupText={setPopupText} setIsActive={setIsActive} refs={[homeRef, catalogRef, usRef]} />}/>
        {/*  />
        <Route path="/account" element={<Account />} />*/}
        <Route path="/cart" element={<Cart setCart={setCart} />} />
        <Route path="/search" element={<Catalog add={add} setPopupText={setPopupText} setIsActive={setIsActive} />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
