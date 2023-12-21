const timelineBTT6 = gsap.timeline({ paused: true });
const timelineBTT5 = gsap.timeline({ paused: true });


const hide1 = (item) => {
    gsap.set(item, { autoAlpha: 0 });
};

const animateBTT5 = (item, y) => {
    const timeline = gsap.timeline({ paused: true });

    timeline.fromTo(
        item,
        {
            autoAlpha: 1,
            y: y,
        },
        {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            overwrite: "auto",
            ease: "power2.inOut",
        }
    );

    return timeline;
};

const animateBTT6 = (item) => {
    if (!item.animation) {
        item.animation = timelineBTT6.fromTo(
            item,
            { x: -250, autoAlpha: 1 },
            { x: 0, autoAlpha: 1, duration: 1.2, overwrite: "auto", ease: "power2.inOut" }
        );
    }

    return item.animation;
};

window.addEventListener("resize", _.throttle(function () {
    gsap.utils.toArray(".BTT6").forEach((item) => {
        animateBTT6(item);
    });
}, 500));

gsap.utils.toArray(".reveal2").forEach((item) => {
    hide1(item);
    let animation;
    if (item.classList.contains("BTT5")) {
        animation = animateBTT5(item, 200);
    } else if (item.classList.contains("BTT6")) {
        animation = animateBTT6(item);
    }

    ScrollTrigger.create({
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        markers: true,
        onEnter: () => {
            animation.play();
        },
    });
});

