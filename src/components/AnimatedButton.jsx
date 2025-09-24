import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../index.css";

const AnimatedButton = () => {
  const textRef = useRef(null);
  return (
    <button
      className="btn-12"
    >
      <span ref={textRef}>Join the Movement</span>
    </button>
  );
};

export default AnimatedButton;
