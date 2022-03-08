
const slides = document.getElementsByClassName('carousel-item');
const carouselBtnPrev = document.querySelector('#carousel-button-prev');
const carouselBtnNext = document.querySelector('#carousel-button-next');

let slidePosition = 0;

const totalSlides = slides.length;


carouselBtnNext.addEventListener('click', moveToNextSlide)
carouselBtnPrev.addEventListener('click', moveToPrevSlide)


function moveToNextSlide() {
    console.log(totalSlides)
}

function moveToPrevSlide() {
    console.log(slides)
}


