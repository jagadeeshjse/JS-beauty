import React from 'react';
import Home from './Home';
import Beauty from './Nav bar/Beauty/Beauty';
import Boutique from './Nav bar/Boutique/Boutique';
import './App.css';
import NavBar from './Nav bar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
      <Home />
      <NavBar />
      <hr className="hr-toggle" />
      <Routes>
        <Route path="/" element={<Beauty />} />
        <Route path="/Beauty" element={<Beauty />} />
        <Route path="/Boutique" element={<Boutique />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
