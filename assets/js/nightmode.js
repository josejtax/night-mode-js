const body = document.querySelector("body");
const btnSwitch = document.querySelector(".switch");
const switchMode = document.querySelector(".switch-mode");

btnSwitch.addEventListener("click", () => {
	if(body.getAttribute("data-mode") == "light") {
		body.setAttribute("data-mode", "night");
		switchMode.setAttribute("style", "transform: translateX(70px)");
	} else {
		body.setAttribute("data-mode", "light");
		switchMode.setAttribute("style", "transform: translateX(0px)");
	}
})