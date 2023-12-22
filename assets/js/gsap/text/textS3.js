const targets3 = gsap.utils.toArray(".split3");
targets3.forEach((target) => {
    let SplitClient = new SplitType(target, { type: "lines, words, chars" });
    let lines = SplitClient.lines;
    let words = SplitClient.words;
    let chars = SplitClient.chars;
});

gsap.set(".sec3__intro .first ", { opacity: 0, y: 10, x: 0 });
gsap.set(".split3 .line:nth-child(1) .char", { opacity: 0, y: 10, x: 0 });
gsap.set(".split3 .line:nth-child(2) .char", { opacity: 0, y: 10, x: 0 });
gsap.set(".split3 .line:nth-child(3) .char", { opacity: 0, y: 10, x: 0 });
gsap.set(".sec3__intro .last ", { opacity: 0, y: 10, x: 0 });

let tl2 = gsap.timeline({
    scrollTrigger: {
        // 트리거 설정
        trigger: ".split3",
        // 애니메이션 시작 조건 설정
        start: "top +=700", // viewport의 중앙에 도달하면 시작
        end: "bottom top",
        markers: true,
        onEnter: () => {
            tl2.play();
        },
    },
    paused: true,
});

tl2.to(".sec3__intro .first ", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");
tl2.to(".split3 .line:nth-child(1) .char",{opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");
tl2.to(".split3 .line:nth-child(2) .char",{opacity: 1, y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");    
tl2.to(".split3 .line:nth-child(3) .char",{opacity: 1, y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");    
tl2.to(".sec3__intro .last ", {opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");

