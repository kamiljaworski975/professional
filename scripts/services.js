const services = Array.from(document.querySelectorAll(".service"));
import {
  markup,
  markup2,
  markup3,
  markup4,
  markup5,
} from "./services-categories.js";
import {
  BathroomKitchen,
  Underfloor,
  Other,
} from "./services-categories/interior.js";
import { NewBuild } from "./services-categories/newBuild.js";
import { ExternalRend, Garage } from "./services-categories/external.js";

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
      desc.innerHTML = NewBuild;
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
    case "external-rendering":
      desc.innerHTML = ExternalRend;
      break;
    case "extension":
      desc.innerHTML = ExternalRend;
      break;
    case "garage-converted":
      desc.innerHTML = Garage;
      break;
    default:
      return null;
  }
}

selectServices();
