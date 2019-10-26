let countLost = document.getElementsById("lost");
let countDead = document.getElementsById("dead");
let hole;
for (let i = 1;i < 10; i++) {
	hole = getHole(i);
	hole.onclick = checkHit;
}
function checkHit(hole) {
	
		if (hole.className.includes( 'hole_has-mole' )) {
			countLost.textContent++;
		} else {
			countDead.textContent++;
		}
		if (countLost.textContent == 10) {
			alert("You win!");
			countLost.textContent = 0;
			countDead.textContent = 0;
		} else{
			alert("Game over");
			countLost.textContent = 0;
			countDead.textContent = 0;
		}
	
}

function getHole( index ) {
	switch (index) {
		case 1: 
			hole = document.getElementsById("hole1");
			break;
		case 2: 
			hole = document.getElementsById("hole2");
			break;
		case 3: 
			hole = document.getElementsById("hole3");
			break;
		case 4: 
			hole = document.getElementsById("hole4");
			break;
		case 5: 
			hole = document.getElementsById("hole5");
			break;
		case 6: 
			hole = document.getElementsById("hole6");
			break;
		case 7: 
			hole = document.getElementsById("hole7");
			break;
		case 8: 
			hole = document.getElementsById("hole8");
			break;
		case 9: 
			hole = document.getElementsById("hole9");
			break;
	}
	return hole;
}

