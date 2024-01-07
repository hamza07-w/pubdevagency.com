import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [isUnmounting, setIsUnmounting] = useState(false);

  useEffect(() => {
    const animation = anime.timeline({ loop: true }).add({
      targets: '.ml15 .word',
      scale: [14, 1],
      opacity: [0, 1],
      easing: 'easeOutCirc',
      duration: 800,
      delay: (el, i) => 800 * i,
    }).add({
      targets: '.ml15',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1000,
      complete: () => {
        setIsUnmounting(true); // Animation completed, trigger unmounting
      },
    });

    return () => {
      animation.pause();
    };
  }, []);

  useEffect(() => {
    if (isUnmounting) {
      // Delay before actually unmounting the component (adjust the value as needed)
      const unmountDelay = 1000; // 1 second

      const unmountTimeout = setTimeout(() => {
        setIsUnmounting(false);
      }, unmountDelay);

      return () => {
        clearTimeout(unmountTimeout);
      };
    }
  }, [isUnmounting]);

  return (
    <>
      {isUnmounting ? null : (
        <div dir="ltr" className="bg-slate-950 flex flex-col justify-center items-center text-center h-screen overflow-hidden">
          <h1 className="ml15 logo text-white md:text-9xl text-7xl">
            <span className="word">pub</span>
            <span className="word text-blue-700">dev</span>
          </h1>
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
