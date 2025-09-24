import { useRef, useEffect } from "react";
import "../index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import { Palestien } from "../components/Palestien";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const grid2Container = useRef();

  useEffect(() => {
    // ✅ Animation pour About
    gsap.timeline({
      scrollTrigger: {
        trigger: ".about-part-2",
        start: "30% 50%",
        end: "100% 50%",
        scrub: 1,
      },
    })
      .to(".about-content-2 .text-area-hover h1", { width: "100%" })
      .to(".about-content-2 .text-area-hover h2", { delay: -0.4, width: "100%" });
  }, []);

  return (
    <section className="c-space part-about" id="about" style={{overflow: 'visible'}}>
      {/* Section intro */}
      <div className="about-part-2">
        <div className="rounded-div-wrapper">
          <div className="rounded-div"></div>
        </div>
        <div className="content-2 about-content-2">
          <div className="text-area">
            <h1>Fenova stands</h1>
            <h2>with Palestine through Art</h2>
          </div>
          <div className="text-area-hover">
            <h1>Fenova stands</h1>
            <h2>with Palestine through Art</h2>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        
        {/* Grid 1 - Vidéo Palestine */}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden">
          <video
            src="assets/Videos/GAZA.mp4"
            autoPlay
            loop
            muted
            className="absolute inset-0 object-cover w-full h-95%"
          />
        </div>

        {/* Grid 2 - Mots clés */}
        <div className="grid-black-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-4xl text-[#e9d5be]">Art for Resistance</p>
            <Card style={{ rotate: "50deg", top: "40%", left: "20%" }} text="Humanity" containerRef={grid2Container} />
            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="Freedom" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "80%", left: "50%" }} text="Hope" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="Justice" containerRef={grid2Container} />
            <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="Solidarity" containerRef={grid2Container} />
            <Card style={{ rotate: "80deg", bottom: "40%", left: "60%" }} text="Liberation" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="Peace" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="Resistance" containerRef={grid2Container} />
          </div>
        </div>

        {/* Grid 3 - Monde */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[60%]">
            <p className="headtext ">Global Solidarity</p>
            <p className="subtext">
              From every corner of the world, voices rise for Palestine
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 - Contact */}
        <div className="grid-black-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
             "Art will never be silent."
            </p>
          </div>
        </div>

        {/* Grid 5 - Outils */}
        <div className="grid-black-color grid-5">
          <div className="z-10 w-[60%]">
            <p className="headtext">Tools for Change</p>
            <p className="subtext">
              Using creativity, technology, and solidarity to amplify the Palestinian voice
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Palestien />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;