const hotels = new Vue({
    el: '#hotels-concepts-block',
    data: {
        
        hotelsTitleLT : 'SMART viešbučiai',
        
        
        buttonLT : 'Pasirinkite turą',
        
        
        //СТРАНЫ
        countryNames : [
            //ТУРЦИЯ
            {  
                showLT : true,
                
                id: 'country1',
                class: 'active-country',
                nameLT : 'Turkija',
                
            },
            
            
        ],
        
        //HOTELS
        countryHotels: [
            
            //ТУРЦИЯ
            {
                id: 'country1',
                class: 'hotels-active',
                showLT : true,
                
                hotels : [
                    
                    //HOTEL 1
                    {
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/6254f4b3-f697-43fa-985b-be444daaf8b4/Club-Hotel-Mirabell',
                        sale: '20%',
                        place: 'Turkija / Konakli',
                        name : 'SMART Club Hotel Mirabell 4*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Konakli/Club-Hotel-Mirabell',
                        clientLink : 'https://www.tui.lt/hotel/europe-turkey-alanya-konakli-smart__club__hotel__mirabell/',
                        nights : 'Naujas sezonas!',
                        service : 'Pradedama dirbti pagal koncepciją: 25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    //HOTEL 2
                    {
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/50d0de9a-0fc8-49d3-a4a4-0c66f82fbad6/Lara-Family',
                        sale: '20%',
                        place: 'Turkija / Lara',
                        name : 'SMART Lara Star 5*',
                        agentLink : '/Tours/Europe/Turkey/Antalya/Lara/Lara-Family-Star-Iron-Ambassador',
                        clientLink : 'https://www.tui.lt/hotel/europe-turkey-antalya-lara-smart__lara__family/',
                        nights : 'Naujas sezonas!',
                        service : 'Pradedama dirbti pagal koncepciją: 25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    //HOTEL 3
                    {
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/73316dbc-b972-4d37-ae0d-639e2d22776b/Asdem-Beach-450',
                        sale: '20%',
                        place: 'Turkija / Beldibi',
                        name : 'SMART Asdem Beach 5*',
                        agentLink : '/Tours/Europe/Turkey/Kemer/Beldibi/SMART-Asdem-Beach',
                        clientLink : 'https://www.tui.lt/hotel/europe-turkey-kemer-beldibi-smart__asdem__beach/',
                        nights : 'Naujas sezonas!',
                        service : 'Pradedama dirbti pagal koncepciją: 25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    //HOTEL 4
                    {
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/a43a79d7-940a-46e0-a126-827b1202d30d/Club-Marakesh-Beach-Hotel',
                        sale: '20%',
                        place: 'Turkija / Beldibi',
                        name : 'SMART Club Marakesh Beach Hotel 4*',
                        agentLink : '/Tours/Europe/Turkey/Kemer/Beldibi/Smart-Club-Marakesh-Beach-Hotel',
                        clientLink : 'https://www.tui.lt/hotel/europe-turkey-kemer-beldibi-smart__club__marakesh__beach__hotel/',
                        nights : 'Naujas sezonas!',
                        service : 'Pradedama dirbti pagal koncepciją: 25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    //HOTEL 5
                    {
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/045718b9-97ce-4a80-be7f-d3de87337f9e/Limoncello-Konakli-Beach-Hotel',
                        sale: '20%',
                        place: 'Turkija / Konakli',
                        name : 'SMART Limoncello Konakli Beach Hotel 5*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel-(ex-Club-Konakli)',
                        clientLink : 'https://www.tui.lt/hotel/europe-turkey-alanya-konakli-smart__limoncello__konakli__beach__hotel/',
                        nights : 'Naujas sezonas!',
                        service : 'Pradedama dirbti pagal koncepciją: 25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    //HOTEL 6
                    {
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/aa1cac46-6dfd-4590-8500-b7ffff6b5025/Serra-Park-Hotel-450',
                        sale: '20%',
                        place: 'Turkija / Sorgun',
                        name : 'SMART Serra Park Hotel 4*',
                        agentLink : '/Tours/Europe/Turkey/side/Sorgun/smart-serra-park-hotel',
                        clientLink : 'https://www.tui.lt/hotel/europe-turkey-side-sorgun-smart__serra__park__hotel/',
                        nights : 'Naujas sezonas!',
                        service : 'Pradedama dirbti pagal koncepciją: 25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                ],
            },
            
            
        ],
    }
})