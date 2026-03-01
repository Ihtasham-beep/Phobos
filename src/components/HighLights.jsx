import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HighLights = () => { 

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  useGSAP(() => {

    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top 80%",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 20,
      ease: "power2.out"
    });

  }, []);

  return (
            <section id="highlights">
            <h2>There's Never Been a Better Time To Upgrade.</h2>
            <h3>Here is what you get with new Macbook Pro.</h3> 
            <div className="masonry">
                <div className="left-column">
                    <div>
                        <img src="/laptop.png" alt="laptop" />
                        <p>Fly through demanding tasks up to 9.8x faster.</p>
                    </div>
                        <div>
                        <img src="/sun.png" alt="laptop" />
                        <p>A stunning <br /> Liquid Retina XDR </p>
                    </div>
                </div>

                <div className="right-column">
                    <div className="apple-gradient">
                        <img src="/ai.png" alt="laptop" />
                        <p>Built for <br />
                         <span>Apple Intelligence.</span>
                        </p>
                    </div>
                        <div>
                        <img src="/battery.png" alt="laptop" />
                        <p>Up to <br /> <span className="green-gradient ">
                              14 more hours
                             </span> <br />
                             
                             battery life. <span className="text-dark-100">
                                </span> (Up to 24 Hours total)</p>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default HighLights;

