import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, {useState} from 'react';
import BlurryBackground from './components/BlurryBackground/BlurryBackground';

function App() {

  return (
    <Router>
      <Nav links={["Text", "Text", "Text"]} />
      <BlurryBackground />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
