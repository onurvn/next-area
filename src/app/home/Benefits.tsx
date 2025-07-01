"use client";

import React, { useEffect } from "react";
import { scrollTriggerAnimation } from "@/app/lib/animations";

const Benefits = () => {
  useEffect(() => {
    scrollTriggerAnimation(".animate-on-scroll-up", "slideUp");
  }, []);

  return (
    <div
      id="benefits"
      className="w-full flex flex-col items-center justify-center py-8"
    >
      <div className="w-[95%] border-y border-y-line flex flex-col items-start justify-center py-20 gap-12">
        <h2 className="roboto-mono text-xs animate-on-scroll-up">Benefits</h2>
        <h3 className="crimson-regular text-6xl animate-on-scroll-up">
          We’ve cracked the code.
        </h3>
        <p className="dm-sans text-md animate-on-scroll-up">
          Area provides real insights, without the data overload.
        </p>
      </div>
    </div>
  );
};

export default Benefits;
