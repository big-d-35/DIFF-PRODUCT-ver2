/*
Привет.
Ниже файл с информацией для ВСЕХ страниц TOUCAN для клиентского и агентского сайте (RU BY UA  EE LT LV)

Для того чтобы изменить информацию достаточно заменить ее в этом файле и обновить файл который лежит на сайте tui.ru \ media \ новый сайт \ концепции \ TUI Toucan \ JS \ VUE-Toucan-page.js - ВНИМАНИЕ! именно нажать на кнопку заменить, иначе придется менять ссылку на всех страницах.

Обрати внимение на название переменных в файле html, если в конце есть указание к стране (например имя оканчивается myNameRU - значит это перевод на русский, myNameEE - значит это перевод на эстонский и тп)

Также обрати внимание на название ссылок - если оканчивается на Client - значит ссылка на клиент, если Agent - значит ссылка на агенте.

Некоторые страницы в консоли могут ругаться на отсутствие некоторых элементов, это нормально, просто у нас один файл на все страницы и соответственно на некоторых страницах нет элементов с других страниц, поэтому не обращай внимание.

*/

//TOUCAN HEADER PART
const toucanHeaderPart = new Vue ({
    el : '#toucan-header-part',
    data: {
        logoLink : 'https://www.tui.ru/getmedia/eda1b56f-2532-46eb-8626-65425d799edf/TC-logo-mini-vertical',
        titleRU: 'Детский клуб Мини Тукан глазами детей и родителей:',
        titleBY: 'Детский клуб Мини Тукан глазами детей и родителей:',
        titleUA: 'Детский клуб Мини Тукан глазами детей и родителей:',
        titleEE: 'Lasteklubi Mini Toucan laste ja vanemate pilgu läbi:',
        titleLT: 'Mini Toucan klubas vaikų ir jų tėvelių akimis',
        titleLV: 'Bērnu klubs Mini Toucan caur bērnu un vecāku acīm:',
        
        text1RU : 'Аниматоры, с которыми интересно',
        text2RU : 'Всё понятно, потому что говорят на русском',
        text3RU : 'Детское меню в буфете "Тукан"',
        text4RU : 'Мини-дискотека под любимые хиты',
        text5RU : 'Умные игры, которые развивают',
        text6RU : 'Любимые мультфильмы со смыслом',
        text7RU : 'Современная игровая площадка',
        
        text1BY : 'Аниматоры, с которыми интересно',
        text2BY : 'Всё понятно, потому что говорят на русском',
        text3BY : 'Детское меню в буфете "Тукан"',
        text4BY : 'Мини-дискотека под любимые хиты',
        text5BY : 'Умные игры, которые развивают',
        text6BY : 'Любимые мультфильмы со смыслом',
        text7BY : 'Современная игровая площадка',
        
        text1UA : 'Аниматоры, с которыми интересно',
        text2UA : 'Всё понятно, потому что говорят на русском',
        text3UA : 'Детское меню в буфете "Тукан"',
        text4UA : 'Мини-дискотека под любимые хиты',
        text5UA : 'Умные игры, которые развивают',
        text6UA : 'Любимые мультфильмы со смыслом',
        text7UA : 'Современная игровая площадка',
        
        text1EE : 'Animaatorid kellega on huvitav',
        text2EE : 'Kõik selge ja lihtne',
        text3EE : 'Lastemenüü buffetis "Toucan"',
        text4EE : 'Lemmikute hittide minidisko',
        text5EE : 'Nutikad arenemismängud',
        text6EE : 'Lemmikud multikad',
        text7EE : 'Kaasaegne mänguväljak',
        
        text1LT : 'Animatorių komanda su kuria įdomu',
        text2LT : 'Bendraujama užsienio kalba',
        text3LT : 'Vaikiškas meniu Tukano bufete',
        text4LT : 'Vaikų diskoteka pagal mėgstamus hitus',
        text5LT : 'Lavinantys žaidimai',
        text6LT : 'Mėgstami animaciniai filmukai',
        text7LT : 'Moderni žaidimų aikštelė',
        
        text1LV : 'Animatori ar kuriem ir interesanti',
        text2LV : 'Visi dzimtajā valodā',
        text3LV : 'Bērnu edienkartes "Toucan" bufetē',
        text4LV : 'Mini-diskotēka ar iemīļotiem bērnu hitiem',
        text5LV : 'Gudras spēles, kas attīsta',
        text6LV : 'Iemīļotas un jēgpilnas multfilmas',
        text7LV : 'Mūsdienīgi rotaļu laukumi',
        
        
        
        videoLink : 'https://www.tui.ru/getmedia/8f5429a2-487b-4807-bec3-bec1a2088a67/play',
        
    }
})

//TOUCAN MENU
const toucanMenu = new Vue ({
    el: '#toucan-menu',
    data: {
        menu1RU : 'Это Мини Тукан',
        menu1BY : 'Это Мини Тукан',
        menu1UA : 'Это Мини Тукан',
        menu1EE : 'See on Mini Toucan',
        menu1LT : 'Tai Mini Toucan',
        menu1LV : 'Tas ir Mini Toucan',
        menu1LinkClient: '/concepts/tui-toucan/',
        menu1LinkAgent: '/concepts/tui-toucan/',
        
        
        menu2RU : 'Фишки',
        menu2BY : 'Фишки',
        menu2UA : 'Фишки',
        menu2EE : 'Nippid',
        menu2LT : 'Ypatybės',
        menu2LV : 'Īpašības',
        
        menu3RU : 'Отели',
        menu3BY : 'Отели',
        menu3UA : 'Отели',
        menu3EE : 'Hotellid',
        menu3LT : 'Viešbučiai',
        menu3LV : 'Viesnīcas',
        
        menu4RU : 'Программа развлечений',
        menu4BY : 'Программа развлечений',
        menu4UA : 'Программа развлечений',
        menu4EE : 'Meelelahutusprogramm',
        menu4LT : 'Pramoginė programa',
        menu4LV : 'Izklaides programma',
        menu4LinkClient: '/concepts/tui-toucan-entertainment-program/',
        menu4LinkAgent: '/concepts/tui-toucan/entertainment-program/',
        
        menu5RU : 'Перейти к бронированию',
        menu5BY : 'Перейти к бронированию',
        menu5UA : 'Перейти к бронированию',
        menu5EE : 'Broneerimine',
        menu5LT : 'Rezervuoti',
        menu5LV : 'Pāriet pie rezervācijam',
        
        menu5LinkRU : 'http://b2b.tui.ru/default.php?page=search_tour&amp;',
        menu5LinkBY : 'http://b2b.tui.by/default.php?page=search_tour&amp;',
        menu5LinkUA : 'http://b2b.tui.ua/default.php?page=search_tour&amp;',
        menu5LinkEE : 'https://b2b.tuibaltics.eu/',
        menu5LinkLT : 'https://b2b.tuibaltics.eu/',
        menu5LinkLV : 'https://b2b.tuibaltics.eu/',
    }
})

//MAIN PAGE
const mainPage = new Vue ({
    el: '#toucan-main-page',
    data: {
        titleRU : 'КЛЮЧЕВЫЕ МОМЕНТЫ',
        titleBY : 'КЛЮЧЕВЫЕ МОМЕНТЫ',
        titleUA : 'КЛЮЧЕВЫЕ МОМЕНТЫ',
        titleEE : 'PÕHIPUNKTID',
        titleLT : 'SVARBŪS MOMENTAI',
        titleLV : 'SVARĪGIE MOMENTI',
        
        menu1RU: 'Веселимся с Туканом',
        menu2RU: 'В ресторане',
        menu3RU: 'Территория детства',
        
        menu1BY: 'Веселимся с Туканом',
        menu2BY: 'В ресторане',
        menu3BY: 'Территория детства',
        
        menu1UA: 'Веселимся с Туканом',
        menu2UA: 'В ресторане',
        menu3UA: 'Территория детства',
        
        menu1EE: 'Pidutseme koos Toucaniga',
        menu1EE: 'Restoranis',
        menu3EE: 'Lapsepõlve territoorium',
        
        menu1LT: 'Linksminamės su Tukanu',
        menu1LT: 'Restorane',
        menu3LT: 'Vaikų teritorija',
        
        menu1LV: 'Jautri ar Toucan',
        menu2LV: 'Restorānā',
        menu3LV: 'Bērnības teritorija',
        
        //SLIDER 1
        keySlider1items : [
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/408ffea0-5e1f-4c91-a12d-a40ca3ac3c7f/T1);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Тукан - Путешественник',
                textRU: 'Вас неоднократно озадачивало внезапное - маам, паап, а почему...?  И вы хотите хотя бы в отпуске размышлять только над одним - "почему так хорошо..."? Тогда вам точно поможет наш Тукан, вместе с ним дети будут изучать устройство мира. Малыш получит настоящий Мини Тукан загранпаспорт и отправится в чудесное путешествие по планете в поисках новых приключений и знаний.',
                
                //BY
                nameBY: 'Тукан - Путешественник',
                textBY: 'Вас неоднократно озадачивало внезапное - маам, паап, а почему...?  И вы хотите хотя бы в отпуске размышлять только над одним - "почему так хорошо..."? Тогда вам точно поможет наш Тукан, вместе с ним дети будут изучать устройство мира. Малыш получит настоящий Мини Тукан загранпаспорт и отправится в чудесное путешествие по планете в поисках новых приключений и знаний.',
                
                //UA
                nameUA: 'Тукан - Путешественник',
                textUA: 'Вас неоднократно озадачивало внезапное - маам, паап, а почему...?  И вы хотите хотя бы в отпуске размышлять только над одним - "почему так хорошо..."? Тогда вам точно поможет наш Тукан, вместе с ним дети будут изучать устройство мира. Малыш получит настоящий Мини Тукан загранпаспорт и отправится в чудесное путешествие по планете в поисках новых приключений и знаний.',
                
                //EE
                nameEE: 'Toucan Seikleja',
                textEE: 'Teie uudishimulit laps soovib alati teada “miks ja kuidas? ” teie aga puhkusel soovite mõelda ainult selle peale kui hea on puhata? Siin teid aitab Tuocan, kellega koos lapsed saavad avastada maailma. Laps saab Mini Toucan passi ja asub avastama imelist maailma otsides seiklusi ja uusi teadmisi.',
                
                //LT
                nameLT: 'Tukanas - keliautojas',
                textLT: 'Norėtumėte ramaus poilsio, kuomet vaikai turėtų užsiėmimą? Mūsų Tukanas Jums padės, o vaikai bus sudominti pasaulio pažinimu. Vaikas gaus tikrą Mini Toucan pasą ir leisis į nuostabią kelionę aplink planetą, ieškodamas naujų nuotykių ir žinių.',
                
                //LV
                nameLV: 'Toucan Celotājs',
                textLV: 'Jūsu prātu nereti nodarbina bērnu jautājumi "mammu, tēti, kāpēc...? bet viss par ko jūs vēlaties domāt - "kāpēc ir tik labi...? Tad jums noteikti palīdzēs mūsu Toucan! Kopā ar Toucan bērni izzinās pasaules kārtību. Bērni iegūs īstu  TUI Mini Toucan pasi un, meklējot jaunas zināšanas un izklaides, dosies ceļojumā apkārt pasaulei.',
                
            },
            
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/9ac47302-573f-4c73-8f3e-3b0df6eff70e/T2);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Увлекательная вечерняя программа!',
                textRU: 'Заводное мини-диско, Просмотр интересных новых мультфильмов, Вечеринка Тукана',
                
                //BY
                nameBY: 'Увлекательная вечерняя программа!',
                textBY: 'Заводное мини-диско, Просмотр интересных новых мультфильмов, Вечеринка Тукана',
                
                //UA
                nameUA: 'Увлекательная вечерняя программа!',
                textUA: 'Заводное мини-диско, Просмотр интересных новых мультфильмов, Вечеринка Тукана',
                
                //EE
                nameEE: 'Põnev õhtuprogramm!',
                textEE: 'Energiline Minidisco, uute ja huvitavate multikate vaatamine, Toucan pidu',
                
                //LT
                nameLT: 'Pramoginė vakaro programa',
                textLT: 'Vaikų diskoteka, animacinių filmukų peržiūra, Tukano vakarėlis',
                
                //LV
                nameLV: 'Aizraujoša vakara programma',
                textLV: 'Jautrā mini-diskotēka, Jaunu un interesantu multfilmu apskate, Toucan Ballīte',
            },
            
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/81db427c-1854-4807-85a4-2dcb0f49d4cb/T3);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Магия кино',
                textRU: 'Киносеанс под открытым небом с попкорном',
                
                //BY
                nameBY: 'Магия кино',
                textBY: 'Киносеанс под открытым небом с попкорном',
                
                //UA
                nameUA: 'Магия кино',
                textUA: 'Киносеанс под открытым небом с попкорном',
                
                //EE
                nameEE: 'Kinomaagia',
                textEE: 'Vabaõhukino popkorniga',
                
                //LT
                nameLT: 'Kino magija',
                textLT: 'Kino seansas po atviru dangumi bei spragėsiais',
                
                //LV
                nameLV: 'Kino maģija',
                textLV: 'Kino vakars ar popkornu zem klajas debess',
            },
            
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/491137fa-480b-4b12-b8d2-ebf19448abbe/T4);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Подвижные игры',
                textRU: 'Выплескиваем энергию в играх! Сюжетно-ролевые игры: "Поварята", "Через джунгли на лиане", "Поиск сокровищ".',
                
                //BY
                nameBY: 'Магия кино',
                textBY: 'Выплескиваем энергию в играх! Сюжетно-ролевые игры: "Поварята", "Через джунгли на лиане", "Поиск сокровищ".',
                
                //UA
                nameUA: 'Магия кино',
                textUA: 'Выплескиваем энергию в играх! Сюжетно-ролевые игры: "Поварята", "Через джунгли на лиане", "Поиск сокровищ".',
                
                //EE
                nameEE: 'Kinomaagia',
                textEE: 'Kulutame energiat mängides! Rollimängud: "Kokad", "Läbi džunglite", "Aardejaht"',
                
                //LT
                nameLT: 'Aktyvūs žaidimai',
                textLT: 'Išliekime energiją žaisdami! Vaidmenų žaidimai: "Virėjai", "Lianomis per džiungles", "Lobių paieška"',
                
                //LV
                nameLV: 'Kustīgas spēles',
                textLV: 'Sižeta un lomu spēles: "Mazie pavāri", "Caur džungļiem ar liānu", "Dārgumu meklēšana"',
            },
            
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/3f3ec809-f4de-4504-ac3f-345510238441/T5_1);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Подарки от Тукана',
                textRU: 'Подарки любят все, а мы любим наших клиентов. Поэтому при первом визите в клуб TUI Мини Тукан наши маленькие гости получают подарок - футболку с фирменной символикой Тукана. Теперь мы одна команда!',
                
                //BY
                nameBY: 'Подарки от Тукана',
                textBY: 'Подарки любят все, а мы любим наших клиентов. Поэтому при первом визите в клуб TUI Мини Тукан наши маленькие гости получают подарок - футболку с фирменной символикой Тукана. Теперь мы одна команда!',
                
                //UA
                nameUA: 'Подарки от Тукана',
                textUA: 'Подарки любят все, а мы любим наших клиентов. Поэтому при первом визите в клуб TUI Мини Тукан наши маленькие гости получают подарок - футболку с фирменной символикой Тукана. Теперь мы одна команда!',
                
                //EE
                nameEE: 'Tocan kingitused',
                textEE: 'Kõik armastavad kingitusi ja meie armastame meie kliente. Esimesel Mini Toucan klubi külastamisel saavad meie väiksed turistid kingituse - Toucan logoga T-särgi. Nüüd oleme üks meeskond!',
                
                //LT
                nameLT: 'Tukano dovanos',
                textLT: 'Dovanos patinka visiems, todėl pirmąkart apsilankius Mini Toucan vaikų klube mažieji svečiai gauna dovanėlę - marškinėlius su Tukano simbolika. Dabar mes viena komanda!',
                
                //LV
                nameLV: 'Dāvanas no Toucan',
                textLV: 'Dāvanas mīl visi, bet mēs mīlam mūsu klientus. Tādēļ pirmajā TUI Mini Toucan kluba apmeklējumā laikā mūsu mazie viesi saņems dāvanu T-krēklu ar Toucan logo. Tagad mēs esam viena komanda!',
            },
        ],
        
        //SLIDER 2
        keySlider2items : [
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/1c624da1-49f4-431f-a73b-17380f205648/T7);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Детское меню',
                textRU: 'Да, для наших маленьких - и очень самостоятельных путешественников есть детское меню* (не во всех отелях). Яркая детская мебель, небьющаяся посуда и большой выбор блюд: от супов до десертов. Малыш может самостоятельно составить себе меню и пообедать в кругу друзей. А, как известно, в компании с аппетитом едят даже большие привереды! * Наличие детского меню в конкретном отеле смотрите в описании на странице нужного вам отеля с Клубом Тукан.',
                
                //BY
                nameBY: 'Детское меню',
                textBY: 'Да, для наших маленьких - и очень самостоятельных путешественников есть детское меню* (не во всех отелях). Яркая детская мебель, небьющаяся посуда и большой выбор блюд: от супов до десертов. Малыш может самостоятельно составить себе меню и пообедать в кругу друзей. А, как известно, в компании с аппетитом едят даже большие привереды! * Наличие детского меню в конкретном отеле смотрите в описании на странице нужного вам отеля с Клубом Тукан.',
                
                //UA
                nameUA: 'Детское меню',
                textUA: 'Да, для наших маленьких - и очень самостоятельных путешественников есть детское меню* (не во всех отелях). Яркая детская мебель, небьющаяся посуда и большой выбор блюд: от супов до десертов. Малыш может самостоятельно составить себе меню и пообедать в кругу друзей. А, как известно, в компании с аппетитом едят даже большие привереды! * Наличие детского меню в конкретном отеле смотрите в описании на странице нужного вам отеля с Клубом Тукан.',
                
                //EE
                nameEE: 'Lastemenüü',
                textEE: 'Meie väikestele ja iseseisvatele külalistele pakume lastemenüüd (mitte kõikides hotellides). Lastemööbel, purunematu kööginõud ja suur toidu valik: suppidest kuni dessertideni. Laps saab ise koosta endale menüüt ja süüa koos uute sõpradega. Laste menüüt saate vaadata Toucan klubidega hotellides.',
                
                //LT
                nameLT: 'Vaikiškas meniu',
                textLT: 'Taip, mūsų mažiems ir labai nepriklausomiems keliautojams yra vaikiškas meniu * (ne visuose viešbučiuose). Šviesūs baldai, nedūžtantys indai ir didelis patiekalų pasirinkimas: nuo sriubų iki desertų. Vaikas gali savarankiškai susikurti meniu ir papietauti su draugais. * Pasitikslinti ar viešbutyje yra vaikų klubas prašome žiūrėti konkretaus viešbučio aprašyme.',
                
                //LV
                nameLV: 'Bērnu ēdienkarte',
                textLV: 'Jā, jūs nepārklausījāties! Mūsu mazajiem un jau tik ļoti patstāvīgajiem ceļotājiem ir izstrādāta īpaša bērnu ēdienkarte * (ne visās viesnīcās). Košas mēbeles, bērniem droši trauki un plaša ēdienu izvēle: sākot no zupām un beidzot ar desertiem. Bērni var patstāvīgi sastādīt savu ēdienkarti un ieturēt maltīti kopā ar draugiem. Kā zināms, labā kompānijā liela ēstgriba parādās pat pašiem izvēlīgākajiem. * Bērnu ēdienkartes pieejamību noteiktā viesnīcā ar klubu Toucan var precizēt viesnīcas aprakstā, mājaslapā.',
                
            },
            
            
        ],
        
        //SLIDER 3
        keySlider3items : [
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/d1df5210-7b9c-4c3b-bb1f-d59d57ad1dce/T9);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Открытые площадки для игр',
                textRU: 'Здесь запрещена фраза "туда нельзя" - везде можно! Игровые площадки на открытом воздухе манят качелями-каруселями-горками, зелёные лужайки словно специально созданы для игр. Все ярко, весело и безопасно!',
                
                //BY
                nameBY: 'Открытые площадки для игр',
                textBY: 'Здесь запрещена фраза "туда нельзя" - везде можно! Игровые площадки на открытом воздухе манят качелями-каруселями-горками, зелёные лужайки словно специально созданы для игр. Все ярко, весело и безопасно!',
                
                //UA
                nameUA: 'Открытые площадки для игр',
                textUA: 'Здесь запрещена фраза "туда нельзя" - везде можно! Игровые площадки на открытом воздухе манят качелями-каруселями-горками, зелёные лужайки словно специально созданы для игр. Все ярко, весело и безопасно!',
                
                //EE
                nameEE: 'Avarad mänguväljakud',
                textEE: 'Siin ei kasutata väljendi «sinna ei või minna» – mängida saab igalpool! Avarad vabas õhus rohelised mänguplatsid, kiigud, liurada. Särav, lõbus ja turvaline!',
                
                //LT
                nameLT: 'Žaidimų aikštelė',
                textLT: '„Ten negalima“ – tokia frazė nevartojama, čia galima visur! Žaidimų aikštelės atvirame, sūpuoklės, žalios vejos specialiai skirtos žaidimams. Viskas ryšku, linksma ir saugu!',
                
                //LV
                nameLV: 'Ara rotaļu laukumi',
                textLV: 'Šeit ir aizligta frāze «nedrīkst» – drīkst visu! Rotaļu laukumi svaigā gaisā valdzina ar šūpolēm-karuseļiem-slidkalniņiem, zālājs burtiski radīts spēlēm. Viss ir košs, jautrs un drošs!',
                
            },
            
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/ac46be1b-d7f2-4b9c-be0c-2e789948fba5/T10);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Детские бассейны',
                textRU: 'Какой же отдых без игр на воде? А за безопасность и развлечения будут отвечать наши профессиональные аниматоры.',
                
                //BY
                nameBY: 'Детские бассейны',
                textBY: 'Какой же отдых без игр на воде? А за безопасность и развлечения будут отвечать наши профессиональные аниматоры.',
                
                //UA
                nameUA: 'Детские бассейны',
                textUA: 'Какой же отдых без игр на воде? А за безопасность и развлечения будут отвечать наши профессиональные аниматоры.',
                
                //EE
                nameEE: 'Lastebasseinid',
                textEE: 'Kuidas saab olla puhkus ilma veemängudeta? Turvalisuse ja meelelahutuse eest vastutavad meie professionaalsed animaatorid.',
                
                //LT
                nameLT: 'Vaikų baseinai',
                textLT: 'Koks poilsis be vandens žaidimų? Mūsų profesionalūs animatoriai bus atsakingi už saugumą ir pramogas.',
                
                //LV
                nameLV: 'Bērnu baseini',
                textLV: 'Kāda gan atpūta bez ūdens atrakcijām? Bet par drošu izklaidi parūpēsies mūsu profesionālie animatori.',
                
            },
            
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/c6d2a9fa-4436-45bc-8466-1a537c380248/T11_3);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Клубные комнаты',
                textRU: 'Сама атмосфера комнат клуба настраивает на веселье и любознательность: яркая, удобная мебель, наборы для творчества и настольные игры, широкие экраны с захватывающими мультиками.',
                
                //BY
                nameBY: 'Клубные комнаты',
                textBY: 'Сама атмосфера комнат клуба настраивает на веселье и любознательность: яркая, удобная мебель, наборы для творчества и настольные игры, широкие экраны с захватывающими мультиками.',
                
                //UA
                nameUA: 'Клубные комнаты',
                textUA: 'Сама атмосфера комнат клуба настраивает на веселье и любознательность: яркая, удобная мебель, наборы для творчества и настольные игры, широкие экраны с захватывающими мультиками.',
                
                //EE
                nameEE: 'Mängutoad',
                textEE: 'Mänguruumi sisustus loob lõbu ja uudishimu: helge, mugav mööbel, loomingulised ja lauamängud, televiisorid multifilmidega.',
                
                //LT
                nameLT: 'Klubo kambariai',
                textLT: 'Klubo kambarių atmosfera nuteikia linksmybėms: šviesūs, patogūs baldai, kūrybiškumo ir stalo žaidimų rinkiniai, platūs ekranai su įdomiais animaciniais filmais.',
                
                //LV
                nameLV: 'Kluba istabas',
                textLV: 'Pati kluba istabu atmosfēra noskaņo bērnus jautrai un izglītojošai atpūtai: košas, ērtas mēbeles, radošās mākslas komplekti, galda spēles un plati ekrāni ar aizraujošām multfilmām.',
                
            },
        ],
        
        title2RU : 'Новые отели с Детским клубом МИНИ ТУКАН в ОАЭ',
        title2BY : 'Новые отели с Детским клубом МИНИ ТУКАН в ОАЭ',
        title2UA : 'Новые отели с Детским клубом МИНИ ТУКАН в ОАЭ',
        title2EE : 'AÜE uued hotellid MINI TUKAN lasteklubidega',
        title2LT : 'Nauji viešbučiai JAE su Mini Toucan vaikų klube',
        title2LV : 'Jaunas viesnīcas ar Bērnu klubu MINI TOUCAN AAE',
        
        text2RU : 'Детский клуб Мини Тукан в отелях  ',
        text2_1RU : ' ОАЭ начнет работу в этом году с 20 октября.',
        
        text2BY : 'Детский клуб Мини Тукан в отелях  ',
        text2_1BY : ' ОАЭ начнет работу в этом году с 20 октября.',
        
        text2UA : 'Детский клуб Мини Тукан в отелях  ',
        text2_1UA : ' ОАЭ начнет работу в этом году с 20 октября.',
        
        text2EE : 'Mini Toucan lasteklubi hotellides ',
        text2_1EE : ' AÜE alustab tööd sel aastal 20. oktoobrist.',
        
        text2LT : 'Mini „Toucan“ vaikų klubas viešbučiuose ',
        text2_1LT : ' JAE šiais metais pradės dirbti nuo spalio 20 dienos.',
        
        text2LV : 'Bērnu klubs Mini Toucan ',
        text2_1LV : ' viesnīcas Rāselhaimā',
        
        
        
        text2EE : '',
        text2LT : '',
        text2LV : '',
        
        title3RU : 'Отели с Мини Туканом в Испании:',
        title3BY : 'Отели с Мини Туканом в Испании:',
        title3UA : 'Отели с Мини Туканом в Испании:',
        title3EE : 'Hispaania hotellid Mini Toucan lasteklubidega',
        title3LT : 'Viešbučiai su Mini Toucan vaikų klubu Ispanijoje',
        title3LV : 'Viesnīcas ar Mini Toucan Spānijā',
        
        
        hotel1LinkAgent : '/Tours/Asia/UAE/Fujairah/Fujairah-beach-hotels/blue-diamond-alsalam-resort',
        hotel1LinkClient: '/hotel/asia-uae-fujairah-fujairah__beach__hotels-blue__diamond__alsalam__resort/',
        hotel1Name : 'Blue Diamond Alsalam Resort 5*',
        hotel1PlaceRU : 'Фуджейра',
        hotel1PlaceBY : 'Фуджейра',
        hotel1PlaceUA : 'Фуджейра',
        hotel1PlaceEE : 'Fujairah',
        hotel1PlaceLT : 'Fujairah',
        hotel1PlaceLV : 'Fudžeira',
        
        hotel2Link : '',
        hotel2Name : '',
        hotel2PlaceRU : '',
        hotel2PlaceBY : '',
        hotel2PlaceUA : '',
        hotel2PlaceEE : '',
        hotel2PlaceLT : '',
        hotel2PlaceLV : '',
        
        hotel3Link : '/Tours/Europe/Italy/Calabria/Pizzo/Valtur-Garden-Calabria',
        hotel3Name : 'Garden Resort Calabria 4*',
        hotel3PlaceRU : '(Калабрия, Пиццо)',
        hotel3PlaceBY : '(Калабрия, Пиццо)',
        hotel3PlaceUA : '(Калабрия, Пиццо)',
        hotel3PlaceEE : '(Calabria, Pizzo)',
        hotel3PlaceLT : '(Kalabrija, Pizzo)',
        hotel3PlaceLV : '(Kalabrija, Pizzo)',
        
        hotel4Name: 'Al Hamra Residence 5*',
        hotel4LinkAgent: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-residence',
        hotel4LinkClient: '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__residence/',
        
        hotel5Name: 'Al Hamra Village Golf & Beach Resort 4*',
        hotel5LinkAgent: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-village-golf-beach-resort',
        hotel5LinkClient: '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__village__golf__beach__resort/',
        
        
        dopInfo1Hotels : [
          { 
            itemRU : 'Концепция "Тукан-путешественник" ― увлекательные приключения в разных странах',
            itemBY : 'Концепция "Тукан-путешественник" ― увлекательные приключения в разных странах',
            itemUA : 'Концепция "Тукан-путешественник" ― увлекательные приключения в разных странах',
            itemEE : '"Toucan seikleja" kontseptsioon - põnevad seiklused erinevates riikides',
            itemLT : 'Koncepcija "Tukanas - keliautojas" - įdomūs nuotykiai skirtingose šalyse',
            itemLV : 'Koncepcija "Toucan-ceļotājs" - aizraujošie piedzīvojumi dažādās valstīs',
          },
          
          /*{
            itemRU : 'Программа на русском языке для детей двух возрастов: Тукан Kids 4-7 лет и Тукан Junior 8-12 лет',
            itemBY : 'Программа на русском языке для детей двух возрастов: Тукан Kids 4-7 лет и Тукан Junior 8-12 лет',
            itemUA : 'Программа на русском языке для детей двух возрастов: Тукан Kids 4-7 лет и Тукан Junior 8-12 лет',
            itemEE : 'Programm on mõeldud kahele vanusegruppile: Toucan Kids 4-7 aastased ja Toucan Junior 8-12 aastased.',
            itemLT : 'Programos vaikams: Toucan Kids 4-7 metų ir Toucan Junior 8-12 metų',
            itemLV : '',
          },*/
            
          { 
            itemRU : 'Клуб работает 6 дней в неделю, с 10-00 до 12-30, с 14-30 до 17-00.',
            itemBY : 'Клуб работает 6 дней в неделю, с 10-00 до 12-30, с 14-30 до 17-00.',
            itemUA : 'Клуб работает 6 дней в неделю, с 10-00 до 12-30, с 14-30 до 17-00.',
            itemEE : 'Klubi töötab 6 päeva nädalas, 10:00 kuni 12:30, 14:30 kuni 17:00.',
            itemLT : 'Vaikų klubas veikia 6 dienas per savaitę, nuo 10-00 iki 12-30, nuo 14-30 iki 17-00.',
            itemLV : 'Klubs ir atvērts 6 denas nedēļā no 10-00 līdz 12-30, no 14-30 līdz 17-00.',
          }, 
            
          { 
            itemRU : 'Вечером ― мини-диско',
            itemBY : 'Вечером ― мини-диско',
            itemUA : 'Вечером ― мини-диско',
            itemEE : 'Õhtul ― minidisko',
            itemLT : 'Vakare - vaikų diskoteka',
            itemLV : 'Vakarā - mini-diskotēka',
          },     
        ],
        
        
        
        title4RU : 'Отель с Мини Туканом в Италии:',
        title4BY : 'Отель с Мини Туканом в Италии:',
        title4UA : 'Отель с Мини Туканом в Италии:',
        title4EE : 'Mini Toucan hotellid Itaalias',
        title4LT : 'Viešbučiai su Mini Toucan vaikų klubu Italijoje',
        title4LV : 'Viesnīca ar Mini Toucan Itālijā',
        
        
        
        title5RU : 'Программа "ПУТЕШЕСТВИЯ С ТУКАНОМ"',
        title5BY : 'Программа "ПУТЕШЕСТВИЯ С ТУКАНОМ"',
        title5UA : 'Программа "ПУТЕШЕСТВИЯ С ТУКАНОМ"',
        title5EE : 'Programm "REISID KOOS TOUCAN"',
        title5LT : 'Programa "KELIONĖ SU TUKANU"',
        title5LV : '',
        
        blockImage1 : 'https://www.tui.ru/getmedia/3de701d3-6c76-4030-bf82-6d970e067908/shutterstock_1070343977-min',
        
        text3RU : 'Детский клуб Мини Тукан в отелях Al Hamra Residence 5 и Al Hamra Village Golf & Beach Resort 4 в Рас-Эль-Хайма, ОАЭ начнет работу в этом году с 20 октября.',
        text3BY : 'Детский клуб Мини Тукан в отелях Al Hamra Residence 5 и Al Hamra Village Golf & Beach Resort 4 в Рас-Эль-Хайма, ОАЭ начнет работу в этом году с 20 октября.',
        text3UA : 'Детский клуб Мини Тукан в отелях Al Hamra Residence 5 и Al Hamra Village Golf & Beach Resort 4 в Рас-Эль-Хайма, ОАЭ начнет работу в этом году с 20 октября.',
        text3EE : 'Sellel aasta, alates 20 oktoobrist, Mini Toucan alustab tööd Al Hamra Residence 5 ja Al Hamra Village Golf & Beach Resort 4 hotellides. AÜE, Ras Al Khaimah',
        text3LT : 'Mini Toucan vaikų klubas Al Hamra Residence 5 ir Al Hamra Village Golf & Beach Resort 4 Ras al Chaima.',
        text3LV : 'Bērnu klubs Mini Toucan Al Hamra Residence 5 un Al Hamra Village Golf & Beach Resort 4 viesnīcas Rāselhaimā',
        
        text4RU : 'Период работы Детского клуба в отелях:',
        text4BY : 'Период работы Детского клуба в отелях:',
        text4UA : 'Период работы Детского клуба в отелях:',
        text4EE : 'Lasteklubide tööaeg hotellides:',
        text4LT : 'Vaikų klubo darbo laikas viešbučiuose:',
        text4LV : 'Bērnu kluba darbības periods viesnīcās:',
        
        text5RU : 'График работы детского клуба, 6 дней в неделю: ',
        text5BY : 'График работы детского клуба, 6 дней в неделю:',
        text5UA : 'График работы детского клуба, 6 дней в неделю:',
        text5EE : 'Lasteklubi ajakava: 6 päeva nädalas:',
        text5LT : 'Vaikų klubo darbo laikas: 6 dienas per savaitę:',
        text5LV : 'Bērnu kluba darba laiks: 6 dienas nedēļā:',
        
        time0 : '',
        time1 : '10.00 -13.00',
        time2 : '15.00 – 18.00',
        time3 : '20.00 – 22.00',
        
        text6RU : 'Garden Resort Calabria (ex. Valtur Garden) 4*: с 1 июня по 30 сентября 2019 года',
        text6BY : 'Garden Resort Calabria (ex. Valtur Garden) 4*: с 1 июня по 30 сентября 2019 года',
        text6UA : 'Garden Resort Calabria (ex. Valtur Garden) 4*: с 1 июня по 30 сентября 2019 года',
        text6EE : 'Garden Resort Calabria (ex. Valtur Garden) 4*: 1 juuni kuni 30 september 2019 a.',
        text6LT : 'Garden Resort Calabria (ex. Valtur Garden) 4*: nuo 2019 m. birželio 1 d. iki rugsėjo 30 d.',
        text6LV : 'Garden Resort Calabria (ex. Valtur Garden) 4*: no 2019.gada 1. jūnija līdz 2019. gada 31 septembrim',
        
        text7RU : 'ОАЭ',
        text7BY : 'ОАЭ',
        text7UA : 'ОАЭ',
        text7EE : 'AÜE',
        text7LT : 'JAE',
        text7LV : 'AAE',
        
        
        
        
        text8RU : '  - с 20 октября',
        text8BY : '  - с 20 октября',
        text8UA : '  - с 20 октября',
        text8EE : '',
        text8LT : '',
        text8LV : '- no 20 oktobra',
        
        text9RU : '  - с 20 октября',
        text9BY : '  - с 20 октября',
        text9UA : '  - с 20 октября',
        text9EE : '  - 20 oktoobrist',
        text9LT : '  - nuo spalio 20 d.',
        text9LV : '  - no 20 oktobra',
        
        text10RU : 'Есть вопросы? Пишите на почту ',
        text10BY : 'Есть вопросы? Пишите на почту ',
        text10UA : 'Есть вопросы? Пишите на почту ',
        text10EE : 'Tekkisid küsimused? Kirjutage e-postile',
        text10LT : 'Turite klausimų? Rašykite',
        text10LV : 'Ir jautājumi? Rakstiet mums uz e-pastu',
        
        mailRU: 'diffproduct@tui.ru',
        mailRULink : 'mailto:diffproduct@tui.ru',
        mailBY: 'diffproduct@tui.ru',
        mailBYLink : 'mailto:diffproduct@tui.ru',
        mailUA: 'diffproduct@tui.ua',
        mailUALink : 'mailto:diffproduct@tui.ua',
        mailEE: 'diffproduct@tui.ru',
        mailEELink : 'mailto:diffproduct@tui.ru',
        mailLT: 'diffproduct@tui.ru',
        mailLTLink : 'mailto:diffproduct@tui.ru',
        mailLV: 'book@tuibaltics.eu',
        mailLVLink : 'mailto:book@tuibaltics.eu',
        
        text11RU : ' и мы вам оперативно ответим. ',
        text11BY : ' и мы вам оперативно ответим. ',
        text11UA : ' и мы вам оперативно ответим. ',
        text11EE : 'anname teile kiirelt vastuse',
        text11LT : 'ir Jums atsakysime',
        text11LV : ' un mēs jums operatīvi atbildēsim',
        
        text12RU : 'Мероприятия, которые войдут в развлекательную программу детского клуба Мини Тукан: ',
        text12BY : 'Мероприятия, которые войдут в развлекательную программу детского клуба Мини Тукан: ',
        text12UA : 'Мероприятия, которые войдут в развлекательную программу детского клуба Мини Тукан: ',
        text12EE : 'Üritused, mis on lasteklubi Mini Toucan meelelahutusprogrammis:',
        text12LT : 'Renginiai, kurie įtraukti į Mini Toucan vaikų klubo pramoginę programą',
        text12LV : 'Pasākumi, kuri tiks iekļauti bērnu kluba Mini Toucan izklaides programmā',
        
        text13RU : ' - с 10 ноября',
        text13BY : ' - с 10 ноября',
        text13UA : ' - с 10 ноября',
        text13EE : ' - alates 10. novembrist',
        text13LT : ' - lapkričio 10 d.',
        text13LV : ' - no 10 Novembrī',
        
        text12SpisokItems : [
            {
              itemRU : 'Квесты для детей',  
              itemBY : 'Квесты для детей',  
              itemUA : 'Квесты для детей',  
              itemEE : 'Seiklusmängud lastele',  
              itemLT : 'Galvosūkiai vaikams',  
              itemLV : 'Kvesti bērniem',  
            },
            {
              itemRU : 'Игры на улице, в бассейне и на море',  
              itemBY : 'Игры на улице, в бассейне и на море',  
              itemUA : 'Игры на улице, в бассейне и на море',  
              itemEE : 'Mängud õues, basseinis ja meres',  
              itemLT : 'Žaidimai lauke, baseine ir jūroje',  
              itemLV : 'Spēles ārā, baseinā un jūrā',  
            },
            {
              itemRU : 'Мастер-классы и творческие активности',  
              itemBY : 'Мастер-классы и творческие активности',  
              itemUA : 'Мастер-классы и творческие активности',  
              itemEE : 'Meistriklaasid ja loomingulised tegevused',  
              itemLT : 'Meistriškumo pamokos ir kūrybiniai užsiėmimai',  
              itemLV : 'Meistarklases un radošās aktivitātes',  
            },
            {
              itemRU : 'Вечером: мини-диско, интерактивные игры, аквагрим',  
              itemBY : 'Вечером: мини-диско, интерактивные игры, аквагрим',  
              itemUA : 'Вечером: мини-диско, интерактивные игры, аквагрим',  
              itemEE : 'Õhtul: minidisko, interaktiivsed mängud, näomaalingud',  
              itemLT : 'Vakare: vaikų diskoteka, interaktyvūs žaidimai, akvagrimas',  
              itemLV : 'Vakarā: mini-diskotēka, interaktīvas spēles, akvagrims',  
            },
            {
              itemRU : 'Мини-диско в бассейне 2 раза в неделю',  
              itemBY : 'Мини-диско в бассейне 2 раза в неделю',  
              itemUA : 'Мини-диско в бассейне 2 раза в неделю',  
              itemEE : 'Minidisko basseinis 2 korda nädalas',  
              itemLT : 'Vaikų diskoteka baseine 2 krtus per savaitę',  
              itemLV : 'Mini-diskotēka baseinā 2 reizes nedēļā',  
            },
            {
              itemRU : 'Семейные дискотеки',  
              itemBY : 'Семейные дискотеки',  
              itemUA : 'Семейные дискотеки',  
              itemEE : 'Kogu pere disko',  
              itemLT : 'Diskoteka visai šeimai',  
              itemLV : 'Ģimenes diskotēkas',  
            },
        ],
        
        button1RU : 'Выбрать отель',
        button1BY : 'Выбрать отель',
        button1UA : 'Выбрать отель',
        button1EE : 'Otsi reisi',
        button1LT : 'Rinktis viešbutį',
        button1LV : 'Izvēlēties viesnīcu',
        
    }
})





//РАЗВЛЕКАТЕЛЬНАЯ ПРОГРАММА

const toucanPartyProgram = new Vue ({
    el: '#toucan-party-program',
    data: {
        titleRU: 'Развлекательная программа',
        menu1RU : 'Для детей 4-12 лет', 
        
        titleBY: 'Развлекательная программа',
        menu1BY : 'Для детей 4-12 лет', 
        
        titleUA: 'Развлекательная программа',
        menu1UA : 'Для детей 4-12 лет', 
        
        titleEE: 'Meelelahutusprogramm',
        menu1EE : '4–12-aastastele lastele', 
        
        titleLT: 'Pramoginė programa',
        menu1LT : 'Vaikams 4-12 metų',
        
        titleLV: 'Izklaides programma',
        menu1LV : 'Berniem no 4 līdz 12 gadiem',
        
        slider1items : [
            {
                background : 'background: url(https://www.tui.ru/getmedia/ec359478-34a7-499d-a958-18e33be583de/T23);background-size: cover;',
                aboutRU: 'Утренняя зарядка / йога /',
                aboutBY: 'Утренняя зарядка / йога /',
                aboutUA: 'Утренняя зарядка / йога /',
                aboutEE: 'Hommikune võimlemine / jooga',
                aboutLT: 'Ryto mankšta / joga',
                aboutLV: 'Rīta vingrinājumi/joga',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/8fa60090-1fc6-49a5-8914-c57c7f089754/T24);background-size: cover;',
                aboutRU: 'Академия плавания',
                aboutBY: 'Академия плавания',
                aboutUA: 'Академия плавания',
                aboutEE: 'Ujumisakadeemis',
                aboutLT: 'Plaukimo akademija',
                aboutLV: 'Peldēšanas akadēmija',
            },
            /*{
                background : 'background: url(https://www.tui.ru/getmedia/9380d2e8-787c-4bad-b236-c0ee3eefa764/T25);background-size: cover;',
                aboutRU: 'Поиск сокровищ',
                aboutBY: 'Поиск сокровищ',
                aboutUA: 'Поиск сокровищ',
                aboutEE: 'Aadrejaht',
                aboutLT: 'Lobių paieška',
                aboutLV: 'Dārgumu meklēšana',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/2c69d3df-23a9-4fa0-8eb6-084d1d09b2ec/T26);background-size: cover;',
                aboutRU: 'Олимпийские игры',
                aboutBY: 'Олимпийские игры',
                aboutUA: 'Олимпийские игры',
                aboutEE: 'Olümpiamängud',
                aboutLT: 'Olimpiniai žaidimai',
                aboutLV: 'Olimpiskās spēles',
            },*/
            {
                background : 'background: url(https://www.tui.ru/getmedia/3bfca7ba-d457-4e0d-b317-71a4bc793794/T27);background-size: cover;',
                aboutRU: 'Настольные игры',
                aboutBY: 'Настольные игры',
                aboutUA: 'Настольные игры',
                aboutEE: 'Lauamängud',
                aboutLT: 'Stalo žaidimai',
                aboutLV: 'Galda spēles',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/33809e6a-d633-486a-b288-421a55a9c446/shutterstock_520075894-min);background-size: cover;',
                aboutRU: 'Квесты',
                aboutBY: 'Квесты',
                aboutUA: 'Квесты',
                aboutEE: 'Seiklusmängud',
                aboutLT: 'Galvosūkiai',
                aboutLV: 'Kvesti',
            },
            /*{
                background : 'background: url(https://www.tui.ru/getmedia/34a179fc-f3dc-4fd8-bd99-432353a0e92e/shutterstock_489646066-min);background-size: cover;',
                aboutRU: 'Научные Эксперименты',
                aboutBY: 'Научные Эксперименты',
                aboutUA: 'Научные Эксперименты',
                aboutEE: 'Teaduslikud eksperimendid',
                aboutLT: 'Moksliniai ekseprimentai',
                aboutLV: 'Zinātniski eksperimenti',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/bdf4472f-3579-4a1f-a7a5-8ddb568a9f8c/T30);background-size: cover;',
                aboutRU: 'Академия Футбола',
                aboutBY: 'Академия Футбола',
                aboutUA: 'Академия Футбола',
                aboutEE: 'Jalgpalliakadeemia',
                aboutLT: 'Futbolo akademija',
                aboutLV: 'Futbola akadēmija',
            },*/
            {
                background : 'background: url(https://www.tui.ru/getmedia/23e8d862-3cb9-460c-adde-e1247aaf6d4c/T32_1);background-size: cover;',
                aboutRU: 'Дискотека Тукан Тусейшен',
                aboutBY: 'Дискотека Тукан Тусейшен',
                aboutUA: 'Дискотека Тукан Тусейшен',
                aboutEE: 'Toucan pidu',
                aboutLT: 'Tukano diskoteka',
                aboutLV: 'Diskotēka Toucan Ballīte',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/0aeb7617-2573-4dcf-9dfd-6a2b531b71af/shutterstock_315127931-min);background-size: cover;',
                aboutRU: 'Киносеанс под открытым небом с Попкорном',
                aboutBY: 'Киносеанс под открытым небом с Попкорном',
                aboutUA: 'Киносеанс под открытым небом с Попкорном',
                aboutEE: 'Vabaõhukino popkorniga',
                aboutLT: 'Kino seansas po atviru dangumi su spragėsiais',
                aboutLV: 'Kinoizrādes ar popkornu zem klajas debess',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/ebfc0f3e-6a2c-48d7-b5d7-a4398923b337/shutterstock_482563132-min);background-size: cover;',
                aboutRU: 'Тематические Дни',
                aboutBY: 'Тематические Дни',
                aboutUA: 'Тематические Дни',
                aboutEE: 'Temaatilised päevad',
                aboutLT: 'Teminės dienos',
                aboutLV: 'Tematiskās Dienas',
            },
        ],
        
    }
})



//ПРОГРАММЫ ДЕТСКИХ КЛУБОВ
const toucanProgram = new Vue ({
    el: '#toucan-programm',
    data: {
        
        programms : [
            
            //1 ПРОГРАММА
            {
                icon : 'display:inline-block;margin-right:10px;height:32px;width:25px;vertical-align:middle;background:url(https://www.tui.ru/getmedia/da0916cf-da69-4c98-9e87-3096a923581e/pdf-icon) no-repeat top left',
                
                titleRU : 'Программа детского клуба Мини Тукан в отелях Al Hamra Residence & Village ',
                titleBY : 'Программа детского клуба Мини Тукан в отелях Al Hamra Residence & Village ',
                titleUA : 'Программа детского клуба Мини Тукан в отелях Al Hamra Residence & Village ',
                titleEE : 'Bērnu klubu Mini Toucan programma AAE Al Hamra Residence & Village',
                titleLT : 'Vaikų klubo „Mini Toucan“ programa viešbučiuose Al Hamra Residence & Village',
                titleLV : 'Bērnu klubu Mini Toucan programma AAE Al Hamra Residence & Village',

                linkRU: 'https://www.tui.ru/getmedia/f6ac0b63-9b0d-49a0-9f84-857bac7bb8b8/progamma-UAE-Toucan-Mini-2020',
                linkBY: 'https://www.tui.ru/getmedia/f6ac0b63-9b0d-49a0-9f84-857bac7bb8b8/progamma-UAE-Toucan-Mini-2020',
                linkUA: 'https://www.tui.ru/getmedia/f6ac0b63-9b0d-49a0-9f84-857bac7bb8b8/progamma-UAE-Toucan-Mini-2020',
                linkEE: 'https://www.tui.ru/getmedia/ef470028-6516-4557-bbe2-f66013cf08c3/EE-programm-UAE-Toucan-Mini-2020',
                linkLT: 'https://www.tui.ru/getmedia/53b1b271-ff63-4ab2-83ff-6615fdabef7c/LT-programm-UAE-Toucan-Mini-2020',
                linkLV: 'https://www.tui.ru/getmedia/e65f3cc5-873b-4d73-916b-1c9263d2b4c1/LV-program-UAE-Toucan-Mini-2020',
            },
            
            //2 ПРОГРАММА
            {
                icon : 'display:inline-block;margin-right:10px;height:32px;width:25px;vertical-align:middle;background:url(https://www.tui.ru/getmedia/da0916cf-da69-4c98-9e87-3096a923581e/pdf-icon) no-repeat top left',
                
                titleRU : 'Программа детского клуба Мини Тукан в отеле Blue Diamond AlSalam Resort 5*',
                titleBY : 'Программа детского клуба Мини Тукан в отеле Blue Diamond AlSalam Resort 5*',
                titleUA : 'Программа детского клуба Мини Тукан в отеле Blue Diamond AlSalam Resort 5*',
                titleEE : 'Bērnu kluba Mini Toucan programma viesnīcā Blue Diamond AlSalam Resort 5*',
                titleLT : 'Vaikų klubo „Mini Toucan“ programa viešbutyje Blue Diamond AlSalam Resort 5*',
                titleLV : 'Bērnu klubu Mini Toucan programma AAE Blue Diamond AlSalam Resort 5*',

                linkRU: 'https://www.tui.ru/getmedia/db80ed7a-4d6b-4658-9e42-6b55f4f166a4/RU-programm-UAE-Toucan-Mini-2020-fuja',
                linkBY: 'https://www.tui.ru/getmedia/db80ed7a-4d6b-4658-9e42-6b55f4f166a4/RU-programm-UAE-Toucan-Mini-2020-fuja',
                linkUA: 'https://www.tui.ru/getmedia/db80ed7a-4d6b-4658-9e42-6b55f4f166a4/RU-programm-UAE-Toucan-Mini-2020-fuja',
                linkEE: 'https://www.tui.ru/getmedia/08bfdb25-294e-4c3f-bd44-620451abe4a2/EE-programm-UAE-Toucan-Mini-2020-blue',
                linkLT: 'https://www.tui.ru/getmedia/9b973f93-e4c5-4909-96bb-88c1e4135bfa/LT-programm-UAE-Toucan-Mini-2020-blue',
                linkLV: 'https://www.tui.ru/getmedia/775d1f3b-0303-41f8-9682-c93df0814eed/LV-programma-UAE-Toucan-Mini-2020-blue',
            },
            
            //3 ПРОГРАММА
            /*{
                icon : 'display:inline-block;margin-right:10px;height:32px;width:25px;vertical-align:middle;background:url(https://www.tui.ru/getmedia/da0916cf-da69-4c98-9e87-3096a923581e/pdf-icon) no-repeat top left',
                
                titleRU : 'Памятка МИНИ ТУКАН в ОАЭ',
                titleBY : 'Памятка МИНИ ТУКАН в ОАЭ',
                titleUA : 'Памятка МИНИ ТУКАН в ОАЭ',
                titleEE : 'Memo MINI TUKAN AÜE',
                titleLT : 'Atmintinė MINI TUKAN JAE',
                titleLV : 'Memo MINI TUKAN AAE',
                
                linkRU: 'https://www.tui.ru/getmedia/b8fc9335-5a5d-4cca-ab16-3e2297204d88/UA-shpargalka-OAE-Toucan-05-11-2019',
                linkBY: 'https://www.tui.ru/getmedia/b8fc9335-5a5d-4cca-ab16-3e2297204d88/UA-shpargalka-OAE-Toucan-05-11-2019',
                linkUA: 'https://www.tui.ru/getmedia/b8fc9335-5a5d-4cca-ab16-3e2297204d88/UA-shpargalka-OAE-Toucan-05-11-2019',
                linkEE: 'https://www.tui.ru/getmedia/b8fc9335-5a5d-4cca-ab16-3e2297204d88/UA-shpargalka-OAE-Toucan-05-11-2019',
                linkLT: 'https://www.tui.ru/getmedia/b8fc9335-5a5d-4cca-ab16-3e2297204d88/UA-shpargalka-OAE-Toucan-05-11-2019',
                linkLV: 'https://www.tui.ru/getmedia/b8fc9335-5a5d-4cca-ab16-3e2297204d88/UA-shpargalka-OAE-Toucan-05-11-2019v',
            },*/
            
        ]
    }
})

const toucanFishka = new Vue ({
    el: '#fishka',
    data: {
        logoLink: 'https://www.tui.ru/getmedia/eda1b56f-2532-46eb-8626-65425d799edf/TC-logo-mini-vertical',
        titleRU: 'Детские клубы МИНИ ТУКАН',
        titleBY: 'Детские клубы МИНИ ТУКАН',
        titleUA: 'Детские клубы МИНИ ТУКАН',
        titleEE: '',
        titleLT: 'Vaikų klubai MINI TUKAN',
        titleLV: 'Bērnu klubi MINI TUKAN',
    }
})

//ТУКАН СПОРТИВНЫЕ РАЗВЛЕЧЕНИЯ
const toucanEntProgramm = new Vue ({
    el: '#toucan-ent-programm',
    data: {
        titleRU : 'Расписание спортивных занятий и развлечений',
        titleBY : 'Расписание спортивных занятий и развлечений',
        titleUA : 'Расписание спортивных занятий и развлечений',
        titleEE : 'Sporditegevuste ja meelelahutuste ajakava',
        titleLT : 'Sportinės veiklos ir pramogų tvarkaraštis',
        titleLV : 'Izklaides un sporta nodarbību grafiks',
        
        
        //MENU ITEM 1
        menu1RU : 'Все',
        menu1BY : 'Все',
        menu1UA : 'Все',
        menu1EE : 'Kõik',
        menu1LT : 'Visi',
        menu1LV : 'Visi',
        
        //MENU ITEM 2
        menu2RU : 'Спорт и активности',
        menu2BY : 'Спорт и активности',
        menu2UA : 'Спорт и активности',
        menu2EE : 'Sport ja aktiivsed tegevused',
        menu2LT : 'Sportas ir užsiėmimai',
        menu2LV : 'Sports un aktivitātes',
        
        //MENU ITEM 3
        menu3RU : 'Игровые активности',
        menu3BY : 'Игровые активности',
        menu3UA : 'Игровые активности',
        menu3EE : 'Mängud',
        menu3LT : 'Žaidimų veikla',
        menu3LV : 'Spēļu aktivitātes',
        
        //MENU ITEM 4
        menu4RU : 'Творческие активности',
        menu4BY : 'Творческие активности',
        menu4UA : 'Творческие активности',
        menu4EE : 'Loovtegevus',
        menu4LT : 'Kūrybinė veikla',
        menu4LV : 'Radošās aktivitātes',
        
        //MENU ITEM 5
        menu5RU : 'Вечерняя программа',
        menu5BY : 'Вечерняя программа',
        menu5UA : 'Вечерняя программа',
        menu5EE : 'Õhtune programm',
        menu5LT : 'Vakaro programa',
        menu5LV : 'Vakara programma',
        
        //SLIDER 2
        slider2Slides : [
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/0269798c-1f79-4a5f-9c12-83ab8b925cb5/b_1-1)',
                nameRU : 'Детская Йога, степ и танцевальная аэробика.',
                nameBY : 'Детская Йога, степ и танцевальная аэробика.',
                nameUA : 'Детская Йога, степ и танцевальная аэробика.',
                nameEE : 'Lastejooga, step ja tantsuaeroobika.',
                nameLT : 'Vaikų joga, žingsnių ir šokių aerobika.',
                nameLV : 'Bērnu Joga, steps un deju aerobika',
                
               
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/5ccd74da-fab0-42f1-883c-5634fffc6879/b_1-2)',
                nameRU : 'Танцевальная академия',
                nameBY : 'Танцевальная академия',
                nameUA : 'Танцевальная академия',
                nameEE : 'Tantsuakadeemia',
                nameLT : 'Šokių akademija',
                nameLV : 'Deju akadēmija',
                
               
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/5435a85d-ae41-4cb4-bbee-d6dd0e818123/b_1-3)',
                nameRU : 'Спортивные состязания',
                nameBY : 'Спортивные состязания',
                nameUA : 'Спортивные состязания',
                nameEE : 'Spordivõistlused',
                nameLT : 'Sportas',
                nameLV : 'Sporta sacensības',
                
                
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/41681cb7-bf25-4fdb-945c-06031be67beb/b_1-4)',
                nameRU : 'Олимпийские игры',
                nameBY : 'Олимпийские игры',
                nameUA : 'Олимпийские игры',
                nameEE : 'Olümpiamängud',
                nameLT : 'Olimpinės žaidynės',
                nameLV : 'Olimpiskās spēles',
                
                
            },
        ],
        
        //SLIDER 3
        slider3Slides : [
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/93c27b48-cba9-44d3-8264-c0f41bfb8ca1/b_1-5)',
                nameRU : 'Тематические дни',
                nameBY : 'Тематические дни',
                nameUA : 'Тематические дни',
                nameEE : 'Temaatilised päevad',
                nameLT : 'Teminės dienos',
                nameLV : 'Tematiskās dienas',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/d3257527-5606-4b02-8de1-949a813d8180/b_1-6)',
                nameRU : 'Игры-квесты',
                nameBY : 'Игры-квесты',
                nameUA : 'Игры-квесты',
                nameEE : 'Seiklusmängud',
                nameLT : 'Quest žaidimai',
                nameLV : 'Spēles-kvesti',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/4187a64e-3bcc-4a0a-bd6e-0ae214a2b55c/b_1-7)',
                nameRU : 'Творческая мастерская Тукана',
                nameBY : 'Творческая мастерская Тукана',
                nameUA : 'Творческая мастерская Тукана',
                nameEE : 'Toucan loominguline töötuba',
                nameLT : '„Toucan“ kūrybinės dirbtuvės',
                nameLV : 'Toucan radoša darbnīca',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/a610c95a-6556-442f-ad1b-ce9897f49229/b_1-8)',
                nameRU : 'Игры в бассейне',
                nameBY : 'Игры в бассейне',
                nameUA : 'Игры в бассейне',
                nameEE : 'Mängud basseinis',
                nameLT : 'Baseino žaidimai',
                nameLV : 'Spēles baseinā',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/503f3677-def2-472c-bc5a-5703267e989b/b_1-9)',
                nameRU : 'Сюжетно-ролевые игры',
                nameBY : 'Сюжетно-ролевые игры',
                nameUA : 'Сюжетно-ролевые игры',
                nameEE : 'Rollimängud',
                nameLT : 'Vaidmenų žaidimai',
                nameLV : 'Lomu-sižeta spēles',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/6d9adec7-92e4-41e2-bb6a-dd9c4bccbdb2/b_1-10)',
                nameRU : 'Аквагрим',
                nameBY : 'Аквагрим',
                nameUA : 'Аквагрим',
                nameEE : 'Näomaalingud',
                nameLT : 'Veido tapyba',
                nameLV : 'Akvagrims',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/5ea58479-6dd6-4e1e-b6e4-61286e8b482f/b_1-11)',
                nameRU : 'Тукан коктейль',
                nameBY : 'Тукан коктейль',
                nameUA : 'Тукан коктейль',
                nameEE : 'Toucan kokteil',
                nameLT : '„Toucan“ kokteilis',
                nameLV : 'Toucan kokteilis',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/19b71da6-c781-4712-b09d-f85445c67861/tab2-4)',
                nameRU : 'Научные эксперименты',
                nameBY : 'Научные эксперименты',
                nameUA : 'Научные эксперименты',
                nameEE : 'Teaduslikud katsed',
                nameLT : 'Moksliniai eksperimentai',
                nameLV : 'Zinātniski eksperimenti',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/276b4c71-b9d2-4c30-b098-602017c813da/b_1-12)',
                nameRU : 'Мыльные пузыри',
                nameBY : 'Мыльные пузыри',
                nameUA : 'Мыльные пузыри',
                nameEE : 'Seebimullid',
                nameLT : 'Muilo burbuliukai',
                nameLV : 'Ziepju burbuļi',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/28333cd6-daea-4e8a-ab2f-37e1d3cbb009/b_1-13)',
                nameRU : 'День рождения Тукана',
                nameBY : 'День рождения Тукана',
                nameUA : 'День рождения Тукана',
                nameEE : 'Toucan sünnipäev',
                nameLT : '„Toucan“ gimtadienis',
                nameLV : 'Toucan dzimšanas diena',
            },
        ],
        
        //SLIDER 4
        slider4Slides : [
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/4187a64e-3bcc-4a0a-bd6e-0ae214a2b55c/b_1-7)',
                nameRU : 'Творческая мастерская Тукана',
                nameBY : 'Творческая мастерская Тукана',
                nameUA : 'Творческая мастерская Тукана',
                nameEE : 'Toucan loominguline töötuba',
                nameLT : '„Toucan“ kūrybinės dirbtuvės',
                nameLV : 'Toucan radoša darbnīca',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/459613e1-4b25-40fe-a50c-1a16bbd79bea/b_1-14)',
                nameRU : 'Воздушный змей',
                nameBY : 'Воздушный змей',
                nameUA : 'Воздушный змей',
                nameEE : 'Tuulelohe meisterdamine',
                nameLT : 'Aitvaras skraidė',
                nameLV : 'Gaisa pūķis',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/67c7c714-0727-4910-ac4f-12522756c8a6/b_1-15)',
                nameRU : 'Эко творчество',
                nameBY : 'Эко творчество',
                nameUA : 'Эко творчество',
                nameEE : 'Eco töötoad',
                nameLT : 'Ekologinė kūryba',
                nameLV : 'Eko radošums',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/8f756b7a-1bee-484c-b2ff-1eb21692fb98/b_1-16)',
                nameRU : 'Рисование на камнях',
                nameBY : 'Рисование на камнях',
                nameUA : 'Рисование на камнях',
                nameEE : 'Maalimine kividele',
                nameLT : 'Piešimas ant akmenų',
                nameLV : 'Zīmējam uz akmeņiem',
            },
        ],
        
        //SLIDER 5
        slider5Slides : [
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/2eadb0bb-432d-4cd3-9a4a-4f4944f3300a/b_1-17)',
                nameRU : 'Мини диско',
                nameBY : 'Мини диско',
                nameUA : 'Мини диско',
                nameEE : 'Minidisko',
                nameLT : 'Mini diskoteka',
                nameLV : 'Mini-diskotēka',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/b9437385-3913-4bf4-b10b-531c1d31d7b6/b_1-18)',
                nameRU : '"Tукан Тусейшн"',
                nameBY : '"Tукан Тусейшн"',
                nameUA : '"Tукан Тусейшн"',
                nameEE : 'Toucan pidu',
                nameLT : '„Toucan Tuxedo“',
                nameLV : 'Toucan Ballīte',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/876e8f93-ed28-46fd-8322-88ae673192ab/no-img);background-size:cover;background-position: center;',
                nameRU : 'Тематические фестивали',
                nameBY : 'Тематические фестивали',
                nameUA : 'Тематические фестивали',
                nameEE : 'Temaatilised festivalid',
                nameLT : 'Teminiai festivaliai',
                nameLV : 'Tematiskie festivāli',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/03ca4ee6-0ac2-4cde-a2da-b69a5339e289/b_1-19)',
                nameRU : 'Кинопоказы на открытом воздухе',
                nameBY : 'Кинопоказы на открытом воздухе',
                nameUA : 'Кинопоказы на открытом воздухе',
                nameEE : 'Vabaõhukino',
                nameLT : 'Lauko ekranizacijos',
                nameLV : 'Kinoizrādes zem klajas debess',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/5f5c2df6-09e4-4f0b-b98c-875c7c669790/b_1-20)',
                nameRU : 'Тукан "Голос"',
                nameBY : 'Тукан "Голос"',
                nameUA : 'Тукан "Голос"',
                nameEE : 'Toucan "Voice"',
                nameLT : 'Toucan „Voice“',
                nameLV : 'Toucan "Golos"',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/2e233e2b-c533-47eb-88d6-58f692729240/b_1-21)',
                nameRU : 'Латинская вечеринка',
                nameBY : 'Латинская вечеринка',
                nameUA : 'Латинская вечеринка',
                nameEE : 'Ladina pidu',
                nameLT : 'Lotynų šalių partija',
                nameLV : 'Latīņu ballīte',
            },
        ],
    }
})



//FOOTER
const toucanFooter = new Vue ({
    el: '#toucan-footer',
    data: {
        title1RU : 'Сайты о концепциях',
        title1BY : 'Сайты о концепциях',
        title1UA : 'Сайты о концепциях',
        title1EE : 'Сайты о концепциях',
        title1LT : 'Apie koncepcijas',
        title1LV : 'Vietnes par koncepcijām',
        
        linkTitle1RU : 'Все концепции ',
        linkTitle2RU : 'Сайт B2b',
        linkTitle3RU : 'Сайт для клиентов',
        
        linkTitle1BY : 'Все концепции ',
        linkTitle2BY : 'Сайт B2b',
        linkTitle3BY : 'Сайт для клиентов',
        
        linkTitle1UA : 'Все концепции ',
        linkTitle2UA : 'Сайт B2b',
        linkTitle3UA : 'Сайт для клиентов',
        
        linkTitle1EE : 'Kõik kontseptsioonid',
        linkTitle2EE : 'B2b veebileht',
        linkTitle3EE : 'Klientidele',
        
        linkTitle1LT : 'Visos koncepcijos',
        linkTitle2LT : 'B2B svetainė',
        linkTitle3LT : 'Svetainė turistams',
        
        linkTitle1LV : 'Visas koncepcijas',
        linkTitle2LV : 'B2b vietne',
        linkTitle3LV : 'Klientu vietne',
        
        link1 : '/concepts/home/',
        link2RU : '//agent.tui.ru/',
        link2BY : '//agent.tui.by/',
        link2UA : '//agent.tui.ua/',
        link2EE : '//b2b.tuibaltics.eu/',
        link2LT : '//b2b.tuibaltics.eu/',
        link2LV : '//b2b.tuibaltics.eu/',
      
        link3RU : '//www.tui.ru/',
        link3BY : '//www.tui.by/',
        link3UA : '//www.tui.ua/',
        link3EE : '//www.tui.ee/',
        link3LT : '//www.tui.lt/',
        link3LV : '//www.tui.lv/',
        
        title2RU : 'Контакты',
        title2BY : 'Контакты',
        title2UA : 'Контакты',
        title2EE : 'Kontaktinformācija',
        title2LT : 'Kontaktai',
        title2LV : 'Kontakti',
        
        telRU : '8 (495) 104-34-50',
        telLinkRU : 'tel:84951043450',
        mailRU : 'diffproduct@tui.ru',
        mailLinkRU : 'mailto:diffproduct@tui.ru',
        
        telBY : '+375 17 316 90 74',
        telLinkBY : 'tel:+375173169074',
        mailBY : 'diffproduct@tui.ru',
        mailLinkBY : 'mailto:diffproduct@tui.ru',
        
        telUA : '+380 044 401 08 08',
        telLinkUA : 'tel:+3800444010808',
        mailUA : 'diffproduct@tui.ua',
        mailLinkUA : 'mailto:diffproduct@tui.ua',
        
        telEE : '+372 3350005',
        telLinkEE : 'tel:+3723350005',
        mailEE : 'reservations@tuibaltics.eu',
        mailLinkEE : 'mailto:reservations@tuibaltics.eu',
        
        telLT : '+370 5 240 88 89',
        telLinkLT : 'tel:+37052408889',
        mailLT : 'rezervacijos@tuibaltics.eu',
        mailLinkLT : 'mailto:rezervacijos@tuibaltics.eu',
        
        telLV : '+371 63007772',
        telLinkLV : 'tel:+37163007772',
        mailLV : 'book@tuibaltics.eu',
        mailLinkLV : 'mailto:book@tuibaltics.eu',
        
        title3RU : 'Toucan в социальных сетях',
        title3BY : 'Toucan в социальных сетях',
        title3UA : 'Toucan в социальных сетях',
        title3EE : 'Toucan sotsiaalmeedias',
        title3LT : 'Toucan socialiniuose tinkluose',
        title3LV : 'Toucan sociālajos tīklos',
        
        instLink : '//www.instagram.com/tui_toucan',
        instLogo : 'https://www.tui.ru/getmedia/2f4194da-6feb-4717-a9b0-8c58d9f77851/logo-instagram-blue',
        
    }
})