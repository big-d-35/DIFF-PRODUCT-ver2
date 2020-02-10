const concepts = new Vue({
    el: '#toucan-page',
    data: {
        //BANNER
        logo: 'https://www.tui.ru/getmedia/7a7ed2c4-eb21-41a9-b2b0-4a9bb2f13e90/tc-logo-mini-vertical-web@3x',
        logoAlt: 'Fun Sun Logo',
        bannerConceptsBckg: 'bunner-toucan',
        //bannerLink: 'https://admin.tui.ru/getmedia/e1c004db-7cbd-41c6-b5ac-9584f65f8b8c/banner-toucan',
        bannerTitleRU : 'Программа для детей от 4 до 12 лет',
        bannerTitleBY : 'Программа для детей от 4 до 12 лет',
        bannerTitleUA : 'Программа для детей от 4 до 12 лет',
        bannerTitleEE : 'Programm lastele vanuses 4–12 aastat',
        bannerTitleLT : 'Programos vaikams nuo 4 iki 12 metų',
        bannerTitleLV : 'Programma bērniem vecumā no 4 līdz 12 gadiem',
        
        bannerItems: [
            
            
            {
                itemRU: 'Аниматоры, с которыми интересно',
                itemBY: 'Аниматоры, с которыми интересно',
                itemUA: 'Аниматоры, с которыми интересно',
                itemEE: 'Huvitav animatsioon',
                itemLT: 'įdomūs animatoriai',
                itemLV: 'Animatori ar kuriem ir interesanti ',
                
            },
            
            {
                itemRU: 'Умные игры, которые развивают',
                itemBY: 'Умные игры, которые развивают',
                itemUA: 'Умные игры, которые развивают',
                itemEE: 'Nutikad mängud, mis arendavad',
                itemLT: 'dovanos kiekvienam',
                itemLV: 'Attīstošas spēles',
                
            },
            
            
            
            
            {
                itemRU: 'Подарки всем гостям клуба',
                itemBY: 'Подарки всем гостям клуба',
                itemUA: 'Подарки всем гостям клуба',
                itemEE: 'Kingitused kõigile klubi külastajatele',
                itemLT: 'klubo svečiui',
                itemLV: 'Dāvanas katram kluba viesim ',
                
            },
            
        ],
        

        //ABOUT
        aboutTitleRU: 'Что такое Мини Тукан?',
        aboutTitleBY: 'Что такое Мини Тукан?',
        aboutTitleUA: 'Что такое Мини Тукан?',
        aboutTitleEE: 'Mis on Mini Toucan?',
        aboutTitleLT: 'Kas yra mini Toucan?',
        aboutTitleLV: 'Kas ir Mini Toucan?',
        
        aboutTextRU: 'Благодаря клубу Мини Тукан, родители могут посвятить время себе и не переживать за безопасность своих детей. А юные гости отеля смогут почувствовать себя самостоятельными путешественниками.',
        aboutTextBY: 'Благодаря клубу Мини Тукан, родители могут посвятить время себе и не переживать за безопасность своих детей. А юные гости отеля смогут почувствовать себя самостоятельными путешественниками.',
        aboutTextUA: 'Благодаря клубу Мини Тукан, родители могут посвятить время себе и не переживать за безопасность своих детей. А юные гости отеля смогут почувствовать себя самостоятельными путешественниками.',
        aboutTextEE: 'Tänu Mini Toucani klubile saavad vanemad pühendada aega endale ja mitte muretseda oma laste turvalisuse pärast. Hotelli noored külalised tunnevad end iseseisvate turistina.',
        aboutTextLT: '„Mini Toucan“ klubo dėka tėvai gali skirti laiko sau ir nesijaudinti dėl savo vaikų saugumo. O jauni viešbučio svečiai gali jaustis kaip nepriklausomi keliautojai.',
        aboutTextLV: 'Pateicoties klubam Mini Toucan vecāki var veltīt laiku sev un neuztraukties par bērnu drošību. Bet jaunākie viesi varēs iejūsties pastāvīga ceļotāja lomā.',
        
        //SERVICES
        servicesTitleRU : 'Услуги в детском клубе Мини Тукан',
        servicesTitleBY : 'Услуги в детском клубе Мини Тукан',
        servicesTitleUA : 'Услуги в детском клубе Мини Тукан',
        servicesTitleEE : 'Teenused lasteklubis Mini Toucan',
        servicesTitleLT : 'Paslaugos „Mini Toucan“ vaikų klube',
        servicesTitleLV : 'Pakalpojumi bēnu klubā Mini Toucan',
        
        servicesItems : [
            
            //1
            {
                cssBckg : 'background-color: #d6f2fd;',
                image: 'https://www.tui.ru/getmedia/88fa04cd-95e9-4977-ae36-5db60fbd4ec8/food',
                imageAlt : 'Food',
                titleRU: 'Инфраструктура',
                titleBY: 'Инфраструктура',
                titleUA: 'Инфраструктура',
                titleEE: 'Infrastruktuur',
                titleLT: 'Infrastruktūra',
                titleLV: 'Infrastruktūra',
                
                items : [
                    
                    {
                        itemRU : 'Игровые комнаты',
                        itemBY : 'Игровые комнаты',
                        itemUA : 'Игровые комнаты',
                        itemEE : 'Mängutoad',
                        itemLT : 'Žaidimų kambariai',
                        itemLV : 'Rotaļu istabas',
                    },
                    
                    {
                        itemRU : 'Открытый детский бассейн',
                        itemBY : 'Открытый детский бассейн',
                        itemUA : 'Открытый детский бассейн',
                        itemEE : 'Laste välibassein',
                        itemLT : 'Lauko baseinas lauke',
                        itemLV : 'Āra bērnu baseins',
                    },
                    
                    {
                        itemRU : 'Детское меню в главном ресторане',
                        itemBY : 'Детское меню в главном ресторане',
                        itemUA : 'Детское меню в главном ресторане',
                        itemEE : 'Laste menüü pearestoranis',
                        itemLT : 'Vaikų meniu pagrindiniame restorane',
                        itemLV : 'Bērnu ēdienkarte galvenajā restorānā',
                    },
                    
                    {
                        itemRU : 'Игровая площадка на открытом воздухе',
                        itemBY : 'Игровая площадка на открытом воздухе',
                        itemUA : 'Игровая площадка на открытом воздухе',
                        itemEE : 'Mänguala õues',
                        itemLT : 'Žaidimų aikštelė gryname ore',
                        itemLV : 'Rotaļu laukums svaigā gaisā',
                    },
                    
                    
                ],
            },
            
            //2
            {
                cssBckg : 'background-color: #eaf5bf;',
                image: 'https://www.tui.ru/getmedia/30fbab5f-2229-468b-aeb5-40980bc0451b/ball2',
                imageAlt : 'Sport',
                titleRU: 'Развлечения',
                titleBY: 'Развлечения',
                titleUA: 'Развлечения',
                titleEE: 'Meelelahutus',
                titleLT: 'Pramogos',
                titleLV: 'Izklaides',
                
                items : [
                    
                    {
                        itemRU : 'Творческие и кулинарные мастер-классы ',
                        itemBY : 'Творческие и кулинарные мастер-классы',
                        itemUA : 'Творческие и кулинарные мастер-классы',
                        itemEE : 'Loomingulised ja kulinaarsed meistriklassid',
                        itemLT : 'Kūrybinės ir kulinarinės dirbtuvės',
                        itemLV : 'Radošās darbnīcas un kulinārijas meistarklases',
                    },
                    
                    {
                        itemRU : 'Развивающие игры',
                        itemBY : 'Развивающие игры',
                        itemUA : 'Развивающие игры',
                        itemEE : 'Arendavad mängud',
                        itemLT : 'Mokomieji žaidimai',
                        itemLV : 'Attīstošas rotaļas ',
                    },
                    
                    {
                        itemRU : 'Спортивные соревнования  ',
                        itemBY : 'Спортивные соревнования  ',
                        itemUA : 'Спортивные соревнования  ',
                        itemEE : 'Spordivõistlused',
                        itemLT : 'Sporto varžybos',
                        itemLV : 'Sporta sacensības',
                    },
                    
                    {
                        itemRU : 'Детская дискотека в завершение дня',
                        itemBY : 'Детская дискотека в завершение дня',
                        itemUA : 'Детская дискотека в завершение дня',
                        itemEE : 'Laste disko päeva lõpus',
                        itemLT : 'Vakarais - vaikų diskoteka',
                        itemLV : 'Bērnu diskotēka dienas noslēgumā',
                    },
                    
                    
                ],
            },
            
            
            
        ],
        
        //WHATTODO
        whattodoTitleRU : 'Чем будет занят ребенок?',
        whattodoTitleBY : 'Чем будет занят ребенок?',
        whattodoTitleUA : 'Чем будет занят ребенок?',
        whattodoTitleEE : 'Millega saab laps tegeleda?',
        whattodoTitleLT : 'Ką veiks vaikas?',
        whattodoTitleLV : 'Ar ko būs nodarbināts bērns?',
        
        whattodoImage : 'https://www.tui.ru/getmedia/de08d3b4-c7fa-4499-9b18-c8f8c127f3fd/fitness-1@2x',
        
        whattodoItems : [
            //1
            {
                items : [
                    
                    {
                        itemRU : 'Аквагрим',
                        itemBY : 'Аквагрим',
                        itemUA : 'Аквагрим',
                        itemEE : 'Näomaalingud',
                        itemLT : 'Veido tapyba',
                        itemLV : 'Akvagrims',
                    },
                    
                    {
                        itemRU : 'Олимпийские игры',
                        itemBY : 'Олимпийские игры',
                        itemUA : 'Олимпийские игры',
                        itemEE : 'Olümpiamängud',
                        itemLT : 'Olimpinės žaidynės',
                        itemLV : 'Olimpiskās spēles ',
                    },
                    
                    {
                        itemRU : 'Йога, степ и танцевальная аэробика',
                        itemBY : 'Йога, степ и танцевальная аэробика',
                        itemUA : 'Йога, степ и танцевальная аэробика',
                        itemEE : 'Jooga, samm- ja tantsuaeroobika',
                        itemLT : 'Joga, stepas ir aerobika',
                        itemLV: 'Joga, steps un deju aerobika',
                    },
                    
                    {
                        itemRU : 'День рождения Тукана',
                        itemBY : 'День рождения Тукана',
                        itemUA : 'День рождения Тукана',
                        itemEE : 'Toucani sünnipäev',
                        itemLT : '„Toucan“ gimtadienis',
                        itemLV : 'Tukāna dzimšanas diena',
                    },
                ]
            },
            
            //2
            {
                items : [
                    
                    {
                        itemRU : 'Игры в детском бассейне',
                        itemBY : 'Игры в детском бассейне',
                        itemUA : 'Игры в детском бассейне',
                        itemEE : 'Mängud lastebasseinis',
                        itemLT : 'Žaidimai vaikų baseine',
                        itemLV : 'Rotaļas bērnu baseinā ',
                    },
                    
                    {
                        itemRU : 'Настольные и музыкальные игры',
                        itemBY : 'Настольные и музыкальные игры',
                        itemUA : 'Настольные и музыкальные игры',
                        itemEE : 'Laua- ja muusikamängud',
                        itemLT : 'Stalo ir muzikos žaidimai',
                        itemLV : 'Galda un muzikālās spēles',
                    },
                    
                    {
                        itemRU : 'Тематические квесты ',
                        itemBY : 'Тематические квесты ',
                        itemUA : 'Тематические квесты ',
                        itemEE : 'Teemaülesanded',
                        itemLT : 'Teminiai žaidimai',
                        itemLV: 'Tematiskie uzdevumi',
                    },
                    
                    {
                        itemRU : 'Увлекательные эксперименты',
                        itemBY : 'Увлекательные эксперименты',
                        itemUA : 'Увлекательные эксперименты',
                        itemEE : 'Põnevad katsed',
                        itemLT : 'Įspūdingi eksperimentai',
                        itemLV : 'Aizraujoši eksperimenti',
                    },
                ]
            }
        ],
        
        //ENTERTAIMENT
        entTitleRU : 'Развлекательная программа',
        entTitleBY : 'Развлекательная программа',
        entTitleUA : 'Развлекательная программа',
        entTitleEE : 'Развлекательная программа',
        entTitleLT : 'Развлекательная программа',
        entTitleLV : 'Развлекательная программа',
        
        entItems : [
            
            //1
            {
                cssBckg : '',
                image: 'https://www.tui.ru/getmedia/960cbe78-eead-4380-9a1a-fe7b3b44f93a/girl@2x',
                imageAlt : 'Girl',
                titleRU: 'Для детей',
                titleBY: 'Для детей',
                titleUA: 'Для детей',
                titleEE: 'Для детей',
                titleLT: 'Для детей',
                titleLV: 'Для детей',
                
                items : [
                    
                    {
                        itemRU : 'Бой водными пистолетами',
                        itemBY : 'Бой водными пистолетами',
                        itemUA : 'Бой водными пистолетами',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Танцевальный лагерь',
                        itemBY : 'Танцевальный лагерь',
                        itemUA : 'Танцевальный лагерь',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Тематические квесты',
                        itemBY : 'Тематические квесты',
                        itemUA : 'Тематические квесты',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Шоу фокусника',
                        itemBY : 'Шоу фокусника',
                        itemUA : 'Шоу фокусника',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Роспись гипсовых фигур',
                        itemBY : 'Роспись гипсовых фигур',
                        itemUA : 'Роспись гипсовых фигур',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Стрит-арт',
                        itemBY : 'Стрит-арт',
                        itemUA : 'Стрит-арт',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Академия плавания и футбола',
                        itemBY : 'Академия плавания и футбола',
                        itemUA : 'Академия плавания и футбола',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                ],
            },
            
            //2
            {
                cssBckg : '',
                image: 'https://www.tui.ru/getmedia/9a74d6b6-cd42-4c6e-807e-f59876a780ce/women@2x',
                imageAlt : 'Woman',
                titleRU: 'Для взрослых',
                titleBY: 'Для взрослых',
                titleUA: 'Для взрослых',
                titleEE: 'Для взрослых',
                titleLT: 'Для взрослых',
                titleLV: 'Для взрослых',
                
                items : [
                    
                    {
                        itemRU : 'Уроки плавания и тенниса',
                        itemBY : 'Уроки плавания и тенниса',
                        itemUA : 'Уроки плавания и тенниса',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Мастер класс по завязыванию парео',
                        itemBY : 'Мастер класс по завязыванию парео',
                        itemUA : 'Мастер класс по завязыванию парео',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Тату хной',
                        itemBY : 'Тату хной',
                        itemUA : 'Тату хной',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Танцевальные программы',
                        itemBY : 'Танцевальные программы',
                        itemUA : 'Танцевальные программы',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Йога, пилатес, аквааэробика',
                        itemBY : 'Йога, пилатес, аквааэробика',
                        itemUA : 'Йога, пилатес, аквааэробика',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Кулинарные мастер-классы',
                        itemBY : 'Кулинарные мастер-классы',
                        itemUA : 'Кулинарные мастер-классы',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Стрельба из лука, дартс, бочче',
                        itemBY : 'Стрельба из лука, дартс, бочче',
                        itemUA : 'Стрельба из лука, дартс, бочче',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                ],
            },
            
        ],
        
        //PHOTOS
        photosTitleRU : 'Фотографии наших гостей',
        photosTitleBY : 'Фотографии наших гостей',
        photosTitleUA : 'Фотографии наших гостей',
        photosTitleEE : 'Фотографии наших гостей',
        photosTitleLT : 'Фотографии наших гостей',
        photosTitleLV : 'Фотографии наших гостей',
        
        photosVideoImg : 'https://www.tui.ru/getmedia/40a3c49a-81aa-4e33-bf54-e879836b5383/liz-0550',
        
        photosItems : [
            
            {
                image : 'https://www.tui.ru/getmedia/718678ed-ada9-4b95-928c-4552c05e620f/img@3x',
                imageAlt : 'photo',
            },
            
            {
                image : 'https://www.tui.ru/getmedia/97f9e085-f478-45c2-b65b-6ce0e34dedd7/img@3x_1',
                imageAlt : 'photo',
            },
            
            {
                image : 'https://www.tui.ru/getmedia/5657074f-243a-4e59-aa4b-250b311079e4/img@3x_2',
                imageAlt : 'photo',
            },
            
            {
                image : 'https://www.tui.ru/getmedia/907d0397-c057-4874-a0da-3d629ec8357a/img@3x_3',
                imageAlt : 'photo',
            },
        ],
        
        //PROGRAMS
        prgrmTitleRU : 'Программы в отелях Мини Тукан',
        prgrmTitleBY : 'Программы в отелях Мини Тукан',
        prgrmTitleUA : 'Программы в отелях Мини Тукан',
        prgrmTitleEE : 'Programmid hotellides Mini Toucan',
        prgrmTitleLT : 'Programos viešbučiuose „Mini Toucan“',
        prgrmTitleLV : 'Programmas Mini Toucan viesnīcās',
        
        prgrmIcon : 'https://www.tui.ru/getmedia/4b9080ea-918e-41db-beb3-2765e73f191f/icon-download@3x',
        prgrmIconAlt : 'icon download',
        prgrmDownloadRU: 'Cкачать',
        prgrmDownloadBY: 'Cкачать',
        prgrmDownloadUA: 'Cкачать',
        prgrmDownloadEE: 'Laadige alla',
        prgrmDownloadLT: 'Atsisiųsti',
        prgrmDownloadLV: 'Lejuplādēt ',
        
        prgrmItems : [
            
            //1
            {
                cssBckg : '',
                //image: 'https://www.tui.ru/getmedia/fe4b34df-28e0-49b8-8aea-c277feee1717/icon-balloons-color@3x',
                imageAlt : 'icon animation',
                titleRU: 'Анимация',
                titleBY: 'Анимация',
                titleUA: 'Анимация',
                titleEE: 'Animatsioon',
                titleLT: 'Animacija',
                titleLV: 'Animācija',
                
                items : [
                    
                    {
                        itemRU : 'Программа в отеле Al Hamra Residence & Village',
                        itemBY : 'Программа в отеле Al Hamra Residence & Village',
                        itemUA : 'Программа в отеле Al Hamra Residence & Village',
                        itemEE : 'Programm hotellis Al Hamra Residence & Village',
                        itemLT : 'Programa „Al Hamra Residence & Village“',
                        itemLV : 'Programma viesnīcā Al Hamra Residence & Village',
                        
                        linkRU : 'https://www.tui.ru/getmedia/f6ac0b63-9b0d-49a0-9f84-857bac7bb8b8/progamma-UAE-Toucan-Mini-2020',
                    },
                    
//                    {
//                        itemRU : 'Программа анимации на Кипре',
//                        itemBY : 'Программа анимации на Кипре',
//                        itemUA : 'Программа анимации на Кипре',
//                        itemEE : '',
//                        itemLT : '',
//                        itemLV : '',
//                        
//                        linkRU : '',
//                    },
//                    
//                    {
//                        itemRU : 'Вечерние шоу на Кипре',
//                        itemBY : 'Вечерние шоу на Кипре',
//                        itemUA : 'Вечерние шоу на Кипре',
//                        itemEE : '',
//                        itemLT : '',
//                        itemLV : '',
//                        
//                        linkRU : '',
//                    },
                    
                    
                ],
            },
            
            //2
            {
                cssBckg : '',
                //image: 'https://www.tui.ru/getmedia/78718935-f8b0-442a-b376-7d4a3ada37e0/icon-playground-color@3x_1',
                imageAlt : 'icon Kids club',
                titleRU: 'Детский клуб Toucan',
                titleBY: 'Детский клуб Toucan',
                titleUA: 'Детский клуб Toucan',
                titleEE: 'Lasteklubi Toucan',
                titleLT: 'Vaikų klubas „Toucan“',
                titleLV: 'Bērnu klubs Toucan',
                
                items : [
                    
                    {
                        itemRU : 'Программа в отеле Blue Diamond AlSalam Resort 5*',
                        itemBY : 'Программа в отеле Blue Diamond AlSalam Resort 5*',
                        itemUA : 'Программа в отеле Blue Diamond AlSalam Resort 5*',
                        itemEE : 'Programm hotellis Blue Diamond AlSalam Resort 5*',
                        itemLT : 'Programa „Blue Diamond AlSalam Resort 5 *“ viešbutyje',
                        itemLV : 'Programma viesnīvā Blue Diamond AlSalam Resort 5*',
                        
                        linkRU : 'https://www.tui.ru/getmedia/db80ed7a-4d6b-4658-9e42-6b55f4f166a4/RU-programm-UAE-Toucan-Mini-2020-fuja',
                    },
                    
//                    {
//                        itemRU : 'Программа клубов Тукан на Кипре',
//                        itemBY : 'Программа клубов Тукан на Кипре',
//                        itemUA : 'Программа клубов Тукан на Кипре',
//                        itemEE : '',
//                        itemLT : '',
//                        itemLV : '',
//                        
//                        linkRU : '',
//                    },
//                    
//                    {
//                        itemRU : 'Программа клубов Тукан на Кипре',
//                        itemBY : 'Программа клубов Тукан на Кипре',
//                        itemUA : 'Программа клубов Тукан на Кипре',
//                        itemEE : '',
//                        itemLT : '',
//                        itemLV : '',
//                        
//                        linkRU : '',
//                    },
                    
                    
                ],
            },
            
        ],
        
        //ALL HOTELS
        allHotels : [
            
            //TURKEY
            {
                showRU : true,
                showBY : true,
                showUA : true,
                showEE : true,
                showLT : true,
                showLV : true,
                countryRU : 'Турция',
                countryBY : 'Турция',
                countryUA : 'Турция',
                countryEE : 'Türgi',
                countryLT : 'Turkija',
                countryLV : 'Turcija',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        name: 'Pegasos Club 4*',
                        linkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Club',
                        linkClient : '/hotel/europe-turkey-alanya-incekum-pegasos__club/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        name: 'Pegasos Resort 5*',
                        linkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Resort',
                        linkClient : '/hotel/europe-turkey-alanya-incekum-pegasos__resort/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        name: 'Pegasos Royal 5*',
                        linkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Royal',
                        linkClient : '/hotel/europe-turkey-alanya-incekum-pegasos__royal/',
                    },
                    
                    
                    
                ],
            },
            
             //CYPRYS
            {
                showRU : true,
                showBY : true,
                showUA : true,
                showEE : false,
                showLT : false,
                showLV : false,
                countryRU : 'Кипр',
                countryBY : 'Кипр',
                countryUA : 'Кипр',
                countryEE : 'Küpros',
                countryLT : 'Kipras',
                countryLV : 'Kipra',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : false,
                        showLT : false,
                        showLV : false,
                        name: 'Christofinia 4*',
                        linkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/Christofinia/',
                        linkClient : '/hotel/europe-cyprus-ayia__napa-ayia__napa-christofinia/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : false,
                        showLT : false,
                        showLV : false,
                        name: 'St. Raphael Resort 5*',
                        linkAgent: '/Tours/Europe/Cyprus/Limassol-Resort/Limassol-City/St-Raphael-Resort/',
                        linkClient : '/hotel/europe-cyprus-limasol__resort-limasol__city-st__raphael__resort/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : false,
                        showLT : false,
                        showLV : false,
                        name: 'Tasia Maris Garden 3*',
                        linkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/tasia-maris-gardens',
                        linkClient : '/hotel/europe-cyprus-ayia__napa-ayia__napa-tasia__maris__gardens/',
                    },
                    
                    
                    
                ],
            },
            
            //ЧЕРНОГОРИЯ
            {
                showRU : true,
                showBY : true,
                showUA : true,
                showEE : false,
                showLT : false,
                showLV : false,
                countryRU : 'Черногория',
                countryBY : 'Черногория',
                countryUA : 'Черногория',
                countryEE : 'Montenegro',
                countryLT : 'Juodkalnija',
                countryLV : 'Melnkalne',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : false,
                        showLT : false,
                        showLV : false,
                        name: 'Aleksandar 4*',
                        linkAgent: '/tours/europe/montenegro/budvanska-rivijera/budva/aleksandar/',
                        linkClient : '/hotel/europe-montenegro-budvanska__rivijera-budva-aleksandar/',
                    },
                                
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : false,
                        showLT : false,
                        showLV : false,
                        name: 'Castellastva 4*',
                        linkAgent: '/tours/europe/montenegro/budvanska-rivijera/petrovac/castellastva/',
                        linkClient : '/hotel/europe-montenegro-budvanska__rivijera-petrovac-castellastva/',
                    },
                    
                ],
            },
            
            //ИСПАНИЯ
            {
                showRU : true,
                showBY : true,
                showUA : true,
                showEE : true,
                showLT : true,
                showLV : true,
                countryRU : 'Испания',
                countryBY : 'Испания',
                countryUA : 'Испания',
                countryEE : 'Hispaania',
                countryLT : 'Ispanija',
                countryLV : 'Spānija',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        name: 'Estival Park Hotel Resort 4*',
                        linkAgent: '/Tours/Europe/Spain/Costa-Dorada/La-Pineda/Estival-Park-Hotel-Resort',
                        linkClient : '/hotel/europe-spain-costa__dorada-la__pineda-estival__park__hotel__resort/',
                    },
                                
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        name: 'Don Juan Tossa 4*',
                        linkAgent: '/Tours/Europe/Spain/Costa-Brava/Tossa-De-Mar/Hotansa-Tossa',
                        linkClient : '/hotel/europe-spain-costa__brava-tossa__de__mar-don__juan__tossa/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        name: 'Sol Palmanova - Mallorca 4*',
                        linkAgent: '/Tours/Europe/Spain/Mallorca-Palma-de-Mallorca/Palma-Nova/Sol-Palmanova-Mallorca',
                        linkClient : '/hotel/europe-spain-mallorca__palma__de__mallorca-palma__nova-sol__palmanova__mallorca/',
                    },
                ],
            },
            
            //ГРЕЦИЯ
            {
                showRU : true,
                showBY : true,
                showUA : true,
                showEE : true,
                showLT : true,
                showLV : true,
                countryRU : 'Греция',
                countryBY : 'Греция',
                countryUA : 'Греция',
                countryEE : 'Kreeka',
                countryLT : 'Graikija',
                countryLV : 'Grieķija',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        name: 'Serita Beach Resort 5*',
                        linkAgent: '/Tours/Europe/Greece/Crete/Anissaras/mitsis-serita-beach',
                        linkClient : '/hotel/europe-greece-crete-anissaras-mitsis__serita__beach/',
                    },
                                
                    
                    
                ],
            },
            
            //ОАЭ
            {
                showRU : true,
                showBY : false,
                showUA : true,
                showEE : true,
                showLT : true,
                showLV : true,
                countryRU : 'ОАЭ',
                countryBY : 'ОАЭ',
                countryUA : 'ОАЭ',
                countryEE : 'AÜE',
                countryLT : 'JAE',
                countryLV : 'AAE',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : false,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        name: 'Al Hamra Village Golf & Beach Resort 4*',
                        linkAgent: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-village-golf-beach-resort',
                        linkClient : '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__village__golf__beach__resort/',
                    },
                                
                    {
                        showRU : true,
                        showBY : false,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        name: 'Al Hamra Residence 5*',
                        linkAgent: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-residence',
                        linkClient : '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__residence/',
                    },
                    
                    {
                        showRU : true,
                        showBY : false,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        name: 'Blue Diamond AlSalam Resort 5*',
                        linkAgent: '/Tours/Asia/UAE/Fujairah/Fujairah-beach-hotels/blue-diamond-alsalam-resort',
                        linkClient : '/hotel/asia-uae-fujairah-fujairah__beach__hotels-blue__diamond__alsalam__resort/',
                    },
                    
                ],
            },
            
            //ИТАЛИЯ
            {
                showRU : true,
                showBY : true,
                showUA : true,
                showEE : false,
                showLT : false,
                showLV : false,
                countryRU : 'Италия',
                countryBY : 'Италия',
                countryUA : 'Италия',
                countryEE : 'Itaalia',
                countryLT : 'Italija',
                countryLV : 'Itālija',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : false,
                        showLT : false,
                        showLV : false,
                        name: 'Falkensteiner Club Funimation Calabria (ex. Garden Resort Calabria) 4*',
                        linkAgent: '/Tours/Europe/Italy/Calabria/Pizzo/Valtur-Garden-Calabria',
                        linkClient : '/hotel/europe-italy-calabria-pizzo-garden__resort__calabria/',
                    },
                                
                    
                    
                ],
            },
            
            //РОССИЯ
            {
                showRU : true,
                showBY : false,
                showUA : false,
                showEE : false,
                showLT : false,
                showLV : false,
                countryRU : 'Россия',
                countryBY : 'Россия',
                countryUA : 'Россия',
                countryEE : 'Venemaa',
                countryLT : 'Rusija',
                countryLV : 'Krievija',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : false,
                        showUA : false,
                        showEE : false,
                        showLT : false,
                        showLV : false,
                        name: 'Бархатные сезоны 3*',
                        linkAgent: '/Tours/Europe/Russia/Sochi/Imeretinskaya-Bukhta/barhatnye-sezony-gorod-otel-russquiy-dom',
                        linkClient : '/hotel/europe-russia-sochi-imeretinskaya__bukhta-barhatnye__sezony__gorod__otel__russquiy__dom/',
                    },
                                
                    
                    
                ],
            },
        ],
    }
})