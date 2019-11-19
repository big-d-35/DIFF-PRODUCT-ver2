
const hotelsBlock = document.getElementById('smart-hotels');
const countrySliders = document.getElementsByClassName('slider');
const buttonActive = document.getElementsByClassName('slider__button');




    hotelsBlock.addEventListener('click', function(event) {
        let target = event.target.closest('a');
        let targetButton = event.target.closest('[data-id]');
        
        
        
        
        for (i = 0; i< buttonActive.length; i++) {
            buttonActive[i].classList.remove('button-active');
        };
        
        for (i = 0; i< countrySliders.length; i++) {

            if(countrySliders[i].dataset.id === targetButton.dataset.id) {
                
                countrySliders[i].classList.add('slider-active')
            } else {
                countrySliders[i].classList.remove('slider-active');
            }
        }
        
    
        
        
        target.classList.add('button-active');
        
         
        
    });
    
   
    
