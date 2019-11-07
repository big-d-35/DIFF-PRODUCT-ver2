const dayNight = new Vue({
    el: '#day-night-icons',
    data: {
        logo : 'https://www.tui.ru/getmedia/dfa8f32e-6221-4be8-9c2e-23d063b6b989/DN-logo_vertical_web',
        titleRU: 'Ваш отдых в отелях DAY&NIGHT Connected это:',
        titleBY: 'Ваш отдых в отелях DAY&NIGHT Connected это:',
        titleUA: 'Ваш отдых в отелях DAY&NIGHT Connected это:',
        titleEE: 'Ваш отдых в отелях DAY&NIGHT Connected это:',
        titleLT: 'Ваш отдых в отелях DAY&NIGHT Connected это:',
        titleLV: 'Ваш отдых в отелях DAY&NIGHT Connected это:',
        
        rows : [
            {
                iconStyle : 'background: #5bcaf5',
                icon: 'https://www.tui.ru/getmedia/91fe1db9-d2b0-4881-969f-3b5e41b4e48a/dj',
                textStyle : 'background-image: radial-gradient(circle at 0 50%,transparent 28px,#5bcaf5 10px);',
                textRU : 'Модные диджей-сеты',
                textBY : 'Модные диджей-сеты',
                textUA : 'Модные диджей-сеты',
                textEE : 'Модные диджей-сеты',
                textLT : 'Модные диджей-сеты',
                textLV : 'Модные диджей-сеты',
                
            },
            {
                iconStyle : 'background: #ace5f9',
                icon: 'https://www.tui.ru/getmedia/c27c102a-3259-41f6-b3ac-f4d96ada21c1/cofe',
                textStyle : 'background-image: radial-gradient(circle at 0 50%,transparent 28px,#ace5f9 10px);',
                textRU : 'Фирменная кофейня',
                textBY : 'Фирменная кофейня',
                textUA : 'Фирменная кофейня',
                textEE : 'Фирменная кофейня',
                textLT : 'Фирменная кофейня',
                textLV : 'Фирменная кофейня',
                
            },
            {
                iconStyle : 'background: #ffffff',
                icon: 'https://www.tui.ru/getmedia/c4094300-05e0-46f5-9b31-cd54cee92900/disco',
                textStyle : 'background-image: radial-gradient(circle at 0 50%,transparent 28px,#ffffff 10px);',
                textRU : 'Бесплатный вход в самые крутые клубы курорта',
                textBY : 'Бесплатный вход в самые крутые клубы курорта',
                textUA : 'Бесплатный вход в самые крутые клубы курорта',
                textEE : 'Бесплатный вход в самые крутые клубы курорта',
                textLT : 'Бесплатный вход в самые крутые клубы курорта',
                textLV : 'Бесплатный вход в самые крутые клубы курорта',
                
            },
            {
                iconStyle : 'background: #5bcaf5',
                icon: 'https://www.tui.ru/getmedia/fe91550a-2e69-4936-b82f-9550adee71b3/wifi',
                textStyle : 'background-image: radial-gradient(circle at 0 50%,transparent 28px,#5bcaf5 10px);',
                textRU : 'Быстрый Wi-Fi',
                textBY : 'Быстрый Wi-Fi',
                textUA : 'Быстрый Wi-Fi',
                textEE : 'Быстрый Wi-Fi',
                textLT : 'Быстрый Wi-Fi',
                textLV : 'Быстрый Wi-Fi',
                
            },
            {
                iconStyle : 'background: #ace5f9',
                icon: 'https://www.tui.ru/getmedia/e7c4e9b2-14f3-4c4d-ae60-26105ca16ace/tv',
                textStyle : 'background-image: radial-gradient(circle at 0 50%,transparent 28px,#ace5f9 10px);',
                textRU : 'Творческие мастер-классы',
                textBY : 'Творческие мастер-классы',
                textUA : 'Творческие мастер-классы',
                textEE : 'Творческие мастер-классы',
                textLT : 'Творческие мастер-классы',
                textLV : 'Творческие мастер-классы',
                
            },
            {
                iconStyle : 'background: #ffffff',
                icon: 'https://www.tui.ru/getmedia/b6a1ff43-84af-4cee-986e-3feecc9e05f2/orange',
                textStyle : 'background-image: radial-gradient(circle at 0 50%,transparent 28px,#ffffff 10px);',
                textRU : 'Фреши на завтрак',
                textBY : 'Фреши на завтрак',
                textUA : 'Фреши на завтрак',
                textEE : 'Фреши на завтрак',
                textLT : 'Фреши на завтрак',
                textLV : 'Фреши на завтрак',
                
            },
            {
                iconStyle : 'background: #5bcaf5',
                icon: 'https://www.tui.ru/getmedia/56e321b7-7107-486f-b2fd-af835dc1092e/h',
                textStyle : 'background-image: radial-gradient(circle at 0 50%,transparent 28px,#5bcaf5 10px);',
                textRU : 'Халаты и тапочки в номере',
                textBY : 'Халаты и тапочки в номере',
                textUA : 'Халаты и тапочки в номере',
                textEE : 'Халаты и тапочки в номере',
                textLT : 'Халаты и тапочки в номере',
                textLV : 'Халаты и тапочки в номере',
                
            },
            {
                iconStyle : 'background: #ace5f9',
                icon: 'https://www.tui.ru/getmedia/f6445ffb-9304-4e28-8762-971ccdec7caf/v',
                textStyle : 'background-image: radial-gradient(circle at 0 50%,transparent 28px,#ace5f9 10px);',
                textRU : 'Зажигательные вечеринки',
                textBY : 'Зажигательные вечеринки',
                textUA : 'Зажигательные вечеринки',
                textEE : 'Зажигательные вечеринки',
                textLT : 'Зажигательные вечеринки',
                textLV : 'Зажигательные вечеринки',
                
            }
        ]
    }
})