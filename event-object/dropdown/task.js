let elementsButton = document.getElementsByClassName("dropdown__value");
console.log(elementsButton);
let elementsDropdownList = document.getElementsByClassName("dropdown__list");
let open = false;
let elementsDropdownItem = document.getElementsByClassName("dropdown__item");
elementsButton[0].onclick = function () {
	if (open == false) {
		elementsDropdownList[0].className = "dropdown__list dropdown__list_active";
		open = true;
	} else {
		elementsDropdownList[0].className = "dropdown__list";
		open = false;
	}
}
let arr = Array.from(elementsDropdownItem);
let length = arr.length;
let value;
for (let i = 0; i < length; i++) {
	elementsDropdownItem[i].onclick = function () {
		value = elementsDropdownItem[i].textContent;
		elementsButton[0].textContent = value; 
		elementsDropdownList[0].className = "dropdown__list";
		open = false;
		return false;
	}
}