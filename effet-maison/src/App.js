import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import Nav from './components/Nav/Nav';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, {useState} from 'react';
import BlurryBackground from './components/BlurryBackground/BlurryBackground';
import Home from './pages/home';

function App() {

  const [cart, setCart] = React.useState(0);

  function add() {
    setCart(cart + 1)
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
      <Nav cart={cart} links={["Home", "Catalog", "Us"]} refs={[scrollToHome, scrollToCatalog, scrollToUs]} />
      <Routes>
        <Route path="/" element={<Home setCart={add} refs={[homeRef, catalogRef, usRef]} />}/>
        {/*  />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
