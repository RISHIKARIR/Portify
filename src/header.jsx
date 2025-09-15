import "./App.css";
import { useState,useEffect} from "react";
import { motion } from "motion/react";
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Header(){
let [time,updatetime] = useState(new Date())


useEffect(() => {
    const interval = setInterval(() => {
      updatetime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
    return (
<>
<p className="absolute top-[1rem] left-[1rem] font-medium font-sans text-white-100 text-xs">
    Time {time.toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit' })}</p>
<div data-aos="fade-up" className="Header flex mt-16 ml-4 md:justify-self-center ">
<img src="/image.png" className="h-24 rounded"/>
<div className="flex flex-col">
<div className="flex items-center ">
<h1 className="text-3xl subpixel-antialiased ml-4 font-sans font-bold">Parth 
</h1>
<motion.div 
  className="inline-flex items-center ml-2 px-2  bg-green-900 border border-green-500 rounded text-green-400 text-xs"
  animate={{ opacity: [1, 0.3, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
  Available
</motion.div>
    </div>
<p className="text-base ml-2 font-semibold">Frontend Developer</p>





<div className="icons flex mt-1 ml-4 flex-wrap gap-4">
    <div className="border-solid social border p-1 hover:bg-gray-800 rounded-md">
        <a href="https://github.com/RISHIKARIR">
<div className="relative group">
  < GitHubIcon/>
  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none">
    <div className="bg-white text-gray-900 text-sm font-medium px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
      Github
    </div>
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
  </div>
</div>
</a>
</div>




<div className="social border border-solid p-1 hover:bg-gray-700 rounded-md">
<a href="https://www.linkedin.com/in/parth-b44295375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
<div className="relative group">
  <LinkedInIcon/>
  
  {/* Spring bounce effect */}
  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none">
    <div className="bg-white text-gray-900 text-sm font-medium px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
      LinkedIn
    </div>
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
  </div>
</div>
</a>
</div>




<div className="social border border-solid p-1 hover:bg-gray-700 rounded-md">
<a href="https://x.com/sus_rishi?s=11">

<div className="relative group">
  <XIcon/>

  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none">
    <div className="bg-white text-gray-900 text-sm font-medium px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
      Twitter
    </div>
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
  </div>
</div>



</a>
</div>
</div>
</div>

</div>
</>
    )
}