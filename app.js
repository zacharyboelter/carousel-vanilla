
const slides = document.getElementsByClassName('carousel-item');
const carouselBtnPrev = document.querySelector('#carousel-button-prev');
const carouselBtnNext = document.querySelector('#carousel-button-next');

let slidePosition = 0;

const totalSlides = slides.length;


carouselBtnNext.addEventListener('click', moveToNextSlide)
carouselBtnPrev.addEventListener('click', moveToPrevSlide)


function moveToNextSlide() {
    hideAllSlides();
    if (slidePosition === totalSlides - 1){
        slidePosition = 0;
    } else {
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    console.log(slides)
}

function hideAllSlides(){
    for (const slide of slides) {
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
}

