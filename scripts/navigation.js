const app = (() => {
	let body;
	let menu;
	let menuItems;

	const init = () => {
		body = document.querySelector("body");
		menu = document.querySelector(".menu-icon");
		menuItems = document.querySelectorAll(".navigation-phone__list-item-a");
		
    applyListeners();
    applyListenersToLeave();
    };
    

	const applyListeners = () => {
    menu.addEventListener("click", () => toggleClass(body, "nav-active"));
  };
  
  const applyListenersToLeave = () =>{
    Array.from(menuItems).forEach(menuItem=>{
	  menuItem.addEventListener("click",() => toggleClass(body, "nav-active"))
    })
  }

	const toggleClass = (element, stringClass) => {
		if (element.classList.contains(stringClass)) {
			element.classList.remove(stringClass);
		} else {
			element.classList.add(stringClass);
		}
			
		
	};

	init();
})();