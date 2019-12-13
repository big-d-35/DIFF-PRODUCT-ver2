const hotels = new Vue({
    el: '#hotels-concepts-block',
    data: {
        
        buttonRU : 'Посмотреть',
        buttonBY : 'Посмотреть',
        buttonUA : 'Посмотреть',
        
        //СТРАНЫ
        countryNames : [
            //ТУРЦИЯ
            {  
                showRU : true,
                showBY : true,
                showUA : true,
                id: 'country1',
                class: 'active-country',
                nameRU : 'Турция',
                nameBY : 'Турция',
                nameUA : 'Турция',
            },
            
            //КИПР
            {  
                showRU : true,
                showBY : true,
                showUA : true,
                id: 'country2',
                class: '',
                nameRU : 'Кипр',
                nameBY : 'Кипр',
                nameUA : 'Кипр',
            },
            
            //ЧЕРНОГОРИЯ
            {  
                showRU : true,
                showBY : true,
                showUA : true,
                id: 'country3',
                class: '',
                nameRU : 'Черногория',
                nameBY : 'Черногория',
                nameUA : 'Черногория',
            },
            
            //ИСПАНИЯ
            {  
                showRU : true,
                showBY : true,
                showUA : true,
                id: 'country4',
                class: '',
                nameRU : 'Испания',
                nameBY : 'Испания',
                nameUA : 'Испания',
            },
            
            //ГРЕЦИЯ
            {  
                showRU : true,
                showBY : true,
                showUA : true,
                id: 'country5',
                class: '',
                nameRU : 'Греция',
                nameBY : 'Греция',
                nameUA : 'Греция',
            },
        ],
        
        //HOTELS
        countryHotels: [
            
            //ТУРЦИЯ
            {
                id: 'country1',
                class: 'hotels-active',
                showRU : true,
                showBY : true,
                showUA : true,
                hotels : [
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Miarosa Ghazal Resort 5*',
                        agentLink : '/Tours/Europe/Turkey/kemer/Goynuk/TUI-FUN-SUN-Miarosa-Ghazal-Resort',
                        clientLink : '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__miarosa__ghazal__resort/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Club Belek 5*',
                        agentLink : '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-Club-Belek',
                        clientLink : '/hotel/europe-turkey-belek-belek-tui__fun__sun__club__belek/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Club Saphire 5*',
                        agentLink : '/Tours/Europe/Turkey/kemer/Tekirova/TUI-FUN-SUN-Club-Saphire',
                        clientLink : '/hotel/europe-turkey-kemer-tekirova-tui__fun__sun__club__saphire/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Club Serra Palace 5*',
                        agentLink : '/Tours/Europe/Turkey/side/Kizilot/TUI-FUN-SUN-Club-Serra-Palace',
                        clientLink : '/hotel/europe-turkey-side-kizilot-tui__fun__sun__club__serra__palace/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN River Resort Belek 5*',
                        agentLink : '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-River-Resort-Belek',
                        clientLink : '/hotel/europe-turkey-belek-belek-tui__fun__sun__river__resort__belek/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Comfort Beach Resort 5*',
                        agentLink : '/Tours/Europe/Turkey/Kemer/Goynuk/TUI-FUN-SUN-Comfort-Beach-Resort',
                        clientLink : '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__comfort__beach__resort/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Club Di Finica 5*',
                        agentLink : '/Tours/Europe/Turkey/Kemer/Finike/TUI-FUN-SUN-Club-Di-Finica',
                        clientLink : '/hotel/europe-turkey-kemer-finike-tui__fun__sun__club__di__finica/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Miarosa Incekum Beach 5*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Incekum/TUI-FUN-SUN-Miarosa-Incekum-Beach',
                        clientLink : '/hotel/europe-turkey-alanya-incekum-tui__fun__sun__miarosa__incekum__beach/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Euphoria Palm Beach 5*',
                        agentLink : '/Tours/Europe/Turkey/side/Kizilagac/fun-sun-euphoria-palm-beach',
                        clientLink : '/hotel/europe-turkey-side-kizilagac-fun__sun__euphoria__palm__beach/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Imperial Sunland Resort 5*',
                        agentLink : '/Tours/Europe/Turkey/Kemer/Beldibi/FUN-SUN-Imperial-Sunland-Resort-(ex-Sunland-Resor',
                        clientLink : '/hotel/europe-turkey-kemer-beldibi-fun__sun__imperial__sunland__resort__(ex__sunland__resor/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Life Side 5*',
                        agentLink : '/Tours/Europe/Turkey/side/Manavgat/fun-sun-life-side-resort-hotel',
                        clientLink : '/hotel/europe-turkey-side-manavgat-fun__sun__life__side__resort__hotel/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Life Belek 5*',
                        agentLink : '/Tours/Europe/Turkey/belek/Bogazkent/FUN-SUN-Life-Belek',
                        clientLink : '/hotel/europe-turkey-belek-bogazkent-fun__sun__life__belek/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                ],
            },
            
            //КИПР
            {
                id: 'country2',
                class: '',
                showRU : true,
                showBY : true,
                showUA : true,
                hotels : [
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Panthea Waterpark 4*',
                        agentLink : '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/TUI-FUN-SUN-Panthea-Waterpark',
                        clientLink : '/hotel/europe-cyprus-ayia__napa-ayia__napa-tui__fun__sun__panthea__waterpark/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Vangelis Hotel & Suite 4*',
                        agentLink : '/Tours/Europe/Cyprus/Protaras/Protaras-city/vangelis-hotel-suites',
                        clientLink : '/hotel/europe-cyprus-protaras-protaras__city-vangelis__hotel__suites/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN King Evelthon Beach Hotel 5*',
                        agentLink : '/Tours/Europe/Cyprus/Paphos/Paphos/fun-sun-king-evelthon-beach-hotel-resort',
                        clientLink : '/hotel/europe-cyprus-paphos-paphos-fun__sun__king__evelthon__beach__hotel__resort/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Anastasia Beach Hotel 4*',
                        agentLink : '/Tours/Europe/Cyprus/Protaras/Protaras-city/fun-sun-anastasia-beach-hotel',
                        clientLink : '/hotel/europe-cyprus-protaras-protaras__city-fun__sun__anastasia__beach__hotel/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ЧЕРНОГОРИЯ
            {
                id: 'country3',
                class: '',
                showRU : true,
                showBY : true,
                showUA : true,
                hotels : [
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Pearl Beach Resort 4*',
                        agentLink : '/Tours/Europe/Montenegro/Barska-Rivijera/chan/FUN-SUN-Pearl-Beach-Resort',
                        clientLink : '/hotel/europe-montenegro-barska__rivijera-chan-fun__sun__pearl__beach__resort/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ИСПАНИЯ
            {
                id: 'country4',
                class: '',
                showRU : true,
                showBY : true,
                showUA : true,
                hotels : [
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Sorra Daurada Splash 4*',
                        agentLink : '/Tours/Europe/Spain/Costa-De-Barcelona/Malgrat-De-Mar/Sorra-Daurada',
                        clientLink : '/hotel/europe-spain-costa__de__barcelona-malgrat__de__mar-sorra__daurada/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ГРЕЦИЯ
            {
                id: 'country5',
                class: '',
                showRU : true,
                showBY : true,
                showUA : true,
                hotels : [
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'FUN&SUN Apollo Palace 5*',
                        agentLink : '/Tours/Europe/Greece/Corfu/Messonghi/sentido-apollo-palace',
                        clientLink : '/hotel/europe-greece-corfu-messonghi-sentido__apollo__palace/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
        ],
    }
})