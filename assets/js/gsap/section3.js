const timelineBTT7 = gsap.timeline({ paused: true });
const timelineBTT8 = gsap.timeline({ paused: true });


const hide3 = (item) => {
    gsap.set(item, { autoAlpha: 0 });
};

const animateBTT7_9 = (item, y) => {
    const timeline = gsap.timeline({ paused: true,
        onComplete: () => {
            if(item.nextElementSibling && item.nextElementSibling.classList.contains('BTT8')) {
                animateBTT8(item.nextElementSibling).play();
            }
        } });

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

    if (item.classList.contains("BTT9")) {
        timeline.fromTo(
            item,
            {
                x: 0,
            },
            {
                x: 13 + "vw",
                duration: 1,
                overwrite: "auto",
                ease: "power2.inOut",
            }
        );
    }

    return timeline;
};

const animateBTT8 = (item) => {
    if (!item.animation) {
        item.animation = timelineBTT8.fromTo(
            item,
            { x: -250, autoAlpha: 1 },
            { x: 0, autoAlpha: 1, duration: 1, overwrite: "auto", ease: "power2.inOut" }
        );
    }

    return item.animation;
};

window.addEventListener("resize", _.throttle(function () {
    gsap.utils.toArray(".BTT8").forEach((item) => {
        animateBTT8(item);
    });
    gsap.utils.toArray(".BTT9").forEach((item) => {
        animateBTT8(item);
    });
}, 500));

gsap.utils.toArray(".reveal3").forEach((item) => {
    hide3(item);
    let animation;
    if (item.classList.contains("BTT7") || item.classList.contains("BTT9")) {
        animation = animateBTT7_9(item, 200);
    } else if (item.classList.contains("BTT8")) {
        animation = animateBTT8(item);
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

