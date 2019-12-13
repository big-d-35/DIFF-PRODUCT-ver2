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
                        name : 'DAY&NIGHT Connected Club Hydros 5*',
                        agentLink : '/Tours/Europe/Turkey/kemer/Kemer-Center/TUI-DAY-NIGHT-Connected-Club-Hydros',
                        clientLink : '/hotel/europe-turkey-kemer-kemer__center-tui__day__night__connected__club__hydros/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://www.tui.ru/getmedia/59b381dc-b0e1-4ed3-8a09-fb3829116ffd/rectangle-6-copy-12_1',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'DAY&NIGHT Connected Imperial Turkiz Hotel 5*',
                        agentLink : '/Tours/Europe/Turkey/Kemer/Kemer-Center/day-night-connected-imperial-turkiz-hotel',
                        clientLink : '/hotel/europe-turkey-kemer-kemer__center-day__night__connected__imperial__turkiz__hotel/',
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
                        name : 'DAY&NIGHT Connected Season 4*',
                        agentLink : '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/day-night-connected-seasons',
                        clientLink : '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/day-night-connected-seasons',
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