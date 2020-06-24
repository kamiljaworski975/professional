
// Functions
setTimeout(clientCarousel(), 2000)


function clientCarousel() {
    let isShow = true;
    const clientBox1 = document.querySelector('.ccb-1')
    const clientBox2 = document.querySelector('.ccb-2')
    const clientInputs = document.querySelectorAll(".client-carousel--inp");
    const clientCarousel = document.getElementById("client-row")

    const boxShow = (arg) => {
        if(arg) {
            clientBox1.style.opacity = "0";
            clientBox2.style.opacity = "1";
            clientInputs[0].style.background = "transparent"
            clientInputs[1].style.background = "white"  
        } else {
            clientBox1.style.opacity = "1";
            clientBox2.style.opacity = "0";
            clientInputs[1].style.background = "transparent"
            clientInputs[0].style.background = "white"
        }
        return isShow = !isShow
    }
    let myInt = setInterval(() => boxShow(isShow), 10000)

    clientCarousel.addEventListener("mouseover", () => {
        clearInterval(myInt)
    })
    clientCarousel.addEventListener("mouseout", () => {
        myInt = setInterval(() => boxShow(isShow), 10000)
    })

    clientInputs[0].addEventListener("click", () => boxShow(isShow));
    clientInputs[1].addEventListener("click", () => boxShow(isShow));
 
}




