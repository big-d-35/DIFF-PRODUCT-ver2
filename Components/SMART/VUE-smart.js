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
        titleEE: 'Mis on SMART?',
        titleLT: 'SMART – kas tai?',
        titleLV: 'Kas ir SMART?',
        
        //ABOUT
        aboutRU : 'SMART – это концепция отдыха, созданная для тех, кто хочет качественно отдохнуть за разумные деньги. Главное, что мы сделали – добавили пятизвездочный сервис в четырехзвездочные отели. И оставили цену прежней.',
        aboutBY : 'SMART – это концепция отдыха, созданная для тех, кто хочет качественно отдохнуть за разумные деньги. Главное, что мы сделали – добавили пятизвездочный сервис в четырехзвездочные отели. И оставили цену прежней.',
        aboutUA : 'SMART – это концепция отдыха, созданная для тех, кто хочет качественно отдохнуть за разумные деньги. Главное, что мы сделали – добавили пятизвездочный сервис в четырехзвездочные отели. И оставили цену прежней.',
        aboutEE : 'SMART on puhkuskontseptsioon, mis on loodud neile, kes soovivad mõistliku hinnaga puhata. Põhiline, mida tegime, oli viietärnihotelli lisamine neljatärnihotellidele. Ja nad jätsid hinna samaks.',
        aboutLT : 'SMART – poilsio koncepcija, sukurta ieškantiems kokybiško poilsio už prieinamą kainą. Puikios atostogos net ir keturių žvaigždučių viešbučiuose – garantuotos.',
        aboutLV : 'SMART ir atpūtas koncepcija, kas radīta tiem, kas vēlas labi atpūsties par saprātīgu cenu. Galvenais, ko mēs izdarījām, pievienojam pieczvaigžņu apkalpošanas līmeni četrzvaigžņu viesnīcām, bet cenu atstājam tādu pašu”.',
        
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
                titleEE : '100% Arabica kohv ja kondiitritooted',  
                titleLT : '100% „Arabica“ kava ir pyragaičiai',  
                titleLV : '100% Arabika kafija un konditorejas izstrādājumi',
            },
            
            //2 POINT
            {
                id: '#1block',
                cssPart: 'background-color: #dbfff7; grid-area: block2;  ',
                
                image: 'https://www.tui.ru/getmedia/d5827639-6f10-4811-b264-08860a3a461c/wifi@3x_1',    
                titleRU : 'Бесплатный и быстрый wi-fi',  
                titleBY : 'Бесплатный и быстрый wi-fi',  
                titleUA : 'Бесплатный и быстрый wi-fi',  
                titleEE : 'Tasuta ja kiire wi-fi',  
                titleLT : 'Nemokamas belaidis internetas',  
                titleLV : 'Bezmaksas un ātrgaitas WI-FI',  
            },
            
            //3 POINT
            {
                id: '#3block',
                cssPart: 'background-color: #dbfff7; grid-area: block4; ',
                
                image: 'https://www.tui.ru/getmedia/9673f81a-e29f-4ead-b35c-2d4a6eeac6d9/fon-template',    
                titleRU : 'Фирменный Beer Bar & Street food',  
                titleBY : 'Фирменный Beer Bar & Street food',  
                titleUA : 'Фирменный Beer Bar & Street food',  
                titleEE : 'Beer Bar & Street food',  
                titleLT : 'Beer Bar & Street food',  
                titleLV : 'Beer Bar & Street food',
            },
            
            //4 POINT
            {
                id: '#4block',
                cssPart: 'background-color: #ffdcc6; grid-area: block3; ',
                
                image: 'https://www.tui.ru/getmedia/09865c88-8465-414e-8afa-7cd13d3bceb4/gift',    
                titleRU : 'Подарок каждому гостю',  
                titleBY : 'Подарок каждому гостю',  
                titleUA : 'Подарок каждому гостю',  
                titleEE : 'Kingitus igale külalisele',  
                titleLT : 'Dovana kiekvienam svečiui',  
                titleLV : 'Dāvana katram viesim',
            },
            
            //5 POINT
            {
                id: '#5block',
                cssPart: 'background-color: #ffdcc6; grid-area: block5; ',
                
                image: 'https://www.tui.ru/getmedia/1a56fec2-5abf-43e7-931a-9674341108d3/img-flower',    
                titleRU : 'В номере: тапочки, чайник, утюг (по запросу)',  
                titleBY : 'В номере: тапочки, чайник, утюг (по запросу)',  
                titleUA : 'В номере: тапочки, чайник, утюг (по запросу)',  
                titleEE : 'Mugavused: toasussid, veekeetja, triikraud (nõudmisel)',  
                titleLT : 'Kambaryje: šlepetės, virdulys, lygintuvas (pagal užklausimą)',  
                titleLV : 'Numurā: peldmeteļi un čības, tējkanna, gludeklis (pēc pieprasījuma)',
                
            },
        ],
        
        //WHY
        whyTitleRU : 'Почему SMART?',
        whyTitleBY : 'Почему SMART?',
        whyTitleUA : 'Почему SMART?',
        whyTitleEE : 'Miks just SMART?',
        whyTitleLT : 'Kodėl SMART?',
        whyTitleLV : 'Kāpēc SMART?',
        
        whyItems : [
            
            //ITEM 1
            {
                image : 'https://www.tui.ru/getmedia/e3f8ad2d-91ff-4305-badd-577980e8a14e/img-services@2x',
                titleRU : 'Улучшенный сервис',
                titleBY : 'Улучшенный сервис',
                titleUA : 'Улучшенный сервис',
                titleEE : 'Suurepärane teenindus',
                titleLT : 'Kokybiškas aptarnavimas',
                titleLV : 'Uzlabotais apkalpošanas līmenis',
                
                items : [
                    
                    {
                        itemRU : 'Чай и кофе в номерах',    
                        itemBY : 'Чай и кофе в номерах',    
                        itemUA : 'Чай и кофе в номерах',    
                        itemEE : 'Tee ja kohv tubades',    
                        itemLT : 'Kava ir arbata kambaryje',    
                        itemLV : 'Tēja un kafija numuros',    
                    },
                    
                    {
                        itemRU : 'Тапочки в номерах',    
                        itemBY : 'Тапочки в номерах',    
                        itemUA : 'Тапочки в номерах',    
                        itemEE : 'Tubades sussid',    
                        itemLT : 'Šlepetės kambaryje',    
                        itemLV : 'Čības un vannas istabas piederumu komplekts',    
                    },
                    
                    {
                        itemRU : 'Бесплатный сейф и утюг',    
                        itemBY : 'Бесплатный сейф и утюг',    
                        itemUA : 'Бесплатный сейф и утюг',    
                        itemEE : 'Tasuta seif ja triikraud',    
                        itemLT : 'Nemokamas seifas ir lygintuvas',    
                        itemLV : 'Bezmaksas seifs un gludeklis',    
                    },
                    
                    {
                        itemRU : 'Бесплатный WI-FI',    
                        itemBY : 'Бесплатный WI-FI',    
                        itemUA : 'Бесплатный WI-FI',    
                        itemEE : 'Tasuta WI-FI',    
                        itemLT : 'Nemokamas Wi-Fi',    
                        itemLV : 'Bezmaksas WI-FI',    
                    },
                    
                    {
                        itemRU : 'Бережное отношение к окружающей среде',    
                        itemBY : 'Бережное отношение к окружающей среде',    
                        itemUA : 'Бережное отношение к окружающей среде',    
                        itemEE : 'Keskkonna austamine',    
                        itemLT : 'Dėmesys aplinkai',    
                        itemLV : 'Saudzīga attieksme pret apkārtējo vidi',    
                    },
                    
                    {
                        itemRU : 'Фирменный набор для ванной',    
                        itemBY : 'Фирменный набор для ванной',    
                        itemUA : 'Фирменный набор для ванной',    
                        itemEE : 'Signature vannikomplekt',    
                        itemLT : 'Specialus vonios rinkinys',    
                        itemLV : 'Vannas istabas piederumu komplekts',    
                    },
                ]
                
            },
            
            //ITEM 2
            {
                image : 'https://www.tui.ru/getmedia/eeaf4b35-8e29-4b8a-bc46-18e5cad99d4e/img-watermealon@2x',
                titleRU : 'Новый подход к питанию',
                titleBY : 'Новый подход к питанию',
                titleUA : 'Новый подход к питанию',
                titleEE : 'Uus lähenemisviis toitumisele',
                titleLT : 'Kitoks požiūris į mitybą',
                titleLV : 'Jauns ēdināšanas veids',
                
                items : [
                    
                    {
                        itemRU : 'A la carte ресторан',    
                        itemBY : 'A la carte ресторан',    
                        itemUA : 'A la carte ресторан',    
                        itemEE : 'A la carte restoran',    
                        itemLT : 'A la carte restoranas',    
                        itemLV : 'A La Carte restorāns',    
                    },
                    
                    {
                        itemRU : 'Тематические ужины',    
                        itemBY : 'Тематические ужины',    
                        itemUA : 'Тематические ужины',    
                        itemEE : 'Temaatilised õhtusöögid',    
                        itemLT : 'Teminės vakarienės',    
                        itemLV : 'Tematiskās vakariņas',    
                    },
                    
                    {
                        itemRU : 'Свежая выпечка',    
                        itemBY : 'Свежая выпечка',    
                        itemUA : 'Свежая выпечка',    
                        itemEE : 'Õllebaar',    
                        itemLT : 'Švieži kepiniai',    
                        itemLV : 'Mājas ceptuve',    
                    },
                    
                    {
                        itemRU : 'Пивной бар',    
                        itemBY : 'Пивной бар',    
                        itemUA : 'Пивной бар',    
                        itemEE : 'Õllebaar',    
                        itemLT : 'Alaus baras',    
                        itemLV : 'Alus bārs',    
                    },
                    
                    {
                        itemRU : 'Street food',    
                        itemBY : 'Street food',    
                        itemUA : 'Street food',    
                        itemEE : 'Street food',    
                        itemLT : 'Greitas maistas',    
                        itemLV : 'Street food',    
                    },
                    
                    {
                        itemRU : 'Блюда домашней кухни',    
                        itemBY : 'Блюда домашней кухни',    
                        itemUA : 'Блюда домашней кухни',    
                        itemEE : 'Kodune kokandus',    
                        itemLT : 'Vietinės virtuvės patiekalai',    
                        itemLV : 'Mājas virtuves ēdieni',    
                    },
                ]
                
            },
            
            //ITEM 3
            {
                image : 'https://www.tui.ru/getmedia/b323c7de-ba7f-4aa9-8631-aea6e691ead1/img-music@2x',
                titleRU : 'Только нужные развлечения',
                titleBY : 'Только нужные развлечения',
                titleUA : 'Только нужные развлечения',
                titleEE : 'Ainult vajalik meelelahutus',
                titleLT : 'Pramogos',
                titleLV : 'Tikai interesantas izklaides',
                
                items : [
                    
                    {
                        itemRU : 'Живая музыка',    
                        itemBY : 'Живая музыка',    
                        itemUA : 'Живая музыка',    
                        itemEE : 'Õhtused saated',    
                        itemLT : 'Gyva muzika',    
                        itemLV : 'Dzīvā mūzika',    
                    },
                    
                    {
                        itemRU : 'Вечерние шоу',    
                        itemBY : 'Вечерние шоу',    
                        itemUA : 'Вечерние шоу',    
                        itemEE : 'Õhtused saated',    
                        itemLT : 'Vakaro programa',    
                        itemLV : 'Vakara šovi',    
                    },
                    
                    {
                        itemRU : 'Танцевальные программы',    
                        itemBY : 'Танцевальные программы',    
                        itemUA : 'Танцевальные программы',    
                        itemEE : 'Tantsukavad',    
                        itemLT : 'Šokių pasirodymai',    
                        itemLV : 'Deju programmas',    
                    },
                    
                    {
                        itemRU : 'Пенные вечеринки',    
                        itemBY : 'Пенные вечеринки',    
                        itemUA : 'Пенные вечеринки',    
                        itemEE : 'Sporditegevused',    
                        itemLT : 'Putų vakarėliai',    
                        itemLV : 'Putu ballītes',    
                    },
                    
                    {
                        itemRU : 'Спортивные активности',    
                        itemBY : 'Спортивные активности',    
                        itemUA : 'Спортивные активности',    
                        itemEE : 'Sporditegevused',    
                        itemLT : 'Sportinė veikla',    
                        itemLV : 'Sporta aktivitātes',    
                    },
                    
                    
                ]
                
            },
            
            //ITEM 4
            {
                image : 'https://www.tui.ru/getmedia/ea620a16-18ea-42b8-a3f6-df827613ed04/img-children@2x',
                titleRU : 'Для детей',
                titleBY : 'Для детей',
                titleUA : 'Для детей',
                titleEE : 'Lastele',
                titleLT : 'Vaikams',
                titleLV : 'Bērniem',
                
                items : [
                    
                    {
                        itemRU : 'Детское меню',    
                        itemBY : 'Детское меню',    
                        itemUA : 'Детское меню',    
                        itemEE : 'Laste menüü',    
                        itemLT : 'Vaikiškas meniu',    
                        itemLV : 'Bērnu ēdienkarte',    
                    },
                    
                    {
                        itemRU : 'Детский клуб',    
                        itemBY : 'Детский клуб',    
                        itemUA : 'Детский клуб',    
                        itemEE : 'Laste klubi',    
                        itemLT : 'Vaikų klubas',    
                        itemLV : 'Bērnu klubs',    
                    },
                    
                    {
                        itemRU : 'Бесплатное мороженое',    
                        itemBY : 'Бесплатное мороженое',    
                        itemUA : 'Бесплатное мороженое',    
                        itemEE : 'Tasuta jäätis',    
                        itemLT : 'Nemokami ledai',    
                        itemLV : 'Bezmaksas saldējums',    
                    },
                    
                    {
                        itemRU : 'Открытая площадка для игр с навесом',    
                        itemBY : 'Открытая площадка для игр с навесом',    
                        itemUA : 'Открытая площадка для игр с навесом',    
                        itemEE : 'Mänguala õues varikatusega',    
                        itemLT : 'Dengta lauko žaidimų zona',    
                        itemLV : 'Āra rotaļu laukums zem nojumes',    
                    },
                    
                    {
                        itemRU : 'Брендированный подарок',    
                        itemBY : 'Брендированный подарок',    
                        itemUA : 'Брендированный подарок',    
                        itemEE : 'Kaubamärgiga kingitus',    
                        itemLT : 'Viešbučio dovana',    
                        itemLV : 'Brendu dāvana',    
                    },
                    
                    
                ]
                
            },
            
        ],
        
        //OPEN DATES
        dateTitleRU : 'Даты открытий концепции в отелях',
        dateTitleBY : 'Даты открытий концепции в отелях',
        dateTitleUA : 'Даты открытий концепции в отелях',
        dateTitleEE : 'Hotelli avastamise kuupäevad',
        dateTitleLT : 'Viešbučio atradimo datos',
        dateTitleLV : 'Koncepcijas atklāšanas datumi viesnīcās',
        
        openDates : [
            
            //COUNTRY 1
            {
                
                countryNameRU: 'Турция',
                countryNameBY: 'Турция',
                countryNameUA: 'Турция',
                countryNameEE: 'Türgi',
                countryNameLT: 'Turkija',
                countryNameLV: 'Turcija',
                
                hotels : [
                    //HOTEL 1
                    {
                        name: 'Smart Club Marakesh Beach Hotel 4*',
                        linkAgent : '/Tours/Europe/Turkey/Kemer/Beldibi/Smart-Club-Marakesh-Beach-Hotel',
                        linkClient : '/hotel/europe-turkey-kemer-beldibi-smart__club__marakesh__beach__hotel/',
                        date: '05.2020',
                    },
                    
                    //HOTEL 2
                    {
                        name: 'Smart Euphoria Bella Mare Hotel 4*',
                        linkAgent : '/Tours/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel',
                        linkClient : '/hotel/europe-turkey-alanya-mahmutlar-smart__euphoria__bella__mare__hotel/',
                        date: '05.2020',
                    },
                    
                    //HOTEL 3
                    {
                        name: 'Smart Limoncello Konakli Beach Hotel 5*',
                        linkAgent : '/Tours/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel',
                        linkClient : '/hotel/europe-turkey-alanya-konakli-limoncello__konakli__beach__hotel/',
                        date: '05.2020',
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