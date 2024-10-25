import React from 'react';
import Header from '../Header';
import ProductList from '../ProductList';
import AboutUs from '../AboutUs';
import InfoSection from '../InfoSection';
import Footer from '../Footer';
import ImageCarousel from '../ImageCarousel';




function Home() {

  return (
    <div className="Home">
      <Header/>
      <ImageCarousel/>
      <ProductList/>
      <AboutUs/>
      <InfoSection/>
      <Footer/>          
    </div>
  );
}

export default Home;
