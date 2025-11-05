export function sceneOne(tl) {
    gsapEntry(tl)

    gsapExit(tl)
}

function gsapEntry(tl) {
    gsap.set(".notification img", {
        y: "-=50",
        opacity: 0
    });
    notifiSetup(tl);

    gsap.to(".box", {
        scrollTrigger: {
            trigger: ".box",      // element to watch
            start: "top center",  // when box hits center of viewport
            end: "bottom top",    // when box leaves viewport
            scrub: 1,          // makes it smooth + tied to scroll
            markers: true         // show start/end markers (for debugging)
        },
        x: 300,  // move to the right by 50% of the viewport width
        rotation: 360,
        backgroundColor: "#e74c3c",
        ease: "none"
    });
    
    gsap.to(".box2", {
        x: "+=0.5",
        y: "+=1",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
    
}

function gsapExit(tl) {

}

//TODO: OTHER FUNCTION BELOW
function notifiSetup(tl) {
    tl.to(".notification img:nth-child(3)", {
        y: 2,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(0)"
    })
        .to(".notification img:nth-child(2)", {
            y: 1, // match your CSS offset
            opacity: 1,
            duration: 0.5,
            ease: "back.out(0)"
        }, '-=0.4') // overlap slightly
        .to(".notification img:nth-child(1)", {
            y: 0, // topmost layer
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)"
        }, "-=0.6");

    const imgs = document.querySelectorAll(".notification img");
    imgs.forEach(img => {
        let hoverAnim;

        img.addEventListener("mouseenter", () => {
            if(hoverAnim && hoverAnim.isActive()) return;
            hoverAnim = gsap.to(".notification img", {
                x: "+=0.5",
                y: "+=1",
                duration: 0.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        });

        img.addEventListener("mouseleave", () => { if (hoverAnim) hoverAnim.kill(); });
    });
}
