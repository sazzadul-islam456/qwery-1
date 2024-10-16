import React from 'react'
import './Banner.css'
import bannerImage from '../../assets/Banner2.png'

const Banner = () => {
  return (
    <section id="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
    <div class="container">
      <div class="banner-wrapper">
        <p>explore the Nature Beauty</p>
        <h1>
          Discover
          <span>Wonderful Indonesia</span>
        </h1>
      </div>
    </div>
  </section>
  )
}

export default Banner