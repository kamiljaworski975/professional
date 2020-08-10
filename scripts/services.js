const services = Array.from(document.querySelectorAll(".service"));
import {markup, markup2, markup3, markup4, markup5} from "./services-categories.js";
const desc = document.querySelector(".section-services--right")


function selectServices() {
    services.forEach((el,i) => {
        el.addEventListener("click", event => addEvent(event))
    })
    desc.innerHTML = markup;
}

function addEvent(event) {
    const btn = event.target.closest(".service");
    if (btn) {
        if (btn.classList.contains("active")) {
            return null
        } else {
            services.forEach((el,i) => {
                el.classList.remove("active")
            })
            addServices(btn.id)
            btn.classList.add("active")
        } 
    }
    
}


function addServices(el) {
    const box = document.querySelector(".service-description");
   

    if (box) {
        desc.removeChild(box)
    }

    switch(el) {
        case 'bespoke-doors':
            desc.innerHTML = markup;
            break;
        case 'interior':
            desc.innerHTML = markup2;
            break;
        case 'external':
            desc.innerHTML = markup3;
            break;
        case 'new-build':
            desc.innerHTML = markup4;
            break;
        case 'service-4':
            desc.innerHTML = markup5;
            break;
        default:
            return null
    }
}

selectServices()


