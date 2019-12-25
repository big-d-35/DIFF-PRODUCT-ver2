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
            
            //ОАЭ
            {  
                showRU : true,
                showBY : true,
                showUA : true,
                id: 'country6',
                class: '',
                nameRU : 'ОАЭ',
                nameBY : 'ОАЭ',
                nameUA : 'ОАЭ',
            },
            
            //ИТАЛИЯ
            {  
                showRU : true,
                showBY : true,
                showUA : true,
                id: 'country7',
                class: '',
                nameRU : 'Италия',
                nameBY : 'Италия',
                nameUA : 'Италия',
            },
            
            //РОССИЯ
            {  
                showRU : true,
                showBY : false,
                showUA : false,
                id: 'country8',
                class: '',
                nameRU : 'Россия',
                nameBY : 'Россия',
                nameUA : 'Россия',
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
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        img: 'https://www.tui.ru/getmedia/bd6933b7-8794-420c-a8d7-94a3eee413aa/Pegasos-Club',
                        sale: '20%',
                        place: 'Инджекум',
                        name : 'Pegasos Club 4*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Club',
                        clientLink : '/europe-turkey-alanya-incekum-pegasos__club/',
                        nights : 'Начало работы по концепции: ',
                        service : '1 мая 2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        img: 'https://www.tui.ru/getmedia/6cc9960c-45a9-4640-95c3-44011016e399/Pegasos-Resort',
                        sale: '20%',
                        place: 'Инджекум',
                        name : 'Pegasos Resort 5*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Resort',
                        clientLink : '/hotel/europe-turkey-alanya-incekum-pegasos__resort/',
                        nights : 'Начало работы по концепции: ',
                        service : '1 мая 2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        img: 'https://www.tui.ru/getmedia/4970168b-b01b-4729-ad4b-d1676db5dfbf/Pegasos-Royal',
                        sale: '20%',
                        place: 'Инджекум',
                        name : 'Pegasos Royal 5*',
                        agentLink : '/Tours/Europe/Turkey/kemer/Tekirova/TUI-FUN-SUN-Club-Saphire',
                        clientLink : '/hotel/europe-turkey-kemer-tekirova-tui__fun__sun__club__saphire/',
                        nights : 'Начало работы по концепции: ',
                        service : '1 мая 2020',
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
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        img: 'https://www.tui.ru/getmedia/c6c31a8c-6f01-41b5-94c2-328fbdfdbca9/Christofinia',
                        sale: '20%',
                        place: 'Айя-Напа',
                        name : 'Christofinia 4*',
                        agentLink : '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/Christofinia/',
                        clientLink : '/hotel/europe-cyprus-ayia__napa-ayia__napa-christofinia/',
                        nights : 'Начало работы по концепции:',
                        service : '1 мая 2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        img: 'https://www.tui.ru/getmedia/8f7f5571-abae-4ec9-b047-8b6df093e732/St-Raphael-Resort',
                        sale: '20%',
                        place: 'Лимасол',
                        name : 'St. Raphael Resort 5*',
                        agentLink : '/Tours/Europe/Cyprus/Limassol-Resort/Limassol-City/St-Raphael-Resort/',
                        clientLink : '/hotel/europe-cyprus-limasol__resort-limasol__city-st__raphael__resort/',
                        nights : 'Начало работы по концепции:',
                        service : '1 мая 2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        img: 'https://www.tui.ru/getmedia/f19f06a6-a750-4e1b-af65-472d6121bcbb/Tasia-Maris-Garden',
                        sale: '20%',
                        place: 'Айя-Напа',
                        name : 'Tasia Maris Garden 3*',
                        agentLink : '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/tasia-maris-gardens',
                        clientLink : '/hotel/europe-cyprus-ayia__napa-ayia__napa-tasia__maris__gardens/',
                        nights : 'Новинка сезона! ',
                        service : 'Начало работы по концепции: 1 мая 2020',
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
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        img: 'https://www.tui.ru/getmedia/38ca8efd-db0a-441b-ab1e-fa41c25239e6/Aleksandar-4',
                        sale: '20%',
                        place: 'Будва',
                        name : 'Aleksandar 4*',
                        agentLink : '/tours/europe/montenegro/budvanska-rivijera/budva/aleksandar/',
                        clientLink : '/hotel/europe-montenegro-budvanska__rivijera-budva-aleksandar/',
                        nights : 'Новинка сезона! ',
                        service : 'Начало работы по концепции: 15 мая 2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        img: 'https://www.tui.ru/getmedia/2195a82b-ba0c-4c62-a498-edd1fa233bd7/Castellastva-4',
                        sale: '20%',
                        place: 'Петровац',
                        name : 'Castellastva 4*',
                        agentLink : '/tours/europe/montenegro/budvanska-rivijera/petrovac/castellastva/',
                        clientLink : '/hotel/europe-montenegro-budvanska__rivijera-petrovac-castellastva/',
                        nights : 'Новинка сезона! ',
                        service : 'Начало работы по концепции: 15 мая 2020',
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
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        img: 'https://www.tui.ru/getmedia/7ddfb8df-a910-4986-8141-7bdcf98c043c/Estival-Park-Hotel-Resort',
                        sale: '20%',
                        place: 'Салоу',
                        name : 'Estival Park Hotel Resort 4*',
                        agentLink : '/Tours/Europe/Spain/Costa-Dorada/La-Pineda/Estival-Park-Hotel-Resort',
                        clientLink : '/hotel/europe-spain-costa__dorada-la__pineda-estival__park__hotel__resort/',
                        nights : 'Новинка сезона! ',
                        service : 'Начало работы по концепции: 1 июня 2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        img: 'https://www.tui.ru/getmedia/e08d7974-b3c3-462b-82fa-8f44e91841a5/Don-Juan-Tossa',
                        sale: '20%',
                        place: 'Тосса де мар',
                        name : 'Don Juan Tossa 4*',
                        agentLink : '/Tours/Europe/Spain/Costa-Brava/Tossa-De-Mar/Hotansa-Tossa',
                        clientLink : '/hotel/europe-spain-costa__brava-tossa__de__mar-don__juan__tossa/',
                        nights : 'Новинка сезона! ',
                        service : 'Начало работы по концепции: 1 июня 2020',
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
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        img: 'https://www.tui.ru/getmedia/4eecba8a-323f-4488-b477-4ed05a616e77/Serita-Beach-Resort',
                        sale: '20%',
                        place: 'Крит',
                        name : 'Serita Beach Resort 5*',
                        agentLink : '/Tours/Europe/Greece/Crete/Anissaras/mitsis-serita-beach',
                        clientLink : '/hotel/europe-greece-crete-anissaras-mitsis__serita__beach/',
                        nights : 'Начало работы детского клуба:',
                        service : '1 июня 2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ОАЭ
            {
                id: 'country6',
                class: '',
                showRU : true,
                showBY : true,
                showUA : true,
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        img: 'https://www.tui.ru/getmedia/047a3bf6-3074-4997-8c16-4e426ee91c72/Al-Hamra-Village-Golf-Beach-Resort',
                        sale: '20%',
                        place: 'Рас-эль-Хайма',
                        name : 'Al Hamra Village Golf & Beach Resort 4*',
                        agentLink : '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-village-golf-beach-resort',
                        clientLink : '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__village__golf__beach__resort/',
                        nights : 'Начало работы детского клуба: ',
                        service : '21 октября 2019',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        showRU : false,
                        showBY : true,
                        showUA : true,
                        img: 'https://www.tui.ru/getmedia/4519946b-b42f-45d4-bba3-e83e5ffff4cb/Al-Hamra-Residence',
                        sale: '20%',
                        place: 'Рас-эль-Хайма',
                        name : 'Al Hamra Residence 5*',
                        agentLink : '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-residence',
                        clientLink : '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__residence/',
                        nights : 'Начало работы детского клуба: ',
                        service : '21 октября 2019',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        showRU : false,
                        showBY : true,
                        showUA : true,
                        img: 'https://www.tui.ru/getmedia/3433d368-f89a-4c40-ab96-bfdae0d36f44/Blue-Diamond-AlSalam-Resort',
                        sale: '20%',
                        place: 'Рас-эль-Хайма',
                        name : 'Blue Diamond AlSalam Resort 5*',
                        agentLink : '/Tours/Asia/UAE/Fujairah/Fujairah-beach-hotels/blue-diamond-alsalam-resort',
                        clientLink : '/hotel/asia-uae-fujairah-fujairah__beach__hotels-blue__diamond__alsalam__resort/',
                        nights : 'Начало работы детского клуба: ',
                        service : '10 ноября 2019',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ИТАЛИЯ
            {
                id: 'country7',
                class: '',
                showRU : true,
                showBY : true,
                showUA : true,
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        img: 'https://www.tui.ru/getmedia/03d6784d-5cda-4810-9fa1-318f1736e8f6/Falkensteiner-Club-Funimation-Calabria-(ex-Garden-Resort-Calabria)',
                        sale: '20%',
                        place: 'Пиццо',
                        name : 'Falkensteiner Club Funimation Calabria (ex. Garden Resort Calabria) 4*',
                        agentLink : '/Tours/Europe/Italy/Calabria/Pizzo/Valtur-Garden-Calabria',
                        clientLink : '/hotel/europe-italy-calabria-pizzo-garden__resort__calabria/',
                        nights : 'Начало работы детского клуба: ',
                        service : '1 июня 2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //РОССИЯ
            {
                id: 'country8',
                class: '',
                showRU : true,
                showBY : false,
                showUA : false,
                hotels : [
                    {
                        showRU : true,
                        showBY : false,
                        showUA : false,
                        img: 'https://www.tui.ru/getmedia/6bde11d3-7383-4c70-a000-d9ed41e1bd10/sochi',
                        sale: '20%',
                        place: 'Сочи',
                        name : 'Бархатные сезоны 3*',
                        agentLink : '/Tours/Europe/Russia/Sochi/Imeretinskaya-Bukhta/barhatnye-sezony-gorod-otel-russquiy-dom',
                        clientLink : '/hotel/europe-russia-sochi-imeretinskaya__bukhta-barhatnye__sezony__gorod__otel__russquiy__dom/',
                        nights : 'Новинка сезона! ',
                        service : 'Начало работы по концепции: 15 мая 2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
        ],
    }
})