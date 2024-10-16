import React from 'react';
import './CulturePart.css';
import girls from '../../assets/girls.jpg';

const CulturePart = () => {
  return (
    <section id="Culture">
      <div className="container"> {/* Changed class to className */}
        <div className="Culture-wrapper"> {/* Changed class to className */}
          <div className="Culture-details"> {/* Changed class to className */}
            <h6>INDONESIAN CULTURE</h6>
            <h4>Our culture here is very friendly to people</h4>
            <p>
              Known for politeness, manners, and gentleness. These are characteristics when they mingle with other
              tribes and become basic traits passed down by their ancestors.
            </p>
            <a href="#">Read more</a>
          </div>
          <div className="Culture-img"> {/* Changed class to className */}
            <img src={girls} alt="Girls" /> {/* Properly closed the img tag */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturePart;
