import React, { useEffect } from "react";
import "../index.css";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    // Configuration Lenis avec écouteur d'événements de défilement
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
    });

    lenis.on('scroll', (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // --- Timeline 1 ---
    gsap.timeline({
      scrollTrigger: {
        trigger: ".part-1",
        start: "50% 50%",
        end: "250% 50%",
        scrub: true,
        pin: true,
      },
    })
      .to(".rotate-div", { rotate: -15, scale: 0.8 }, "a")
      .to("#row-div-2", { marginTop: "5%" }, "a")
      .to("#row-div-3", { marginTop: "-2%" }, "a")
      .to("#row-div-4", { marginTop: "-8%" }, "a")
      .to("#row-div-5", { marginTop: "-10%" }, "a")
      .to(".overlay-div h1", { opacity: 1, delay: 0.2 }, "a")
      .to(".overlay-div", { backgroundColor: "#000000b4" }, "a")
      .to(".scrolling", { width: "100%" }, "a");

    // --- Timeline 2 ---
    gsap.timeline({
      scrollTrigger: {
        trigger: ".part-2",
        start: "0% 70%",
        end: "50% 50%",
        scrub: true,
      },
    }).to(".rounded-div-wrapper", { height: 0, marginTop: 0 });

    // --- Timeline 3 ---
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-2",
        start: "20% 50%",
        end: "100% 50%",
        scrub: 1,
      },
    });
    tl3.to(".content-2 .text-area-hover h1", { width: "100%" })
      .to(".content-2 .text-area-hover h2", { width: "100%" }, "-=0.4");

    // --- Timeline 4 ---
    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-4",
        start: "50% 50%",
        end: "200% 50%",
        pin: true,
        scrub: 1,
      },
    });
    tl4.to(".c-one", { marginTop: "-25%", opacity: 1 }, "sct-1")
      .to(".c-two", { opacity: 1 }, "sct-2")
      .to(".c-one", { marginTop: "-100%", opacity: 0 }, "sct-2")
      .to(".c-three", { opacity: 1 }, "sct-3")
      .to(".c-two", { opacity: 0 }, "sct-3")
      .to(".c-one", { marginTop: "-180%" }, "sct-3")
      .to(".c-one", { marginTop: "-230%" }, "sct-4")
      .to(".c-three", { opacity: 0 }, "sct-4")
      .to(".cir-part-4", { marginLeft: "100%", rotate: 360 }, "sct-4");

    // --- Timeline 5 ---
    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-5",
        start: "20% 50%",
        end: "100% 50%",
        scrub: 1,
      },
    });
    tl5.to(".part-5 .text-area-hover h1", { width: "100%" })
      .to(".part-5 .text-area-hover h2", { width: "100%" }, "-=0.4");

    // --- Timeline 6 ---
    let tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-6",
        start: "0% 70%",
        end: "15% 50%",
        scrub: 1,
      },
    });
    tl6.to(".rounded-div-wrapper-6", { height: "0%", marginTop: 0 });

    // --- Timeline 7 ---
    let tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-7",
        start: "50% 50%",
        end: "300% 50%",
        pin: true,
        scrub: 1,
      },
    });
    tl7.to("#demo", { bottom: "7%" })
      .to(".our-work-txt-div", { height: "60vh" }, "height")
      .to(".our-work-txt", { height: "60vh" }, "height")
      .to("#our", { left: "0%" }, "height")
      .to("#work", { right: "0%" }, "height")
      .to(".scroll-img", { marginTop: "-300%" });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Images pour Part-1
  const rowImages = [
    ["im13.jpg", "im12.jpg", "im3.jpg", "im4.jpg"],
    ["im5.jpg", "im7.jpg", "im8.jpg", "im9.jpg"],
    ["im14.jpg", "im12.jpg", "im6.jpg", "im5.jpg"],
    ["im1.jpg", "im2.jpg", "im3.jpg", "im4.jpg"],
    ["im5.jpg", "im7.jpg", "im8.jpg", "im9.jpg"],
  ];

  const logos = [
    "starbucks-svgrepo-com.svg",
    "coca-cola-logo.svg",
    "mcdonald-s.svg",
    "kfc.svg",
    "microsoft-svgrepo-com.svg",
    "reebok-5-logo-svgrepo-com (1).svg",
    "pepsi-logo-svgrepo-com.svg",
    "starbucks-svgrepo-com.svg",
    "coca-cola-logo.svg",
    "mcdonald-s.svg",
    "kfc.svg",
    "coca-cola-logo.svg",
    "zara-logo-svgrepo-com.svg",
  ];

  return (
    <div id="main">
      <nav>
        <div className="lft-nav">
          <h1 id="logo">fenova</h1>
          <h1>fenova</h1>
        </div>
        <div className="rght-nav">
          <h2 id="nav-contact">Start for free</h2>
          <h2>Start for free</h2>
        </div>
      </nav>

      {/* PART 1 */}
      <div className="part-1">
        <div className="content-part-1">
          <div className="rotate-div">
            {rowImages.map((row, i) => (
              <div className="row-div" id={`row-div-${i + 1}`} key={i}>
                {row.map((img, j) => (
                  <div className="img-div" key={j}>
                    <img src={`../../assets/Images/${img}`} alt="" />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="overlay-div">
            <h1>Fenova</h1>

            <div className="scroll-down">
              <h3>SCROLL DOWN</h3>
              <div className="scroll-p">
                <div className="scrolling"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 2 */}
      <div className="part-2 hero-part-2">
        <div className="rounded-div-wrapper">
          <div className="rounded-div"></div>
        </div>
        <div className="content-2 hero-content-2">
          <div className="text-area">
            <h1>Fenova est une voix </h1>
            <h2>pour les artistes libres</h2>
          </div>
          <div className="text-area-hover">
            <h1>Fenova est une voix </h1>
            <h2>pour les artistes libres</h2>
          </div>
        </div>
      </div>

      {/* PART 3 */}
      <div className="part-3">
        <div className="top-part-3">
          <h4>Boycott, Divestment, and Sanctions 🍉</h4>
          <div className="cta">
            <div className="cta-book">
              <div className="cta-txt">
                <h2>و من الميه للميه</h2>
                <h2>فلسطين عربية</h2>
              </div>
            </div>
            <div className="cta-book cta-book-2">
              <div className="cta-txt">
                <h2>و من الميه للميه</h2>
                <h2>فلسطين عربية</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="btm-part-3">
          <div className="logo-track">
            {logos.map((logo, i) => (
              <img key={i} src={`../../assets/Images/${logo}`} alt="" />
            ))}
          </div>
        </div>
      </div>

      {/* PART 4 */}
      <div className="part-4">
        <div className="lft-part-4">
          <h1>How Fenova Works</h1>
          <div className="cir-part-4">
                <img  src="https://www.svgrepo.com/show/108052/arrow-down-filled-triangle.svg" alt="" />
          </div>
        </div>
        <div className="rght-part-4">
          <div className="content-rght-part-4 c-one">
            <h1>Create & Share</h1>
            <p>
              Here, you can express your truth through paintings, photography,
             poetry, music, or design. With powerful storytelling tools — 
            from captions and hashtags to voice notes
            </p>
          </div>
          <div className="content-rght-part-4 c-two">
            <h1>Collaborate</h1>
            <p>
              you can connect with other artists who share your passion. 
            Together, you can launch collaborative projects, exhibitions, or campaigns.
            Picture poets and graphic designers joining forces to create a digital exhibition for فلسطين, 
            where words and visuals unite to carry one powerful message.
            </p>
          </div>
          <div className="content-rght-part-4 c-three">
            <h1>Amplify</h1>
            <p>
              Every piece of art deserves to reach the world,
             and with Fenova’s built-in sharing tools, you can spread your voice across social platforms in just one click. 
             Our system highlights trending movements, ensuring that your work gains visibility among activists, 
            journalists, and organizations
            </p>
          </div>
        </div>
      </div>

      {/* Ajouter les parties manquantes (5, 6, 7) si nécessaire */}
    </div>
  );
};

export default Hero;