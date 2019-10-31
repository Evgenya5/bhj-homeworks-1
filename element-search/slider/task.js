let elementsSliderArrowPrev = document.getElementsByClassName("slider__arrow_prev");
let elementsSliderArrowNext = document.getElementsByClassName("slider__arrow_next");
let elementsSliderItem = document.getElementsByClassName("slider__item");
let currentSlide = 0;
let arr = Array.from(elementsSliderItem);
let length = arr.length;
elementsSliderArrowNext[0].onclick = goToNext;
elementsSliderArrowPrev[0].onclick = goToPrev;
function goToNext () {
	elementsSliderItem[currentSlide].className = "slider__item";
	if (currentSlide != (length - 1)) {
		currentSlide++;
	} else {
		currentSlide = 0;
	}
	elementsSliderItem[currentSlide].className = "slider__item slider__item_active";
}
function goToPrev() {
	elementsSliderItem[currentSlide].className = "slider__item";
	if (currentSlide != 0) {
		currentSlide--;
	} else {
		currentSlide = length - 1;
	}
	elementsSliderItem[currentSlide].className = "slider__item slider__item_active";
}