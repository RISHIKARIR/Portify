import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './header'
import About from './about' 
import { motion, useScroll } from "motion/react"
import { useEffect } from "react";
import AOS from "aos";
import Projectrender from './Projectrender'
import Music from './Musicplayer'
import Footer from './footer'

function App() {
   const { scrollYProgress } = useScroll()
useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
<>

  <motion.div className='z-1'
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#ff0088",
                }}
            />
            <motion.div />


<Header data-aos="fade-up"/>
<About data-aos="fade-up"/>
<Projectrender data-aos="fade-up"/>
<Music/>
<Footer/>

</>

  )

}

export default App
