import React, { useEffect, useRef } from 'react';
import '../Testimonial.css';

const Testimonial = () => {
  const movingTextRef = useRef(null);
  
  useEffect(() => {
    // Animation du texte défilant
    const movingText = movingTextRef.current;
    if (movingText) {
      // Cloner le contenu pour une animation fluide
      movingText.innerHTML += movingText.innerHTML;
    }

    // Animation des formes héroïques (seulement si les éléments existent)
    const hero2 = document.getElementById('testimonial-hero-2');
    const hero3 = document.getElementById('testimonial-hero-3');
    
    if (hero2 && hero3) {
      const animateHero = () => {
        const time = Date.now() * 0.001;
        hero2.style.transform = `translate(${Math.sin(time) * 5}%, ${Math.cos(time) * 5}%)`;
        hero3.style.transform = `translate(${Math.cos(time) * 7}%, ${Math.sin(time) * 7}%)`;
        requestAnimationFrame(animateHero);
      };
      
      animateHero();
    }
  }, []);

  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-container">
        <div id="testimonial-page1">
          <div id="testimonial-center">
            <div id="testimonial-left">
              <h3>
                Fenova is the social media where artists rise together.
                Here, your creativity becomes resistance, your voice amplifies Palestine,
                and your art connects 
                a global community fighting for freedom and dignity.
              </h3>
            </div>
            <div id="testimonial-right">
              <h1>ART <br />
                THAT <br />
                RESISTS</h1>
            </div>
          </div>
          
          <video autoPlay loop muted>
            <source src="/assets/Videos/PS.mp4" type="video/mp4" />
          </video>
        </div>

        <div id="testimonial-page2">
          <div id="testimonial-moving-text" ref={movingTextRef}>
            <div className="testimonial-con">
              <h1>FREE</h1>
              <div className="testimonial-gola"></div>
              <h1>FREE</h1>
              <div className="testimonial-gola"></div>
              <h1>PALESTINE</h1>
              <div className="testimonial-gola"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;