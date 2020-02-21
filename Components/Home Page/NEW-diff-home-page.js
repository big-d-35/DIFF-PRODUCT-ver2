const homePageConcepts = new Vue({
    el: '#home-page-concepts',
    
    data : {
        
        titleRU : 'KОНЦЕПЦИИ ОТДЫХА,<br>СОЗДАННЫЕ TUI',
        titleBY : 'KОНЦЕПЦИИ ОТДЫХА,<br>СОЗДАННЫЕ TUI',
        titleUA : 'KОНЦЕПЦИИ ОТДЫХА,<br>СОЗДАННЫЕ TUI',
        titleEE : 'PUHKUSE KONTSEPTSIOONID,<br>TUI',
        titleLT : 'POILSIO KONCEPCIJOS,<br>SUKURTOS TUI',
        titleLV : 'TUI RADĪTAS,<br>ATPŪTAS KONCEPCIJAS',
        sloganRU : 'Мы знаем, какой отдых вам нужен,<br>потому что вы нам сами об этом рассказали!',
        sloganBY : 'Мы знаем, какой отдых вам нужен,<br>потому что вы нам сами об этом рассказали!',
        sloganUA : 'Мы знаем, какой отдых вам нужен,<br>потому что вы нам сами об этом рассказали!',
        sloganEE : 'Teame, millist puhkust te vajate,<br>sest olete ise meile sellest rääkinud!',
        sloganLT : 'Mes žinome, kokių reikia atostogų,<br>nes Jūs mums apie tai pasakėte!',
        sloganLV : 'Mēs zinām, kāda veida atpūta Jums ir vajadzīga!<br>Šos konceptus rūpīgi izstrādājām balstoties uz mūsu klientu ieteikumiem un vēlmēm.',
        presentationLinkRU: 'https://www.tui.ru/getmedia/9d443f85-cd7f-49c7-9463-0a6800db1190/All-concept-for-agency_Final',
        presentationButtonRU : 'Презентация Дифф продукта',
        presentationButtonBY : 'Презентация Дифф продукта',
        presentationButtonUA : 'Презентация Дифф продукта',
        presentationButtonEE : 'Vali konsept',
        presentationButtonLT : 'Prezentacija',
        presentationButtonLV : 'Diferencēta produkta prezentācija',
        detailRU : '* Концепции отдыха TUI - это отдых в новом формате,<br>где учтены интересы всех поколений.',
        detailBY : '* Концепции отдыха TUI - это отдых в новом формате,<br>где учтены интересы всех поколений.',
        detailUA : '* Концепции отдыха TUI - это отдых в новом формате,<br>где учтены интересы всех поколений.',
        detailEE : '* TUI puhkuse konseptsioon - uue formaadi puhkus,<br>kus on võetud arvesse igas vanuses puhkajate huvid.',
        detailLT : '* TUI poilsio koncepcijos - tai naujas poilsio formatas,<br>kur atsižvelgiama į visų kartų interesus.',
        detailLV : '* TUI atpūtas koncepcijas - atpūta jaunā formātā,<br>kas ņem vērā visu paaudžu intereses.',
        conceptsAboutRU : '<strong>Концепции отдыха TUI</strong> - это новый формат отдыха, где учтены интересы всех поколений и современные тренды. 100 000 человек уже сделали свой выбор в пользу отдыха в наших отелях.<br><br>Время и вам сделать выбор! Выберите страну и забронируйте формат отдыха, который подходит именно вам!',
        conceptsAboutBY : '<strong>Концепции отдыха TUI</strong> - это новый формат отдыха, где учтены интересы всех поколений и современные тренды. 100 000 человек уже сделали свой выбор в пользу отдыха в наших отелях.<br><br>Время и вам сделать выбор! Выберите страну и забронируйте формат отдыха, который подходит именно вам!',
        conceptsAboutUA : '<strong>Концепции отдыха TUI</strong> - это новый формат отдыха, где учтены интересы всех поколений и современные тренды. 100 000 человек уже сделали свой выбор в пользу отдыха в наших отелях.<br><br>Время и вам сделать выбор! Выберите страну и забронируйте формат отдыха, который подходит именно вам!',
        conceptsAboutEE : '<strong>TUI puhkuse konseptsioonid</strong> - uue formaadi puhkus, kus on võetud arvesse igas vanuses puhkajate huvid. Juba 42 600 inimest on valinud puhkuse meie hotellides.<br><br>Nüüd on teilgi aeg teha valik! Valige sihtkoht ja broneerige just teile sobiva puhkuse kontseptsiooni!',
        conceptsAboutLT : '<strong>TUI poilsio koncepcijos</strong> - tai naujas poilsio formatas, kur atsižvelgiama į visų kartų interesus ir šiuolaikines tendencijas. 100 000 turistų jau pasirinko ir išbandė tokio tipo poilsį mūsų viešbučiuose.<br><br>Laikas rinktis! Išsirinkite šalį ir užsisakykite Jums tinkamiausią atostogų tipą!',
        conceptsAboutLV : '<strong>TUI atpūtas koncepcijas</strong> - ir jauns atpūtas formāts, kura izstrādē ņemtas vērā dažādu paaudžu intereses, kā arī modernākās tūrisma nozares tendences. Jau vairāk kā 100 000 cilvēku ir izdarījuši izvēli par labu brīvdienām mūsu koncepta viesnīcās.<br><br>Uz to aicinām arī Jūs! Atliek vien izvēlēties valsti, Jums atbilstošāko atpūtas konceptu un atvaļinājums var sākties!',
        buttonPageRU : 'Подробнее',        
        buttonPageBY : 'Подробнее',        
        buttonPageUA : 'Подробнее',        
        buttonPageEE : 'Uuri lähemalt',        
        buttonPageLT : 'Plačiau',        
        buttonPageLV : 'Sīkāk',        
        concepts : [
            //SMART
            {
                videoYoutube: 'video4',
                logo : 'https://www.tui.ru/getmedia/7eea7272-a23a-4d66-9df7-4eb7463c2a55/Smart-Logo-80px',
                cssTitle: 'text-transform:uppercase;margin-bottom:20px',
                titleRU : 'КОНЦЕПЦИЯ ОТДЫХА SMART',
                titleBY : 'КОНЦЕПЦИЯ ОТДЫХА SMART',
                titleUA : 'КОНЦЕПЦИЯ ОТДЫХА SMART',
                titleEE : 'SMART puhkuse kontseptsioon',
                titleLT : 'Poilsio koncepcija SMART',
                titleLV : 'BRĪVDIENU KONCEPTS SMART',
                sloganRU : 'Умный подход к отдыху',
                sloganBY : 'Умный подход к отдыху',
                sloganUA : 'Умный подход к отдыху',
                sloganEE : 'Nutikas lähenemine puhkusele',
                sloganLT : 'Protingas požiūris į poilsį',
                sloganLV : 'Gudra pieeja atpūtai',
                textRU: 'SMART - это концепция для каждого: для семей и для молодежи, которых объединяет одна цель - насладиться качественным отдыхом за разумные деньги.<br><br>В первую очередь, мы предлагаем сервис на звезду выше: анимация, детский клуб, питание и напитки, Wi-Fi, узнаваемый стиль в дизайне и качество по доступной цене.<br><br>Кроме того, SMART заботится об окружающей среде, что означает экологически дружелюбную концепцию. Мы минимизируем использование пластиковых стаканчиков и отказываемся от трубочек, разумно подходим к трате воды и энергии, устанавливаем мусорные урны для разделения отходов.',
                textBY: 'SMART - это концепция для каждого: для семей и для молодежи, которых объединяет одна цель - насладиться качественным отдыхом за разумные деньги.<br><br>В первую очередь, мы предлагаем сервис на звезду выше: анимация, детский клуб, питание и напитки, Wi-Fi, узнаваемый стиль в дизайне и качество по доступной цене.<br><br>Кроме того, SMART заботится об окружающей среде, что означает экологически дружелюбную концепцию. Мы минимизируем использование пластиковых стаканчиков и отказываемся от трубочек, разумно подходим к трате воды и энергии, устанавливаем мусорные урны для разделения отходов.',
                textUA: 'SMART - это концепция для каждого: для семей и для молодежи, которых объединяет одна цель - насладиться качественным отдыхом за разумные деньги.<br><br>В первую очередь, мы предлагаем сервис на звезду выше: анимация, детский клуб, питание и напитки, Wi-Fi, узнаваемый стиль в дизайне и качество по доступной цене.<br><br>Кроме того, SMART заботится об окружающей среде, что означает экологически дружелюбную концепцию. Мы минимизируем использование пластиковых стаканчиков и отказываемся от трубочек, разумно подходим к трате воды и энергии, устанавливаем мусорные урны для разделения отходов.',
                textEE: 'Me korraldame taskukohase puhkuse revolutsiooni turul! SMART on kontseptsioon kõigile: peredele ja noortele, kellel on üks eesmärk ja üks soov - nautida kvaliteetset puhkust mõistliku hinnaga.<br><br>Esiteks pakume ühe tärni võrra paremat teenust: animatsiooni, lasteklubi, sööke ja jooke, tasuta WiFi-t, äratuntavat disaini ja kvaliteeti taskukohase hinnaga. SMART kingib naudingut kõigile: naturaalne kohv ja kohvik-pagariäri, lasteklubi ning tasuta jäätis.<br><br>Lisaks sellele hoolitseb SMART keskkonna eest ning on välja töötanud keskkonnasõbralikku kontseptsiooni. Ei mingeid plasttopse ja joogikõrsi, vee ja energia kasutamise mõistlik lähenemine, jäätmete sorteerimine.',
                textLT: 'Revoliucija ekonominio poilsio rinkoje! SMART – tai koncepcija kiekvienam: tiek šeimoms, tiek jaunimui, kurie turi vieną tikslą ir norą - mėgautis kokybiškomis atostogomis už priimtiną kainą.<br><br>Visų pirma, mes siūlome paslaugą žvaigždute aukščiau: animaciją, vaikų klubą, maistą ir gėrimus, nemokamą Wi-Fi, atpažįstamą dizaino stilių ir kokybę už prieinamą kainą. SMART teikia malonumą kiekvienam: natūrali kava ir kepyklėlė, vaikų klubas ir nemokami ledai.<br><br>Be to, SMART rūpinasi aplinka, o tai reiškia ekologišką idėją. Jokių plastikinių puodelių ir šiaudelių, protingas būdas nešvaistyti vandens ir energijos, šiukšliadėžės atliekų rūšiavimui.',
                textLV: 'SMART koncepts ir piemērots ikvienam ceļotājam, kurš vēlas izbaudīt kvalitatīvas brīvdienas par saprātīgu cenu.<br><br>Pieczvaigžņu serviss četrzvaigžņu viesnīcā – plaša pasākumu programma, atraktīva animācija, nodarbības bērniem, ēdieni, dzērieni, bezmaksas Wi-Fi, patīkams, mūsdienīgs dizains un pāri visam – izcila kvalitāte par pieņemamu cenu.<br><br>SMART koncepts ir arī ļoti ekoloģisks – samazināta plastmasas trauku un salmiņu izmantošana līdz minimumam, ūdens un elektroenerģijas lietojums SMART viesnīcās ir pārdomāts un videi draudzīgs, viesnīcas teritorijā ir uzstādītas tvertnes atkritumu šķirošanai.',
                pageLink : '/concepts/smart/',
                videoClass : 'video-fs picture4',
                videoId : '',
                videoPlay : '',
                videoPlayStyle : 'z-index: -10;',
                hotelsTitleRU : 'Отдых в отелях SMART', 
                countries: [
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        countryNameRU : 'Турция',
                        countryNameBY : 'Турция',
                        countryNameUA : 'Турция',
                        countryNameEE : 'Türgi',
                        countryNameLT : 'Turkija',
                        countryNameLV : 'Turcija',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'SMART Club Marakesh Beach Hotel 4*',
                                linkAgent: '/Tours/Europe/Turkey/Kemer/Beldibi/Smart-Club-Marakesh-Beach-Hotel',
                                linkClient: '/hotel/europe-turkey-kemer-beldibi-smart__club__marakesh__beach__hotel/',
                            },
                            
                            {
                                showRU : false,
                                showBY : false,
                                showUA : false,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'SMART Euphoria Bella Mare Hotel 4*',
                                linkAgent: '/Tours/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel',
                                linkClient: '/hotel/europe-turkey-alanya-mahmutlar-smart__euphoria__bella__mare__hotel/',
                            },
                            
                            {
                                showRU : false,
                                showBY : false,
                                showUA : false,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'SMART Limoncello Konakli Beach Hotel 5*',
                                linkAgent: '/Tours/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel-(ex-Club-Konakli)',
                                linkClient: '/hotel/europe-turkey-alanya-konakli-smart__limoncello__konakli__beach__hotel/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'SMART Club Hotel Mirabell 4*',
                                linkAgent: '/Tours/Europe/Turkey/Alanya/Konakli/Club-Hotel-Mirabell',
                                linkClient: '/hotel/europe-turkey-alanya-konakli-smart__club__hotel__mirabell/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'SMART Lara Star 5*',
                                linkAgent: '/Tours/Europe/Turkey/Antalya/Lara/Lara-Family-Star-Iron-Ambassador',
                                linkClient: '/hotel/europe-turkey-antalya-lara-smart__lara__family/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'SMART Asdem Beach 5*',
                                linkAgent: '/Tours/Europe/Turkey/Kemer/Beldibi/SMART-Asdem-Beach',
                                linkClient: '/hotel/europe-turkey-kemer-beldibi-smart__asdem__beach/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'SMART Serra Park Hotel 4*',
                                linkAgent: '/Tours/Europe/Turkey/side/Sorgun/smart-serra-park-hotel',
                                linkClient: '/hotel/europe-turkey-side-sorgun-smart__serra__park__hotel/',
                            },
                            
                        ],
                    },
                ],
            },
            
            //FUN SUN
            {
                videoYoutube: 'video',
                logo : 'https://www.tui.ru/getmedia/d154b64a-2315-40e0-94f5-53137a734367/logo-FS',
                cssTitle: 'text-transform:uppercase;margin-bottom:20px',
                titleRU : 'Концепция семейного отдыха FUN&SUN',
                titleBY : 'Концепция семейного отдыха FUN&SUN',
                titleUA : 'Концепция семейного отдыха FUN&SUN',
                titleEE : 'FUN&SUN perepuhkuse konseptsioon',
                titleLT : 'Šeimų poilsio koncepcija FUN&SUN',
                titleLV : 'ĢIMENES BRĪVDIENU KONCEPTS FUN&SUN',
                sloganRU : 'Семейный отдых, продуманный в деталях',
                sloganBY : 'Семейный отдых, продуманный в деталях',
                sloganUA : 'Семейный отдых, продуманный в деталях',
                sloganEE : 'Detailideni läbimõeldud perepuhkus',
                sloganLT : 'Šeimos poilsis, apgalvotas iki smulkmenų',
                sloganLV : 'Līdz sīkākajām detaļām pārdomātas ģimenes brīvdienas',
                textRU: 'Во время отдыха для гостя FUN&SUN отель становится своеобразным миром в миниатюре, где номер - это квартира, Детский Клуб Тукан - детский сад и школа, море и разнообразные бассейны становятся самой приятной ванной на свете, главный ресторан - кухней мечты с бесконечным питанием, а рестораны a la carte - рестораны для выхода в "свет" всей семьей в выходной.<br><br>Мы долго готовились к вашему приезду. Мы выбрали 20 прекрасных отелей, навели в них порядок и чистоту, разработали специальное меню, подготовили развлекательную и спортивную программы и, конечно же, обучили каждого сотрудника.',
                textBY: 'Во время отдыха для гостя FUN&SUN отель становится своеобразным миром в миниатюре, где номер - это квартира, Детский Клуб Тукан - детский сад и школа, море и разнообразные бассейны становятся самой приятной ванной на свете, главный ресторан - кухней мечты с бесконечным питанием, а рестораны a la carte - рестораны для выхода в "свет" всей семьей в выходной.<br><br>Мы долго готовились к вашему приезду. Мы выбрали 20 прекрасных отелей, навели в них порядок и чистоту, разработали специальное меню, подготовили развлекательную и спортивную программы и, конечно же, обучили каждого сотрудника.',
                textUA: 'Во время отдыха для гостя FUN&SUN отель становится своеобразным миром в миниатюре, где номер - это квартира, Детский Клуб Тукан - детский сад и школа, море и разнообразные бассейны становятся самой приятной ванной на свете, главный ресторан - кухней мечты с бесконечным питанием, а рестораны a la carte - рестораны для выхода в "свет" всей семьей в выходной.<br><br>Мы долго готовились к вашему приезду. Мы выбрали 20 прекрасных отелей, навели в них порядок и чистоту, разработали специальное меню, подготовили развлекательную и спортивную программы и, конечно же, обучили каждого сотрудника.',
                textEE: 'Puhkuse ajal FUN&SUN hotel muutub omapäraseks maailmaks miniatüüris, kus hotellituba - on just kui isiklik korter, lasteklubi Toucan on lasteaed ja kool, meri ning basseinid on maailma kõige meeldivam vann, pearestoran - on unistuse köök, ning a la carte - restoranid on selleks, et kogu perega õhtusöögi nautida.<br><br>Me oleme teie saabumiseks ette valmistunud. Hooajaks oleme väljavalinud 20 hotelli 350-st, pannes tähele pisimad detailid ja väljatöötanud ideaalse puhkuse valemi nii täiskasvanutele kui ka lastele!',
                textLT: 'Atostogų metu FUN&SUN viešbučiai tampa savotišku miniatiūriniu pasauliu, kuriame kambarys - namai, „Toucan“ vaikų klubas - darželis ir mokykla, jūra ir įvairūs baseinai tampa maloniausiu vonios kambariu pasaulyje, restoranai - svajonių virtuve.<br><br>Mes ilgai ruošiamės Jūsų atvykimui pasirinkome 8 puikius viešbučius, sukūrėme specialius meniu, paruošėme pramogines ir sporto programas.',
                textLV: 'Atpūtas laikā FUN & SUN koncepta viesnīca viesim kļūst par sava veida miniatūru pasauli: viesnīcas numuriņš uz atvaļinājuma laiku pārtop par Jūsu dzīvokli, bet bērnu klubs Toucan – par bērnudārzu vai skolu Jūsu bērniem. Bez tam FUN & SUN koncepta viesnīcas piedāvā arī relaksējošu atpūtu pie jūras vai baseina, nebeidzamas maltītes galvenajā restorānā ar bagātīgu ēdienkarti vai A La Carte restorānos, kuru apmeklējums būs lielisks kulinārs piedzīvojums visai ģimenei.<br><br>20 burvīgas FUN & SUN koncepta viesnīcas Jūs jau gaida: skaisti numuri,  pārdomāta ēdienkarte, interesanta un plaša izklaides un sporta programma.',
                pageLink : '/concepts/tui-fun-sun/',
                videoClass : 'play video-fs picture1',
                videoId : 'player',
                videoPlay : 'https://www.tui.ru/getmedia/c91a3a4a-bded-4e06-99c3-a6befd390d32/play',
                videoPlayStyle : '',
                hotelsTitleRU : 'Отдых всей семьей в отелях FUN&SUN', 
                hotelsTitleBY : 'Отдых всей семьей в отелях FUN&SUN', 
                hotelsTitleUA : 'Отдых всей семьей в отелях FUN&SUN', 
                hotelsTitleEE : 'Perepuhkus FUN&SUN hotellides', 
                hotelsTitleLT : 'Visos šeimos poilsis FUN&SUN viešbučiuose', 
                hotelsTitleLV : 'Atpūta visai ģimenei FUN&SUN viesnīcas', 
                countries: [
                    //ТУРЦИЯ
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        countryNameRU : 'Турция',
                        countryNameBY : 'Турция',
                        countryNameUA : 'Турция',
                        countryNameEE : 'Türgi',
                        countryNameLT : 'Turkija',
                        countryNameLV : 'Turcija',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN Miarosa Ghazal Resort 5*',
                                linkAgent: '/Tours/Europe/Turkey/kemer/Goynuk/TUI-FUN-SUN-Miarosa-Ghazal-Resort',
                                linkClient: '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__miarosa__ghazal__resort/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN Club Belek 5*',
                                linkAgent: '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-Club-Belek',
                                linkClient: '/hotel/europe-turkey-belek-belek-tui__fun__sun__club__belek/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN Club Saphire 5*',
                                linkAgent: '/Tours/Europe/Turkey/kemer/Tekirova/TUI-FUN-SUN-Club-Saphire',
                                linkClient: '/hotel/europe-turkey-kemer-tekirova-tui__fun__sun__club__saphire/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN Club Serra Palace 5*',
                                linkAgent: '/Tours/Europe/Turkey/side/Kizilot/TUI-FUN-SUN-Club-Serra-Palace',
                                linkClient: '/hotel/europe-turkey-side-kizilot-tui__fun__sun__club__serra__palace/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN River Resort Belek 5*',
                                linkAgent: '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-River-Resort-Belek',
                                linkClient: '/hotel/europe-turkey-belek-belek-tui__fun__sun__river__resort__belek/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN Comfort Beach Resort 5*',
                                linkAgent: '/Tours/Europe/Turkey/Kemer/Goynuk/TUI-FUN-SUN-Comfort-Beach-Resort',
                                linkClient: '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__comfort__beach__resort/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN Club Di Finica 5*',
                                linkAgent: '/Tours/Europe/Turkey/Kemer/Finike/TUI-FUN-SUN-Club-Di-Finica',
                                linkClient: '/hotel/europe-turkey-kemer-finike-tui__fun__sun__club__di__finica/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN Miarosa Incekum Beach 5*',
                                linkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/TUI-FUN-SUN-Miarosa-Incekum-Beach',
                                linkClient: '/hotel/europe-turkey-alanya-incekum-tui__fun__sun__miarosa__incekum__beach/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN Euphoria Palm Beach 5*',
                                linkAgent: '/Tours/Europe/Turkey/side/Kizilagac/fun-sun-euphoria-palm-beach',
                                linkClient: '/hotel/europe-turkey-side-kizilagac-fun__sun__euphoria__palm__beach/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN Imperial Sunland Resort 5*',
                                linkAgent: '/Tours/Europe/Turkey/Kemer/Beldibi/FUN-SUN-Imperial-Sunland-Resort-(ex-Sunland-Resor',
                                linkClient: '/hotel/europe-turkey-kemer-beldibi-fun__sun__imperial__sunland__resort__(ex__sunland__resor/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN Life Side (ex. Iron Ambassador) 5*',
                                linkAgent: '/Tours/Europe/Turkey/side/Manavgat/fun-sun-life-side-resort-hotel',
                                linkClient: '/hotel/europe-turkey-side-manavgat-fun__sun__life__side__resort__hotel/',
                            },
                            
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN Life Belek 5*',
                                linkAgent: '/Tours/Europe/Turkey/belek/Bogazkent/FUN-SUN-Life-Belek',
                                linkClient: '/hotel/europe-turkey-belek-bogazkent-fun__sun__life__belek/',
                            },
                            
                        ],
                    },
                    
                    //КИПР
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : false,
                        showLT : false,
                        showLV : false,
                        countryNameRU : 'Кипр',
                        countryNameBY : 'Кипр',
                        countryNameUA : 'Кипр',
                        countryNameEE : 'Küpros',
                        countryNameLT : 'Kipras',
                        countryNameLV : 'Kipra',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'FUN&SUN Panthea Waterpark 4*',
                                linkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/TUI-FUN-SUN-Panthea-Waterpark',
                                linkClient: '/hotel/europe-cyprus-ayia__napa-ayia__napa-tui__fun__sun__panthea__waterpark/',
                            },
                            
                                                        
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'FUN&SUN Vangelis Hotel & Suites 4*',
                                linkAgent: '/Tours/Europe/Cyprus/Protaras/Protaras-city/vangelis-hotel-suites',
                                linkClient: '/hotel/europe-cyprus-protaras-protaras__city-vangelis__hotel__suites/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'FUN&SUN King Evelthon Beach Hotel & Resort 5*',
                                linkAgent: '/Tours/Europe/Cyprus/Paphos/Paphos/fun-sun-king-evelthon-beach-hotel-resort',
                                linkClient: '/hotel/europe-cyprus-paphos-paphos-fun__sun__king__evelthon__beach__hotel__resort/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'FUN&SUN Anastasia Beach Hotel 4*',
                                linkAgent: '/Tours/Europe/Cyprus/Protaras/Protaras-city/fun-sun-anastasia-beach-hotel',
                                linkClient: '/hotel/europe-cyprus-protaras-protaras__city-fun__sun__anastasia__beach__hotel/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'FUN&SUN Callisto Holiday Village 4*',
                                linkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/fun-sun-callisto-holiday-village',
                                linkClient: '/hotel/europe-cyprus-ayia__napa-ayia__napa-fun__sun__callisto__holiday__village/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'FUN&SUN Akteon Holiday Village 4*',
                                linkAgent: '/Tours/Europe/Cyprus/Paphos/Paphos/fun-sun-akteon-holiday-village',
                                linkClient: '/hotel/europe-cyprus-paphos-paphos-fun__sun__akteon__holiday__village/',
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
                        countryNameRU : 'Черногория',
                        countryNameBY : 'Черногория',
                        countryNameUA : 'Черногория',
                        countryNameEE : 'Montenegro',
                        countryNameLT : 'Juodkalnija',
                        countryNameLV : 'Melnkalne',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'FUN&SUN Pearl Beach Resort 4*',
                                linkAgent: '/Tours/Europe/Montenegro/Barska-Rivijera/chan/FUN-SUN-Pearl-Beach-Resort',
                                linkClient: '/hotel/europe-montenegro-barska__rivijera-chan-fun__sun__pearl__beach__resort/',
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
                        countryNameRU : 'Испания',
                        countryNameBY : 'Испания',
                        countryNameUA : 'Испания',
                        countryNameEE : 'Hispaania',
                        countryNameLT : 'Ispanija',
                        countryNameLV : 'Spānija',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN Sorra Daurada Splash 4*',
                                linkAgent: '/Tours/Europe/Spain/Costa-De-Barcelona/Malgrat-De-Mar/Sorra-Daurada',
                                linkClient: '/hotel/europe-spain-costa__de__barcelona-malgrat__de__mar-sorra__daurada/',
                            },
                                                    
                            
                        ],
                    },
                    
                    //ГРЕЦИЯ
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : false,
                        showLT : false,
                        showLV : false,
                        countryNameRU : 'Греция',
                        countryNameBY : 'Греция',
                        countryNameUA : 'Греция',
                        countryNameEE : 'Kreeka',
                        countryNameLT : 'Graikija',
                        countryNameLV : 'Grieķija',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'FUN&SUN Apollo Palace 5*',
                                linkAgent: '/Tours/Europe/Greece/Corfu/Messonghi/sentido-apollo-palace',
                                linkClient: '/hotel/europe-greece-corfu-messonghi-sentido__apollo__palace/',
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
                        countryNameRU : 'Италия',
                        countryNameBY : 'Италия',
                        countryNameUA : 'Италия',
                        countryNameEE : 'Itaalia',
                        countryNameLT : 'Italija',
                        countryNameLV : 'Itālija',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'FUN&SUN Club Esse Sunbeach 4*',
                                linkAgent: '/Tours/Europe/Italy/Calabria/Squillace/club-esse-sunbeach',
                                linkClient: '/hotel/europe-italy-calabria-squillace-club__esse__sunbeach/',
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
                        countryNameRU : 'Египет',
                        countryNameBY : 'Египет',
                        countryNameUA : 'Египет',
                        countryNameEE : 'Egiptus',
                        countryNameLT : 'Egiptas',
                        countryNameLV : 'Ēģipte',
                        
                        
                        hotels : [
                            {
                                showRU : false,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN Albatros Palace 5*',
                                linkAgent: '/Tours/Africa/Egypt/Sharm-El-Sheikh/Sharm-El-Sheikh/FUN-SUN-Albatros-Palace',
                                linkClient: '/hotel/africa-egypt-sharm__el__sheikh-sharm__el__sheikh-fun__sun__albatros__palace/',
                            },
                                                    
                            {
                                showRU : false,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN Albatros Aqua Vista 4*',
                                linkAgent: '/Tours/Africa/Egypt/Hurghada/Hurghada/fun-sun-albatros-aqua-vista',
                                linkClient: '/hotel/africa-egypt-hurghada-hurghada-fun__sun__albatros__aqua__vista/',
                            },
                            
                            {
                                showRU : false,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'FUN&SUN Albatros Aqua Blu 4*',
                                linkAgent: '/Tours/Africa/Egypt/Hurghada/Hurghada/fun-sun-albatros-aqua-blu',
                                linkClient: '/hotel/africa-egypt-hurghada-hurghada-fun__sun__albatros__aqua__blu/',
                            },
                            
                            
                        ],
                    },
                ],
            },
            
            //DAY NIGHT
            {
                videoYoutube: 'video2',
                logo : 'https://www.tui.ru/getmedia/82b48419-a310-45c9-a9d0-4b4fe86c85de/logo-FN',
                cssTitle: 'text-transform:uppercase;margin-bottom:20px',
                titleRU : 'Концепция активного отдыха DAY&NIGHT Connected',
                titleBY : 'Концепция активного отдыха DAY&NIGHT Connected',
                titleUA : 'Концепция активного отдыха DAY&NIGHT Connected',
                titleEE : 'Puhkus noortele DAY&NIGHT Connected',
                titleLT : 'Poilsio koncepcija jaunimui DAY&NIGHT Connected',
                titleLV : 'AKTĪVAS ATPŪTAS KONCEPTS DAY&NIGHT CONNECTED',
                sloganRU : 'Отдых, заряжающий энергией!',
                sloganBY : 'Отдых, заряжающий энергией!',
                sloganUA : 'Отдых, заряжающий энергией!',
                sloganEE : 'Puhkus, mis annab energiat!',
                sloganLT : 'Poilsis jauniems ir aktyviems!',
                sloganLV : 'Atpūta, kas piepilda ar enerģiju!',
                textRU: 'DAY&NIGHT Connected - это целая Вселенная приключений, веселья и ярких положительных эмоций, которые запомнятся на всю жизнь!<br><br>Вселенная, которая состоит из Солнечной системы "Ultra All Inclusive" с планетами свежевыжатого апельсинового сока, национальных блюд, европейской кухни, ресторанов a la carte, и бесплатного импортного алкоголя; Галактики развлечений с созвездиями "Wellness & Fitness", где для вас проводят мастер-классы именитые инструкторы, и "Night Life" с бесплатным входом в популярные ночные клубы, и бесконечного Wi-Fi.<br><br>Отдохнуть в передвижениях можно на станции "Номер" в уютной форме из фирменных халатов и тапочек за чашкой горячего чая.',
                textBY: 'DAY&NIGHT Connected - это целая Вселенная приключений, веселья и ярких положительных эмоций, которые запомнятся на всю жизнь!<br><br>Вселенная, которая состоит из Солнечной системы "Ultra All Inclusive" с планетами свежевыжатого апельсинового сока, национальных блюд, европейской кухни, ресторанов a la carte, и бесплатного импортного алкоголя; Галактики развлечений с созвездиями "Wellness & Fitness", где для вас проводят мастер-классы именитые инструкторы, и "Night Life" с бесплатным входом в популярные ночные клубы, и бесконечного Wi-Fi.<br><br>Отдохнуть в передвижениях можно на станции "Номер" в уютной форме из фирменных халатов и тапочек за чашкой горячего чая.',
                textUA: 'DAY&NIGHT Connected - это целая Вселенная приключений, веселья и ярких положительных эмоций, которые запомнятся на всю жизнь!<br><br>Вселенная, которая состоит из Солнечной системы "Ultra All Inclusive" с планетами свежевыжатого апельсинового сока, национальных блюд, европейской кухни, ресторанов a la carte, и бесплатного импортного алкоголя; Галактики развлечений с созвездиями "Wellness & Fitness", где для вас проводят мастер-классы именитые инструкторы, и "Night Life" с бесплатным входом в популярные ночные клубы, и бесконечного Wi-Fi.<br><br>Отдохнуть в передвижениях можно на станции "Номер" в уютной форме из фирменных халатов и тапочек за чашкой горячего чая.',
                textEE: 'DAY&NIGHT Connected - see on seikluste, lõbustust ja positiivsete emotsioonide universum, mis jääb meelde koguks eluks!<br><br>"Ultra All Inclusive" universum, mis koosneb värskelt pressitud mahladest, rahvuslikust ja Euroopa köögist, a la carte restoranidest ja tasuta imporditud alkohol; Meelelahutus galaktika: "Wellness - Fitness", kus kuulsad instruktorid teevad teile meistriklasse ning "Night Life" tasuta sissepääsuga populaarsetesse ööklubidesse ja piiramatu Wi-Fi ühendusega.<br><br>Välja puhata saate mugavas "hotellitoas" hommikumantli ja sussides, nautides tassikest teed või kohvi.',
                textLT: 'DAY&NIGHT Connected - tai nuotykių ir teigiamų emocijų visata, kuri įsimins visam gyvenimui!<br><br>Poilsio koncepcija aktyvaus gyvenimo mylėtojams: nuo sporto užsiėmimų, SPA procedūrų iki teminių vakarėlių, komandinių žaidimų ir naktinių klubų',
                textLV: 'DAY&NIGHT Connected koncepts - neaizmirstams jautru un spilgtu emociju piedzīvojums!<br><br>Bezrūpīga “Ultra Viss iekļauts” tipa atpūta, kas ietver dažādus cienastus - sākot no svaigi spiestas apelsīnu sulas, nacionālajiem ēdieniem, Eiropas virtuvi, beidzot ar A La Carte restorāniem un bezmaksas alkoholu. Atpūtas laikā izcili pasniedzēji un profesionāli treneri vadīs dažāda veida sporta un relaksācijas nodarbības. Esam arī parūpējušies par naktsdzīves izklaides iespējām – mūsu viesiem ir pieejama bezmaksas ieeja populārākajos pilsētas naktsklubos. Un, protams, kas gan ir mūsdienu dzīve bez interneta! Bezlimita pieeja Wi-Fi ir katram mūsu viesim.<br><br>Bet izbaudīt atpūtu no burzmas var omulīgajā numuriņā, pārdomājot aktīvās un notikumiem bagātās dienas piedzīvojumus ērtā peldmētelī un malkojot gardu tēju.',
                pageLink : '/concepts/tui-day-night/',
                videoClass : 'play2 video-fs picture2',
                videoId : 'player2',
                videoPlay : 'https://www.tui.ru/getmedia/c91a3a4a-bded-4e06-99c3-a6befd390d32/play',
                videoPlayStyle : '',
                hotelsTitleRU : '', 
                countries: [
                    //ТУРЦИЯ
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        countryNameRU : 'Турция',
                        countryNameBY : 'Турция',
                        countryNameUA : 'Турция',
                        countryNameEE : 'Türgi',
                        countryNameLT : 'Turkija',
                        countryNameLV : 'Turcija',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'DAY&NIGHT Connected Club Hydros 5*',
                                linkAgent: '/Tours/Europe/Turkey/kemer/Kemer-Center/TUI-DAY-NIGHT-Connected-Club-Hydros',
                                linkClient: '/hotel/europe-turkey-kemer-kemer__center-tui__day__night__connected__club__hydros/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'DAY&NIGHT Connected Imperial Turkiz Hotel 5*',
                                linkAgent: '/Tours/Europe/Turkey/Kemer/Kemer-Center/day-night-connected-imperial-turkiz-hotel',
                                linkClient: '/hotel/europe-turkey-kemer-kemer__center-day__night__connected__imperial__turkiz__hotel/',
                            },
                            
                            
                        ],
                    },
                    
                    //КИПР
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        countryNameRU : 'Кипр',
                        countryNameBY : 'Кипр',
                        countryNameUA : 'Кипр',
                        countryNameEE : 'Küpros',
                        countryNameLT : 'Kipras',
                        countryNameLV : 'Kipra',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'DAY&NIGHT Connected  Seasons 4*',
                                linkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/day-night-connected-seasons',
                                linkClient: '/hotel/europe-cyprus-ayia__napa-ayia__napa-day__night__connected__seasons/',
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
                        countryNameRU : 'Египет',
                        countryNameBY : 'Египет',
                        countryNameUA : 'Египет',
                        countryNameEE : 'Egiptus',
                        countryNameLT : 'Egiptas',
                        countryNameLV : 'Ēģipte',
                        
                        
                        hotels : [
                            {
                                showRU : false,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'DAY&NIGHT Connected Tropitel Waves 5*',
                                linkAgent: '/Tours/Africa/Egypt/Sharm-El-Sheikh/Sharm-El-Sheikh/day-night-connected-tropitel-waves',
                                linkClient: '/hotel/africa-egypt-sharm__el__sheikh-sharm__el__sheikh-day__night__connected__tropitel__waves/',
                            },
                                                    
                            
                            
                            
                        ],
                    },
                ],
            },
            
            //TOUCAN
            {
                videoYoutube: 'video3',
                logo : 'https://www.tui.ru/getmedia/a388ed46-64bc-4a03-a888-ae08a95cf843/logo-mini-toucan',
                cssTitle: 'text-transform:uppercase;margin-bottom:20px',
                titleRU : 'Детские клубы МИНИ ТУКАН',
                titleBY : 'Детские клубы МИНИ ТУКАН',
                titleUA : 'Детские клубы МИНИ ТУКАН',
                titleEE : 'Mini Toucan lasteklubid',
                titleLT : 'MINI TOUCAN vaikų klubai',
                titleLV : 'BĒRNU KLUBS MINI TOUCAN',
                sloganRU : 'Главный секрет отличного отдыха с детьми',
                sloganBY : 'Главный секрет отличного отдыха с детьми',
                sloganUA : 'Главный секрет отличного отдыха с детьми',
                sloganEE : 'Suurepärase puhkuse peamine saladus',
                sloganLT : 'Puikaus poilsio su vaikais paslaptis',
                sloganLV : 'Galvenā atslēga veiksmīgai atpūtai kopā ar bērniem',
                textRU: 'Детский клуб TUI Мини Тукан - территория отдыха с развивающей и игровой программой для детей от 4 до 12 лет, созданной профессионалами, с учетом пожеланий родителей. Отели с детскими клубами Мини Тукан позволяют провести долгожданный отпуск в спокойствии за безопасность и развлечения ребенка для родителей, весело и познавательно для детей.<br><br>Что такое клуб Мини Тукан?<br><br><li>Программа для детей 2 возрастов: Тукан Kids 4-7 лет и Тукан Junior 8-12 лет.</li><li>Клуб работает 6 дней в неделю, с 10-00 до 12-30, с 14-30 до 17-00.</li><li>Вечером - мини-диско.</li>',
                textBY: 'Детский клуб TUI Мини Тукан - территория отдыха с развивающей и игровой программой для детей от 4 до 12 лет, созданной профессионалами, с учетом пожеланий родителей. Отели с детскими клубами Мини Тукан позволяют провести долгожданный отпуск в спокойствии за безопасность и развлечения ребенка для родителей, весело и познавательно для детей.<br><br>Что такое клуб Мини Тукан?<br><br><li>Программа для детей 2 возрастов: Тукан Kids 4-7 лет и Тукан Junior 8-12 лет.</li><li>Клуб работает 6 дней в неделю, с 10-00 до 12-30, с 14-30 до 17-00.</li><li>Вечером - мини-диско.</li>',
                textUA: 'Детский клуб TUI Мини Тукан - территория отдыха с развивающей и игровой программой для детей от 4 до 12 лет, созданной профессионалами, с учетом пожеланий родителей. Отели с детскими клубами Мини Тукан позволяют провести долгожданный отпуск в спокойствии за безопасность и развлечения ребенка для родителей, весело и познавательно для детей.<br><br>Что такое клуб Мини Тукан?<br><br><li>Программа для детей 2 возрастов: Тукан Kids 4-7 лет и Тукан Junior 8-12 лет.</li><li>Клуб работает 6 дней в неделю, с 10-00 до 12-30, с 14-30 до 17-00.</li><li>Вечером - мини-диско.</li>',
                textEE: 'Lasteklubi Mini Toucan - puhkuse konseptsioon arengu- ja mänguprogrammidega lastele vansues 4 kuni 12 aastat, mis on koostatud professionaalide poolt, võttes arvesse vanemate soove. Hotellid Mini Toucan lasteklubidega võimaldavad teil veeta pikka aega oodatud puhkust olles kindel et laps on ohutuses.<br><br>Mis on Mini Toucan klubi?<br><br><li>Meelelahutusprogrammid laste kahele vanuserühmadele: Toucan Kids 4-7 aastastele ja Toucan Junior 8-12 aastastele</li><li>Lasteklubi on avatud 6 päeva nädalas, kella 10:00st kuni kella 22:00ni, lõuna ja õhtusöögi vaheajaga</li><li>Õhtul - minidisko ja multikad.</li>',
                textLT: 'Mini Toucan vaikų klubai - poilsio zona su programa vaikams nuo 4 iki 12 metų, sukurta specialistų, atsižvelgiant į tėvų pageidavimus.<br><br>Mini Toucan - kas tai?<br><br><li>Programa įvairaus amžiaus vaikams: Toucan Kids 4-7 m. ir Toucan Junior 8-12 m.</li><li>Klubas veikia 6 dienas per savaitę, nuo 10 iki 17 val su pietų pertrauka.</li><li>Vakarais - vaikų diskoteka.</li>',
                textLV: 'TUI bērnu klubs Mini Toucan ir atpūtas zona ar izklaidējošu un izglītojošu rotaļu un nodarbību programmu bērniem vecumā no 4 līdz 12 gadiem. Visas programmas ir izstrādājuši profesionāļi. Tās izveidē tika ņemti vērā bērnu vecāku ieteikumi, vēlmes un idejas.  Bērnu klubus Mini Toucan sniedz iespēju vecākiem mierīgi izbaudīt ilgi gaidītās brīvdienas, apzinoties, ka viņu bērns ir drošībā un jautri pavada laiku.<br><br>Kas ir Mini Toucan klubs?<br><br><li>Programma bērniem divās vecuma grupās: Toucan Kids 4-7 gadi, Toucan Junior 8-12 gadi.</li><li>Klubs darbojas 6 dienas nedēļā, no 10:00 līdz 12:30, no 14:30 līdz 17:00.</li><li>Vakaros -  bērnu diskotēkas.</li>',
                pageLink : '/concepts/tui-toucan/',
                videoClass : 'play3 video-fs picture3',
                videoId : 'player3',
                videoPlay : 'https://www.tui.ru/getmedia/c91a3a4a-bded-4e06-99c3-a6befd390d32/play',
                videoPlayStyle : '',
                hotelsTitleRU : '', 
                countries: [
                    //ТУРЦИЯ
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        countryNameRU : 'Турция',
                        countryNameBY : 'Турция',
                        countryNameUA : 'Турция',
                        countryNameEE : 'Türgi',
                        countryNameLT : 'Turkija',
                        countryNameLV : 'Turcija',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'Pegasos Club 4*',
                                linkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Club',
                                linkClient: '/hotel/europe-turkey-alanya-incekum-pegasos__club/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'Pegasos Resort 5*',
                                linkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Resort',
                                linkClient: '/hotel/europe-turkey-alanya-incekum-pegasos__resort/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'Pegasos Royal 5*',
                                linkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Royal',
                                linkClient: '/hotel/europe-turkey-alanya-incekum-pegasos__royal/',
                            },
                            
                        ],
                    },
                    
                    //КИПР
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : false,
                        showLT : false,
                        showLV : false,
                        countryNameRU : 'Кипр',
                        countryNameBY : 'Кипр',
                        countryNameUA : 'Кипр',
                        countryNameEE : 'Küpros',
                        countryNameLT : 'Kipras',
                        countryNameLV : 'Kipra',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'Christofinia 4*',
                                linkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/Christofinia/',
                                linkClient: '/hotel/europe-cyprus-ayia__napa-ayia__napa-christofinia/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'St Raphael 5*',
                                linkAgent: '/Tours/Europe/Cyprus/Limassol-Resort/Limassol-City/St-Raphael-Resort/',
                                linkClient: '/hotel/europe-cyprus-limasol__resort-limasol__city-st__raphael__resort/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'Tasia Maris Garden 3*',
                                linkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/tasia-maris-gardens',
                                linkClient: '/hotel/europe-cyprus-ayia__napa-ayia__napa-tasia__maris__gardens/',
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
                        countryNameRU : 'Черногория',
                        countryNameBY : 'Черногория',
                        countryNameUA : 'Черногория',
                        countryNameEE : 'Montenegro',
                        countryNameLT : 'Juodkalnija',
                        countryNameLV : 'Melnkalne',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'Aleksandar 4*',
                                linkAgent: '/tours/europe/montenegro/budvanska-rivijera/budva/aleksandar/',
                                linkClient: '/hotel/europe-montenegro-budvanska__rivijera-budva-aleksandar/',
                            },
                                                    
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'Castellastva 4*',
                                linkAgent: '/tours/europe/montenegro/budvanska-rivijera/petrovac/castellastva/',
                                linkClient: '/hotel/europe-montenegro-budvanska__rivijera-petrovac-castellastva/',
                            },
                            
                            {
                                showRU : false,
                                showBY : false,
                                showUA : false,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'Pearl Beach Resort 4*',
                                linkAgent: '/Tours/Europe/Montenegro/Barska-Rivijera/chan/FUN-SUN-Pearl-Beach-Resort',
                                linkClient: '/hotel/europe-montenegro-barska__rivijera-chan-fun__sun__pearl__beach__resort/',
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
                        countryNameRU : 'Испания',
                        countryNameBY : 'Испания',
                        countryNameUA : 'Испания',
                        countryNameEE : 'Hispaania',
                        countryNameLT : 'Ispanija',
                        countryNameLV : 'Spānija',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'Estival Park Hotel Resort 4*',
                                linkAgent: '/Tours/Europe/Spain/Costa-Dorada/La-Pineda/Estival-Park-Hotel-Resort',
                                linkClient: '/hotel/europe-spain-costa__dorada-la__pineda-estival__park__hotel__resort/',
                            },
                                                    
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'Don Juan Tossa 4*',
                                linkAgent: '/Tours/Europe/Spain/Costa-Brava/Tossa-De-Mar/Hotansa-Tossa',
                                linkClient: '/hotel/europe-spain-costa__brava-tossa__de__mar-don__juan__tossa/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'Sol Palmanova - Mallorca 4*',
                                linkAgent: '/Tours/Europe/Spain/Mallorca-Palma-de-Mallorca/Palma-Nova/Sol-Palmanova-Mallorca',
                                linkClient: '/hotel/europe-spain-mallorca__palma__de__mallorca-palma__nova-sol__palmanova__mallorca/',
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
                        countryNameRU : 'Греция',
                        countryNameBY : 'Греция',
                        countryNameUA : 'Греция',
                        countryNameEE : 'Kreeka',
                        countryNameLT : 'Graikija',
                        countryNameLV : 'Grieķija',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'Serita Beach Resort 5*',
                                linkAgent: '/Tours/Europe/Greece/Crete/Anissaras/mitsis-serita-beach',
                                linkClient: '/hotel/europe-greece-crete-anissaras-mitsis__serita__beach/',
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
                        countryNameRU : 'Италия',
                        countryNameBY : 'Италия',
                        countryNameUA : 'Италия',
                        countryNameEE : 'Itaalia',
                        countryNameLT : 'Italija',
                        countryNameLV : 'Itālija',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'Falkensteiner Club Funimation Calabria (ex. Garden Resort Calabria) 4*',
                                linkAgent: '/Tours/Europe/Italy/Calabria/Pizzo/Valtur-Garden-Calabria',
                                linkClient: '/hotel/europe-italy-calabria-pizzo-garden__resort__calabria/',
                            },
                                                    
                            
                        ],
                    },
                    
                    //ОАЭ
                    {
                        showRU : true,
                        showBY : true,
                        showUA : true,
                        showEE : true,
                        showLT : true,
                        showLV : true,
                        countryNameRU : 'ОАЭ',
                        countryNameBY : 'ОАЭ',
                        countryNameUA : 'ОАЭ',
                        countryNameEE : 'AÜE',
                        countryNameLT : 'JAE',
                        countryNameLV : 'AAE',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'Al Hamra Village Golf & Beach Resort 4*',
                                linkAgent: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-village-golf-beach-resort',
                                linkClient: '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__village__golf__beach__resort/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'Al Hamra Residence 5*',
                                linkAgent: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-residence',
                                linkClient: '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__residence/',
                            },
                            
                            {
                                showRU : true,
                                showBY : true,
                                showUA : true,
                                showEE : true,
                                showLT : true,
                                showLV : true,
                                name : 'Blue Diamond AlSalam Resort 5*',
                                linkAgent: '/Tours/Asia/UAE/Fujairah/Fujairah-beach-hotels/blue-diamond-alsalam-resort',
                                linkClient: '/hotel/asia-uae-fujairah-fujairah__beach__hotels-blue__diamond__alsalam__resort/',
                            },
                            
                        ],
                    },
                    
                    //РОССИЯ
                    {
                        showRU : true,
                        showBY : true,
                        showUA : false,
                        showEE : false,
                        showLT : false,
                        showLV : false,
                        countryNameRU : 'Россия',
                        countryNameBY : 'Россия',
                        countryNameUA : 'Россия',
                        countryNameEE : '',
                        countryNameLT : '',
                        countryNameLV : '',
                        
                        
                        hotels : [
                            {
                                showRU : true,
                                showBY : true,
                                showUA : false,
                                showEE : false,
                                showLT : false,
                                showLV : false,
                                name : 'Бархатные сезоны 3*',
                                linkAgent: '/Tours/Europe/Russia/Sochi/Imeretinskaya-Bukhta/barhatnye-sezony-gorod-otel-russquiy-dom',
                                linkClient: '/hotel/europe-russia-sochi-imeretinskaya__bukhta-barhatnye__sezony__gorod__otel__russquiy__dom/',
                            },
                                                    
                            
                        ],
                    },
                ],
            },
        ],
    }
})