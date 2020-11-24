const targetNode = document.getElementById("random-id");
const config = { attributes: true, childList: true, subtree: true };

const startGallery = () => {
    const images = Array.from(document.querySelectorAll(".img-container"));
    images.forEach(img => {
        img.addEventListener('click', () => console.log('dziala'))
    })
}

const callback = function (mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
        startGallery();
    }
  }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);
