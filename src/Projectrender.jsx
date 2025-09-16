import Projectdisplay from "./Projects"
import { useState } from "react"


export default function Projectrender(){
const Projectsdata = [{title:"Portify",
    description:"Built this React-powered platform using Tailwind CSS, Framer Motion, Material UI, and React Icons to create something that actually represents my style and technical skills.Features smooth animations, responsive design, and interactive elements that make browsing through projects feel engaging rather than like reading a boring resume.And just to make it a little more fun,I've also added a music player with a few tracks of my choice—this is why I call it Portify."
    ,image:"/download (3).jpg",
    technologies:["React","Tailwind","Framer-motion"],isRunning:"Running",githubUrl:"Nil"
},{title:"NGO site UI",
    description:"Built this NGO website for Basti ki Pathshala using HTML, CSS, and JavaScript. Kept it clean and straight to the point with a Home, About, and Volunteer Form section so people can easily check the mission and sign up to help. The whole thing is responsive, minimal, and functional, showing that even with just the basics you can build something polished that actually works.",image:"/Ngo.png",
    technologies:["HTML","Javascript","CSS","AOS"],isRunning:"Running",githubUrl:"https://github.com/RISHIKARIR/Bastikipathshala.git",livelink:"https://ngo-bkp.netlify.app/",preview:"/Ngovideo.mp4"
},{title:"Mausam Vibhag Kendra",description:"Mausam Vibhag Kendra is a React-based weather app that includes icons from Material UI. Toggle between day/night vibes, watch the animated backgrounds change with the weather, and enjoy a smooth, responsive experience that actually looks good on any device.",image:"/Weather-Rainy.jpg",
    technologies:["React","CSS","Material UI"],isRunning:"Running",githubUrl:"https://github.com/RISHIKARIR/Weather-app.git",livelink:"https://mausamvibhagkendra.netlify.app/",preview:"/Weathervideo.mp4"}
  ,{title:"Spotify UI",description:"Recreated the Spotify vibe with a fully responsive UI using just HTML and CSS. Sleek layouts, smooth hover effects, and attention to detail make it feel like a mini Spotify experience without touching a single line of JavaScript. Looks clean on any screen and fun to explore.",image:"/spotify.jpg",
    technologies:["HTML","CSS"],isRunning:"Running",githubUrl:"https://github.com/RISHIKARIR/SPOTIFY.INTERFACE.git",livelink:"https://spotifyuidemo.netlify.app/",preview:"/spotifyvideo.mp4"}
]

const [showall,updateshow] = useState(false);

let showproject = showall ? Projectsdata : Projectsdata.slice(0,2);


return(
<>
<div data-aos="fade-up" className="ml-4 mt-4 md:ml-[20%] max-w-4xl">
<h1 className="text-base flex mt-4 md:text-xl font-bold text-white mb-6">Projects</h1>
</div>
{showproject.map((Project)=>{
return <Projectdisplay key = {null} title={Project.title}
description = {Project.description}
image = {Project.image}
technologies ={Project.technologies}
isRunning = {Project.isRunning}
githubUrl = {Project.githubUrl}
livelink = {Project.livelink}
preview = {Project.preview}
/>
})}

<div data-aos="fade-up" className="h-8 flex justify-self-center mt-4 border p-1 rounded bg-gray-900">
<button className="cursor-pointer flex"onClick={(()=>updateshow(!showall))}>{showall ? "Show Less":"Show All"}</button>
</div>
</>

)




}
