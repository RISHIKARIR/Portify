import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


export default function Footer(){

return(
<>
<div>
<hr className=" md:ml-[20%] ml-4 md:max-w-4xl border border-gray-600 mt-10 mb-4" />
</div>

<div className="icons flex justify-self-center gap-6 sm:gap-10 flex-row">
<span><a className=" hover:text-gray-400" href="mailto:Parthkarir0@gmail.com"><MdEmail className="inline text-2xl md:text-3xl"/><span className="hidden sm:block">Mail</span></a></span>
<span><a className=" hover:text-gray-400" href="https://github.com/RISHIKARIR"><FaGithub className="inline text-2xl md:text-3xl"/><span className="hidden sm:block">Github</span></a></span>
<span><a className=" hover:text-gray-400" href="https://x.com/sus_rishi"><FaSquareXTwitter className="inline text-2xl md:text-3xl"/><span className="hidden sm:block">Twitter</span></a></span>
<span><a className=" hover:text-gray-400" href="https://www.linkedin.com/in/parth-b44295375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className="inline text-2xl md:text-3xl"/><span className="hidden sm:block">Linkedin</span></a></span>
<span><a className=" hover:text-gray-400" href="https://leetcode.com/u/Parthkarir/"><SiLeetcode className="inline text-2xl md:text-3xl"/><span className="hidden sm:block">Leetcode</span></a></span>
</div>
<p className=" flex justify-self-center ml-4 md:max-w-4xl mt-8 md:mb-16 mb-10">© 2025 Parth. All rights reserved.</p>
</>
)

}