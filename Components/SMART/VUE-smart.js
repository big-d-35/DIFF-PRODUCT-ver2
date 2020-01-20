const smartPage = new Vue ({
    el: '#smart-diff',
    data : {
        
        //BANNER
        bannerRU : 'https://www.tui.ru/getmedia/60a7a44b-a8ee-4514-9005-5577425dcecd/banner-smart',
        bannerBY : 'https://www.tui.ru/getmedia/60a7a44b-a8ee-4514-9005-5577425dcecd/banner-smart',
        bannerUA : 'https://www.tui.ru/getmedia/60a7a44b-a8ee-4514-9005-5577425dcecd/banner-smart',
        bannerEE : 'https://www.tui.ru/getmedia/b20c7fed-63ab-477e-93f0-89dd1f2cdb38/EE_banner_SMART@2x',
        bannerLT : 'https://www.tui.ru/getmedia/4eba6c60-1d26-4e82-85d1-6c53f9944f6c/LT_banner_SMART@2x',
        bannerLV : 'https://www.tui.ru/getmedia/ba4a4525-1e54-4ab7-930f-57250a5734b9/LV_banner_SMART@2x',
        
        
        
        
        //TITLE
        titleRU: 'Что такое SMART?',
        titleBY: 'Что такое SMART?',
        titleUA: 'Что такое SMART?',
        titleEE: 'Mis on SMART?',
        titleLT: 'SMART – kas tai?',
        titleLV: 'Kas ir SMART?',
        
        //ABOUT
        aboutRU : 'SMART – это современный подход к отдыху, когда звездность отеля и другие составляющие классического турпакета хотя бы ненадолго не имеют никакого значения, потому что вы фокусируетесь только на своих впечатлениях. SMART – это то, что действительно важно на отдыхе.',
        aboutBY : 'SMART – это современный подход к отдыху, когда звездность отеля и другие составляющие классического турпакета хотя бы ненадолго не имеют никакого значения, потому что вы фокусируетесь только на своих впечатлениях. SMART – это то, что действительно важно на отдыхе.',
        aboutUA : 'SMART – это современный подход к отдыху, когда звездность отеля и другие составляющие классического турпакета хотя бы ненадолго не имеют никакого значения, потому что вы фокусируетесь только на своих впечатлениях. SMART – это то, что действительно важно на отдыхе.',
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
                titleRU : 'Забота об окружающей среде',  
                titleBY : 'Забота об окружающей среде',  
                titleUA : 'Забота об окружающей среде',  
                titleEE : 'Keskkonna austamine',  
                titleLT : 'Dėmesys aplinkai',  
                titleLV : 'Saudzīga attieksme pret apkārtējo vidi',
            },
            
            //2 POINT
            {
                id: '#1block',
                cssPart: 'background-color: #dbfff7; grid-area: block2;  ',
                
                image: 'https://www.tui.ru/getmedia/d5827639-6f10-4811-b264-08860a3a461c/wifi@3x_1',    
                titleRU : 'Wi-Fi на территории отеля и в номерах',  
                titleBY : 'Wi-Fi на территории отеля и в номерах',  
                titleUA : 'Wi-Fi на территории отеля и в номерах',  
                titleEE : 'Wi-Fi',  
                titleLT : 'Wi-Fi',  
                titleLV : 'Wi-Fi',  
            },
            
            //3 POINT
            {
                id: '#3block',
                cssPart: 'background-color: #dbfff7; grid-area: block4; ',
                
                image: 'https://www.tui.ru/getmedia/9673f81a-e29f-4ead-b35c-2d4a6eeac6d9/fon-template',    
                titleRU : 'Кофе Арабика и выпечка',  
                titleBY : 'Кофе Арабика и выпечка',  
                titleUA : 'Кофе Арабика и выпечка',  
                titleEE : 'Arabica kohv ja kondiitritooted',  
                titleLT : 'Arabica kava ir pyragaičiai',  
                titleLV : 'Arabika kafija un konditorejas izstrādājumi',
            },
            
            //4 POINT
            {
                id: '#4block',
                cssPart: 'background-color: #ffdcc6; grid-area: block3; ',
                
                image: 'https://www.tui.ru/getmedia/09865c88-8465-414e-8afa-7cd13d3bceb4/gift',    
                titleRU : 'Подарки гостям',  
                titleBY : 'Подарки гостям',  
                titleUA : 'Подарки гостям',  
                titleEE : 'Kingitus igale külalisele',  
                titleLT : 'Dovana kiekvienam svečiui',  
                titleLV : 'Dāvana katram viesim',
            },
            
            //5 POINT
            {
                id: '#5block',
                cssPart: 'background-color: #ffdcc6; grid-area: block5; ',
                
                image: 'https://www.tui.ru/getmedia/1a56fec2-5abf-43e7-931a-9674341108d3/img-flower',    
                titleRU : 'В номере: тапочки, чайник, набор для душа',  
                titleBY : 'В номере: тапочки, чайник, набор для душа',  
                titleUA : 'В номере: тапочки, чайник, набор для душа',  
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
                titleRU : 'В номерах',
                titleBY : 'В номерах',
                titleUA : 'В номерах',
                titleEE : 'Suurepärane teenindus',
                titleLT : 'Kokybiškas aptarnavimas',
                titleLV : 'Uzlabotais apkalpošanas līmenis',
                
                items : [
                    
                    {
                        itemRU : 'Чайник, чай и кофе',    
                        itemBY : 'Чайник, чай и кофе',    
                        itemUA : 'Чайник, чай и кофе',    
                        itemEE : 'Tee ja kohv tubades',    
                        itemLT : 'Kava ir arbata kambaryje',    
                        itemLV : 'Tēja un kafija numuros',    
                    },
                    
                    {
                        itemRU : 'Тапочки',    
                        itemBY : 'Тапочки',    
                        itemUA : 'Тапочки',    
                        itemEE : 'Tubades sussid',    
                        itemLT : 'Šlepetės kambaryje',    
                        itemLV : 'Čības un vannas istabas piederumu komplekts',    
                    },
                    
                    {
                        itemRU : 'Сейф, фен и утюг',    
                        itemBY : 'Сейф, фен и утюг',    
                        itemUA : 'Сейф, фен и утюг',    
                        itemEE : 'Tasuta seif ja triikraud',    
                        itemLT : 'Nemokamas seifas ir lygintuvas',    
                        itemLV : 'Bezmaksas seifs un gludeklis',    
                    },
                    
                    {
                        itemRU : 'WI-FI',    
                        itemBY : 'WI-FI',    
                        itemUA : 'WI-FI',    
                        itemEE : 'WI-FI',    
                        itemLT : 'Wi-Fi',    
                        itemLV : 'WI-FI',    
                    },
                    
                    {
                        itemRU : 'Вода в мини-баре каждый день',    
                        itemBY : 'Вода в мини-баре каждый день',    
                        itemUA : 'Вода в мини-баре каждый день',    
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
                        itemRU : 'Попкорн перед вечерним шоу',    
                        itemBY : 'Попкорн перед вечерним шоу',    
                        itemUA : 'Попкорн перед вечерним шоу',    
                        itemEE : 'Kodune kokandus',    
                        itemLT : 'Vietinės virtuvės patiekalai',    
                        itemLV : 'Mājas virtuves ēdieni',     
                    },
                    
                    {
                        itemRU : 'Посещение а la carte ресторана 1 раз',    
                        itemBY : 'Посещение а la carte ресторана 1 раз',    
                        itemUA : 'Посещение а la carte ресторана 1 раз',    
                        itemEE : 'A la carte restoran',    
                        itemLT : 'A la carte restoranas',    
                        itemLV : 'A La Carte restorāns',    
                    },
                    
                    {
                        itemRU : 'Блюда для веганов и аллергиков',    
                        itemBY : 'Блюда для веганов и аллергиков',    
                        itemUA : 'Блюда для веганов и аллергиков',    
                        itemEE : 'Temaatilised õhtusöögid',    
                        itemLT : 'Teminės vakarienės',    
                        itemLV : 'Tematiskās vakariņas',    
                    },
                    
                    {
                        itemRU : 'Импортный виски',    
                        itemBY : 'Импортный виски',    
                        itemUA : 'Импортный виски',    
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
                        itemRU : 'Фирменный стритфуд – гирос',    
                        itemBY : 'Фирменный стритфуд – гирос',    
                        itemUA : 'Фирменный стритфуд – гирос',    
                        itemEE : 'Signature tänavatoit - güroskoobid',    
                        itemLT : 'Parašas gatvės maistas - giroskopai',    
                        itemLV : 'Signature Street Food - Gyros',    
                    },
                    
                    
                ]
                
            },
            
            //ITEM 3
            {
                image : 'https://www.tui.ru/getmedia/b323c7de-ba7f-4aa9-8631-aea6e691ead1/img-music@2x',
                titleRU : 'Развлечения',
                titleBY : 'Развлечения',
                titleUA : 'Развлечения',
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
                        itemRU : 'Детский клуб Mini Toucan',    
                        itemBY : 'Детский клуб Mini Toucan',    
                        itemUA : 'Детский клуб Mini Toucan',    
                        itemEE : 'Laste klubi Mini Toucan',    
                        itemLT : 'Vaikų klubas Mini Toucan',    
                        itemLV : 'Bērnu klubs Mini Toucan',    
                    },
                    
                    {
                        itemRU : 'Мороженое в определенные часы',    
                        itemBY : 'Мороженое в определенные часы',    
                        itemUA : 'Мороженое в определенные часы',    
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
                        itemRU : 'BIO огород с пряными травами',    
                        itemBY : 'BIO огород с пряными травами',    
                        itemUA : 'BIO огород с пряными травами',    
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