export function loadingScreen() {
    gsapEntry()

    gsapExit()
}

function gsapEntry() {
    gsap.to(".circle", {
        y: -20,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    fadeScreen()
}

function gsapExit() {

}

//TODO: OTHER FUNCTION BELOW
function fadeScreen() {
    setTimeout(() => {
        const tl = gsap.timeline();

        tl.to(".loader", {
            opacity: 0,
            duration: 0.6,
            ease: "power1.out"
        })
            .set(".loader", { display: "none" }) // hide completely
            .to(".content", {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            });
    }, 100); // fake loading time (2.5s)
}