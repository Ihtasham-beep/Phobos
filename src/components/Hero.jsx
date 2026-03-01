import { useRef , useEffect } from "react";


const Hero = () => {
  const videoRef = useRef();
useEffect(() => {
  if(videoRef.current){
    videoRef.current.playbackrRate = 2;
  }
},  [])
    return(
      <section id="hero"> 
         <div>
           <h1>MacBook Pro</h1>
         <img src="/title.png" alt="" />
         </div> 

         <video ref = {videoRef}src="/videos/hero.mp4" autoPlay muted playsInline ></video>
          <button>
             Buy
          </button>
          <h2>From $1599 to $199</h2>
      </section>
    )
}
export default Hero;