// === AUTO SCROLL ===
export let autoScrollActive = false;
let autoScrollSpeed = 5;
let autoScrollInterval = null;

let autoBackActive = false;
let autoBackInterval = null;

const cursor = document.getElementById("cursor");
const panel = document.getElementById("control-panel");
const wrapper = document.getElementById("control-wrapper");
const indicator = document.getElementById("indicator");
const autoScrollBtn = document.getElementById("autoScrollBtn");
const musicButton = document.getElementById("music")
const bgMusic = document.getElementById("bgMusic");
const backBtn = document.getElementById("backBtn");
const alertBox = document.getElementById("alertBox");

export function createTimeline(options = { scroll: false, trigger: null, start: "center center", end: "+=1000", scrub: true, markers: true, snap: {} }) {
    const {
        scroll = false,   // 👈 use this flag to enable scrollTrigger
        trigger = null,   // 👈 element selector if scrollTrigger is used
        start = "center center",
        end = "+=1000",
        scrub = true,
        snap = {},
        ...rest            // 👈 catch any other GSAP timeline config (like defaults)
    } = options;

    // 🎯 if scroll is true, attach scrollTrigger
    return gsap.timeline({
        ...(scroll && {
            scrollTrigger: {
                trigger,
                start,
                end,
                scrub,
                snap
            },
        }),
        ...rest, // merge other timeline options (e.g.
    })
}

function startAutoScroll() {
    autoScrollBtn.innerText = "Auto Scroll";
    autoScrollBtn.classList.remove("bg-gray]-400");
    autoScrollBtn.classList.add("bg-purple-500");
    document.querySelectorAll(".speedBtn").forEach(b => b.classList.remove("bg-purple-300"));
    document.querySelector(".speedBtn, .play-1").classList.add("bg-purple-500");
    gsap.to(".grid-auto-scroll", { opacity: 1 })
    autoScrollInterval = setInterval(() => {
        window.scrollBy(0, autoScrollSpeed);
    }, 10);
}

function startBackScroll() {
    autoBackInterval = setInterval(() => {
        if (window.scrollY <= 0) {
            clearInterval(autoBackInterval);
            autoBackInterval = null;
            autoBackActive = !autoBackActive;
            stopBackScroll();
            return;
        }
        window.scrollBy(0, -5 * 10);
    }, 10);
}

export function stopAutoScroll() {
    clearInterval(autoScrollInterval);
    autoScrollBtn.innerText = "Auto Scroll";
    autoScrollBtn.classList.remove("bg-purple-500");
    autoScrollBtn.classList.add("bg-gray-400");
    document.querySelectorAll(".speedBtn").forEach(b => b.classList.remove("bg-purple-500"));
    gsap.to(".grid-auto-scroll", { opacity: 0 })
}

function stopBackScroll() {
    clearInterval(autoBackInterval);
    backBtn.innerText = "Back";
    backBtn.classList.remove("bg-purple-500");
    backBtn.classList.add("bg-red-400");

}

// SHOW saat hover indicator / wrapper
export function showPanel() {
    gsap.to(panel, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power3.out",
        pointerEvents: "auto"
    });
}

// HIDE saat mouse keluar area wrapper
function hidePanel() {
    gsap.to(panel, {
        opacity: 0,
        y: 20,
        duration: 0.35,
        ease: "power3.in",
        pointerEvents: "none"
    });
}

function getZoomLevel() {
    return Math.round(window.devicePixelRatio * 100);
}

function checkZoom() {
    const zoom = getZoomLevel();
    if (zoom !== 100) {
        showAlert()
    }
}

function showAlert() {
    gsap.timeline()
        .set(alertBox, { pointerEvents: "auto" })
        .to(alertBox, {
            opacity: 1,
            scale: 1,
            duration: 0.45,
            ease: "back.out(1.7)"
        })
        .to(alertBox, {
            opacity: 1,
            duration: 2
        })
        .to(alertBox, {
            opacity: 0,
            scale: 0.75,
            duration: 0.4,
            ease: "back.in(1.7)",
            onComplete: () => {
                alertBox.style.pointerEvents = "none";
            }
        });
};

let musicPlayed = false
export function playMusic() {

    musicPlayed = !musicPlayed
    if (musicPlayed) {
        bgMusic.play().catch((err) => { playMusic() })
        musicButton.innerText = "Pause"
        musicButton.classList.add("bg-purple-500")
    } else {
        bgMusic.pause()
        musicButton.innerText = "Play"
        musicButton.classList.remove("bg-purple-500")
    }
}

export function addOn() {
    // === BACK BUTTON ===
    musicButton.onclick = () => playMusic()
    backBtn.onclick = () => {
        autoBackActive = !autoBackActive;
        if (autoBackActive) {
            startBackScroll()
            if (autoScrollActive) {
                stopAutoScroll();
                autoScrollBtn.innerText = "Auto Scroll";
                autoScrollBtn.classList.remove("bg-purple-500");
                autoScrollBtn.classList.add("bg-purple-400");
                document.querySelectorAll(".speedBtn").forEach(b => b.classList.remove("bg-purple-300"));
            }

            backBtn.classList.remove("bg-red-400");
            backBtn.classList.add("bg-purple-500");
        } else stopBackScroll()
    };

    autoScrollBtn.onclick = () => {
        autoScrollActive = !autoScrollActive;

        if (autoScrollActive) {
            startAutoScroll();

        } else {
            stopAutoScroll();
        }
    };

    // === SPEED CONTROL (faster speed) ===
    document.querySelectorAll(".speedBtn").forEach(btn => {
        btn.onclick = () => {
            autoScrollSpeed = Number(btn.dataset.speed) * 10;

            if (autoScrollActive) {
                stopAutoScroll();
                startAutoScroll();
            }

            // reset all buttons
            document.querySelectorAll(".speedBtn")
                .forEach(b => b.classList.remove("bg-purple-500"));

            // highlight selected
            btn.classList.add("bg-purple-500");
        };
    });


    document.addEventListener("mousemove", e => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    // hide awal
    gsap.set(panel, {
        opacity: 0,
        y: 20,
        pointerEvents: "none"
    });

    indicator.addEventListener("mouseenter", showPanel);
    wrapper.addEventListener("mouseleave", hidePanel);
    window.addEventListener("resize", checkZoom);

    checkZoom();


    window.onload = showAlert;
}