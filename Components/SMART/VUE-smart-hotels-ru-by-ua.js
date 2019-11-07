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
            },
            
            //COUNTRY NAME 2
            /*{
                id: 'country2',
                nameRU: 'Кипр',    
                nameBY: 'Кипр',    
                nameUA: 'Кипр', 
                class: '',
            },*/
        ],
        
        
        countrys : [
            {
                id: 'country1-slider',
                class: 'slider-active',
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
                        { item: 'Песчано-галечный пляж' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },

                    ],
                    hotelDateRU : 'запуск май 2020',    
                    buttonRU : 'Выбрать тур',

                    //BY
                    countryNameBY: 'Турция, Махмутлар',
                    aboutHotelBYItems: [
                        { item: 'Песчано-галечный пляж' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                    ],
                    hotelDateBY : 'запуск май 2020',    
                    buttonBY : 'Выбрать тур',

                    //UA
                    countryNameUA: 'Турция, Махмутлар',
                    aboutHotelUAItems: [
                        { item: 'Песчано-галечный пляж' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                    ],
                    hotelDateUA : 'запуск май 2020',    
                    buttonUA : 'Выбрать тур',
                },

                    //HOTEL 3
                    {
                    hotelName : 'Smart Limoncello Konakli Beach Hotel 5*',
                    background: 'https://agent.tui.ru/img/c49774bb-b878-4f04-bec6-d043ea833e95/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel.jpg?geo=1&width=620&height=380',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel',
                    hotelLinkClient: '/hotel/europe-turkey-alanya-konakli-limoncello__konakli__beach__hotel/',

                    //RU
                    countryNameRU: 'Турция, Конаклы',
                    aboutHotelRUItems: [
                        { item: 'Песчаный пляж' },
                        { item: 'Зеленая территория' },
                        { item: 'Уникальный дизайн' },
                        { item: 'Просторные номера' },

                    ],
                    hotelDateRU : 'запуск май 2020',    
                    buttonRU : 'Выбрать тур',

                    //BY
                    countryNameBY: 'Турция, Конаклы',
                    aboutHotelBYItems: [
                        { item: 'Песчаный пляж' },
                        { item: 'Зеленая территория' },
                        { item: 'Уникальный дизайн' },
                        { item: 'Просторные номера' },
                    ],
                    hotelDateBY : 'запуск май 2020',    
                    buttonBY : 'Выбрать тур',

                    //UA
                    countryNameUA: 'Турция, Конаклы',
                    aboutHotelUAItems: [
                        { item: 'Песчаный пляж' },
                        { item: 'Зеленая территория' },
                        { item: 'Уникальный дизайн' },
                        { item: 'Просторные номера' },
                    ],
                    hotelDateUA : 'запуск май 2020',    
                    buttonUA : 'Выбрать тур',
                },

                    //HOTEL 4
                    {
                    hotelName : 'Smart Club Hotel Mirabell',
                    background: 'https://www.tui.ru/getmedia/960b240d-2407-4940-8d3e-247396f9eb4a/T12_hotel_Pegasos-Club',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Club',
                    hotelLinkClient: '/hotel/europe-turkey-alanya-incekum-pegasos__club/',

                    //RU
                    countryNameRU: 'Турция, Конаклы',
                    aboutHotelRUItems: [
                        { item: '70% номеров с видом на море' },
                        { item: 'Размещение с домашними животными' },
                        { item: '2 открытых бассейна (230 кв.м и 165 кв.м)' },
                        { item: '2 водные горки' },

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
                    ],
                    hotelDateUA : 'запуск май 2020',    
                    buttonUA : 'Выбрать тур',
                },
                ],
            },
            
            
        ],
        
        
        
    }
})