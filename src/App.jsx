import React from 'react'
import Navbar from './component/Navbar/Navbar';
import Banner from './component/Banner/Banner';
import East from './component/East-part/East';
import BannerTwo from './component/BannerTwo/BannerTwo';
import CulturePart from './component/CulturePart/CulturePart';
import FooterPart from './component/FooterPart/FooterPart';

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <East />
      <BannerTwo />
      <CulturePart />
      <FooterPart />
      
      
    </div>
  )
}

export default App