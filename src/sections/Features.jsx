import React, { useEffect } from "react";
import "../index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useEffect(() => {
    // Init smooth scroll (Lenis)
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    let tl4 = gsap.timeline({
      scrollTrigger: {
  trigger: ".part-4",
  start: () => `top bottom-=10%`, // quand le haut de part-4 atteint la fin de part-2
  end: () => `bottom+=150%`,     // étendre selon ton contenu
  pin: true,
  scrub: 1,
  markers: true,
}
    });

    tl4.to(".c-one", { marginTop: "-25%", opacity: 1 }, "sct-1")
       .to(".c-two", { opacity: 1 }, "sct-2")
       .to(".c-one", { marginTop: "-100", opacity: 0 }, "sct-2")
       .to(".c-three", { opacity: 1 }, "sct-3")
       .to(".c-two", { opacity: 0 }, "sct-3")
       .to(".c-one", { marginTop: "-180%" }, "sct-3")
       .to(".c-one", { marginTop: "-230%" }, "sct-4")
       .to(".c-three", { opacity: 0 }, "sct-4")
       .to(".cir-part-4", { marginLeft: "100%", rotate: 360 }, "sct-4");

    // Cleanup quand on quitte la page
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="part-4 w-full h-[100vh] flex">
      {/* Left Part */}
      <div className="lft-part-4">
            <h1>How Fenova Works</h1>
            <div className="cir-part-4">
                <img  src="https://www.svgrepo.com/show/108052/arrow-down-filled-triangle.svg" alt="" />
            </div>
        </div>

      {/* Right Part */}
      <div className="rght-part-4 flex flex-col gap-[40vh] w-1/2 h-[200%] mt-[25%] pl-[8vw]">
        <div className="content-rght-part-4 c-one flex flex-col gap-[5vh] opacity-0">
          <h1 className="text-[2.5vw]">Create & Share</h1>
          <p className="text-[1.5vw] w-[75%]">
            Here, you can express your truth through paintings, photography,
             poetry, music, or design. With powerful storytelling tools — 
            from captions and hashtags to voice notes
          </p>
        </div>

        <div className="content-rght-part-4 c-two flex flex-col gap-[5vh] opacity-0">
          <h1 className="text-[2.5vw]">Collaborate</h1>
          <p className="text-[1.5vw] w-[75%]">
            you can connect with other artists who share your passion. 
            Together, you can launch collaborative projects, exhibitions, or campaigns.
            Picture poets and graphic designers joining forces to create a digital exhibition for فلسطين, 
            where words and visuals unite to carry one powerful message.
          </p>
        </div>

        <div className="content-rght-part-4 c-three flex flex-col gap-[5vh] opacity-0">
          <h1 className="text-[2.5vw]">Amplify</h1>
          <p className="text-[1.5vw] w-[75%]">
            Every piece of art deserves to reach the world,
             and with Fenova’s built-in sharing tools, you can spread your voice across social platforms in just one click. 
             Our system highlights trending movements, ensuring that your work gains visibility among activists, 
            journalists, and organizations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;



