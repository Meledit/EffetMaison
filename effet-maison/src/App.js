import logo from './logo.svg';
import './App.css';
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

  return (
    <Router>
      <Nav cart={cart} links={["Home", "Catalog", "Us"]} />
      <Routes>
        <Route path="/" element={<Home setCart={add} />}/>
        {/*  />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
