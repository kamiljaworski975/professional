function arrowTop() { 
    const arrow = document.querySelector(".arrow-top"); 
    window.addEventListener("scroll", (el) => {
        if(window.scrollY > 300) {
            arrow.style.opacity = "1"
        } else {
            arrow.style.opacity = "0"
        }
    })
    arrow.addEventListener("click", () => {
        window.scrollTo(0,0)
    })
}

arrowTop();