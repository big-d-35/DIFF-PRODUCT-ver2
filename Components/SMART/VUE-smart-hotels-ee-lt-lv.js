const smartHotels = new Vue ({
    el : '#smart-hotels',
    data: {
        
        hotelsTitleEE : 'SMART hotellid',
        hotelsTitleLT : 'SMART viešbučiai',
        hotelsTitleLV : 'Viesnīcas ar SMART koncepciju',
        
        
        countryNames : [
            
            //COUNTRY NAME 1
            {
                id: 'country1',
                nameEE: 'Türgi',    
                nameLT: 'Turkija',    
                nameLV: 'Turcija', 
                class: 'button-active',
                showEE: true,
                showLT: true,
                showLV: true,
            },
            
            //COUNTRY NAME 2
            /*{
                id: 'country2',
                nameEE: 'Кипр',    
                nameLT: 'Кипр',    
                nameLV: 'Kipra', 
                class: '',
                showEE: true,
                showLT: true,
                showLV: true,
            },*/
        ],
        
        
        countrys : [
            {
                id: 'country1-slider',
                class: 'slider-active',
                showEE: true,
                showLT: true,
                showLV: true,
                //HOTELS 1 ТУРЦИЯ
                countryHotels : [

                    //HOTEL 1
                    {
                    hotelName : 'SMART Club Marakesh Beach Hotel 4*',
                    background: 'https://agent.tui.ru/img/9f32661c-239f-4db0-a47e-527e707b3209/Europe/Turkey/Kemer/Beldibi/Smart-Club-Marakesh-Beach-Hotel.jpg',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Beldibi/Smart-Club-Marakesh-Beach-Hotel',
                    hotelLinkClient: '/hotel/europe-turkey-kemer-beldibi-smart__club__marakesh__beach__hotel/',

                    //EE
                    countryNameEE: 'Türgi, Incekum',
                    aboutHotelEEItems: [
                        { item: 'Kompaktne territoorium' },
                        { item: 'Oma rand (hotell asub esimesel rannajoonel)' },
                        { item: 'Hotelli baarid asuvad ranna lähedal' },
                        { item: 'Veeliumägedega bassein' },
                        { item: '2 välibasseini (280 m2 ja 200 m2)' },
                        { item: 'Rannas varjualune laste mänguväljak' },
                    ],
                    hotelDateEE : 'start 05.2020',    
                    buttonEE : 'Valige ringkäik',

                    //LT
                    countryNameLT: 'Turkija, Incekum',
                    aboutHotelLTItems: [
                        { item: 'Kompaktiška teritorija' },
                        { item: 'Nuosavas paplūdimys, 1-oje viešbučių linijoje' },
                        { item: 'Viešbučio barai išsidėstę netoli paplūdimio' },
                        { item: 'Baseinas su vandens kalneliais, 2 lauko baseinai (280 kv. m, 200 kv. m)' },
                        { item: 'Vaikų aikštelė, paplūdimyje su tentu' },
                    ],
                    hotelDateLT : 'start 05.2020',
                    buttonLT : 'Pasirinkite',

                    //LV
                    countryNameLV: 'Turcija, Beldibi',
                    aboutHotelLVItems: [
                        { item: 'Kompakta teritorija' },
                        { item: 'Privātā smilšu pludmale, pirmajā līnijā' },
                        { item: 'Viesnīcas bāri atrodas blakus pludmalei' },
                        { item: 'Baseins ar ūdens slidkalniņiem' },
                        { item: '2 āra baseini (280 kv. m un 200 kv.m)' },
                        { item: 'Bērnu rotaļu laukums zem tenta' },
                    ],
                    hotelDateLV : 'start 05.2020',    
                    buttonLV : 'Izvēlieties tūri',
                },

                    //HOTEL 2
                    {
                    hotelName : 'SMART Euphoria Bella Mare Hotel 4*',
                    background: 'https://agent.tui.ru/img/c13ba3f4-345b-4f64-a14d-3f1ebd5eb092/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel.jpg',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel',
                    hotelLinkClient: '/hotel/europe-turkey-alanya-mahmutlar-smart__euphoria__bella__mare__hotel/',

                    //EE
                    countryNameEE: 'Türgi, Incekum',
                    aboutHotelEEItems: [
                        { item: 'Oma liiva- ja kivikliburand 50 m kaugusel (üle tee)' },
                        { item: 'Välibassein' },
                        { item: 'Kompaktne territoorium' },
                        { item: '2 veeliumäge' },
                        { item: 'A la carte restoran rannas' },
                        { item: 'Promo (kampaaniahinnaga standard toad)' },

                    ],
                    hotelDateEE : 'start 05.2020',    
                    buttonEE : 'Valige ringkäik',

                    //LT
                    countryNameLT: 'Turkija, Incekum',
                    aboutHotelLTItems: [
                        { item: 'Smėlio-žvyro paplūdimys, 50 m per kelią iki viešbučio' },
                        { item: 'Lauko baseinas' },
                        { item: 'Kompaktiška teritorija' },
                        { item: '2 vandens kalneliai' },
                        { item: 'A la Carte restoranas paplūdimyje' },
                        { item: 'Promo kambariai  (standartiniai kambariai už specialią kainą)' },
                    ],
                    hotelDateLT : 'start 05.2020',    
                    buttonLT : 'Pasirinkite',

                    //LV
                    countryNameLV: 'Turcija, Incekum',
                    aboutHotelLVItems: [
                        { item: 'Privātā smilšu-oļu pludmale, 50 m attālumā no viesnīcas (pāri ceļam)' },
                        { item: 'Āra baseins' },
                        { item: 'Kompakta teritorija' },
                        { item: '2 ūdens slidkalniņi' },
                        { item: 'A La Carte restorāns pludmalē' },
                        { item: 'Promo (standarta numuri par īpašu cenu)' },
                    ],
                    hotelDateLV : 'start 05.2020',    
                    buttonLV : 'Izvēlieties tūri',
                },

                    //HOTEL 3
                    {
                    hotelName : 'SMART Limoncello Konakli Beach Hotel 5*',
                    background: 'https://agent.tui.ru/img/c49774bb-b878-4f04-bec6-d043ea833e95/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel.jpg?geo=1&width=620&height=380',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel',
                    hotelLinkClient: '/hotel/europe-turkey-alanya-konakli-smart__limoncello__konakli__beach__hotel/',

                    //EE
                    countryNameEE: 'Türgi, Konakli',
                    aboutHotelEEItems: [
                        { item: 'Maroko stiilis pearestoran' },
                        { item: 'Hotellis ilusa interjööriga baarid' },
                        { item: 'Suur välibassein' },
                        { item: 'Veeliumäed' },
                        { item: 'Sisebassein' },
                        { item: 'Oma liivarand 200 m kaugusel' },
                        { item: 'Olemas ühe ja kahe magamistoaga peretoad' },
                        

                    ],
                    hotelDateEE : 'start 05.2020',    
                    buttonEE : 'Valige ringkäik',

                    //LT
                    countryNameLT: 'Turkija, Konakli',
                    aboutHotelLTItems: [
                        { item: 'Marokietiško stiliaus pagrindinis restoranas' },
                        { item: 'Gražus interjeras viešbučio baruose' },
                        { item: 'Didelis lauko baseinas, vandens kalneliai, uždaras baseinas ' },
                        { item: 'Nuosavas, smėlio paplūdimys už 200 m' },
                        { item: 'Šeimyniniai kambariai: su 1 ir 2 miegamaisiais' },
                    ],
                    hotelDateLT : 'start 05.2020',    
                    buttonLT : 'Pasirinkite',

                    //LV
                    countryNameLV: 'Turcija, Konakly',
                    aboutHotelLVItems: [
                        { item: 'Marokāņu stilā galvenais restorāns' },
                        { item: 'Bāri ar skaistu interjeru' },
                        { item: 'Liels āra baseins' },
                        { item: 'Ūdens slidkalniņi' },
                        { item: 'Iekštelpu baseini' },
                        { item: 'Privātā smilšu pludmale, 200 m attālumā no viesnīcas' },
                        { item: 'Ir ģimenes numuri ar vienu vai divām guļamistabam' },
                    ],
                    hotelDateLV : 'start 05.2020',    
                    buttonLV : 'Izvēlieties tūri',
                },

                    //HOTEL 4
                    {
                    hotelName : 'SMART Club Hotel Mirabell 4*',
                    background: 'https://agent.tui.ru/img/bfdecb3c-4e14-4400-83d9-4e426598fd1c/Europe/Turkey/Alanya/Konakli/SMART-Mirabell-Hotel.jpg?geo=1&width=620&height=380',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Konakli/Club-Hotel-Mirabell',
                    hotelLinkClient: '/hotel/europe-turkey-alanya-konakli-smart__mirabell__hotel/',

                    //EE
                    countryNameEE: 'Türgi, Konakli',
                    aboutHotelEEItems: [
                        { item: 'Ilus kaasaegne hotellihoone' },
                        { item: '70% tubadest on merevaatega' },
                        { item: 'Majutus koos lemmikloomadega on lubatud' },
                        { item: '2 välibasseini (230 m2 ja 165 m2)' },
                        { item: '2 veeliumäge' },
                        { item: 'SPA-keskus' },
                        { item: 'Oma liiva- ja kivikliburand (ülekäigu kaudu)' },
                        

                    ],
                    hotelDateEE : 'start 05.2020',    
                    buttonEE : 'Valige ringkäik',

                    //LT
                    countryNameLT: 'Turkija, Konakli',
                    aboutHotelLTItems: [
                        { item: 'Gražus, modernus viešbutis' },
                        { item: '70% kambarių su vaizdu į jūrą' },
                        { item: '2 lauko baseinai (230 kv.m ir 165 kv.m)' },
                        { item: '2 vandens kalneliai' },
                        { item: 'SPA centras' },
                        { item: 'Nuosavas smėlio -žvyro paplūdimys (per kelią)' },
                    ],
                    hotelDateLT : 'start 05.2020',    
                    buttonLT : 'Pasirinkite',

                    //LV
                    countryNameLV: 'Turcija, Konakly',
                    aboutHotelLVItems: [
                        { item: 'Skaista un mūsdienīga viesnīcas ēka' },
                        { item: 'Bāri ar skaistu interjeru' },
                        { item: 'Liels āra baseins' },
                        { item: 'Ūdens slidkalniņi' },
                        { item: 'Iekštelpu baseini' },
                        { item: 'Privātā smilšu pludmale, 200 m attālumā no viesnīcas' },
                        { item: 'Ir ģimenes numuri ar vienu vai divām guļamistabam' },
                    ],
                    hotelDateLV : 'start 05.2020',    
                    buttonLV : 'Izvēlieties tūri',
                },
                    
                     //HOTEL 5
                    {
                    hotelName : 'SMART Lara Family 5*',
                    background: 'https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=cb15144e-b409-40d2-9d98-a9c2170537da&height=460',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Antalya/Lara/Lara-Family-Star-Iron-Ambassador',
                    hotelLinkClient: '/hotel/europe-turkey-antalya-lara-smart__lara__family/',

                    //EE
                    countryNameEE: 'Türgi, Antalya',
                    aboutHotelEEItems: [
                        { item: 'Ilus kaasaegne hotellihoone' },
                        { item: '70% tubadest on merevaatega' },
                        { item: 'Majutus koos lemmikloomadega on lubatud' },
                        { item: '2 välibasseini (230 m2 ja 165 m2)' },
                        { item: '2 veeliumäge' },
                        { item: 'SPA-keskus' },
                        { item: 'Oma liiva- ja kivikliburand (ülekäigu kaudu)' },
                        

                    ],
                    hotelDateEE : 'start 05.2020',    
                    buttonEE : 'Valige ringkäik',

                    //LT
                    countryNameLT: 'Turkija, Antalija',
                    aboutHotelLTItems: [
                        { item: 'Viešbutis atidarytas - 2019 m.' },
                        { item: 'Paplūdimys 1 km iki viešbučio (kas valandą važiuoja autobusiukas)' },
                        { item: '2 lauko baseinai (600 ir 900 kv.m)' },
                        { item: 'Nemokama: sauna ir fitneso centras' },
                        { item: 'Stalo tenisas' },
                        { item: '2 a la carte restoranai' },
                        { item: 'Baras prie baseino ir paplūdimyje' },
                    ],
                    hotelDateLT : 'start 05.2020',    
                    buttonLT : 'Pasirinkite',

                    //LV
                    countryNameLV: 'Turcija, Antālija',
                    aboutHotelLVItems: [
                        { item: 'Jauna viesnīca, atvēršanas gads - 2019 .g.' },
                        { item: 'Pludmale atrodas 1 km attālumā no viesnīcas (shuttle bus no viesnīcas kursē katru stundu)' },
                        
                    ],
                    hotelDateLV : 'start 05.2020',    
                    buttonLV : 'Izvēlieties tūri',
                },
                  
                     //HOTEL 6
                    {
                    hotelName : 'SMART Asdem Beach 5*',
                    background: 'https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=d511c15f-1b36-4c82-b22d-c9aabf7610eb&height=460',
                    hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Beldibi/SMART-Asdem-Beach',
                    hotelLinkClient: '/hotel/europe-turkey-kemer-beldibi-smart__asdem__beach/',

                    //EE
                    countryNameEE: 'Türgi, Antalya',
                    aboutHotelEEItems: [
                        { item: 'Ilus kaasaegne hotellihoone' },
                        { item: '70% tubadest on merevaatega' },
                        { item: 'Majutus koos lemmikloomadega on lubatud' },
                        { item: '2 välibasseini (230 m2 ja 165 m2)' },
                        { item: '2 veeliumäge' },
                        { item: 'SPA-keskus' },
                        { item: 'Oma liiva- ja kivikliburand (ülekäigu kaudu)' },
                        

                    ],
                    hotelDateEE : 'start 05.2020',    
                    buttonEE : 'Valige ringkäik',

                    //LT
                    countryNameLT: 'Turkija, Antalija',
                    aboutHotelLTItems: [
                        { item: 'Teniso kortas ir stalo tenisas' },
                        { item: 'Hamamas ir sauna - nemokama, SPA (mokama)' },
                        { item: 'Nuosavas smėlio - žvyro paplūdimys, ilgis - 120 m. Yra pirsas' },
                        { item: 'Vaikiškas inventorius, pagal užklausimą, nemokama.' },
                        
                    ],
                    hotelDateLT : 'start 05.2020',    
                    buttonLT : 'Pasirinkite',

                    //LV
                    countryNameLV: 'Turcija, Antālija',
                    aboutHotelLVItems: [
                        { item: 'Tenisa korts un galda teniss' },
                        { item: 'Hamāma un sauna - bezmaksas, SPA (maksas)' },
                        
                    ],
                    hotelDateLV : 'start 05.2020',    
                    buttonLV : 'Izvēlieties tūri',
                },
                    
                    
                ],
            },
            
            
        ],
        
        
        
    }
})