import React, { useState, useEffect } from "react";
import { large, small, middle } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth <= 1024 ? (window.innerWidth < 760 ? small : middle) : large
  );

  const resizeHandler = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(small);
    } else if(window.innerWidth<=1024){
      setVideoSrc(middle);
    }
    else{
      setVideoSrc(large);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <section
      className="h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${videoSrc})` }}
    >
      <div className="absolute inset-0 flex justify-center items-center flex-col bg-black bg-opacity-50">
        <h2 className="text-white text-5xl mb-4 text-center">
          Welcome to
        </h2>
        <h2 className="text-white text-5xl text-center">CodeZero</h2>
        <img src="/utils/robohi.jpg" alt="robot" className="h-44 relative top-20"/>
      </div>
    </section>
  );
};

export default Hero;
