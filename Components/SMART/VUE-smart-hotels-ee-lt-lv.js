const smartHotels = new Vue ({
    el : '#smart-hotels',
    data: {
        
        hotelsTitleEE : 'Отели с концепцией SMART',
        hotelsTitleLT : 'Отели с концепцией SMART',
        hotelsTitleLV : 'Отели с концепцией SMART',
        
        
        countryNames : [
            
            //COUNTRY NAME 1
            {
                id: 'country1',
                nameEE: 'Турция',    
                nameLT: 'Турция',    
                nameLV: 'Турция', 
                class: 'button-active',
            },
            
            //COUNTRY NAME 2
            {
                id: 'country2',
                nameEE: 'Кипр',    
                nameLT: 'Кипр',    
                nameLV: 'Кипр', 
                class: '',
            },
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

                    //EE
                    countryNameEE: 'Турция, Инджекум',
                    aboutHotelEEItems: [
                        { item: 'Собственный пляж' },
                        { item: 'Бассейн с водными горками' },
                        { item: 'Компактная территория' },
                        { item: '2 открытых бассейна (280 кв. м и 200 кв.м)' },
                    ],
                    buttonEE : 'Выбрать тур',

                    //LT
                    countryNameLT: 'Турция, Инджекум',
                    aboutHotelLTItems: [
                        { item: 'Собственный пляж' },
                        { item: 'Бассейн с водными горками' },
                        { item: 'Компактная территория' },
                        { item: '2 открытых бассейна (280 кв. м и 200 кв.м)' },
                    ],
                    buttonLT : 'Выбрать тур',

                    //LV
                    countryNameLV: 'Турция, Инджекум',
                    aboutHotelLVItems: [
                        { item: 'Собственный пляж' },
                        { item: 'Бассейн с водными горками' },
                        { item: 'Компактная территория' },
                        { item: '2 открытых бассейна (280 кв. м и 200 кв.м)' },
                    ],
                    buttonLV : 'Выбрать тур',
                },

                    //HOTEL 2
                    {
                    hotelName : 'Smart Euphoria Bella Mare Hotel 4*',
                    background: 'https://agent.tui.ru/img/c13ba3f4-345b-4f64-a14d-3f1ebd5eb092/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel.jpg',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel',
                    hotelLinkClient: '/hotel/europe-turkey-alanya-mahmutlar-smart__euphoria__bella__mare__hotel/',

                    //EE
                    countryNameEE: 'Турция, Инджекум',
                    aboutHotelEEItems: [
                        { item: 'Песчано-галечный пляж' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },

                    ],
                    buttonEE : 'Выбрать тур',

                    //LT
                    countryNameLT: 'Турция, Инджекум',
                    aboutHotelLTItems: [
                        { item: 'Песчано-галечный пляж' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                    ],
                    buttonLT : 'Выбрать тур',

                    //LV
                    countryNameLV: 'Турция, Инджекум',
                    aboutHotelLVItems: [
                        { item: 'Песчано-галечный пляж' },
                        { item: 'Компактная территория' },
                        { item: 'Открытые бассейны' },
                        { item: '2 водные горки' },
                        { item: 'A la carte на пляже' },
                    ],
                    buttonLV : 'Выбрать тур',
                },

                    //HOTEL 3
                    {
                    hotelName : 'Smart Limoncello Konakli Beach Hotel 5*',
                    background: 'https://agent.tui.ru/img/c49774bb-b878-4f04-bec6-d043ea833e95/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel.jpg?geo=1&width=620&height=380',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel',
                    hotelLinkClient: '/hotel/europe-turkey-alanya-konakli-limoncello__konakli__beach__hotel/',

                    //EE
                    countryNameEE: 'Турция, Инджекум',
                    aboutHotelEEItems: [
                        { item: 'Песчаный пляж' },
                        { item: 'Зеленая территория' },
                        { item: 'Уникальный дизайн' },
                        { item: 'Просторные номера' },

                    ],
                    buttonEE : 'Выбрать тур',

                    //LT
                    countryNameLT: 'Турция, Инджекум',
                    aboutHotelLTItems: [
                        { item: 'Песчаный пляж' },
                        { item: 'Зеленая территория' },
                        { item: 'Уникальный дизайн' },
                        { item: 'Просторные номера' },
                    ],
                    buttonLT : 'Выбрать тур',

                    //LV
                    countryNameLV: 'Турция, Инджекум',
                    aboutHotelLVItems: [
                        { item: 'Песчаный пляж' },
                        { item: 'Зеленая территория' },
                        { item: 'Уникальный дизайн' },
                        { item: 'Просторные номера' },
                    ],
                    buttonLV : 'Выбрать тур',
                },

                    
                ],
            },
            
            
        ],
        
        
        
    }
})