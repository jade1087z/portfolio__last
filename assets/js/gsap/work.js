const targets3 = gsap.utils.toArray(".sec3__split");
targets3.forEach(target => {
    let SplitClient = new SplitType(target, { type: "lines, words, chars" });
    let lines = SplitClient.lines;
    let words = SplitClient.words;
    let chars = SplitClient.chars;
})
gsap.set(".sec3__intro .line:nth-child(1) .char", { opacity: 0, y: 10, x: 10 });
gsap.set(".sec3__intro .line:nth-child(2) .char", { opacity: 0, y: 10, x: 10 });
gsap.set(".sec3__intro .line:nth-child(3) .char", { opacity: 0, y: 10, x: 10 });
// gsap.set(".sec3__intro .line:nth-child(4) .char", { opacity: 0, y: 10, x: 10 });
// gsap.set(".sec3__intro .sec3__split1 .char", { opacity: 0, y: 10, x: 10 });


gsap.utils.toArray(".sec3__split").forEach((item) => {
   
    let animation = gsap.to(item, { opacity: 1, duration: 1 });
    
    ScrollTrigger.create({
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        markers: true,
        onEnter: () => {
            animation.play();
            animation.eventCallback("onComplete", () => {
                let t2 = gsap.timeline();
                t2.to(".sec3__intro .line:nth-child(1) .char", { opacity: 1, y: 0, x: 0, stagger: 0.01, duration: 0.8, ease: "expo.out" }, "-=0.5");
                t2.to(".sec3__intro .line:nth-child(2) .char", { opacity: 1, y: 0, x: 0, stagger: 0.01, duration: 0.8, ease: "expo.out" }, "-=0.5");
                t2.to(".sec3__intro .line:nth-child(3) .char", { opacity: 1, y: 0, x: 0, stagger: 0.01, duration: 0.8, ease: "expo.out" }, "-=0.5");
                // t2.to(".sec3__intro .line:nth-child(4) .char", { opacity: 1, y: 0, x: 0, stagger: 0.01, duration: 0.8, ease: "expo.out" }, "-=0.5");
                // t2.to(".sec3__intro .sec3__split1 .char", { opacity: 1, y: 0, x: 0, stagger: 0.01, duration: 0.8, ease: "expo.out" }, "-=0.5");
            });
        },
    });
});





