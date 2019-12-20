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
        bannerTitleEE : 'Программа для детей от 4 до 12 лет',
        bannerTitleLT : 'Программа для детей от 4 до 12 лет',
        bannerTitleLV : 'Программа для детей от 4 до 12 лет',
        
        bannerItems: [
            
            
            {
                itemRU: 'Аниматоры, с которыми интересно',
                itemBY: 'Аниматоры, с которыми интересно',
                itemUA: 'Аниматоры, с которыми интересно',
                itemEE: 'Аниматоры, с которыми интересно',
                itemLT: 'Аниматоры, с которыми интересно',
                itemLV: '',
                
            },
            
            {
                itemRU: 'Умные игры, которые развивают',
                itemBY: 'Умные игры, которые развивают',
                itemUA: 'Умные игры, которые развивают',
                itemEE: 'Умные игры, которые развивают',
                itemLT: 'Клуб Тукан для детей от 0 до 12 лет',
                itemLV: '',
                
            },
            
            
            
            
            {
                itemRU: 'Подарки всем гостям клуба',
                itemBY: 'Подарки всем гостям клуба',
                itemUA: 'Подарки всем гостям клуба',
                itemEE: 'Подарки всем гостям клуба',
                itemLT: 'Уголок матери и ребенка 24 часа',
                itemLV: '',
                
            },
            
        ],
        

        //ABOUT
        aboutTitleRU: 'Что такое Мини Тукан?',
        aboutTitleBY: 'Что такое Мини Тукан?',
        aboutTitleUA: 'Что такое Мини Тукан?',
        aboutTitleEE: 'Что такое Мини Тукан?',
        aboutTitleLT: 'Что такое Мини Тукан?',
        aboutTitleLV: 'Что такое Мини Тукан?',
        
        aboutTextRU: 'Благодаря клубу Мини Тукан, родители могут посвятить время себе и не переживать за безопасность своих детей. А юные гости отеля смогут почувствовать себя самостоятельными путешественниками.',
        aboutTextBY: 'Благодаря клубу Мини Тукан, родители могут посвятить время себе и не переживать за безопасность своих детей. А юные гости отеля смогут почувствовать себя самостоятельными путешественниками.',
        aboutTextUA: 'Благодаря клубу Мини Тукан, родители могут посвятить время себе и не переживать за безопасность своих детей. А юные гости отеля смогут почувствовать себя самостоятельными путешественниками.',
        aboutTextEE: 'Благодаря клубу Мини Тукан, родители могут посвятить время себе и не переживать за безопасность своих детей. А юные гости отеля смогут почувствовать себя самостоятельными путешественниками.',
        aboutTextLT: 'Благодаря клубу Мини Тукан, родители могут посвятить время себе и не переживать за безопасность своих детей. А юные гости отеля смогут почувствовать себя самостоятельными путешественниками.',
        aboutTextLV: 'Благодаря клубу Мини Тукан, родители могут посвятить время себе и не переживать за безопасность своих детей. А юные гости отеля смогут почувствовать себя самостоятельными путешественниками.',
        
        //SERVICES
        servicesTitleRU : 'Услуги в детском клубе Мини Тукан',
        servicesTitleBY : 'Услуги в детском клубе Мини Тукан',
        servicesTitleUA : 'Услуги в детском клубе Мини Тукан',
        servicesTitleEE : 'Услуги в детском клубе Мини Тукан',
        servicesTitleLT : 'Услуги в детском клубе Мини Тукан',
        servicesTitleLV : 'Услуги в отелях FUN&SUN',
        
        servicesItems : [
            
            //1
            {
                cssBckg : 'background-color: #d6f2fd;',
                image: 'https://www.tui.ru/getmedia/88fa04cd-95e9-4977-ae36-5db60fbd4ec8/food',
                imageAlt : 'Food',
                titleRU: 'Инфраструктура',
                titleBY: 'Инфраструктура',
                titleUA: 'Инфраструктура',
                titleEE: 'Инфраструктура',
                titleLT: 'Как дома',
                titleLV: 'Как дома',
                
                items : [
                    
                    {
                        itemRU : 'Игровые комнаты',
                        itemBY : 'Игровые комнаты',
                        itemUA : 'Игровые комнаты',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Открытый детский бассейн',
                        itemBY : 'Открытый детский бассейн',
                        itemUA : 'Открытый детский бассейн',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Детское меню в главном ресторане',
                        itemBY : 'Детское меню в главном ресторане',
                        itemUA : 'Детское меню в главном ресторане',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Игровая площадка на открытом воздухе',
                        itemBY : 'Игровая площадка на открытом воздухе',
                        itemUA : 'Игровая площадка на открытом воздухе',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    
                ],
            },
            
            //2
            {
                cssBckg : 'background-color: #eaf5bf;',
                image: 'https://www.tui.ru/getmedia/149fc60f-a532-4427-a317-03158d6ffcaa/sport-1',
                imageAlt : 'Sport',
                titleRU: 'Развлечения',
                titleBY: 'Развлечения',
                titleUA: 'Развлечения',
                titleEE: 'Развлечения',
                titleLT: 'Развлечения',
                titleLV: 'Улучшенное питание',
                
                items : [
                    
                    {
                        itemRU : 'Свежевыжатый апельсиновый сок на завтрак',
                        itemBY : 'Свежевыжатый апельсиновый сок на завтрак',
                        itemUA : 'Свежевыжатый апельсиновый сок на завтрак',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Рестораны a la carte',
                        itemBY : 'Рестораны a la carte',
                        itemUA : 'Рестораны a la carte',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Диетический уголок в главном ресторане',
                        itemBY : 'Диетический уголок в главном ресторане',
                        itemUA : 'Диетический уголок в главном ресторане',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Импортные алкогольные напитки',
                        itemBY : 'Импортные алкогольные напитки',
                        itemUA : 'Импортные алкогольные напитки',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Тематические ужины 7 дней в неделю',
                        itemBY : 'Тематические ужины 7 дней в неделю',
                        itemUA : 'Тематические ужины 7 дней в неделю',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                    
                    {
                        itemRU : 'Мороженое в дневные часы',
                        itemBY : 'Мороженое в дневные часы',
                        itemUA : 'Мороженое в дневные часы',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                    },
                ],
            },
            
            
            
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
        prgrmTitleRU : 'Программы  в отелях FUN&SUN',
        prgrmTitleBY : 'Программы  в отелях FUN&SUN',
        prgrmTitleUA : 'Программы  в отелях FUN&SUN',
        prgrmTitleEE : 'Программы  в отелях FUN&SUN',
        prgrmTitleLT : 'Программы  в отелях FUN&SUN',
        prgrmTitleLV : 'Программы  в отелях FUN&SUN',
        
        prgrmIcon : 'https://www.tui.ru/getmedia/4b9080ea-918e-41db-beb3-2765e73f191f/icon-download@3x',
        prgrmIconAlt : 'icon download',
        prgrmDownloadRU: 'Cкачать',
        prgrmDownloadBY: 'Cкачать',
        prgrmDownloadUA: 'Cкачать',
        prgrmDownloadEE: 'Cкачать',
        prgrmDownloadLT: 'Cкачать',
        prgrmDownloadLV: 'Cкачать',
        
        prgrmItems : [
            
            //1
            {
                cssBckg : '',
                image: 'https://www.tui.ru/getmedia/fe4b34df-28e0-49b8-8aea-c277feee1717/icon-balloons-color@3x',
                imageAlt : 'icon animation',
                titleRU: 'Анимация',
                titleBY: 'Анимация',
                titleUA: 'Анимация',
                titleEE: 'Анимация',
                titleLT: 'Анимация',
                titleLV: 'Анимация',
                
                items : [
                    
                    {
                        itemRU : 'Программа анимации в Турции',
                        itemBY : 'Программа анимации в Турции',
                        itemUA : 'Программа анимации в Турции',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                        
                        linkRU : '',
                    },
                    
                    {
                        itemRU : 'Программа анимации на Кипре',
                        itemBY : 'Программа анимации на Кипре',
                        itemUA : 'Программа анимации на Кипре',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                        
                        linkRU : '',
                    },
                    
                    {
                        itemRU : 'Вечерние шоу на Кипре',
                        itemBY : 'Вечерние шоу на Кипре',
                        itemUA : 'Вечерние шоу на Кипре',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                        
                        linkRU : '',
                    },
                    
                    
                ],
            },
            
            //2
            {
                cssBckg : '',
                image: 'https://www.tui.ru/getmedia/78718935-f8b0-442a-b376-7d4a3ada37e0/icon-playground-color@3x_1',
                imageAlt : 'icon Kids club',
                titleRU: 'Детский клуб Toucan',
                titleBY: 'Детский клуб Toucan',
                titleUA: 'Детский клуб Toucan',
                titleEE: 'Детский клуб Toucan',
                titleLT: 'Детский клуб Toucan',
                titleLV: 'Детский клуб Toucan',
                
                items : [
                    
                    {
                        itemRU : 'Программа клубов Тукан в Турции',
                        itemBY : 'Программа клубов Тукан в Турции',
                        itemUA : 'Программа клубов Тукан в Турции',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                        
                        linkRU : '',
                    },
                    
                    {
                        itemRU : 'Программа клубов Тукан на Кипре',
                        itemBY : 'Программа клубов Тукан на Кипре',
                        itemUA : 'Программа клубов Тукан на Кипре',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                        
                        linkRU : '',
                    },
                    
                    {
                        itemRU : 'Программа клубов Тукан на Кипре',
                        itemBY : 'Программа клубов Тукан на Кипре',
                        itemUA : 'Программа клубов Тукан на Кипре',
                        itemEE : '',
                        itemLT : '',
                        itemLV : '',
                        
                        linkRU : '',
                    },
                    
                    
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
                countryRU : 'Турция',
                countryBY : 'Турция',
                countryUA : 'Турция',
                countryEE : '',
                countryLT : '',
                countryLV : '',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Miarosa Ghazal Resort 5*',
                        linkAgent: '/Tours/Europe/Turkey/kemer/Goynuk/TUI-FUN-SUN-Miarosa-Ghazal-Resort',
                        linkClient : '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__miarosa__ghazal__resort/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Club Belek 5*',
                        linkAgent: '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-Club-Belek',
                        linkClient : '/hotel/europe-turkey-belek-belek-tui__fun__sun__club__belek/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Club Saphire 5*',
                        linkAgent: '/Tours/Europe/Turkey/kemer/Tekirova/TUI-FUN-SUN-Club-Saphire',
                        linkClient : '/hotel/europe-turkey-kemer-tekirova-tui__fun__sun__club__saphire/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Club Serra Palace 5*',
                        linkAgent: '/Tours/Europe/Turkey/side/Kizilot/TUI-FUN-SUN-Club-Serra-Palace',
                        linkClient : '/hotel/europe-turkey-side-kizilot-tui__fun__sun__club__serra__palace/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN River Resort Belek 5*',
                        linkAgent: '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-River-Resort-Belek',
                        linkClient : '/hotel/europe-turkey-belek-belek-tui__fun__sun__river__resort__belek/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Comfort Beach Resort 5*',
                        linkAgent: '/Tours/Europe/Turkey/Kemer/Goynuk/TUI-FUN-SUN-Comfort-Beach-Resort',
                        linkClient : '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__comfort__beach__resort/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Club Di Finica 5*',
                        linkAgent: '/Tours/Europe/Turkey/Kemer/Finike/TUI-FUN-SUN-Club-Di-Finica',
                        linkClient : '/hotel/europe-turkey-kemer-finike-tui__fun__sun__club__di__finica/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Miarosa Incekum Beach 5*',
                        linkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/TUI-FUN-SUN-Miarosa-Incekum-Beach',
                        linkClient : '/hotel/europe-turkey-alanya-incekum-tui__fun__sun__miarosa__incekum__beach/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Euphoria Palm Beach 5*',
                        linkAgent: '/Tours/Europe/Turkey/side/Kizilagac/fun-sun-euphoria-palm-beach',
                        linkClient : '/hotel/europe-turkey-side-kizilagac-fun__sun__euphoria__palm__beach/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Imperial Sunland Resort 5*',
                        linkAgent: '/Tours/Europe/Turkey/Kemer/Beldibi/FUN-SUN-Imperial-Sunland-Resort-(ex-Sunland-Resor',
                        linkClient : '/hotel/europe-turkey-kemer-beldibi-fun__sun__imperial__sunland__resort__(ex__sunland__resor/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Life Side 5',
                        linkAgent: '/Tours/Europe/Turkey/side/Manavgat/fun-sun-life-side-resort-hotel',
                        linkClient : '/hotel/europe-turkey-side-manavgat-fun__sun__life__side/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Life Belek 5*',
                        linkAgent: '/Tours/Europe/Turkey/belek/Bogazkent/FUN-SUN-Life-Belek',
                        linkClient : '/hotel/europe-turkey-belek-bogazkent-fun__sun__life__belek/',
                    },
                    
                ],
            },
            
             //CYPRYS
            {
                showRU : true,
                showBY : true,
                showUA : true,
                countryRU : 'Кипр',
                countryBY : 'Кипр',
                countryUA : 'Кипр',
                countryEE : '',
                countryLT : '',
                countryLV : '',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Panthea Waterpark 4*',
                        linkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/TUI-FUN-SUN-Panthea-Waterpark',
                        linkClient : '/hotel/europe-cyprus-ayia__napa-ayia__napa-fun__sun__panthea__waterpark/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Vangelis Hotel & Suite 4*',
                        linkAgent: '/Tours/Europe/Cyprus/Protaras/Protaras-city/vangelis-hotel-suites',
                        linkClient : '/hotel/europe-cyprus-protaras-protaras__city-fun__sun__vangelis__hotel__suites/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN King Evelthon Beach Hotel 5*',
                        linkAgent: '/Tours/Europe/Cyprus/Paphos/Paphos/fun-sun-king-evelthon-beach-hotel-resort',
                        linkClient : '/hotel/europe-cyprus-paphos-paphos-fun__sun__king__evelthon__beach__hotel__resort/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Anastasia Beach Hotel 4*',
                        linkAgent: '/Tours/Europe/Cyprus/Protaras/Protaras-city/fun-sun-anastasia-beach-hotel',
                        linkClient : '/hotel/europe-cyprus-protaras-protaras__city-fun__sun__anastasia__beach__hotel/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Callisto Holiday Village 4*',
                        linkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/fun-sun-callisto-holiday-village',
                        linkClient : '/hotel/europe-cyprus-ayia__napa-ayia__napa-fun__sun__callisto__holiday__village/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Akteon Holiday Village 4*',
                        linkAgent: '/Tours/Europe/Cyprus/Paphos/Paphos/fun-sun-akteon-holiday-village',
                        linkClient : '/hotel/europe-cyprus-paphos-paphos-fun__sun__akteon__holiday__village/',
                    },
                    
                ],
            },
            
            //ЧЕРНОГОРИЯ
            {
                showRU : true,
                showBY : true,
                showUA : true,
                countryRU : 'Черногория',
                countryBY : 'Черногория',
                countryUA : 'Черногория',
                countryEE : '',
                countryLT : '',
                countryLV : '',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Pearl Beach Resort 4*',
                        linkAgent: '/Tours/Europe/Montenegro/Barska-Rivijera/chan/FUN-SUN-Pearl-Beach-Resort',
                        linkClient : '/hotel/europe-montenegro-barska__rivijera-chan-fun__sun__pearl__beach__resort/',
                    },
                                
                    
                    
                ],
            },
            
            //ИСПАНИЯ
            {
                showRU : true,
                showBY : true,
                showUA : true,
                countryRU : 'Испания',
                countryBY : 'Испания',
                countryUA : 'Испания',
                countryEE : '',
                countryLT : '',
                countryLV : '',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Sorra Daurada Splash 4*',
                        linkAgent: '/Tours/Europe/Spain/Costa-De-Barcelona/Malgrat-De-Mar/Sorra-Daurada',
                        linkClient : '/hotel/europe-spain-costa__de__barcelona-malgrat__de__mar-fun__sun__sorra__daurada__splash/',
                    },
                                
                    
                    
                ],
            },
            
            //ГРЕЦИЯ
            {
                showRU : true,
                showBY : true,
                showUA : true,
                countryRU : 'Греция',
                countryBY : 'Греция',
                countryUA : 'Греция',
                countryEE : '',
                countryLT : '',
                countryLV : '',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Apollo Palace 5*',
                        linkAgent: '/Tours/Europe/Greece/Corfu/Messonghi/sentido-apollo-palace',
                        linkClient : '/hotel/europe-greece-corfu-messonghi-sentido__apollo__palace/',
                    },
                                
                    
                    
                ],
            },
            
            //ЕГИПЕТ
            {
                showRU : false,
                showBY : true,
                showUA : true,
                countryRU : 'Египет',
                countryBY : 'Египет',
                countryUA : 'Египет',
                countryEE : '',
                countryLT : '',
                countryLV : '',
                
                hotels : [
                    {
                        showRU : false,
                        showBY : true,
                        showUA : true,
                        name: 'FUN&SUN Albatros Palace 5*',
                        linkAgent: '/Tours/Africa/Egypt/Sharm-El-Sheikh/Sharm-El-Sheikh/FUN-SUN-Albatros-Palace',
                        linkClient : '/hotel/africa-egypt-sharm__el__sheikh-sharm__el__sheikh-fun__sun__albatros__palace/',
                    },
                                
                    
                    
                ],
            },
        ],
    }
})