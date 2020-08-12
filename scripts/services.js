const services = Array.from(document.querySelectorAll(".service"));
import {
  markup,
  markup2,
  markup3,
  markup4,
  markup5,
} from "./services-categories.js";
import { BathroomKitchen, Underfloor, Other } from "./services-categories/interior.js";
const desc = document.querySelector(".section-services--right");
const insideInt = document.getElementById("inside-int");
const insideExt = document.getElementById("inside-ext");

function selectServices() {
  services.forEach((el, i) => {
    if (el.id === "interior" || el.id === "external") {
      el.addEventListener("click", (event) => dropDown(event));
    } else {
      el.addEventListener("click", (event) => addEvent(event));
    }
  });
  desc.innerHTML = markup;
}

function dropDown(event) {
  const btn = event.target.closest(".service");

  if (btn.id === "interior") {
    insideInt.classList.toggle("inside");
  } else {
    insideExt.classList.toggle("inside");
  }
}

function addEvent(event) {
  const btn = event.target.closest(".service");
  if (btn) {
    if (btn.classList.contains("active")) {
      return null;
    } else {
      services.forEach((el, i) => {
        el.classList.remove("active");
      });
      addServices(btn.id);
      btn.classList.add("active");
      console.log("dziala", btn.id);
    }
  }
}

function addServices(el) {
  const box = document.querySelector(".service-description");

  if (box) {
    desc.removeChild(box);
  }

  switch (el) {
    case "bespoke-doors":
      desc.innerHTML = markup;
      break;
    case "new-build":
      desc.innerHTML = markup4;
      break;
    case "service-4":
      desc.innerHTML = markup5;
      break;
    case "bathroom-kitchen":
      desc.innerHTML = BathroomKitchen;
      break;
    case "underfloor":
      desc.innerHTML = Underfloor;
      break;
      case "other":
      desc.innerHTML = Other;
      break;
    default:
      return null;
  }
}

selectServices();

// case 'interior':
//             inside.forEach(el => el.style.display = 'block')
//             break;
//         case 'external':
//             desc.innerHTML = markup3;
//             break;
