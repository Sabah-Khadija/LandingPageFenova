// Gallery.js
'use client';
import { useEffect, useRef, useState } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  "G1.jpg", "G13.jpg", "G3.jpg",
  "G4.jpg", "G5.jpg", "G6.jpg",
  "G7.jpg", "G0.jpg", "G11.jpg",
  "G10.jpg", "G9.jpg", "G12.jpg"
];

export default function Gallery() {
  const gallery = useRef(null);
  const container = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });

  const { height } = dimension;
  
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.8]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.8]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    // === PART 5 Animation ===
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-5",
        start: "20% 50%",
        end: "100% 50%",
        scrub: 1,
      },
    });

    tl5.to(".part-5 .text-area-hover h1", {
      width: "100%",
    });
    tl5.to(".part-5 .text-area-hover h2", {
      delay: -0.4,
      width: "100%",
    });

    // === PART 6 Animation ===
    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-6",
        start: "0% 70%",
        end: "15% 50%",
        scrub: 1,
      },
    });

    tl6.to(".rounded-div-wrapper-6", {
      height: "0%",
      marginTop: 0,
    });

    // cleanup
    return () => {
      tl5.kill();
      tl6.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section ref={container} className="relative w-full min-h-screen z-20">
      {/* Espace avant la galerie */}
      <div className="h-[50vh]" />
      
      {/* Galerie */}
      <div
        ref={gallery}
        className="h-[180vh] relative flex gap-[2vw] p-[2vw] box-border overflow-hidden z-10 bg-white"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} className="-top-[25%]" />
        <Column images={[images[3], images[4], images[5]]} y={y2} className="-top-[45%]" />
        <Column images={[images[6], images[7], images[8]]} y={y3} className="-top-[25%]" />
        <Column images={[images[9], images[10], images[11]]} y={y4} className="-top-[35%]" />
      </div>
      
      {/* Part 5 + Part 6 */}
      <div className="h-[120vh] bg-black">
        <div className="part-5">
          <p>In summary..</p>
          <div className="text-area">
            <h1>Fenova A social media</h1> 
            <br /> 
            <h2>for creative justice</h2>
          </div>
          <div className="text-area-hover col">
            <h1>Fenova A social media</h1> 
            <br /> 
            <h2>for creative justice</h2>
          </div>
        </div>

        <div className="part-6">
  <div className="rounded-div-wrapper-6">
    <div className="rounded-div-6"></div>
  </div>

  {[1, 2].map((_, i) => (
    <div key={i} className="brand-part-6">
      <div className="top-brand-part-6">
        <div className="lft-top-6">
          <h1>Fenova</h1>
        </div>
        <div className="rght-top-6">
          <button>Join the Movement</button>
        </div>
      </div>

      <div className="btm-brand-part-6">
        <div className="lft-btm-6"></div>
        <div className="rght-btm-6">
          <h2>A safe space for artists worldwide</h2>
          <div className="content-rght-btm-6">
            <p>
              Creative Freedom <br />
              Palestinian Voices <br />
              Artistic Collaboration <br />
              Global Solidarity <br />
              Digital Exhibitions <br />
              Collective Resistance
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

const Column = ({ images, y, className }) => {
  return (
    <motion.div
      className={`relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw] ${className}`}
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="h-full w-full relative rounded-[1vw] overflow-hidden group">
          <img
            src={`/assets/Images/${src}`}
            alt="Gallery image"
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
      ))}
    </motion.div>
  );
};