import React from "react";
import Hero from "./sections/Hero";
import Gallery from "./sections/Gallery";
import Features from "./sections/Features";
import Testimonial from "./sections/Testimonial";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Hero />
      <Gallery />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
