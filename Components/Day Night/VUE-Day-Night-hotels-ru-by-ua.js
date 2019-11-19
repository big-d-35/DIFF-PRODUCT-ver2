const smartHotels = new Vue({
    el: '#hotels',
    data: {

        titleRU: 'Отели с концепцией DAY&NIGHT Connected',
        titleBY: 'Отели с концепцией DAY&NIGHT Connected',
        titleUA: 'Отели с концепцией DAY&NIGHT Connected',


        countryNames: [

            //COUNTRY NAME 1
            {
                id: 'country1',
                nameRU: 'Турция',
                nameBY: 'Турция',
                nameUA: 'Турция',
                class: 'active-link',
                dataBlock: '.slider_2',
                link: '#s2b1',
                showRU: true,
                showBY: true,
                showUA: true,
                
            },

            //COUNTRY NAME 2
            {
                id: 'country2',
                nameRU: 'Кипр',
                nameBY: 'Кипр',
                nameUA: 'Кипр',
                class: '',
                dataBlock: '.slider_2',
                link: '#s2b2',
                showRU: true,
                showBY: true,
                showUA: true,
                
            },
            
            //COUNTRY NAME 3
            {
                id: 'country3',
                nameRU: 'Египет',
                nameBY: 'Египет',
                nameUA: 'Египет',
                class: '',
                dataBlock: '.slider_2',
                link: '#s2b3',
                showRU: false,
                showBY: true,
                showUA: true,
                
            },
        ],

        sliderBlocks: [

            //ТУРЦИЯ
            {
                id: 's2b1',
                class: '',
                showRU: true,
                showBY: true,
                showUA: true,
                
                
                hotels: [

                        //HOTEL 1
                    {
                        name: 'DAY&NIGHT Connected Club Hydros 5*',
                        background: 'background: url(https://www.tui.ru/getmedia/fcd8f40b-a716-4950-9889-ef1b177b6f2d/f_20170515_0821_f_1);background-position: center;background-size: cover',
                        hotelLinkAgent: '/Tours/Europe/Turkey/kemer/Kemer-Center/TUI-DAY-NIGHT-Connected-Club-Hydros/',
                        hotelLinkClient: '/hotel/europe-turkey-kemer-kemer__center-tui__day__night__connected__club__hydros/',

                        //RU
                        countryNameRU: 'Турция, Кемер',
                        aboutHotelRUItems: [
                                { item: 'Центр Кемера' },
                                { item: 'Реновация в 2018 году' },
                                { item: 'Апельсиновая роща на территории' },
                                { item: 'Ночные клубы AURA и INFERNO (5 мин. пешком)' },
                                { item: 'Водные горки для взрослых' },
                                { item: 'Галечный пляж с кристально чистой водой и пирсом' },

                        ],
                        hotelDateRU: 'запуск май 2020',
                        buttonRU: 'Выбрать тур',

                        //BY
                        countryNameBY: 'Турция, Кемер',
                        aboutHotelBYItems: [
                                { item: 'Центр Кемера' },
                                { item: 'Реновация в 2018 году' },
                                { item: 'Апельсиновая роща на территории' },
                                { item: 'Ночные клубы AURA и INFERNO (5 мин. пешком)' },
                                { item: 'Водные горки для взрослых' },
                                { item: 'Галечный пляж с кристально чистой водой и пирсом' },

                        ],
                        hotelDateBY: 'запуск май 2020',
                        buttonBY: 'Выбрать тур',

                        //UA
                        countryNameUA: 'Турция, Кемер',
                        aboutHotelUAItems: [
                                { item: 'Центр Кемера' },
                                { item: 'Реновация в 2018 году' },
                                { item: 'Апельсиновая роща на территории' },
                                { item: 'Ночные клубы AURA и INFERNO (5 мин. пешком)' },
                                { item: 'Водные горки для взрослых' },
                                { item: 'Галечный пляж с кристально чистой водой и пирсом' },

                        ],
                        hotelDateUA: 'запуск май 2020',
                        buttonUA: 'Выбрать тур',
                    },
                    
                    //HOTEL 2
                    {
                        name: 'DAY&NIGHT Connected Imperial Turkiz Hotel 5*',
                        background: 'background: url(https://agent.tui.ru/img/8613f679-7613-4df2-8f49-6b87c5a5c464/Europe/Turkey/Kemer/Kemer-Center/day-night-connected-imperial-turkiz-hotel.jpg?geo=1);background-position: center;background-size: cover',
                        hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Kemer-Center/day-night-connected-imperial-turkiz-hotel',
                        hotelLinkClient: '/hotel/europe-turkey-kemer-kemer__center-day__night__connected__imperial__turkiz__hotel/',

                        //RU
                        countryNameRU: 'Турция, Кемер',
                        aboutHotelRUItems: [
                                { item: 'Cобственный песчано-галечный пляж' },
                                { item: 'Три a la carte ресторана' },
                                { item: 'Сцена для велнес активностей и препати вечеринок на пляже' },
                                { item: 'Бесплатный вход в ночные клубы Aura и Inferno' },
                                

                        ],
                        hotelDateRU: 'запуск май 2020',
                        buttonRU: 'Выбрать тур',

                        //BY
                        countryNameBY: 'Турция, Кемер',
                        aboutHotelBYItems: [
                                { item: 'Cобственный песчано-галечный пляж' },
                                { item: 'Три a la carte ресторана' },
                                { item: 'Сцена для велнес активностей и препати вечеринок на пляже' },
                                { item: 'Бесплатный вход в ночные клубы Aura и Inferno' },

                        ],
                        hotelDateBY: 'запуск май 2020',
                        buttonBY: 'Выбрать тур',

                        //UA
                        countryNameUA: 'Турция, Кемер',
                        aboutHotelUAItems: [
                                { item: 'Cобственный песчано-галечный пляж' },
                                { item: 'Три a la carte ресторана' },
                                { item: 'Сцена для велнес активностей и препати вечеринок на пляже' },
                                { item: 'Бесплатный вход в ночные клубы Aura и Inferno' },

                        ],
                        hotelDateUA: 'запуск май 2020',
                        buttonUA: 'Выбрать тур',
                    },
                ],
            },
            
            //КИПР
            {
                id: 's2b2',
                class: 'n',
                showRU: true,
                showBY: true,
                showUA: true,
                
                
                hotels: [

                        //HOTEL 1
                    {
                        name: 'DAY&NIGHT Connected Season 4*',
                        background: 'background: url(https://agent.tui.ru/img/8dfbd302-20bb-42c8-98f9-ee6d2f6e958b/Europe/Cyprus/Ayia-Napa/Ayia-Napa/day-night-connected-seasons.jpg?geo=1);background-position: center;background-size: cover',
                        hotelLinkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/day-night-connected-seasons',
                        hotelLinkClient: '/hotel/europe-cyprus-ayia__napa-ayia__napa-day__night__connected__seasons/',

                        //RU
                        countryNameRU: 'Кипр, Айя-Напа',
                        aboutHotelRUItems: [
                                { item: 'Открытый бассейн' },
                                { item: 'Муниципальный песчаный пляж в 5 минутах' },
                                { item: 'Отель расположен в центре Айя-Напы' },
                                { item: 'Один a la carte ресторан' },
                                { item: 'Бесплатный вход в ночной клуб Castle в VIP-зону и бесплатным напитком' },
                                

                        ],
                        hotelDateRU: 'запуск май 2020',
                        buttonRU: 'Выбрать тур',

                        //BY
                        countryNameBY: 'Кипр, Айя-Напа',
                        aboutHotelBYItems: [
                                { item: 'Открытый бассейн' },
                                { item: 'Муниципальный песчаный пляж в 5 минутах' },
                                { item: 'Отель расположен в центре Айя-Напы' },
                                { item: 'Один a la carte ресторан' },
                                { item: 'Бесплатный вход в ночной клуб Castle в VIP-зону и бесплатным напитком' },

                        ],
                        hotelDateBY: 'запуск май 2020',
                        buttonBY: 'Выбрать тур',

                        //UA
                        countryNameUA: 'Кипр, Айя-Напа',
                        aboutHotelUAItems: [
                                { item: 'Открытый бассейн' },
                                { item: 'Муниципальный песчаный пляж в 5 минутах' },
                                { item: 'Отель расположен в центре Айя-Напы' },
                                { item: 'Один a la carte ресторан' },
                                { item: 'Бесплатный вход в ночной клуб Castle в VIP-зону и бесплатным напитком' },

                        ],
                        hotelDateUA: 'запуск май 2020',
                        buttonUA: 'Выбрать тур',
                    },
                    
                    
                ],
            },
            
            //ЕГИПЕТ
            {
                id: 's2b3',
                class: 'n',
                showRU: false,
                showBY: true,
                showUA: true,
                
                
                hotels: [

                        //HOTEL 1
                    {
                        name: 'DAY&NIGHT Connected Tropitel Waves 5*',
                        background: 'background: url(https://www.tui.ru/getmedia/5d66d0ce-b9b0-43de-83c2-5869230e9870/day-night);background-position: center;background-size: cover',
                        hotelLinkAgent: '/Tours/Africa/Egypt/Sharm-El-Sheikh/Sharm-El-Sheikh/day-night-connected-tropitel-waves',
                        hotelLinkClient: '/hotel/africa-egypt-sharm__el__sheikh-sharm__el__sheikh-day__night__connected__tropitel__waves/',

                        //RU
                        countryNameRU: 'Египет, Шарм Эль Шейх',
                        aboutHotelRUItems: [
                                { item: 'Компактная территория' },
                                { item: 'Центр Наама Бэй (1 км, через отель Tropitel Naama Bay Hotel 5*, 10 минут пешком)' },
                                { item: 'Абсолютно новый отель (2019 г.)' },
                                { item: 'Водные горки для взрослых (с подогревом в зимний период)' },
                                { item: 'Пляж с песчаным заходом с берега в безветренной бухте' },
                                { item: 'Рядом с отелем популярный торговый центр, рыбные рестораны и модные ночные клубы' },
                                

                        ],
                        hotelDateRU: 'запуск май 2020',
                        buttonRU: 'Выбрать тур',

                        //BY
                        countryNameBY: 'Египет, Шарм Эль Шейх',
                        aboutHotelBYItems: [
                                { item: 'Компактная территория' },
                                { item: 'Центр Наама Бэй (1 км, через отель Tropitel Naama Bay Hotel 5*, 10 минут пешком)' },
                                { item: 'Абсолютно новый отель (2019 г.)' },
                                { item: 'Водные горки для взрослых (с подогревом в зимний период)' },
                                { item: 'Пляж с песчаным заходом с берега в безветренной бухте' },
                                { item: 'Рядом с отелем популярный торговый центр, рыбные рестораны и модные ночные клубы' },

                        ],
                        hotelDateBY: 'запуск май 2020',
                        buttonBY: 'Выбрать тур',

                        //UA
                        countryNameUA: 'Египет, Шарм Эль Шейх',
                        aboutHotelUAItems: [
                                { item: 'Компактная территория' },
                                { item: 'Центр Наама Бэй (1 км, через отель Tropitel Naama Bay Hotel 5*, 10 минут пешком)' },
                                { item: 'Абсолютно новый отель (2019 г.)' },
                                { item: 'Водные горки для взрослых (с подогревом в зимний период)' },
                                { item: 'Пляж с песчаным заходом с берега в безветренной бухте' },
                                { item: 'Рядом с отелем популярный торговый центр, рыбные рестораны и модные ночные клубы' },

                        ],
                        hotelDateUA: 'запуск май 2020',
                        buttonUA: 'Выбрать тур',
                    },
                    
                    
                ],
            }

        ],

    }
})
    
