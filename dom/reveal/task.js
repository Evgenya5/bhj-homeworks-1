let element = document.getElementsByClassName("reveal");
const viewportHeight = window.innerHeight;
let length = element.length;
console.log(viewportHeight);
document.addEventListener("scroll", function(event) {
	for (let i = 0; i < length; i++) {
		if (element[i].getBoundingClientRect().top <= viewportHeight) {
			element[i].classList.add("reveal_active");
		}
	}
});