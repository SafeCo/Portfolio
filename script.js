const welcomeText = document.querySelector(".two-text")
const contTwo = document.querySelector(".two")
const starryBackground = document.querySelectorAll(".test")
const root = document.documentElement
const navButtons = document.querySelector(".nav-list")

gsap.set(welcomeText,{autoAlpha:0})
gsap.to(welcomeText, { yPercent: -50, autoAlpha:1, ease: "power1.out"})

gsap.to(starryBackground, {yPercent: -50, duration: 10 } )



for(i = 0; i < navButtons.children.length; i++){
    navButtons.children[i].addEventListener("mouseover", function enterHoverAnimation(e){
        console.log(e)
        const tl = gsap.timeline();
        let spanTags = e.target.querySelectorAll("span")
        let firstSpan = spanTags[0]
        let secondSpan = spanTags[1]
        tl.play()
        tl.to(spanTags[0], {width:"100%", duration: 0.5},"<")
        tl.to(spanTags[1], {width:"100%", duration: 1},"<")
        console.log(e.target)
    })
    // navButtons.children[i].addEventListener("mouseout", leaveHoverAnimation)

}
// const tl = gsap.timeline();

// function enterHoverAnimation(e){
//     let spanTags = e.target.querySelectorAll("span")
//     let firstSpan = spanTags[0]
//     let secondSpan = spanTags[1]
//     tl.play()
//     tl.to(spanTags[0], {width:"100%", duration: 0.5},"<")
//     tl.to(spanTags[1], {width:"100%", duration: 1},"<")
//     console.log(e.target)

// }
function leaveHoverAnimation(e){
    tl.reverse()
    // const tlTwo = gsap.timeline();
    // let spanTags = e.target.querySelectorAll("span")
    // let firstSpan = spanTags[0]
    // let secondSpan = spanTags[1]
    // tlTwo.to(firstSpan, {width:"0%", duration: 1},"<")
    // tlTwo.to(secondSpan, {width:"0%", duration: 0.5},"<")
}