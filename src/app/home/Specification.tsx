"use client";

import React, { useEffect } from "react";
import SpecificationList from "@/app/components/SpecificationList";
import Image from "next/image";
import Button from "@/app/components/Button";
import {
  scrollTriggerAnimation,
  initializeAnimationClasses,
} from "@/app/lib/animations";

const Specification = () => {
  useEffect(() => {
    initializeAnimationClasses();
    scrollTriggerAnimation(".animate-on-scroll-up", "slideUp");
    scrollTriggerAnimation(".animate-on-scroll-fade", "fadeIn");
    scrollTriggerAnimation(".animate-on-scroll-left", "slideLeft");
    scrollTriggerAnimation(".animate-on-scroll-right", "slideRight");
  }, []);

  return (
    <div
      id="specification"
      className="w-full flex flex-col items-center justify-center"
    >
      <div className="w-[95%] h-full items-center justify-center flex flex-col gap-10 border-y border-line md:pt-24 py-10">
        <h2 className="roboto-mono text-sm text-footer-text animate-on-scroll-fade animate-fade-in-initial">
          Specs
        </h2>
        <h3 className="crimson-regular text-6xl animate-on-scroll-up animate-slide-up-initial">
          Why Choose Area?
        </h3>
        <p className="dm-sans text-secondary-text text-md text-center animate-on-scroll-up animate-slide-up-initial">
          You need a solution that keeps up. That&apos;s why we developed Area.
          A developer-friendly approach to streamline your business.
        </p>
        <div className="animate-on-scroll-up animate-slide-up-initial">
          <Button text="Discover More" />
        </div>
        <br />

        {/* List of specification - Horizontal scroll on mobile */}
        <div className="w-full flex items-center justify-center animate-on-scroll-up animate-slide-up-initial">
          {/* Desktop: flex layout, Mobile: horizontal scroll */}
          <div className="w-full md:w-auto flex md:justify-center overflow-x-auto pb-4">
            <div className="flex md:flex-row gap-0 min-w-max md:min-w-0">
              <div className="border border-line rounded-l-lg md:rounded-lg w-80 md:w-[300px] lg:w-[350px] shadow-md flex-shrink-0 animate-on-scroll-left animate-slide-left-initial">
                <h4 className="text-center dm-sans font-medium text-2xl border-b border-thirdary-text py-8">
                  Area
                </h4>
                <SpecificationList benefit="Ultra-fast browsing" />
                <SpecificationList benefit="Advanced AI insights" />
                <SpecificationList benefit="Seamless integration" />
                <SpecificationList benefit="Advanced AI insights" />
                <SpecificationList benefit="Ultra-fast browsing" />
                <SpecificationList benefit="Full UTF-8 support" />
              </div>
              <div className="w-80 md:w-[300px] lg:w-[350px] border-r border-t border-b border-line flex-shrink-0 animate-on-scroll-up animate-slide-up-initial">
                <h4 className="text-center dm-sans font-medium text-2xl border-b border-thirdary-text py-8">
                  Area Pro
                </h4>
                <SpecificationList benefit="Priority customer support" />
                <SpecificationList benefit="Customizable dashboards" />
                <SpecificationList benefit="Team collaboration tools" />
                <SpecificationList benefit="Advanced security features" />
                <SpecificationList benefit="Extended API access" />
                <SpecificationList benefit="Full UTF-8 support" />
              </div>
              <div className="w-80 md:w-[300px] lg:w-[350px] border border-line rounded-r-lg md:rounded-lg md:border-l-0 flex-shrink-0 animate-on-scroll-right animate-slide-right-initial">
                <h4 className="text-center dm-sans font-medium text-2xl border-b border-thirdary-text py-8">
                  Area Enterprise
                </h4>
                <SpecificationList benefit="Dedicated account manager" />
                <SpecificationList benefit="Enterprise-grade security" />
                <SpecificationList benefit="Custom integrations" />
                <SpecificationList benefit="Advanced analytics & reporting" />
                <SpecificationList benefit="SLA & compliance support" />
                <SpecificationList benefit="Full UTF-8 support" />
              </div>
            </div>
          </div>
        </div>

        <br />

        {/* Fixed image section with proper mobile responsiveness */}
        <div className="w-full flex flex-col md:flex-row items-stretch gap-8">
          {/* Image container with fixed aspect ratio */}
          <div className="w-full md:w-[50%] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[750px] relative animate-on-scroll-left animate-slide-left-initial">
            <Image
              src="/images/idk1.png"
              alt="Specs image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg md:rounded-4xl"
              priority={false}
              loading="lazy"
            />
          </div>

          {/* Content section */}
          <div className="w-full md:w-[50%] flex flex-col items-start justify-center md:justify-start gap-6 md:gap-12 px-4 md:px-0 animate-on-scroll-right animate-slide-right-initial">
            <div className="w-full h-[1px] bg-line"></div>
            <p className="crimson-regular text-2xl sm:text-3xl md:text-4xl leading-relaxed md:px-10 md:pt-24">
              &quot;I was skeptical, but Area has completely transformed the way
              I manage my business. The data visualizations are so clear and
              intuitive, and the platform is so easy to use. I can&apos;t
              imagine running my company without it.&quot;
            </p>
            <div className="flex flex-col gap-2 md:px-10">
              <p className="dm-sans text-md">John Smith</p>
              <p className="roboto-mono text-sm text-gray-600">Head of Data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specification;
