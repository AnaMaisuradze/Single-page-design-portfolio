const slides = Array.from(document.getElementsByClassName('slide-item'));
let slidePosition = 0;
const totalSlides = slides.length;
const buttonNext = document.getElementById('next');
const buttonPrevious = document.getElementById('previous');

buttonNext.addEventListener('click', moveToNext);
buttonPrevious.addEventListener('click', moveToPrevious);

function hideSlides() {
  slides.forEach((slide) => {
    slide.classList.remove('visible');
    slide.classList.add('hidden');
  });
}

function moveToNext() {
  hideSlides();
  slidePosition = (slidePosition + 1) % totalSlides;
  slides[slidePosition].classList.add('visible');
}

function moveToPrevious() {
  hideSlides();

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  slides[slidePosition].classList.add('visible');
}
