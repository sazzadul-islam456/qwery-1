import React from 'react'
import './Navbar.css'
import logo from '../../assets/QWERy.png'

const Navbar = () => {
  return (
    
    <section id="navbar">
    <div class="container">
      <div class="navbar-wrapper">
        <div class="logo">
          <img src={logo} alt="" srcset="" />
        </div>
        <div class="nav-items">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Culture</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Navbar