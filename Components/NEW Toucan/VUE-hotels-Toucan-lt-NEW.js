const hotels = new Vue({
    el: '#hotels-concepts-block',
    data: {
        
        
        buttonLT : 'Vaizdas',
        
        //СТРАНЫ
        countryNames : [
            //ТУРЦИЯ
            {  
                
                showLT : true,
                id: 'country1',
                class: 'active-country',
               
                nameLT : 'Turkija',
            },
            
            //КИПР
            {  
                
                showLT : true,
                id: 'country2',
                class: '',
                
                nameLT : 'Kipras',
            },
            
            //ЧЕРНОГОРИЯ
            {  
                
                showLT : true,
                id: 'country3',
                class: '',
                
                nameLT : 'Juodkalnija',
            },
            
            //ИСПАНИЯ
            {  
               
                showLT : true,
                id: 'country4',
                class: '',
                
                nameLT : 'Ispanija',
            },
            
            //ГРЕЦИЯ
            {  
                
                showLT : true,
                id: 'country5',
                class: '',
                
                nameLT : 'Graikija',
            },
            
            //ОАЭ
            {  
                
                showLT : true,
                id: 'country6',
                class: '',
                
                nameLT : 'JAE',
            },
            
            //ИТАЛИЯ
            {  
                
                showLT : false,
                id: 'country7',
                class: '',
                
                nameLT : 'Italija',
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
                    {
                        
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/bd6933b7-8794-420c-a8d7-94a3eee413aa/Pegasos-Club',
                        sale: '20%',
                        place: 'Incekumas',
                        name : 'Pegasos Club 4*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Club',
                        clientLink : '/hotel/europe-turkey-alanya-incekum-pegasos__club/',
                        nights : 'Vaikų klubo pradžia:',
                        service : '25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/6cc9960c-45a9-4640-95c3-44011016e399/Pegasos-Resort',
                        sale: '20%',
                        place: 'Incekumas',
                        name : 'Pegasos Resort 5*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Resort',
                        clientLink : '/hotel/europe-turkey-alanya-incekum-pegasos__resort/',
                        nights : 'Vaikų klubo pradžia:',
                        service : '25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/4970168b-b01b-4729-ad4b-d1676db5dfbf/Pegasos-Royal',
                        sale: '20%',
                        place: 'Incekumas',
                        name : 'Pegasos Royal 5*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Royal',
                        clientLink : '/hotel/europe-turkey-alanya-incekum-pegasos__royal/',
                        nights : 'Vaikų klubo pradžia:',
                        service : '25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    
                ],
            },
            
            //КИПР
            {
                id: 'country2',
                class: '',
               
                showLT : true,
                hotels : [
                    {
                        
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/c6c31a8c-6f01-41b5-94c2-328fbdfdbca9/Christofinia',
                        sale: '20%',
                        place: 'Ayia Napa',
                        name : 'Christofinia 4*',
                        agentLink : '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/Christofinia/',
                        clientLink : '/hotel/europe-cyprus-ayia__napa-ayia__napa-christofinia/',
                        nights : 'Vaikų klubo pradžia:',
                        service : '1.05.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/8f7f5571-abae-4ec9-b047-8b6df093e732/St-Raphael-Resort',
                        sale: '20%',
                        place: 'Limasolis',
                        name : 'St. Raphael Resort 5*',
                        agentLink : '/Tours/Europe/Cyprus/Limassol-Resort/Limassol-City/St-Raphael-Resort/',
                        clientLink : '/hotel/europe-cyprus-limasol__resort-limasol__city-st__raphael__resort/',
                        nights : 'Vaikų klubo pradžia:',
                        service : '1.05.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/f19f06a6-a750-4e1b-af65-472d6121bcbb/Tasia-Maris-Garden',
                        sale: '20%',
                        place: 'Ayia Napa',
                        name : 'Tasia Maris Garden 3*',
                        agentLink : '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/tasia-maris-gardens',
                        clientLink : '/hotel/europe-cyprus-ayia__napa-ayia__napa-tasia__maris__gardens/',
                        nights : 'Naujas sezonas!',
                        service : 'Vaikų klubo pradžia: 1.05.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    
                ],
            },
            
            //ЧЕРНОГОРИЯ
            {
                id: 'country3',
                class: '',
                
                showLT : true,
                hotels : [
                    {
                        
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/38ca8efd-db0a-441b-ab1e-fa41c25239e6/Aleksandar-4',
                        sale: '20%',
                        place: 'Budva',
                        name : 'Aleksandar 4*',
                        agentLink : '/tours/europe/montenegro/budvanska-rivijera/budva/aleksandar/',
                        clientLink : '/hotel/europe-montenegro-budvanska__rivijera-budva-aleksandar/',
                        nights : 'Naujas sezonas!',
                        service : 'Vaikų klubo pradžia: 15.05.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/2195a82b-ba0c-4c62-a498-edd1fa233bd7/Castellastva-4',
                        sale: '20%',
                        place: 'Petrovacas',
                        name : 'Castellastva 4*',
                        agentLink : '/tours/europe/montenegro/budvanska-rivijera/petrovac/castellastva/',
                        clientLink : '/hotel/europe-montenegro-budvanska__rivijera-petrovac-castellastva/',
                        nights : 'Naujas sezonas!',
                        service : 'Vaikų klubo pradžia: 15.05.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ИСПАНИЯ
            {
                id: 'country4',
                class: '',
                
                showLT : true,
                hotels : [
                    {
                        
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/7ddfb8df-a910-4986-8141-7bdcf98c043c/Estival-Park-Hotel-Resort',
                        sale: '20%',
                        place: 'Salou',
                        name : 'Estival Park Hotel Resort 4*',
                        agentLink : '/Tours/Europe/Spain/Costa-Dorada/La-Pineda/Estival-Park-Hotel-Resort',
                        clientLink : '/hotel/europe-spain-costa__dorada-la__pineda-estival__park__hotel__resort/',
                        nights : 'Naujas sezonas!',
                        service : 'Vaikų klubo pradžia: 1.06.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/e08d7974-b3c3-462b-82fa-8f44e91841a5/Don-Juan-Tossa',
                        sale: '20%',
                        place: 'Tossa de Mar',
                        name : 'Don Juan Tossa 4*',
                        agentLink : '/Tours/Europe/Spain/Costa-Brava/Tossa-De-Mar/Hotansa-Tossa',
                        clientLink : '/hotel/europe-spain-costa__brava-tossa__de__mar-don__juan__tossa/',
                        nights : 'Naujas sezonas!',
                        service : 'Vaikų klubo pradžia: 1.06.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ГРЕЦИЯ
            {
                id: 'country5',
                class: '',
                
                showLT : true,
                hotels : [
                    {
                        
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/4eecba8a-323f-4488-b477-4ed05a616e77/Serita-Beach-Resort',
                        sale: '20%',
                        place: 'Kreta',
                        name : 'Serita Beach Resort 5*',
                        agentLink : '/Tours/Europe/Greece/Crete/Anissaras/mitsis-serita-beach',
                        clientLink : '/hotel/europe-greece-crete-anissaras-mitsis__serita__beach/',
                        nights : 'Naujas sezonas!',
                        service : 'Vaikų klubo pradžia: 1.06.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ОАЭ
            {
                id: 'country6',
                class: '',
                
                showLT : true,
                hotels : [
                    {
                        
                        showLT : true,
                        img: 'https://www.tui.ru/getmedia/3433d368-f89a-4c40-ab96-bfdae0d36f44/Blue-Diamond-AlSalam-Resort',
                        sale: '20%',
                        place: 'Ras Al Khaimah',
                        name : 'Blue Diamond AlSalam Resort 5*',
                        agentLink : '/Tours/Asia/UAE/Fujairah/Fujairah-beach-hotels/blue-diamond-alsalam-resort',
                        clientLink : '/hotel/asia-uae-fujairah-fujairah__beach__hotels-blue__diamond__alsalam__resort/',
                        nights : 'Naujas sezonas!',
                        service : 'Vaikų klubo pradžia: 10.10.2019',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ИТАЛИЯ
            {
                id: 'country7',
                class: '',
                
                showLT : false,
                hotels : [
                    {
                        
                        showLT : false,
                        img: 'https://www.tui.ru/getmedia/03d6784d-5cda-4810-9fa1-318f1736e8f6/Falkensteiner-Club-Funimation-Calabria-(ex-Garden-Resort-Calabria)',
                        sale: '20%',
                        place: 'Pizzo',
                        name : 'Falkensteiner Club Funimation Calabria (ex. Garden Resort Calabria) 4*',
                        agentLink : '/Tours/Europe/Italy/Calabria/Pizzo/Valtur-Garden-Calabria',
                        clientLink : '/hotel/europe-italy-calabria-pizzo-garden__resort__calabria/',
                        nights : 'Vaikų klubo pradžia:',
                        service : '1.06.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            }
        ],
    }
})