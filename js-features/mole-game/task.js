let countLost = document.getElementById("lost");
let countDead = document.getElementById("dead");
let hole;
for (let i = 1;i < 10; i++) {
	hole = getHole(i);
	hole.onclick = checkHit;
}
function checkHit() {
	
		if (hole.classList.contains('hole_has-mole')) {
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

function getHole( index ) {
	switch (index) {
		case 1: 
			hole = document.getElementById("hole1");
			break;
		case 2: 
			hole = document.getElementById("hole2");
			break;
		case 3: 
			hole = document.getElementById("hole3");
			break;
		case 4: 
			hole = document.getElementById("hole4");
			break;
		case 5: 
			hole = document.getElementById("hole5");
			break;
		case 6: 
			hole = document.getElementById("hole6");
			break;
		case 7: 
			hole = document.getElementById("hole7");
			break;
		case 8: 
			hole = document.getElementById("hole8");
			break;
		case 9: 
			hole = document.getElementById("hole9");
			break;
	}
	return hole;
}

