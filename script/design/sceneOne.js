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
            trigger: ".scroll-space",
            end: "+=100", // makin besar makin panjang area scroll
            scrub: true,
            pin: true,
        },
    });
    tl.from(".s1-notif:nth-child(-n+3)",
        {
            opacity: 0,
            scale: 0.5,
            duration: 0.5,
            stagger: 0.2,
        },
        ">"
    ); // muncul berurutan

}

function gsapExit(tl) {

}

//TODO: OTHER FUNCTION BELOW
