let element = document.getElementsByClassName("rotator__case");
let length = element.length;
let i = 1;
setInterval(rotate, 1000);
function rotate() {
	element[i].classList.add("rotator__case_active");
	if (i != 0)  {	
		element[i - 1].classList.remove("rotator__case_active");
	}
	if (i == 0) {
		element[length - 1].classList.remove("rotator__case_active")
	}
	i++;	
	if (i == length) {
		i = 0;
	}
}