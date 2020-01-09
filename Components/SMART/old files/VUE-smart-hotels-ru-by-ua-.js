const smartHotels = new Vue ({
    el : '#smart-hotels',
    
    data: {
        
        hotelsTitleRU : 'Отели с концепцией SMART',
        hotelsTitleBY : 'Отели с концепцией SMART',
        hotelsTitleUA : 'Отели с концепцией SMART',
        
        
        
        
        countryNames : [
            
            //COUNTRY NAME 1
            {
                id: 'country1', //Этого нет на продакшене -slider
                nameRU: 'Турция',    
                nameBY: 'Турция',    
                nameUA: 'Турция', 
                class: 'button-active',
                showRU: true,
                showBY: true,
                showUA: true,
            },
            
            //COUNTRY NAME 2
           /* {
                id: 'country2-slider',
                nameRU: 'Кипр',    
                nameBY: 'Кипр',    
                nameUA: 'Кипр', 
                class: '',
                showRU: true,
                showBY: true,
                showUA: true,
            },
            
            //COUNTRY NAME 3
            {
                id: 'country3-slider',
                nameRU: 'Египет',    
                nameBY: 'Египет',    
                nameUA: 'Египет', 
                class: '',
                showRU: true,
                showBY: true,
                showUA: true,
            }, */
            
            
        ],
        
        
        countrys : [
            
            //ТУРЦИЯ
            {
                id: 'country1-slider',
                class: 'slider-active',
                showRU: true,
                showBY: true,
                showUA: true,
                //HOTELS 1 ТУРЦИЯ
                countryHotels : [

                    //HOTEL 1
                    {
                    
                    hotelName : 'SMART Club Marakesh Beach Hotel 4*',
                    background: 'https://agent.tui.ru/img/9f32661c-239f-4db0-a47e-527e707b3209/Europe/Turkey/Kemer/Beldibi/Smart-Club-Marakesh-Beach-Hotel.jpg',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Beldibi/Smart-Club-Marakesh-Beach-Hotel',
                    hotelLinkClient: '/hotel/europe-turkey-kemer-beldibi-smart__club__marakesh__beach__hotel/',

                    //RU
                    countryNameRU: 'Турция, Бельдиби',
                    aboutHotelRUItems: [
                        { item: 'Собственный пляж' },
                        { item: 'Бассейн с водными горками' },
                        { item: 'Компактная территория' },
                        { item: '2 открытых бассейна (280 кв. м и 200 кв.м)' },
                        { item: 'Бары отеля, расположенные рядом с пляжем' },
                        { item: 'Детская площадка на пляже под тентом' },
                    ],
                    hotelDateRU : 'запуск май 2020',    
                    buttonRU : 'Выбрать тур',

                    //BY
                    countryNameBY: 'Турция, Бельдиби',
                    aboutHotelBYItems: [
                        { item: 'Собственный пляж' },
                        { item: 'Бассейн с водными горками' },
                        { item: 'Компактная территория' },
                        { item: '2 открытых бассейна (280 кв. м и 200 кв.м)' },
                        { item: 'Бары отеля, расположенные рядом с пляжем' },
                        { item: 'Детская площадка на пляже под тентом' },
                    ],
                    hotelDateBY : 'запуск май 2020',    
                    buttonBY : 'Выбрать тур',

                    //UA
                    countryNameUA: 'Турция, Бельдиби',
                    aboutHotelUAItems: [
                        { item: 'Собственный пляж' },
                        { item: 'Бассейн с водными горками' },
                        { item: 'Компактная территория' },
                        { item: '2 открытых бассейна (280 кв. м и 200 кв.м)' },
                        { item: 'Бары отеля, расположенные рядом с пляжем' },
                        { item: 'Детская площадка на пляже под тентом' },
                    ],
                    hotelDateUA : 'запуск май 2020',
                    buttonUA : 'Выбрать тур',
                },

                    //HOTEL 2
                    /*{
                    
                    hotelName : 'SMART Euphoria Bella Mare Hotel 4*',
                    background: 'https://agent.tui.ru/img/c13ba3f4-345b-4f64-a14d-3f1ebd5eb092/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel.jpg',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel',
                    hotelLinkClient: '/hotel/europe-turkey-alanya-mahmutlar-smart__euphoria__bella__mare__hotel/',

                    //RU
                    countryNameRU: 'Турция, Махмутлар',
                    aboutHotelRUItems: [
                        { item: 'Собственный песчано-галечный пляж в 50 м (через дорогу)' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                        { item: 'Promo (номера стандарт по акционной стоимости)' },

                    ],
                    hotelDateRU : 'запуск май 2020',    
                    buttonRU : 'Выбрать тур',

                    //BY
                    countryNameBY: 'Турция, Махмутлар',
                    aboutHotelBYItems: [
                        { item: 'Собственный песчано-галечный пляж в 50 м (через дорогу)' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                        { item: 'Promo (номера стандарт по акционной стоимости)' },
                    ],
                    hotelDateBY : 'запуск май 2020',    
                    buttonBY : 'Выбрать тур',

                    //UA
                    countryNameUA: 'Турция, Махмутлар',
                    aboutHotelUAItems: [
                        { item: 'Собственный песчано-галечный пляж в 50 м (через дорогу)' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                        { item: 'Promo (номера стандарт по акционной стоимости)' },
                    ],
                    hotelDateUA : 'запуск май 2020',    
                    buttonUA : 'Выбрать тур',
                },*/

                    //HOTEL 3
                    {
                    
                    hotelName : 'SMART Limoncello Konakli Beach Hotel 5*',
                    background: 'https://agent.tui.ru/img/c49774bb-b878-4f04-bec6-d043ea833e95/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel.jpg?geo=1&width=620&height=380',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel-(ex-Club-Konakli)',
                    hotelLinkClient: '/hotel/europe-turkey-alanya-konakli-smart__limoncello__konakli__beach__hotel/',

                    //RU
                    countryNameRU: 'Турция, Конаклы',
                    aboutHotelRUItems: [
                        { item: 'Главный ресторан в марроканском стиле ' },
                        { item: 'Бары в отеле с красивым интерьером' },
                        { item: 'Большой открытый бассейн' },
                        { item: 'Водные горки' },
                        { item: 'Крытый бассейн' },
                        { item: 'Собственный песчаный пляж в 200 м' },
                        { item: 'Есть семейные номера с одной и двумя спальнями' },

                    ],
                    hotelDateRU : 'запуск май 2020',    
                    buttonRU : 'Выбрать тур',

                    //BY
                    countryNameBY: 'Турция, Конаклы',
                    aboutHotelBYItems: [
                        { item: 'Главный ресторан в марроканском стиле ' },
                        { item: 'Бары в отеле с красивым интерьером' },
                        { item: 'Большой открытый бассейн' },
                        { item: 'Водные горки' },
                        { item: 'Крытый бассейн' },
                        { item: 'Собственный песчаный пляж в 200 м' },
                        { item: 'Есть семейные номера с одной и двумя спальнями' },
                    ],
                    hotelDateBY : 'запуск май 2020',    
                    buttonBY : 'Выбрать тур',

                    //UA
                    countryNameUA: 'Турция, Конаклы',
                    aboutHotelUAItems: [
                        { item: 'Главный ресторан в марроканском стиле ' },
                        { item: 'Бары в отеле с красивым интерьером' },
                        { item: 'Большой открытый бассейн' },
                        { item: 'Водные горки' },
                        { item: 'Крытый бассейн' },
                        { item: 'Собственный песчаный пляж в 200 м' },
                        { item: 'Есть семейные номера с одной и двумя спальнями' },
                    ],
                    hotelDateUA : 'запуск май 2020',    
                    buttonUA : 'Выбрать тур',
                },

                    //HOTEL 4
                    {
                    
                    hotelName : 'SMART Club Hotel Mirabell 4*',
                    background: 'https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=bfdecb3c-4e14-4400-83d9-4e426598fd1c&height=460',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Konakli/Club-Hotel-Mirabell',
                    hotelLinkClient: '/hotel/europe-turkey-alanya-konakli-smart__club__hotel__mirabell/',

                    //RU
                    countryNameRU: 'Турция, Конаклы',
                    aboutHotelRUItems: [
                        { item: '70% номеров с видом на море' },
                        { item: 'Размещение с домашними животными' },
                        { item: '2 открытых бассейна (230 кв.м и 165 кв.м)' },
                        { item: '2 водные горки' },
                        { item: 'Красивое современное здание отеля' },
                        { item: 'SPA центр' },
                        { item: 'Собственный песчано-галечный пляж (через переход)' },

                    ],
                    hotelDateRU : 'запуск май 2020',
                    buttonRU : 'Выбрать тур',

                    //BY
                    countryNameBY: 'Турция, Конаклы',
                    aboutHotelBYItems: [
                        { item: '70% номеров с видом на море' },
                        { item: 'Размещение с домашними животными' },
                        { item: '2 открытых бассейна (230 кв.м и 165 кв.м)' },
                        { item: '2 водные горки' },
                        { item: 'Красивое современное здание отеля' },
                        { item: 'SPA центр' },
                        { item: 'Собственный песчано-галечный пляж (через переход)' },
                    ],
                    hotelDateBY : 'запуск май 2020',    
                    buttonBY : 'Выбрать тур',

                    //UA
                    countryNameUA: 'Турция, Конаклы',
                    aboutHotelUAItems: [
                        { item: '70% номеров с видом на море' },
                        { item: 'Размещение с домашними животными' },
                        { item: '2 открытых бассейна (230 кв.м и 165 кв.м)' },
                        { item: '2 водные горки' },
                        { item: 'Красивое современное здание отеля' },
                        { item: 'SPA центр' },
                        { item: 'Собственный песчано-галечный пляж (через переход)' },
                    ],
                    hotelDateUA : 'запуск май 2020',    
                    buttonUA : 'Выбрать тур',
                },
                    
                    //HOTEL 5
                    {
                    
                    hotelName : 'SMART Lara Star 5*',
                    background: 'https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=cb15144e-b409-40d2-9d98-a9c2170537da&height=460',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Antalya/Lara/Lara-Family-Star-Iron-Ambassador',
                    hotelLinkClient: '/hotel/europe-turkey-antalya-lara-smart__lara__family/',

                    //RU
                    countryNameRU: 'Турция, Анталья',
                    aboutHotelRUItems: [
                        { item: 'Новый отель, год открытия - 2019 г.' },
                        { item: 'Пляж в 1 км от отеля (шаттл-бас каждый час от отеля)' },
                        { item: '2 открытых бассейна (600 и 900 кв.м)' },
                        { item: 'Бесплатно: сауна и фитнес-центр' },
                        { item: 'Настольный теннис' },
                        { item: '2 ресторана a la carte' },
                        { item: 'Бар у бассейна и бар на пляже' },

                    ],
                    hotelDateRU : 'запуск май 2020',
                    buttonRU : 'Выбрать тур',

                    //BY
                    countryNameBY: 'Турция, Анталья',
                    aboutHotelBYItems: [
                        { item: 'Новый отель, год открытия - 2019 г.' },
                        { item: 'Пляж в 1 км от отеля (шаттл-бас каждый час от отеля)' },
                        { item: '2 открытых бассейна (600 и 900 кв.м)' },
                        { item: 'Бесплатно: сауна и фитнес-центр' },
                        { item: 'Настольный теннис' },
                        { item: '2 ресторана a la carte' },
                        { item: 'Бар у бассейна и бар на пляже' },
                    ],
                    hotelDateBY : 'запуск май 2020',    
                    buttonBY : 'Выбрать тур',

                    //UA
                    countryNameUA: 'Турция, Анталья',
                    aboutHotelUAItems: [
                        { item: 'Новый отель, год открытия - 2019 г.' },
                        { item: 'Пляж в 1 км от отеля (шаттл-бас каждый час от отеля)' },
                        { item: '2 открытых бассейна (600 и 900 кв.м)' },
                        { item: 'Бесплатно: сауна и фитнес-центр' },
                        { item: 'Настольный теннис' },
                        { item: '2 ресторана a la carte' },
                        { item: 'Бар у бассейна и бар на пляже' },
                    ],
                    hotelDateUA : 'запуск май 2020',    
                    buttonUA : 'Выбрать тур',
                },
                    
                    //HOTEL 6
                    {
                    
                    hotelName : 'SMART Asdem Beach 5*',
                    background: 'https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=d511c15f-1b36-4c82-b22d-c9aabf7610eb&height=460',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Beldibi/SMART-Asdem-Beach',
                    hotelLinkClient: '/hotel/europe-turkey-kemer-beldibi-smart__asdem__beach/',

                    //RU
                    countryNameRU: 'Турция, Бельдиби',
                    aboutHotelRUItems: [
                        { item: 'Теннисный корт и настольный теннис' },
                        { item: 'Хамам и сауна - бесплатно, СПА (платно)' },
                        { item: 'Собственный песчано-галечный пляж, протяженность - 120 м. Есть пирс' },
                        { item: 'Детский инвентарь по запросу бесплатно' },
                        

                    ],
                    hotelDateRU : 'запуск май 2020',
                    buttonRU : 'Выбрать тур',

                    //BY
                    countryNameBY: 'Турция, Бельдиби',
                    aboutHotelBYItems: [
                        { item: 'Теннисный корт и настольный теннис' },
                        { item: 'Хамам и сауна - бесплатно, СПА (платно)' },
                        { item: 'Собственный песчано-галечный пляж, протяженность - 120 м. Есть пирс' },
                        { item: 'Детский инвентарь по запросу бесплатно' },
                        
                    ],
                    hotelDateBY : 'запуск май 2020',    
                    buttonBY : 'Выбрать тур',

                    //UA
                    countryNameUA: 'Турция, Бельдиби',
                    aboutHotelUAItems: [
                        { item: 'Теннисный корт и настольный теннис' },
                        { item: 'Хамам и сауна - бесплатно, СПА (платно)' },
                        { item: 'Собственный песчано-галечный пляж, протяженность - 120 м. Есть пирс' },
                        { item: 'Детский инвентарь по запросу бесплатно' },
                        
                    ],
                    hotelDateUA : 'запуск май 2020',    
                    buttonUA : 'Выбрать тур',
                },
                    
                ],
            },
            
            //КИПР
            /*{
                id: 'country2-slider',
                class: '',
                showRU: true,
                showBY: true,
                showUA: true,
                //HOTELS 2 КИПР
                countryHotels : [

                    //HOTEL 1
                    {
                    
                    hotelName : 'Smart Club Marakesh Beach Hotel 4*',
                    background: 'https://agent.tui.ru/img/9f32661c-239f-4db0-a47e-527e707b3209/Europe/Turkey/Kemer/Beldibi/Smart-Club-Marakesh-Beach-Hotel.jpg',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Beldibi/Smart-Club-Marakesh-Beach-Hotel',
                    hotelLinkClient: '/hotel/europe-turkey-kemer-beldibi-smart__club__marakesh__beach__hotel/',

                    //RU
                    countryNameRU: 'Турция, Бельдиби',
                    aboutHotelRUItems: [
                        { item: 'Собственный пляж' },
                        { item: 'Бассейн с водными горками' },
                        { item: 'Компактная территория' },
                        { item: '2 открытых бассейна (280 кв. м и 200 кв.м)' },
                        { item: 'Бары отеля, расположенные рядом с пляжем' },
                        { item: 'Детская площадка на пляже под тентом' },
                    ],
                    hotelDateRU : 'запуск май 2020',    
                    buttonRU : 'Выбрать тур',

                    //BY
                    countryNameBY: 'Турция, Бельдиби',
                    aboutHotelBYItems: [
                        { item: 'Собственный пляж' },
                        { item: 'Бассейн с водными горками' },
                        { item: 'Компактная территория' },
                        { item: '2 открытых бассейна (280 кв. м и 200 кв.м)' },
                        { item: 'Бары отеля, расположенные рядом с пляжем' },
                        { item: 'Детская площадка на пляже под тентом' },
                    ],
                    hotelDateBY : 'запуск май 2020',    
                    buttonBY : 'Выбрать тур',

                    //UA
                    countryNameUA: 'Турция, Бельдиби',
                    aboutHotelUAItems: [
                        { item: 'Собственный пляж' },
                        { item: 'Бассейн с водными горками' },
                        { item: 'Компактная территория' },
                        { item: '2 открытых бассейна (280 кв. м и 200 кв.м)' },
                        { item: 'Бары отеля, расположенные рядом с пляжем' },
                        { item: 'Детская площадка на пляже под тентом' },
                    ],
                    hotelDateUA : 'запуск май 2020',
                    buttonUA : 'Выбрать тур',
                },

                    //HOTEL 2
                    {
                    
                    hotelName : 'Smart Euphoria Bella Mare Hotel 4*',
                    background: 'https://agent.tui.ru/img/c13ba3f4-345b-4f64-a14d-3f1ebd5eb092/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel.jpg',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel',
                    hotelLinkClient: '/hotel/europe-turkey-alanya-mahmutlar-smart__euphoria__bella__mare__hotel/',

                    //RU
                    countryNameRU: 'Турция, Махмутлар',
                    aboutHotelRUItems: [
                        { item: 'Собственный песчано-галечный пляж в 50 м (через дорогу)' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                        { item: 'Promo (номера стандарт по акционной стоимости)' },

                    ],
                    hotelDateRU : 'запуск май 2020',    
                    buttonRU : 'Выбрать тур',

                    //BY
                    countryNameBY: 'Турция, Махмутлар',
                    aboutHotelBYItems: [
                        { item: 'Собственный песчано-галечный пляж в 50 м (через дорогу)' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                        { item: 'Promo (номера стандарт по акционной стоимости)' },
                    ],
                    hotelDateBY : 'запуск май 2020',    
                    buttonBY : 'Выбрать тур',

                    //UA
                    countryNameUA: 'Турция, Махмутлар',
                    aboutHotelUAItems: [
                        { item: 'Собственный песчано-галечный пляж в 50 м (через дорогу)' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                        { item: 'Promo (номера стандарт по акционной стоимости)' },
                    ],
                    hotelDateUA : 'запуск май 2020',    
                    buttonUA : 'Выбрать тур',
                },

                    //HOTEL 3
                    {
                    
                    hotelName : 'Smart Limoncello Konakli Beach Hotel 5*',
                    background: 'https://agent.tui.ru/img/c49774bb-b878-4f04-bec6-d043ea833e95/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel.jpg?geo=1&width=620&height=380',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel-(ex-Club-Konakli)',
                    hotelLinkClient: '/hotel/europe-turkey-alanya-konakli-limoncello__konakli__beach__hotel__(ex__club__konakli)/',

                    //RU
                    countryNameRU: 'Турция, Конаклы',
                    aboutHotelRUItems: [
                        { item: 'Главный ресторан в марроканском стиле ' },
                        { item: 'Бары в отеле с красивым интерьером' },
                        { item: 'Большой открытый бассейн' },
                        { item: 'Водные горки' },
                        { item: 'Крытый бассейн' },
                        { item: 'Собственный песчаный пляж в 200 м' },
                        { item: 'Есть семейные номера с одной и двумя спальнями' },

                    ],
                    hotelDateRU : 'запуск май 2020',    
                    buttonRU : 'Выбрать тур',

                    //BY
                    countryNameBY: 'Турция, Конаклы',
                    aboutHotelBYItems: [
                        { item: 'Главный ресторан в марроканском стиле ' },
                        { item: 'Бары в отеле с красивым интерьером' },
                        { item: 'Большой открытый бассейн' },
                        { item: 'Водные горки' },
                        { item: 'Крытый бассейн' },
                        { item: 'Собственный песчаный пляж в 200 м' },
                        { item: 'Есть семейные номера с одной и двумя спальнями' },
                    ],
                    hotelDateBY : 'запуск май 2020',    
                    buttonBY : 'Выбрать тур',

                    //UA
                    countryNameUA: 'Турция, Конаклы',
                    aboutHotelUAItems: [
                        { item: 'Главный ресторан в марроканском стиле ' },
                        { item: 'Бары в отеле с красивым интерьером' },
                        { item: 'Большой открытый бассейн' },
                        { item: 'Водные горки' },
                        { item: 'Крытый бассейн' },
                        { item: 'Собственный песчаный пляж в 200 м' },
                        { item: 'Есть семейные номера с одной и двумя спальнями' },
                    ],
                    hotelDateUA : 'запуск май 2020',    
                    buttonUA : 'Выбрать тур',
                },

                    //HOTEL 4
                    {
                    
                    hotelName : 'Smart Club Hotel Mirabell 4*',
                    background: 'https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=bfdecb3c-4e14-4400-83d9-4e426598fd1c&height=460',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Konakli/Club-Hotel-Mirabell',
                    hotelLinkClient: '/hotel/europe-turkey-alanya-konakli-club__hotel__mirabell/',

                    //RU
                    countryNameRU: 'Турция, Конаклы',
                    aboutHotelRUItems: [
                        { item: '70% номеров с видом на море' },
                        { item: 'Размещение с домашними животными' },
                        { item: '2 открытых бассейна (230 кв.м и 165 кв.м)' },
                        { item: '2 водные горки' },
                        { item: 'Красивое современное здание отеля' },
                        { item: 'SPA центр' },
                        { item: 'Собственный песчано-галечный пляж (через переход)' },

                    ],
                    hotelDateRU : 'запуск май 2020',
                    buttonRU : 'Выбрать тур',

                    //BY
                    countryNameBY: 'Турция, Конаклы',
                    aboutHotelBYItems: [
                        { item: '70% номеров с видом на море' },
                        { item: 'Размещение с домашними животными' },
                        { item: '2 открытых бассейна (230 кв.м и 165 кв.м)' },
                        { item: '2 водные горки' },
                        { item: 'Красивое современное здание отеля' },
                        { item: 'SPA центр' },
                        { item: 'Собственный песчано-галечный пляж (через переход)' },
                    ],
                    hotelDateBY : 'запуск май 2020',    
                    buttonBY : 'Выбрать тур',

                    //UA
                    countryNameUA: 'Турция, Конаклы',
                    aboutHotelUAItems: [
                        { item: '70% номеров с видом на море' },
                        { item: 'Размещение с домашними животными' },
                        { item: '2 открытых бассейна (230 кв.м и 165 кв.м)' },
                        { item: '2 водные горки' },
                        { item: 'Красивое современное здание отеля' },
                        { item: 'SPA центр' },
                        { item: 'Собственный песчано-галечный пляж (через переход)' },
                    ],
                    hotelDateUA : 'запуск май 2020',    
                    buttonUA : 'Выбрать тур',
                },
                ],
                
                
            }, */
            
            //ЕГИПЕТ
          /*  {
                id: 'country3-slider',
                class: '',
                showRU: true,
                showBY: true,
                showUA: true,
                //HOTELS 3 ЕГИПЕТ
                countryHotels : [

                    //HOTEL 1
                    {
                    
                    hotelName : 'Smart Club Marakesh Beach Hotel 4*',
                    background: 'https://agent.tui.ru/img/9f32661c-239f-4db0-a47e-527e707b3209/Europe/Turkey/Kemer/Beldibi/Smart-Club-Marakesh-Beach-Hotel.jpg',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Beldibi/Smart-Club-Marakesh-Beach-Hotel',
                    hotelLinkClient: '/hotel/europe-turkey-kemer-beldibi-smart__club__marakesh__beach__hotel/',

                    //RU
                    countryNameRU: 'Турция, Бельдиби',
                    aboutHotelRUItems: [
                        { item: 'Собственный пляж' },
                        { item: 'Бассейн с водными горками' },
                        { item: 'Компактная территория' },
                        { item: '2 открытых бассейна (280 кв. м и 200 кв.м)' },
                        { item: 'Бары отеля, расположенные рядом с пляжем' },
                        { item: 'Детская площадка на пляже под тентом' },
                    ],
                    hotelDateRU : 'запуск май 2020',    
                    buttonRU : 'Выбрать тур',

                    //BY
                    countryNameBY: 'Турция, Бельдиби',
                    aboutHotelBYItems: [
                        { item: 'Собственный пляж' },
                        { item: 'Бассейн с водными горками' },
                        { item: 'Компактная территория' },
                        { item: '2 открытых бассейна (280 кв. м и 200 кв.м)' },
                        { item: 'Бары отеля, расположенные рядом с пляжем' },
                        { item: 'Детская площадка на пляже под тентом' },
                    ],
                    hotelDateBY : 'запуск май 2020',    
                    buttonBY : 'Выбрать тур',

                    //UA
                    countryNameUA: 'Турция, Бельдиби',
                    aboutHotelUAItems: [
                        { item: 'Собственный пляж' },
                        { item: 'Бассейн с водными горками' },
                        { item: 'Компактная территория' },
                        { item: '2 открытых бассейна (280 кв. м и 200 кв.м)' },
                        { item: 'Бары отеля, расположенные рядом с пляжем' },
                        { item: 'Детская площадка на пляже под тентом' },
                    ],
                    hotelDateUA : 'запуск май 2020',
                    buttonUA : 'Выбрать тур',
                },

                    //HOTEL 2
                    {
                    
                    hotelName : 'Smart Euphoria Bella Mare Hotel 4*',
                    background: 'https://agent.tui.ru/img/c13ba3f4-345b-4f64-a14d-3f1ebd5eb092/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel.jpg',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel',
                    hotelLinkClient: '/hotel/europe-turkey-alanya-mahmutlar-smart__euphoria__bella__mare__hotel/',

                    //RU
                    countryNameRU: 'Турция, Махмутлар',
                    aboutHotelRUItems: [
                        { item: 'Собственный песчано-галечный пляж в 50 м (через дорогу)' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                        { item: 'Promo (номера стандарт по акционной стоимости)' },

                    ],
                    hotelDateRU : 'запуск май 2020',    
                    buttonRU : 'Выбрать тур',

                    //BY
                    countryNameBY: 'Турция, Махмутлар',
                    aboutHotelBYItems: [
                        { item: 'Собственный песчано-галечный пляж в 50 м (через дорогу)' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                        { item: 'Promo (номера стандарт по акционной стоимости)' },
                    ],
                    hotelDateBY : 'запуск май 2020',    
                    buttonBY : 'Выбрать тур',

                    //UA
                    countryNameUA: 'Турция, Махмутлар',
                    aboutHotelUAItems: [
                        { item: 'Собственный песчано-галечный пляж в 50 м (через дорогу)' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                        { item: 'Promo (номера стандарт по акционной стоимости)' },
                    ],
                    hotelDateUA : 'запуск май 2020',    
                    buttonUA : 'Выбрать тур',
                },
                    
                    //HOTEL 3
                    {
                    
                    hotelName : 'Smart Euphoria Bella Mare Hotel 4*',
                    background: 'https://agent.tui.ru/img/c13ba3f4-345b-4f64-a14d-3f1ebd5eb092/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel.jpg',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel',
                    hotelLinkClient: '/hotel/europe-turkey-alanya-mahmutlar-smart__euphoria__bella__mare__hotel/',

                    //RU
                    countryNameRU: 'Турция, Махмутлар',
                    aboutHotelRUItems: [
                        { item: 'Собственный песчано-галечный пляж в 50 м (через дорогу)' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                        { item: 'Promo (номера стандарт по акционной стоимости)' },

                    ],
                    hotelDateRU : 'запуск май 2020',    
                    buttonRU : 'Выбрать тур',

                    //BY
                    countryNameBY: 'Турция, Махмутлар',
                    aboutHotelBYItems: [
                        { item: 'Собственный песчано-галечный пляж в 50 м (через дорогу)' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                        { item: 'Promo (номера стандарт по акционной стоимости)' },
                    ],
                    hotelDateBY : 'запуск май 2020',    
                    buttonBY : 'Выбрать тур',

                    //UA
                    countryNameUA: 'Турция, Махмутлар',
                    aboutHotelUAItems: [
                        { item: 'Собственный песчано-галечный пляж в 50 м (через дорогу)' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                        { item: 'Promo (номера стандарт по акционной стоимости)' },
                    ],
                    hotelDateUA : 'запуск май 2020',    
                    buttonUA : 'Выбрать тур',
                },
                    

                    
                ],
                
                
            }, */
        ],
        
        
        
    },
    
    
})