let count = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");
function addCounter() {
	count.textContent++;
	if (count.textContent % 2 == 0) {
		image.width = 200;
	} else {
		image.width = 250;
	}
}
image.onclick = addCounter;
