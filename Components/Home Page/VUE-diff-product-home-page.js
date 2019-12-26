

const homePageFirstBlock = new Vue ({
    el: '#home-page-first-block',
    data:{
        //TITLE
        firstBlockHeadNameRU1: 'KОНЦЕПЦИИ ОТДЫХА,',
        firstBlockHeadNameRU2: 'СОЗДАННЫЕ TUI',
        firstBlockHeadNameBY1: 'KОНЦЕПЦИИ ОТДЫХА,',
        firstBlockHeadNameBY2: 'СОЗДАННЫЕ TUI',
        firstBlockHeadNameUA1: 'KОНЦЕПЦИИ ОТДЫХА,',
        firstBlockHeadNameUA2: 'СОЗДАННЫЕ TUI',
        firstBlockHeadNameEE1: 'PUHKUSE KONTSEPTSIOONID,',
        firstBlockHeadNameEE2: 'TUI',
        firstBlockHeadNameLT1: 'POILSIO KONCEPCIJOS,',
        firstBlockHeadNameLT2: 'SUKURTOS TUI',
        firstBlockHeadNameLV1: 'ATPŪTAS KONCEPCIJAS,',
        firstBlockHeadNameLV2: 'KAS RADĪTAS TUI',
        
        //COMMENT
        firstBlockHeadCommentRU1: 'Мы знаем, какой отдых вам нужен,',
        firstBlockHeadCommentRU2: 'потому что вы нам сами об этом рассказали!',
        firstBlockHeadCommentBY1: 'Мы знаем, какой отдых вам нужен,',
        firstBlockHeadCommentBY2: 'потому что вы нам сами об этом рассказали!',
        firstBlockHeadCommentUA1: 'Мы знаем, какой отдых вам нужен,',
        firstBlockHeadCommentUA2: 'потому что вы нам сами об этом рассказали!',
        firstBlockHeadCommentEE1: 'Teame, millist puhkust te vajate,',
        firstBlockHeadCommentEE2: 'sest olete ise meile sellest rääkinud!',
        firstBlockHeadCommentLT1: 'Mes žinome, kokių reikia atostogų,',
        firstBlockHeadCommentLT2: 'nes Jūs mums apie tai pasakėte!',
        firstBlockHeadCommentLV1: 'Mēs zinām, kāda atpūta jums ir nepieciešama,',
        firstBlockHeadCommentLV2: 'jo jūs paši par to mums pastāstījāt!',
        
        //ПРЕЗЕНТАЦИЯ
        firstBlockHeadPresentaionLink: 'https://www.tui.ru/getmedia/b448c677-abf8-40ec-8578-1a05f7268b4b/NEW_Concept_Presentation_B2B_31-10',
        firstBlockHeadPresentaionLinkUA: 'https://www.tui.ru/getmedia/67345b6e-5eb5-4eae-8523-8d35b61a67b5/UA_NEW-Concept-Presentation_B2B_04-11-2019',
        firstBlockHeadPresentaionRU: 'Презентация Дифф продукта',
        firstBlockHeadPresentaionBY: 'Презентация Дифф продукта',
        firstBlockHeadPresentaionUA: 'Презентация Дифф продукта',
        firstBlockHeadPresentaionEE: 'Vali konsept',
        firstBlockHeadPresentaionLT: 'Prezentacija',
        firstBlockHeadPresentaionLV: 'Diferencēta produkta prezentācija',
        
        //Details
        firstBlockHeadDeatilsRU: '* Концепции отдыха TUI - это отдых в новом формате, где учтены интересы всех поколений.',
        firstBlockHeadDeatilsBY: '* Концепции отдыха TUI - это отдых в новом формате, где учтены интересы всех поколений.',
        firstBlockHeadDeatilsUA: '* Концепции отдыха TUI - это отдых в новом формате, где учтены интересы всех поколений.',
        firstBlockHeadDeatilsEE: '* TUI puhkuse konseptsioon - uue formaadi puhkus, kus on võetud arvesse igas vanuses puhkajate huvid.',
        firstBlockHeadDeatilsLT: '* TUI poilsio koncepcijos - tai naujas poilsio formatas, kur atsižvelgiama į visų kartų interesus.',
        firstBlockHeadDeatilsLV: '* TUI atpūtas koncepcijas - atpūta jaunā formātā, kas ņem vērā visu paaudžu intereses.',
    }
});

const homePageTextBlock = new Vue ({
    el: '#home-page-text-block',
    data: {
        homePageTextBlockRU1: 'Концепции отдыха TUI',
        homePageTextBlockRU2: '- это новый формат отдыха, где учтены интересы всех поколений и современные тренды. 100 000 человек уже сделали свой выбор в пользу отдыха в наших отелях.',
        homePageTextBlockRU3: 'Время и вам сделать выбор! Выберите страну и забронируйте формат отдыха, который подходит именно вам!',
        homePageTextBlockBY1: 'Концепции отдыха TUI',
        homePageTextBlockBY2: '- это новый формат отдыха, где учтены интересы всех поколений и современные тренды. 100 000 человек уже сделали свой выбор в пользу отдыха в наших отелях.',
        homePageTextBlockBY3: 'Время и вам сделать выбор! Выберите страну и забронируйте формат отдыха, который подходит именно вам!',
        homePageTextBlockUA1: 'Концепции отдыха TUI',
        homePageTextBlockUA2: '- это новый формат отдыха, где учтены интересы всех поколений и современные тренды. 100 000 человек уже сделали свой выбор в пользу отдыха в наших отелях.',
        homePageTextBlockUA3: 'Время и вам сделать выбор! Выберите страну и забронируйте формат отдыха, который подходит именно вам!',
        homePageTextBlockEE1: 'TUI puhkuse konseptsioonid',
        homePageTextBlockEE2: '- uue formaadi puhkus, kus on võetud arvesse igas vanuses puhkajate huvid. Juba 42 600 inimest on valinud puhkuse meie hotellides.',
        homePageTextBlockEE3: 'Nüüd on teilgi aeg teha valik! Valige sihtkoht ja broneerige just teile sobiva puhkuse kontseptsiooni!',
        homePageTextBlockLT1: 'TUI poilsio koncepcijos',
        homePageTextBlockLT2: '- tai naujas poilsio formatas, kur atsižvelgiama į visų kartų interesus ir šiuolaikines tendencijas. 100 000 turistų jau pasirinko ir išbandė tokio tipo poilsį mūsų viešbučiuose.',
        homePageTextBlockLT3: 'Laikas rinktis! Išsirinkite šalį ir užsisakykite Jums tinkamiausią atostogų tipą!',
        homePageTextBlockLV1: 'TUI atpūtas koncepcijas',
        homePageTextBlockLV2: '- jauna formāta atpūta, kur tiek ņemtas vērā visu paaudžu intereses un mūsdienīgas tendences. Jau 100 000 viesu ir izvēlējušies atpūtu mūsu viesnīcas. ',
        homePageTextBlockLV3: 'Ir pienācis laiks izdarīt izvēli! Izvēlēties valsti un rezervējiet atpūtas koncepciju, kas ir piemērota tieši jums!',
    }
});

//SMART
const homePageSmartBlockText = new Vue ({
    el: '#home-page-smart-block-text',
    data: {
        logo: 'https://www.tui.ru/getmedia/7eea7272-a23a-4d66-9df7-4eb7463c2a55/Smart-Logo-80px',
        
        titleRU1: 'Концепция отдыха SMART',
        titleRU2: 'Умный подход к отдыху',
        textRU1: 'Мы устраиваем революцию на рынке бюджетного отдыха! SMART - это концепция для каждого: для семей и для молодежи, которых объединяет одна цель и одно желание - насладиться качественным отдыхом за разумные деньги.',
        textRU2: 'В первую очередь, мы предлагаем сервис на звезду выше: анимация, детский клуб, питание и напитки, бесплатный Wi-Fi, узнаваемый стиль в дизайне и качество по доступной цене. SMART дарит удовольствия для всех: натуральный кофе и кафе-пекарня, детский клуб и бесплатное мороженое, живая музыка и пивной бар с различными сортами пива местных производителей.',
        textRU3: 'Кроме того, SMART заботится об окружающей среде, что означает экологически дружелюбную концепцию. Никаких пластиковых стаканчиков и трубочек, разумный подход к трате воды и энергии, мусорные урны для разделения отходов.',
        
        titleBY1: 'Концепция отдыха SMART',
        titleBY2: 'Умный подход к отдыху',
        textBY1: 'Мы устраиваем революцию на рынке бюджетного отдыха! SMART - это концепция для каждого: для семей и для молодежи, которых объединяет одна цель и одно желание - насладиться качественным отдыхом за разумные деньги.',
        textBY2: 'В первую очередь, мы предлагаем сервис на звезду выше: анимация, детский клуб, питание и напитки, бесплатный Wi-Fi, узнаваемый стиль в дизайне и качество по доступной цене. SMART дарит удовольствия для всех: натуральный кофе и кафе-пекарня, детский клуб и бесплатное мороженое, живая музыка и пивной бар с различными сортами пива местных производителей.',
        textBY3: 'Кроме того, SMART заботится об окружающей среде, что означает экологически дружелюбную концепцию. Никаких пластиковых стаканчиков и трубочек, разумный подход к трате воды и энергии, мусорные урны для разделения отходов.',
        
        titleUA1: 'Концепция отдыха SMART',
        titleUA2: 'Умный подход к отдыху',
        textUA1: 'Мы устраиваем революцию на рынке бюджетного отдыха! SMART - это концепция для каждого: для семей и для молодежи, которых объединяет одна цель и одно желание - насладиться качественным отдыхом за разумные деньги.',
        textUA2: 'В первую очередь, мы предлагаем сервис на звезду выше: анимация, детский клуб, питание и напитки, бесплатный Wi-Fi, узнаваемый стиль в дизайне и качество по доступной цене. SMART дарит удовольствия для всех: натуральный кофе и кафе-пекарня, детский клуб и бесплатное мороженое, живая музыка и пивной бар с различными сортами пива местных производителей.',
        textUA3: 'Кроме того, SMART заботится об окружающей среде, что означает экологически дружелюбную концепцию. Никаких пластиковых стаканчиков и трубочек, разумный подход к трате воды и энергии, мусорные урны для разделения отходов.',
        
        titleEE1: 'SMART puhkuse kontseptsioon',
        titleEE2: 'Nutikas lähenemine puhkusele',
        textEE1: 'Me korraldame taskukohase puhkuse revolutsiooni turul! SMART on kontseptsioon kõigile: peredele ja noortele, kellel on üks eesmärk ja üks soov - nautida kvaliteetset puhkust mõistliku hinnaga.',
        textEE2: 'Esiteks pakume ühe tärni võrra paremat teenust: animatsiooni, lasteklubi, sööke ja jooke, tasuta WiFi-t, äratuntavat disaini ja kvaliteeti taskukohase hinnaga. SMART kingib naudingut kõigile: naturaalne kohv ja kohvik-pagariäri, lasteklubi ning tasuta jäätis.',
        textEE3: 'Lisaks sellele hoolitseb SMART keskkonna eest ning on välja töötanud keskkonnasõbralikku kontseptsiooni. Ei mingeid plasttopse ja joogikõrsi, vee ja energia kasutamise mõistlik lähenemine, jäätmete sorteerimine.',
        
        titleLT1: 'Poilsio koncepcija SMART',
        titleLT2: 'Protingas požiūris į poilsį',
        textLT1: 'Revoliucija ekonominio poilsio rinkoje! SMART – tai koncepcija kiekvienam: tiek šeimoms, tiek jaunimui, kurie turi vieną tikslą ir norą - mėgautis kokybiškomis atostogomis už priimtiną kainą.',
        textLT2: 'Visų pirma, mes siūlome paslaugą žvaigždute aukščiau: animaciją, vaikų klubą, maistą ir gėrimus, nemokamą Wi-Fi, atpažįstamą dizaino stilių ir kokybę už prieinamą kainą. SMART teikia malonumą kiekvienam: natūrali kava ir kepyklėlė, vaikų klubas ir nemokami ledai.',
        textLT3: 'Be to, SMART rūpinasi aplinka, o tai reiškia ekologišką idėją. Jokių plastikinių puodelių ir šiaudelių, protingas būdas nešvaistyti vandens ir energijos, šiukšliadėžės atliekų rūšiavimui.',
        
        titleLV1: 'Atpūtas koncepcija SMART',
        titleLV2: 'Gudrā pieeja atpūtai',
        textLV1: 'Mēs rīkojam revolūciju budžeta atpūtas tirgū! SMART - koncepcija katrām:  gan ģimenem gan jauniešiem, kuriem ir vienots mērķis un viena vēlme - labi atpūsties par saprātīgu cenu.',
        textLV2: 'Pirmkārt, mēs piedāvājam 5* zvaigznēm atbilstošu servisu: animācija, bērnu klubs, ēdināšana un dzērieni, bezmaksas Wi-Fi, labi pazīstamu stilu dizainā un kvalitāti par pieejamu cenu. SMART tas ir: naturāla kafija un kafejnīca-ceptuve, bērnu klubs un bezmaksas saldējums.',
        textLV3: 'Bez tam, SMART rūpējas par apkārtējo vidi, kas nozīme videi draudzīgu koncepciju. Nekādu plastmasas glāzīšu un salmiņu, gudrā pieeja ūdens un elektroenerģijas patēriņam, atkritumu šķirošanas tvertnes.',


    }
    
});

const homePageSmartBlockVideoHotels = new Vue ({
    el: '#home-page-smart-block-video-hotels',
    data: {
        homeSmartBlockPageLink: '/concepts/smart/',
        
        linkTextRU: 'Подробнее',
        linkTextBY: 'Подробнее',
        linkTextUA: 'Подробнее',
        linkTextEE: 'Uuri lähemalt',
        linkTextLT: 'Plačiau',
        linkTextLV: 'Sīkāk',
        
        homeSmartBlockPageImage: 'https://www.tui.ru/getmedia/9673f81a-e29f-4ead-b35c-2d4a6eeac6d9/fon-template',
        
        titleRU: 'Отдых в отелях SMART',
        titleBY: 'Отдых в отелях SMART',
        titleUA: 'Отдых в отелях SMART',
        titleEE: 'Puhkus SMART hotellides',
        titleLT: 'Poilsis SMART viešbučiuose',
        titleLV: 'Atpūta SMART vesnīcās',
        
        turkeyRU: 'Турция',
        turkeyBY: 'Турция',
        turkeyUA: 'Турция',
        turkeyEE: 'Türgi',
        turkeyLT: 'Turkija',
        turkeyLV: 'Turcija',
        
        hotelLink1Agent: '/Tours/Europe/Turkey/Kemer/Beldibi/Smart-Club-Marakesh-Beach-Hotel',
        hotelLink1Client: '/hotel/europe-turkey-kemer-beldibi-smart__club__marakesh__beach__hotel/',
        hotelName1: 'SMART Club Marakesh Beach Hotel 4*',
        
        hotelLink2Agent: '/Tours/Europe/Turkey/Alanya/Mahmutlar/Smart-Euphoria-Bella-Mare-Hotel',
        hotelLink2Client: '/hotel/europe-turkey-alanya-mahmutlar-smart__euphoria__bella__mare__hotel/',
        hotelName2: 'SMART Euphoria Bella Mare Hotel 4*',
        
        hotelLink3Agent: '/Tours/Europe/Turkey/Alanya/Konakli/Limoncello-Konakli-Beach-Hotel-(ex-Club-Konakli)',
        hotelLink3Client: '/hotel/europe-turkey-alanya-konakli-smart__limoncello__konakli__beach__hotel/',
        hotelName3: 'SMART Limoncello Konakli Beach Hotel 5*',
        
        hotelLink4Agent: '/Tours/Europe/Turkey/Alanya/Konakli/Club-Hotel-Mirabell',
        hotelLink4Client: '/hotel/europe-turkey-alanya-konakli-smart__mirabell__hotel/',
        hotelName4: 'SMART Club Hotel Mirabell 4*',
        
        hotelLink5Agent: '/Tours/Europe/Turkey/Antalya/Lara/Lara-Family-Star-Iron-Ambassador',
        hotelLink5Client: '/hotel/europe-turkey-antalya-lara-smart__lara__family/',
        hotelName5: 'SMART Lara Star 5*',
        
        hotelLink6Agent: '/Tours/Europe/Turkey/Kemer/Beldibi/SMART-Asdem-Beach',
        hotelLink6Client: '/hotel/europe-turkey-kemer-beldibi-smart__asdem__beach/',
        hotelName6: 'SMART Asdem Beach 5*',
        
        
    }
});


//FUN SUN
const homePageFunSunBlockText = new Vue ({
    el: '#home-page-fun-sun-block-text',
    data: {
        homePageFunSunBlockLogo: 'https://www.tui.ru/getmedia/d154b64a-2315-40e0-94f5-53137a734367/logo-FS',
        
        homePageFunSunBlockTitleRU1: 'Концепция семейного отдыха FUN&SUN',
        homePageFunSunBlockTitleRU2: 'Семейный отдых, продуманный в деталях',
        homePageFunSunBlockTextRU1: 'Во время отдыха для гостя FUN&SUN отель становится своеобразным миром в миниатюре, где номер - это квартира, Детский Клуб Тукан - детский сад и школа, море и разнообразные бассейны становятся самой приятной ванной на свете, главный ресторан - кухней мечты с бесконечным питанием, а рестораны a la carte - рестораны для выхода в "свет" всей семьей в выходной.',
        homePageFunSunBlockTextRU2: 'Мы долго готовились к вашему приезду. Мы выбрали 20 прекрасных отелей, навели в них порядок и чистоту, разработали специальное меню, подготовили развлекательную и спортивную программы и, конечно же, обучили каждого сотрудника.',
        
        homePageFunSunBlockTitleBY1: 'Концепция семейного отдыха FUN&SUN',
        homePageFunSunBlockTitleBY2: 'Семейный отдых, продуманный в деталях',
        homePageFunSunBlockTextBY1: 'Во время отдыха для гостя FUN&SUN отель становится своеобразным миром в миниатюре, где номер - это квартира, Детский Клуб Тукан - детский сад и школа, море и разнообразные бассейны становятся самой приятной ванной на свете, главный ресторан - кухней мечты с бесконечным питанием, а рестораны a la carte - рестораны для выхода в "свет" всей семьей в выходной.',
        homePageFunSunBlockTextBY2: 'Мы долго готовились к вашему приезду. Мы выбрали 20 прекрасных отелей, навели в них порядок и чистоту, разработали специальное меню, подготовили развлекательную и спортивную программы и, конечно же, обучили каждого сотрудника.',
        
        homePageFunSunBlockTitleUA1: 'Концепция семейного отдыха FUN&SUN',
        homePageFunSunBlockTitleUA2: 'Семейный отдых, продуманный в деталях',
        homePageFunSunBlockTextUA1: 'Во время отдыха для гостя FUN&SUN отель становится своеобразным миром в миниатюре, где номер - это квартира, Детский Клуб Тукан - детский сад и школа, море и разнообразные бассейны становятся самой приятной ванной на свете, главный ресторан - кухней мечты с бесконечным питанием, а рестораны a la carte - рестораны для выхода в "свет" всей семьей в выходной.',
        /*homePageFunSunBlockTextUA2: 'Мы долго готовились к вашему приезду. Мы выбрали 20 прекрасных отелей, навели в них порядок и чистоту, разработали специальное меню, подготовили развлекательную и спортивную программы и, конечно же, обучили каждого сотрудника.',*/
        
        homePageFunSunBlockTitleEE1: 'FUN&SUN perepuhkuse konseptsioon',
        homePageFunSunBlockTitleEE2: 'Detailideni läbimõeldud perepuhkus',
        homePageFunSunBlockTextEE1: 'Puhkuse ajal FUN&SUN hotel muutub omapäraseks maailmaks miniatüüris, kus hotellituba - on just kui isiklik korter, lasteklubi Toucan on lasteaed ja kool, meri ning basseinid on maailma kõige meeldivam vann, pearestoran - on unistuse köök, ning a la carte - restoranid on selleks, et kogu perega õhtusöögi nautida.',
        homePageFunSunBlockTextEE2: 'Me oleme teie saabumiseks ette valmistunud. Hooajaks oleme väljavalinud 20 hotelli 350-st, pannes tähele pisimad detailid ja väljatöötanud ideaalse puhkuse valemi nii täiskasvanutele kui ka lastele!',
        
        homePageFunSunBlockTitleLT1: 'Šeimų poilsio koncepcija FUN&SUN',
        homePageFunSunBlockTitleLT2: 'Šeimos poilsis, apgalvotas iki smulkmenų',
        homePageFunSunBlockTextLT1: 'Atostogų metu FUN&SUN viešbučiai tampa savotišku miniatiūriniu pasauliu, kuriame kambarys - namai, „Toucan“ vaikų klubas - darželis ir mokykla, jūra ir įvairūs baseinai tampa maloniausiu vonios kambariu pasaulyje, restoranai - svajonių virtuve.',
        homePageFunSunBlockTextLT2: 'Mes ilgai ruošiamės Jūsų atvykimui pasirinkome 8 puikius viešbučius, sukūrėme specialius meniu, paruošėme pramogines ir sporto programas.',
        
        homePageFunSunBlockTitleLV1: 'Ģimenes atpūtas koncepcija FUN&SUN',
        homePageFunSunBlockTitleLV2: 'Pārdomāta ģimenes atpūta',
        homePageFunSunBlockTextLV1: 'Atpūtas laikā FUN&SUN viesiem viesnīca kļūst par sava veida pasauli miniatūrā, kur viesnīcas numurs - ir dzīvoklis, bērnu klubs Mini Toucan - bērnudārzs un skola, jūra un baseini kļūst par labāko vannu, galvenais viesnīcas restorāns - sapņu virtuve ar nebeidzamu ēdienu izvēli, bet A La Carte restorāni - brīvdienu atpūtas "vieta" visai ģimenei.',
        homePageFunSunBlockTextLV2: 'Mēs ilgi gatavojāmies jūsu uzņemšanai vasaras sezonas mēs izvēlējāmies 20 brīnišķīgas viesnīcas, ieviesām kārtību un tīrību, izveidojām īpašu ēdienkarti, izklaides un sporta programmu, un, protams, apmācījām katru darbinieku.',
    }
    
});

const homePageFunSunBlockVideoHotels = new Vue ({
    el: '#home-page-fun-sun-block-video-hotels',
    data: {
        homeFunSunBlockPageLink: '/concepts/tui-fun-sun/',
        
        homeFunSunBlockPageLinkTextRU: 'Подробнее',
        homeFunSunBlockPageImage: 'https://www.tui.ru/getmedia/c91a3a4a-bded-4e06-99c3-a6befd390d32/play',
        homeFunSunBlockPageTitleRU: 'Отдых всей семьей в отелях FUN&SUN',
        homeFunSunBlockPageTurkeyRU: 'Турция',
        homeFunSunBlockPageCyprysRU: 'Кипр',
        homeFunSunBlockPageEgyptRU: 'Египет',
        homeFunSunBlockPageMontenegroRU: 'Черногория',
        homeFunSunBlockPageSpainRU: 'Испания',
        homeFunSunBlockPageGreeceRU: 'Греция',
        
        homeFunSunBlockPageLinkTextBY: 'Подробнее',
        homeFunSunBlockPageImage: 'https://www.tui.ru/getmedia/c91a3a4a-bded-4e06-99c3-a6befd390d32/play',
        homeFunSunBlockPageTitleBY: 'Отдых всей семьей в отелях FUN&SUN',
        homeFunSunBlockPageTurkeyBY: 'Турция',
        homeFunSunBlockPageCyprysBY: 'Кипр',
        homeFunSunBlockPageEgyptBY: 'Египет',
        homeFunSunBlockPageMontenegroBY: 'Черногория',
        homeFunSunBlockPageSpainBY: 'Испания',
        homeFunSunBlockPageGreeceBY: 'Греция',
        
        homeFunSunBlockPageLinkTextUA: 'Подробнее',
        homeFunSunBlockPageImage: 'https://www.tui.ru/getmedia/c91a3a4a-bded-4e06-99c3-a6befd390d32/play',
        homeFunSunBlockPageTitleUA: 'Отдых всей семьей в отелях FUN&SUN',
        homeFunSunBlockPageTurkeyUA: 'Турция',
        homeFunSunBlockPageCyprysUA: 'Кипр',
        homeFunSunBlockPageEgyptUA: 'Египет',
        homeFunSunBlockPageMontenegroUA: 'Черногория',
        homeFunSunBlockPageSpainUA: 'Испания',
        homeFunSunBlockPageGreeceUA: 'Греция',
        
        homeFunSunBlockPageLinkTextEE: 'Täpsemalt',
        homeFunSunBlockPageImage: 'https://www.tui.ru/getmedia/c91a3a4a-bded-4e06-99c3-a6befd390d32/play',
        homeFunSunBlockPageTitleEE: 'Perepuhkus TUI FUN&SUN hotellides',
        homeFunSunBlockPageTurkeyEE: 'Türgi',
        homeFunSunBlockPageCyprysEE: 'Küpros',
        homeFunSunBlockPageEgyptEE: 'Egiptus',
        homeFunSunBlockPageMontenegroEE: 'Montenegro',
        homeFunSunBlockPageSpainEE: 'Hispaania',
        homeFunSunBlockPageGreeceEE: 'Kreeka',
        
        homeFunSunBlockPageLinkTextLT: 'Plačiau',
        homeFunSunBlockPageImage: 'https://www.tui.ru/getmedia/c91a3a4a-bded-4e06-99c3-a6befd390d32/play',
        homeFunSunBlockPageTitleLT: 'Visos šeimos poilsis FUN&SUN viešbučiuose',
        homeFunSunBlockPageTurkeyLT: 'Turkija',
        homeFunSunBlockPageCyprysLT: 'Kipras',
        homeFunSunBlockPageEgyptLT: 'Egiptas',
        homeFunSunBlockPageMontenegroLT: 'Juodkalnija',
        homeFunSunBlockPageSpainLT: 'Ispanija',
        homeFunSunBlockPageGreeceLT: 'Graikija',
        
        homeFunSunBlockPageLinkTextLV: 'Sīkāk',
        homeFunSunBlockPageImage: 'https://www.tui.ru/getmedia/c91a3a4a-bded-4e06-99c3-a6befd390d32/play',
        homeFunSunBlockPageTitleLV: 'Atpūta visai ģimenei FUN&SUN viesnīcas',
        homeFunSunBlockPageTurkeyLV: 'Turcija',
        homeFunSunBlockPageCyprysLV: 'Kipra',
        homeFunSunBlockPageEgyptLV: 'Ēģipte',
        homeFunSunBlockPageMontenegroLV: 'Melnkalne',
        homeFunSunBlockPageSpainLV: 'Spānija',
        homeFunSunBlockPageGreeceLV: 'Grieķija',
        
        //ТУРЦИЯ
        homeFunSunHotelLink1: '/Tours/Europe/Turkey/kemer/Goynuk/TUI-FUN-SUN-Miarosa-Ghazal-Resort',
        homeFunSunHotelLinkClient1: '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__miarosa__ghazal__resort/',
        homeFunSunHotelName1: 'FUN&SUN Miarosa Ghazal Resort 5*',
        
        homeFunSunHotelLink2: '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-Club-Belek',
        homeFunSunHotelLinkClient2: '/hotel/europe-turkey-belek-belek-tui__fun__sun__club__belek/',
        homeFunSunHotelName2: 'FUN&SUN Club Belek 5*',
        
        homeFunSunHotelLink3: '/Tours/Europe/Turkey/kemer/Tekirova/TUI-FUN-SUN-Club-Saphire',
        homeFunSunHotelLinkClient3: '/hotel/europe-turkey-kemer-tekirova-tui__fun__sun__club__saphire/',
        homeFunSunHotelName3: 'FUN&SUN Club Saphire 5*',
        
        homeFunSunHotelLink4: '/Tours/Europe/Turkey/side/Kizilot/TUI-FUN-SUN-Club-Serra-Palace',
        homeFunSunHotelLinkClient4: '/hotel/europe-turkey-side-kizilot-tui__fun__sun__club__serra__palace/',
        homeFunSunHotelName4: 'FUN&SUN Club Serra Palace 5*',
        
        homeFunSunHotelLink5: '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-River-Resort-Belek',
        homeFunSunHotelLinkClient5: '/hotel/europe-turkey-belek-belek-tui__fun__sun__river__resort__belek/',
        homeFunSunHotelName5: 'FUN&SUN River Resort Belek 5*',
        
        homeFunSunHotelLink6: '/Tours/Europe/Turkey/Kemer/Goynuk/TUI-FUN-SUN-Comfort-Beach-Resort',
        homeFunSunHotelLinkClient6: '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__comfort__beach__resort/',
        homeFunSunHotelName6: 'FUN&SUN Comfort Beach Resort 5*',
        
        homeFunSunHotelLink7: '/Tours/Europe/Turkey/Kemer/Finike/TUI-FUN-SUN-Club-Di-Finica',
        homeFunSunHotelLinkClient7: '/hotel/europe-turkey-kemer-finike-tui__fun__sun__club__di__finica/',
        homeFunSunHotelName7: 'FUN&SUN Club Di Finica 5*',
        
        homeFunSunHotelLink8: '/Tours/Europe/Turkey/Alanya/Incekum/TUI-FUN-SUN-Miarosa-Incekum-Beach',
        homeFunSunHotelLinkClient8: '/hotel/europe-turkey-alanya-incekum-tui__fun__sun__miarosa__incekum__beach/',
        homeFunSunHotelName8: 'FUN&SUN Miarosa Incekum Beach 5*',
        
        homeFunSunHotelLink13: '/Tours/Europe/Turkey/side/Kizilagac/fun-sun-euphoria-palm-beach',
        homeFunSunHotelLinkClient13: '/hotel/europe-turkey-side-kizilagac-fun__sun__euphoria__palm__beach/',
        homeFunSunHotelName13: 'FUN&SUN Euphoria Palm Beach 5*',
        
        homeFunSunHotelLink14: '/Tours/Europe/Turkey/Kemer/Beldibi/FUN-SUN-Imperial-Sunland-Resort-(ex-Sunland-Resor',
        homeFunSunHotelLinkClient14: '/hotel/europe-turkey-kemer-beldibi-fun__sun__imperial__sunland__resort__(ex__sunland__resor/',
        homeFunSunHotelName14: 'FUN&SUN Imperial Sunland Resort 5*',
        
        homeFunSunHotelLink15: '/Tours/Europe/Turkey/side/Manavgat/fun-sun-life-side-resort-hotel',
        homeFunSunHotelLinkClient15: '/hotel/europe-turkey-side-manavgat-fun__sun__life__side__resort__hotel/',
        homeFunSunHotelName15: 'FUN&SUN Life Side 5',
        
        homeFunSunHotelLink16: '/Tours/Europe/Turkey/belek/Bogazkent/FUN-SUN-Life-Belek',
        homeFunSunHotelLinkClient16: '/hotel/europe-turkey-belek-bogazkent-fun__sun__life__belek/',
        homeFunSunHotelName16: 'FUN&SUN Life Belek 5*',
        
        //КИПР
        homeFunSunHotelLink9: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/TUI-FUN-SUN-Panthea-Waterpark',
        homeFunSunHotelLinkClient9: '/hotel/europe-cyprus-ayia__napa-ayia__napa-tui__fun__sun__panthea__waterpark/',
        homeFunSunHotelName9: 'FUN&SUN Panthea Waterpark 4*',
        
        homeFunSunHotelLink10: '/Tours/Europe/Cyprus/Protaras/Protaras-city/vangelis-hotel-suites',
        homeFunSunHotelLinkClient10: '/hotel/europe-cyprus-protaras-protaras__city-vangelis__hotel__suites/',
        homeFunSunHotelName10: 'FUN&SUN Vangelis Hotel & Suite 4*',
        
        homeFunSunHotelLink18: '/Tours/Europe/Cyprus/Paphos/Paphos/fun-sun-king-evelthon-beach-hotel-resort',
        homeFunSunHotelLinkClient18: '/hotel/europe-cyprus-paphos-paphos-fun__sun__king__evelthon__beach__hotel__resort/',
        homeFunSunHotelName18: 'FUN&SUN King Evelthon Beach Hotel 5*',
        
        homeFunSunHotelLink19: '/Tours/Europe/Cyprus/Protaras/Protaras-city/fun-sun-anastasia-beach-hotel',
        homeFunSunHotelLinkClient19: '/hotel/europe-cyprus-protaras-protaras__city-fun__sun__anastasia__beach__hotel/',
        homeFunSunHotelName19: 'FUN&SUN Anastasia Beach Hotel 4*',
        
        //EGYPT ПОКА ТОЛЬКО UA
        homeFunSunHotelLink11: '/Tours/Africa/Egypt/Sharm-El-Sheikh/Sharm-El-Sheikh/FUN-SUN-Albatros-Palace',
        homeFunSunHotelLinkClient11: '/hotel/africa-egypt-sharm__el__sheikh-sharm__el__sheikh-fun__sun__albatros__palace/',
        homeFunSunHotelName11: 'FUN&SUN Albatros Palace 5*',
        
        //ЧЕРНОГРИЯ
        homeFunSunHotelLink12: '/Tours/Europe/Montenegro/Barska-Rivijera/chan/FUN-SUN-Pearl-Beach-Resort',
        homeFunSunHotelLinkClient12: '/hotel/europe-montenegro-barska__rivijera-chan-fun__sun__pearl__beach__resort/',
        homeFunSunHotelName12: 'FUN&SUN Pearl Beach Resort 4*',
        
        //ИСПАНИЯ
        homeFunSunHotelLink17: '/Tours/Europe/Spain/Costa-De-Barcelona/Malgrat-De-Mar/Sorra-Daurada',
        homeFunSunHotelLinkClient17: '/hotel/europe-spain-costa__de__barcelona-malgrat__de__mar-sorra__daurada/',
        homeFunSunHotelName17: 'FUN&SUN Sorra Daurada Splash 4*',
        
        //ГРЕЦИЯ
        homeFunSunHotelLink20: '/Tours/Europe/Greece/Corfu/Messonghi/sentido-apollo-palace',
        homeFunSunHotelLinkClient20: '/hotel/europe-greece-corfu-messonghi-sentido__apollo__palace/',
        homeFunSunHotelName20: 'FUN&SUN Apollo Palace 5*',
    }
});

//DAY NIGHT
const homePageDayNightBlockText = new Vue ({
    el: '#home-page-day-night-block-text',
    data: {
        homePageDayNightBlockLogo: 'https://www.tui.ru/getmedia/82b48419-a310-45c9-a9d0-4b4fe86c85de/logo-FN',
        
        homePageDayNightBlockTitleRU1: 'Концепция молодежного отдыха DAY&NIGHT Connected',
        homePageDayNightBlockTitleRU2: 'Отдых, заряжающий энергией!',
        homePageDayNightBlockTextRU1: 'DAY&NIGHT Connected - это целая Вселенная приключений, веселья и ярких положительных эмоций, которые запомнятся на всю жизнь!',
        homePageDayNightBlockTextRU2: 'Вселенная, которая состоит из Солнечной системы "Ultra All Inclusive" с планетами свежевыжатого апельсинового сока, национальных блюд, европейской кухни, ресторанов a la carte, и бесплатного импортного алкоголя; Галактики развлечений с созвездиями "Wellness & Fitness", где для вас проводят мастер-классы именитые инструкторы, и "Night Life" с бесплатным входом в популярные ночные клубы, и бесконечного Wi-Fi.',
        homePageDayNightBlockTextRU3: 'Отдохнуть в передвижениях можно на станции "Номер" в уютной форме из фирменных халатов и тапочек за чашкой горячего чая.',
        
        homePageDayNightBlockTitleBY1: 'Концепция молодежного отдыха DAY&NIGHT Connected',
        homePageDayNightBlockTitleBY2: 'Отдых, заряжающий энергией!',
        homePageDayNightBlockTextBY1: 'DAY&NIGHT Connected - это целая Вселенная приключений, веселья и ярких положительных эмоций, которые запомнятся на всю жизнь!',
        homePageDayNightBlockTextBY2: 'Вселенная, которая состоит из Солнечной системы "Ultra All Inclusive" с планетами свежевыжатого апельсинового сока, национальных блюд, европейской кухни, ресторанов a la carte, и бесплатного импортного алкоголя; Галактики развлечений с созвездиями "Wellness & Fitness", где для вас проводят мастер-классы именитые инструкторы, и "Night Life" с бесплатным входом в популярные ночные клубы, и бесконечного Wi-Fi.',
        homePageDayNightBlockTextBY3: 'Отдохнуть в передвижениях можно на станции "Номер" в уютной форме из фирменных халатов и тапочек за чашкой горячего чая.',
        
        homePageDayNightBlockTitleUA1: 'Концепция молодежного отдыха DAY&NIGHT Connected',
        homePageDayNightBlockTitleUA2: 'Отдых, заряжающий энергией!',
        homePageDayNightBlockTextUA1: 'DAY&NIGHT Connected - это целая Вселенная приключений, веселья и ярких положительных эмоций, которые запомнятся на всю жизнь!',
        /*homePageDayNightBlockTextUA2: 'Вселенная, которая состоит из Солнечной системы "Ultra All Inclusive" с планетами свежевыжатого апельсинового сока, национальных блюд, европейской кухни, ресторанов a la carte, и бесплатного импортного алкоголя; Галактики развлечений с созвездиями "Wellness & Fitness", где для вас проводят мастер-классы именитые инструкторы, и "Night Life" с бесплатным входом в популярные ночные клубы, и бесконечного Wi-Fi.',*/
        homePageDayNightBlockTextUA3: 'Отдохнуть в передвижениях можно на станции "Номер" в уютной форме из фирменных халатов и тапочек за чашкой горячего чая.',
        
        homePageDayNightBlockTitleEE1: 'Puhkus noortele DAY&NIGHT Connected',
        homePageDayNightBlockTitleEE2: 'Puhkus, mis annab energiat!',
        homePageDayNightBlockTextEE1: 'DAY&NIGHT Connected - see on seikluste, lõbustust ja positiivsete emotsioonide universum, mis jääb meelde koguks eluks!',
        homePageDayNightBlockTextEE2: '"Ultra All Inclusive" universum, mis koosneb värskelt pressitud mahladest, rahvuslikust ja Euroopa köögist, a la carte restoranidest ja tasuta imporditud alkohol; Meelelahutus galaktika: "Wellness - Fitness", kus kuulsad instruktorid teevad teile meistriklasse ning "Night Life" tasuta sissepääsuga populaarsetesse ööklubidesse ja piiramatu Wi-Fi ühendusega.',
        homePageDayNightBlockTextEE3: 'Välja puhata saate mugavas "hotellitoas" hommikumantli ja sussides, nautides tassikest teed või kohvi.',
        
        homePageDayNightBlockTitleLT1: 'Poilsio koncepcija jaunimui DAY&NIGHT Connected',
        homePageDayNightBlockTitleLT2: 'Poilsis jauniems ir aktyviems!',
        homePageDayNightBlockTextLT1: 'TUI DAY&NIGHT Connected - tai nuotykių ir teigiamų emocijų visata, kuri įsimins visam gyvenimui!',
        homePageDayNightBlockTextLT2: '',
        homePageDayNightBlockTextLT3: 'Poilsio koncepcija aktyvaus gyvenimo mylėtojams: nuo sporto užsiėmimų, SPA procedūrų iki teminių vakarėlių, komandinių žaidimų ir naktinių klubų',
        
        homePageDayNightBlockTitleLV1: 'Jauniešu atpūtas koncepcija DAY&NIGHT Connected',
        homePageDayNightBlockTitleLV2: 'Enerģijas pilna atpūta!',
        homePageDayNightBlockTextLV1: 'TUI DAY&NIGHT Connected - vesela izklaides, pozitīvo emociju un piedzīvojumu pasaule, kuru jūs atcerēsieties visu mūžu!',
        homePageDayNightBlockTextLV2: 'Pasaule, kas sastāv no "Ultra All Inclusive" saules sistēmas, ar svaigi spiesto sulu, nacionālo ēdienu, eiropas virtuves, A La Carte restorānu un bezmaksas importēto alkoholisko dzērienu planētām; Izklaides galaktika ar zvaigznājiem Wellness - Fitness", kur notiek meistarklases ar slaveniem instruktoriem un "Night Life" ar bezmaksas ieeju populārajos nakts klubos, un bezgalīgs Wi-Fi.',
        homePageDayNightBlockTextLV3: 'Atpūsties no burzmas var stacijā "Numurs" malkojot karstu tēju ērtā peldmētelī un čībās.',
        
    }
});

const homePageDayNightBlockVideoHotels = new Vue ({
    el: '#home-page-day-night-block-video-hotels',
    data: {
        homeDayNightBlockPageLink: '/concepts/tui-day-night/',
        
        
        homeDayNightBlockPageImage: 'https://www.tui.ru/getmedia/c91a3a4a-bded-4e06-99c3-a6befd390d32/play',
        homeDayNightBlockPageLinkTextRU: 'Подробнее',
        homeDayNightBlockPageTurkeyRU: 'Турция',
        homeDayNightBlockPageCyprysRU: 'Кипр',
        
        homeDayNightBlockPageLinkTextBY: 'Подробнее',
        homeDayNightBlockPageTurkeyBY: 'Турция',
        
        homeDayNightBlockPageLinkTextUA: 'Подробнее',
        homeDayNightBlockPageTurkeyUA: 'Турция',
        homeDayNightBlockPageEgyptUA: 'Египет',
        
        homeDayNightBlockPageLinkTextEE: 'Täpsemalt',
        homeDayNightBlockPageTurkeyEE: 'Türgi',
        homeDayNightBlockPageCyprysEE: 'Küpros',
        homeDayNightBlockPageEgyptEE: 'Egiptus',
        
        homeDayNightBlockPageLinkTextLT: 'Plačiau',
        homeDayNightBlockPageTurkeyLT: 'Turkija',
        homeDayNightBlockPageCyprysLT: 'Kipras',
        homeDayNightBlockPageEgyptLT: 'Egiptas',
        
        homeDayNightBlockPageLinkTextLV: 'Sīkāk',
        homeDayNightBlockPageTurkeyLV: 'Turcija',
        homeDayNightBlockPageCyprysLV: 'Kipra',
        homeDayNightBlockPageEgyptLV: 'Ēģipte',
        
        homeFunSunHotelLink1: '/Tours/Europe/Turkey/kemer/Kemer-Center/TUI-DAY-NIGHT-Connected-Club-Hydros',
        homeFunSunHotelLinkClient1: '/hotel/europe-turkey-kemer-kemer__center-tui__day__night__connected__club__hydros/',
        homeFunSunHotelName1: 'DAY&NIGHT Connected Club Hydros 5*',
        
        homeFunSunHotelLink2: '/Tours/Europe/Turkey/Kemer/Kemer-Center/day-night-connected-imperial-turkiz-hotel',
        homeFunSunHotelLinkClient2: '/hotel/europe-turkey-kemer-kemer__center-day__night__connected__imperial__turkiz__hotel/',
        homeFunSunHotelName2: 'DAY&NIGHT Connected Imperial Turkiz Hotel',
    
        //ТОЛЬКО НА УКРАИНЕ
        homeFunSunHotelLink3: '/Tours/Africa/Egypt/Sharm-El-Sheikh/Sharm-El-Sheikh/day-night-connected-tropitel-waves',
        homeFunSunHotelLinkClient3: '/hotel/africa-egypt-sharm__el__sheikh-sharm__el__sheikh-day__night__connected__tropitel__waves/',
        homeFunSunHotelName3: 'DAY&NIGHT Connected Tropitel Waves 5*',
        
        homeFunSunHotelLink4: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/day-night-connected-seasons',
        homeFunSunHotelLinkClient4: '/hotel/europe-cyprus-ayia__napa-ayia__napa-day__night__connected__seasons/',
        homeFunSunHotelName4: 'DAY&NIGHT Connected  Season 4*',
    }
});

//TOUCAN
const homePageToucanBlockText = new Vue ({
    el: '#home-page-toucan-block-text',
    data: {
        homePageToucanBlockLogo: 'https://www.tui.ru/getmedia/a388ed46-64bc-4a03-a888-ae08a95cf843/logo-mini-toucan',
        
        homePageToucanBlockTitleRU1: 'Детские клубы МИНИ ТУКАН',
        homePageToucanBlockTitleRU2: 'Главный секрет отличного отдыха с детьми',
        homePageToucanBlockTextRU1: 'Детский клуб TUI Мини Тукан - территория отдыха с развивающей и игровой программой для детей от 4 до 12 лет, созданной профессионалами, с учетом пожеланий родителей. Отели с детскими клубами Мини Тукан позволяют провести долгожданный отпуск в спокойствии за безопасность и развлечения ребенка для родителей, весело и познавательно для детей.',
        homePageToucanBlockTextRU2: 'Что такое клуб Мини Тукан?',
        homePageToucanBlockSpisokItemRU1: 'Программа для детей 2 возрастов: Тукан Kids 4-7 лет и Тукан Junior 8-12 лет.',
        homePageToucanBlockSpisokItemRU2: 'Клуб работает 6 дней в неделю, с 10-00 до 12-30, с 14-30 до 17-00.',
        homePageToucanBlockSpisokItemRU3: 'Вечером - мини-диско.',
        
        homePageToucanBlockTitleBY1: 'Детские клубы МИНИ ТУКАН',
        homePageToucanBlockTitleBY2: 'Главный секрет отличного отдыха с детьми',
        homePageToucanBlockTextBY1: 'Детский клуб TUI Мини Тукан - территория отдыха с развивающей и игровой программой для детей от 4 до 12 лет, созданной профессионалами, с учетом пожеланий родителей. Отели с детскими клубами Мини Тукан позволяют провести долгожданный отпуск в спокойствии за безопасность и развлечения ребенка для родителей, весело и познавательно для детей.',
        homePageToucanBlockTextBY2: 'Что такое клуб Мини Тукан?',
        homePageToucanBlockSpisokItemBY1: 'Программа для детей 2 возрастов: Тукан Kids 4-7 лет и Тукан Junior 8-12 лет.',
        homePageToucanBlockSpisokItemBY2: 'Клуб работает 6 дней в неделю, с 10-00 до 12-30, с 14-30 до 17-00.',
        homePageToucanBlockSpisokItemBY3: 'Вечером - мини-диско.',
        
        homePageToucanBlockTitleUA1: 'Детские клубы МИНИ ТУКАН',
        homePageToucanBlockTitleUA2: 'Главный секрет отличного отдыха с детьми',
        homePageToucanBlockTextUA1: 'Детский клуб TUI Мини Тукан - территория отдыха с развивающей и игровой программой для детей от 4 до 12 лет, созданной профессионалами, с учетом пожеланий родителей. Отели с детскими клубами Мини Тукан позволяют провести долгожданный отпуск в спокойствии за безопасность и развлечения ребенка для родителей, весело и познавательно для детей.',
        homePageToucanBlockTextUA2: 'Что такое клуб Мини Тукан?',
        homePageToucanBlockSpisokItemUA1: 'Программа для детей 2 возрастов: Тукан Kids 4-7 лет и Тукан Junior 8-12 лет.',
        homePageToucanBlockSpisokItemUA2: 'Клуб работает 6 дней в неделю, с 10-00 до 12-30, с 14-30 до 17-00.',
        homePageToucanBlockSpisokItemUA3: 'Вечером - мини-диско.',
        
        homePageToucanBlockTitleEE1: 'Mini Toucan lasteklubid',
        homePageToucanBlockTitleEE2: 'Suurepärase puhkuse peamine saladus',
        homePageToucanBlockTextEE1: 'Lasteklubi Mini Toucan - puhkuse konseptsioon arengu- ja mänguprogrammidega lastele vansues 4 kuni 12 aastat, mis on koostatud professionaalide poolt, võttes arvesse vanemate soove. Hotellid Mini Toucan lasteklubidega võimaldavad teil veeta pikka aega oodatud puhkust olles kindel et laps on ohutuses.',
        homePageToucanBlockTextEE2: 'Mis on Mini Toucan klubi?',
        homePageToucanBlockSpisokItemEE1: 'Meelelahutusprogrammid laste kahele vanuserühmadele: Toucan Kids 4-7 aastastele ja Toucan Junior 8-12 aastastele',
        homePageToucanBlockSpisokItemEE2: 'Lasteklubi on avatud 6 päeva nädalas, kella 10:00st kuni kella 22:00ni, lõuna ja õhtusöögi vaheajaga',
        homePageToucanBlockSpisokItemEE3: 'Õhtul - minidisko ja multikad.',
        
        homePageToucanBlockTitleLT1: 'MINI TOUCAN vaikų klubai',
        homePageToucanBlockTitleLT2: 'Puikaus poilsio su vaikais paslaptis',
        homePageToucanBlockTextLT1: 'Mini Toucan vaikų klubai - poilsio zona su programa vaikams nuo 4 iki 12 metų, sukurta specialistų, atsižvelgiant į tėvų pageidavimus.',
        homePageToucanBlockTextLT2: 'Mini Toucan - kas tai?',
        homePageToucanBlockSpisokItemLT1: 'Programa įvairaus amžiaus vaikams: Toucan Kids 4-7 m. ir Toucan Junior 8-12 m.',
        homePageToucanBlockSpisokItemLT2: 'Klubas veikia 6 dienas per savaitę, nuo 10 iki 17 val su pietų pertrauka.',
        homePageToucanBlockSpisokItemLT3: 'Vakarais - vaikų diskoteka.',
        
        homePageToucanBlockTitleLV1: 'Bērnu klubi Mini Toucan',
        homePageToucanBlockTitleLV2: 'Galvenā atslēga veiksmīgai atpūtai kopā ar bērniem',
        homePageToucanBlockTextLV1: 'Bērnu klubs Mini Toucan - profesionāļu veidota izglītojošī-izklaidējoša atpūtas teritorija ar spēļu programmu bērniem no 4 līdz 12 gadiem, ņemot vērā vecāku viedokli. Viesnīcas ar bērnu klubiem Mini Toucan piedāvā iespēju pavadīt ilgi gaidīto atvaļinājumu, nepārdzīvojot par bērnu drošību un izklaidi, bet bērniem jautri un izglītojoši atpūsties.',
        homePageToucanBlockTextLV2: 'Kas ir bērnu klubs Mini Toucan?',
        homePageToucanBlockSpisokItemLV1: 'Programma bērniem divās vecuma grupās: Toucan Kids 4-7 g. un Toucan Junior 8-12 g.',
        homePageToucanBlockSpisokItemLV2: 'Klubs ir atvērts 6 dienas nedēļā no 10-00 līdz 16-30 ar pusdienu pārtraukumiem.',
        homePageToucanBlockSpisokItemLV3: 'Vakaros - mini-diskotēka.',
    }
    
});

const homePageToucanBlockVideoHotels = new Vue ({
    el: '#home-page-toucan-block-video-hotels',
    data: {
        homeToucanBlockPageLink: '/concepts/tui-toucan/',
        
        
        homeToucanBlockPageImage: 'https://www.tui.ru/getmedia/c91a3a4a-bded-4e06-99c3-a6befd390d32/play',
        homeDToucanBlockPageLinkTextRU: 'Подробнее',
        homeToucanBlockPageTurkeyRU: 'Турция',
        homeToucanBlockPageCyprusRU: 'Кипр',
        homeToucanBlockPageMontenegroRU: 'Черногория',
        homeToucanBlockPageItalyRU: 'Италия',
        homeToucanBlockPageSpainRU: 'Испания',
        homeToucanBlockPageRussiaRU: 'Россия, Сочи',
        homeToucanBlockPageOaeRU: 'ОАЭ',
        
        homeDToucanBlockPageLinkTextBY: 'Подробнее',
        homeToucanBlockPageTurkeyBY: 'Турция',
        homeToucanBlockPageCyprusBY: 'Кипр',
        homeToucanBlockPageMontenegroBY: 'Черногория',
        homeToucanBlockPageItalyBY: 'Италия',
        homeToucanBlockPageSpainBY: 'Испания',
        homeToucanBlockPageRussiaBY: 'Россия, Сочи',
        homeToucanBlockPageOaeBY: 'ОАЭ',
        
        homeToucanBlockPageLinkTextUA: 'Подробнее',
        homeToucanBlockPageTurkeyUA: 'Турция',
        homeToucanBlockPageCyprusUA: 'Кипр',
        homeToucanBlockPageMontenegroUA: 'Черногория',
        homeToucanBlockPageItalyUA: 'Италия',
        homeToucanBlockPageSpainUA: 'Испания',
        homeToucanBlockPageRussiaUA: 'Россия, Сочи',
        homeToucanBlockPageOaeUA: 'ОАЭ',
        
        homeToucanBlockPageLinkTextEE: 'Täpsemalt',
        homeToucanBlockPageTurkeyEE: 'Türgi',
        homeToucanBlockPageCyprusEE: 'Küpros',
        homeToucanBlockPageMontenegroEE: 'Montenegro',
        homeToucanBlockPageItalyEE: 'Itaalia',
        homeToucanBlockPageSpainEE: 'Hispaania',
        homeToucanBlockPageRussiaEE: '',
        homeToucanBlockPageOaeEE: 'AÜE',
        
        homeToucanBlockPageLinkTextLT: 'Plačiau',
        homeToucanBlockPageTurkeyLT: 'Turkija',
        homeToucanBlockPageCyprusLT: 'Kipras',
        homeToucanBlockPageMontenegroLT: 'Juodkalnija',
        homeToucanBlockPageItalyLT: 'Italija',
        homeToucanBlockPageSpainLT: 'Ispanija',
        homeToucanBlockPageRussiaLT: 'Rusija',
        homeToucanBlockPageOaeLT: 'OAE',
        
        homeToucanBlockPageLinkTextLV: 'Sīkāk',
        homeToucanBlockPageTurkeyLV: 'Turcija',
        homeToucanBlockPageCyprusLV: 'Kipra',
        homeToucanBlockPageMontenegroLV: 'Melnkalne',
        homeToucanBlockPageItalyLV: 'Itālija',
        homeToucanBlockPageSpainLV: 'Spānija',
        homeToucanBlockPageRussiaLV: 'Krievija',
        homeToucanBlockPageOaeLV: 'AAE',
               
        homeToucanHotelLink1: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Club',
        homeToucanHotelLinkClient1: '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__miarosa__ghazal__resort/',
        homeToucanHotelName1: 'Pegasos Club 4*',
        
        homeToucanHotelLink2: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Resort',
        homeToucanHotelLinkClient2: '/hotel/europe-turkey-alanya-incekum-pegasos__resort/',
        homeToucanHotelName2: 'Pegasos Resort 5*',
        
        homeToucanHotelLink3: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Royal',
        homeToucanHotelLinkClient3: '/hotel/europe-turkey-alanya-incekum-pegasos__royal/',
        homeToucanHotelName3: 'Pegasos Royal 5*',
        
        /*homeToucanHotelLink4: '/Tours/Europe/Turkey/Kemer/Camyuva/Kilikya-Resort-Camyuva',
        homeToucanHotelLinkClient4: '/hotel/europe-turkey-kemer-camyuva-kilikya__resort__camyuva/',
        homeToucanHotelName4: 'Kilikya Resort Camyuva 5*',*/
        
        homeToucanHotelLink5: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/Christofinia/',
        homeToucanHotelLinkClient5: '/hotel/europe-cyprus-ayia__napa-ayia__napa-christofinia/',
        homeToucanHotelName5: 'Christofinia 4*',
        
        homeToucanHotelLink6: '/Tours/Europe/Cyprus/Limassol-Resort/Limassol-City/St-Raphael-Resort/',
        homeToucanHotelLinkClient6: '/hotel/europe-cyprus-limasol__resort-limasol__city-st__raphael__resort/',
        homeToucanHotelName6: 'St Raphael 5*',
        
        homeToucanHotelLink7: '/tours/europe/montenegro/budvanska-rivijera/budva/aleksandar/',
        homeToucanHotelLinkClient7: '/hotel/europe-montenegro-budvanska__rivijera-budva-aleksandar/',
        homeToucanHotelName7: 'Aleksandar 4*',
        
        homeToucanHotelLink8: '/tours/europe/montenegro/budvanska-rivijera/petrovac/castellastva/',
        homeToucanHotelLinkClient8: '/hotel/europe-montenegro-budvanska__rivijera-petrovac-castellastva/',
        homeToucanHotelName8: 'Castellastva 4*',
        
        homeToucanHotelLink9: '/Tours/Europe/Italy/Calabria/Pizzo/Valtur-Garden-Calabria',
        homeToucanHotelLinkClient9: '/hotel/europe-italy-calabria-pizzo-garden__resort__calabria/',
        homeToucanHotelName9: 'Falkensteiner Club Funimation Calabria (ex. Garden Resort Calabria) 4*',
        
        homeToucanHotelLink10: '/Tours/Europe/Spain/Costa-Dorada/La-Pineda/Estival-Park-Hotel-Resort',
        homeToucanHotelLinkClient10: '/hotel/europe-spain-costa__dorada-la__pineda-estival__park__hotel__resort/',
        homeToucanHotelName10: 'Estival Park Hotel Resort 4*',
        
        homeToucanHotelLink11: '/Tours/Europe/Spain/Costa-Brava/Tossa-De-Mar/Hotansa-Tossa',
        homeToucanHotelLinkClient11: '/hotel/europe-spain-costa__brava-tossa__de__mar-don__juan__tossa/',
        homeToucanHotelName11: 'Don Juan Tossa 4*',
        
        homeToucanHotelLink12: '/Tours/Europe/Russia/Sochi/Imeretinskaya-Bukhta/barhatnye-sezony-gorod-otel-russquiy-dom',
        homeToucanHotelLinkClient12: '/hotel/europe-russia-sochi-imeretinskaya__bukhta-barhatnye__sezony__gorod__otel__russquiy__dom/',
        homeToucanHotelName12: 'Бархатные сезоны 3*',
        
        homeToucanHotelLink13: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-village-golf-beach-resort',
        homeToucanHotelLinkClient13: '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__village__golf__beach__resort/',
        homeToucanHotelName13: 'Al Hamra Village Golf & Beach Resort 4*',
        
        homeToucanHotelLink14: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-residence',
        homeToucanHotelLinkClient14: '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__residence/',
        homeToucanHotelName14: 'Al Hamra Residence 5*',
        
        homeToucanHotelLink15: '/Tours/Asia/UAE/Fujairah/Fujairah-beach-hotels/blue-diamond-alsalam-resort',
        homeToucanHotelLinkClient15: '/hotel/asia-uae-fujairah-fujairah__beach__hotels-blue__diamond__alsalam__resort/',
        homeToucanHotelName15: 'Blue Diamond AlSalam Resort 5*',
        
        homeToucanHotelLink16: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/tasia-maris-gardens',
        homeToucanHotelLinkClient16: '/hotel/europe-cyprus-ayia__napa-ayia__napa-tasia__maris__gardens/',
        homeToucanHotelName16: 'Tasia Maris Garden 3*',
        
        //ЧЕРНОГРИЯ
        homeToucanHotelLink17: '/Tours/Europe/Montenegro/Barska-Rivijera/chan/FUN-SUN-Pearl-Beach-Resort',
        homeToucanHotelLinkClient17: '/hotel/europe-montenegro-barska__rivijera-chan-fun__sun__pearl__beach__resort/',
        homeToucanHotelName17: 'Pearl Beach Resort 4*',
    }
});