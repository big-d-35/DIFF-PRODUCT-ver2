const hotels = new Vue({
    el: '#hotels-concepts-block',
    data: {
        
        hotelsTitleRU : 'Отели с концепцией SMART',
        hotelsTitleBY : 'Отели с концепцией SMART',
        hotelsTitleUA : 'Отели с концепцией SMART',
        
        buttonRU : 'Выбрать тур',
        buttonBY : 'Выбрать тур',
        buttonUA : 'Выбрать тур',
        
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
//            {  
//                showRU : true,
//                showBY : true,
//                showUA : true,
//                id: 'country2',
//                class: '',
//                nameRU : 'Кипр',
//                nameBY : 'Кипр',
//                nameUA : 'Кипр',
//            },
            
            //ЧЕРНОГОРИЯ
//            {  
//                showRU : true,
//                showBY : true,
//                showUA : true,
//                id: 'country3',
//                class: '',
//                nameRU : 'Черногория',
//                nameBY : 'Черногория',
//                nameUA : 'Черногория',
//            },
            
            //ИСПАНИЯ
//            {  
//                showRU : true,
//                showBY : true,
//                showUA : true,
//                id: 'country4',
//                class: '',
//                nameRU : 'Испания',
//                nameBY : 'Испания',
//                nameUA : 'Испания',
//            },
//            
//            //ГРЕЦИЯ
//            {  
//                showRU : true,
//                showBY : true,
//                showUA : true,
//                id: 'country5',
//                class: '',
//                nameRU : 'Греция',
//                nameBY : 'Греция',
//                nameUA : 'Греция',
//            },
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
                        img: 'https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=bfdecb3c-4e14-4400-83d9-4e426598fd1c&height=460',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'SMART Club Hotel Mirabell 4*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Konakli/Club-Hotel-Mirabell',
                        clientLink : '/hotel/europe-turkey-alanya-konakli-smart__club__hotel__mirabell/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=cb15144e-b409-40d2-9d98-a9c2170537da&height=460',
                        sale: '20%',
                        place: 'Турция / Анталья',
                        name : 'SMART Lara Family 5*',
                        agentLink : '/Tours/Europe/Turkey/Antalya/Lara/Lara-Family-Star-Iron-Ambassador',
                        clientLink : '/hotel/europe-turkey-antalya-lara-smart__lara__family/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=d511c15f-1b36-4c82-b22d-c9aabf7610eb&height=460',
                        sale: '20%',
                        place: 'Турция / Бельдиби',
                        name : 'SMART Asdem Beach 5*',
                        agentLink : '/Tours/Europe/Turkey/Kemer/Beldibi/SMART-Asdem-Beach',
                        clientLink : '/hotel/europe-turkey-kemer-beldibi-smart__asdem__beach/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://agent.tui.ru/img/9f32661c-239f-4db0-a47e-527e707b3209/Europe/Turkey/Kemer/Beldibi/Smart-Club-Marakesh-Beach-Hotel.jpg',
                        sale: '20%',
                        place: 'Кемер / Финике',
                        name : 'SMART Club Marakesh Beach Hotel 4*',
                        agentLink : '/Tours/Europe/Turkey/Kemer/Beldibi/Smart-Club-Marakesh-Beach-Hotel',
                        clientLink : '/hotel/europe-turkey-kemer-beldibi-smart__club__marakesh__beach__hotel/',
                        nights : '7 ночей',
                        service : 'Ultra All Inclusive',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        img: 'https://agent.tui.ru/img/c49774bb-b878-4f04-bec6-d043ea833e95/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel.jpg?geo=1&width=620&height=380',
                        sale: '20%',
                        place: 'Турция / Бельдиби',
                        name : 'SMART Limoncello Konakli Beach Hotel 5*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel-(ex-Club-Konakli)',
                        clientLink : '/hotel/europe-turkey-alanya-konakli-smart__limoncello__konakli__beach__hotel/',
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