import {motion} from "motion/react";
import {LiaGithub} from "react-icons/lia";
import {useState} from "react";
import {FaLink} from "react-icons/fa6";
import {FaEye, FaEyeSlash} from "react-icons/fa";


export default function Projectdisplay({title,description,image,technologies,isRunning,githubUrl,livelink,preview})
{
  const [isClick, setIsClick] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleEyeClick = (e) => {
    e.stopPropagation(); 
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <>
      <div data-aos="fade-up" className="ml-4 mt-4 md:ml-[20%] max-w-4xl">
        
        <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${
          isVideoOpen 
            ? 'max-h-screen opacity-100 mb-6' 
            : 'max-h-0 opacity-0 mb-0'
        }`}>
          <div className={`bg-black rounded-lg overflow-hidden shadow-lg transform transition-transform duration-1000 ${
            isVideoOpen ? 'translate-y-0' : '-translate-y-4'
          }`}>
            {preview && (
              <video
                className="w-full h-auto max-h-96 object-contain"
                controls
                autoPlay={isVideoOpen}
                muted
              >
                <source src={preview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>

        <div 
          className="card mt-4 w-full max-w-4xl p-6 rounded-lg bg-gray-900 cursor-pointer hover:bg-gray-800 transition-colors duration-200" 
          onClick={() => setIsClick(!isClick)}
        > 
          <div className="flex flex-col md:flex-row gap-6">  
            <div className="flex-shrink-0">
              <img 
                src={image} 
                alt="Portify project screenshot"
                className="rounded-lg w-full md:w-64 h-48 md:h-48 object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
                <motion.div 
                  className="inline-flex items-center px-2 bg-green-900 border border-green-500 rounded text-green-400 text-xs"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  {isRunning}
                </motion.div>
                <div className="relative group">
                  <a href={githubUrl}>
                  <LiaGithub className="text-2xl text-gray-400 hover:text-white transition-colors cursor-pointer"/>
                  </a>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-out pointer-events-none">
                    <div className="bg-white text-gray-900 text-sm font-medium px-2 py-1 rounded-lg shadow-lg whitespace-nowrap">
                      GitHub 
                    </div>          
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </div>
                <div className="relative group">
                  <a href={livelink}>
                {livelink && <FaLink className="text-2xl text-gray-400 hover:text-white transition-colors cursor-pointer"/>}
              </a>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-out pointer-events-none">
                    <div className="bg-white text-gray-900 text-sm font-medium px-2 py-1 rounded-lg shadow-lg whitespace-nowrap">
                     
                      Live
                      
                    </div>          
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
              </div>
  <div className="relative group">
                {preview && (
                  <div onClick={handleEyeClick}>
                    {isVideoOpen ? (
                      <FaEyeSlash className="text-2xl text-gray-400 hover:text-white transition-colors cursor-pointer"/>
                    ) : (
                      <FaEye className="text-2xl text-gray-400 hover:text-white transition-colors cursor-pointer"/>
                    )}
                  </div>
                )}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-out pointer-events-none">
                    <div className="bg-white text-gray-900 text-sm font-medium px-2 py-1 rounded-lg shadow-lg whitespace-nowrap">
                      Preview
                    </div>          
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
              </div>

</div>
            
              <p className="text-sm text-gray-300 md:text-lg ">
               {description}
              </p>
            </div>
          </div>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isClick ? 'max-h-24 mt-4' : 'max-h-0 mt-0'
          }`}>
            <div className="flex flex-wrap gap-2 pb-2">
              {technologies.map((tech,idx)=>{
              
             return <span key={idx} className="border border-gray-600 inline-flex text-xs px-2 py-1 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                {tech}
              </span>
              })}
                  </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className={`w-6 h-1 bg-gray-600 rounded transition-all duration-300 ${
              isClick ? 'rotate-180' : ''
            }`}>
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}