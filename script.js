const welcomeText = document.querySelector(".two-text")
const contTwo = document.querySelector(".two")
const starryBackground = document.querySelectorAll(".test")
const root = document.documentElement
const navButtons = document.querySelector(".nav-list")
const introText = document.querySelector('.intro-text').children;

for (let i = 0; i < introText.length; i++){
    const text = introText[i];
    const strText = text.textContent;
    const splitText = strText.split('');
    text.textContent = "";
    let char = 0

    for (let i = 0; i < splitText.length; i++){
        if (splitText[i] == " "){
            text.innerHTML += "<span>" + splitText[i] + "</span>";
        }else{
            text.innerHTML += "<span class='bounce'>" + splitText[i] + "</span>";           
        }
    }

}


