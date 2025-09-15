import "./App.css";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import WorkIcon from '@mui/icons-material/Work';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFramerLogoFill } from "react-icons/pi";
import { useEffect } from "react";
import AOS from "aos";


export default function About(){
return(
<>
<div data-aos="fade-up" className="About-section ml-4 max-w-screen sm:ml-[20%] mt-10 md:w-4xl sm:overflow-x-hidden">
<h1 className="text-base font-bold md:text-xl font-bold " >
About</h1>

<p className=" font-sans font-normal md:text-lg font-semibold sm:overflow-x-hidden">Hey, I’m Parth aka Rishi

I’m an undergraduate student and a front-end developer constantly leveling up by building projects and learning new stuff every day. I’m super into exploring new technologies and keeping up with what’s next in tech.
Right now,I’ve wrapped up my front-end journey (HTML, CSS, JavaScript, React, Tailwind) and I’m diving into back-end + databases. At the same time, I’m sharpening my problem-solving skills through Data Structures & Algorithms in C++.
</p>

<p className="font-sans md:text-lg font-semibold sm:overflow-x-hidden">
I love connecting with new people, sharing ideas, and learning from each other.
 If I can contribute something valuable to your journey while learning from you, 
that’s a win-win. Let’s build, grow, and vibe together</p>
<br></br>
<h1 className="text-base md:text-xl font-bold">Reach Out</h1>
<p className="font-sans md:text-lg font-semibold sm:overflow-x-hidden">I’m pretty active on X (Twitter) — so if you hit me up there, 
    chances are you’ll get a quick reply. DMs are always open.
 You can also catch me on LinkedIn if that’s your vibe.</p>
<span className="border inline-block p-1 m-4 ml-0 hover:bg-gray-700 rounded text-gray-200">
<a href="https://x.com/sus_rishi?s=11"> <XIcon fontSize="sm"/>
Twitter </a></span>
<span className="border inline-block p-1 rounded hover:bg-gray-700 text-gray-200">
    <a href="https://www.linkedin.com/in/parth-b44295375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
    <LinkedInIcon fontSize="sm"/>LinkedIn </a></span>
<h1 className="text-base md:text-xl font-bold">Hire me</h1>

<p className="font-sans md:text-lg font-semibold overflow-x-hidden">I’m open for internships, full-time roles,
     and freelance projects. If you need someone driven,
     creative, and ready to dive in, I’m here to turn
      your ideas into reality</p>
      <a href="./Parth cv.pdf" className=" mt-4 border inline-block p-1 rounded hover:bg-gray-700 text-gray-200"><DownloadIcon/>Download resume</a>
<a href="mailto:Parthkarir0@gmail.com" className=" m-4 border inline-block p-1 rounded hover:bg-gray-700 text-gray-200">
  <WorkIcon /> Hire me
</a>
<h1 className="text-base font-bold md:text-xl font-bold ">
    Skills & Tools</h1>


<div className="skills mt-4 flex gap-4 flex-wrap">
<span className="border inline-flex p-1 rounded bg-gray-900"><FaHtml5 className="text-2xl"/>Html</span>
<span className="border inline-flex p-1 rounded bg-gray-900"><FaCss3Alt className="text-2xl"/>Css</span>
<span className="border inline-flex p-1 rounded bg-gray-900"><DiJavascript className="text-2xl"/>Javascript</span>
<span className="border inline-flex p-1 rounded bg-gray-900"><FaReact className="text-2xl"/>React</span>
<span className="border inline-flex p-1 rounded bg-gray-900"><FaGitAlt className="text-2xl"/>Git</span>
<span className="border inline-flex p-1 rounded bg-gray-900"><FaGithub className="text-2xl"/>Github</span>
<span className="border inline-flex p-1 rounded bg-gray-900"><RiTailwindCssFill className="text-2xl"/>Tailwind</span>
<span className="border inline-flex p-1 rounded bg-gray-900"><PiFramerLogoFill className="text-2xl"/>Framer-Motion</span>


</div>


</div>






</>)


}
