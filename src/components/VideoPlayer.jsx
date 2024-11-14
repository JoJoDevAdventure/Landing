// components/VideoPlayer.jsx
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

const VideoPlayer = ({ src, thumbnailSrc, pressedClose, noTopBar}) => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let hasPlayed = false;

    const handleVideoPausePlay = (entries) => {
      if (entries[0].isIntersecting) {
        if (!hasPlayed) {
          hasPlayed = true;
          return;
        }
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    };

    const observer = new IntersectionObserver(handleVideoPausePlay, {
      threshold: 0.5,
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const enterFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        videoRef.current.pause();
        setIsPaused(true);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("msfullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className="relative w-full lg:max-w-full h-full rounded-lg shadow-500 border-[0.1px] border-p2/30 overflow-hidden">
      {/* Top Bar with macOS Style Buttons */}
      <div className={clsx("absolute top-0 left-0 w-full h-8 bg-gray-800 rounded-t-lg flex items-center px-6 z-20", noTopBar && "hidden")}>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={pressedClose}></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div
            className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"
            onClick={enterFullscreen}
          ></div>
        </div>
      </div>

      {/* Video Element */}
      <video ref={videoRef} src={src} className="w-full h-auto rounded-lg" />

      {/* Thumbnail and Play Button */}
      {isPaused && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg cursor-pointer z-10"
          onClick={togglePlay}
        >
          <img
            src={thumbnailSrc}
            alt="Video Thumbnail"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex justify-center items-end mb-6 ">
            <div className="w-16 h-16 bg-s2 rounded-full flex items-center justify-center shadow-300 hover:shadow-500">
              <img src="/images/triangle.svg" className="flex rotate-90" />
            </div>
          </div>
        </div>
      )}

      {/* Pause Button when Video is Playing */}
      {!isPaused && (
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 bg-opacity-75 rounded-full p-3 cursor-pointer z-20"
          onClick={togglePlay}
        >
          <img src="/images/pause.svg" alt="Pause Icon" className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;