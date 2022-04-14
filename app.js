particlesJS.load("particles-js", "particles.json");

const root = document.documentElement
const introText = document.querySelector('.intro-text').children;


const body = document.body,
      html = document.documentElement;

let height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

root.style.setProperty('--document-height', height + "px")


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




//                              HOVER ON ITEM IMAGE

const projectRepo = document.querySelector(".project-item-repo")

function increaseSizeAnimation(){
    let itemRepo = projectRepo.children[1]
    itemRepo.style.height = '100%'
    itemRepo.style.transform = 'scale(1)'
    
}
function decreaseSizeAnimation(){
    let itemRepo = projectRepo.children[1]
    itemRepo.style.height = '0%'
}

projectRepo.addEventListener("mouseover", increaseSizeAnimation)
projectRepo.addEventListener("mouseleave", decreaseSizeAnimation)