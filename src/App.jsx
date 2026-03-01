import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import ProductViewer from './components/ProductViewer';
import gsap from 'gsap';
import { ScrollTrigger  } from "gsap/all"; 
import ShowCase from './components/ShowCase'; 
import Perfomance from './components/Perfomance';
import  Features from './components/Features';
import  HighLights from './components/HighLights';
import Footer from './components/Footer'


function App() {
gsap.registerPlugin( ScrollTrigger );
  return (  
    <main>
        <Navbar /> 
        <Hero /> 
        <ProductViewer /> 
        <ShowCase /> 
        <Perfomance />  
        <Features /> 
        <HighLights />
        <Footer />
 

    </main>
  
  )
}

export default App
