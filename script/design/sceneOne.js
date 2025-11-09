// TODO: VARIABLE FOR EXIT REPEAT ANIMATION

// TODO: VARIABLE FOR DOM
const sectionOne = document.querySelector(".section-one");
const notifImage = document.querySelectorAll(".s1-notif")
// const sectionTwo =


export function sceneOne(tl) {
    notifImage.forEach((notif) => notif.style.opacity = 0)
    gsapEntry(tl)
    gsapExit(tl)
}

function gsapEntry(tl) {
    tl = gsap.timeline()
    tl.fromTo(".s1-hand", {
        y: "200vh",
        opacity: 1,
    }, {
        y: 0,
        duration: 1
    });

    //? FIRST APPEARANCE
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".div-s1",      // element to watch
            scroller: ".scroll-wraper",
            start: "center center",
            end: "+=1000",
            scrub: true,          // makes it smooth + tied to scroll
            markers: true         // show start/end markers (for debugging)
        },
    })
    tl.to(".s1-notif:nth-child(-n+3)",
        {
            opacity: 1,
            scale: 0.5,
            duration: 1,
            stagger: 0.2,
        }
    ).to(".s1-hand", {
        rotate: 40,
        duration: 1
    }, "<");
}

function gsapExit(tl) {

}

//TODO: OTHER FUNCTION BELOW
