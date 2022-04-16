particlesJS.load("particles-js", "particles.json");

fetch("./projects.json")
    .then(res => res.json())
    .then(data => addProjects(data))


const introText = document.querySelector('.intro-text').children;

// const root = document.documentElement
// const body = document.body,
//       html = document.documentElement;

// let height = Math.max( body.scrollHeight, body.offsetHeight, 
//                        html.clientHeight, html.scrollHeight, html.offsetHeight );

// root.style.setProperty('--document-height', height + "px")


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



//                              ADD PROJECTS




projectsContainer = document.querySelector("#project-container")

function addProjects (data) {
    

    for(let i = 0; i < data.length; i++){
        function checkTrue(){
            if(data[i].gsap == true){
                return "<img src='./Other images/gsap.svg' width='40' alt='gsap'>"
            }else if(data[i].React ==true){
                return `<a title="Facebook, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:React-icon.svg"><img width="40" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"></a>`
            }
            else{
                return "<img src='./Other images/gsap.svg' width='40' alt='gsap'>"
            }
            
        }

        let projectItem = 
        `<div class="project-item">
        <div class="project-item-repo">
            <img class="item-image" src="${data[i].url}" alt="project image"/>
            <div class="item-repo">
                <div>LIVE</div>
                <div>GITHUB</div>
            </div> 
        </div>
        <div class="project-item-text">
            <h3>${data[i].title}</h3>
            <p>${data[i].description}</p>
            <div class="project-item-tech">
                <p>Technologies used:</p>
                <a title="W3C, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:HTML5_logo_and_wordmark.svg"><img width="40" alt="HTML5 logo and wordmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"></a>
                <a title="Rudloff, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:CSS3_logo_and_wordmark.svg"><img width="30" alt="CSS3 logo and wordmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png"></a>
                <a title="Chris Williams, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Unofficial_JavaScript_logo_2.svg"><img width="40" alt="Unofficial JavaScript logo 2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png"></a>
                ${checkTrue()}
            
            </div>
        </div>`
        projectsContainer.innerHTML+= projectItem
    }
    projectListeners()
}




//                              HOVER ON ITEM IMAGE

function projectListeners(){
    const projectRepo = document.querySelectorAll(".project-item-repo")
    
    
   
    // const itemRepo = document.querySelectorAll('.item-repo')
    // const cssObj = window.getComputedStyle(itemRepo[0], null)
    // console.log(cssObj.height)
    // itemRepo[0].addEventListener('transitionend', ()=>{
    //     cssObj.height > '0px' ?  itemRepo[0].style.transform = 'scale(1)' : itemRepo[0].style.transform = 'scale(0)' 

    // })



    
    // for(let i = 0; i < projectRepo.length; i++){
    //     function increaseSizeAnimation(i){
    //         let itemRepo = projectRepo[i].children[1]
    //         itemRepo.style.height = '100%'
    //         itemRepo.style.transform = 'scale(1)'
    //     }
    //     function decreaseSizeAnimation(i){
    //         let itemRepo = projectRepo[i].children[1]
    //         itemRepo.style.height = '0%';
    //         if(itemRepo.style.height == '10%'){
    //             console.log("working")
    //             itemRepo.style.transform = 'scale(0)'
    //         }   
    //     }
    //         projectRepo[i].addEventListener("mouseover", ()=>{increaseSizeAnimation(i)})
    //         projectRepo[i].addEventListener("mouseleave", ()=>{decreaseSizeAnimation(i)})
    // }

}
