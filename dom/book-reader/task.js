let elementSize = document.getElementsByClassName("font-size");
let elementBook = document.getElementsByClassName("book");
let length = elementSize.length;
let previousIndex = 1;
for (let i = 0; i < length; i++) {
	elementSize[i].onclick = function() {
 		return false;
	}
}
for (let i = 0; i < length; i++) {
	elementSize[i].addEventListener('click', function(event) {
		elementSize[previousIndex].classList.remove("font-size_active");
		elementSize[i].classList.add("font-size_active");
		previousIndex = i;
		if (i == 0) {
			elementBook[0].classList = "book book_fs-small";
		} else if (i == 1) {
			elementBook[0].classList = "book";
		} else {
			elementBook[0].classList = "book book_fs-big";
		}
	});
}