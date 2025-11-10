gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis();

lenis.on("scroll", () => {
  ScrollTrigger.update();
});

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) {
      lenis.scrollTo(value);
    } else {
      return lenis.scroll;
    }
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});
// ScrollSmoother.create({
//   wrapper: ".scroll-wrapper",
//   content: ".scroll-space",
//   smooth: 1.2, // higher = smoother
//   effects: true,
// });
