let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.home',
        start:'0%',
        end:'80%',
        scrub:1
    },
});

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.home',
        start:'0%',
        end:'65%',
        scrub:1
    },
});

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:'.home',
        start:'0%',
        end:'80%',
        scrub:1
    },
});

tl.fromTo(".sliding-text",{y:0} , {y:-400});
tl2.fromTo('.logo', {scale : 6 }, {scale : 1 , top : '2rem' , left : '3rem' , x : "50%" , y : "50%"  }
);




let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:'.home',
        start:'0%',
        end:'200%',
        scrub:1,
        pin: true,
        pinSpacing:false
    },
});


document.addEventListener('DOMContentLoaded', function() {
    const kinetics = new Kinetics().interactionHook();
  });



// selecting the media queries 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}