function checkMenu() {
    const menuItem = document.querySelectorAll(".menu--item");

    menuItem.forEach(el => {
        el.classList.remove('.current-menu');
    })

    const x = window.location.href;

    if (x.indexOf('/articles') > 0) {
        menuItem[4].classList.add("current-menu")
    } else if (x.indexOf('/services') > 0) {
        menuItem[2].classList.add("current-menu")
    } else if (x.indexOf('/about') > 0) {
        return null
    } else if (x.indexOf('/work') > 0) {
        return null
    } else if (x == "http://127.0.0.1:8080/" ) {
        menuItem[0].classList.add("current-menu")
    } else {
        return null
    }
}

checkMenu()