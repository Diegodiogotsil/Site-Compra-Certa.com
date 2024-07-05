// src/App.js
import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
      <AboutUs/>
      <InfoSection/>
      <Footer />
      
      
    </div>
  );
}

export default App;
