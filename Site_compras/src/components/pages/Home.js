
import React from 'react';
import Header from '../Header';
import ProductList from '../ProductList';
import AboutUs from '../AboutUs';
import InfoSection from '../InfoSection';
import Footer from '../Footer';



function Home() {
  

  return (
    <div className="Home">
      <Header />
      <ProductList />
      <AboutUs/>
      <InfoSection/>
      <Footer />     
    </div>
  );
}

export default Home;
