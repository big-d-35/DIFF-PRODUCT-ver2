const smartHotels = new Vue ({
    el : '#smart-hotels',
    
    data: {
        
        hotelsTitleRU : 'Отели с концепцией SMART',
        hotelsTitleBY : 'Отели с концепцией SMART',
        hotelsTitleUA : 'Отели с концепцией SMART',
        
        
        
        
        countryNames : [
            
            //COUNTRY NAME 1
            {
                id: 'country1',
                nameRU: 'Турция',    
                nameBY: 'Турция',    
                nameUA: 'Турция', 
                class: 'button-active',
                showRU: true,
                showBY: true,
                showUA: true,
            },
            
            //COUNTRY NAME 2
            /*{
                id: 'country2',
                nameRU: 'Кипр',    
                nameBY: 'Кипр',    
                nameUA: 'Кипр', 
                class: '',
                showRU: true,
                showBY: true,
                showUA: true,
            },*/
            
            
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
            },
            
            //КИПР
            /*{
                id: 'country2',
                class: '',
                showRU: true,
                showBY: true,
                showUA: true,
                //HOTELS 1 ТУРЦИЯ
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
            },*/
        ],
        
        
        
    },
    
    
})