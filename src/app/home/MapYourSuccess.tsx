"use client";

import Button from "@/app/components/Button";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  scrollTriggerAnimation,
  initializeAnimationClasses,
} from "@/app/lib/animations";

const MapYourSuccess = () => {
  useEffect(() => {
    initializeAnimationClasses();
    scrollTriggerAnimation(".mys-animate-on-scroll-up", "slideUp");
    scrollTriggerAnimation(".mys-animate-on-scroll-fade", "fadeIn");
    scrollTriggerAnimation(".mys-animate-on-scroll-left", "slideLeft");
    scrollTriggerAnimation(".mys-animate-on-scroll-right", "slideRight");
  }, []);

  const list_style =
    "w-[95%] md:w-[20%] h-fit flex flex-col items-start justify-center gap-4 mys-animate-on-scroll-up animate-slide-up-initial";
  const p_title = "crimson-regular text-lg";
  const p_class = "w-full dm-sans text-secondary-text";

  const listItems = [
    {
      number: "01",
      title: "Get Started",
      content: "With our intuitive setup, you’re up and running in minutes.",
    },
    {
      number: "02",
      title: "Customize and Configure",
      content: "Adapt Area to your specific requirements and preferences..",
    },
    {
      number: "03",
      title: "Grow Your Business",
      content: "Make informed decisions to exceed your goals.",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center flex-col gap-24 pb-12">
      <div
        id="how-to"
        className="min-w-[95%] h-fit flex flex-col md:flex-row gap-8 py-20 items-center md:items-center justify-center md:justify-between border-b border-line"
      >
        <h2 className="w-fit crimson-regular text-4xl sm:text-5xl md:text-6xl text-center md:text-left mys-animate-on-scroll-fade animate-fade-in-initial">
          Map Your Success
        </h2>
        <div className="flex justify-center md:justify-end w-full md:w-auto mys-animate-on-scroll-up animate-slide-up-initial">
          <Button text="Discover More" />
        </div>
      </div>

      <ul className="w-[95%] h-fit flex items-center justify-start flex-col md:flex-row gap-12 md:gap-48">
        {listItems.map((item, idx) => (
          <li className={list_style} key={idx}>
            <span className="text-7xl dm-sans text-thirdary-text">
              {item.number}
            </span>
            <p className={p_title}>{item.title}</p>
            <p className={p_class}>{item.content}</p>
          </li>
        ))}
      </ul>
      <div className="w-[95%] mt-8 mys-animate-on-scroll-up animate-slide-up-initial">
        <Image
          src="/images/mountain3.png"
          alt="Mountain image"
          width={1200}
          height={600}
          sizes="(max-width: 768px) 95vw, 95vw"
          className="w-full h-[400px] sm:h-[500px] md:h-auto object-cover rounded-lg md:rounded-4xl"
          priority={true}
        />
      </div>
    </div>
  );
};

export default MapYourSuccess;
