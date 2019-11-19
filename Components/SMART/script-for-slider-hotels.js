$(document).ready(function() {
    $('#country1-slider').lightSlider({
        item:3,
        loop:false,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        mode: 'slide',
        adaptiveHeight: false,
        responsive : [
            {
                breakpoint:1200,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:10,
                    autoWidth: true
                  }
            },
            {
                breakpoint:900,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:10,
                    autoWidth: true
                  }
            },
            {
                breakpoint:600,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:10,
                    autoWidth: true
                  }
            }
        ]
    });  
  });     

