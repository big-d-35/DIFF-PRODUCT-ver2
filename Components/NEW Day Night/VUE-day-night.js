const concepts = new Vue({
    el: '#day-night',
    data: {
        //BANNER
        logo: 'https://www.tui.ru/getmedia/2aa86eaa-c3ce-44b8-b0e5-a1e61b413a18/dn-logo-horizontalpng-02@2x',
        logoAlt: 'Day Night Logo',
        bannerConceptsBckg: 'bunner-day-night',
        //bannerLink: 'https://www.tui.ru/getmedia/3dfe0ebc-dadc-41f3-9b3d-189ce7773188/banner-d-n',
        
        bannerItems: [
            { 
                itemRU: 'Новые знакомства и впечатления',
                itemBY: 'Новые знакомства и впечатления',
                itemUA: 'Новые знакомства и впечатления',
                itemEE: 'Uued tutvused ja muljed',
                itemLT: 'Naujos pažintys ir įspūdžiai',
                itemLV: 'Jaunas iepazīšanās un iespaidi ',
            },
            
            {
                itemRU: 'Бурная ночная жизнь',
                itemBY: 'Бурная ночная жизнь',
                itemUA: 'Бурная ночная жизнь',
                itemEE: 'Tormiline ööelu',
                itemLT: 'Ryškus naktinis gyvenimas',
                itemLV: 'Spilgta nakts dzīve',
                
            },
            
            {
                itemRU: 'Активный спортивный день',
                itemBY: 'Активный спортивный день',
                itemUA: 'Активный спортивный день',
                itemEE: 'Aktiivne sportlik päev',
                itemLT: 'Aktyvios sporto dienos',
                itemLV: 'Aktīvas un sportiskas dienas',
                
            },
            
            {
                itemRU: 'Громкая музыка и яркие шоу',
                itemBY: 'Громкая музыка и яркие шоу',
                itemUA: 'Громкая музыка и яркие шоу',
                itemEE: 'Vali muusika ja värvikad etteasted',
                itemLT: 'Garsi muzika ir ryškūs pasirodymai',
                itemLV: 'Skaļa mūzika un aizraujoši šovi',
                
            },
            
        ],
        

        //ABOUT
        aboutTitleRU: 'Что такое DAY&NIGHT?',
        aboutTitleBY: 'Что такое DAY&NIGHT?',
        aboutTitleUA: 'Что такое DAY&NIGHT?',
        aboutTitleEE: 'Mis on DAY&NIGHT?',
        aboutTitleLT: 'Kas yra DAY&NIGHT?',
        aboutTitleLV: 'Kas ir DAY&NIGHT? ',
        
        aboutTextRU: 'DAY&NIGHT Connected – это время, когда день сменяет ночь, а ты попросту этого не замечаешь. Ведь настоящая жизненная сила – это сила в движении!',
        aboutTextBY: 'DAY&NIGHT Connected – это время, когда день сменяет ночь, а ты попросту этого не замечаешь. Ведь настоящая жизненная сила – это сила в движении!',
        aboutTextUA: 'DAY&NIGHT Connected – это время, когда день сменяет ночь, а ты попросту этого не замечаешь. Ведь настоящая жизненная сила – это сила в движении!',
        aboutTextEE: 'DAY&NIGHT Connected  –  see on aeg, kui öö muutub päevaks, kuid sa ei pane seda tähelegi. Sest tõeline elujõud on liikumine!',
        aboutTextLT: 'DAY&NIGHT Connected – atostogos jauniems ir aktyviems žmonėms, kurie neįsivaizduoja savo gyvenimo be sporto, šokių ir linksmybių!',
        aboutTextLV: 'DAY&NIGHT Connected - tas ir laiks, kad diena aizvieto nakti un tu to vienkarši nepamani. Jo īstais dzīves spēks - tas ir kustības spēks!',
        
        //SERVICES
        servicesTitleRU : 'Услуги в отелях DAY&NIGHT Connected',
        servicesTitleBY : 'Услуги в отелях DAY&NIGHT Connected',
        servicesTitleUA : 'Услуги в отелях DAY&NIGHT Connected',
        servicesTitleEE : 'DAY&NIGHT Connected hotellides pakutavad teenused',
        servicesTitleLT : 'Paslaugos DAY&NIGHT Connected viešbučiuose',
        servicesTitleLV : 'DAY&NIGHT Connected viesnīcu pakalpojumi',
        
        servicesItems : [
            
            //1
            {
                cssBckg : 'background-color: #d6f2fd;',
                image: 'https://www.tui.ru/getmedia/896a0748-3573-4f1b-8bff-b88d902d02b2/towel',
                imageAlt : 'Towel',
                titleRU: 'В номерах',
                titleBY: 'В номерах',
                titleUA: 'В номерах',
                titleEE: 'Tubades',
                titleLT: 'Kambaryje',
                titleLV: 'Numuros',
                
                items : [
                    
                    {
                        itemRU : 'Халат и тапочки, набор для душа',
                        itemBY : 'Халат и тапочки, набор для душа',
                        itemUA : 'Халат и тапочки, набор для душа',
                        itemEE : 'Hommikumantel ja sussid, vannitoatarbed',
                        itemLT : 'Chalatai ir šlepetės, kosmetinis rinkinys',
                        itemLV : 'Peldmēteļi, čības un vannas istabas komplekts',
                    },
                    
                    {
                        itemRU : 'Набор для приготовления чая и кофе',
                        itemBY : 'Набор для приготовления чая и кофе',
                        itemUA : 'Набор для приготовления чая и кофе',
                        itemEE : 'Tee ja kohvi valmistamise võimalus',
                        itemLT : 'Kavos/arbatos rinkinys',
                        itemLV : 'Tējas/kafijas pagatavošanas komplekts',
                    },
                    
                    {
                        itemRU : 'Утюг и гладильная доска по запросу',
                        itemBY : 'Утюг и гладильная доска по запросу',
                        itemUA : 'Утюг и гладильная доска по запросу',
                        itemEE : 'Soovi korral triikraud ja triikimislaud',
                        itemLT : 'Lyginimo įranga pagal užklausimą',
                        itemLV : 'Gludeklis un gludināmais dēlis (pēc pieprasījuma)',
                    },
                    
                    {
                        itemRU : 'Вода в мини-баре каждый день',
                        itemBY : 'Вода в мини-баре каждый день',
                        itemUA : 'Вода в мини-баре каждый день',
                        itemEE : 'Minibaaris vesi iga päev',
                        itemLT : 'Vanduo mini bare kievieną dieną',
                        itemLV : 'Ūdens mini-bārā katru dienu',
                    },
                    
                    {
                        itemRU : 'Сейф и фен',
                        itemBY : 'Сейф и фен',
                        itemUA : 'Сейф и фен',
                        itemEE : 'Seif ja föön',
                        itemLT : 'Seifas ir plaukų džiovintuvas',
                        itemLV : 'Seifs un fēns',
                    },
                    
                    
                ],
            },
            
            //2
            {
                cssBckg : 'background-color: #ede8e1;',
                image: 'https://www.tui.ru/getmedia/01b0ca95-b05c-46ef-ad57-24ed4c64ef7d/orange',
                imageAlt : 'Orange',
                titleRU: 'Улучшенное питание',
                titleBY: 'Улучшенное питание',
                titleUA: 'Улучшенное питание',
                titleEE: 'Parem toitlustus',
                titleLT: 'Pagerintas maitinimas',
                titleLV: 'Izcila ēdināšana',
                
                items : [
                    
                    {
                        itemRU : 'Апельсиновый фреш каждое утро',
                        itemBY : 'Апельсиновый фреш каждое утро',
                        itemUA : 'Апельсиновый фреш каждое утро',
                        itemEE : 'Värskelt pressitud apelsinimahl igal hommikul',
                        itemLT : 'Švieži apelsinai kiekvieną rytą',
                        itemLV : 'Svaigi spiesta apelsīnu sula katru rītu',
                    },
                    
                    
                    
                    {
                        itemRU : 'Натуральный кофе и чай',
                        itemBY : 'Натуральный кофе и чай',
                        itemUA : 'Натуральный кофе и чай',
                        itemEE : 'Naturaalne kohv ja tee',
                        itemLT : 'Natūrali kava ir arbata',
                        itemLV : 'Dabīga kafija un tēja',
                    },
                    
                    {
                        itemRU : 'Импортные алкогольные напитки 24 часа',
                        itemBY : 'Импортные алкогольные напитки 24 часа',
                        itemUA : 'Импортные алкогольные напитки 24 часа',
                        itemEE : 'Imporditud alkohoolsed joogid 24h',
                        itemLT : 'Importiniai alkoholiniai gėrimai 24 val.',
                        itemLV : 'Importētie alkoholiskie dzērieni 24h',
                    },
                    
                    {
                        itemRU : 'Ночные напитки и закуски',
                        itemBY : 'Ночные напитки и закуски',
                        itemUA : 'Ночные напитки и закуски',
                        itemEE : 'Öised joogid ja suupisted',
                        itemLT : 'Naktiniai gėrimai ir užkandžiai',
                        itemLV : 'Nakts uzkodas un dzērieni',
                    },
                    
                    {
                        itemRU : 'Блюда славянской кухни: борщ, щи, пельмени',
                        itemBY : 'Блюда славянской кухни: борщ, щи, пельмени',
                        itemUA : 'Блюда славянской кухни: борщ, щи, пельмени',
                        itemEE : 'Slaavi köök: borš, hapukapsasupp, pelmeenid',
                        itemLT : 'Slavų virtuvės patiekalai: barščiai, kopūstų sriuba, koldūnai ',
                        itemLV : 'Slāvu virtuves ēdieni: borščs, kāpostu zupa, pelmeņi',
                    },
                ],
            },
            
            //3
            {
                cssBckg : 'background-color: #ede8e1;',
                image: 'https://www.tui.ru/getmedia/cfa36590-ec3e-4c16-9f7d-67f76b56bf36/music',
                imageAlt : 'Music',
                titleRU: 'Развлечения',
                titleBY: 'Развлечения',
                titleUA: 'Развлечения',
                titleEE: 'Meelelahutus',
                titleLT: 'Pramogos',
                titleLV: 'Aizraujoša izklaide',
                
                items : [
                    
                    {
                        itemRU : 'Выступление известных DJ ',
                        itemBY : 'Выступление известных DJ ',
                        itemUA : 'Выступление известных DJ ',
                        itemEE : 'Tuntud DJ-de esinemised',
                        itemLT : 'Populiarių DJ pasirodymai',
                        itemLV : 'Populāru DJ uzstāšanās',
                    },
                    
                    {
                        itemRU : 'Бесплатный вход в ночные клубы курорта',
                        itemBY : 'Бесплатный вход в ночные клубы курорта',
                        itemUA : 'Бесплатный вход в ночные клубы курорта',
                        itemEE : 'Tasuta sissepääs kuurordi ööklubidesse',
                        itemLT : 'Nemokamas įėjimas į naktinius kurorto klubus',
                        itemLV : 'Bezmaksas ieeja kūrorta nakts klubos',
                    },
                    
                    {
                        itemRU : 'Пляжный волейбол и водное поло',
                        itemBY : 'Пляжный волейбол и водное поло',
                        itemUA : 'Пляжный волейбол и водное поло',
                        itemEE : 'Rannavõrkpall ja veepall',
                        itemLT : 'Paplūdimio tinklinis ir vandensvydis',
                        itemLV : 'Pludmales volejbols un ūdens polo',
                    },
                    
                    {
                        itemRU : 'Аэробика и аквааэробика, йога и пилатес',
                        itemBY : 'Аэробика и аквааэробика, йога и пилатес',
                        itemUA : 'Аэробика и аквааэробика, йога и пилатес',
                        itemEE : 'Aeroobika ja vesiaeroobika, jooga ja pilates',
                        itemLT : 'Aerobika ir vandens aerobika, joga ir pilatesas',
                        itemLV : 'Aerobika, ūdens aerobika, joga un pilates',
                    },
                    
                    {
                        itemRU : 'Фитнес программы со звездами спорта',
                        itemBY : 'Фитнес программы со звездами спорта',
                        itemUA : 'Фитнес программы со звездами спорта',
                        itemEE : 'Fitness-programmid koos sporditähtedega',
                        itemLT : 'Treniruočių programa su sporto žvaigždėmis',
                        itemLV : 'Fitnesa programmas ar sporta zvaigznēm',
                    },
                    
                    
                ],
            },
            
            //4
            {
                cssBckg : 'background-color: #d6f2fd;',
                image: 'https://www.tui.ru/getmedia/0b849ad5-2938-481a-9bb5-5e248a8878e6/sport',
                imageAlt : 'Sport',
                titleRU: 'На территории отеля',
                titleBY: 'На территории отеля',
                titleUA: 'На территории отеля',
                titleEE: 'Hotelli territooriumil',
                titleLT: 'Viešbučio teritorijoje',
                titleLV: 'Viesnīcas teritorijā',
                
                items : [
                    
                    {
                        itemRU : 'Wi-Fi',
                        itemBY : 'Wi-Fi',
                        itemUA : 'Wi-Fi',
                        itemEE : 'Wi-Fi',
                        itemLT : 'Wi-Fi',
                        itemLV : 'Wi-Fi',
                    },
                    
                    {
                        itemRU : 'Pool bar, snack bar, disco bar',
                        itemBY : 'Pool bar, snack bar, disco bar',
                        itemUA : 'Pool bar, snack bar, disco bar',
                        itemEE : 'Basseinibaar, suupistebaar, diskobaar',
                        itemLT : 'Baras prie baseino, užkandžių baras, disko baras',
                        itemLV : 'Bārs pie baseina, uzkodu bārs, disko-bārs',
                    },
                    
                    {
                        itemRU : 'Площадка для Wellness занятий',
                        itemBY : 'Площадка для Wellness занятий',
                        itemUA : 'Площадка для Wellness занятий',
                        itemEE : 'Tervisevõimlemise ala',
                        itemLT : 'Sveikatingumo zona',
                        itemLV : 'Wellness laukums nodarbībām',
                    },
                    
                    {
                        itemRU : 'Площадка для open air',
                        itemBY : 'Площадка для open air',
                        itemUA : 'Площадка для open air',
                        itemEE : 'Vabaõhuväljak',
                        itemLT : 'Aikštelė po atviru dangumi',
                        itemLV : 'Open air laukums',
                    },
                    
                    {
                        itemRU : 'Spa-центр: турецкая баня, сауна ',
                        itemBY : 'Spa-центр: турецкая баня, сауна ',
                        itemUA : 'Spa-центр: турецкая баня, сауна ',
                        itemEE : 'Spaakeskus: Türgi saun, saun',
                        itemLT : 'SPA centras: turkiška pirtis, sauna',
                        itemLV : 'SPA centrs: turku pirts, sauna',
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
                        itemRU : 'Танцевальный лагерь с отчетным концертом',
                        itemBY : 'Танцевальный лагерь с отчетным концертом',
                        itemUA : 'Танцевальный лагерь с отчетным концертом',
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
                        name: 'DAY&NIGHT Connected Club Hydros 5*',
                        linkAgent: '/Tours/Europe/Turkey/kemer/Kemer-Center/TUI-DAY-NIGHT-Connected-Club-Hydros',
                        linkClient : '/hotel/europe-turkey-kemer-kemer__center-tui__day__night__connected__club__hydros/',
                    },
                    
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        name: 'DAY&NIGHT Connected Imperial Turkiz Hotel 5*',
                        linkAgent: '/Tours/Europe/Turkey/Kemer/Kemer-Center/day-night-connected-imperial-turkiz-hotel',
                        linkClient : '/hotel/europe-turkey-kemer-kemer__center-day__night__connected__imperial__turkiz__hotel/',
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
                countryEE : 'Kreeka',
                countryLT : 'Graikija',
                countryLV : 'Grieķija',
                
                hotels : [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : false,
                        showLT : false,
                        showLV : false,
                        name: 'DAY&NIGHT Connected Season 4*',
                        linkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/day-night-connected-seasons',
                        linkClient : '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/day-night-connected-seasons',
                    },
                    
                    
                    
                    
                    
                ],
            },
            
            
            //ЕГИПЕТ
            {
                showRU : false,
                showBY : true,
                showUA : true,
                showEE : true,
                showLT : true,
                showLV : true,
                countryRU : 'Египет',
                countryBY : 'Египет',
                countryUA : 'Египет',
                countryEE : 'Egiptus',
                countryLT : 'Egiptas',
                countryLV : 'Ēģipte',
                
                hotels : [
                    {
                        showRU : false,
                        showBY : true,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        name: 'DAY&NIGHT Connected Tropitel Waves 5*',
                        linkAgent: '/Tours/Africa/Egypt/Sharm-El-Sheikh/Sharm-El-Sheikh/day-night-connected-tropitel-waves',
                        linkClient : '/hotel/africa-egypt-sharm__el__sheikh-sharm__el__sheikh-day__night__connected__tropitel__waves/',
                    },
                    
                    
                    
                    
                    
                ],
            },
            
            
            
        ],
    }
})