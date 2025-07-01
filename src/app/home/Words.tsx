"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  scrollTriggerAnimation,
  initializeAnimationClasses,
} from "@/app/lib/animations";

const Words = () => {
  useEffect(() => {
    initializeAnimationClasses();
    scrollTriggerAnimation(".words-animate-on-scroll-up", "slideUp");
    scrollTriggerAnimation(".words-animate-on-scroll-fade", "fadeIn");
  }, []);

  const list_style =
    "w-[95%] md:w-[20%] h-fit flex flex-col items-start justify-center gap-4 words-animate-on-scroll-up animate-slide-up-initial";
  const p_title = "crimson-regular text-lg";
  const p_class = "w-full dm-sans text-secondary-text";

  return (
    <div className="w-full h-fit flex flex-col items-center justify-center py-10 gap-12">
      {/* Existing list section */}
      <ul className="w-[95%] h-fit flex items-center justify-between flex-col md:flex-row gap-12 md:gap-0">
        <li className={list_style}>
          <Image
            loading="lazy"
            src={"/images/cable.png"}
            alt="insight image"
            width={30}
            height={30}
          />
          <p className={p_title}>Amplify Insight</p>
          <p className={p_class}>
            Unlock data-driven decisions with comprehensive analytics, revealing
            key opportunities for strategic regional growth.
          </p>
        </li>
        <li className={list_style}>
          <Image
            loading="lazy"
            src={"/images/globe.png"}
            alt="global image"
            width={30}
            height={30}
          />
          <p className={p_title}>Control Your Global Presence</p>
          <p className={p_class}>
            Manage and track satellite offices, ensuring consistent performance
            and streamlined operations everywhere.
          </p>
        </li>
        <li className={list_style}>
          <Image
            src={"/images/connect.png"}
            alt="language barrier image"
            width={30}
            height={30}
            loading="lazy"
          />
          <p className={p_title}>Remove Language Barriers</p>
          <p className={p_class}>
            Adapt to diverse markets with built-in localization for clear
            communication and enhanced user experience.
          </p>
        </li>
        <li className={list_style}>
          <Image
            loading="lazy"
            src={"/images/globe.png"}
            alt="growth image"
            width={30}
            height={30}
          />
          <p className={p_title}>Visualize Growth</p>
          <p className={p_class}>
            Generate precise, visually compelling reports that illustrate your
            growth trajectories across all regions.
          </p>
        </li>
      </ul>

      <div className="w-[95%] mt-8 words-animate-on-scroll-fade animate-fade-in-initial">
        <Image
          src="/images/mountain.png"
          alt="Mountain image"
          width={1200}
          height={600}
          sizes="(max-width: 768px) 95vw, 95vw"
          className="w-full h-[400px] sm:h-[500px] md:h-auto object-cover rounded-lg md:rounded-4xl"
          priority={false}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Words;
