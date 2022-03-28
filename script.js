const welcomeText = document.querySelector(".two-text")
const contTwo = document.querySelector(".two")
const starryBackground = document.querySelectorAll(".test")


gsap.set(welcomeText,{autoAlpha:0})
gsap.to(welcomeText, { yPercent: -50, autoAlpha:1, ease: "power1.out"})

gsap.to(starryBackground, {y: -300, repeat: -1, duration: 10 } )