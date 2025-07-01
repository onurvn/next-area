"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { slideUpAnimation, fadeInAnimation } from "@/app/lib/animations";

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const mobileImgRef = useRef<HTMLDivElement>(null);
  const desktopImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      fadeInAnimation(textRef.current, { duration: 0.8, delay: 0.1 });
    }
    if (bgRef.current) {
      fadeInAnimation(bgRef.current, { duration: 1, delay: 0.2 });
    }
    if (mobileImgRef.current) {
      slideUpAnimation(mobileImgRef.current, {
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });
    }
    if (desktopImgRef.current) {
      slideUpAnimation(desktopImgRef.current, {
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div className="w-full h-[75vh] md:h-[90vh] py-4 flex flex-col items-start justify-center sm:gap-5 gap-12 pt-16 px-5 md:px-10">
      <h1
        ref={textRef}
        className="
                    w-full
                    text-[clamp(48px,12vw,160px)]
                    text-center
                    leading-[clamp(64px,10vw,136px)]
                    crimson-regular
                    mb-4
                    tracking-tighter
                    animate-fade-in-initial
                "
        style={{ opacity: 0 }}
      >
        Browse everything.
      </h1>
      <div className="w-full md:p-5 md:h-[60%] lg:h-full flex items-start justify-center relative overflow-hidden">
        {/* Mobile */}
        <div
          ref={mobileImgRef}
          className="w-75 md:hidden relative z-10 flex-shrink-0 -mx-20 animate-slide-up-initial"
          style={{ opacity: 0 }}
        >
          <Image
            src="/images/device/mobile.png"
            alt="Mobile mockup"
            width={600}
            height={800}
            priority
            className="w-full h-auto object-contain object-top"
          />
        </div>

        {/* Tablet, Desktop */}
        <div
          ref={desktopImgRef}
          className="hidden md:block relative z-10 animate-slide-up-initial"
          style={{ opacity: 0 }}
        >
          <Image
            src="/images/device/desktop.png"
            alt="Desktop mockup"
            width={800}
            height={600}
            priority
            className="w-full h-auto object-contain object-top"
          />
        </div>

        {/* Background Div */}
        <div
          ref={bgRef}
          className="z-0 absolute inset-x-0 bottom-0 h-[80%] md:min-h-[65%] w-full bg-matcha rounded-4xl animate-fade-in-initial"
          style={{ opacity: 0.5 }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
