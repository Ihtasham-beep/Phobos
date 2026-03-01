import { performanceImages } from "./codes";
 import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


const Perfomance = () => {
gsap.registerPlugin(ScrollTrigger, useGSAP);
 



  const sectionRef = useRef();

  useGSAP(() => {
    const images = gsap.utils.toArray(".stack-img");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1500",
        scrub: true,
        pin: true,
      },
    });


    gsap.set(images, {
      scale: 0.8,
      y: 0,
      rotate: 0,
    });

    // Scroll par spread animation
    images.forEach((img, i) => {
      tl.to(
        img,
        {
          x: i % 2 === 0 ? -400 : 400,
          y: i * 50,
          rotate: i % 2 === 0 ? -15 : 15,
          scale: 1,
          duration: 1,
        },
        0
      );
    });
  }, []);

  return (
    <section id="performance" ref={sectionRef}>
      <div className="stack-wrapper">
        {performanceImages.map(({ id, src }) => (
          <img key={id} src={src} className="stack-img" style={{height : '250px'}}/>
        ))} 
      </div>
   <div className="content mb-12 text-white text-shadow-2xs tex">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita in quibusdam cumque illo nisi possimus dolore excepturi rerum esse, aliquam vitae natus, quam aliquid ex perferendis consectetur alias iusto odio?
   </div>
    </section>
  );

} 
export default Perfomance;