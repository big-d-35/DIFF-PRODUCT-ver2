const smartPage = new Vue ({
    el: '#smart-diff',
    data : {
        
        //BANNER
        bannerRU : 'https://www.tui.ru/getmedia/60a7a44b-a8ee-4514-9005-5577425dcecd/banner-smart',
        bannerBY : 'https://www.tui.ru/getmedia/60a7a44b-a8ee-4514-9005-5577425dcecd/banner-smart',
        bannerUA : 'https://www.tui.ru/getmedia/60a7a44b-a8ee-4514-9005-5577425dcecd/banner-smart',
        bannerEE : 'https://www.tui.ru/getmedia/60a7a44b-a8ee-4514-9005-5577425dcecd/banner-smart',
        bannerLT : 'https://www.tui.ru/getmedia/60a7a44b-a8ee-4514-9005-5577425dcecd/banner-smart',
        bannerLV : 'https://www.tui.ru/getmedia/60a7a44b-a8ee-4514-9005-5577425dcecd/banner-smart',
        
        
        
        
        //TITLE
        titleRU: 'Что такое SMART?',
        titleBY: 'Что такое SMART?',
        titleUA: 'Что такое SMART?',
        titleEE: '',
        titleLT: '',
        titleLV: '',
        
        //ABOUT
        aboutRU : 'SMART – это концепция отдыха, созданная для тех, кто хочет качественно отдохнуть за разумные деньги. Главное, что мы сделали – добавили пятизвездочный сервис в четырехзвездочные отели. И оставили цену прежней.',
        aboutBY : 'SMART – это концепция отдыха, созданная для тех, кто хочет качественно отдохнуть за разумные деньги. Главное, что мы сделали – добавили пятизвездочный сервис в четырехзвездочные отели. И оставили цену прежней.',
        aboutUA : 'SMART – это концепция отдыха, созданная для тех, кто хочет качественно отдохнуть за разумные деньги. Главное, что мы сделали – добавили пятизвездочный сервис в четырехзвездочные отели. И оставили цену прежней.',
        aboutEE : '',
        aboutLT : '',
        aboutLV : '',
        
        //ФИШКИ
        fishkiPoints : [
            
            
            //1 POINT
            {
                id: '#2block',
                cssPart: 'background-color: #ffdcc6; grid-area: block1; ',
                
                image: 'https://www.tui.ru/getmedia/11df7d91-5c73-4c90-b4ff-a145216b9a73/img-coffee',    
                titleRU : 'Кофе 100% Арабика и выпечка',  
                titleBY : 'Кофе 100% Арабика и выпечка',  
                titleUA : 'Кофе 100% Арабика и выпечка',  
                titleEE : '',  
                titleLT : '',  
                titleLV : '',
            },
            
            //2 POINT
            {
                id: '#1block',
                cssPart: 'background-color: #dbfff7; grid-area: block2;  ',
                
                image: 'https://www.tui.ru/getmedia/d5827639-6f10-4811-b264-08860a3a461c/wifi@3x_1',    
                titleRU : 'Бесплатный и быстрый wi-fi',  
                titleBY : 'Бесплатный и быстрый wi-fi',  
                titleUA : 'Бесплатный и быстрый wi-fi',  
                titleEE : '',  
                titleLT : '',  
                titleLV : '',  
            },
            
            //3 POINT
            {
                id: '#3block',
                cssPart: 'background-color: #dbfff7; grid-area: block4; ',
                
                image: 'https://www.tui.ru/getmedia/9673f81a-e29f-4ead-b35c-2d4a6eeac6d9/fon-template',    
                titleRU : 'Фирменный Beer Bar & Street food',  
                titleBY : 'Фирменный Beer Bar & Street food',  
                titleUA : 'Фирменный Beer Bar & Street food',  
                titleEE : '',  
                titleLT : '',  
                titleLV : '',
            },
            
            //4 POINT
            {
                id: '#4block',
                cssPart: 'background-color: #ffdcc6; grid-area: block3; ',
                
                image: 'https://www.tui.ru/getmedia/09865c88-8465-414e-8afa-7cd13d3bceb4/gift',    
                titleRU : 'Подарок каждому гостю',  
                titleBY : 'Подарок каждому гостю',  
                titleUA : 'Подарок каждому гостю',  
                titleEE : '',  
                titleLT : '',  
                titleLV : '',
            },
            
            //5 POINT
            {
                id: '#5block',
                cssPart: 'background-color: #ffdcc6; grid-area: block5; ',
                
                image: 'https://www.tui.ru/getmedia/1a56fec2-5abf-43e7-931a-9674341108d3/img-flower',    
                titleRU : 'В номере: халаты и тапочки, чайник, утюг (по запросу)',  
                titleBY : 'В номере: халаты и тапочки, чайник, утюг (по запросу)',  
                titleUA : 'В номере: халаты и тапочки, чайник, утюг (по запросу)',  
                titleEE : '',  
                titleLT : '',  
                titleLV : '',
                
            },
        ],
        
        //WHY
        whyTitleRU : 'Почему SMART?',
        whyTitleBY : 'Почему SMART?',
        whyTitleUA : 'Почему SMART?',
        whyTitleEE : '',
        whyTitleLT : '',
        whyTitleLV : '',
        
        whyItems : [
            
            //ITEM 1
            {
                image : 'https://www.tui.ru/getmedia/e3f8ad2d-91ff-4305-badd-577980e8a14e/img-services@2x',
                titleRU : 'Улучшенный сервис',
                titleBY : 'Улучшенный сервис',
                titleUA : 'Улучшенный сервис',
                titleEE : '',
                titleLT : '',
                titleLV : '',
                
                items : [
                    
                    {
                        itemRU : 'Чай и кофе в номерах',    
                        itemBY : 'Чай и кофе в номерах',    
                        itemUA : 'Чай и кофе в номерах',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    {
                        itemRU : 'Тапочки и набор для душа',    
                        itemBY : 'Тапочки и набор для душа',    
                        itemUA : 'Тапочки и набор для душа',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    {
                        itemRU : 'Бесплатный сейф и утюг',    
                        itemBY : 'Бесплатный сейф и утюг',    
                        itemUA : 'Бесплатный сейф и утюг',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    {
                        itemRU : 'Бесплатный WI-FI',    
                        itemBY : 'Бесплатный WI-FI',    
                        itemUA : 'Бесплатный WI-FI',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    {
                        itemRU : 'Бережное отношение к окружающей среде',    
                        itemBY : 'Бережное отношение к окружающей среде',    
                        itemUA : 'Бережное отношение к окружающей среде',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    {
                        itemRU : 'Фирменный набор для ванной',    
                        itemBY : 'Фирменный набор для ванной',    
                        itemUA : 'Фирменный набор для ванной',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                ]
                
            },
            
            //ITEM 2
            {
                image : 'https://www.tui.ru/getmedia/eeaf4b35-8e29-4b8a-bc46-18e5cad99d4e/img-watermealon@2x',
                titleRU : 'Новый подход к питанию',
                titleBY : 'Новый подход к питанию',
                titleUA : 'Новый подход к питанию',
                titleEE : '',
                titleLT : '',
                titleLV : '',
                
                items : [
                    
                    {
                        itemRU : 'A la carte ресторан',    
                        itemBY : 'A la carte ресторан',    
                        itemUA : 'A la carte ресторан',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    {
                        itemRU : 'Тематические ужины',    
                        itemBY : 'Тематические ужины',    
                        itemUA : 'Тематические ужины',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    {
                        itemRU : 'Домашняя пекарня',    
                        itemBY : 'Домашняя пекарня',    
                        itemUA : 'Домашняя пекарня',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    {
                        itemRU : 'Пивной бар',    
                        itemBY : 'Пивной бар',    
                        itemUA : 'Пивной бар',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    {
                        itemRU : 'Street food',    
                        itemBY : 'Street food',    
                        itemUA : 'Street food',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    {
                        itemRU : 'Блюда домашней кухни',    
                        itemBY : 'Блюда домашней кухни',    
                        itemUA : 'Блюда домашней кухни',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                ]
                
            },
            
            //ITEM 3
            {
                image : 'https://www.tui.ru/getmedia/b323c7de-ba7f-4aa9-8631-aea6e691ead1/img-music@2x',
                titleRU : 'Только нужные развлечения',
                titleBY : 'Только нужные развлечения',
                titleUA : 'Только нужные развлечения',
                titleEE : '',
                titleLT : '',
                titleLV : '',
                
                items : [
                    
                    {
                        itemRU : 'Живая музыка',    
                        itemBY : 'Живая музыка',    
                        itemUA : 'Живая музыка',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    {
                        itemRU : 'Вечерние шоу',    
                        itemBY : 'Вечерние шоу',    
                        itemUA : 'Вечерние шоу',    
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
                        itemRU : 'Пенные вечеринки',    
                        itemBY : 'Пенные вечеринки',    
                        itemUA : 'Пенные вечеринки',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    {
                        itemRU : 'Спортивные активности',    
                        itemBY : 'Спортивные активности',    
                        itemUA : 'Спортивные активности',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    
                ]
                
            },
            
            //ITEM 4
            {
                image : 'https://www.tui.ru/getmedia/ea620a16-18ea-42b8-a3f6-df827613ed04/img-children@2x',
                titleRU : 'Для детей',
                titleBY : 'Для детей',
                titleUA : 'Для детей',
                titleEE : '',
                titleLT : '',
                titleLV : '',
                
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
                        itemRU : 'Детский клуб',    
                        itemBY : 'Детский клуб',    
                        itemUA : 'Детский клуб',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    {
                        itemRU : 'Бесплатное мороженое',    
                        itemBY : 'Бесплатное мороженое',    
                        itemUA : 'Бесплатное мороженое',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    {
                        itemRU : 'Открытая площадка для игр с навесом',    
                        itemBY : 'Открытая площадка для игр с навесом',    
                        itemUA : 'Открытая площадка для игр с навесом',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    {
                        itemRU : 'Брендированный подарок',    
                        itemBY : 'Брендированный подарок',    
                        itemUA : 'Брендированный подарок',    
                        itemEE : '',    
                        itemLT : '',    
                        itemLV : '',    
                    },
                    
                    
                ]
                
            },
            
        ],
        
        //OPEN DATES
        dateTitleRU : 'Даты открытий концепции в отелях',
        dateTitleBY : 'Даты открытий концепции в отелях',
        dateTitleUA : 'Даты открытий концепции в отелях',
        dateTitleEE : '',
        dateTitleLT : '',
        dateTitleLV : '',
        
        openDates : [
            
            //COUNTRY 1
            {
                
                countryNameRU: 'Турция',
                countryNameBY: 'Турция',
                countryNameUA: 'Турция',
                countryNameEE: '',
                countryNameLT: '',
                countryNameLV: '',
                
                hotels : [
                    //HOTEL 1
                    {
                        name: 'Smart Club Marakesh Beach Hotel 4*',
                        linkAgent : '/Tours/Europe/Turkey/Kemer/Beldibi/Smart-Club-Marakesh-Beach-Hotel',
                        linkClient : '/hotel/europe-turkey-kemer-beldibi-smart__club__marakesh__beach__hotel/',
                        date: 'май 2020',
                    },
                    
                    //HOTEL 2
                    {
                        name: 'Smart Euphoria Bella Mare Hotel 4*',
                        linkAgent : '/Tours/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel',
                        linkClient : '/hotel/europe-turkey-alanya-mahmutlar-smart__euphoria__bella__mare__hotel/',
                        date: 'май 2020',
                    },
                    
                    //HOTEL 3
                    {
                        name: 'Smart Limoncello Konakli Beach Hotel 5*',
                        linkAgent : '/Tours/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel',
                        linkClient : '/hotel/europe-turkey-alanya-konakli-limoncello__konakli__beach__hotel/',
                        date: 'май 2020',
                    },
                    
                    
                ]
                
            },
            
             //COUNTRY 2
            /*{
                
                countryNameRU: 'Италия',
                countryNameBY: 'Италия',
                countryNameUA: 'Италия',
                countryNameEE: '',
                countryNameLT: '',
                countryNameLV: '',
                
                hotels : [
                    //HOTEL 1
                    {
                        name: 'Christofini 4*',
                        linkAgent : '',
                        linkClient : '',
                        date: '15.10.2019',
                    },
                    
                    
                ]
                
            },
            
            //COUNTRY 3
            {
                
                countryNameRU: 'Кипр',
                countryNameBY: 'Кипр',
                countryNameUA: 'Кипр',
                countryNameEE: '',
                countryNameLT: '',
                countryNameLV: '',
                
                hotels : [
                    //HOTEL 1
                    {
                        name: 'Christofini 4*',
                        linkAgent : '',
                        linkClient : '',
                        date: '15.10.2019',
                    },
                    
                    //HOTEL 2
                    {
                        name: 'St Raphael Resort 5*',
                        linkAgent : '',
                        linkClient : '',
                        date: '15.10.2019',
                    },
                ]
                
            },
            
            
            //COUNTRY 4
            {
                
                countryNameRU: 'Черногория',
                countryNameBY: 'Черногория',
                countryNameUA: 'Черногория',
                countryNameEE: '',
                countryNameLT: '',
                countryNameLV: '',
                
                hotels : [
                    //HOTEL 1
                    {
                        name: 'Christofini 4*',
                        linkAgent : '',
                        linkClient : '',
                        date: '15.10.2019',
                    },
                    
                    //HOTEL 2
                    {
                        name: 'St Raphael Resort 5*',
                        linkAgent : '',
                        linkClient : '',
                        date: '15.10.2019',
                    }, 
                ]
                
            },
            
            //COUNTRY 5
            {
                
                countryNameRU: 'Испания',
                countryNameBY: 'Испания',
                countryNameUA: 'Испания',
                countryNameEE: '',
                countryNameLT: '',
                countryNameLV: '',
                
                hotels : [
                    //HOTEL 1
                    {
                        name: 'Christofini 4*',
                        linkAgent : '',
                        linkClient : '',
                        date: '15.10.2019',
                    },
                    
                    //HOTEL 2
                    {
                        name: 'St Raphael Resort 5*',
                        linkAgent : '',
                        linkClient : '',
                        date: '15.10.2019',
                    },
                     
                ]
                
            },
            
            //COUNTRY 6
            {
                
                countryNameRU: 'Россия',
                countryNameBY: 'Россия',
                countryNameUA: 'Россия',
                countryNameEE: '',
                countryNameLT: '',
                countryNameLV: '',
                
                hotels : [
                    //HOTEL 1
                    {
                        name: 'Christofini 4*',
                        linkAgent : '',
                        linkClient : '',
                        date: '15.10.2019',
                    },
                    
                ]
                
            },*/
        ],
        
        
    }
})