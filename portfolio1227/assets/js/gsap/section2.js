    const timelineBTT6 = gsap.timeline({ paused: true });
    const timelineBTT5 = gsap.timeline({ paused: true });
    
    const tl = gsap.timeline({ paused: true });
    const targets2 = gsap.utils.toArray(".split2");
    targets2.forEach((target) => {
        let SplitClient = new SplitType(target, { type: "lines, words, chars" });
        let lines = SplitClient.lines;
        let words = SplitClient.words;
        let chars = SplitClient.chars;
    });

    gsap.set(".text__flex .right .first",{ opacity: 0, y: 100, x: 0 });
    gsap.set(".text__flex .right .split2 .line:nth-child(1) .char", { opacity: 0, y: 10, x: 0 });
    gsap.set(".text__flex .right .split2 .line:nth-child(2) .char", { opacity: 0, y: 10, x: 0 });
    gsap.set(".text__flex .right .split2 .line:nth-child(3) .char", { opacity: 0, y: 10, x: 0 });
    gsap.set(".text__flex .right .split2 .line:nth-child(4) .char", { opacity: 0, y: 10, x: 0 });
    gsap.set(".text__flex .right .split2 .line:nth-child(5) .char", { opacity: 0, y: 10, x: 0 });
    gsap.set(".text__flex .right .last",{ opacity: 0, y: 10, x: 0 });

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
        console.log('BTT5 animation created:', timeline);
        return timeline;
    };

    const animateBTT6 = (item) => {
        if (!item.animation) {
            item.animation = timelineBTT6.fromTo(
                item,
                { x: -250, autoAlpha: 1 },
                { x: 0, autoAlpha: 1, duration: 1.6, overwrite: "auto", ease: "power2.inOut" }
                )
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
                console.log('ScrollTrigger activated for item:', item);
                animation.play().then(() => {
                    console.log('Animation play ended for item:', item);
                    tl.to(".text__flex .right .first", {opacity: 1 ,y: -20, x: 0, stagger: 0, duration: 1, ease: "power2.inOut",},"-=0.5");
                    tl.to(".text__flex .right .split2 .line:nth-child(1) .char",{opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 1, ease: "power2.inOut",},"-=0.5");
                    tl.to(".text__flex .right .split2 .line:nth-child(2) .char",{opacity: 1, y: 0, x: 0, stagger: 0, duration: 1, ease: "power2.inOut",},"-=0.5");    
                    tl.to(".text__flex .right .split2 .line:nth-child(3) .char",{opacity: 1, y: 0, x: 0, stagger: 0, duration: 1, ease: "power2.inOut",},"-=0.5");    
                    tl.to(".text__flex .right .split2 .line:nth-child(4) .char",{opacity: 1, y: 0, x: 0, stagger: 0, duration: 1, ease: "power2.inOut",},"-=0.5");
                    tl.to(".text__flex .right .split2 .line:nth-child(5) .char",{opacity: 1, y: 0, x: 0, stagger: 0, duration: 1, ease: "power2.inOut",},"-=0.5");
                    tl.to(".text__flex .right .last", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 1, ease: "power2.inOut",},"-=0.5");
                    tl.play();
                })
                console.log(timelineBTT6);
            },
        });

        if (animation) {
            animation.pause();
        } else {
            console.error('No animation defined for item', item);
        }
    })