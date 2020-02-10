const hotels = new Vue({
    el: '#hotels-concepts-block',
    data: {
        
        
        buttonLV : 'Skatīt',
        
        //СТРАНЫ
        countryNames : [
            //ТУРЦИЯ
            {  
                
                showLV : true,
                id: 'country1',
                class: 'active-country',
               
                nameLV : 'Turcija',
            },
            
            //КИПР
            {  
                
                showLV : false,
                id: 'country2',
                class: '',
                
                nameLV : 'Kipra',
            },
            
            //ЧЕРНОГОРИЯ
            {  
                
                showLV : false,
                id: 'country3',
                class: '',
                
                nameLV : 'Melnkalne',
            },
            
            //ИСПАНИЯ
            {  
               
                showLV : true,
                id: 'country4',
                class: '',
                
                nameLV : 'Spānija',
            },
            
            //ГРЕЦИЯ
            {  
                
                showLV : true,
                id: 'country5',
                class: '',
                
                nameLV : 'Grieķija',
            },
            
            //ОАЭ
            {  
                
                showLV : true,
                id: 'country6',
                class: '',
                
                nameLV : 'AAE',
            },
            
            //ИТАЛИЯ
            {  
                
                showLV : false,
                id: 'country7',
                class: '',
                
                nameLV : 'Itālija',
            },
        ],
        
        //HOTELS
        countryHotels: [
            
            //ТУРЦИЯ
            {
                id: 'country1',
                class: 'hotels-active',
                
                showLV : true,
                hotels : [
                    {
                        
                        showLV : true,
                        img: 'https://www.tui.ru/getmedia/bd6933b7-8794-420c-a8d7-94a3eee413aa/Pegasos-Club',
                        sale: '20%',
                        place: 'Indžekuma',
                        name : 'Pegasos Club 4*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Club',
                        clientLink : '/hotel/europe-turkey-alanya-incekum-pegasos__club/',
                        nights : 'Bērnu kluba darba uzsākšana:',
                        service : '25.04.2020.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        
                        showLV : true,
                        img: 'https://www.tui.ru/getmedia/6cc9960c-45a9-4640-95c3-44011016e399/Pegasos-Resort',
                        sale: '20%',
                        place: 'Indžekuma',
                        name : 'Pegasos Resort 5*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Resort',
                        clientLink : '/hotel/europe-turkey-alanya-incekum-pegasos__resort/',
                        nights : 'Bērnu kluba darba uzsākšana:',
                        service : '25.04.2020.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        
                        showLV : true,
                        img: 'https://www.tui.ru/getmedia/4970168b-b01b-4729-ad4b-d1676db5dfbf/Pegasos-Royal',
                        sale: '20%',
                        place: 'Indžekuma',
                        name : 'Pegasos Royal 5*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Royal',
                        clientLink : '/hotel/europe-turkey-alanya-incekum-pegasos__royal/',
                        nights : 'Bērnu kluba darba uzsākšana:',
                        service : '25.04.2020.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    
                ],
            },
            
            //КИПР
            {
                id: 'country2',
                class: '',
               
                showLV : false,
                hotels : [
                    {
                        
                        showLV : false,
                        img: 'https://www.tui.ru/getmedia/c6c31a8c-6f01-41b5-94c2-328fbdfdbca9/Christofinia',
                        sale: '20%',
                        place: 'Aja Napa',
                        name : 'Christofinia 4*',
                        agentLink : '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/Christofinia/',
                        clientLink : '/hotel/europe-cyprus-ayia__napa-ayia__napa-christofinia/',
                        nights : 'Bērnu kluba darba uzsākšana:',
                        service : '1.05.2020.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        
                        showLV : false,
                        img: 'https://www.tui.ru/getmedia/8f7f5571-abae-4ec9-b047-8b6df093e732/St-Raphael-Resort',
                        sale: '20%',
                        place: 'Limasola',
                        name : 'St. Raphael Resort 5*',
                        agentLink : '/Tours/Europe/Cyprus/Limassol-Resort/Limassol-City/St-Raphael-Resort/',
                        clientLink : '/hotel/europe-cyprus-limasol__resort-limasol__city-st__raphael__resort/',
                        nights : 'Bērnu kluba darba uzsākšana:',
                        service : '1.05.2020.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        
                        showLV : false,
                        img: 'https://www.tui.ru/getmedia/f19f06a6-a750-4e1b-af65-472d6121bcbb/Tasia-Maris-Garden',
                        sale: '20%',
                        place: 'Aja Napa',
                        name : 'Tasia Maris Garden 3*',
                        agentLink : '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/tasia-maris-gardens',
                        clientLink : '/hotel/europe-cyprus-ayia__napa-ayia__napa-tasia__maris__gardens/',
                        nights : 'Sezonas jaunums!',
                        service : 'Bērnu kluba darba uzsākšana : 1.05.2020.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    
                ],
            },
            
            //ЧЕРНОГОРИЯ
            {
                id: 'country3',
                class: '',
                
                showLV : false,
                hotels : [
                    {
                        
                        showLV : false,
                        img: 'https://www.tui.ru/getmedia/38ca8efd-db0a-441b-ab1e-fa41c25239e6/Aleksandar-4',
                        sale: '20%',
                        place: 'Budva',
                        name : 'Aleksandar 4*',
                        agentLink : '/tours/europe/montenegro/budvanska-rivijera/budva/aleksandar/',
                        clientLink : '/hotel/europe-montenegro-budvanska__rivijera-budva-aleksandar/',
                        nights : 'Bērnu kluba darba uzsākšana : ',
                        service : '1.06.2020.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        
                        showLV : false,
                        img: 'https://www.tui.ru/getmedia/2195a82b-ba0c-4c62-a498-edd1fa233bd7/Castellastva-4',
                        sale: '20%',
                        place: 'Petrovaca ',
                        name : 'Castellastva 4*',
                        agentLink : '/tours/europe/montenegro/budvanska-rivijera/petrovac/castellastva/',
                        clientLink : '/hotel/europe-montenegro-budvanska__rivijera-petrovac-castellastva/',
                        nights : 'Bērnu kluba darba uzsākšana : ',
                        service : '1.06.2020.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ИСПАНИЯ
            {
                id: 'country4',
                class: '',
                
                showLV : true,
                hotels : [
                    {
                        
                        showLV : true,
                        img: 'https://www.tui.ru/getmedia/7ddfb8df-a910-4986-8141-7bdcf98c043c/Estival-Park-Hotel-Resort',
                        sale: '20%',
                        place: 'Salou',
                        name : 'Estival Park Hotel Resort 4*',
                        agentLink : '/Tours/Europe/Spain/Costa-Dorada/La-Pineda/Estival-Park-Hotel-Resort',
                        clientLink : '/hotel/europe-spain-costa__dorada-la__pineda-estival__park__hotel__resort/',
                        nights : 'Bērnu kluba darba uzsākšana : ',
                        service : '1.06.2020.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        
                        showLV : true,
                        img: 'https://www.tui.ru/getmedia/e08d7974-b3c3-462b-82fa-8f44e91841a5/Don-Juan-Tossa',
                        sale: '20%',
                        place: 'Tossa de Mar',
                        name : 'Don Juan Tossa 4*',
                        agentLink : '/Tours/Europe/Spain/Costa-Brava/Tossa-De-Mar/Hotansa-Tossa',
                        clientLink : '/hotel/europe-spain-costa__brava-tossa__de__mar-don__juan__tossa/',
                        nights : 'Bērnu kluba darba uzsākšana : ',
                        service : '1.06.2020.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        showLV : true,
                        img: 'https://agent.tui.ru/img/0d147d5c-a4f0-4acf-b84d-1e6ebea59a72/Europe/Spain/Mallorca-Palma-de-Mallorca/Palma-Nova/Sol-Palmanova-Mallorca.jpg?geo=1&width=450&height=150',
                        sale: '20%',
                        place: 'Palma de Maljorka',
                        name : 'Sol Palmanova - Mallorca 4*',
                        agentLink : '/Tours/Europe/Spain/Mallorca-Palma-de-Mallorca/Palma-Nova/Sol-Palmanova-Mallorca',
                        clientLink : '/hotel/europe-spain-mallorca__palma__de__mallorca-palma__nova-sol__palmanova__mallorca/',
                        nights : 'Sezonas jaunums!',
                        service : 'Bērnu kluba darba uzsākšana : 1.06.2020.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ГРЕЦИЯ
            {
                id: 'country5',
                class: '',
                
                showLV : true,
                hotels : [
                    {
                        
                        showLV : true,
                        img: 'https://www.tui.ru/getmedia/4eecba8a-323f-4488-b477-4ed05a616e77/Serita-Beach-Resort',
                        sale: '20%',
                        place: 'Krēta',
                        name : 'Serita Beach Resort 5*',
                        agentLink : '/Tours/Europe/Greece/Crete/Anissaras/mitsis-serita-beach',
                        clientLink : '/hotel/europe-greece-crete-anissaras-mitsis__serita__beach/',
                        nights : 'Sezonas jaunums!',
                        service : 'Bērnu kluba darba uzsākšana : 1.06.2020.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ОАЭ
            {
                id: 'country6',
                class: '',
                
                showLV : true,
                hotels : [
                    {
                        showLV : true,
                        img: 'https://www.tui.ru/getmedia/047a3bf6-3074-4997-8c16-4e426ee91c72/Al-Hamra-Village-Golf-Beach-Resort',
                        sale: '20%',
                        place: 'Rāselhaima',
                        name : 'Al Hamra Village Golf & Beach Resort 4*',
                        agentLink : '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-village-golf-beach-resort',
                        clientLink : '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__village__golf__beach__resort/',
                        nights : 'Bērnu kluba darba uzsākšana : ',
                        service : '21.10.2019.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        showLV : true,
                        img: 'https://www.tui.ru/getmedia/4519946b-b42f-45d4-bba3-e83e5ffff4cb/Al-Hamra-Residence',
                        sale: '20%',
                        place: 'Rāselhaima',
                        name : 'Al Hamra Residence 5*',
                        agentLink : '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-residence',
                        clientLink : '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__residence/',
                        nights : 'Bērnu kluba darba uzsākšana : ',
                        service : '21.10.2019.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    {
                        
                        showLV : true,
                        img: 'https://www.tui.ru/getmedia/3433d368-f89a-4c40-ab96-bfdae0d36f44/Blue-Diamond-AlSalam-Resort',
                        sale: '20%',
                        place: 'Rāselhaima',
                        name : 'Blue Diamond AlSalam Resort 5*',
                        agentLink : '/Tours/Asia/UAE/Fujairah/Fujairah-beach-hotels/blue-diamond-alsalam-resort',
                        clientLink : '/hotel/asia-uae-fujairah-fujairah__beach__hotels-blue__diamond__alsalam__resort/',
                        nights : 'Sezonas jaunums!',
                        service : 'Bērnu kluba darba uzsākšana : 10.11.2019.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ИТАЛИЯ
            {
                id: 'country7',
                class: '',
                
                showLV : false,
                hotels : [
                    {
                        
                        showLV : false,
                        img: 'https://www.tui.ru/getmedia/03d6784d-5cda-4810-9fa1-318f1736e8f6/Falkensteiner-Club-Funimation-Calabria-(ex-Garden-Resort-Calabria)',
                        sale: '20%',
                        place: 'Pizzo',
                        name : 'Falkensteiner Club Funimation Calabria (ex. Garden Resort Calabria) 4*',
                        agentLink : '/Tours/Europe/Italy/Calabria/Pizzo/Valtur-Garden-Calabria',
                        clientLink : '/hotel/europe-italy-calabria-pizzo-garden__resort__calabria/',
                        nights : 'Bērnu kluba darba uzsākšana:',
                        service : '1.06.2020.',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            }
        ],
    }
})