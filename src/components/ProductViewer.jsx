import UseMacBookStore from "./store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber"
import { Box } from "@react-three/drei"
import MacbookModel14 from "./models/Macbook-14";
import StudioLights from "./models/StudioLights"; 
import { useEffect } from "react"
import { useMediaQuery } from "react-responsive";
import Switcher from "./ModelSwitcher"; 
import { extend } from '@react-three/fiber'
import { OrbitControls, TransformControls } from 'three-stdlib'
import MacbookModel16 from "./models/Macbook-16";
extend({ OrbitControls, TransformControls }) 
import gsap from "gsap";



const ProductViewer = () => {
  const { color, scale, setColor, setScale } = UseMacBookStore(); 

  let isMbl = useMediaQuery({query : '(max-width : 1024px)'})

  return (
    <section id="product-viewer">
      <h2>Take a closer look</h2>

      <div className="controls">
        <p className="info">
          MacBook Pro 16" in {color === "#abd5bd" ? "Silver" : "Space Black"}
        </p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control flex gap-3">
            
          
            <div
              onClick={() => setColor("#abd5bd")}
              className={clsx(
                "w-6 h-6 rounded-full cursor-pointer bg-[#abd5bd]",
                color === "#abd5bd" && "ring-2 ring-black"
              ) } 
            />

      
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "w-6 h-6 rounded-full cursor-pointer bg-[#2e2c2e]",
                color === "#2e2c2e" && "ring-2 ring-black"
              )}
            />
          </div>

          <div className="size-control flex gap-4">
            <div
          onClick={() => setScale(0.07)}
          className={clsx(
          "cursor-pointer px-3 py-1 rounded-full",
          scale === 0.07
          ? "bg-black text-white"
          : "bg-gray-200 text-black"
  )}
            >
              <p>14"</p>
            </div>
            <div
               onClick={() => setScale(0.08)}
               className={clsx(
               "cursor-pointer px-3 py-1 rounded-full",
               scale === 0.08
               ? "bg-black text-white"
               : "bg-gray-200 text-black"
  )}
             >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
       
       <Canvas id="canvas" camera={{position: [0, 2, 6], fov:45, near:0.01 ,far:100}}>
             <StudioLights />
       
              <Switcher scale={isMbl ? scale - 0.03 : scale} isMbl={isMbl} position={[0 , 0 , 0]}/>
       </Canvas>

    </section>
  );
};

export default ProductViewer;