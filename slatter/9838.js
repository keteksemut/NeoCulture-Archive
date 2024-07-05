// This file was generated by Slater.app - Home Button CMS.js 

gsap.set(".home--fs8", { yPercent: 100 });
const homeWrap = document.querySelector(".home_wrap"),
  nextSection = document.querySelector(".theme_detail_wrap");
let animationPlayed = !1;
window.addEventListener("scroll", () => {
  let e = nextSection.getBoundingClientRect().top,
    t = window.innerHeight;
  e <= t / 2 && !animationPlayed ? (homeWrap.style.display = "block", gsap.to(
        ".home--fs8", { duration: .4, ease: "power3.inOut", yPercent: 0 }), animationPlayed = !
      0) :
    e > t / 2 && animationPlayed && (gsap.to(".home--fs8", {
        duration: .4,
        ease: "power3.inOut",
        yPercent: 100,
        onComplete: () => homeWrap.style.display = "none"
      }), animationPlayed = !
      1)
});

