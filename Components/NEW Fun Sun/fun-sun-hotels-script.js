
const buttonsBlock = document.getElementById('hotels-concepts-buttons-block');
const optionsBlock = document.getElementById('hotels-options-mobile');
const countrySliders = document.getElementsByClassName('hotels__blocks');
const buttonActive = document.getElementsByClassName('active-country');

//Переключаем табы
buttonsBlock.addEventListener('click', function (event) {
        let target = event.target.closest('a');
        let targetButton = event.target.closest('[data-id]');




        for (i = 0; i < buttonActive.length; i++) {
            buttonActive[i].classList.remove('active-country');
        };

        for (i = 0; i < countrySliders.length; i++) {

            if (countrySliders[i].dataset.id === targetButton.dataset.id) {

                countrySliders[i].classList.add('hotels-active')
            } else {
                countrySliders[i].classList.remove('hotels-active');
            }
        }




        target.classList.add('active-country');



    });
   
//options
optionsBlock.addEventListener('change', function() {
    let targetOption = this.options[this.selectedIndex];
    let targetAttr = targetOption.getAttribute('data-option');
    
    for (i = 0; i < countrySliders.length; i++) {

            if (countrySliders[i].dataset.id === targetAttr) {

                countrySliders[i].classList.add('hotels-active')
            } else {
                countrySliders[i].classList.remove('hotels-active');
            }
        }

})
