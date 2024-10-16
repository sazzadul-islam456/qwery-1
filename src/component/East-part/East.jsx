import React from 'react'
import './East.css'
import eastImage from '../../assets/image 1 1.png'

const East = () => {
  return (
    <section id="east">
    <div class="container">
      <div class="east-wrapper east-d">
        <div class="east-img">
          <img src={eastImage} alt="East Image" />
        </div>
        <div class="east-details">
          <p class="sm-text">EAST NUSA TENGGARA</p>
          <h2 class="title">Have you enjoyed your holiday?</h2>
          <p class="l-text">
            You will be amazed if you take part in this sailing Komodo island
            tour package. So it is also mandatory for you, besides enjoying
            Komodo tourism on Komodo Island, you also have to taste the marine
            tourism. The beautiful waters of Komodo will make you meet many
            travelers from other countries.
          </p>
          <a href="#">read more</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default East