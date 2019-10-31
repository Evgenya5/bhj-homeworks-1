let countLost = document.getElementById("lost");
let countDead = document.getElementById("dead");
let hole;
for (let i = 1;i < 10; i++) {
	hole = getHole(i);
	hole.onclick = checkHit;
}
function checkHit() {
		if (this.classList.contains('hole_has-mole')) {
			countDead.textContent++;
		} else {
			countLost.textContent++;
		}
		if (countDead.textContent == 10) {
			alert("You win!");
			countLost.textContent = 0;
			countDead.textContent = 0;
		}
		if (countLost.textContent == 5) {
			alert("Game over");
			countLost.textContent = 0;
			countDead.textContent = 0;
		}
	
}

function getHole(index) {
	return document.getElementById(`hole${index}`);
}

