const welcomeText = document.querySelector(".two-text")
const contTwo = document.querySelector(".two")
const starryBackground = document.querySelectorAll(".test")
const root = document.documentElement
const navButtons = document.querySelector(".nav-list")
const bounceLetters = ["My Name is Saif,", "A Front-end Web Developer"]
const textArea = document.querySelector('.two-text')

// gsap.set(welcomeText,{autoAlpha:0})
// gsap.to(welcomeText, { yPercent: -50, autoAlpha:1, ease: "power1.out"})

// gsap.to(starryBackground, {yPercent: -50, duration: 10 } )


for(i = 0; i < bounceLetters.length; i++){
    console.log(bounceLetters[i])
    let lA = bounceLetters[i].split('')
    console.log(lA)
    for(i = 0 ; i < lA.length; i++){
        x = lA[i]
        if (x == ''){
            console.log('working')
            let spacing =  `&nbsp`
            textArea.innerHTML += spacing
        }else{
            let word = `<h1 class='bounce'> ${x} </h1>`
            textArea.innerHTML += word
        }
    }
}