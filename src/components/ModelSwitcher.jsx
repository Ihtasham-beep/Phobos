import { PresentationControls } from "@react-three/drei";
import { useRef } from "react"; 
import gsap from 'gsap';
import MacbookModel14 from "./models/Macbook-14";
import MacbookModel16 from "./models/Macbook-16"; 
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP)
const Switcher = ({ isMbl, scale }) => { 
  
  const LargeRef = useRef();
  const SmallRef = useRef();
   const ANIMATION_DURATION = 1;
  const OFFSET_DITANCE = 6; 
  const fadeMeshes = (group , opacity) => {
  if(!group) return ;
  group.traverse((child) => {
    if(child.isMesh){
        child.material.transparent = true;
        gsap.to(child.material , {opacity , duration : ANIMATION_DURATION})
    }
  });
  } 
  const moveGroup = (group , x) => {
    if(!group) return; 
    gsap.to(group.position , {x , duration : ANIMATION_DURATION})

  }
  const showLargeMac = scale === 0.08 || scale === 0.05;
 
   useGSAP(() => { 
 
  fadeMeshes(LargeRef.current, showLargeMac ? 1 : 0);
  fadeMeshes(SmallRef.current, showLargeMac ? 0 : 1);

  moveGroup(LargeRef.current, showLargeMac ? 0 : OFFSET_DITANCE);
  moveGroup(SmallRef.current, showLargeMac ? -OFFSET_DITANCE : 0);  

  if (showLargeMac) {
    moveGroup(SmallRef.current, -OFFSET_DITANCE);
    moveGroup(LargeRef.current, 0);

    fadeMeshes(SmallRef.current, 0);
    fadeMeshes(LargeRef.current, 1);
  } else {
    moveGroup(SmallRef.current, 0);
    moveGroup(LargeRef.current, OFFSET_DITANCE);

    fadeMeshes(SmallRef.current, 1);
    fadeMeshes(LargeRef.current, 0);
  }
}, [scale]);  


  
   
  
  let controlConfig = {
  snap: true,
  speed: 1,
  zoom: true,
  azimuth: [-Infinity, Infinity],
  polar: [-Math.PI / 0.01, Math.PI / 0.01],
  config: { mass: 1, tension: 170, friction: 26 },
  }
 
  return (
  <>
    <PresentationControls {...controlConfig}>
      <group ref={LargeRef} position={[0, 0, 0]}>
        <MacbookModel16 scale={isMbl ? 0.07 : 0.08} />
      </group>


      <group ref={SmallRef} position={[OFFSET_DITANCE, 0, 0]}>
        <MacbookModel14 scale={isMbl ? scale - 0.001 : 0.05} />
      </group>
    </PresentationControls>
  </>
);
};

export default Switcher;