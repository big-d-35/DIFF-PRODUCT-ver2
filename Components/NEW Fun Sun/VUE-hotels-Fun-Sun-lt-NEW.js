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
            
            //ЕГИПЕТ
            {  
                
                showLT : true,
                
                id: 'country6',
                class: '',
                
                nameLT : 'Egiptas',
                
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
                       
                        img: 'https://www.tui.ru/getmedia/1f00015d-eff8-44ff-becf-c6d2b465ac0e/Miarosa-Ghazal-Resort_1',
                        sale: '20%',
                        place: 'Kemeras, Goynukas',
                        name : 'FUN&SUN Miarosa Ghazal Resort 5*',
                        agentLink : '/Tours/Europe/Turkey/kemer/Goynuk/TUI-FUN-SUN-Miarosa-Ghazal-Resort',
                        clientLink : '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__miarosa__ghazal__resort/',
                        nights : 'Pradedama dirbti pagal koncepciją: ',
                        service : '25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        
                        showLT : true,
                       
                        img: 'https://www.tui.ru/getmedia/bcd9dbab-08b5-489b-90e7-7d48959cf2f2/Club-Belek',
                        sale: '20%',
                        place: 'Belekas',
                        name : 'FUN&SUN Club Belek 5*',
                        agentLink : '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-Club-Belek',
                        clientLink : '/hotel/europe-turkey-belek-belek-tui__fun__sun__club__belek/',
                        nights : 'Pradedama dirbti pagal koncepciją: ',
                        service : '25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                       
                        showLT : true,
                        
                        img: 'https://www.tui.ru/getmedia/d9560ac0-a8c2-4c26-9c7a-61a9b29be7e4/Club-Saphire_1',
                        sale: '20%',
                        place: 'Kemeras, Tekirova',
                        name : 'FUN&SUN Club Saphire 5*',
                        agentLink : '/Tours/Europe/Turkey/kemer/Tekirova/TUI-FUN-SUN-Club-Saphire',
                        clientLink : '/hotel/europe-turkey-kemer-tekirova-tui__fun__sun__club__saphire/',
                        nights : 'Pradedama dirbti pagal koncepciją: ',
                        service : '25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        
                        showLT : true,
                       
                        img: 'https://www.tui.ru/getmedia/953c8c3d-48b2-48f5-ba10-71ce94430838/Club-Serra-Palace',
                        sale: '20%',
                        place: 'Šonas, Kyzylot',
                        name : 'FUN&SUN Club Serra Palace 5*',
                        agentLink : '/Tours/Europe/Turkey/side/Kizilot/TUI-FUN-SUN-Club-Serra-Palace',
                        clientLink : '/hotel/europe-turkey-side-kizilot-tui__fun__sun__club__serra__palace/',
                        nights : 'Pradedama dirbti pagal koncepciją: ',
                        service : '25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        
                        showLT : true,
                        
                        img: 'https://www.tui.ru/getmedia/84164241-0222-4fc9-aa71-cc81d4fd2c58/River-Resort-Belek',
                        sale: '20%',
                        place: 'Belekas',
                        name : 'FUN&SUN River Resort Belek 5*',
                        agentLink : '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-River-Resort-Belek',
                        clientLink : '/hotel/europe-turkey-belek-belek-tui__fun__sun__river__resort__belek/',
                        nights : 'Pradedama dirbti pagal koncepciją: ',
                        service : '25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                       
                        showLT : true,
                       
                        img: 'https://www.tui.ru/getmedia/7b76fd59-1ff9-46eb-a5bb-c86c07577e4f/Comfort-Beach-Resort',
                        sale: '20%',
                        place: 'Kemeras, Goynukas',
                        name : 'FUN&SUN Comfort Beach Resort 5*',
                        agentLink : '/Tours/Europe/Turkey/Kemer/Goynuk/TUI-FUN-SUN-Comfort-Beach-Resort',
                        clientLink : '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__comfort__beach__resort/',
                        nights : 'Pradedama dirbti pagal koncepciją: ',
                        service : '25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        
                        showLT : true,
                       
                        img: 'https://www.tui.ru/getmedia/be906884-e3c2-412a-8530-b0a5fdd77bb8/Club-Di-Finica',
                        sale: '20%',
                        place: 'Kemeras, Finike',
                        name : 'FUN&SUN Club Di Finica 5*',
                        agentLink : '/Tours/Europe/Turkey/Kemer/Finike/TUI-FUN-SUN-Club-Di-Finica',
                        clientLink : '/hotel/europe-turkey-kemer-finike-tui__fun__sun__club__di__finica/',
                        nights : 'Pradedama dirbti pagal koncepciją: ',
                        service : '25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        
                        showLT : true,
                       
                        img: 'https://www.tui.ru/getmedia/ef9430a1-735e-4219-953d-20c6d403b23d/Miarosa-Incekum-Beach',
                        sale: '20%',
                        place: 'Alanija, Avsallar',
                        name : 'FUN&SUN Miarosa Incekum Beach 5*',
                        agentLink : '/Tours/Europe/Turkey/Alanya/Incekum/TUI-FUN-SUN-Miarosa-Incekum-Beach',
                        clientLink : '/hotel/europe-turkey-alanya-incekum-tui__fun__sun__miarosa__incekum__beach/',
                        nights : 'Pradedama dirbti pagal koncepciją: ',
                        service : '25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                       
                        showLT : true,
                       
                        img: 'https://www.tui.ru/getmedia/b08f65c2-fae3-4d6a-baa5-cd084bf3443b/Euphoria-Palm-Beach',
                        sale: '20%',
                        place: 'Šonas, Kyzylachas',
                        name : 'FUN&SUN Euphoria Palm Beach 5*',
                        agentLink : '/Tours/Europe/Turkey/side/Kizilagac/fun-sun-euphoria-palm-beach',
                        clientLink : '/hotel/europe-turkey-side-kizilagac-fun__sun__euphoria__palm__beach/',
                        nights : 'Naujas sezonas!',
                        service : 'Pradedama dirbti pagal koncepciją: 25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        
                        showLT : true,
                        
                        img: 'https://www.tui.ru/getmedia/42b59a9c-51f4-4fa0-8d2b-a108b88395e0/Imperial-Sunland-Resort',
                        sale: '20%',
                        place: 'Kemeras, Beddibi',
                        name : 'FUN&SUN Imperial Sunland Resort 5*',
                        agentLink : '/Tours/Europe/Turkey/Kemer/Beldibi/FUN-SUN-Imperial-Sunland-Resort-(ex-Sunland-Resor',
                        clientLink : '/hotel/europe-turkey-kemer-beldibi-fun__sun__imperial__sunland__resort__(ex__sunland__resor/',
                        nights : 'Naujas sezonas!',
                        service : 'Pradedama dirbti pagal koncepciją: 25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                        
                        showLT : true,
                        
                        img: 'https://www.tui.ru/getmedia/a07a86c9-3237-49c0-acac-3b9988a809a3/Life-Side',
                        sale: '20%',
                        place: 'Šonas',
                        name : 'FUN&SUN Life Side 5*',
                        agentLink : '/Tours/Europe/Turkey/side/Manavgat/fun-sun-life-side-resort-hotel',
                        clientLink : '/hotel/europe-turkey-side-manavgat-fun__sun__life__side/',
                        nights : 'Naujas sezonas!',
                        service : 'Pradedama dirbti pagal koncepciją: 25.04.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    },
                    
                    {
                       
                        showLT : true,
                       
                        img: 'https://www.tui.ru/getmedia/b3c67f75-636d-441e-adc9-98665323f061/Life-Belek',
                        sale: '20%',
                        place: 'Belekas, Boazkentas',
                        name : 'FUN&SUN Life Belek 5*',
                        agentLink : '/Tours/Europe/Turkey/belek/Bogazkent/FUN-SUN-Life-Belek',
                        clientLink : '/hotel/europe-turkey-belek-bogazkent-fun__sun__life__belek/',
                        nights : 'Naujas sezonas!',
                        service : 'Pradedama dirbti pagal koncepciją: 25.04.2020',
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
                       
                        img: 'https://www.tui.ru/getmedia/1e1900ef-4404-4768-9198-527c2d5325fa/Panthea-Waterpark',
                        sale: '20%',
                        place: 'Ayia Napa',
                        name : 'FUN&SUN Panthea Waterpark 4*',
                        agentLink : '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/TUI-FUN-SUN-Panthea-Waterpark',
                        clientLink : '/hotel/europe-cyprus-ayia__napa-ayia__napa-fun__sun__panthea__waterpark/',
                        nights : 'Pradedama dirbti pagal koncepciją:',
                        service : '1.05.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                       
                        showLT : true,
                      
                        img: 'https://www.tui.ru/getmedia/badfcfe1-40b0-47d2-921c-29e1b22377a4/Vangelis-Hotel-Suite',
                        sale: '20%',
                        place: 'Protaras',
                        name : 'FUN&SUN Vangelis Hotel & Suites 4*',
                        agentLink : '/Tours/Europe/Cyprus/Protaras/Protaras-city/vangelis-hotel-suites',
                        clientLink : '/hotel/europe-cyprus-protaras-protaras__city-fun__sun__vangelis__hotel__suites/',
                        nights : 'Pradedama dirbti pagal koncepciją:',
                        service : '1.05.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                       
                        showLT : true,
                       
                        img: 'https://www.tui.ru/getmedia/fd5d72e2-5948-4580-ae39-be4500bb4b7a/King-Evelthon-Beach-Hotel_1',
                        sale: '20%',
                        place: 'Pafosas',
                        name : 'FUN&SUN King Evelthon Beach Hotel & Resort 5*',
                        agentLink : '/Tours/Europe/Cyprus/Paphos/Paphos/fun-sun-king-evelthon-beach-hotel-resort',
                        clientLink : '/hotel/europe-cyprus-paphos-paphos-fun__sun__king__evelthon__beach__hotel__resort/',
                        nights : 'Naujas sezonas! ',
                        service : 'Pradedama dirbti pagal koncepciją: 1.05.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                        
                        showLT : true,
                        
                        img: 'https://www.tui.ru/getmedia/3e7db49a-ccd4-4c6f-8c0a-262fed1013a8/Anastasia-Beach-Hotel',
                        sale: '20%',
                        place: 'Protaras',
                        name : 'FUN&SUN Anastasia Beach Hotel 4*',
                        agentLink : '/Tours/Europe/Cyprus/Protaras/Protaras-city/fun-sun-anastasia-beach-hotel',
                        clientLink : '/hotel/europe-cyprus-protaras-protaras__city-fun__sun__anastasia__beach__hotel/',
                        nights : 'Naujas sezonas! ',
                        service : 'Pradedama dirbti pagal koncepciją: 1.05.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                       
                        showLT : true,
                       
                        img: 'https://www.tui.ru/getmedia/2b191fc1-ad5a-41b4-bfc8-661c060e82a9/Callisto-Holiday-Beach',
                        sale: '20%',
                        place: 'Ayia Napa',
                        name : 'FUN&SUN Callisto Holiday Village 4*',
                        agentLink : '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/fun-sun-callisto-holiday-village',
                        clientLink : '/hotel/europe-cyprus-ayia__napa-ayia__napa-fun__sun__callisto__holiday__village/',
                        nights : 'Naujas sezonas! ',
                        service : 'Pradedama dirbti pagal koncepciją: 1.05.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                    
                    {
                       
                        showLT : true,
                        
                        img: 'https://www.tui.ru/getmedia/1271fb3d-68b3-4773-a18a-f14ef63a7dcd/Akteon-Holiday-Village',
                        sale: '20%',
                        place: 'Chloraka, Pafosas',
                        name : 'FUN&SUN Akteon Holiday Village 4*',
                        agentLink : '/Tours/Europe/Cyprus/Paphos/Paphos/fun-sun-akteon-holiday-village',
                        clientLink : '/hotel/europe-cyprus-paphos-paphos-fun__sun__akteon__holiday__village/',
                        nights : 'Naujas sezonas! ',
                        service : 'Pradedama dirbti pagal koncepciją: 1.05.2020',
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
                        
                        img: 'https://www.tui.ru/getmedia/990c303e-252d-47a6-908d-5207f5fa407d/Pearl-Beach-Resort',
                        sale: '20%',
                        place: 'Chanas',
                        name : 'FUN&SUN Pearl Beach Resort 4*',
                        agentLink : '/Tours/Europe/Montenegro/Barska-Rivijera/chan/FUN-SUN-Pearl-Beach-Resort',
                        clientLink : '/hotel/europe-montenegro-barska__rivijera-chan-fun__sun__pearl__beach__resort/',
                        nights : 'Naujas sezonas! ',
                        service : 'Pradedama dirbti pagal koncepciją: 15.05.2020',
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
                        
                        img: 'https://www.tui.ru/getmedia/ee4dd747-bd8e-4792-8127-7628ab87c25b/Sorra-Daurada-Splash',
                        sale: '20%',
                        place: 'Kosta de Barselonoje',
                        name : 'FUN&SUN Sorra Daurada Splash 4*',
                        agentLink : '/Tours/Europe/Spain/Costa-De-Barcelona/Malgrat-De-Mar/Sorra-Daurada',
                        clientLink : '/hotel/europe-spain-costa__de__barcelona-malgrat__de__mar-fun__sun__sorra__daurada__splash/',
                        nights : 'Naujas sezonas! ',
                        service : 'Pradedama dirbti pagal koncepciją: 1.06.2020',
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
                        
                        img: 'https://www.tui.ru/getmedia/967adb30-26ce-47c1-a499-0cc126047c47/Apollo-Palace',
                        sale: '20%',
                        place: 'Korfu',
                        name : 'FUN&SUN Apollo Palace 5*',
                        agentLink : '/Tours/Europe/Greece/Corfu/Messonghi/sentido-apollo-palace',
                        clientLink : '/hotel/europe-greece-corfu-messonghi-sentido__apollo__palace/',
                        nights : 'Naujas sezonas! ',
                        service : 'Pradedama dirbti pagal koncepciją: 15.05.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            },
            
            //ЕГИПЕТ
            {
                id: 'country6',
                class: '',
                
                showLT : true,
                
                hotels : [
                    {
                        
                        showLT : true,
                       
                        img: 'https://www.tui.ru/getmedia/0fb65072-1a43-4279-8b57-d669c5bf357c/Albatros-Palace',
                        sale: '20%',
                        place: 'Šarm el Šeichas',
                        name : 'FUN&SUN Albatros Palace 5*',
                        agentLink : '/Tours/Africa/Egypt/Sharm-El-Sheikh/Sharm-El-Sheikh/FUN-SUN-Albatros-Palace',
                        clientLink : '/hotel/africa-egypt-sharm__el__sheikh-sharm__el__sheikh-fun__sun__albatros__palace/',
                        nights : 'Naujas sezonas! ',
                        service : 'Pradedama dirbti pagal koncepciją: 01.04.2020',
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
                      
                        img: 'https://www.tui.ru/getmedia/f2da989b-f2f7-48e9-838a-6b9d77081988/Club-Esse-Sunbeach',
                        sale: '20%',
                        place: 'Kalabrija, Squillace',
                        name : 'FUN&SUN Club Esse Sunbeach 4*',
                        agentLink : '/Tours/Europe/Italy/Calabria/Squillace/club-esse-sunbeach',
                        clientLink : '/hotel/europe-italy-calabria-squillace-club__esse__sunbeach/',
                        nights : 'Naujas sezonas! ',
                        service : 'Pradedama dirbti pagal koncepciją: 1.06.2020',
                        price: 'от 112 000 ₽',
                        oldPrice: '145 232 ₽',
                    
                    },
                ],
            }
        ],
    }
})