const light = document.getElementById("light");
const dark = document.getElementById("dark");

const themeSwitch = (theme) => {
	if (theme === "light") {
		light.style.display = "none";
		dark.style.display = "block";
		document.documentElement.classList.add("dark-mode");
		return;
	}
	light.style.display = "block";
	dark.style.display = "none";
	document.documentElement.classList.remove("dark-mode");
};

light.addEventListener("click", () => themeSwitch("light"));
dark.addEventListener("click", () => themeSwitch("dark"));

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((n) => {
	n.addEventListener("click", function () {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	});
});
