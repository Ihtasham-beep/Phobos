import { useMediaQuery } from 'react-responsive';  
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const ShowCase = () => { 
  const isGori = useMediaQuery({query : '(max-width : 1024px)'}) 

  useGSAP(()=>{
  if(!isGori){
  const timeline = gsap.timeline({
    scrollTrigger : {
        trigger : '#showcase',
        start : 'top top',
        end : 'bottom top',
        scrub : true,
        pin : true,

    }
  });

  timeline.to('.mask img', {
    transform : 'scale(1.1)'
  }).to('.content' , {
    opacity: 1,
    y:0,
    ease : 'power1.in'
  })
  }
  }, [isGori])

    return (
   <section id="showcase">
     <div className="media"> 
        <video src="/videos/game.mp4" loop muted autoPlay />
         <div className="mask">
         <img src="/mask-logo.svg" alt="" />    
        </div>  
          
     </div> 

     <div className="content">
   
    <div className="wrapper">
        <div className="lg:max-w-md">
             <h2>Jahazz Chip.</h2>
            
              <div className="space-y-5 mt-7 pe-10">
               <p>Introducing {""}
                 <span className="text-white">

                    M4 , the next generation of Apple Silicon
                 </span> 
                 .M4 Powers
                </p>  

                <p>
               It drives  Apple Intellgence on iPad Pro , so you can write , create , and accomplish with easee. All in a design that's unbelievably thin, light, and powerful
               </p>  

               <p>
                 A brand-new display delivers breathtaking precision, color, accuracy and brightness. And a next-gen GPU with hardware accelerated ray tracing brings console-level fraphics to your fingertips.
               </p> 
               <p className="text-blue-700"><a href="#">Learn more about Apple Intelligence</a> </p>
              </div>    

            </div>  

            <div className="max-w-3xs space-y-10">
                <div className="space-y-2">
                    <p>Up to</p>    
                    <p className="text-white">4x faster</p>    
                    <p>Pro rendering perfomance than M2</p>    
                </div> 
                      <div className="space-y-2">
                    <p>Up to</p>    
                    <p className="text-white">1.5x faster</p>    
                    <p>CPU perfomance than M2</p>    
                </div> 

            </div>

    </div>
         
     </div>
   </section> 
    )
} 

export default ShowCase;