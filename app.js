particlesJS.load("particles-js", "particles.json");

fetch("./projects.json")
    .then(res => res.json())
    .then(data => addProjects(data))


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

//                              CONTACT BUTTON

const contactButton = document.querySelector('#contact-button')
const contactSection = document.querySelector('#contact-page')
const contactClose = document.querySelector('#form-close')
const aboutMeText = document.querySelector('#about-me-text')
const contactClosedText = document.querySelectorAll('.contact-closed')
console.log(contactClosedText)
//Clicking contact to open
contactButton.addEventListener('click', ()=>{
    contactSection.classList.remove("contact-disappear")
    contactSection.classList.add("contact-appear") 
    contactForm.classList.remove("text-disappear")
    aboutMeText.classList.remove("text-disappear")
    contactClosedText[0].style.visibility = "visible"
    contactClosedText[1].style.visibility = "visible"
    console.log("working")
    // formInputs.classList.remove("contact-disappear")
    // formInputs.classList.add("contact-appear")
})

// Text animation after conatct opens
contactSection.addEventListener("animationend", ()=>{
    if (contactSection.classList[0] == "contact-appear"){
        contactForm.classList.add("text-appear") 
        aboutMeText.classList.add("text-appear") 
    }else{
        return
    }
});

// Clicking button to close
contactClose.addEventListener('click', ()=>{
    contactSection.classList.remove("contact-appear")
    contactSection.classList.add("contact-disappear") 
    contactForm.classList.remove("text-appear")
    contactForm.classList.add("text-disappear")
    aboutMeText.classList.remove("text-appear")
    aboutMeText.classList.add("text-disappear")
})




//                              ADD PROJECTS




projectsContainer = document.querySelector("#project-container")

function addProjects (data) {
    

    for(let i = 0; i < data.length; i++){
        function checkTrue(){
            if(data[i].gsap == true){
                return `<img src="./Icons/gsap.svg" alt="Gsap">`
            }else if(data[i].React ==true){
                return `<img src="./Icons/react.svg" alt="React">`
            }
            else{
                return ``
            }
            
        }

        console.log(data[i].github)
        console.log(data[i].live)

        let projectItem = 
        `<div class="project-item">
            <div class="project-item-repo">
                <img class="item-image" src="${data[i].image}" alt="project image"/>
                <div class="item-repo">
                    <a href="${ data[i].live  }"> <img class="item-repo-icons" src="./Icons/website-hosting.svg" alt="Live"> </a>
                    <a href="${ data[i].github }"> <img class="item-repo-icons" src="./Icons/github-icon.svg" alt="Github"/> </a>
                </div> 
            </div>
            <div class="project-item-text">
                <h3>${data[i].title}</h3>
                <p>${data[i].description}</p>
                <div class="web-button">
                    <a href="${ data[i].live}"> <button>Live</button> </a>
                    <a href="${ data[i].github}"> <button>Github</button> </a> 
                </div>
            </div>
            <div class="project-item-tech">
                    <p>Technologies used</p>
                    <div class="project-item-tech-img">
                        <img src="./Icons/html.svg" alt="HTML">
                        <img src="./Icons/css.svg" alt="CSS">
                        <img src="./Icons/javascript.svg" alt="Javascript">
                        ${checkTrue()}
                    </div>
            </div>
        </div>`
        
        projectsContainer.innerHTML+= projectItem
    }
}




//                              Send Emails

const contactForm = document.querySelector('#contact-form')
const senderEmail = document.querySelector('#email')
const senderName = document.querySelector('#name')
const senderPhone = document.querySelector('#phone')
const senderMessage = document.querySelector('#message')

window.onload = function() {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var tempParams = {
            name : senderName.value,
            email: senderEmail.value,
            phone: senderPhone.value,
            message: senderMessage.value,
        }
        emailjs.send('service_5c7blxh','template_5m5saui', tempParams )
        .then(function(){
            alert("Email sent sucessfully")
            contactForm.reset()
        })
    });
}

