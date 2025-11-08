gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  content: ".scroll-space", 
  smooth: 1.2, // higher = smoother
  effects: true
});