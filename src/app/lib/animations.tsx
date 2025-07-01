import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}

const defaultConfig: AnimationConfig = {
  duration: 0.8,
  delay: 0,
  ease: "power2.out",
  stagger: 0.1,
};

export const slideUpAnimation = (
  elements: string | HTMLElement | HTMLElement[],
  config: AnimationConfig = {}
) => {
  const settings = { ...defaultConfig, ...config };

  gsap.fromTo(
    elements,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: settings.duration,
      delay: settings.delay,
      ease: settings.ease,
      stagger: settings.stagger,
    }
  );
};

export const fadeInAnimation = (
  elements: string | HTMLElement | HTMLElement[],
  config: AnimationConfig = {}
) => {
  const settings = { ...defaultConfig, ...config };

  gsap.fromTo(
    elements,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: settings.duration,
      delay: settings.delay,
      ease: settings.ease,
      stagger: settings.stagger,
    }
  );
};

export const slideInLeftAnimation = (
  elements: string | HTMLElement | HTMLElement[],
  config: AnimationConfig = {}
) => {
  const settings = { ...defaultConfig, ...config };

  gsap.fromTo(
    elements,
    {
      x: -100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: settings.duration,
      delay: settings.delay,
      ease: settings.ease,
      stagger: settings.stagger,
    }
  );
};

export const slideInRightAnimation = (
  elements: string | HTMLElement | HTMLElement[],
  config: AnimationConfig = {}
) => {
  const settings = { ...defaultConfig, ...config };

  gsap.fromTo(
    elements,
    {
      x: 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: settings.duration,
      delay: settings.delay,
      ease: settings.ease,
      stagger: settings.stagger,
    }
  );
};

export const scaleUpAnimation = (
  elements: string | HTMLElement | HTMLElement[],
  config: AnimationConfig = {}
) => {
  const settings = { ...defaultConfig, ...config };

  gsap.fromTo(
    elements,
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: settings.duration,
      delay: settings.delay,
      ease: settings.ease,
      stagger: settings.stagger,
    }
  );
};

export const rotateInAnimation = (
  elements: string | HTMLElement | HTMLElement[],
  config: AnimationConfig = {}
) => {
  const settings = { ...defaultConfig, ...config };

  gsap.fromTo(
    elements,
    {
      rotation: -10,
      scale: 0.9,
      opacity: 0,
    },
    {
      rotation: 0,
      scale: 1,
      opacity: 1,
      duration: settings.duration,
      delay: settings.delay,
      ease: settings.ease,
      stagger: settings.stagger,
    }
  );
};

export const typingAnimation = (
  element: string | HTMLElement,
  text: string,
  config: AnimationConfig = {}
) => {
  const settings = { ...defaultConfig, duration: 2, ...config };

  gsap.fromTo(
    element,
    {
      width: 0,
    },
    {
      width: "auto",
      duration: settings.duration,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(element, {
          borderRight: "2px solid transparent",
          duration: 0.5,
          repeat: -1,
          yoyo: true,
        });
      },
    }
  );
};

export const scrollTriggerAnimation = (
  elements: string | HTMLElement | HTMLElement[],
  animationType:
    | "slideUp"
    | "fadeIn"
    | "slideLeft"
    | "slideRight"
    | "scaleUp"
    | "rotateIn" = "slideUp",
  config: AnimationConfig = {}
) => {
  const settings = { ...defaultConfig, ...config };

  const animations = {
    slideUp: { y: 100, opacity: 0 },
    fadeIn: { opacity: 0 },
    slideLeft: { x: -100, opacity: 0 },
    slideRight: { x: 100, opacity: 0 },
    scaleUp: { scale: 0.8, opacity: 0 },
    rotateIn: { rotation: -10, scale: 0.9, opacity: 0 },
  };

  const endStates = {
    slideUp: { y: 0, opacity: 1 },
    fadeIn: { opacity: 1 },
    slideLeft: { x: 0, opacity: 1 },
    slideRight: { x: 0, opacity: 1 },
    scaleUp: { scale: 1, opacity: 1 },
    rotateIn: { rotation: 0, scale: 1, opacity: 1 },
  };

  gsap.fromTo(elements, animations[animationType], {
    ...endStates[animationType],
    duration: settings.duration,
    ease: settings.ease,
    stagger: settings.stagger,
    scrollTrigger: {
      trigger: elements,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
};

export const addHoverAnimation = (
  elements: string | HTMLElement | HTMLElement[],
  hoverType: "lift" | "scale" | "rotate" | "glow" = "lift"
) => {
  const elementList =
    typeof elements === "string"
      ? document.querySelectorAll(elements)
      : Array.isArray(elements)
      ? elements
      : [elements];

  elementList.forEach((element) => {
    if (!element) return;

    const handleMouseEnter = () => {
      switch (hoverType) {
        case "lift":
          gsap.to(element, {
            y: -10,
            duration: 0.3,
            ease: "power2.out",
          });
          break;
        case "scale":
          gsap.to(element, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
          break;
        case "rotate":
          gsap.to(element, {
            rotation: 5,
            duration: 0.3,
            ease: "power2.out",
          });
          break;
        case "glow":
          gsap.to(element, {
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            duration: 0.3,
            ease: "power2.out",
          });
          break;
      }
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        y: 0,
        scale: 1,
        rotation: 0,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
  });
};

export const pageTransitionIn = () => {
  gsap.fromTo(
    "main",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    }
  );
};

export const pageTransitionOut = (callback?: () => void) => {
  gsap.to("main", {
    opacity: 0,
    y: -50,
    duration: 0.4,
    ease: "power2.in",
    onComplete: callback,
  });
};

export const staggerCardsAnimation = (
  containerSelector: string,
  itemSelector: string = ".card",
  config: AnimationConfig = {}
) => {
  const settings = { ...defaultConfig, ...config };

  gsap.fromTo(
    `${containerSelector} ${itemSelector}`,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: settings.duration,
      ease: settings.ease,
      stagger: {
        amount: 0.6,
        from: "start",
      },
      scrollTrigger: {
        trigger: containerSelector,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const navbarAnimation = () => {
  gsap.fromTo(
    "nav",
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.2,
    }
  );

  gsap.fromTo(
    "nav a, nav button",
    {
      y: -20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.4,
    }
  );
};

export const heroAnimation = () => {
  const tl = gsap.timeline();

  tl.fromTo(
    ".hero-title",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
  )
    .fromTo(
      ".hero-subtitle",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(
      ".hero-cta",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );
};

export const initializeAnimationClasses = () => {
  const style = document.createElement("style");
  style.textContent = `
    .animate-slide-up-initial {
      transform: translateY(100px);
      opacity: 0;
    }
    
    .animate-fade-in-initial {
      opacity: 0;
    }
    
    .animate-slide-left-initial {
      transform: translateX(-100px);
      opacity: 0;
    }
    
    .animate-slide-right-initial {
      transform: translateX(100px);
      opacity: 0;
    }
    
    .animate-scale-up-initial {
      transform: scale(0.8);
      opacity: 0;
    }
    
    .animate-rotate-in-initial {
      transform: rotate(-10deg) scale(0.9);
      opacity: 0;
    }
  `;
  document.head.appendChild(style);
};
