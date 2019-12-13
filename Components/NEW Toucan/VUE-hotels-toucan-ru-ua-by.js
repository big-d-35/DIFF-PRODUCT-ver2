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
            
            //ИТАЛИЯ
            {  
                showRU : true,
                showBY : true,
                showUA : true,
                id: 'country5',
                class: '',
                nameRU : 'Италия',
                nameBY : 'Италия',
                nameUA : 'Италия',
            },
            
            //РОССИЯ
            {  
                showRU : true,
                showBY : true,
                showUA : true,
                id: 'country6',
                class: '',
                nameRU : 'Россия',
                nameBY : 'Россия',
                nameUA : 'Россия',
            },
            
            //ОАЭ
            {  
                showRU : true,
                showBY : true,
                showUA : true,
                id: 'country7',
                class: '',
                nameRU : 'ОАЭ',
                nameBY : 'ОАЭ',
                nameUA : 'ОАЭ',
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
                        name : 'Pegasos Club 4*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Club',
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
                        name : 'Pegasos Resort 5*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Resort',
                        clientLink : '/hotel/europe-turkey-alanya-incekum-pegasos__resort/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'Pegasos Royal 5*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Royal',
                        clientLink : '/hotel/europe-turkey-alanya-incekum-pegasos__royal/',
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
                        name : 'Christofinia 4*',
                        agentLink : '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/Christofinia/',
                        clientLink : '/hotel/europe-cyprus-ayia__napa-ayia__napa-christofinia/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'St Raphael 5*',
                        agentLink : '/Tours/Europe/Cyprus/Limassol-Resort/Limassol-City/St-Raphael-Resort/',
                        clientLink : '/hotel/europe-cyprus-limasol__resort-limasol__city-st__raphael__resort/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'Tasia Maris Garden 3*',
                        agentLink : '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/tasia-maris-gardens',
                        clientLink : '/hotel/europe-cyprus-ayia__napa-ayia__napa-tasia__maris__gardens/',
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
                        name : 'Aleksandar 4*',
                        agentLink : '/tours/europe/montenegro/budvanska-rivijera/budva/aleksandar/',
                        clientLink : '/hotel/europe-montenegro-budvanska__rivijera-budva-aleksandar/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'Castellastva 4*',
                        agentLink : '/tours/europe/montenegro/budvanska-rivijera/petrovac/castellastva/',
                        clientLink : '/hotel/europe-montenegro-budvanska__rivijera-petrovac-castellastva/',
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
                        name : 'Estival Park Hotel Resort 4*',
                        agentLink : '/Tours/Europe/Spain/Costa-Dorada/La-Pineda/Estival-Park-Hotel-Resort',
                        clientLink : '/hotel/europe-spain-costa__dorada-la__pineda-estival__park__hotel__resort/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'Don Juan Tossa 4*',
                        agentLink : '/Tours/Europe/Spain/Costa-Brava/Tossa-De-Mar/Hotansa-Tossa',
                        clientLink : '/hotel/europe-spain-costa__brava-tossa__de__mar-don__juan__tossa/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ИТАЛИЯ
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
                        name : 'Falkensteiner Club Funimation Calabria (ex. Garden Resort Calabria) 4*',
                        agentLink : '/Tours/Europe/Italy/Calabria/Pizzo/Valtur-Garden-Calabria',
                        clientLink : '/hotel/europe-italy-calabria-pizzo-garden__resort__calabria/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //РОССИЯ
            {
                id: 'country6',
                class: '',
                showRU : true,
                showBY : true,
                showUA : true,
                hotels : [
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'Бархатные сезоны 3*',
                        agentLink : '/Tours/Europe/Russia/Sochi/Imeretinskaya-Bukhta/barhatnye-sezony-gorod-otel-russquiy-dom',
                        clientLink : '/hotel/europe-russia-sochi-imeretinskaya__bukhta-barhatnye__sezony__gorod__otel__russquiy__dom/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ОАЭ
            {
                id: 'country7',
                class: '',
                showRU : true,
                showBY : true,
                showUA : true,
                hotels : [
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'Al Hamra Village Golf & Beach Resort 4*',
                        agentLink : '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-village-golf-beach-resort',
                        clientLink : '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__village__golf__beach__resort/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'Al Hamra Residence 5*',
                        agentLink : '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-residence',
                        clientLink : '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__residence/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'Blue Diamond AlSalam Resort 5*',
                        agentLink : '/Tours/Asia/UAE/Fujairah/Fujairah-beach-hotels/blue-diamond-alsalam-resort',
                        clientLink : '/hotel/asia-uae-fujairah-fujairah__beach__hotels-blue__diamond__alsalam__resort/',
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