const concepts = new Vue({
    el: '#fun-sun',
    data: {
        //BANNER
        logo: 'https://www.tui.ru/getmedia/0fdf2707-45c9-4252-983e-08c06296060b/all-logos-white-bg-02@3x',
        logoAlt: 'Fun Sun Logo',
        bannerConceptsBckg: 'bunner-fun-sun',
        //bannerLink: 'https://www.tui.ru/getmedia/8e6d1ac6-955f-4fc3-bddc-648db3c1a4c9/banner_Fun-Sun',
        
        bannerItems: [
            { 
                itemRU: 'Настоящий семейный отдых',
                itemBY: 'Настоящий семейный отдых',
                itemUA: 'Настоящий семейный отдых',
                itemEE: 'Настоящий семейный отдых',
                itemLT: 'Настоящий семейный отдых',
                itemLV: '',
            },
            
            {
                itemRU: 'Преимущественно на первой береговой линии',
                itemBY: 'Преимущественно на первой береговой линии',
                itemUA: 'Преимущественно на первой береговой линии',
                itemEE: 'Преимущественно на первой береговой линии',
                itemLT: 'Chill Out 18+',
                itemLV: '',
                
            },
            
            {
                itemRU: 'Клуб Тукан для детей от 0 до 12 лет',
                itemBY: 'Клуб Тукан для детей от 0 до 12 лет',
                itemUA: 'Клуб Тукан для детей от 0 до 12 лет',
                itemEE: 'Клуб Тукан для детей от 0 до 12 лет',
                itemLT: 'Клуб Тукан для детей от 0 до 12 лет',
                itemLV: '',
                
            },
            
            {
                itemRU: 'Relax-зона 18+ : Chill out и бассейн',
                itemBY: 'Relax-зона 18+ : Chill out и бассейн',
                itemUA: 'Relax-зона 18+ : Chill out и бассейн',
                itemEE: 'Уголок матери и ребенка 24 часа',
                itemLT: 'Уголок матери и ребенка 24 часа',
                itemLV: '',
                
            },
            
        ],
        

        //ABOUT
        aboutTitleRU: 'Что такое FUN&SUN?',
        aboutTitleBY: 'Что такое FUN&SUN?',
        aboutTitleUA: 'Что такое FUN&SUN?',
        aboutTitleEE: 'Что такое FUN&SUN?',
        aboutTitleLT: 'Что такое FUN&SUN?',
        aboutTitleLV: 'Что такое FUN&SUN?',
        
        aboutTextRU: 'FUN&SUN – отдых, где вы наслаждаетесь друг другом, пока дети заняты своими делами.',
        aboutTextBY: 'FUN&SUN – отдых, где вы наслаждаетесь друг другом, пока дети заняты своими делами.',
        aboutTextUA: 'FUN&SUN – отдых, где вы наслаждаетесь друг другом, пока дети заняты своими делами.',
        aboutTextEE: 'FUN&SUN – отдых, где вы наслаждаетесь друг другом, пока дети заняты своими делами.',
        aboutTextLT: 'FUN&SUN – отдых, где вы наслаждаетесь друг другом, пока дети заняты своими делами.',
        aboutTextLV: 'FUN&SUN – отдых, где вы наслаждаетесь друг другом, пока дети заняты своими делами.',
        
        //SERVICES
        servicesTitleRU : 'Услуги в отелях FUN&SUN',
        servicesTitleBY : 'Услуги в отелях FUN&SUN',
        servicesTitleUA : 'Услуги в отелях FUN&SUN',
        servicesTitleEE : 'Услуги в отелях FUN&SUN',
        servicesTitleLT : 'Услуги в отелях FUN&SUN',
        servicesTitleLV : 'Услуги в отелях FUN&SUN',
        
        servicesItems : [
            
            //1
            {
                cssBckg : 'background-color: #cef0ef;',
                image: 'https://www.tui.ru/getmedia/53224c10-ad9c-4eb4-8020-fa4e6cc995d9/towel',
                imageAlt : 'Towel',
                titleRU: 'В номерах',
                titleBY: 'В номерах',
                titleUA: 'В номерах',
                titleEE: 'В номерах',
                titleLT: 'В номерах',
                titleLV: 'В номерах',
                
                items : [
                    {
                        itemRU : 'Wi-Fi',
                        itemBY : 'Wi-Fi',
                        itemUA : 'Wi-Fi',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    
                    {
                        itemRU : 'Вода в мини-баре каждый день',
                        itemBY : 'Вода в мини-баре каждый день',
                        itemUA : 'Вода в мини-баре каждый день',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Уютные халаты и тапочки',
                        itemBY : 'Уютные халаты и тапочки',
                        itemUA : 'Уютные халаты и тапочки',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Набор для душа',
                        itemBY : 'Набор для душа',
                        itemUA : 'Набор для душа',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'ТВ на родном языке',
                        itemBY : 'ТВ на родном языке',
                        itemUA : 'ТВ на родном языке',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    
                    
                   {
                        itemRU : 'Набор для приготовления чая и кофе',
                        itemBY : 'Набор для приготовления чая и кофе',
                        itemUA : 'Набор для приготовления чая и кофе',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                ],
            },
            
            //2
            {
                cssBckg : 'background-color: #ffebd5;',
                image: 'https://www.tui.ru/getmedia/a4abf44b-1960-47ff-b83c-91a52533ad65/coffe',
                imageAlt : 'Coffe',
                titleRU: 'Улучшенное питание',
                titleBY: 'Улучшенное питание',
                titleUA: 'Улучшенное питание',
                titleEE: 'Улучшенное питание',
                titleLT: 'Улучшенное питание',
                titleLV: 'Улучшенное питание',
                
                items : [
                    
                    {
                        itemRU : 'Свежевыжатый апельсиновый сок ',
                        itemBY : 'Свежевыжатый апельсиновый сок',
                        itemUA : 'Свежевыжатый апельсиновый сок',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Рестораны a la carte',
                        itemBY : 'Рестораны a la carte',
                        itemUA : 'Рестораны a la carte',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Десерты, чай и свежесваренный кофе',
                        itemBY : 'Десерты, чай и свежесваренный кофе',
                        itemUA : 'Десерты, чай и свежесваренный кофе',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Импортные алкогольные напитки',
                        itemBY : 'Импортные алкогольные напитки',
                        itemUA : 'Импортные алкогольные напитки',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Мороженое в определенные часы',
                        itemBY : 'Мороженое в определенные часы',
                        itemUA : 'Мороженое в определенные часы',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Индивидуальное приготовление блюд для людей с ограничениями',
                        itemBY : 'Индивидуальное приготовление блюд для людей с ограничениями',
                        itemUA : 'Индивидуальное приготовление блюд для людей с ограничениями',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                ],
            },
            
            //3
            {
                cssBckg : 'background-color: #fff9bf;',
                image: 'https://www.tui.ru/getmedia/23a28fde-8902-4dbf-a9ab-84aa8c50832d/pool',
                imageAlt : 'Pool',
                titleRU: 'Для детей',
                titleBY: 'Для детей',
                titleUA: 'Для детей',
                titleEE: 'Для детей',
                titleLT: 'Территория отеля',
                titleLV: 'Территория отеля',
                
                items : [
                    
                    {
                        itemRU : 'Детское меню',
                        itemBY : 'Детское меню',
                        itemUA : 'Детское меню',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Магазины с детскими товарами',
                        itemBY : 'Магазины с детскими товарами',
                        itemUA : 'Магазины с детскими товарами',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Детский инвентарь (коляски, кроватки)',
                        itemBY : 'Детский инвентарь (коляски, кроватки)',
                        itemUA : 'Детский инвентарь (коляски, кроватки)',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    
                    
                     {
                        itemRU : 'Стиральная машина в клубе Тукан',
                        itemBY : 'Стиральная машина в клубе Тукан',
                        itemUA : 'Стиральная машина в клубе Тукан',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Бассейны с водными горками',
                        itemBY : 'Бассейны с водными горками',
                        itemUA : 'Бассейны с водными горками',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    
                    
                    {
                        itemRU : 'Baby lounge от 0 до 4 лет',
                        itemBY : 'Baby lounge от 0 до 4 лет',
                        itemUA : 'Baby lounge от 0 до 4 лет',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    
                ],
            },
            
            //4
            {
                cssBckg : 'background-color: #d6f2fd;',
                image: 'https://www.tui.ru/getmedia/694d0582-ab12-4e30-8c03-34ae870ab88d/sport',
                imageAlt : 'Sport',
                titleRU: 'Развлечения',
                titleBY: 'Развлечения',
                titleUA: 'Развлечения',
                titleEE: 'Развлечения',
                titleLT: 'Развлечения',
                titleLV: 'Развлечения',
                
                items : [
                    {
                        itemRU : 'Тематические фестивали для всей семьи',
                        itemBY : 'Тематические фестивали для всей семьи',
                        itemUA : 'Тематические фестивали для всей семьи',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Фитнес программы со звездами спорта',
                        itemBY : 'Фитнес программы со звездами спорта',
                        itemUA : 'Фитнес программы со звездами спорта',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                                        
                    {
                        itemRU : 'Пенные и пляжные вечеринки',
                        itemBY : 'Пенные и пляжные вечеринки',
                        itemUA : 'Пенные и пляжные вечеринки',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    
                    
                    {
                        itemRU : 'Вечерние шоу-программы',
                        itemBY : 'Вечерние шоу-программы',
                        itemUA : 'Вечерние шоу-программы',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Уроки плавания',
                        itemBY : 'Уроки плавания',
                        itemUA : 'Уроки плавания',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                ],
            },
            
        ],
        
        //ENTERTAIMENT
        entTitleRU : 'Развлекательная программа',
        entTitleBY : 'Развлекательная программа',
        entTitleUA : 'Развлекательная программа',
        entTitleEE : 'Развлекательная программа',
        entTitleLT : 'Развлекательная программа',
        entTitleLV : 'Развлекательная программа',
        
        entItems : [
            
            //1
            {
                cssBckg : '',
                image: 'https://www.tui.ru/getmedia/960cbe78-eead-4380-9a1a-fe7b3b44f93a/girl@2x',
                imageAlt : 'Girl',
                titleRU: 'Для детей',
                titleBY: 'Для детей',
                titleUA: 'Для детей',
                titleEE: 'Для детей',
                titleLT: 'Для детей',
                titleLV: 'Для детей',
                
                items : [
                    
                    {
                        itemRU : 'Бой водными пистолетами',
                        itemBY : 'Бой водными пистолетами',
                        itemUA : 'Бой водными пистолетами',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Пространство для подростков',
                        itemBY : 'Пространство для подростков',
                        itemUA : 'Пространство для подростков',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Тематические квесты',
                        itemBY : 'Тематические квесты',
                        itemUA : 'Тематические квесты',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Шоу фокусника',
                        itemBY : 'Шоу фокусника',
                        itemUA : 'Шоу фокусника',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Роспись гипсовых фигур',
                        itemBY : 'Роспись гипсовых фигур',
                        itemUA : 'Роспись гипсовых фигур',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Стрит-арт',
                        itemBY : 'Стрит-арт',
                        itemUA : 'Стрит-арт',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Академия плавания и футбола',
                        itemBY : 'Академия плавания и футбола',
                        itemUA : 'Академия плавания и футбола',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                ],
            },
            
            //2
            {
                cssBckg : '',
                image: 'https://www.tui.ru/getmedia/9a74d6b6-cd42-4c6e-807e-f59876a780ce/women@2x',
                imageAlt : 'Woman',
                titleRU: 'Для взрослых',
                titleBY: 'Для взрослых',
                titleUA: 'Для взрослых',
                titleEE: 'Для взрослых',
                titleLT: 'Для взрослых',
                titleLV: 'Для взрослых',
                
                items : [
                    
                    {
                        itemRU : 'Уроки плавания и тенниса',
                        itemBY : 'Уроки плавания и тенниса',
                        itemUA : 'Уроки плавания и тенниса',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Мастер класс по завязыванию парео',
                        itemBY : 'Мастер класс по завязыванию парео',
                        itemUA : 'Мастер класс по завязыванию парео',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Тату хной',
                        itemBY : 'Тату хной',
                        itemUA : 'Тату хной',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Танцевальные программы',
                        itemBY : 'Танцевальные программы',
                        itemUA : 'Танцевальные программы',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Йога, пилатес, аквааэробика',
                        itemBY : 'Йога, пилатес, аквааэробика',
                        itemUA : 'Йога, пилатес, аквааэробика',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Кулинарные мастер-классы',
                        itemBY : 'Кулинарные мастер-классы',
                        itemUA : 'Кулинарные мастер-классы',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Стрельба из лука, дартс, бочче',
                        itemBY : 'Стрельба из лука, дартс, бочче',
                        itemUA : 'Стрельба из лука, дартс, бочче',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                ],
            },
            
        ],
        
        //PHOTOS
        photosTitleRU : 'Фотографии наших гостей',
        photosTitleBY : 'Фотографии наших гостей',
        photosTitleUA : 'Фотографии наших гостей',
        photosTitleEE : 'Фотографии наших гостей',
        photosTitleLT : 'Фотографии наших гостей',
        photosTitleLV : 'Фотографии наших гостей',
        
        photosVideoImg : 'https://www.tui.ru/getmedia/40a3c49a-81aa-4e33-bf54-e879836b5383/liz-0550',
        
        photosItems : [
            
            {
                image : 'https://www.tui.ru/getmedia/718678ed-ada9-4b95-928c-4552c05e620f/img@3x',
                imageAlt : 'photo',
            },
            
            {
                image : 'https://www.tui.ru/getmedia/97f9e085-f478-45c2-b65b-6ce0e34dedd7/img@3x_1',
                imageAlt : 'photo',
            },
            
            {
                image : 'https://www.tui.ru/getmedia/5657074f-243a-4e59-aa4b-250b311079e4/img@3x_2',
                imageAlt : 'photo',
            },
            
            {
                image : 'https://www.tui.ru/getmedia/907d0397-c057-4874-a0da-3d629ec8357a/img@3x_3',
                imageAlt : 'photo',
            },
        ],
        
        //PROGRAMS
        prgrmTitleRU : 'Программы  в отелях FUN&SUN',
        prgrmTitleBY : 'Программы  в отелях FUN&SUN',
        prgrmTitleUA : 'Программы  в отелях FUN&SUN',
        prgrmTitleEE : 'Программы  в отелях FUN&SUN',
        prgrmTitleLT : 'Программы  в отелях FUN&SUN',
        prgrmTitleLV : 'Программы  в отелях FUN&SUN',
        
        prgrmIcon : 'https://www.tui.ru/getmedia/4b9080ea-918e-41db-beb3-2765e73f191f/icon-download@3x',
        prgrmIconAlt : 'icon download',
        prgrmDownloadRU: 'Cкачать',
        prgrmDownloadBY: 'Cкачать',
        prgrmDownloadUA: 'Cкачать',
        prgrmDownloadEE: 'Cкачать',
        prgrmDownloadLT: 'Cкачать',
        prgrmDownloadLV: 'Cкачать',
        
        prgrmItems : [
            
            //1
            {
                cssBckg : '',
                image: 'https://www.tui.ru/getmedia/fe4b34df-28e0-49b8-8aea-c277feee1717/icon-balloons-color@3x',
                imageAlt : 'icon animation',
                titleRU: 'Анимация',
                titleBY: 'Анимация',
                titleUA: 'Анимация',
                titleEE: 'Анимация',
                titleLT: 'Анимация',
                titleLV: 'Анимация',
                
                items : [
                    
                    {
                        itemRU : 'Программа анимации в Турции',
                        itemBY : 'Программа анимации в Турции',
                        itemUA : 'Программа анимации в Турции',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                        
                        linkRU : '',
                    },
                    
                    {
                        itemRU : 'Программа анимации на Кипре',
                        itemBY : 'Программа анимации на Кипре',
                        itemUA : 'Программа анимации на Кипре',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                        
                        linkRU : '',
                    },
                    
                    {
                        itemRU : 'Вечерние шоу на Кипре',
                        itemBY : 'Вечерние шоу на Кипре',
                        itemUA : 'Вечерние шоу на Кипре',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                        
                        linkRU : '',
                    },
                    
                    
                ],
            },
            
            //2
            {
                cssBckg : '',
                image: 'https://www.tui.ru/getmedia/78718935-f8b0-442a-b376-7d4a3ada37e0/icon-playground-color@3x_1',
                imageAlt : 'icon Kids club',
                titleRU: 'Детский клуб Toucan',
                titleBY: 'Детский клуб Toucan',
                titleUA: 'Детский клуб Toucan',
                titleEE: 'Детский клуб Toucan',
                titleLT: 'Детский клуб Toucan',
                titleLV: 'Детский клуб Toucan',
                
                items : [
                    
                    {
                        itemRU : 'Программа клубов Тукан в Турции',
                        itemBY : 'Программа клубов Тукан в Турции',
                        itemUA : 'Программа клубов Тукан в Турции',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                        
                        linkRU : '',
                    },
                    
                    {
                        itemRU : 'Программа клубов Тукан на Кипре',
                        itemBY : 'Программа клубов Тукан на Кипре',
                        itemUA : 'Программа клубов Тукан на Кипре',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                        
                        linkRU : '',
                    },
                    
                    {
                        itemRU : 'Программа клубов Тукан на Кипре',
                        itemBY : 'Программа клубов Тукан на Кипре',
                        itemUA : 'Программа клубов Тукан на Кипре',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                        
                        linkRU : '',
                    },
                    
                    
                ],
            },
            
        ],
        
        //ALL HOTELS
        allHotels : [
            
            //TURKEY
            {
                showRU : true,
                showBY : true,
                showUA : true,
                countryRU : 'Турция',
                countryBY : 'Турция',
                countryUA : 'Турция',
                countryEE : '',
                countryLT : '',
                countryLV : '',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Miarosa Ghazal Resort 5*',
                        linkAgent: '/Tours/Europe/Turkey/kemer/Goynuk/TUI-FUN-SUN-Miarosa-Ghazal-Resort',
                        linkClient : '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__miarosa__ghazal__resort/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Club Belek 5*',
                        linkAgent: '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-Club-Belek',
                        linkClient : '/hotel/europe-turkey-belek-belek-tui__fun__sun__club__belek/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Club Saphire 5*',
                        linkAgent: '/Tours/Europe/Turkey/kemer/Tekirova/TUI-FUN-SUN-Club-Saphire',
                        linkClient : '/hotel/europe-turkey-kemer-tekirova-tui__fun__sun__club__saphire/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Club Serra Palace 5*',
                        linkAgent: '/Tours/Europe/Turkey/side/Kizilot/TUI-FUN-SUN-Club-Serra-Palace',
                        linkClient : '/hotel/europe-turkey-side-kizilot-tui__fun__sun__club__serra__palace/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN River Resort Belek 5*',
                        linkAgent: '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-River-Resort-Belek',
                        linkClient : '/hotel/europe-turkey-belek-belek-tui__fun__sun__river__resort__belek/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Comfort Beach Resort 5*',
                        linkAgent: '/Tours/Europe/Turkey/Kemer/Goynuk/TUI-FUN-SUN-Comfort-Beach-Resort',
                        linkClient : '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__comfort__beach__resort/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Club Di Finica 5*',
                        linkAgent: '/Tours/Europe/Turkey/Kemer/Finike/TUI-FUN-SUN-Club-Di-Finica',
                        linkClient : '/hotel/europe-turkey-kemer-finike-tui__fun__sun__club__di__finica/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Miarosa Incekum Beach 5*',
                        linkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/TUI-FUN-SUN-Miarosa-Incekum-Beach',
                        linkClient : '/hotel/europe-turkey-alanya-incekum-tui__fun__sun__miarosa__incekum__beach/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Euphoria Palm Beach 5*',
                        linkAgent: '/Tours/Europe/Turkey/side/Kizilagac/fun-sun-euphoria-palm-beach',
                        linkClient : '/hotel/europe-turkey-side-kizilagac-fun__sun__euphoria__palm__beach/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Imperial Sunland Resort 5*',
                        linkAgent: '/Tours/Europe/Turkey/Kemer/Beldibi/FUN-SUN-Imperial-Sunland-Resort-(ex-Sunland-Resor',
                        linkClient : '/hotel/europe-turkey-kemer-beldibi-fun__sun__imperial__sunland__resort__(ex__sunland__resor/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Life Side 5',
                        linkAgent: '/Tours/Europe/Turkey/side/Manavgat/fun-sun-life-side-resort-hotel',
                        linkClient : '/hotel/europe-turkey-side-manavgat-fun__sun__life__side/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Life Belek 5*',
                        linkAgent: '/Tours/Europe/Turkey/belek/Bogazkent/FUN-SUN-Life-Belek',
                        linkClient : '/hotel/europe-turkey-belek-bogazkent-fun__sun__life__belek/',
                    },
                    
                ],
            },
            
             //CYPRYS
            {
                showRU : true,
                showBY : true,
                showUA : true,
                countryRU : 'Кипр',
                countryBY : 'Кипр',
                countryUA : 'Кипр',
                countryEE : '',
                countryLT : '',
                countryLV : '',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Panthea Waterpark 4*',
                        linkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/TUI-FUN-SUN-Panthea-Waterpark',
                        linkClient : '/hotel/europe-cyprus-ayia__napa-ayia__napa-fun__sun__panthea__waterpark/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Vangelis Hotel & Suite 4*',
                        linkAgent: '/Tours/Europe/Cyprus/Protaras/Protaras-city/vangelis-hotel-suites',
                        linkClient : '/hotel/europe-cyprus-protaras-protaras__city-fun__sun__vangelis__hotel__suites/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN King Evelthon Beach Hotel 5*',
                        linkAgent: '/Tours/Europe/Cyprus/Paphos/Paphos/fun-sun-king-evelthon-beach-hotel-resort',
                        linkClient : '/hotel/europe-cyprus-paphos-paphos-fun__sun__king__evelthon__beach__hotel__resort/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Anastasia Beach Hotel 4*',
                        linkAgent: '/Tours/Europe/Cyprus/Protaras/Protaras-city/fun-sun-anastasia-beach-hotel',
                        linkClient : '/hotel/europe-cyprus-protaras-protaras__city-fun__sun__anastasia__beach__hotel/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Callisto Holiday Village 4*',
                        linkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/fun-sun-callisto-holiday-village',
                        linkClient : '/hotel/europe-cyprus-ayia__napa-ayia__napa-fun__sun__callisto__holiday__village/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Akteon Holiday Village 4*',
                        linkAgent: '/Tours/Europe/Cyprus/Paphos/Paphos/fun-sun-akteon-holiday-village',
                        linkClient : '/hotel/europe-cyprus-paphos-paphos-fun__sun__akteon__holiday__village/',
                    },
                    
                ],
            },
            
            //ЧЕРНОГОРИЯ
            {
                showRU : true,
                showBY : true,
                showUA : true,
                countryRU : 'Черногория',
                countryBY : 'Черногория',
                countryUA : 'Черногория',
                countryEE : '',
                countryLT : '',
                countryLV : '',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Pearl Beach Resort 4*',
                        linkAgent: '/Tours/Europe/Montenegro/Barska-Rivijera/chan/FUN-SUN-Pearl-Beach-Resort',
                        linkClient : '/hotel/europe-montenegro-barska__rivijera-chan-fun__sun__pearl__beach__resort/',
                    },
                                
                    
                    
                ],
            },
            
            //ИСПАНИЯ
            {
                showRU : true,
                showBY : true,
                showUA : true,
                countryRU : 'Испания',
                countryBY : 'Испания',
                countryUA : 'Испания',
                countryEE : '',
                countryLT : '',
                countryLV : '',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Sorra Daurada Splash 4*',
                        linkAgent: '/Tours/Europe/Spain/Costa-De-Barcelona/Malgrat-De-Mar/Sorra-Daurada',
                        linkClient : '/hotel/europe-spain-costa__de__barcelona-malgrat__de__mar-fun__sun__sorra__daurada__splash/',
                    },
                                
                    
                    
                ],
            },
            
            //ГРЕЦИЯ
            {
                showRU : true,
                showBY : true,
                showUA : true,
                countryRU : 'Греция',
                countryBY : 'Греция',
                countryUA : 'Греция',
                countryEE : '',
                countryLT : '',
                countryLV : '',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Apollo Palace 5*',
                        linkAgent: '/Tours/Europe/Greece/Corfu/Messonghi/sentido-apollo-palace',
                        linkClient : '/hotel/europe-greece-corfu-messonghi-sentido__apollo__palace/',
                    },
                                
                    
                    
                ],
            },
            
            //ЕГИПЕТ
            {
                showRU : false,
                showBY : true,
                showUA : true,
                countryRU : 'Египет',
                countryBY : 'Египет',
                countryUA : 'Египет',
                countryEE : '',
                countryLT : '',
                countryLV : '',
                
                hotels : [
                    {
                        showRU : false,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Albatros Palace 5*',
                        linkAgent: '/Tours/Africa/Egypt/Sharm-El-Sheikh/Sharm-El-Sheikh/FUN-SUN-Albatros-Palace',
                        linkClient : '/hotel/africa-egypt-sharm__el__sheikh-sharm__el__sheikh-fun__sun__albatros__palace/',
                    },
                                
                    
                    
                ],
            },
        ],
    }
})