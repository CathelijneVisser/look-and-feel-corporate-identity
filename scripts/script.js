const allButtons = document.querySelectorAll(".js-expand");
const menuClosed = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

console.log(allButtons);
allButtons.forEach((button) => {
	button.addEventListener("click", function () {
		button.parentElement.classList.toggle("expand");
	});
});

if (menuClosed) {
	menuClosed.addEventListener("click", () => {
		nav.classList.toggle("open");
	});

	nav.addEventListener("click", () => {
		nav.classList.toggle("open");
	});
}
