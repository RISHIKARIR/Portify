import { useState, useRef, useEffect } from "react";
import { FaForwardStep } from "react-icons/fa6";
import { FaBackwardStep } from "react-icons/fa6";
import { FaShuffle } from "react-icons/fa6";
import { FaRepeat } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { MdMusicOff } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";

export default function Music(){
  const tracks = [ 
    {
      title: 'The Night We met',
      artist: 'Lord Huron',
      src: '/thenightwemet.mp3',
      albumArt: '/thenightwemet.jpg'
    },
     {
      title: 'Little Dark Age',
      artist: 'MGMT',
      src: '/littledarkage.mp3',
      albumArt: '/MGMT.jpg'
    },
    {
      title: 'The Winner Takes it All',
      artist: 'ABBA',
      src: '/winnertakesitall.mp3',
      albumArt: '/winner.jpg'
    },
    {
      title: 'Beanie',
      artist: 'Chezile',
      src: '/beanie.mp3',
      albumArt: '/beaniee.jpg'
    },
    {
      title: 'No. 1 Party Anthem',
      artist: 'Arctic Monkeys',
      src: '/no1partyanthem.mp3',
      albumArt: '/AM.jpg'
    },
    {
      title: 'Chamber Of Reflection',
      artist: 'Mac DeMarco',
      src: '/chamberofreflection.mp3',
      albumArt: '/cor.jpg'
    },
    {
      title: 'K',
      artist: 'Cigerattes After sex',
      src: '/k-spedup.mp3',
      albumArt: '/k-cas.jpg'
    },
    
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  
  const audioRef = useRef(null);
  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => {
        if (isRepeating) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        } else if (isShuffled) {
          const newIndex = Math.floor(Math.random() * tracks.length);
          setCurrentTrackIndex(newIndex);
        } else {
          skipTrackHandler(1);
        }
      };
    }
  }, [isRepeating, isShuffled, currentTrackIndex]);

  const playPauseHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const skipTrackHandler = (direction) => {
    let newIndex;
    if (isShuffled && direction > 0) {
      newIndex = Math.floor(Math.random() * tracks.length);
    } else {
      newIndex = (currentTrackIndex + direction + tracks.length) % tracks.length;
    }
    setCurrentTrackIndex(newIndex);
    setIsPlaying(true);
  };

  const onTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    if (duration > 0) {
      setProgress((currentTime / duration) * 100);
    }
  };

  const onProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
    setProgress(newProgress);
  };
  
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.volume = isMuted ? volume : 0;
  };

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
<>
<div className="mt-10 font-sans md:text-lg font-semibold ml-4 
md:ml-[20%] max-w-4xl">

And here a little extra I added just for fun.I built this music player(Music paglu)
While you are exploring my site,
you can also check out a few tracks of my choice.
Think of it as a mini playlist Give them a listen and 
let me know if i have a decent music taste.
</div>



    <div data-aos="fade-up" className=" md:ml-[15%] ml-4 md:max-w-5xl bg-zinc-900 mt-10 text-white p-2 sm:p-4 lg:p-6 flex flex-col items-center justify-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center px-4">Music Paglu</h1>
      
      <div className="bg-[url('/public/bgimg.jpg')] bg-cover bg-center rounded-xl p-4 sm:p-6 lg:p-8 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl shadow-2xl">
        
        {/* Mobile Layout (Stacked) */}
        <div className="block md:hidden space-y-6">
          {/* Album Art - Centered on Mobile */}
          <div className="flex justify-center">
            <img 
              src={currentTrack.albumArt} 
              alt={`${currentTrack.title} album art`}
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-xl shadow-lg object-cover"
            />
          </div>
          
          {/* Track Info - Centered on Mobile */}
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-white truncate px-4">{currentTrack.title}</h2>
            <p className="text-base sm:text-lg text-gray-400">{currentTrack.artist}</p>
          </div>
          
          {/* Progress Bar - Mobile */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-400 px-2">
              <span>{formatTime(audioRef.current?.currentTime)}</span>
              <span>{formatTime(audioRef.current?.duration)}</span>
            </div>
            <input 
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progress}
              onChange={onProgressChange}
              className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:hover:scale-125"
              style={{
                background: `linear-gradient(to right, #10b981 ${progress}%, #4b5563 ${progress}%)`
              }}
            />
          </div>
          
          {/* Main Controls - Mobile */}
          <div className="flex items-center justify-center  sm:gap-6">
            <button 
              onClick={() => setIsShuffled(!isShuffled)}
              className={`text-gray-400 hover:text-white transition-colors duration-200 p-2 ${isShuffled ? 'text-green-500' : ''}`}
              title="Shuffle"
            >
              <FaShuffle className="text-xl sm:text-2xl"/>
            </button>
            
            <button 
              onClick={() => skipTrackHandler(-1)}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
              title="Previous"
            >
              <FaBackwardStep className="text-xl sm:text-2xl"/>
            </button>
            
            <button
              onClick={playPauseHandler}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <FaPause className="text-xl sm:text-2xl"/>
              ) : (
                <FaPlay className="text-xl sm:text-2xl ml-1"/>
              )}
            </button>
            
            <button
              onClick={() => skipTrackHandler(1)}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
              title="Next"
            >
              <FaForwardStep className="text-xl sm:text-2xl"/>
            </button>
            
            <button
              onClick={() => setIsRepeating(!isRepeating)}
              className={`text-gray-400 hover:text-white transition-colors duration-200 p-2 ${isRepeating ? 'text-green-500' : ''}`}
              title="Repeat"
            >
              <FaRepeat className="text-xl sm:text-2xl"/>
            </button>
          </div>
          
          {/* Volume Control - Mobile */}
          <div className="flex items-center justify-center gap-3 px-4">
            <button 
              onClick={toggleMute} 
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
            >
              {isMuted || volume === 0 ? (
                <MdMusicOff className="text-xl"/>
              ) : (
                <MdMusicNote className="text-xl"/>
              )}
            </button>
            <input 
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="flex-1 max-w-32 h-2 bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full"
            />
          </div>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="hidden md:block">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            
            {/* Album Art and Track Info - Desktop */}
            <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto lg:min-w-0 lg:flex-shrink-0">
              <img 
                src={currentTrack.albumArt} 
                alt={`${currentTrack.title} album art`}
                className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-xl shadow-lg object-cover"
              />
              <div className="text-center md:text-left min-w-0">
                <h2 className="text-lg lg:text-xl xl:text-2xl font-semibold text-white truncate max-w-48 lg:max-w-56">{currentTrack.title}</h2>
                <p className="text-sm lg:text-base text-gray-400 truncate">{currentTrack.artist}</p>
              </div>
            </div>
            
            {/* Main Controls and Progress - Desktop */}
            <div className="flex-1 flex flex-col items-center space-y-4 lg:space-y-6 w-full lg:max-w-none">
              <div className="flex items-center justify-center gap-4 lg:gap-6 xl:gap-8">
                <button 
                  onClick={() => setIsShuffled(!isShuffled)}
                  className={`text-gray-400 hover:text-white transition-colors duration-200 p-2 ${isShuffled ? 'text-green-500' : ''}`}
                  title="Shuffle"
                >
                  <FaShuffle className="text-lg lg:text-xl xl:text-2xl"/>
                </button>
                
                <button 
                  onClick={() => skipTrackHandler(-1)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
                  title="Previous"
                >
                  <FaBackwardStep className="text-lg lg:text-xl xl:text-2xl"/>
                </button>
                
                <button
                  onClick={playPauseHandler}
                  className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <FaPause className="text-lg lg:text-xl xl:text-2xl"/>
                  ) : (
                    <FaPlay className="text-lg lg:text-xl xl:text-2xl ml-1"/>
                  )}
                </button>
                
                <button
                  onClick={() => skipTrackHandler(1)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
                  title="Next"
                >
                  <FaForwardStep className="text-lg lg:text-xl xl:text-2xl"/>
                </button>
                
                <button
                  onClick={() => setIsRepeating(!isRepeating)}
                  className={`text-gray-400 hover:text-white transition-colors duration-200 p-2 ${isRepeating ? 'text-green-500' : ''}`}
                  title="Repeat"
                >
                  <FaRepeat className="text-lg lg:text-xl xl:text-2xl"/>
                </button>
              </div>
              
              {/* Progress Bar - Desktop */}
              <div className="w-full flex items-center gap-3">
                <span className="text-xs text-gray-400 w-10 text-right">{formatTime(audioRef.current?.currentTime)}</span>
                <input 
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={progress}
                  onChange={onProgressChange}
                  className="flex-1 h-1 lg:h-2 bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 lg:[&::-webkit-slider-thumb]:h-4 lg:[&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:hover:scale-125"
                  style={{
                    background: `linear-gradient(to right, #10b981 ${progress}%, #4b5563 ${progress}%)`
                  }}
                />
                <span className="text-xs text-gray-400 w-10">{formatTime(audioRef.current?.duration)}</span>
              </div>
            </div>
            
            {/* Volume Control - Desktop */}
            <div className="flex items-center gap-3 lg:gap-4 w-full lg:w-auto justify-center lg:justify-end lg:min-w-0 lg:flex-shrink-0">
              <button 
                onClick={toggleMute} 
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
              >
                {isMuted || volume === 0 ? (
                  <MdMusicOff className="text-lg lg:text-xl"/>
                ) : (
                  <MdMusicNote className="text-lg lg:text-xl"/>
                )}
              </button>
              <input 
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-20 lg:w-24 xl:w-28 h-1 lg:h-2 bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 lg:[&::-webkit-slider-thumb]:h-4 lg:[&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={onTimeUpdate}/>
    </div>
    
  </>
  );
}