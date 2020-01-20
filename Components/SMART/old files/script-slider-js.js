
const buttonsBlock = document.getElementById('slider-navigation');
const countrySliders = document.getElementsByClassName('slider');
const buttonActive = document.getElementsByClassName('slider__button');

//Переключаем табы
buttonsBlock.addEventListener('click', function (event) {
        let target = event.target.closest('a');
        let targetButton = event.target.closest('[data-id]');




        for (i = 0; i < buttonActive.length; i++) {
            buttonActive[i].classList.remove('button-active');
        };

        for (i = 0; i < countrySliders.length; i++) {

            if (countrySliders[i].dataset.id === targetButton.dataset.id) {

                countrySliders[i].classList.add('slider-active')
            } else {
                countrySliders[i].classList.remove('slider-active');
            }
        }




        target.classList.add('button-active');



    });
   
    
//SLIDESHOW
const rightButton = document.getElementById('slider-right-button');
const leftButton = document.getElementById('slider-left-button');
const sliderHotels = document.getElementById('slider-container');


//RIGHT
rightButton.addEventListener('click', moveRight);

function moveRight() {
   let activeSlider = sliderHotels.querySelector('.slider-active');
    let widthSlider = activeSlider.clientWidth;
    let slideInSlider = activeSlider.childElementCount;
    let widthToScroll = 
    console.log(widthSlider);
    
    
}

//LEFT
leftButton.addEventListener('click', moveLeft);

function moveLeft() {
  slides[index].classList.remove('slide-active');
  index = index - 1;
  if (index == -1) {
    index = slides.length - 1;
  }
  slides[index].classList.add('slide-active');
}
//при клике получить все слайды из слайдера, найти след слайд после active и назначить ему класс актив, у предыдущего убрать этот класс