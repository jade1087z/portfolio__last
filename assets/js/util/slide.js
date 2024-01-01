const slideWidth = 830;
const slideGap = 30;
const slideDuration = 30;
const slideContainer = document.querySelector('.loop__slide__container');
const slideCount = slideContainer.querySelectorAll('.loop__slide').length; 
const totalWidth = (slideWidth * slideCount) + slideGap; 
const speed = totalWidth / slideDuration; 

const staggerValue = slideGap / speed; 

// Create a single timeline for all slides
const infiniteSlide = gsap.timeline({repeat: -1, stagger: staggerValue, ease: "power1.inOut", smoothChildTiming: true, invalidateOnRefresh: true});

const slides = slideContainer.querySelectorAll('.loop__slide'); 
slides.forEach((slide, index) => { 
  infiniteSlide
  .to(slide, { 
      x: `-=${slideWidth}`,
      ease: "none",
      duration: slideDuration
  }, index * staggerValue) // stagger the start of each slide's animation
  .set(slide, {x: 0}); 
});

let scrollingSpeed = 10; 
let currentSpeed = 1; 

// Use ScrollTrigger to adjust the animation speed
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
  trigger: slideContainer,
  start: 'top top',
  end: 'bottom bottom',
  onEnter: () => { 
    gsap.to(infiniteSlide, {
      timeScale: scrollingSpeed,
      duration: 1, 
      ease: "power1.in",
      onUpdate: function() {
        currentSpeed = infiniteSlide.timeScale();
      }
    });
  },
  onLeave: () => { 
    gsap.to(infiniteSlide, {
      timeScale: 1,
      duration: 1,
      ease: "power1.out",
      onUpdate: function() {
        currentSpeed = infiniteSlide.timeScale();
      }
    });
  }
});