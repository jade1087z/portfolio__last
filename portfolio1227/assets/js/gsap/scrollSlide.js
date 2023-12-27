gsap.registerPlugin(ScrollTrigger);

const slideWidth = 830; // Slide's width
const slideDuration = 30; // Slide's duration
const slideGap = 0; // Gap between slides
const slideContainer = document.querySelector('.loop__slide__container');
const slideCount = slideContainer.querySelectorAll('.loop__slide').length / 2;
const totalWidth = (slideWidth * slideCount) + slideGap; // Total width of the slides including the gap
const speed = totalWidth / slideDuration; // Speed of the animation

const staggerValue = slideGap / speed; // Calculate the stagger value
const tlscroll = gsap.timeline({
    ScrollTrigger: {
        trigger: ".loop__slide__container",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "+=5000"
    },
    repeat: -1,
    stagger: staggerValue,
    
});

tlscroll.to(".loop__slide__group:first-child", {
    x: `-=${slideCount * slideWidth}`,
    ease: "none",
    duration: slideCount * slideDuration
}, 0)
tlscroll.to(".loop__slide__group:last-child", {
    x: `-=${slideCount * slideWidth}`,
    ease: "none",
    duration: slideCount * slideDuration
}, staggerValue)

tlscroll.set(".loop__slide__group", {x: 0});





// 마우스 휠 이벤트에 따라 애니메이션의 속도를 조절
window.addEventListener("wheel", function(e) {
    // 스크롤 방향 감지 (위/아래)

    const delta = Math.sign(e.deltaY);
    let speed = Math.abs(e.deltaY);
    
    // 슬라이드 속도 조절
    if(delta != 0) {
        tlscroll.timeScale(speed / 20) // 스크롤 시 속도
    }

    let scrollTimeout;
    window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);

    // 스크롤이 일정 시간동안 멈추었는지를 감지
    scrollTimeout = setTimeout(() => {
        tlscroll.timeScale(speed / 100) // 스크롤이 멈추면 원래의 속도로 복구
    }, 1000); // 스크롤이 멈춘 후 200ms가 지나면 원래 속도로 복구
});
});
