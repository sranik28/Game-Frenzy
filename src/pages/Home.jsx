import React from 'react';
import Banner from './Header/Banner';
import useTitle from '../hooks/UseTitle';
import OfferCategory from '../components/OfferCategory';
import Tabss from '../components/Tabss';
import SupportSection from '../components/SupportSection';
import Gallery from '../components/Gallery';
import ProductSlider from '../components/Slider';




const Home = () => {

  useTitle('Home')
  return (
    <div>
      <Banner />
      <Gallery />
      <ProductSlider />
      <Tabss />
      <OfferCategory />
      <SupportSection />
    </div>
  );
};

export default Home;