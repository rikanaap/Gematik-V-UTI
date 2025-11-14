export function createTimeline(options = { scroll: false,  trigger: null, start: "center center", end: "+=1000",scrub: true,markers: true, snap: {} }) {
    const {
        scroll = false,   // 👈 use this flag to enable scrollTrigger
        trigger = null,   // 👈 element selector if scrollTrigger is used
        start = "center center",
        end = "+=1000",
        scrub = true,
        markers = true,
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
                markers,
                snap
            },
        }),
        ...rest, // merge other timeline options (e.g.
    })
}