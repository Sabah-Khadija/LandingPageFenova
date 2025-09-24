import { motion } from "framer-motion";
import "../index.css";

// Transformations pour l'animation de dispersion
export const transforms = [
  {
    x: -0.3,
    y: -0.2,
    rotationZ: -2
  },
  {
    x: -0.1,
    y: -0.2,
    rotationZ: -6
  },
  {
    x: -0.05,
    y: 0.1,
    rotationZ: 1
  },
  {
    x: -0.05,
    y: -0.1,
    rotationZ: -9
  },
  {
    x: -0.1,
    y: -0.2,
    rotationZ: 3
  },
  {
    x: 0,
    y: -0.1,
    rotationZ: 9
  },
  {
    x: 0,
    y: -0.1,
    rotationZ: 9
  }
];

export const disperse = {
  open: (i) => ({
    x: transforms[i].x + "em",
    y: transforms[i].y + "em",
    rotateZ: transforms[i].rotationZ,
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
    zIndex: 1
  }),
  closed: {
    x: 0,
    y: 0,
    rotateZ: 0,
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
    zIndex: 0
  }
};

const Footer = () => {
  return (
    <footer className="footer-container w-full h-[60vh] pt-16 pb-8 px-[2vw] relative z-25">
      {/* Animation FENOVA - Texte plus grand */}
<div className="flex justify-center mb-12 w-full"> 
  <motion.div 
    className="flex text-[80vw] md:text-[30vw] lg:text-[20vw] font-black tracking-tighter cursor-pointer leading-none"
    initial="closed"
    whileHover="open"
  >
    {"FENOVA".split("").map((letter, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={disperse}
        className="inline-block text-black"
      >
        {letter}
      </motion.span>
    ))}
  </motion.div>
</div>



      {/* Texte de copyright et description */}
      <div className="text-center text-neutral-600 mb-10">
        <p className="text-base mb-3 uppercase tracking-wider">Copyright ©</p>
        <p className="text-lg mb-6 font-light">Created by KHADIJA SABAH</p>
        
      </div>

      {/* Liens et informations légales */}
      <div className=" h-[20hv] flex flex-wrap items-center justify-between gap-5 pt-6 text-sm text-black border-t border-black">
        <div className="flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
        <p>© 2025 Fenova. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;