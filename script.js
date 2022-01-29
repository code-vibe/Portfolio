// ADD ACTIVE CLASS ON  LINK CLICK

const navUL = document.getElementById("nav-ul")
const navLi = document.getElementByClassName("nav-li")

for (var i = 0; i < navLi.length; i++) {
	navLi[i].addEventListener("click", () => {
		const current = document.getElementByClassName("active");
		current[0].className = current[0].className.replace("active", "");
		this.className += "active";
	});
}