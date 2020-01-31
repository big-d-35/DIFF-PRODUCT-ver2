const hotels = new Vue({
    el: '#hotels-concepts-block',
    data: {
        
        buttonEE : 'Vaade',
        
        
        //СТРАНЫ
        countryNames : [
            //ТУРЦИЯ
            {  
                showEE : true,
                
                id: 'country1',
                class: 'active-country',
                nameEE : 'Türgi',
                
            },
            
            //КИПР
            {  
                showEE : false,
                
                id: 'country2',
                class: '',
                nameEE : 'Küpros',
                
            },
            
                        
            //ЕГИПЕТ
            {  
                showEE : true,
                
                id: 'country3',
                class: '',
                nameEE : 'Egiptus',
                
            },
            
            
        ],
        
        //HOTELS
        countryHotels: [
            
            //ТУРЦИЯ
            {
                id: 'country1',
                class: 'hotels-active',
                showEE : true,
                
                hotels : [
                    {
                        showEE : true,
                        img: 'https://www.tui.ru/getmedia/2dd9f3d5-0b94-4b46-9eb4-08334b5a644d/Connected-Club-Hydros',
                        sale: '20%',
                        place: 'Kemer',
                        name : 'DAY&NIGHT Connected Club Hydros 5*',
                        agentLink : '/Tours/Europe/Turkey/kemer/Kemer-Center/TUI-DAY-NIGHT-Connected-Club-Hydros',
                        clientLink : '/hotel/europe-turkey-kemer-kemer__center-tui__day__night__connected__club__hydros/',
                        nights : 'Kontseptsioon alustab: ',
                        service : '25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        showEE : true,
                        img: 'https://www.tui.ru/getmedia/d912dbf7-2679-4d0a-bfa2-d6b8a4076d2b/Connected-Imperial-Turkiz-Hotel',
                        sale: '20%',
                        place: 'Kemer',
                        name : 'DAY&NIGHT Connected Imperial Turkiz Hotel 5*',
                        agentLink : '/Tours/Europe/Turkey/Kemer/Kemer-Center/day-night-connected-imperial-turkiz-hotel',
                        clientLink : '/hotel/europe-turkey-kemer-kemer__center-day__night__connected__imperial__turkiz__hotel/',
                        nights : 'Hooaja uudis!',
                        service : 'Kontseptsioon alustab:  25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    
                ],
            },
            
            //КИПР
            {
                id: 'country2',
                class: '',
                showEE : false,
                
                hotels : [
                     {
                        showEE : false,
                        img: 'https://www.tui.ru/getmedia/07a2e26a-3385-4abe-a489-3a2e8acdabde/Connected-Season',
                        sale: '20%',
                        place: 'Ayia Napa',
                        name : 'DAY&NIGHT Connected Seasons 4*',
                        agentLink : '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/day-night-connected-seasons',
                        clientLink : '/hotel/europe-cyprus-ayia__napa-ayia__napa-day__night__connected__seasons/',
                        nights : 'Hooaja uudis!',
                        service : 'Kontseptsioon alustab: 1.05.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    
                ],
            },
            
            
            
            
            
            //ЕГИПЕТ
            {
                id: 'country3',
                class: '',
                showEE : true,
                
                hotels : [
                    {
                        showEE : true,
                        img: 'https://www.tui.ru/getmedia/5e79c6d1-7d88-4c0a-b7ec-c58ee7e9a0a1/Connected-Tropitel-Waves',
                        sale: '20%',
                        place: 'Sharm El Sheikh',
                        name : 'DAY&NIGHT Connected Tropitel Waves 5*',
                        agentLink : '/Tours/Africa/Egypt/Sharm-El-Sheikh/Sharm-El-Sheikh/day-night-connected-tropitel-waves',
                        clientLink : '/hotel/africa-egypt-sharm__el__sheikh-sharm__el__sheikh-day__night__connected__tropitel__waves/',
                        nights : 'Hooaja uudis!',
                        service : 'Kontseptsioon alustab:  15.12.2019',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            
        ],
    }
})