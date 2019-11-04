let elementsTab = document.getElementsByClassName("tab");
let elementsTabContent = document.getElementsByClassName("tab__content");
let arr = Array.from(elementsTab);
let length = arr.length;
let arr1 = Array.from(elementsTabContent);
let length1 = arr1.length;
let indexActiveBefore = 0;
for (let i = 0; i < length; i++) {
	elementsTab[i].onclick = function () {
		elementsTab[indexActiveBefore].className = "tab";
		elementsTab[i].className = "tab tab_active";
		elementsTabContent[indexActiveBefore].className = "tab__content";
		elementsTabContent[i].className = "tab__content tab__content_active";
		indexActiveBefore = i;
	}
}