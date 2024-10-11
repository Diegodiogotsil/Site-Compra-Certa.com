import React from 'react';
import Header from '../Header';
import ProductList from '../ProductList';
import AboutUs from '../AboutUs';
import InfoSection from '../InfoSection';
import Footer from '../Footer';
import MenuSuperior from '../MenuSuperior';




function Home() {

  return (
    <div className="Home">
      <MenuSuperior/>
      <Header/>
      <ProductList/>
      <AboutUs/>
      <InfoSection/>
      <Footer/>          
    </div>
  );
}

export default Home;
