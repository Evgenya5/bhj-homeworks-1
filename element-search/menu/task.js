let elementsMenuLink = document.getElementsByClassName("menu__link");
console.log(elementsMenuLink);
let arr = Array.from(elementsMenuLink);
let length = arr.length;
let counterClick = [];
let elements = document.querySelectorAll("li a+ul");
let arr1 = Array.from(elements);
let length1 = arr1.length;
for (let i = 0; i < length; i++) { 
	counterClick[i] = true;
	elementsMenuLink[i].onclick = function() {
		for (let j = 0; j < length1; j++) {
			if (elementsMenuLink[i].parentElement == elements[j].parentElement) {
				if (counterClick[i]) {
					elements[j].className = `${elements[j].className} menu_active`;
					counterClick[i] = false;
					return false;
				} else {
					elements[j].className = "menu menu_sub";
					counterClick[i] = true;
					return false;
				}
    		}
		}
	};
}
