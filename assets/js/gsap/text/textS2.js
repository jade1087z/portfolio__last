const targets2 = gsap.utils.toArray(".split1");
targets2.forEach((target) => {
    let SplitClient = new SplitType(target, { type: "lines, words, chars" });
    let lines = SplitClient.lines;
    let words = SplitClient.words;
    let chars = SplitClient.chars;
});

gsap.set(".text__flex .right .split1 .line:nth-child(1) .char", { opacity: 0, y: 10, x: 0 });
gsap.set(".text__flex .right .split1 .line:nth-child(2) .char", { opacity: 0, y: 10, x: 0 });
gsap.set(".text__flex .right .split1 .line:nth-child(3) .char", { opacity: 0, y: 10, x: 0 });
gsap.set(".text__flex .right .split1 .line:nth-child(4) .char", { opacity: 0, y: 10, x: 0 });
gsap.set(".text__flex .right .split1 .line:nth-child(5) .char", { opacity: 0, y: 10, x: 0 });

let tl = gsap.timeline({
    scrollTrigger: {
        // 트리거 설정
        trigger: ".text__flex .right .split1",
        // 애니메이션 시작 조건 설정
        start: "top +=700", // viewport의 중앙에 도달하면 시작
        end: "bottom top",
        markers: true,
        onEnter: () => {
            tl.play();
        },
    },
    paused: true,
});
tl.to(".text__flex .right .split1 .line:nth-child(1) .char",{opacity: 1 ,y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");
tl.to(".text__flex .right .split1 .line:nth-child(2) .char",{opacity: 1, y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");    
tl.to(".text__flex .right .split1 .line:nth-child(3) .char",{opacity: 1, y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");    
tl.to(".text__flex .right .split1 .line:nth-child(4) .char",{opacity: 1, y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");
tl.to(".text__flex .right .split1 .line:nth-child(5) .char",{opacity: 1, y: 0, x: 0, stagger: 0, duration: 0.8, ease: "power2.inOut",},"-=0.5");
