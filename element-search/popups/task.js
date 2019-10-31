let elementModalMain = document.getElementById("modal_main");
elementModalMain.classList.add("modal_active");
let elementsModalClose = document.getElementsByClassName("modal__close");
let elementsShowSuccess = document.getElementsByClassName("show-success");
let elementModalSuccess = document.getElementById("modal_success");
let arr = Array.from(elementsModalClose);
let length = arr.length;
for (let i = 0; i < length; i++) {
	elementsModalClose[i].onclick = close;
}
function close() {
	elementModalMain.classList.remove("modal_active");
	elementModalSuccess.classList.remove("modal_active");
};
let arr1 = Array.from(elementsShowSuccess);
let length1 = arr1.length;
for (let i = 0; i < length1; i++) {
	elementsShowSuccess[i].onclick = function() {
		elementModalMain.classList.remove("modal_active");
		elementModalSuccess.classList.add("modal_active");
    };
}