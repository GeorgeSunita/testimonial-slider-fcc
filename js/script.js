const slides = document.querySelectorAll(".review");
const previous = document.querySelector(".btn-previous");
const next = document.querySelector(".btn-next");
let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
    slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
};

const goToNext = function () {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    goToSlide(curSlide);
};

const goToPrevious = function () {
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
};
goToSlide(0);

next.addEventListener("click", goToNext);

previous.addEventListener("click", goToPrevious);

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrevious();
});
