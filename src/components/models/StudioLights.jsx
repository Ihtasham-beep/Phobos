import { Environment , Lightformer, SpotLight } from "@react-three/drei"

const StudioLights = () => {
    return(
        <group name="lights">
             <Environment resolution={256}>
                 <group>
                     <Lightformer 
                     form="rect"
                     intensity={10}
                     position={[-10 , 5 , -5]}
                     scale={10} 
                     rotation-y={Math.PI / 2} 
                     rotation-x={Math.PI / 2} 
                     
                     /> 
                         <Lightformer 
                     form="rect"
                     intensity={10}
                     position={[10 , -5 , 5]}
                     scale={10} 
                     rotation-y={Math.PI / 2}
                     />
                     <SpotLight  
                     position={[-2 , 10 ,5]}
                     angle={0.15}
                     decay={0}
                     intensity={Math.PI * 0.2}
                     />
                 </group>
             </Environment>
        </group>
    )
} 
export default StudioLights