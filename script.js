let index = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const slidesToShow = 3; 

function showSlide(n) {
    const slides = document.querySelector('.slider-container');

    if (n > totalSlides - slidesToShow) {
        index = 0; 
    } else if (n < 0) {
        index = totalSlides - slidesToShow; 
    } else {
        index = n;
    }

    slides.style.transform = `translateX(-${index * (100 / slidesToShow)}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

setInterval(() => nextSlide(), 3000);
