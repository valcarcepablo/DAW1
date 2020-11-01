// Top carousel
const carouselImages = document.querySelectorAll('.carousel-slide img');
const carouselSlide = document.querySelector('.carousel-slide');
console.log(carouselImages);
//Bot carousel
const carouselSlide2 = document.querySelector('.carousel-slide-2');
const carouselImages2 = document.querySelectorAll('.carousel-slide-2 img');
console.log(carouselImages2);

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth + 72;    // Plus margin-right

// Move one img to the right to get it in order
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
carouselSlide2.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Listeners

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length-4) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter+=4;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';    
    carouselSlide2.style.transform = 'translateX(' + (-size * counter) + 'px)';    
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter-=4;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';    
    carouselSlide2.style.transform = 'translateX(' + (-size * counter) + 'px)';    
});

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 5;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});