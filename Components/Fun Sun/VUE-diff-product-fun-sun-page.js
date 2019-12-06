/*
Привет.
Ниже файл с информацией для ВСЕХ страниц Fun Sun для клиентского и агентского сайте (RU BY UA EE LT LV)

Для того чтобы изменить информацию достаточно заменить ее в этом файле и обновить файл который лежит на сайте tui.ru \ media \ новый сайт \ концепции \ TUI Fun Sun \ js \ VUE-diff-product-fun-sun-page.js - ВНИМАНИЕ! именно нажать на кнопку заменить, иначе придется менять ссылку на всех страницах.

Обрати внимение на название переменных в файле html, если в конце есть указание к стране (например имя оканчивается myNameRU - значит это перевод на русский, myNameEE - значит это перевод на эстонский и тп)

Также обрати внимание на название ссылок - если оканчивается на Client - значит ссылка на клиент, если Agent - значит ссылка на агенте.

Некоторые страницы в консоли могут ругаться на отсутствие некоторых элементов, это нормально, просто у нас один файл на все страницы и соответственно на некоторых страницах нет элементов с других страниц, поэтому не обращай внимание.

*/


const funSunPageHeaderMenu = new Vue ({
    el: '#fun-sun-page-header-menu',
    data:{
        //background img
        funSunPageHeaderMenuBackground: 'background: url(https://www.tui.ru/getmedia/f4f3d6f3-1c20-4dab-8f55-7ee78b6dfe51/photo-2)',
        
        funSunPageHeaderMenuLogo: 'https://www.tui.ru/getmedia/a43e4cf0-4244-45b4-8bd4-275b7d8ba1a9/logoTopFN',
        
        funSunPageHeaderMenuTitleRU: 'FUN&SUN для вас - это:',
        funSunPageHeaderMenuTitleBY: 'FUN&SUN для вас - это:',
        funSunPageHeaderMenuTitleUA: 'FUN&SUN для вас - это:',
        funSunPageHeaderMenuTitleEE: 'FUN&SUN on:',
        funSunPageHeaderMenuTitleLT: 'FUN&SUN tai:',
        funSunPageHeaderMenuTitleLV: 'FUN&SUN jums - tas ir:',
        
        funSunPageHeaderMenuItemLogo1: 'https://www.tui.ru/getmedia/2339a301-2a1a-4026-b219-722c7336cce0/beachball',
        funSunPageHeaderMenuItemNameRU1: 'Клуб Тукан для детей от 4-х лет',
        funSunPageHeaderMenuItemNameBY1: 'Клуб Тукан для детей от 4-х лет',
        funSunPageHeaderMenuItemNameUA1: 'Клуб Тукан для детей от 4-х лет',
        funSunPageHeaderMenuItemNameEE1: 'Klubi Toucan lastele alates 4. eluaastast',
        funSunPageHeaderMenuItemNameLT1: 'Toucan klubas vaikams nuo 4-ių metų',
        funSunPageHeaderMenuItemNameLV1: 'Klubs Toucan bērniem no 4 gadiem',
        
        funSunPageHeaderMenuItemLogo2: 'https://www.tui.ru/getmedia/fe91550a-2e69-4936-b82f-9550adee71b3/wifi',
        funSunPageHeaderMenuItemNameRU2: 'Быстрый Wi-Fi',
        funSunPageHeaderMenuItemNameBY2: 'Быстрый Wi-Fi',
        funSunPageHeaderMenuItemNameUA2: 'Быстрый Wi-Fi',
        funSunPageHeaderMenuItemNameEE2: 'Kiire Wi-Fi',
        funSunPageHeaderMenuItemNameLT2: 'Spartusis internetas',
        funSunPageHeaderMenuItemNameLV2: 'Ātrgaitas Wi-Fi',
        
        funSunPageHeaderMenuItemLogo3: 'https://www.tui.ru/getmedia/70559937-c2f6-4cce-950b-b2921e37c042/p',
        funSunPageHeaderMenuItemNameRU3: 'Chill Out Lounge для взрослых',
        funSunPageHeaderMenuItemNameBY3: 'Chill Out Lounge для взрослых',
        funSunPageHeaderMenuItemNameUA3: 'Chill Out Lounge для взрослых',
        funSunPageHeaderMenuItemNameEE3: 'Chill Out Lounge täiskasvanutele',
        funSunPageHeaderMenuItemNameLT3: 'Chill Out Lounge suaugusiems',
        funSunPageHeaderMenuItemNameLV3: 'Chill Out Lounge pieaugušajiem',
        
        funSunPageHeaderMenuItemLogo4: 'https://www.tui.ru/getmedia/b6a1ff43-84af-4cee-986e-3feecc9e05f2/orange',
        funSunPageHeaderMenuItemNameRU4: 'Апельсиновый фреш на завтрак',
        funSunPageHeaderMenuItemNameBY4: 'Апельсиновый фреш на завтрак',
        funSunPageHeaderMenuItemNameUA4: 'Апельсиновый фреш на завтрак',
        funSunPageHeaderMenuItemNameEE4: 'Hommikul värskelt pressitud apelsinimahl',
        funSunPageHeaderMenuItemNameLT4: 'Šviežiai spaustos apelsinų sultys pusryčių metu',
        funSunPageHeaderMenuItemNameLV4: 'Svaigi spiesta apelsīnu sula brokastu laikā',
        
        funSunPageHeaderMenuItemLogo5: 'https://www.tui.ru/getmedia/7b192985-2edd-4684-8df7-6d8a08d09918/ice',
        funSunPageHeaderMenuItemNameRU5: 'Мороженое для наших гостей',
        funSunPageHeaderMenuItemNameBY5: 'Мороженое для наших гостей',
        funSunPageHeaderMenuItemNameUA5: 'Мороженое для наших гостей',
        funSunPageHeaderMenuItemNameEE5: 'Jäätis meie külalistele',
        funSunPageHeaderMenuItemNameLT5: 'Ledai',
        funSunPageHeaderMenuItemNameLV5: 'Saldējums mūsu viesiem',
        
        funSunPageHeaderMenuItemLogo6: 'https://www.tui.ru/getmedia/c4094300-05e0-46f5-9b31-cd54cee92900/disco',
        funSunPageHeaderMenuItemNameRU6: 'Концерты звёзд все лето: Пропаганда, Белый орел, Rumbero&s, Estradarada, ViRUS!, Корни',
        funSunPageHeaderMenuItemNameBY6: 'Концерты звёзд все лето: Пропаганда, Белый орел, Rumbero&s, Estradarada, ViRUS!, Корни',
        funSunPageHeaderMenuItemNameUA6: 'Концерты звёзд все лето: Пропаганда, Белый орел, Rumbero&s, Estradarada, ViRUS!, Корни',
        funSunPageHeaderMenuItemNameEE6: 'Kuulsad esinejad: Propaganda, White Eagle, Rumbero&s, Estradarada, ViRUS!, Korni',
        funSunPageHeaderMenuItemNameLT6: 'Žvaigždžių koncertai visą vasarą: Propaganda, Rumbero&s, Estradarada, ViRUS!, Korni',
        funSunPageHeaderMenuItemNameLV6: 'Slaveno zvaiģžņu koncerti visas vasaras garumā: Propaganda, Belij orel, Rumbero&s, Estradarada, ViRUS!, Korni',
        
        funSunPageHeaderMenuItemLogo7: 'https://www.tui.ru/getmedia/640ea075-2c0b-4b3d-9740-832354781385/n',
        funSunPageHeaderMenuItemNameRU7: 'Мастер-классы по фото, кулинарии и иностранному языку',
        funSunPageHeaderMenuItemNameBY7: 'Мастер-классы по фото, кулинарии и иностранному языку',
        funSunPageHeaderMenuItemNameUA7: 'Мастер-классы по фото, кулинарии и иностранному языку',
        funSunPageHeaderMenuItemNameEE7: 'Foto, kulinaaria ja võõrkeele meistriklassid',
        funSunPageHeaderMenuItemNameLT7: 'Mobiliosios fotografijos, kulinarijos ir užsienio kalbos pamokos',
        funSunPageHeaderMenuItemNameLV7: 'Fotogrāfijas, kulinārijas un ārzemju valodas apgūšanas meistarklases',
        
        funSunPageHeaderMenuItemLogo8: 'https://www.tui.ru/getmedia/a5cb6130-9605-4b09-99e3-b52bd2e57934/f',
        funSunPageHeaderMenuItemNameRU8: 'Fitness & Wellness с инструкторами-виртуозами',
        funSunPageHeaderMenuItemNameBY8: 'Fitness & Wellness с инструкторами-виртуозами',
        funSunPageHeaderMenuItemNameUA8: 'Fitness & Wellness с инструкторами-виртуозами',
        funSunPageHeaderMenuItemNameEE8: 'Fitness & Wellness koos treeneritega',
        funSunPageHeaderMenuItemNameLT8: 'Fitness & Wellness su intruktoriais',
        funSunPageHeaderMenuItemNameLV8: 'Fitness & Wellness с pasaules slaveniem instruktoriem',
        
        funSunPageHeaderMenuVideoPlay: 'https://www.tui.ru/getmedia/8f5429a2-487b-4807-bec3-bec1a2088a67/play',
    }
});

const funSunPageMenu = new Vue ({
    el: '#fun-sun-page-menu',
    data: {
        
        funSunPageMenuItemRU1: 'Это FUN&SUN',
        funSunPageMenuItemBY1: 'Это FUN&SUN',
        funSunPageMenuItemUA1: 'Это FUN&SUN',
        funSunPageMenuItemEE1: 'See on FUN&SUN',
        funSunPageMenuItemLT1: 'Tai FUN&SUN',
        funSunPageMenuItemLV1: 'Tas ir FUN&SUN',
        funSunPageMenuItemLinkClient1: '/concepts/tui-fun-sun',
        funSunPageMenuItemLinkAgent1: '/concepts/tui-fun-sun',
        
        
        funSunPageMenuItemRU2: 'Отели',
        funSunPageMenuItemBY2: 'Отели',
        funSunPageMenuItemUA2: 'Отели',
        funSunPageMenuItemEE2: 'Hotellid',
        funSunPageMenuItemLT2: 'Viešbučiai',
        funSunPageMenuItemLV2: 'Viesnīcas',
        funSunPageMenuItemLinkClient2: '',
        funSunPageMenuItemLinkAgent2: '',
        
        funSunPageMenuItemRU3: 'Развлечения и спорт',
        funSunPageMenuItemBY3: 'Развлечения и спорт',
        funSunPageMenuItemUA3: 'Развлечения и спорт',
        funSunPageMenuItemEE3: 'Meelelahutus ja sport',
        funSunPageMenuItemLT3: 'Pramogos ir sportas',
        funSunPageMenuItemLV3: 'Izklaide un sports',
        funSunPageMenuItemLinkClient3: '/concepts/tui-fun-sun-entertainment-program-children-fs/',
        funSunPageMenuItemLinkAgent3: '/concepts/tui-fun-sun/entertainment-program-children-fs/',
        
        funSunPageMenuItemRU4: 'Для детей',
        funSunPageMenuItemBY4: 'Для детей',
        funSunPageMenuItemUA4: 'Для детей',
        funSunPageMenuItemEE4: 'Lastele',
        funSunPageMenuItemLT4: 'Vaikams',
        funSunPageMenuItemLV4: 'Bērniem',
        funSunPageMenuItemLinkClient4: '/concepts/tui-fun-sun-for-children-fs/',
        funSunPageMenuItemLinkAgent4: '/concepts/tui-fun-sun/for-children-fs/',
        
        funSunPageMenuItemRU5: 'Афиша 2019',
        funSunPageMenuItemBY5: 'Афиша 2019',
        funSunPageMenuItemUA5: 'Афиша 2019',
        funSunPageMenuItemEE5: '2019 üritused',
        funSunPageMenuItemLT5: '2019 metų programa',
        funSunPageMenuItemLV5: 'Afiša 2019',
        funSunPageMenuItemLinkClient5: '/concepts/tui-fun-sun-concerts-and-master-classes',
        funSunPageMenuItemLinkAgent5: '/concepts/tui-fun-sun/concerts-and-master-classes',
        
        funSunPageMenuItemRU6: 'Перейти к бронированию',
        funSunPageMenuItemBY6: 'Перейти к бронированию',
        funSunPageMenuItemUA6: 'Перейти к бронированию',
        funSunPageMenuItemEE6: 'Broneeri',
        funSunPageMenuItemLT6: 'Pasirinkti',
        funSunPageMenuItemLV6: 'Pāriet pie rezervācijam',
        funSunPageMenuItemLinkClient6RU: 'https://www.tui.ru/search/?HotelAttribute=1000718&adults=2&children=0&dateDelta=3&dateFrom=1563483600000&directionCountryTo=18803&directionFrom=274286&maxCost=2023286&minCost=39400&newbies=0&nightsFrom=7&nightsTo=14&page=0&selected=0&sortType=5',
        funSunPageMenuItemLinkAgent6RU: 'http://b2b.tui.ru/default.php?page=search_tour',
        funSunPageMenuItemLinkClient6BY: 'http://www.tui.by/search/?adults=2&children=0&dateDelta=3&dateFrom=1567803600000&directionCountryTo=18803&directionFrom=381686&maxCost=10154&minCost=2343&newbies=0&nightsFrom=7&nightsTo=14&page=0&selected=0&sortType=5',
        funSunPageMenuItemLinkAgent6BY: 'http://b2b.tui.by/default.php?page=search_tour',
        funSunPageMenuItemLinkClient6UA: 'https://www.tui.ua/search/?HotelAttribute=1000718&adults=2&children=0&dateDelta=3&dateFrom=1567803600000&directionCountryTo=18803&directionFrom=235144&maxCost=404865&minCost=13427&newbies=0&nightsFrom=7&nightsTo=14&page=0&selected=0&sortType=5',
        funSunPageMenuItemLinkAgent6UA: 'http://b2b.tui.ua/default.php?page=search_tour',
        funSunPageMenuItemLinkClient6EE: 'https://www.tui.ee/search/?HotelAttribute=1000718&adults=2&children=0&dateDelta=3&dateFrom=1567630800000&directionCountryTo=18803&directionFrom=387442&maxCost=17019&minCost=711&newbies=0&nightsFrom=7&nightsTo=14&page=0&selected=0&sortType=5',
        funSunPageMenuItemLinkAgent6EE: 'https://b2b.tuibaltics.eu/default.php?page=search_tour',
        funSunPageMenuItemLinkClient6LT: 'https://www.tui.lt/search/?HotelAttribute=1000718&adults=2&children=0&dateDelta=3&dateFrom=1567630800000&directionCountryTo=18803&directionFrom=389090&maxCost=17084&minCost=534&newbies=0&nightsFrom=7&nightsTo=14&page=0&selected=0&sortType=5',
        funSunPageMenuItemLinkAgent6LT: 'https://b2b.tuibaltics.eu/default.php?page=search_tour',
        funSunPageMenuItemLinkClient6LV: 'https://www.tui.lv/search/?adults=2&children=0&dateDelta=3&dateFrom=1567803600000&directionCountryTo=18803&directionFrom=352203&maxCost=2098&minCost=809&newbies=0&nightsFrom=7&nightsTo=14&page=0&selected=0&sortType=5',
        funSunPageMenuItemLinkAgent6LV: 'https://b2b.tuibaltics.eu/default.php?page=search_tour',
    }
});

const funSunPageMenuTitleHotels = new Vue ({
    el: '#advantagesHotels',
    data: {
        funSunPageMenuAdvantagiesTitleRU: 'Преимущества отелей с концепцией FUN&SUN',
        funSunPageMenuAdvantagiesTitleBY: 'Преимущества отелей с концепцией FUN&SUN',
        funSunPageMenuAdvantagiesTitleUA: 'Преимущества отелей с концепцией FUN&SUN',
        funSunPageMenuAdvantagiesTitleEE: 'FUN&SUN hotellide eelised',
        funSunPageMenuAdvantagiesTitleLT: 'FUN&SUN koncepcijos privalumai',
        funSunPageMenuAdvantagiesTitleLV: 'Viesnīcu priekšrocības ar FUN&SUN koncepciju',
        
    }
});

const funSunPageMenuAdventagiesHotelsMenu = new Vue ({
    el: '#fun-sun-page-hotels-adventagies-hotels-menu',
    data: {
        funSunPageMenuAdventagiesHotelsMenuItemRU1: 'В номере как дома',
        funSunPageMenuAdventagiesHotelsMenuItemBY1: 'В номере как дома',
        funSunPageMenuAdventagiesHotelsMenuItemUA1: 'В номере как дома',
        funSunPageMenuAdventagiesHotelsMenuItemEE1: 'Hotellis nagu kodus',
        funSunPageMenuAdventagiesHotelsMenuItemLT1: 'Kambaryje kaip namuose',
        funSunPageMenuAdventagiesHotelsMenuItemLV1: 'Numurā kā mājās',
        
        funSunPageMenuAdventagiesHotelsMenuItemRU2: 'Пройдитесь по территории',
        funSunPageMenuAdventagiesHotelsMenuItemBY2: 'Пройдитесь по территории',
        funSunPageMenuAdventagiesHotelsMenuItemUA2: 'Пройдитесь по территории',
        funSunPageMenuAdventagiesHotelsMenuItemEE2: 'Vaadake territooriumi',
        funSunPageMenuAdventagiesHotelsMenuItemLT2: 'Pasivaikščiokite po teritoriją',
        funSunPageMenuAdventagiesHotelsMenuItemLV2: 'Pastaiga pa teritoriju',
        
        funSunPageMenuAdventagiesHotelsMenuItemRU3: 'Для детей',
        funSunPageMenuAdventagiesHotelsMenuItemBY3: 'Для детей',
        funSunPageMenuAdventagiesHotelsMenuItemUA3: 'Для детей',
        funSunPageMenuAdventagiesHotelsMenuItemEE3: 'Lastele',
        funSunPageMenuAdventagiesHotelsMenuItemLT3: 'Vaikams',
        funSunPageMenuAdventagiesHotelsMenuItemLV3: 'Bērniem',
        
        funSunPageMenuAdventagiesHotelsMenuItemRU4: 'Попробуйте блюда и напитки',
        funSunPageMenuAdventagiesHotelsMenuItemBY4: 'Попробуйте блюда и напитки',
        funSunPageMenuAdventagiesHotelsMenuItemUA4: 'Попробуйте блюда и напитки',
        funSunPageMenuAdventagiesHotelsMenuItemEE4: 'Proovige sööke ja jooke',
        funSunPageMenuAdventagiesHotelsMenuItemLT4: 'Paragaukite patiekalų ir gėrimų',
        funSunPageMenuAdventagiesHotelsMenuItemLV4: 'Nogaršojiet dzērienus un ēdienus',
        
        funSunPageMenuAdventagiesHotelsMenuItemRU5: 'Займитесь спортом',
        funSunPageMenuAdventagiesHotelsMenuItemBY5: 'Займитесь спортом',
        funSunPageMenuAdventagiesHotelsMenuItemUA5: 'Займитесь спортом',
        funSunPageMenuAdventagiesHotelsMenuItemEE5: 'Tehke sporti',
        funSunPageMenuAdventagiesHotelsMenuItemLT5: 'Sportuokite',
        funSunPageMenuAdventagiesHotelsMenuItemLV5: 'Sports',
        
        funSunPageMenuAdventagiesHotelsMenuItemRU6: 'Развлекитесь',
        funSunPageMenuAdventagiesHotelsMenuItemBY6: 'Развлекитесь',
        funSunPageMenuAdventagiesHotelsMenuItemUA6: 'Развлекитесь',
        funSunPageMenuAdventagiesHotelsMenuItemEE6: 'Lõbutsege',
        funSunPageMenuAdventagiesHotelsMenuItemLT6: 'Atsipalaiduokite',
        funSunPageMenuAdventagiesHotelsMenuItemLV6: 'Izklaide',
    }
});

//Преимущества вкладка 1 В номере как дома
const funSunPageHotelsAdventagie1 = (background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV) => ({background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV});

const funSunPageHotelsAdventagies1 = [
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/e1fb10ab-76fe-4b95-aea5-a8f93d2edebf/3);background-position: 100% 80%;background-size: cover','Стандартные номера', 'В стандартном номере с комфортом разместятся двое гостей. Также отель в номер можно запросить дополнительную кровать для третьего гостя.','Стандартные номера', 'В стандартном номере с комфортом разместятся двое гостей. Также отель в номер можно запросить дополнительную кровать для третьего гостя.','Стандартные номера', 'В стандартном номере с комфортом разместятся двое гостей. Также отель в номер можно запросить дополнительную кровать для третьего гостя.', 'Standardtuba','Standardtuba mahutab mugavalt kaks külalist. Samuti saab hotellis кüsida lisavoodit kolmandale külalisele.','Standartiniai kambariai','Standartiniuose kambariuose patogiai telpa du asmenys. Viešbutyje yra galimybė gauti papildomą lovą trečiajam asmeniui.','Standarta numuri','Standartā numurā ar komfortu izmitināsies divi viesi. Tāpāt numurā var pieprasīt vēl vienu gultu.'),
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/c8e61f4a-b50a-4bfa-b7dc-73f692480848/Panorama-min);background-position: center;background-size: cover','Номера семейного типа', 'Семейные номера обычно состоят из двух комнат и подходят для размещения не менее четырех человек.','Номера семейного типа', 'Семейные номера обычно состоят из двух комнат и подходят для размещения не менее четырех человек.','Номера семейного типа', 'Семейные номера обычно состоят из двух комнат и подходят для размещения не менее четырех человек.', 'Peretuba','Peretoad koosnevad tavaliselt kahest toast ja sobivad minimaalselt neljale inimesele.','Kambariai šeimoms','Šeimyninio tipo kambariai įprastai sudaryti iš dviejų kambarių ir tinka ne mažiau kaip keturiems asmenims.','Ģimenes tipa numuri','Ģimenes tipa numuros parasti ir divas istabas, kurās var izmitināties ne mazāk par 4 personam'),
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/e6136071-a2c4-4ef7-96f2-1f06d1684faf/shutterstock_1012847620-min);background-position: center;background-size: cover','Для детей', 'Детская кроватка, ванночка, горшок и сиденье на унитаз предоставляются в номера бесплатно и по запросу.','Для детей', 'Детская кроватка, ванночка, горшок и сиденье на унитаз предоставляются в номера бесплатно и по запросу.','Для детей', 'Детская кроватка, ванночка, горшок и сиденье на унитаз предоставляются в номера бесплатно и по запросу.', 'Lastele','Soovi korral tubadesse pakkutakse tasuta lastevoodi, lastevann, pott ja wc iste.','Vaikams','Vaikiška lovytė, vonelė, naktipuodis ir unitazo dangtis pristatomi į kambarį, pagal užklausimą, nemokama.','Bērniem','Bērnu gulta, vanna, pods un tualetes poda sēdeklis ir pieejami bezmaksas, pēc pieprasījuma'),
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/671d9c2c-6489-4633-a6f6-d4a60ec17494/shutterstock_113099134-new);background-position: center;background-size: cover', 'Мини-бар', 'При заезде в отель мини-бар пополняется прохладительными напитками, далее - водой', 'Мини-бар', 'При заезде в отель мини-бар пополняется прохладительными напитками, далее - водой', 'Мини-бар', 'При заезде в отель мини-бар пополняется прохладительными напитками, далее - водой', 'Minibaar','Sisse kolimisel minibaar täidetakse karastusjookidega, edaspidi & ndash; veega','Mini baras','Atvykimo dieną mini baras papildomas gaiviaisiais gėrimais, vėliau - vandeniu','Mini-bārs','Izmitināšanas dienā savā numurā mini-bārā jūs atradīsiet atsvaidzinošus dzērienus, turpmākajās dienās mini-bārs tiks papildināts ar ūdeni'),
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/c35e7b87-a46a-4129-ac21-572f8580d6cd/halat);background-position: center;background-size: cover', 'В ванной комнате', 'Мы позаботились о вашем комфорте, оснастив все номера уютными халатами и тапочками для взрослых и наборами для душа, включающими в себя шампунь, кондиционер, шапочку и гель для душа.', 'В ванной комнате', 'Мы позаботились о вашем комфорте, оснастив все номера уютными халатами и тапочками для взрослых и наборами для душа, включающими в себя шампунь, кондиционер, шапочку и гель для душа.', 'В ванной комнате', 'Мы позаботились о вашем комфорте, оснастив все номера уютными халатами и тапочками для взрослых и наборами для душа, включающими в себя шампунь, кондиционер, шапочку и гель для душа.', 'Vannis','Oleme hoolitsenud teie mugavuse eest, kõikides tubades on hommikumantlid ja sussid täiskasvanutele koos vannitootega, sealhulgas šampoon, konditsioneer ja dušigeel.','Vonios kambaryje','Pasirūpinome Jūsų patogumu, kambariuose rasite chalatus ir šlepetes suaugusiems ir vonios reikmenis, įskaitant šampūną, kondicionierių, dušo kepuraitę ir dušo gelį.','Vannas istabā','Esam parūpējušies par jūsu komfortu un visos numuros atradīsiet dušas komplektus, kurā ietilpst dušas želeja, dušas cepure, kondicionieris un šampūns matiem, peldmēteļus un čības pieaugušajiem.'),
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/5d80ba03-db1e-4a8b-af6e-96f01b86b2d8/shutterstock_338701388);background-position: center;background-size: cover', 'ТВ на родном языке', 'Отдохните после насыщенного дня за просмотром телепрограмм (в том числе и детских) на родном языке.', 'ТВ на родном языке', 'Отдохните после насыщенного дня за просмотром телепрограмм (в том числе и детских) на родном языке.', 'ТВ на родном языке', 'Отдохните после насыщенного дня за просмотром телепрограмм (в том числе и детских) на родном языке.', 'TV emakeeles','Lõõgastuge peale emotsiooniderohket päeva vaadates emakeeles TV saateid (sealhulgas ka lastesaateid).','TV','Po įtemptos dienos atsipalaiduokite žiūrėdami televizijos programas (įskaitant ir vaikų) išsirinkę iš gausaus kanalų sąrašo.','ТВ на родном языке','Отдохните после насыщенного дня за просмотром телепрограмм (в том числе и детских) на родном языке.'),
    
]

const funSunPageHotelsAdventagiesBlock1 = new Vue({
    el: '#fun-sun-page-hotels-adventagies1',
    data:{
        funSunPageHotelsAdventagies1: funSunPageHotelsAdventagies1,
        funSunPageHotelsAdventagie1: funSunPageHotelsAdventagie1
        
    }
});

//Преимущества вкладка 2 Пройдитесь по территории
const funSunPageHotelsAdventagie2 = (background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV) => ({background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV});

const funSunPageHotelsAdventagies2 = [
    
    funSunPageHotelsAdventagie2('background: url(https://www.tui.ru/getmedia/36d227ba-cca4-4622-b746-c22f863daf65/shutterstock_1013306506);background-position: center;background-size: cover','Оставайтесь онлайн', 'Бесплатный Wi-Fi на всей территории отеля.','Оставайтесь онлайн', 'Бесплатный Wi-Fi на всей территории отеля.','Оставайтесь онлайн', 'Бесплатный Wi-Fi на всей территории отеля.', 'Püsige võrgus', 'Tasuta Wi-Fi hotelli territooriumil.','Likite prisijungę','Nemokamas Wi-Fi visoje viešbučio teritorijoje.','WI-FI','Bezmaksas WI-FI visā viesnīcas teritorijā'),
    
    funSunPageHotelsAdventagie2('background: url(https://www.tui.ru/getmedia/3e8c45d8-4bb4-4365-87d6-8fb9b5107d72/pljazh);background-position: center;background-size: cover','Искупайтесь в море', 'Все отели имеют собственный пляж (Турция) или находятся рядом с пляжем (Кипр). Пляжные полотенца, зонтики, шезлонги и матрасы - бесплатно (Турция).','Искупайтесь в море', 'Все отели имеют собственный пляж (Турция) или находятся рядом с пляжем (Кипр). Пляжные полотенца, зонтики, шезлонги и матрасы - бесплатно (Турция).','Искупайтесь в море', 'Все отели имеют собственный пляж (Турция) или находятся рядом с пляжем (Кипр). Пляжные полотенца, зонтики, шезлонги и матрасы - бесплатно (Турция).', 'Ujuge meres', 'Kõikidel hotellidel on isiklik rand (Türgi) või hotellid asuvad ranna läheduses (Küpros). Rannarätikud, päikesevarjud, lamamistoolid ja rannamadratsid - tasuta (Türgi).','Išsimaudykite jūroje','Visi viešbučiai turi nuosavus paplūdimius (Turkija) arba įsikūrę šalia paplūdimių (Kipras). Paplūdimio rankšluosčiai, skėčiai, gultai ir čiužiniai - nemokama (Turkija).','Pludmale','Visām viesnīcam ir privātās pludmales (Turcija) vai arī atrodas blakus pludmalei (Kipra) Pludmales dvieļi, pludmales saulessargi, atpūtas krēsli un matrači &ndash; - bezmaksas (Turcija).'),
    
    funSunPageHotelsAdventagie2('background: url(https://www.tui.ru/getmedia/dc0a6fbf-f6d9-49e4-99eb-1f2ffb0c6414/photo-16-min);background-position: center;background-size: cover','Отдохните от суеты', 'Специальный Chill Out бар открыт только для взрослых (18+).','Отдохните от суеты', 'Специальный Chill Out бар открыт только для взрослых (18+).','Отдохните от суеты', 'Специальный Chill Out бар открыт только для взрослых (18+).', 'Muretu puhkust', 'Spetsiaalne Chill Out baar ainult täiskasvanutele (18+).','Pailsėkite nuo šurmulio','Specialus Chill Out baras tik suaugusiems (18+).','Atpūta no steigas','Speciālais Chill Out bārs atvērts tikai pieaugušajiem (18+).'),
    
    funSunPageHotelsAdventagie2('background: url(https://www.tui.ru/getmedia/a0e19ce0-bb6b-4d82-b1d4-12940e964479/shutterstock_127114079-min);background-position: center;background-size: cover','Купите все, что нужно', 'Забыли что-то дома? Не проблема. На территории расположены магазины с детскими товарами.','Купите все, что нужно', 'Забыли что-то дома? Не проблема. На территории расположены магазины с детскими товарами.','Купите все, что нужно', 'Забыли что-то дома? Не проблема. На территории расположены магазины с детскими товарами.', 'Ostke kõik vajalik', 'Unustasite midagi koju? Pole probleemi. Territooriumil asuvad kauplused lastekaupadega.','Įsigykite visko, ko reikia','Kažką pamiršote namuose? Ne bėda! Viešbučių teritorijoje yra parduotuvių su vaikų prekėmis.','Nopērciet visu, kas nepieciešams','Aizmirsāt kaut ko mājas? Tā nav problēma. Teritorijā atrodas veikali ar bērnu precēm.'),
    
    
]

const funSunPageHotelsAdventagiesBlock2 = new Vue({
    el: '#fun-sun-page-hotels-adventagies2',
    data:{
        funSunPageHotelsAdventagies2: funSunPageHotelsAdventagies2,
        funSunPageHotelsAdventagie2: funSunPageHotelsAdventagie2
        
    }
});

//Преимущества вкладка 3 Для детей
const funSunPageHotelsAdventagie3 = (background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV) => ({background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV});

const funSunPageHotelsAdventagies3 = [
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/f04f8187-f36b-4a80-9806-a8374ed32751/shutterstock_301478432-min);background-position: center;background-size: cover','Тукан Baby', 'Услуги для самых маленьких путешественников и их родителей: детское оборудование, уголок матери, стиральная машина, детское меню, игровое пространство в Тукан Kids. Дети до 4 лет могут посещать Тукан Kids только в сопровождении взрослых.','Тукан Baby', 'Услуги для самых маленьких путешественников и их родителей: детское оборудование, уголок матери, стиральная машина, детское меню, игровое пространство в Тукан Kids. Дети до 4 лет могут посещать Тукан Kids только в сопровождении взрослых.','Тукан Baby', 'Услуги для самых маленьких путешественников и их родителей: детское оборудование, уголок матери, стиральная машина, детское меню, игровое пространство в Тукан Kids. Дети до 4 лет могут посещать Тукан Kids только в сопровождении взрослых.','Toucan Baby','Teenused väiksematele külalistele ja nende vanematele: beebivarustus, ema nurk, pesumasin, lastemenüü, mänguruum Toucan Kids toas. Alla 4-aastased lapsed viibimine Toucan Kids toas ainult koos täiskasvanuga.','Toucan Baby','Paslaugos jauniausiems keliautojams ir jų tėvams: kūdikių įranga, mamos ir vaiko zona, skalbimo mašina, vaikiškas meniu, žaidimų erdvė „Toucan Kids“ klube. Vaikai iki 4 metų gali lankytis „Toucan Kids“ klube tik prižiūrimi suaugusiųjų.','Toucan Baby','Pakalpojumi pašiem mazākajiem ceļotājiem un viņu vecākiem: bērnu arpīkojums, mātes stūrītis, veļas mazgājamā mašīna, bernu ēdienkarte, spēļu zona, Toucan Kids. Bērni līdz 4 gadu vecumam var apmeklēt Toucan Kids tikai ar vecākiem.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/716a964d-35c2-4f72-8dba-626b699e56aa/shutterstock_178349795);background-position: center;background-size: cover','Тукан Kids', 'Клуб для детей от 4 до 7 лет с занимательной программой и профессиональными аниматорами.','Тукан Kids', 'Клуб для детей от 4 до 7 лет с занимательной программой и профессиональными аниматорами.','Тукан Kids', 'Клуб для детей от 4 до 7 лет с занимательной программой и профессиональными аниматорами.','Toucan Kids','Lasteklubi 4 - 7 aastastele kaasahaarava meelelahutusprogrammiga ja professionaalsete animaatoritega.','Toucan Kids','Klubas vaikams nuo 4 iki 7 metų su linksma programa irprofesionaliais animatoriais.','Toucan Kids','Klubs bērniem no 4 līdz 7 gadiem ar aizraujošu programmu un profesionāliem animatoriem.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/39427fc6-9ed2-49c5-bf15-bbd5755e6d93/junior-min);background-position: center;background-size: cover','Тукан Junior', 'Клуб для озорников от 8 до 12 лет c программой, разработанной с учетом возраста и предпочтений детей.','Тукан Junior', 'Клуб для озорников от 8 до 12 лет c программой, разработанной с учетом возраста и предпочтений детей.','Тукан Junior', 'Клуб для озорников от 8 до 12 лет c программой, разработанной с учетом возраста и предпочтений детей.','Toucan Junior','Juuniorite klubi 8 - 12 aastastele laste meelelahutusprogrammiga, mis on väljatöödatud vastavalt vanusegruppile ja laste eelistustele','Toucan Junior','Paauglių klubas nuo 8 iki 12 metų su programa atsižvelgiant į vaikų amžių ir pageidavimus.','Toucan Junior','Klubs bērniem no 8 līdz 12 gadiem ar programmu, kas sastādīta rēķinoties vecuma interesēm un vēlmēm.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/91e51c89-4336-4f65-a22d-3e287cceba29/teen_lounge);background-position: center;background-size: cover','Teens Hangout (12+)', 'Программа для подростков со специально выделенным аниматором. Период работы: с 1 июня по 1 сентября.','Teens Hangout (12+)', 'Программа для подростков со специально выделенным аниматором. Период работы: с 1 июня по 1 сентября.','Teens Hangout (12+)', 'Программа для подростков со специально выделенным аниматором. Период работы: с 1 июня по 1 сентября.','Teens Hangout (12+)','Programm teismelistele spetsiaalse animaatoriga. Tööperiood: 1 juuni kuni 1 september.','Teens Hangout (12+)','Programa paaugliams su specialiu animatoriumi.','Teens Hangout (12+)','Programma pusaudžiem ar savu animatoru. Darba laiks: no 1. jūnija līdz 1. septembrim.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/565f465b-ba38-46b1-8035-4cc244d0cfbe/DSCF4520-min);background-position: center;background-size: cover','Питание', 'Детский буфет Тукан в главном ресторане отеля - залог полноценного и здорового питания вашего ребенка. Для сладкоежек - мороженое днем и десерты в ассортименте','Питание', 'Детский буфет Тукан в главном ресторане отеля - залог полноценного и здорового питания вашего ребенка. Для сладкоежек - мороженое днем и десерты в ассортименте','Питание', 'Детский буфет Тукан в главном ресторане отеля - залог полноценного и здорового питания вашего ребенка. Для сладкоежек - мороженое днем и десерты в ассортименте','Toitlustus','Toucan buffet pearestoranis - võti tervislikule lapse toitumisele. Maiasmokkale - jäätis ja magustoite valik','Maitinimas','Vaikų bufetas „Toucan“ pagrindiniame viešbučio restorane - tai raktas į pilnavertę ir sveiką mitybą. Smaližiams – dienos metu ledai ir desertai.','Ēdiens','Viesnīcas galvenajā restorānā bērnu bufete Toucan-pilnvērtīgs un veselīgs ēdiens jūsu bērnam. Saldumu mīļiem-saldējums pa dienu un deserti piedāvājumā.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/46bf9839-db05-47b4-b055-3f7dab91618c/baschild);background-position: center;background-size: cover','Водные развлечения', 'Детям понравится плескаться в наших бассейнах, кататься на водных горках или в аквапарке. Все под присмотром профессионального персонала отеля','Водные развлечения', 'Детям понравится плескаться в наших бассейнах, кататься на водных горках или в аквапарке. Все под присмотром профессионального персонала отеля','Водные развлечения', 'Детям понравится плескаться в наших бассейнах, кататься на водных горках или в аквапарке. Все под присмотром профессионального персонала отеля','Veeharrastused','Lapsed saavad mõneleda basseinides, veeliumäel või veepargis. Professionaalse hotellipersonali järelvalve all.','Vandens pramogos','Vaikai galės mėgautis baseinais, leistis vandens kalneliais ar pramogauti vandens parke. Visi yra prižiūrimi profesionalių viešbučio darbuotojų.','Ūdens atrakcijas','Bērniem patiks draiskoties baseinā, izbaudīt ūdens slidkalniņus vai ūdens atrakciju parku. Viesnīcas profesionālais personāls pieskatīs visu.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/53412abf-958c-4c92-94c1-549bb978c2e5/shutterstock_757693621-min);background-position: center;background-size: cover','Для детей', 'По вашему запросу мы с удовольствием вам бесплатно предоставим детскую кроватку в номер, стул для кормления в ресторане, детскую коляску и горшок, ванночку и детское сиденье на унитаз','Для детей', 'По вашему запросу мы с удовольствием вам бесплатно предоставим детскую кроватку в номер, стул для кормления в ресторане, детскую коляску и горшок, ванночку и детское сиденье на унитаз','Для детей', 'По вашему запросу мы с удовольствием вам бесплатно предоставим детскую кроватку в номер, стул для кормления в ресторане, детскую коляску и горшок, ванночку и детское сиденье на унитаз','Lastele','Teie soovi korral toas on tasuta beebivoodi, beeebipott ja WC-iste, pearestoranis on beebi söögitoolid, lastekärud','Vaikams','Pageidaujant mielai suteiksime vaikišką lovelę kambaryje, maitinimo kėdę restorane, vežimėlį ir naktipuodį, kūdikio vonelę ir vaikišką tualeto dangtį.','Bērniem','Pēc jūsu pieprasījuma mēs ar prieku jums piedāvāsim bezmaksas bērnu gultiņu numurā, barošanas krēslu restorānā, bērnu ratus un podiņu, vannīti vai bērna sēdekli tualetes podam.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/7dfc3f30-5a0d-4082-87f3-178d000505be/shutterstock_415238506-min);background-position: center;background-size: cover','Уголок мамы', 'В уголке мамы в главном ресторане круглосуточно в свободном доступе микроволновка, стерилизатор, блендер и чайник.','Уголок мамы', 'В уголке мамы в главном ресторане круглосуточно в свободном доступе микроволновка, стерилизатор, блендер и чайник.','Уголок мамы', 'В уголке мамы в главном ресторане круглосуточно в свободном доступе микроволновка, стерилизатор, блендер и чайник.','Ema nurk','Ema nurgas on ööpäevaringselt vabalt saadaval mikrolaineahi, steriliseerija, segisti ja veekeetja.','Mamos zona','Pagrindiniame restorane, mamos zonoje visą parą laisvai prieinama mikrobangų krosnelė, sterilizatorius, trintuvas ir virdulys.','Mātes stūrītis','Galvenajā restorānā mātes stūrītī visu diennakti ir pieejama mikroviļņu krāsns, sterilizātors, blenderis un tējkanna.'),
    
    
]

const funSunPageHotelsAdventagiesBlock3 = new Vue({
    el: '#fun-sun-page-hotels-adventagies3',
    data:{
        funSunPageHotelsAdventagies3: funSunPageHotelsAdventagies3,
        funSunPageHotelsAdventagie3: funSunPageHotelsAdventagie3
        
    }
});

//Преимущества вкладка 4 Попробуйте блюда и напитки
const funSunPageHotelsAdventagie4 = (background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV) => ({background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV});

const funSunPageHotelsAdventagies4 = [
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/e2ca2970-080e-40dd-a2bc-3365cc471728/photo-14-1);background-position: center;background-size: cover','Свежевыжатый сок', 'Каждое утро на завтрак мы предлагаем свежевыжатый апельсиновый сок.','Свежевыжатый сок', 'Каждое утро на завтрак мы предлагаем свежевыжатый апельсиновый сок.','Свежевыжатый сок', 'Каждое утро на завтрак мы предлагаем свежевыжатый апельсиновый сок.','Värskelt pressitud mahlad','КVärskelt pressitud mahlad hommikusöögiks iga päev.','Šviežiai spaustos sultys','Šviežiai spaustos apelsinų sultys pusryčių metu.','Svaigi spiestā sula','Katru rītu brokastīs mēs piedāvājam svaigi spiestu apelsīna sulu.'),
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/57d72f19-5fc7-4c5c-b4ae-780bab4a21c2/alacart-min);background-position: center;background-size: cover','A la carte рестораны', 'Ужин от шеф-повара высшего класса? Приглашаем гостей в рестораны a la carte: Средиземноморский, Итальянский или Национальный Каждый гость за время своего отдыха может воспользоваться одним бесплатным ужином в ресторанах.','A la carte рестораны', 'Ужин от шеф-повара высшего класса? Приглашаем гостей в рестораны a la carte: Средиземноморский, Итальянский или Национальный Каждый гость за время своего отдыха может воспользоваться одним бесплатным ужином в ресторанах.','A la carte рестораны', 'Ужин от шеф-повара высшего класса? Приглашаем гостей в рестораны a la carte: Средиземноморский, Итальянский или Национальный Каждый гость за время своего отдыха может воспользоваться одним бесплатным ужином в ресторанах.','A la carte restoranid','Õhtusöök tippkokalt? Kutsume teid meie a la carte restoranidesse: Vahemere, Itaalia või kohalik köök. Üks a la carte restorani külastus on tasuta.','A la carte restoranai','Speciali, virtuvės šefo gaminta vakarienė? Kviečiame svečius į A la Carte restoranus: Viduržemio jūros regiono, Italijos ar tradicinės virtuvės. Kiekvienas svečias atostogų metu gali pasimėgauti viena nemokama vakariene restoranuose.','A La Carte restorāni','Augstas klases šefpavāra vakariņas? Aicinām viesus A La Carte restorānā: Vidusjūras, Itāļu vai nacionālā. Katrs viesis savas atpūtas laikā var vienu reizi izbaudīt bezmaksas vakariņas restorānā.'),
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/98575e95-eb0b-4b50-ac18-2efe3c982ba2/shutterstock_666139504-min);background-position: center;background-size: cover','Диетические блюда', 'Если вы следуете правилам здорового образа жизни даже на отдыхе, вам придутся по вкусу блюда из диетического уголка главного ресторана.','Диетические блюда', 'Если вы следуете правилам здорового образа жизни даже на отдыхе, вам придутся по вкусу блюда из диетического уголка главного ресторана.','Диетические блюда', 'Если вы следуете правилам здорового образа жизни даже на отдыхе, вам придутся по вкусу блюда из диетического уголка главного ресторана.','Dieettoidud','Kui te jälgite tervisliku eluviisi isegi puhkusel, meeldivad teile roogad pearestorani dieetnurgast.','Dietiniai patiekalai','Jei laikotės sveiko gyvenimo būdo taisyklių net atostogų metu, pagrindiniame restorane rasite dietinio maisto skyrių.','Diētiskie ēdieni','Ja vēlaties arī atpūtas laikā pieturēties pie veselīga dzīves veida, jums patīks mūsu galvenā restorāna diētiskie ēdieni.'),
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/1b700cde-7473-4d0d-a1e7-175c9366afc8/1-min);background-position: center;background-size: cover','Питание и снеки', 'Помимо главного ресторана с питанием по системе "Все включено", на территории расположено несколько баров, предлагающих закуски и горячие блюда. Для любителей перекусить в ночное время, работает буфет в главном ресторане отеля. Предлагаем гостям горячие супы, свежие салаты и закуски.','Питание и снеки', 'Помимо главного ресторана с питанием по системе "Все включено", на территории расположено несколько баров, предлагающих закуски и горячие блюда. Для любителей перекусить в ночное время, работает буфет в главном ресторане отеля. Предлагаем гостям горячие супы, свежие салаты и закуски.','Питание и снеки', 'Помимо главного ресторана с питанием по системе "Все включено", на территории расположено несколько баров, предлагающих закуски и горячие блюда. Для любителей перекусить в ночное время, работает буфет в главном ресторане отеля. Предлагаем гостям горячие супы, свежие салаты и закуски.','Toitlustus ja suupisted','Lisaks pearestoranile "Kõik hinnas" toitlustusega, hotelli territooriumil on mitmed baarid, mis pakuvad suupisted ja soojad toite.','Maistas ir užkandžiai','Be pagrindinio restorano su "Viskas įskaičiuota", maitinimo sistema, viešbučio teritorijoje yra keletas barų, siūlančių užkandžius ir karštus patiekalus. Naktį veikia bufetas, kur rasite karštą sriubą, šviežių salotų ar užkandžių.','Ēdināšana uz uzkodas','Izņemot mūsu galveno restorānu ar sistēmu "Viss iekļauts", teritorijā atrodas vairāki bāri, kas piedāvā uzkodas un karstos ēdienus. Cilvēkiem, kam patīk uzkost nakts laikā strādā bufete galvenajā vienīcas restorānā. Viesiem piedāvājam karstās zupas, svaigos salātus un uzkodas'),
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/2febcacc-9c52-4f72-8f84-8ca0007a6e23/2-min);background-position: center;background-size: cover','Напитки', 'Мы предлагаем нашим гостям бесплатно как алкогольные импортные напитки (3 вида), так и безалкогольные домашние лимонады, компоты, коктейли, травяные чаи, кофе и национальные напитки.','Напитки', 'Мы предлагаем нашим гостям бесплатно как алкогольные импортные напитки (3 вида), так и безалкогольные домашние лимонады, компоты, коктейли, травяные чаи, кофе и национальные напитки.','Напитки', 'Мы предлагаем нашим гостям бесплатно как алкогольные импортные напитки (3 вида), так и безалкогольные домашние лимонады, компоты, коктейли, травяные чаи, кофе и национальные напитки.','Joogid','Lisaks imporditud alkohoolsetele jookidele (3 tüüpi) pakkume oma külalistele ka karastusjooke, kokteile, taimeteed, kohvi ja kohalikuid jooke.','Gėrimai','Nemokamai svečiams siūlome, tiek importinius alkoholinius gėrimus (3 rūšių), tiek vietinės gamybos gaiviuosius gėrimus, kompotus, kokteilius, vaistažolių arbatas, kavą ir tradicinius gėrimus.','Dzērieni','Viesiem piedāvājam bezmaksas importa alkoholiskus dzērienus (3 veidus), kā arī bezalkoholiskus - mājas limonādes, kompotus, kokteiļus, zaļās tējas, kafiju un nacionālos dzērienus.'),
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/0c3c8a8e-4cc2-4a04-b5b5-94f80830afe9/2-min-new);background-position: center;background-size: cover','Сладости', 'Все, что так любят наши туристы: местные сладости, пирожные, шикарные сливочные и шоколадные торты в десерт-баре Happy Moments.','Сладости', 'Все, что так любят наши туристы: местные сладости, пирожные, шикарные сливочные и шоколадные торты в десерт-баре Happy Moments.','Сладости', 'Все, что так любят наши туристы: местные сладости, пирожные, шикарные сливочные и шоколадные торты в десерт-баре Happy Moments.','Magustoidud','Kõik, mis meeldib meie külalistele: kohalikud magustoidud, koogid, erinevad tordid kohvikus Happy Moments.','Saldėsiai','Viskas, ką mūsų svečiai labai myli: vietiniai saldumynai, pyragai, įvairūs grietinėlės ir šokolado pyragaičiai „Happy Moments“ desertų bare.','Saldumi','Viss, kas garšo mūsu tūristiem: vietējie saldumi, kūciņas, saldkrējuma un šokolādes tortes deserta bārā Happy Moments.'),
    
    
]

const funSunPageHotelsAdventagiesBlock4 = new Vue({
    el: '#fun-sun-page-hotels-adventagies4',
    data:{
        funSunPageHotelsAdventagies4: funSunPageHotelsAdventagies4,
        funSunPageHotelsAdventagie4: funSunPageHotelsAdventagie4
        
    }
});

//Преимущества вкладка 5 Займитесь спортом
const funSunPageHotelsAdventagie5 = (background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV) => ({background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV});

const funSunPageHotelsAdventagies5 = [
    
    funSunPageHotelsAdventagie5('background: url(https://www.tui.ru/getmedia/55f5f497-2b59-4832-bddf-dd2106dc76d9/fitnes-min);background-position: center;background-size: cover','Профессиональные фитнес-тренеры', 'После вкусных блюд нашей кухни, вы точно захотите посетить мастер-классы профессиональных fitness - wellness инструкторов.','Профессиональные фитнес-тренеры', 'После вкусных блюд нашей кухни, вы точно захотите посетить мастер-классы профессиональных fitness - wellness инструкторов.','Профессиональные фитнес-тренеры', 'После вкусных блюд нашей кухни, вы точно захотите посетить мастер-классы профессиональных fitness - wellness инструкторов.','Professionaalsed treenerid','Peale maitsvat lõunat soovite kindlasti osaleda professionaalsetes fitness- wellness treenerite meistriklassides.','Profesionalūs instruktoriai','Po skanių mūsų virtuvės patiekalų, tikrai norėsite apsilankyti fitness& wellness užsiėmimuose su profesionaliais instruktoriais.','Profesionālie fitnesa treneri','Pēc mūsu garšīgajiem ēdieniem, jūs noteikti gribēsiet apmeklēt profesionālu fitness & wellness instruktoru meistarklases.'),
    
    funSunPageHotelsAdventagie5('background: url(https://www.tui.ru/getmedia/fea29f28-b6d8-4897-bcc0-efad6776edf0/bass-min);background-position: center;background-size: cover','Плавайте и загорайте', 'Открытые и крытые бассейны для взрослых и детей, водные горки и аквапарки. Отличная возможность устроить заплыв или просто позагорать на шезлонгах у воды','Плавайте и загорайте', 'Открытые и крытые бассейны для взрослых и детей, водные горки и аквапарки. Отличная возможность устроить заплыв или просто позагорать на шезлонгах у воды','Плавайте и загорайте', 'Открытые и крытые бассейны для взрослых и детей, водные горки и аквапарки. Отличная возможность устроить заплыв или просто позагорать на шезлонгах у воды','Ujuge ja päevitage','Sise ja välibasseinid täiskasvanutele ja lastele, veeliumäed ja veepargid. Suurepärane võimalus ujuda või lihtsalt päevitada lamamistoolidel vee ääres','Plaukiokite ir deginkitės','Lauko ir uždari baseinai tiek vaikams, tiek suaugusiems, vandens kalneliai ir pramogų parkai. Puiki proga išsimaudyti ar tiesiog degintis ant gultų.','Atpūta pie baseina','Āra un iekštelpu baseini pieaugušajiem un bērniem, ūdens slidkalniņi un ūdens atrakciju parki. Lieliska iespēja izpeldēties vai vienkārši sauļoties uz atpūtas krēsliem pie ūdens.'),
    
    funSunPageHotelsAdventagie5('background: url(https://www.tui.ru/getmedia/19ea6d1d-b8fc-448b-886e-da72aa41786e/trenaz-min);background-position: center;background-size: cover','Тренажерный зал', 'Бесплатный тренажерный зал с качественным оборудованием для кардио и силовых тренировок','Тренажерный зал', 'Бесплатный тренажерный зал с качественным оборудованием для кардио и силовых тренировок','Тренажерный зал', 'Бесплатный тренажерный зал с качественным оборудованием для кардио и силовых тренировок','Jõusaal','Tasuta jõusaal kvaliteetsete seadmetega kardio- ja jõutreeningute jaoks','Treniruoklių salė','Nemokama treniruoklių salė su kokybiška įranga kardio ir jėgos treniruotėms.','Trenažieru zāle','Bezmaksas trenažieru zāle ar kvalitatīvu aprīkojumu priekš kardio un spēka nodarbībām.'),
    
    funSunPageHotelsAdventagie5('background: url(https://www.tui.ru/getmedia/d4596940-2a82-47a9-bde9-418a2a8d736f/shutterstock_284520896-min);background-position: center;background-size: cover','Спортивные площадки', 'Футбол, большой или настольный теннис - наши туристы могут заняться любимым видом спорта на площадках отеля. На побережье также есть зона для пляжного волейбола.','Спортивные площадки', 'Футбол, большой или настольный теннис - наши туристы могут заняться любимым видом спорта на площадках отеля. На побережье также есть зона для пляжного волейбола.','Спортивные площадки', 'Футбол, большой или настольный теннис - наши туристы могут заняться любимым видом спорта на площадках отеля. На побережье также есть зона для пляжного волейбола.','Spordiväljakud','Jalgpall, tennis või lauatennis - meie turistid saavad nautida oma lemmikspordi hotelli territooriumil. Rannikul on ka rannavõrkpalli ala.','Sporto aikštelė','Futbolas, lauko arba stalo tenisas - наши туристы могут заняться любимым видом спорта на площадках отеля. На побережье также есть зона для пляжного волейбола.','Sporta laukumi','Futbols, lielais vai galda teniss - mūsu viesnīcas viesi var izbaudīt iemīļoto sporta veidu mūsu viesnīcu laukumos. Pludmalē tāpat ir pieejams pludmales volejbols.'),
    
    funSunPageHotelsAdventagie5('background: url(https://www.tui.ru/getmedia/21121784-fbd8-4a60-9d69-ce693f3d4c21/shutterstock_157675814-min);background-position: center;background-size: cover','Соревнуйтесь и тренируйтесь', 'Активно и позитивно - аниматоры увлекут всех на активные занятия в спортивных играх и соревнованиях. Приходите на ежедневные занятия фитнесом и аквааэробикой!','Соревнуйтесь и тренируйтесь', 'Активно и позитивно - аниматоры увлекут всех на активные занятия в спортивных играх и соревнованиях. Приходите на ежедневные занятия фитнесом и аквааэробикой!','Соревнуйтесь и тренируйтесь', 'Активно и позитивно - аниматоры увлекут всех на активные занятия в спортивных играх и соревнованиях. Приходите на ежедневные занятия фитнесом и аквааэробикой!','Võistlused ja treeningud','Aktiivselt ja positiivselt - meeskond on ettevalmistanud võistluste ja treeningute programmi. Võtke osa igapäevastes fitness ja vesiaerobika treeningutes!','Rungtyniaukite ir treniruokitės','Aktyviai ir pozityviai - animatioriai visus pakvies į aktyvius užsiėmimus sportiniuose žaidimuose ir varžybose. Ateikite į kasdienius kūno rengybos ir vandens aerobikos užsiėmimus!','Treniņi un sacensības','Aktīvi un pozitīvi TUI animatori aizraus visus uz aktīvam nodarbībām sporta spēlēm un sacensībam. Apmeklējiet ikrīta fitnesa un ūdens aerobikas nodarbības!'),
        
]

const funSunPageHotelsAdventagiesBlock5 = new Vue({
    el: '#fun-sun-page-hotels-adventagies5',
    data:{
        funSunPageHotelsAdventagies5: funSunPageHotelsAdventagies5,
        funSunPageHotelsAdventagie5: funSunPageHotelsAdventagie5
        
    }
});

//Преимущества вкладка 6 Развлекитесь
const funSunPageHotelsAdventagie6 = (background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV) => ({background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV});

const funSunPageHotelsAdventagies6 = [
    
    funSunPageHotelsAdventagie6('background: url(https://www.tui.ru/getmedia/1e5742a9-a57f-44e4-97c4-9853e263f86a/programms-300-2001);background-position: center;background-size: cover','Вечерние шоу', 'Каждый вечер в отелях FUN&SUN - увлекательные шоу резидентов и приглашенных артистов - национальные шоу, танцы и вокальные выступления.','Вечерние шоу', 'Каждый вечер в отелях FUN&SUN - увлекательные шоу резидентов и приглашенных артистов - национальные шоу, танцы и вокальные выступления.','Вечерние шоу', 'Каждый вечер в отелях FUN&SUN - увлекательные шоу резидентов и приглашенных артистов - национальные шоу, танцы и вокальные выступления.','Õhtused ettendused','Iga õhtu FUN&SUN hotellides - kaasahaaravad üritused - tantsu ja laulu ettendused.','Vakaro šou programos','Kiekvieną vakarą FUN&SUN - viešbučiuose – įspūdingi animatorių ir kviestinių svečių šou - nacionaliniai ir vokaliniai pasirodymai, šou programos, šokiai.','Vakara šovi','FUN&SUN - viesnīcās katru vakaru - interesanti rezidentu un pieaicināto mākslinieku priekšnesumi - nacionālie šovi, dejošanas un vokālie priekšnesumi.'),
    
    funSunPageHotelsAdventagie6('background: url(https://www.tui.ru/getmedia/0dccc404-4d8f-487c-afd7-e70c21c445df/artist);background-position: center;background-size: cover','Выступления популярных звезд', 'В отелях FUN&SUN регулярно проходят концерты звездных артистов! Не пропустите свой шанс увидеть топовых исполнителей','Выступления популярных звезд', 'В отелях FUN&SUN регулярно проходят концерты звездных артистов! Не пропустите свой шанс увидеть топовых исполнителей','Выступления популярных звезд', 'В отелях FUN&SUN регулярно проходят концерты звездных артистов! Не пропустите свой шанс увидеть топовых исполнителей','Populaarsete esinejate ettendused','FUN&SUN hotellides regulaarselt korraldatakse populaarsete esinejate kontserdid!','Populiarių žvaigdžių pasirodymai','FUN&SUN viešbučiuose reguliariai organizuojami populiarių žvaigždžių koncertai! Nepraleiskite progos matyti geriausius atlikėjus.','Pazīstamu dziedātāju uzstāšanās','FUN&SUN viesnīcās regulāri notiek pazīstamu dziedātāju koncerti! Nepalaid garām iespēju satikt TOP dziedātājus'),
    
    funSunPageHotelsAdventagie6('background: url(https://www.tui.ru/getmedia/a4769103-43cc-4cc3-ad02-0246747affd5/animation-min);background-position: center;background-size: cover','Анимация на русском языке', 'Наши преподаватели научат вас самому нужному в путешествии: делать красивые фотографии на телефон, готовить блюда национальной кухни и разговаривать на языке страны, в которой вы отдыхаете.','Анимация на русском языке', 'Наши преподаватели научат вас самому нужному в путешествии: делать красивые фотографии на телефон, готовить блюда национальной кухни и разговаривать на языке страны, в которой вы отдыхаете.','Анимация на русском языке', 'Наши преподаватели научат вас самому нужному в путешествии: делать красивые фотографии на телефон, готовить блюда национальной кухни и разговаривать на языке страны, в которой вы отдыхаете.','Animatsioon','Professionaalsed animaatorid pakuvad abi ja meelelahutust.','Animacija','Profesionalūs animatoriai padės puikiai ir kokybiškai praleisti laiką.','Meistarklases','Mūsu pasniedzēji jūms iemācīs visu nepieciešamo ceļojumā - skaisti bildēt uz telefona, gatavot nacionālās virtuves ēdienus un runāt tajā valsts valodā, kurā tagad atpūšaties.'),
    
    funSunPageHotelsAdventagie6('background: url(https://www.tui.ru/getmedia/fab07f46-9184-4889-944d-1b2c74901556/disco-min);background-position: center;background-size: cover','Дискотеки и тематические вечеринки', 'Во время отпуска наслаждайтесь зажигательными вечеринками на пляже и у бассейна','Дискотеки и тематические вечеринки', 'Во время отпуска наслаждайтесь зажигательными вечеринками на пляже и у бассейна','Дискотеки и тематические вечеринки', 'Во время отпуска наслаждайтесь зажигательными вечеринками на пляже и у бассейна','Diskoteegid ja teemapeod','Puhkusel saate lõbusalt veeta aega pidudel hotelli rannas või basseini ääres','Diskotekos ir teminiai vakarėliai','Atostogų metu pasimėgaukite vakarėliais paplūdimyje ir prie baseino','Diskotēkas un tematiskās ballītes','Atvaļinājuma laikā izbaudiet aizraujošas diskotēkas pludmalē un pie baseina.'),
    
        
]

const funSunPageHotelsAdventagiesBlock6 = new Vue({
    el: '#fun-sun-page-hotels-adventagies6',
    data:{
        funSunPageHotelsAdventagies6: funSunPageHotelsAdventagies6,
        funSunPageHotelsAdventagie6: funSunPageHotelsAdventagie6
        
    }
});










//ПРОГРАММА РАЗВЛЕЧЕНИЙ
const funSunPageEntProgramTitle = new Vue ({
    el: '#entProgram',
    data: {
        funSunPageEntProgramTitleRU: 'Развлекательная программа',
        funSunPageEntProgramTitleBY: 'Развлекательная программа',
        funSunPageEntProgramTitleUA: 'Развлекательная программа',
        funSunPageEntProgramTitleEE: 'Meelelahutus programm',
        funSunPageEntProgramTitleLT: 'Pramoginė programa',
        funSunPageEntProgramTitleLV: 'Izklaides programma',
    }
});

const funSunPageEntProgramMenu = new Vue ({
    el: '#entProgramMenu',
    data: {
        funSunPageEntProgramMenuitem1RU: 'Для детей',
        funSunPageEntProgramMenuitem2RU: 'Для подростков',
        funSunPageEntProgramMenuitem3RU: 'Для всей семьи',
        
        funSunPageEntProgramMenuitem1BY: 'Для детей',
        funSunPageEntProgramMenuitem2BY: 'Для подростков',
        funSunPageEntProgramMenuitem3BY: 'Для всей семьи',
        
        funSunPageEntProgramMenuitem1UA: 'Для детей',
        funSunPageEntProgramMenuitem2UA: 'Для подростков',
        funSunPageEntProgramMenuitem3UA: 'Для всей семьи',
        
        funSunPageEntProgramMenuitem1EE: 'Lastele',
        funSunPageEntProgramMenuitem2EE: 'Teismelistele',
        funSunPageEntProgramMenuitem3EE: 'Kogu perele',
        
        funSunPageEntProgramMenuitem1LT: 'Vaikams',
        funSunPageEntProgramMenuitem2LT: 'Paaugliams',
        funSunPageEntProgramMenuitem3LT: 'Visai šeimai',
        
        funSunPageEntProgramMenuitem1LV: 'Bērniem',
        funSunPageEntProgramMenuitem2LV: 'Pusaudžiem',
        funSunPageEntProgramMenuitem3LV: 'Visai ģimenei',
    }
});

//ПРОГРАММА РАЗВЛЕЧЕНИЙ для детей
const funSunPageEntProgram1 = (background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV) => ({background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV});

const funSunPageEntPrograms1 = [
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/ec359478-34a7-499d-a958-18e33be583de/T23);background-size: cover;', 'Утренняя зарядка / йога ', 'Утренняя зарядка / йога ', 'Утренняя зарядка / йога ', 'Hommikune võimlemine / jooga','Rytinė mankšta / joga','Rīta vingrošana / joga'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/8fa60090-1fc6-49a5-8914-c57c7f089754/T24);background-size: cover;', 'Академия плавания', 'Академия плавания', 'Академия плавания', 'Ujumisakadeemia','Plaukimo akademija','Peldēšanas akadēmija'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/9380d2e8-787c-4bad-b236-c0ee3eefa764/T25);background-size: cover;', 'Поиск сокровищ', 'Поиск сокровищ', 'Поиск сокровищ', 'Aardejaht','Lobių paieška','Dārgumu meklēšana'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/2c69d3df-23a9-4fa0-8eb6-084d1d09b2ec/T26);background-size: cover;', 'Олимпийские игры', 'Олимпийские игры', 'Олимпийские игры', 'Olümpiamängud','Olimpiniai žaidimai','Olimpiskas spēles'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/3bfca7ba-d457-4e0d-b317-71a4bc793794/T27);background-size: cover;', 'Настольные игры', 'Настольные игры', 'Настольные игры', 'Lauamängud','Stalo žaidimai','Galda spēles'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/33809e6a-d633-486a-b288-421a55a9c446/shutterstock_520075894-min);background-size: cover;', 'Квесты', 'Квесты', 'Квесты', 'Loomingulised mängud','Galvosūkiai','Kvesti'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/34a179fc-f3dc-4fd8-bd99-432353a0e92e/shutterstock_489646066-min);background-size: cover;', 'Научные эксперименты', 'Научные эксперименты', 'Научные эксперименты', 'Teaduslikud Eksperomendid','Mokslo eksperimentai','ZinĀtniskie Eksperimenti'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/7abcf532-cfce-47ae-ac41-84a75a99e493/shutterstock_761820856-min);background-size: cover;', 'Академия Футбола', 'Академия Футбола', 'Академия Футбола', 'Jalgpalliakadeemia','Futbolo akademija','Futbola akadēmija'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/23e8d862-3cb9-460c-adde-e1247aaf6d4c/T32_1);background-size: cover;', 'Дискотека Тукан Тусейшен', 'Дискотека Тукан Тусейшен', 'Дискотека Тукан Тусейшен', 'Diskoteek Toucan','Tukano diskoteka','Diskotēka Toucan Ballīte'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/0aeb7617-2573-4dcf-9dfd-6a2b531b71af/shutterstock_315127931-min);background-size: cover;', 'Киносеанс под открытым небом с попкорном', 'Киносеанс под открытым небом с попкорном', 'Киносеанс под открытым небом с попкорном', 'Vabaõhukino popkorniga','Kino teatras su spragėsiais po atviru dangum','Kino vakars ar popkornu zem klajas debess'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/ebfc0f3e-6a2c-48d7-b5d7-a4398923b337/shutterstock_482563132-min);background-size: cover;', 'Тематические фестивали', 'Тематические фестивали', 'Тематические фестивали', 'Temaatilised festivalid','Teminiai festivaliai','Tematiskie festivĀli'),
        
]

const funSunPageEntProgramBlock1 = new Vue({
    el: '#s3b1',
    data:{
        funSunPageEntPrograms1: funSunPageEntPrograms1,
        funSunPageEntProgram1: funSunPageEntProgram1
        
    }
});

//ПРОГРАММА РАЗВЛЕЧЕНИЙ Для подростков
const funSunPageEntProgram2 = (background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV) => ({background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV});

const funSunPageEntPrograms2 = [
    
    funSunPageEntProgram2('background: url(https://www.tui.ru/getmedia/144acc61-81ce-4862-9ec0-7c094e187720/rebus);background-size: cover;', 'Викторина', 'Викторина', 'Викторина', 'Viktoriin','Viktorina','Viktorīnas'),
    
    funSunPageEntProgram2('background: url(https://www.tui.ru/getmedia/2f6689f7-2d85-485d-9df3-fffbddde0220/event);background-size: cover;', 'Конкурсы', 'Конкурсы', 'Конкурсы','Konkursid','Konkursai','Konkursi'),
    
    funSunPageEntProgram2('background: url(https://www.tui.ru/getmedia/d500320c-457d-44c6-918f-c976268f7ac7/spgames);background-size: cover;', 'Спортивные игры', 'Спортивные игры', 'Спортивные игры','Spordimängud','Sporto žaidimai','Sporta spēles'),
    
    funSunPageEntProgram2('background: url(https://www.tui.ru/getmedia/eabe8a47-2d45-4545-ae1e-385b15f50633/club);background-size: cover;', 'Дискотека', 'Дискотека', 'Дискотека','Diskoteek','Diskoteka','Diskotēka'),
]

const funSunPageEntProgramBlock2 = new Vue({
    el: '#s3b2',
    data:{
        funSunPageEntPrograms2: funSunPageEntPrograms2,
        funSunPageEntProgram2: funSunPageEntProgram2
        
    }
});

//ПРОГРАММА РАЗВЛЕЧЕНИЙ Для всей семьи
const funSunPageEntProgram3 = (background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV) => ({background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV});

const funSunPageEntPrograms3 = [
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/93dbe7dc-f200-4130-a56e-85ae460e843e/Pilates);background-size: cover;', 'Стретчинг / Йога / Кардио', 'Стретчинг / Йога / Кардио', 'Стретчинг / Йога / Кардио','Stretching / jooga / kardio','Tempimas / Joga / Kardio','Stiepšanās / Joga / Kardio'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/dec7cb2f-0427-496b-b29e-df975d821139/shutterstock_369865703-min);background-size: cover;', 'Air Gun', 'Air Gun', 'Air Gun', 'Air Gun','Air Gun','Air Gun'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/4d455d63-9760-46ef-b06f-81b83f4744e3/volley1-min);background-size: cover;', 'Пляжный волейбол', 'Пляжный волейбол', 'Пляжный волейбол', 'Rannavõrkpall','Paplūdimio tinklinis','Pludmales volejbols'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/6ac6cb10-7cf0-4860-8c59-934d3d3b9d59/shutterstock_556528312-min_1);background-size: cover;background-position: 40% 100%', 'Стрельба из лука', 'Стрельба из лука', 'Стрельба из лука', 'Vibulaskmine','Šaudymas iš lanko','Loka šaušana'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/2ffb6089-e012-4ad2-8ccb-51f67f5087c6/aqua);background-size: cover;', 'Аквааэробика в бассейне', 'Аквааэробика в бассейне', 'Аквааэробика в бассейне', 'Vesiaeroobika basseinis','Vandens aerobika baseine','Ūdens aerobika baseinā'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/545503e0-e442-4111-9fe1-1407e7189af4/polo1-min);background-size: cover;', 'Водное поло', 'Водное поло', 'Водное поло', 'Veepall','Vandens polo','Ūdens polo'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/862a4287-d9ad-41b1-a13e-81344810c2db/step_1);background-size: cover;', 'Степ-аэробика', 'Степ-аэробика', 'Степ-аэробика', 'Step-aeroobika','Step aerobika','Step-aerobika'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/f3293581-202b-4c8f-ad03-9b0ec0305437/shutterstock_1146053129-min);background-size: cover;background-position: 60% 100%;', 'Мастер-класс по мобильной фотографии', 'Мастер-класс по мобильной фотографии', 'Мастер-класс по мобильной фотографии', 'Mobiilse fotograafia meistriklassid','Mobiliosios fotografijos pamokos','Mobīlās fotogrāfijas meistarklase'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/519f0618-2757-4456-976e-04c5937c9c55/artisty);background-size: cover;', 'Вечернее шоу', 'Вечернее шоу', 'Вечернее шоу', 'Õhtused meelelahutusprogrammid','Vakaro šou','Vakara šovi'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/20fb1be5-91a2-4794-9d48-fe0f3ee0569d/disco);background-size: cover;', 'Дискотека', 'Дискотека', 'Дискотека', 'Diskoteek','Diskoteka','Diskotēka'),
]

const funSunPageEntProgramBlock3 = new Vue({
    el: '#s3b3',
    data:{
        funSunPageEntPrograms3: funSunPageEntPrograms3,
        funSunPageEntProgram3: funSunPageEntProgram3
        
    }
});


//ПРОГРАММА АНИМАЦИИ СКАЧАТЬ
const funSunPageAnimationProg = new Vue ({
    el: '#funSunAnimationProgDownload',
    data: {
        //иконка
        funSunPageAnimationProgIcon: 'display:inline-block;margin-right:10px;height:32px;width:25px;vertical-align:middle;background:url(https://www.tui.ru/getmedia/da0916cf-da69-4c98-9e87-3096a923581e/pdf-icon) no-repeat top left',
        
        //Titles
        funSunPageAnimationProgTitle1RU: 'Скачайте программу анимации в отелях FUN&SUN',
        funSunPageAnimationProgTitle1BY: 'Скачайте программу анимации в отелях FUN&SUN',
        funSunPageAnimationProgTitle1UA: 'Скачайте программу анимации в отелях FUN&SUN',
        funSunPageAnimationProgTitle1EE: 'Laadige alla FUN&SUN ajakava programmi',
        funSunPageAnimationProgTitle1LT: 'Animacijos programa FUN&SUN viešbučiuose',
        funSunPageAnimationProgTitle1LV: 'Lejuplādējiet animācijas programmu FUN&SUN viesnīcas',
        
        funSunPageAnimationProgTitle2RU: 'программа анимации в отелях FUN&SUN в Турции',
        funSunPageAnimationProgTitle2BY: 'программа анимации в отелях FUN&SUN в Турции',
        funSunPageAnimationProgTitle2UA: 'программа анимации в отелях FUN&SUN в Турции',
        funSunPageAnimationProgTitle2EE: 'Türgi FUN&SUN animatsiooni programm',
        funSunPageAnimationProgTitle2LT: 'Animacijos programa FUN&SUN viešbučiuose Turkijoje',
        funSunPageAnimationProgTitle2LV: 'animācijas programma FUN&SUN viesnīcas Turcijā',
        funSunPageAnimationProgTitle2LinkRU: 'https://www.tui.ru/getmedia/f07b8f72-0a3f-4d82-963c-0274a81cdcbd/FS-RUS-program',
        
        funSunPageAnimationProgTitle3RU: 'программа анимации в отелях FUN&SUN на Кипре',
        funSunPageAnimationProgTitle3BY: 'программа анимации в отелях FUN&SUN на Кипре',
        funSunPageAnimationProgTitle3UA: 'программа анимации в отелях FUN&SUN на Кипре',
        funSunPageAnimationProgTitle3EE: 'Küprose FUN&SUN animatsiooni programm',
        funSunPageAnimationProgTitle3LT: 'nimacijos programa FUN&SUN viešbučiuose Kipre',
        funSunPageAnimationProgTitle3LV: 'animācijas programma FUN&SUN viesnīcas Kiprā',
        funSunPageAnimationProgTitle3LinkRU: 'https://www.tui.ru/getmedia/cefabb62-875f-44a0-8bd6-18e439051c7a/FUNSUN-Cyprus-RUS_1',
        
        funSunPageAnimationProgTitle4RU: 'вечерние шоу в отелях FUN&SUN на Кипре',
        funSunPageAnimationProgTitle4BY: 'вечерние шоу в отелях FUN&SUN на Кипре',
        funSunPageAnimationProgTitle4UA: 'вечерние шоу в отелях FUN&SUN на Кипре',
        funSunPageAnimationProgTitle4EE: 'FUN&SUN õhtused meelelahutusprogrammid',
        funSunPageAnimationProgTitle4LT: 'Vakaro šou FUN&SUN viešbučiuose Kipre',
        funSunPageAnimationProgTitle4LV: 'vakara šovi FUN&SUN viesnīcas Kiprā',
        funSunPageAnimationProgTitle4LinkRU: 'https://tui.ru/getmedia/e423049e-70ab-4d2b-9bde-9b8134102fca/vechernie-show-RU',
        
        funSunPageAnimationProgTitle5RU: 'Скачайте программу детского клуба Toucan в отелях FUN&SUN',
        funSunPageAnimationProgTitle5BY: 'Скачайте программу детского клуба Toucan в отелях FUN&SUN',
        funSunPageAnimationProgTitle5UA: 'Скачайте программу детского клуба Toucan в отелях FUN&SUN',
        funSunPageAnimationProgTitle5EE: 'Laadige alla FUN&SUN hotellide Toucan lasteprogrammi',
        funSunPageAnimationProgTitle5LT: 'Vaikų klubo Toucan programa FUN&SUN viešbučiuose',
        funSunPageAnimationProgTitle5LV: 'Lejuplādējiet bērnu kluba Toucan programmu FUN&SUN viesnīcas',
        
        funSunPageAnimationProgTitle6RU: 'программа клубов Тукан в Турции',
        funSunPageAnimationProgTitle6BY: 'программа клубов Тукан в Турции',
        funSunPageAnimationProgTitle6UA: 'программа клубов Тукан в Турции',
        funSunPageAnimationProgTitle6EE: 'Türgi Toucan klubide programm',
        funSunPageAnimationProgTitle6LT: 'Vaikų klubo Toucan programa Turkijoje',
        funSunPageAnimationProgTitle6LV: 'Toucan klubu programma Turcijā',
        funSunPageAnimationProgTitle6LinkRU: 'https://www.tui.ru/getmedia/266dd7d9-e5e2-41ad-936c-9bedca320e9f/FS-toucan-ru-19',
        
        funSunPageAnimationProgTitle7RU: 'программа клуба Тукан на Кипр FUN&SUN Vangelis Hotel & Suite 4*',
        funSunPageAnimationProgTitle7BY: 'программа клуба Тукан на Кипр FUN&SUN Vangelis Hotel & Suite 4*',
        funSunPageAnimationProgTitle7UA: 'программа клуба Тукан на Кипр FUN&SUN Vangelis Hotel & Suite 4*',
        funSunPageAnimationProgTitle7EE: 'Toucan programm Küprosel, FUN&SUN Vangelis Hotel & Suite 4*',
        funSunPageAnimationProgTitle7LT: 'Vaikų klubo Toucan programa Kipre FUN&SUN Vangelis Hotel & Suite 4*',
        funSunPageAnimationProgTitle7LV: 'Toucan kluba programma Kiprā FUN&SUN Vangelis Hotel & Suite 4*',
        funSunPageAnimationProgTitle7LinkRU: 'https://www.tui.ru/getmedia/16d32659-fd91-406e-944a-47dc7b744a72/programma_FS-Vangelis',
        
        funSunPageAnimationProgTitle8RU: 'программа клуба Тукан на Кипр FUN&SUN Panthea Waterpark 4*',
        funSunPageAnimationProgTitle8BY: 'программа клуба Тукан на Кипр FUN&SUN Panthea Waterpark 4*',
        funSunPageAnimationProgTitle8UA: 'программа клуба Тукан на Кипр FUN&SUN Panthea Waterpark 4*',
        funSunPageAnimationProgTitle8EE: 'Toucan programm Küprosel, FUN&SUN Panthea Waterpark 4*',
        funSunPageAnimationProgTitle8LT: 'Vaikų klubo Toucan programa Kipre FUN&SUN Panthea Waterpark 4*',
        funSunPageAnimationProgTitle8LV: 'Toucan kluba programma Kiprā FUN&SUN Panthea Waterpark 4*',
        funSunPageAnimationProgTitle8LinkRU: 'https://www.tui.ru/getmedia/c8a51b7d-ab2b-4fa6-a736-ee1ceb99993d/programma_FS-Panthea',
        
    }
});

//FOOTER fun sun
const funSunPageFooter = new Vue ({
    el: '#funSunFooter',
    data: {
        
        funSunPageFooterTitle1RU: 'Сайты о концепциях',
        funSunPageFooterTitle2RU: 'Контакты',
        funSunPageFooterTitle3RU: 'FUN&SUN в социальных сетях',
        
        funSunPageFooterTitle1BY: 'Сайты о концепциях',
        funSunPageFooterTitle2BY: 'Контакты',
        funSunPageFooterTitle3BY: 'FUN&SUN в социальных сетях',
        
        funSunPageFooterTitle1UA: 'Сайты о концепциях',
        funSunPageFooterTitle2UA: 'Контакты',
        funSunPageFooterTitle3UA: 'FUN&SUN в социальных сетях',
        
        funSunPageFooterTitle1EE: 'Meie kontseptsioonid',
        funSunPageFooterTitle2EE: 'Kontakt',
        funSunPageFooterTitle3EE: 'FUN&SUN sotsiaalmeedias',
        
        funSunPageFooterTitle1LT: 'Mūsų koncepcijos',
        funSunPageFooterTitle2LT: 'Kontaktai',
        funSunPageFooterTitle3LT: 'FUN&SUN socialiniuose tinkluose',
        
        funSunPageFooterTitle1LV: 'Mūsu koncepcijas',
        funSunPageFooterTitle2LV: 'Kontakti',
        funSunPageFooterTitle3LV: 'FUN&SUN sociālajos tīklos',
        
        funSunPageFooterSite1RU : 'Все концепции',
        funSunPageFooterSite2RU : 'Сайт для агентств',
        funSunPageFooterSite3RU : 'Сайт B2b',
        
        funSunPageFooterSite1BY : 'Все концепции',
        funSunPageFooterSite2BY : 'Сайт для агентств',
        funSunPageFooterSite3BY : 'Сайт B2b',
        
        funSunPageFooterSite1UA : 'Все концепции',
        funSunPageFooterSite2UA : 'Сайт для агентств',
        funSunPageFooterSite3UA : 'Сайт B2b',
        
        funSunPageFooterSite1EE : 'Kõik kontseptsioonid',
        funSunPageFooterSite2EE : 'Agentidele',
        funSunPageFooterSite3EE : 'B2B veebileht',
        
        funSunPageFooterSite1LT : 'Visos koncepcijos',
        funSunPageFooterSite2LT : 'Svetainė agentūroms',
        funSunPageFooterSite3LT : 'B2B svetainė',
        
        funSunPageFooterSite1LV : 'Visas koncepcijas',
        funSunPageFooterSite2LV : 'Aģentu vietne',
        funSunPageFooterSite3LV : 'B2B vietne',
        
        funSunPageFooterSiteLink1 : '/concepts/home/',
        
        funSunPageFooterSiteLink2RU : 'http://agent.tui.ru/',
        funSunPageFooterSiteLink3RU : 'http://b2b.tui.ru/',
        
        funSunPageFooterSiteLink2BY : 'http://agent.tui.by/',
        funSunPageFooterSiteLink3BY : 'http://b2b.tui.by/',
        
        funSunPageFooterSiteLink2UA : 'http://agent.tui.ua/',
        funSunPageFooterSiteLink3UA : 'http://b2b.tui.ua/',
        
        funSunPageFooterSiteLink2EE : 'http://agent.tui.ee/',
        funSunPageFooterSiteLink3EE : 'https://b2b.tuibaltics.eu/',
        
        funSunPageFooterSiteLink2LT : 'http://agent.tui.lt/',
        funSunPageFooterSiteLink3LT : 'https://b2b.tuibaltics.eu/',
        
        funSunPageFooterSiteLink2LV : 'http://agent.tui.lv/',
        funSunPageFooterSiteLink3LV : 'https://b2b.tuibaltics.eu/',
        
        funSunPageFooterPhoneTitleRU : '8 (495) 104-34-50',
        funSunPageFooterPhoneLinkRU : 'tel:84951043450',
        
        funSunPageFooterPhoneTitleBY : '+375 17 316 90 74',
        funSunPageFooterPhoneLinkBY : 'tel:+375173169074',
        
        funSunPageFooterPhoneTitleUA : '+380 044 401 08 08',
        funSunPageFooterPhoneLinkUA : 'tel:+3800444010808',
        
        funSunPageFooterPhoneTitleEE : '+372 3350005',
        funSunPageFooterPhoneLinkEE : 'tel:+3723350005',
        
        funSunPageFooterPhoneTitleLT : '+370 5 240 88 89',
        funSunPageFooterPhoneLinkLT : 'tel:+37052408889',
        
        funSunPageFooterPhoneTitleLV : '+371 63007772',
        funSunPageFooterPhoneLinkLV : 'tel:+37163007772',
        
        funSunPageFooterMailTitleRU : 'diffproduct@tui.ru',
        funSunPageFooterMailLinkRU : 'mailto:diffproduct@tui.ru',
        
        funSunPageFooterMailTitleBY : 'diffproduct@tui.ru',
        funSunPageFooterMailLinkBY : 'mailto:diffproduct@tui.by',
        
        funSunPageFooterMailTitleUA : 'diffproduct@tui.ua',
        funSunPageFooterMailLinkUA : 'mailto:diffproduct@tui.ua',
        
        funSunPageFooterMailTitleEE : 'tallinn@tuibaltics.eu',
        funSunPageFooterMailLinkEE : 'mailto:tallinn@tuibaltics.eu',
        
        funSunPageFooterMailTitleLT : 'rezervacijos@tuibaltics.eu',
        funSunPageFooterMailLinkLT : 'mailto:rezervacijos@tuibaltics.eu',
        
        funSunPageFooterMailTitleLV : 'book@tuibaltics.eu',
        funSunPageFooterMailLinkLT : 'mailto:book@tuibaltics.eu',
        
        
        funSunPageFooterInstagramLink : 'https://www.instagram.com/tui_funandsun/',
        funSunPageFooterInstagramImgLink : 'https://www.tui.ru/getmedia/2f4194da-6feb-4717-a9b0-8c58d9f77851/logo-instagram-blue',
        funSunPageFooterInstagramImgWhiteLink : 'https://agent.tui.ru/getmedia/cd28b133-b476-4008-a1d9-b4ce712d7246/logoInstagramWhite',
        
        funSunPageFooterFacebookLink : 'https://www.facebook.com/TUIFUNSUN/',
        funSunPageFooterFacebookImgLink : 'https://www.tui.ru/getmedia/5647804b-b88c-4e76-b3d3-6eafcf599045/logo-fb-blue',
        funSunPageFooterFacebookImgWhiteLink : 'https://agent.tui.ru/getmedia/047e1618-6265-4712-a091-6c62e6bd8897/logoFbWhite',
        
    }
});


//СТРАНИЦА АФИША КОНЦЕРТЫ И МАСТЕРКЛАССЫ FUN SUN ===========================
const funSunPageAfishaName = new Vue({
    el: '#funSunPageAfishaName',
    data: {
        funSunPageAfishaNameLogo: 'https://www.tui.ru/getmedia/a43e4cf0-4244-45b4-8bd4-275b7d8ba1a9/logoTopFN',
        
        funSunPageAfishaNameTitleRU: 'Твое звездное лето в отелях FUN&SUN',
        funSunPageAfishaNameTitleBY: 'Твое звездное лето в отелях FUN&SUN',
        funSunPageAfishaNameTitleUA: 'Твое звездное лето в отелях FUN&SUN',
        funSunPageAfishaNameTitleEE: 'Teie maagiline suvi FUN&SUN hotellides',
        funSunPageAfishaNameTitleLT: 'Tavo nuostabi vasara FUN&SUN viešbučiuose',
        funSunPageAfishaNameTitleLV: 'Tava neaizmirstamā vasara FUN&SUN viesnīcas',
        
        funSunPageAfishaNameButtonRU: 'Подобрать тур',
        funSunPageAfishaNameButtonBY: 'Подобрать тур',
        funSunPageAfishaNameButtonUA: 'Подобрать тур',
        funSunPageAfishaNameButtonEE: 'Broneeri',
        funSunPageAfishaNameButtonLT: 'Rezervuoti',
        funSunPageAfishaNameButtonLV: 'Izvēlēties ceļojumu',
        
    }
})

const funSunPageAfishaMainInfo = new Vue({
    el: '#funSunPageAfishaMainInfo',
    data: {
        funSunPageAfishaMainInfoTitleRU: 'Грандиозный сюрприз для гостей TUI',
        funSunPageAfishaMainInfoTitleBY: 'Грандиозный сюрприз для гостей TUI',
        funSunPageAfishaMainInfoTitleUA: 'Грандиозный сюрприз для гостей TUI',
        funSunPageAfishaMainInfoTitleEE: 'Suurejooneline kingitus turistidele',
        funSunPageAfishaMainInfoTitleLT: 'Siurprizas TUI svečiams',
        funSunPageAfishaMainInfoTitleLV: 'Grandiozais pārsteigums viesiem',
        
        funSunPageAfishaMainInfoText1RU: 'Этим летом отдыхаем в лучших турецких отелях с концертами популярных исполнителей.',
        funSunPageAfishaMainInfoText1BY: 'Этим летом отдыхаем в лучших турецких отелях с концертами популярных исполнителей.',
        funSunPageAfishaMainInfoText1UA: 'Этим летом отдыхаем в лучших турецких отелях с концертами популярных исполнителей.',
        funSunPageAfishaMainInfoText1EE: 'Sel suvel puhkame Türgi parimates hotellides. Lisaks populaarsete artistide esinemised.',
        funSunPageAfishaMainInfoText1LT: 'Šią vasarą kviečiame atostogauti geriausiuose Turkijos viešbučiuose, kur koncertuoja geriausi atlikėjai.',
        funSunPageAfishaMainInfoText1LV: 'Šajā vasarā atpūtīsimies Turcijas labākajās viesnīcas, kurās uzstāsies populārākie skatuves mākslinieki.',
        
        funSunPageAfishaMainInfoText2RU: 'А ещё вас ждут профессиональные мастер-классы от лучших wellness и fitness инструкторов!',
        funSunPageAfishaMainInfoText2BY: 'А ещё вас ждут профессиональные мастер-классы от лучших wellness и fitness инструкторов!',
        funSunPageAfishaMainInfoText2UA: 'А ещё вас ждут профессиональные мастер-классы от лучших wellness и fitness инструкторов!',
        funSunPageAfishaMainInfoText2EE: 'Teid ootavad professionaalsed mestriklassid parimate wellness ja fitness instruktorite poolt!',
        funSunPageAfishaMainInfoText2LT: 'Taip pat Jūsų laukia profesionalūs wellness ir fitness instruktoriai!',
        funSunPageAfishaMainInfoText2LV: 'Jūs gaida profesionālās meistarklases no labākajiem Wellness un Fitness instruktoriem!',
    }
})

const funSunPageAfishaBanner = new Vue ({
    el: '#funSunPageAfishaBanner',
    data: {
        funSunPageAfishaBannerLinkRU: 'https://agent.tui.ru/getmedia/ee99b904-026f-448f-bad7-02bf60b02089/bannerFs-min',
    }
})

const funSunPageAfishaHotels = new Vue ({
    el: '#blockGetRound',
    data: {
        //ОТЕЛЬ 1
        funSunPageAfishaHotelImage1: 'background: url(https://agent.tui.ru/getmedia/6d964ab6-ecc5-454f-bd8e-af8837a5bbd7/hotel1Img-min)',
        funSunPageAfishaHotelName1 : 'FUN&SUN River Resort Belek 5*',
        funSunPageAfishaHotelLink1: '/Tours/Europe/Turkey/belek/Belek/TUI-FUN-SUN-River-Resort-Belek',
        funSunPageAfishaHotelLinkClient1: '/hotel/europe-turkey-belek-belek-tui__fun__sun__river__resort__belek/',
        
        //ОТЕЛЬ 2
        funSunPageAfishaHotelImage2: 'background: url(https://agent.tui.ru/getmedia/e30b07ac-0d51-4c4a-a2c8-9d8873cf72b9/hotel2Img-min)',
        funSunPageAfishaHotelName2 : 'FUN&SUN Club Serra Palace 5*',
        funSunPageAfishaHotelLink2: '/Tours/Europe/Turkey/side/Kizilot/TUI-FUN-SUN-Club-Serra-Palace-(ex-Club-Calimera-S',
        funSunPageAfishaHotelLinkClient2: '/hotel/europe-turkey-side-kizilot-tui__fun__sun__club__serra__palace__(ex__club__calimera__s/',
        
        //ОТЕЛЬ 3
        funSunPageAfishaHotelImage3: 'background: url(https://agent.tui.ru/getmedia/c732bef6-4c7d-46bd-85bf-d5de7e001080/hotel3Img-min)',
        funSunPageAfishaHotelName3 : 'FUN&SUN Miarosa Ghazal Resort 5*',
        funSunPageAfishaHotelLink3: '/Tours/Europe/Turkey/Kemer/Goynuk/TUI-FUN-SUN-Miarosa-Ghazal-Resort',
        funSunPageAfishaHotelLinkClient3: '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__miarosa__ghazal__resort/',
        
        //ОТЕЛЬ 4
        funSunPageAfishaHotelImage4: 'background: url(https://agent.tui.ru/getmedia/63df2739-c9c8-44e6-af78-cf6727660980/hotel4Img-min)',
        funSunPageAfishaHotelName4 : 'FUN&SUN Comfort Beach Resort 5*',
        funSunPageAfishaHotelLink4: '/Tours/Europe/Turkey/Kemer/Goynuk/TUI-FUN-SUN-Comfort-Beach-Resort',
        funSunPageAfishaHotelLinkClient4: '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__comfort__beach__resort/',
        
        //ОТЕЛЬ 5
        funSunPageAfishaHotelImage5: 'background: url(https://agent.tui.ru/getmedia/11138675-0288-4249-af47-af258998266e/hotel5Img-min)',
        funSunPageAfishaHotelName5 : 'FUN&SUN Club Belek 5*',
        funSunPageAfishaHotelLink5: '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-Club-Belek',
        funSunPageAfishaHotelLinkClient5: '/hotel/europe-turkey-belek-belek-tui__fun__sun__club__belek/',
        
        //ОТЕЛЬ 6
        funSunPageAfishaHotelImage6: 'background: url(https://agent.tui.ru/getmedia/ec5344c2-e889-4e91-8095-6d6c72b42d09/hotel6Img-min)',
        funSunPageAfishaHotelName6 : 'FUN&SUN Club Saphire 5*',
        funSunPageAfishaHotelLink6: '/Tours/Europe/Turkey/kemer/Tekirova/TUI-FUN-SUN-Club-Saphire/',
        funSunPageAfishaHotelLinkClient6: '/hotel/europe-turkey-kemer-tekirova-tui__fun__sun__club__saphire/',
        
        //ОТЕЛЬ 7
        funSunPageAfishaHotelImage7: 'background: url(https://agent.tui.ru/getmedia/e0a3f2db-f85b-4c57-834a-d0c6e1ca8133/hotel7Img-min)',
        funSunPageAfishaHotelName7 : 'FUN&SUN Club Di Finica 5*',
        funSunPageAfishaHotelLink7: '/Tours/Europe/Turkey/Kemer/Finike/TUI-FUN-SUN-Club-Di-Finica',
        funSunPageAfishaHotelLinkClient7: '/hotel/europe-turkey-kemer-finike-tui__fun__sun__club__di__finica/',
        
        //КНОПКИ
        funSunPageAfishaHotelButtonRU: 'Выбрать тур',
        funSunPageAfishaHotelButtonBY: 'Выбрать тур',
        funSunPageAfishaHotelButtonUA: 'Выбрать тур',
        funSunPageAfishaHotelButtonEE: 'Broneeri',
        funSunPageAfishaHotelButtonLT: 'Pasirinkti',
        funSunPageAfishaHotelButtonLV: 'Izvēlēties ceļojumu',
        
        //ДАТЫ И АРТИСТЫ ОТЕЛЬ 1
        //RU ОТЕЛЬ 1
        funSunPageAfishaHotel1Date1RU: '28 апреля 2019',
        funSunPageAfishaHotel1Artist1RU: 'Estradarada',
        
        funSunPageAfishaHotel1Date2RU: '1 июня 2019',
        funSunPageAfishaHotel1Artist2RU: 'Белый орёл',
        
        funSunPageAfishaHotel1Date3RU: '29 июня 2019',
        funSunPageAfishaHotel1Artist3RU: 'Rumbero’s',
        
        funSunPageAfishaHotel1Date4RU: '30 июля 2019',
        funSunPageAfishaHotel1Artist4RU: 'Пропаганда',
        
        funSunPageAfishaHotel1Date5RU: '26 августа 2019',
        funSunPageAfishaHotel1Artist5RU: 'Virus!',
        
        funSunPageAfishaHotel1Date6RU: '21 сентября 2019',
        funSunPageAfishaHotel1Artist6RU: 'Корни',
        
        
        //BY ОТЕЛЬ 1
        funSunPageAfishaHotel1Date1BY: '28 апреля 2019',
        funSunPageAfishaHotel1Artist1BY: 'Estradarada',
        
        funSunPageAfishaHotel1Date2BY: '1 июня 2019',
        funSunPageAfishaHotel1Artist2BY: 'Белый орёл',
        
        funSunPageAfishaHotel1Date3BY: '29 июня 2019',
        funSunPageAfishaHotel1Artist3BY: 'Rumbero’s',
        
        funSunPageAfishaHotel1Date4BY: '30 июля 2019',
        funSunPageAfishaHotel1Artist4BY: 'Пропаганда',
        
        funSunPageAfishaHotel1Date5BY: '26 августа 2019',
        funSunPageAfishaHotel1Artist5BY: 'Virus!',
        
        funSunPageAfishaHotel1Date6BY: '21 сентября 2019',
        funSunPageAfishaHotel1Artist6BY: 'Корни',
        
        
        //UA ОТЕЛЬ 1
        funSunPageAfishaHotel1Date1UA: '28 апреля 2019',
        funSunPageAfishaHotel1Artist1UA: 'Estradarada',
        
        funSunPageAfishaHotel1Date2UA: '1 июня 2019',
        funSunPageAfishaHotel1Artist2UA: 'Белый орёл',
        
        funSunPageAfishaHotel1Date3UA: '29 июня 2019',
        funSunPageAfishaHotel1Artist3UA: 'Rumbero’s',
        
        funSunPageAfishaHotel1Date4UA: '30 июля 2019',
        funSunPageAfishaHotel1Artist4UA: 'Пропаганда',
        
        funSunPageAfishaHotel1Date5UA: '26 августа 2019',
        funSunPageAfishaHotel1Artist5UA: 'Virus!',
        
        funSunPageAfishaHotel1Date6UA: '21 сентября 2019',
        funSunPageAfishaHotel1Artist6UA: 'Корни',
        
        
        //EE ОТЕЛЬ 1
        funSunPageAfishaHotel1Date1EE: '28 aprill 2019',
        funSunPageAfishaHotel1Artist1EE: 'Estradarada',
        
        funSunPageAfishaHotel1Date2EE: '1 juuni 2019',
        funSunPageAfishaHotel1Artist2EE: 'White Eagle',
        
        funSunPageAfishaHotel1Date3EE: '29 juuni 2019',
        funSunPageAfishaHotel1Artist3EE: 'Rumbero’s',
        
        funSunPageAfishaHotel1Date4EE: '30 juuli 2019',
        funSunPageAfishaHotel1Artist4EE: 'Propaganda',
        
        funSunPageAfishaHotel1Date5EE: '26 august 2019',
        funSunPageAfishaHotel1Artist5EE: 'Virus!',
        
        funSunPageAfishaHotel1Date6EE: '21 september 2019',
        funSunPageAfishaHotel1Artist6EE: 'Korni',
        
        
        //LT ОТЕЛЬ 1
        funSunPageAfishaHotel1Date1LT: '2019 balandžio 28',
        funSunPageAfishaHotel1Artist1LT: 'Estradarada',
        
        funSunPageAfishaHotel1Date2LT: '2019 birželio 1',
        funSunPageAfishaHotel1Artist2LT: 'Baltasis erelis',
        
        funSunPageAfishaHotel1Date3LT: '2019 birželio 29',
        funSunPageAfishaHotel1Artist3LT: 'Rumbero’s',
        
        funSunPageAfishaHotel1Date4LT: '2019 birželio 30',
        funSunPageAfishaHotel1Artist4LT: 'Propaganda',
        
        funSunPageAfishaHotel1Date5LT: '2019 rugpjūčio 30',
        funSunPageAfishaHotel1Artist5LT: 'Virus!',
        
        funSunPageAfishaHotel1Date6LT: '2019 rugsėjo 21',
        funSunPageAfishaHotel1Artist6LT: 'Korni',
        
        
        //LV ОТЕЛЬ 1
        funSunPageAfishaHotel1Date1LV: '2019. gada 28. aprīlī',
        funSunPageAfishaHotel1Artist1LV: 'Estradarada',
        
        funSunPageAfishaHotel1Date2LV: '2019. gada 1.jūnijā',
        funSunPageAfishaHotel1Artist2LV: 'Belij orel',
        
        funSunPageAfishaHotel1Date3LV: '2019. gada 29. jūnijā',
        funSunPageAfishaHotel1Artist3LV: 'Rumbero’s',
        
        funSunPageAfishaHotel1Date4LV: '2019. gada 30. jūlijā',
        funSunPageAfishaHotel1Artist4LV: 'Propaganda',
        
        funSunPageAfishaHotel1Date5LV: '2019. gada 26. augustā',
        funSunPageAfishaHotel1Artist5LV: 'Virus!',
        
        funSunPageAfishaHotel1Date6LV: '2019. gada 21. septembrī',
        funSunPageAfishaHotel1Artist6LV: 'Korni',
        
        
        
        
        
        //ДАТЫ И АРТИСТЫ ОТЕЛЬ 2
        //RU ОТЕЛЬ 2
        funSunPageAfishaHotel2Date1RU: '30 апреля 2019',
        funSunPageAfishaHotel2Artist1RU: 'Estradarada',
        
        funSunPageAfishaHotel2Date2RU: '5 июня 2019',
        funSunPageAfishaHotel2Artist2RU: 'Белый орёл',
        
        funSunPageAfishaHotel2Date3RU: '3 июля 2019',
        funSunPageAfishaHotel2Artist3RU: 'Rumbero’s',
        
        funSunPageAfishaHotel2Date4RU: '1 августа 2019',
        funSunPageAfishaHotel2Artist4RU: 'Пропаганда',
        
        funSunPageAfishaHotel2Date5RU: '30 августа 2019',
        funSunPageAfishaHotel2Artist5RU: 'Virus!',
        
        funSunPageAfishaHotel2Date6RU: '25 сентября 2019',
        funSunPageAfishaHotel2Artist6RU: 'Корни',
        
        
        //BY ОТЕЛЬ 2
        funSunPageAfishaHotel2Date1BY: '30 апреля 2019',
        funSunPageAfishaHotel2Artist1BY: 'Estradarada',
        
        funSunPageAfishaHotel2Date2BY: '5 июня 2019',
        funSunPageAfishaHotel2Artist2BY: 'Белый орёл',
        
        funSunPageAfishaHotel2Date3BY: '3 июля 2019',
        funSunPageAfishaHotel2Artist3BY: 'Rumbero’s',
        
        funSunPageAfishaHotel2Date4BY: '1 августа 2019',
        funSunPageAfishaHotel2Artist4BY: 'Пропаганда',
        
        funSunPageAfishaHotel2Date5BY: '30 августа 2019',
        funSunPageAfishaHotel2Artist5BY: 'Virus!',
        
        funSunPageAfishaHotel2Date6BY: '25 сентября 2019',
        funSunPageAfishaHotel2Artist6BY: 'Корни',
        
        
        //UA ОТЕЛЬ 2
        funSunPageAfishaHotel2Date1UA: '30 апреля 2019',
        funSunPageAfishaHotel2Artist1UA: 'Estradarada',
        
        funSunPageAfishaHotel2Date2UA: '5 июня 2019',
        funSunPageAfishaHotel2Artist2UA: 'Белый орёл',
        
        funSunPageAfishaHotel2Date3UA: '3 июля 2019',
        funSunPageAfishaHotel2Artist3UA: 'Rumbero’s',
        
        funSunPageAfishaHotel2Date4UA: '1 августа 2019',
        funSunPageAfishaHotel2Artist4UA: 'Пропаганда',
        
        funSunPageAfishaHotel2Date5UA: '30 августа 2019',
        funSunPageAfishaHotel2Artist5UA: 'Virus!',
        
        funSunPageAfishaHotel2Date6UA: '25 сентября 2019',
        funSunPageAfishaHotel2Artist6UA: 'Корни',
        
        
        //EE ОТЕЛЬ 2
        funSunPageAfishaHotel2Date1EE: '30 aprill 2019',
        funSunPageAfishaHotel2Artist1EE: 'Estradarada',
        
        funSunPageAfishaHotel2Date2EE: '5 juuni 2019',
        funSunPageAfishaHotel2Artist2EE: 'White Eagle',
        
        funSunPageAfishaHotel2Date3EE: '3 juuli 2019',
        funSunPageAfishaHotel2Artist3EE: 'Rumbero’s',
        
        funSunPageAfishaHotel2Date4EE: '1 august 2019',
        funSunPageAfishaHotel2Artist4EE: 'Propaganda',
        
        funSunPageAfishaHotel2Date5EE: '30 august 2019',
        funSunPageAfishaHotel2Artist5EE: 'Virus!',
        
        funSunPageAfishaHotel2Date6EE: '25 september 2019',
        funSunPageAfishaHotel2Artist6EE: 'Korni',
        
        
        //LT ОТЕЛЬ 2
        funSunPageAfishaHotel2Date1LT: '2019 balandžio 30',
        funSunPageAfishaHotel2Artist1LT: 'Estradarada',
        
        funSunPageAfishaHotel2Date2LT: '2019 birželio 5',
        funSunPageAfishaHotel2Artist2LT: 'Baltasis erelis',
        
        funSunPageAfishaHotel2Date3LT: '2019 birželio 3',
        funSunPageAfishaHotel2Artist3LT: 'Rumbero’s',
        
        funSunPageAfishaHotel2Date4LT: '2019 rugpjūčio 1',
        funSunPageAfishaHotel2Artist4LT: 'Propaganda',
        
        funSunPageAfishaHotel2Date5LT: '2019 rugpjūčio 30',
        funSunPageAfishaHotel2Artist5LT: 'Virus!',
        
        funSunPageAfishaHotel2Date6LT: '2019 rugsėjo 25',
        funSunPageAfishaHotel2Artist6LT: 'Korni',
        
        
        //LV ОТЕЛЬ 2
        funSunPageAfishaHotel2Date1LV: '2019.gada 30. aprīlī',
        funSunPageAfishaHotel2Artist1LV: 'Estradarada',
        
        funSunPageAfishaHotel2Date2LV: '2019.gada 5. jūnijā',
        funSunPageAfishaHotel2Artist2LV: 'Belij orel',
        
        funSunPageAfishaHotel2Date3LV: '2019.gada 3. jūlijā',
        funSunPageAfishaHotel2Artist3LV: 'Rumbero’s',
        
        funSunPageAfishaHotel2Date4LV: '2019.gada 1. augustā',
        funSunPageAfishaHotel2Artist4LV: 'Propaganda',
        
        funSunPageAfishaHotel2Date5LV: '2019.gada 30. augustā',
        funSunPageAfishaHotel2Artist5LV: 'Virus!',
        
        funSunPageAfishaHotel2Date6LV: '2019.gada 25. septembrī',
        funSunPageAfishaHotel2Artist6LV: 'Korni',
        
        
        
        
        
        //ДАТЫ И АРТИСТЫ ОТЕЛЬ 3
        //RU ОТЕЛЬ 3
        funSunPageAfishaHotel3Date1RU: '7 мая 2019',
        funSunPageAfishaHotel3Artist1RU: 'Rumbero’s',
        
        funSunPageAfishaHotel3Date2RU: '4 июня 2019',
        funSunPageAfishaHotel3Artist2RU: 'VIRUS!',
        
        funSunPageAfishaHotel3Date3RU: '1 июля 2019',
        funSunPageAfishaHotel3Artist3RU: 'Пропаганда',
        
        funSunPageAfishaHotel3Date4RU: '30 июля 2019',
        funSunPageAfishaHotel3Artist4RU: 'Белый орёл',
        
        funSunPageAfishaHotel3Date5RU: '23 августа 2019',
        funSunPageAfishaHotel3Artist5RU: 'Корни',
        
        funSunPageAfishaHotel3Date6RU: '22 сентября 2019',
        funSunPageAfishaHotel3Artist6RU: 'Estradarada',
        
        
        //BY ОТЕЛЬ 3
        funSunPageAfishaHotel3Date1BY: '7 мая 2019',
        funSunPageAfishaHotel3Artist1BY: 'Rumbero’s',
        
        funSunPageAfishaHotel3Date2BY: '4 июня 2019',
        funSunPageAfishaHotel3Artist2BY: 'VIRUS!',
        
        funSunPageAfishaHotel3Date3BY: '1 июля 2019',
        funSunPageAfishaHotel3Artist3BY: 'Пропаганда',
        
        funSunPageAfishaHotel3Date4BY: '30 июля 2019',
        funSunPageAfishaHotel3Artist4BY: 'Белый орёл',
        
        funSunPageAfishaHotel3Date5BY: '23 августа 2019',
        funSunPageAfishaHotel3Artist5BY: 'Корни',
        
        funSunPageAfishaHotel3Date6BY: '22 сентября 2019',
        funSunPageAfishaHotel3Artist6BY: 'Estradarada',
        
        
        //UA ОТЕЛЬ 3
        funSunPageAfishaHotel3Date1UA: '7 мая 2019',
        funSunPageAfishaHotel3Artist1UA: 'Rumbero’s',
        
        funSunPageAfishaHotel3Date2UA: '4 июня 2019',
        funSunPageAfishaHotel3Artist2UA: 'VIRUS!',
        
        funSunPageAfishaHotel3Date3UA: '1 июля 2019',
        funSunPageAfishaHotel3Artist3UA: 'Пропаганда',
        
        funSunPageAfishaHotel3Date4UA: '30 июля 2019',
        funSunPageAfishaHotel3Artist4UA: 'Белый орёл',
        
        funSunPageAfishaHotel3Date5UA: '23 августа 2019',
        funSunPageAfishaHotel3Artist5UA: 'Корни',
        
        funSunPageAfishaHotel3Date6UA: '22 сентября 2019',
        funSunPageAfishaHotel3Artist6UA: 'Estradarada',
        
        
        //EE ОТЕЛЬ 3
        funSunPageAfishaHotel3Date1EE: '7 mai 2019',
        funSunPageAfishaHotel3Artist1EE: 'Rumbero’s',
        
        funSunPageAfishaHotel3Date2EE: '4 juuni 2019',
        funSunPageAfishaHotel3Artist2EE: 'VIRUS!',
        
        funSunPageAfishaHotel3Date3EE: '1 juuli 2019',
        funSunPageAfishaHotel3Artist3EE: 'Propaganda',
        
        funSunPageAfishaHotel3Date4EE: '30 juuli 2019',
        funSunPageAfishaHotel3Artist4EE: 'White Eagle',
        
        funSunPageAfishaHotel3Date5EE: '23 august 2019',
        funSunPageAfishaHotel3Artist5EE: 'Korni',
        
        funSunPageAfishaHotel3Date6EE: '22 september 2019',
        funSunPageAfishaHotel3Artist6EE: 'Estradarada',
        
        
        //LT ОТЕЛЬ 3
        funSunPageAfishaHotel3Date1LT: '2019 gegužės 7',
        funSunPageAfishaHotel3Artist1LT: 'Rumbero’s',
        
        funSunPageAfishaHotel3Date2LT: '2019 birželio 4',
        funSunPageAfishaHotel3Artist2LT: 'VIRUS!',
        
        funSunPageAfishaHotel3Date3LT: '2019 liepos 1',
        funSunPageAfishaHotel3Artist3LT: 'Propaganda',
        
        funSunPageAfishaHotel3Date4LT: '2019 liepos 30',
        funSunPageAfishaHotel3Artist4LT: 'Baltasis erelis',
        
        funSunPageAfishaHotel3Date5LT: '2019 rugpjūčio 23',
        funSunPageAfishaHotel3Artist5LT: 'Korni',
        
        funSunPageAfishaHotel3Date6LT: '2019 rugsėjo 22',
        funSunPageAfishaHotel3Artist6LT: 'Estradarada',
        
        
        //LV ОТЕЛЬ 3
        funSunPageAfishaHotel3Date1LV: '2019.gada 7. maijā',
        funSunPageAfishaHotel3Artist1LV: 'Rumbero’s',
        
        funSunPageAfishaHotel3Date2LV: '2019.gada 4. jūnijā',
        funSunPageAfishaHotel3Artist2LV: 'VIRUS!',
        
        funSunPageAfishaHotel3Date3LV: '2019.gada 1. jūlijā',
        funSunPageAfishaHotel3Artist3LV: 'Propaganda',
        
        funSunPageAfishaHotel3Date4LV: '2019.gada 30. jūlijā',
        funSunPageAfishaHotel3Artist4LV: 'Belij orel',
        
        funSunPageAfishaHotel3Date5LV: '2019.gada 23. augustā',
        funSunPageAfishaHotel3Artist5LV: 'Korni',
        
        funSunPageAfishaHotel3Date6LV: '2019.gada 22.septembrī',
        funSunPageAfishaHotel3Artist6LV: 'Estradarada',
        
        
        
        
        
        //ДАТЫ И АРТИСТЫ ОТЕЛЬ 4
        //RU ОТЕЛЬ 4
        funSunPageAfishaHotel4Date1RU: '6 мая 2019',
        funSunPageAfishaHotel4Artist1RU: 'Rumbero’s',
        
        funSunPageAfishaHotel4Date2RU: '3 июня 2019',
        funSunPageAfishaHotel4Artist2RU: 'VIRUS!',
        
        funSunPageAfishaHotel4Date3RU: '30 июня 2019',
        funSunPageAfishaHotel4Artist3RU: 'Пропаганда',
        
        funSunPageAfishaHotel4Date4RU: '28 июля 2019',
        funSunPageAfishaHotel4Artist4RU: 'Белый орёл',
        
        funSunPageAfishaHotel4Date5RU: '21 августа 2019',
        funSunPageAfishaHotel4Artist5RU: 'Корни',
        
        funSunPageAfishaHotel4Date6RU: '20 сентября 2019',
        funSunPageAfishaHotel4Artist6RU: 'Estradarada',
        
        
        //BY ОТЕЛЬ 4
        funSunPageAfishaHotel4Date1BY: '6 мая 2019',
        funSunPageAfishaHotel4Artist1BY: 'Rumbero’s',
        
        funSunPageAfishaHotel4Date2BY: '3 июня 2019',
        funSunPageAfishaHotel4Artist2BY: 'VIRUS!',
        
        funSunPageAfishaHotel4Date3BY: '30 июня 2019',
        funSunPageAfishaHotel4Artist3BY: 'Пропаганда',
        
        funSunPageAfishaHotel4Date4BY: '28 июля 2019',
        funSunPageAfishaHotel4Artist4BY: 'Белый орёл',
        
        funSunPageAfishaHotel4Date5BY: '21 августа 2019',
        funSunPageAfishaHotel4Artist5BY: 'Корни',
        
        funSunPageAfishaHotel4Date6BY: '20 сентября 2019',
        funSunPageAfishaHotel4Artist6BY: 'Estradarada',
        
        
        //UA ОТЕЛЬ 4
        funSunPageAfishaHotel4Date1UA: '6 мая 2019',
        funSunPageAfishaHotel4Artist1UA: 'Rumbero’s',
        
        funSunPageAfishaHotel4Date2UA: '3 июня 2019',
        funSunPageAfishaHotel4Artist2UA: 'VIRUS!',
        
        funSunPageAfishaHotel4Date3UA: '30 июня 2019',
        funSunPageAfishaHotel4Artist3UA: 'Пропаганда',
        
        funSunPageAfishaHotel4Date4UA: '28 июля 2019',
        funSunPageAfishaHotel4Artist4UA: 'Белый орёл',
        
        funSunPageAfishaHotel4Date5UA: '21 августа 2019',
        funSunPageAfishaHotel4Artist5UA: 'Корни',
        
        funSunPageAfishaHotel4Date6UA: '20 сентября 2019',
        funSunPageAfishaHotel4Artist6UA: 'Estradarada',
        
        
        //EE ОТЕЛЬ 4
        funSunPageAfishaHotel4Date1EE: '6 mai 2019',
        funSunPageAfishaHotel4Artist1EE: 'Rumbero’s',
        
        funSunPageAfishaHotel4Date2EE: '3 juuni 2019',
        funSunPageAfishaHotel4Artist2EE: 'VIRUS!',
        
        funSunPageAfishaHotel4Date3EE: '30 juuni 2019',
        funSunPageAfishaHotel4Artist3EE: 'Propaganda',
        
        funSunPageAfishaHotel4Date4EE: '28 juuli 2019',
        funSunPageAfishaHotel4Artist4EE: 'White Eagle',
        
        funSunPageAfishaHotel4Date5EE: '21 august 2019',
        funSunPageAfishaHotel4Artist5EE: 'Korni',
        
        funSunPageAfishaHotel4Date6EE: '20 september 2019',
        funSunPageAfishaHotel4Artist6EE: 'Estradarada',
        
        
        //LT ОТЕЛЬ 4
        funSunPageAfishaHotel4Date1LT: '2019 gegužės 6',
        funSunPageAfishaHotel4Artist1LT: 'Rumbero’s',
        
        funSunPageAfishaHotel4Date2LT: '2019 birželio 3',
        funSunPageAfishaHotel4Artist2LT: 'VIRUS!',
        
        funSunPageAfishaHotel4Date3LT: '2019 birželio 30',
        funSunPageAfishaHotel4Artist3LT: 'Propaganda',
        
        funSunPageAfishaHotel4Date4LT: '2019 birželio 28',
        funSunPageAfishaHotel4Artist4LT: 'Baltasis erelis',
        
        funSunPageAfishaHotel4Date5LT: '2019 rugpjūčio 21',
        funSunPageAfishaHotel4Artist5LT: 'Korni',
        
        funSunPageAfishaHotel4Date6LT: '2019 rugsėjo 20',
        funSunPageAfishaHotel4Artist6LT: 'Estradarada',
        
        
        //LV ОТЕЛЬ 4
        funSunPageAfishaHotel4Date1LV: '2019.gada 6.maijā',
        funSunPageAfishaHotel4Artist1LV: 'Rumbero’s',
        
        funSunPageAfishaHotel4Date2LV: '2019.gada 3. jūnijā',
        funSunPageAfishaHotel4Artist2LV: 'VIRUS!',
        
        funSunPageAfishaHotel4Date3LV: '2019.gada 30. jūnijā',
        funSunPageAfishaHotel4Artist3LV: 'Propaganda',
        
        funSunPageAfishaHotel4Date4LV: '2019.gada 28. jūlijā',
        funSunPageAfishaHotel4Artist4LV: 'Belij orel',
        
        funSunPageAfishaHotel4Date5LV: '2019.gada 21.augustā',
        funSunPageAfishaHotel4Artist5LV: 'Korni',
        
        funSunPageAfishaHotel4Date6LV: '2019.gada 20. septembrī',
        funSunPageAfishaHotel4Artist6LV: 'Estradarada',
        
        
        
        
        
        //ДАТЫ И АРТИСТЫ ОТЕЛЬ 5
        //RU ОТЕЛЬ 5
        funSunPageAfishaHotel5Date1RU: '29 апреля 2019',
        funSunPageAfishaHotel5Artist1RU: 'Estradarada',
        
        funSunPageAfishaHotel5Date2RU: '3 июня 2019',
        funSunPageAfishaHotel5Artist2RU: 'Белый орёл',
        
        funSunPageAfishaHotel5Date3RU: '1 июля 2019',
        funSunPageAfishaHotel5Artist3RU: 'Rumbero’s',
        
        funSunPageAfishaHotel5Date4RU: '31 июля 2019',
        funSunPageAfishaHotel5Artist4RU: 'Пропаганда',
        
        funSunPageAfishaHotel5Date5RU: '28 августа 2019',
        funSunPageAfishaHotel5Artist5RU: 'VIRUS!',
        
        funSunPageAfishaHotel5Date6RU: '23 сентября 2019',
        funSunPageAfishaHotel5Artist6RU: 'Корни',
        
        
        
        //BY ОТЕЛЬ 5
        funSunPageAfishaHotel5Date1BY: '29 апреля 2019',
        funSunPageAfishaHotel5Artist1BY: 'Estradarada',
        
        funSunPageAfishaHotel5Date2BY: '3 июня 2019',
        funSunPageAfishaHotel5Artist2BY: 'Белый орёл',
        
        funSunPageAfishaHotel5Date3BY: '1 июля 2019',
        funSunPageAfishaHotel5Artist3BY: 'Rumbero’s',
        
        funSunPageAfishaHotel5Date4BY: '31 июля 2019',
        funSunPageAfishaHotel5Artist4BY: 'Пропаганда',
        
        funSunPageAfishaHotel5Date5BY: '28 августа 2019',
        funSunPageAfishaHotel5Artist5BY: 'VIRUS!',
        
        funSunPageAfishaHotel5Date6BY: '23 сентября 2019',
        funSunPageAfishaHotel5Artist6BY: 'Корни',
        
        
        
        //UA ОТЕЛЬ 5
        funSunPageAfishaHotel5Date1UA: '29 апреля 2019',
        funSunPageAfishaHotel5Artist1UA: 'Estradarada',
        
        funSunPageAfishaHotel5Date2UA: '3 июня 2019',
        funSunPageAfishaHotel5Artist2UA: 'Белый орёл',
        
        funSunPageAfishaHotel5Date3UA: '1 июля 2019',
        funSunPageAfishaHotel5Artist3UA: 'Rumbero’s',
        
        funSunPageAfishaHotel5Date4UA: '31 июля 2019',
        funSunPageAfishaHotel5Artist4UA: 'Пропаганда',
        
        funSunPageAfishaHotel5Date5UA: '28 августа 2019',
        funSunPageAfishaHotel5Artist5UA: 'VIRUS!',
        
        funSunPageAfishaHotel5Date6UA: '23 сентября 2019',
        funSunPageAfishaHotel5Artist6UA: 'Корни',
        
        
        //EE ОТЕЛЬ 5
        funSunPageAfishaHotel5Date1EE: '29 aprill 2019',
        funSunPageAfishaHotel5Artist1EE: 'Estradarada',
        
        funSunPageAfishaHotel5Date2EE: '3 juuni 2019',
        funSunPageAfishaHotel5Artist2EE: 'White Eagle',
        
        funSunPageAfishaHotel5Date3EE: '1 juuli 2019',
        funSunPageAfishaHotel5Artist3EE: 'Rumbero’s',
        
        funSunPageAfishaHotel5Date4EE: '31 juuli 2019',
        funSunPageAfishaHotel5Artist4EE: 'Propaganda',
        
        funSunPageAfishaHotel5Date5EE: '28 august 2019',
        funSunPageAfishaHotel5Artist5EE: 'VIRUS!',
        
        funSunPageAfishaHotel5Date6EE: '23 september 2019',
        funSunPageAfishaHotel5Artist6EE: 'Korni',
        
        
        //LT ОТЕЛЬ 5
        funSunPageAfishaHotel5Date1LT: '2019 balandžio 29',
        funSunPageAfishaHotel5Artist1LT: 'Estradarada',
        
        funSunPageAfishaHotel5Date2LT: '2019 birželio 3',
        funSunPageAfishaHotel5Artist2LT: 'Baltasis erelis',
        
        funSunPageAfishaHotel5Date3LT: '2019 liepos 1',
        funSunPageAfishaHotel5Artist3LT: 'Rumbero’s',
        
        funSunPageAfishaHotel5Date4LT: '2019 liepos 31',
        funSunPageAfishaHotel5Artist4LT: 'Propaganda',
        
        funSunPageAfishaHotel5Date5LT: '2019 rugpjūčio 28',
        funSunPageAfishaHotel5Artist5LT: 'VIRUS!',
        
        funSunPageAfishaHotel5Date6LT: '2019 rugsėjo 23',
        funSunPageAfishaHotel5Artist6LT: 'Korni',
        
        
        //LV ОТЕЛЬ 5
        funSunPageAfishaHotel5Date1LV: '2019.gada 29. aprīlī',
        funSunPageAfishaHotel5Artist1LV: 'Estradarada',
        
        funSunPageAfishaHotel5Date2LV: '2019. gada 3. jūnijā',
        funSunPageAfishaHotel5Artist2LV: 'Belij orel',
        
        funSunPageAfishaHotel5Date3LV: '2019. gada 1. jūlijā',
        funSunPageAfishaHotel5Artist3LV: 'Rumbero’s',
        
        funSunPageAfishaHotel5Date4LV: '2019.gada 31. jūlijā',
        funSunPageAfishaHotel5Artist4LV: 'Propaganda',
        
        funSunPageAfishaHotel5Date5LV: '2019. gada 28. augustā',
        funSunPageAfishaHotel5Artist5LV: 'VIRUS!',
        
        funSunPageAfishaHotel5Date6LV: '2019.gada 23. septembrī',
        funSunPageAfishaHotel5Artist6LV: 'Korni',
        
        
        
        
        
        //ДАТЫ И АРТИСТЫ ОТЕЛЬ 6
        //RU ОТЕЛЬ 6
        funSunPageAfishaHotel6Date1RU: '8 мая 2019',
        funSunPageAfishaHotel6Artist1RU: 'Rumbero’s',
        
        funSunPageAfishaHotel6Date2RU: '6 июня 2019',
        funSunPageAfishaHotel6Artist2RU: 'VIRUS!',
        
        funSunPageAfishaHotel6Date3RU: '3 июля 2019',
        funSunPageAfishaHotel6Artist3RU: 'Пропаганда',
        
        funSunPageAfishaHotel6Date4RU: '1 августа 2019',
        funSunPageAfishaHotel6Artist4RU: 'Белый орёл',
        
        funSunPageAfishaHotel6Date5RU: '25 августа 2019',
        funSunPageAfishaHotel6Artist5RU: 'Корни',
        
        funSunPageAfishaHotel6Date6RU: '24 сентября 2019',
        funSunPageAfishaHotel6Artist6RU: 'Estradarada',
        
        
        //BY ОТЕЛЬ 6
        funSunPageAfishaHotel6Date1BY: '8 мая 2019',
        funSunPageAfishaHotel6Artist1BY: 'Rumbero’s',
        
        funSunPageAfishaHotel6Date2BY: '6 июня 2019',
        funSunPageAfishaHotel6Artist2BY: 'VIRUS!',
        
        funSunPageAfishaHotel6Date3BY: '3 июля 2019',
        funSunPageAfishaHotel6Artist3BY: 'Пропаганда',
        
        funSunPageAfishaHotel6Date4BY: '1 августа 2019',
        funSunPageAfishaHotel6Artist4BY: 'Белый орёл',
        
        funSunPageAfishaHotel6Date5BY: '25 августа 2019',
        funSunPageAfishaHotel6Artist5BY: 'Корни',
        
        funSunPageAfishaHotel6Date6BY: '24 сентября 2019',
        funSunPageAfishaHotel6Artist6BY: 'Estradarada',
        
        
        //UA ОТЕЛЬ 6
        funSunPageAfishaHotel6Date1UA: '8 мая 2019',
        funSunPageAfishaHotel6Artist1UA: 'Rumbero’s',
        
        funSunPageAfishaHotel6Date2UA: '6 июня 2019',
        funSunPageAfishaHotel6Artist2UA: 'VIRUS!',
        
        funSunPageAfishaHotel6Date3UA: '3 июля 2019',
        funSunPageAfishaHotel6Artist3UA: 'Пропаганда',
        
        funSunPageAfishaHotel6Date4UA: '1 августа 2019',
        funSunPageAfishaHotel6Artist4UA: 'Белый орёл',
        
        funSunPageAfishaHotel6Date5UA: '25 августа 2019',
        funSunPageAfishaHotel6Artist5UA: 'Корни',
        
        funSunPageAfishaHotel6Date6UA: '24 сентября 2019',
        funSunPageAfishaHotel6Artist6UA: 'Estradarada',
        
        
        //EE ОТЕЛЬ 6
        funSunPageAfishaHotel6Date1EE: '8 mai 2019',
        funSunPageAfishaHotel6Artist1EE: 'Rumbero’s',
        
        funSunPageAfishaHotel6Date2EE: '6 juuni 2019',
        funSunPageAfishaHotel6Artist2EE: 'VIRUS!',
        
        funSunPageAfishaHotel6Date3EE: '3 juuli 2019',
        funSunPageAfishaHotel6Artist3EE: 'Propaganda',
        
        funSunPageAfishaHotel6Date4EE: '1 august 2019',
        funSunPageAfishaHotel6Artist4EE: 'White Eagle',
        
        funSunPageAfishaHotel6Date5EE: '25 august 2019',
        funSunPageAfishaHotel6Artist5EE: 'Korni',
        
        funSunPageAfishaHotel6Date6EE: '24 september 2019',
        funSunPageAfishaHotel6Artist6EE: 'Estradarada',
        
        
        //LT ОТЕЛЬ 6
        funSunPageAfishaHotel6Date1LT: '2019 gegužės 8',
        funSunPageAfishaHotel6Artist1LT: 'Rumbero’s',
        
        funSunPageAfishaHotel6Date2LT: '2019 birželio 6',
        funSunPageAfishaHotel6Artist2LT: 'VIRUS!',
        
        funSunPageAfishaHotel6Date3LT: '2019 birželio 3',
        funSunPageAfishaHotel6Artist3LT: 'Propaganda',
        
        funSunPageAfishaHotel6Date4LT: '2019 rugpjūčio 1',
        funSunPageAfishaHotel6Artist4LT: 'Baltasis erelis',
        
        funSunPageAfishaHotel6Date5LT: '2019 rugpjūčio 25',
        funSunPageAfishaHotel6Artist5LT: 'Korni',
        
        funSunPageAfishaHotel6Date6LT: '2019 rugpjūčio 24',
        funSunPageAfishaHotel6Artist6LT: 'Estradarada',
        
        
        //LV ОТЕЛЬ 6
        funSunPageAfishaHotel6Date1LV: '2019.gada 8.maijā',
        funSunPageAfishaHotel6Artist1LV: 'Rumbero’s',
        
        funSunPageAfishaHotel6Date2LV: '2019.gada 6. jūnijā',
        funSunPageAfishaHotel6Artist2LV: 'VIRUS!',
        
        funSunPageAfishaHotel6Date3LV: '2019.gada 3. jūlijā',
        funSunPageAfishaHotel6Artist3LV: 'Propaganda',
        
        funSunPageAfishaHotel6Date4LV: '2019. gada 1. augustā',
        funSunPageAfishaHotel6Artist4LV: 'Belij orel',
        
        funSunPageAfishaHotel6Date5LV: '2019. gada 25.augustā',
        funSunPageAfishaHotel6Artist5LV: 'Korni',
        
        funSunPageAfishaHotel6Date6LV: '2019.gada 24. septembrī',
        funSunPageAfishaHotel6Artist6LV: 'Estradarada',
        
        
        
        
        
        //ДАТЫ И АРТИСТЫ ОТЕЛЬ 7
        //RU ОТЕЛЬ 7
        funSunPageAfishaHotel7Date1RU: '9 мая 2019',
        funSunPageAfishaHotel7Artist1RU: 'Rumbero’s',
        
        funSunPageAfishaHotel7Date2RU: '8 июня 2019',
        funSunPageAfishaHotel7Artist2RU: 'VIRUS!',
        
        funSunPageAfishaHotel7Date3RU: '4 июля 2019',
        funSunPageAfishaHotel7Artist3RU: 'Пропаганда',
        
        funSunPageAfishaHotel7Date4RU: '3 августа 2019',
        funSunPageAfishaHotel7Artist4RU: 'Белый орёл',
        
        funSunPageAfishaHotel7Date5RU: '27 августа 2019',
        funSunPageAfishaHotel7Artist5RU: 'Корни',
        
        funSunPageAfishaHotel7Date6RU: '26 сентября 2019',
        funSunPageAfishaHotel7Artist6RU: 'Estradarada',
        
        
        //BY ОТЕЛЬ 7
        funSunPageAfishaHotel7Date1BY: '9 мая 2019',
        funSunPageAfishaHotel7Artist1BY: 'Rumbero’s',
        
        funSunPageAfishaHotel7Date2BY: '8 июня 2019',
        funSunPageAfishaHotel7Artist2BY: 'VIRUS!',
        
        funSunPageAfishaHotel7Date3BY: '4 июля 2019',
        funSunPageAfishaHotel7Artist3BY: 'Пропаганда',
        
        funSunPageAfishaHotel7Date4BY: '3 августа 2019',
        funSunPageAfishaHotel7Artist4BY: 'Белый орёл',
        
        funSunPageAfishaHotel7Date5BY: '27 августа 2019',
        funSunPageAfishaHotel7Artist5BY: 'Корни',
        
        funSunPageAfishaHotel7Date6BY: '26 сентября 2019',
        funSunPageAfishaHotel7Artist6BY: 'Estradarada',
        
        
        //UA ОТЕЛЬ 7
        funSunPageAfishaHotel7Date1UA: '9 мая 2019',
        funSunPageAfishaHotel7Artist1UA: 'Rumbero’s',
        
        funSunPageAfishaHotel7Date2UA: '8 июня 2019',
        funSunPageAfishaHotel7Artist2UA: 'VIRUS!',
        
        funSunPageAfishaHotel7Date3UA: '4 июля 2019',
        funSunPageAfishaHotel7Artist3UA: 'Пропаганда',
        
        funSunPageAfishaHotel7Date4UA: '3 августа 2019',
        funSunPageAfishaHotel7Artist4UA: 'Белый орёл',
        
        funSunPageAfishaHotel7Date5UA: '27 августа 2019',
        funSunPageAfishaHotel7Artist5UA: 'Корни',
        
        funSunPageAfishaHotel7Date6UA: '26 сентября 2019',
        funSunPageAfishaHotel7Artist6UA: 'Estradarada',
        
        
        //EE ОТЕЛЬ 7
        funSunPageAfishaHotel7Date1EE: '9 мая 2019',
        funSunPageAfishaHotel7Artist1EE: 'Rumbero’s',
        
        funSunPageAfishaHotel7Date2EE: '8 juuni 2019',
        funSunPageAfishaHotel7Artist2EE: 'VIRUS!',
        
        funSunPageAfishaHotel7Date3EE: '4 juuli 2019',
        funSunPageAfishaHotel7Artist3EE: 'Propaganda',
        
        funSunPageAfishaHotel7Date4EE: '3 august 2019',
        funSunPageAfishaHotel7Artist4EE: 'White Eagle',
        
        funSunPageAfishaHotel7Date5EE: '27 august 2019',
        funSunPageAfishaHotel7Artist5EE: 'Korni',
        
        funSunPageAfishaHotel7Date6EE: '26 september 2019',
        funSunPageAfishaHotel7Artist6EE: 'Estradarada',
        
        
        //LT ОТЕЛЬ 7
        funSunPageAfishaHotel7Date1LT: '2019 gegužės 9',
        funSunPageAfishaHotel7Artist1LT: 'Rumbero’s',
        
        funSunPageAfishaHotel7Date2LT: '2019 birželio 8',
        funSunPageAfishaHotel7Artist2LT: 'VIRUS!',
        
        funSunPageAfishaHotel7Date3LT: '2019 birželio 4',
        funSunPageAfishaHotel7Artist3LT: 'Propaganda',
        
        funSunPageAfishaHotel7Date4LT: '2019 rugpjūčio 3',
        funSunPageAfishaHotel7Artist4LT: 'Baltasis erelis',
        
        funSunPageAfishaHotel7Date5LT: '2019 rugpjūčio 27',
        funSunPageAfishaHotel7Artist5LT: 'Korni',
        
        funSunPageAfishaHotel7Date6LT: '2019 rugsėjo 26',
        funSunPageAfishaHotel7Artist6LT: 'Estradarada',
        
        
        //LV ОТЕЛЬ 7
        funSunPageAfishaHotel7Date1LV: '2019.gada 8. jūnijā',
        funSunPageAfishaHotel7Artist1LV: 'Rumbero’s',
        
        funSunPageAfishaHotel7Date2LV: '2019.gada 8. jūnijā',
        funSunPageAfishaHotel7Artist2LV: 'VIRUS!',
        
        funSunPageAfishaHotel7Date3LV: '2019. gada 4. jūlijā',
        funSunPageAfishaHotel7Artist3LV: 'Propaganda',
        
        funSunPageAfishaHotel7Date4LV: '2019. gada 3. augustā',
        funSunPageAfishaHotel7Artist4LV: 'Belij orel',
        
        funSunPageAfishaHotel7Date5LV: '2019. gada 27. augustā',
        funSunPageAfishaHotel7Artist5LV: 'Korni',
        
        funSunPageAfishaHotel7Date6LV: '2019. gada 26. septembrī',
        funSunPageAfishaHotel7Artist6LV: 'Estradarada',
    }
})

const funSunPageAfishaSport = new Vue ({
    el: '#funSunPageAfishaSport',
    data: {
        funSunPageAfishaSportTitleRU: 'Спортивная программа с модными фитнес-инструкторами!',
        funSunPageAfishaSportTitleBY: 'Спортивная программа с модными фитнес-инструкторами!',
        funSunPageAfishaSportTitleUA: 'Спортивная программа с модными фитнес-инструкторами!',
        funSunPageAfishaSportTitleEE: 'Proffesionaalsete treenerite meistriklassid!',
        funSunPageAfishaSportTitleLT: 'Sporto programa su fitness instruktoriai!',
        funSunPageAfishaSportTitleLV: 'Sporta programma ar slaveniem fitnesa instruktoriem!',
        
        funSunPageAfishaSportTextRU: 'C 7 мая по 28 сентября мастер-классы от профессиональных wellness и fitness инструкторов в отелях FUN&SUN',
        funSunPageAfishaSportTextBY: 'C 7 мая по 28 сентября мастер-классы от профессиональных wellness и fitness инструкторов в отелях FUN&SUN',
        funSunPageAfishaSportTextUA: 'C 7 мая по 28 сентября мастер-классы от профессиональных wellness и fitness инструкторов в отелях FUN&SUN',
        funSunPageAfishaSportTextEE: '7 mai kuni 28 september professionaalsete fitness&amp;wellness treenerite meistriklassid FUN&SUN hotellides',
        funSunPageAfishaSportTextLT: 'Nuo gegužės 7 iki rugsėjo 28 d. profesionalūs užsiėmimai su wellness ir fitness instruktoriais FUN&SUN viešbučiuose',
        funSunPageAfishaSportTextLV: 'No 7. maijā līdz 28. septembrīm profesionālas meistarklases no labākajiem Wellness un Fitness instruktoriem FUN&SUN viesnīcās',
        
        funSunPageAfishaSportCountry1RU: 'в Турции',
        funSunPageAfishaSportCountry1BY: 'в Турции',
        funSunPageAfishaSportCountry1UA: 'в Турции',
        funSunPageAfishaSportCountry1EE: 'в Турции',
        funSunPageAfishaSportCountry1LT: 'Turkijoje',
        funSunPageAfishaSportCountry1LV: 'Turcijā',
        
        funSunPageAfishaSportCountry2RU: 'на Кипре',
        funSunPageAfishaSportCountry2BY: 'на Кипре',
        funSunPageAfishaSportCountry2UA: 'на Кипре',
        funSunPageAfishaSportCountry2EE: 'на Кипре',
        funSunPageAfishaSportCountry2LT: 'ir Kipre',
        funSunPageAfishaSportCountry2LV: 'un Kiprā',
        
        
        
        funSunPageAfishaSportCountry1Flag: 'https://agent.tui.ru/getmedia/138b02aa-dd59-48e6-905d-4d8c0d594cb2/flag1',
        funSunPageAfishaSportCountry2Flag: 'https://agent.tui.ru/getmedia/2866620e-5452-46ee-930b-8481506e1fbf/flag1Copy',
    }
})



//СТРАНИЦА ДЛЯ ДЕТЕЙ FUN SUN =======================


const funSunForChildrenMainInfo = new Vue ({
    el:'#funSunForChildrenMainInfo',
    data: {
        
        funSunForChildrenMainInfoLogo: 'https://www.tui.ru/getmedia/599fc8fa-8b25-484b-b09f-dc541a1360ab/logo',
        
        funSunForChildrenMainInfoTitleRU: 'Развлечения для детей и подростков в отелях FUN&SUN',
        funSunForChildrenMainInfoTitleBY: 'Развлечения для детей и подростков в отелях FUN&SUN',
        funSunForChildrenMainInfoTitleUA: 'Развлечения для детей и подростков в отелях FUN&SUN',
        funSunForChildrenMainInfoTitleEE: 'Meelelahutus lastele ja teismelistele FUN&SUN hotellides',
        funSunForChildrenMainInfoTitleLT: 'Pramogos vaikams ir paaugliams FUN&SUN viešbučiuose',
        funSunForChildrenMainInfoTitleLV: 'Izklaides bērniem un pusaudžiem FUN&SUN viesnīcās',
        
        funSunForChildrenMainInfoTextRU: 'Отдых с детьми - в удовольствие! Выбирайте отели с Детским Клубом Тукан - и Вам не понадобится каждый день продумывать досуг для вашего ребенка. Мы изучили пожелания наших маленьких туристов и их родителей и разработали детские программы под разный возраст и интересы. Настольные игры, спортивные состязания, научные эксперименты и творческие мастерские - детей невозможно будет забрать из клуба! И даже "колючие" подростки отложат в сторону телефоны и по достоинству оценят наш Teens Hangout.',
        funSunForChildrenMainInfoTextBY: 'Отдых с детьми - в удовольствие! Выбирайте отели с Детским Клубом Тукан - и Вам не понадобится каждый день продумывать досуг для вашего ребенка. Мы изучили пожелания наших маленьких туристов и их родителей и разработали детские программы под разный возраст и интересы. Настольные игры, спортивные состязания, научные эксперименты и творческие мастерские - детей невозможно будет забрать из клуба! И даже "колючие" подростки отложат в сторону телефоны и по достоинству оценят наш Teens Hangout.',
        funSunForChildrenMainInfoTextUA: 'Отдых с детьми - в удовольствие! Выбирайте отели с Детским Клубом Тукан - и Вам не понадобится каждый день продумывать досуг для вашего ребенка. Мы изучили пожелания наших маленьких туристов и их родителей и разработали детские программы под разный возраст и интересы. Настольные игры, спортивные состязания, научные эксперименты и творческие мастерские - детей невозможно будет забрать из клуба! И даже "колючие" подростки отложат в сторону телефоны и по достоинству оценят наш Teens Hangout.',
        funSunForChildrenMainInfoTextEE: 'Nautige lastega puhkust! Valides Toucan klubiga hotelli, te ei pea muretsema lapse meelelahutuse ja vaba aja veetmise pärast. Uurisime oma väikeste turistide ja nende vanemate soove ning töötasime välja lasteprogramme erinevatele vanustele ja huvidele. Lauamängud, spordimängud, teaduslikud eksperimendid, loomingulised mängud - kaasahaaratav meelelahutus lastele! Ning isegi "rahulolematu" teismelised panevad telefone kõrvale et nautida Teens Hangout meelelahutusi.',
        funSunForChildrenMainInfoTextLT: 'Poilsis su vaikais - vienas malonumas! Pasirinkite viešbučius su Mini Toucan vaikų klubu ir jums nereiks galvoti apie savo vaiko laisvalaikį atostogų metu. Mes išgirdome savo mažųjų turistų ir jų tėvų norus ir sukūrėme programas įvairaus amžiaus ir pomėgių vaikams. Stalo žaidimai, sporto rungtys, mokslo eksperimentai ir kūrybinės dirbtuvės - visa tai vaikų klube! Netgi "padūkę" paaugliai įvertins mūsų Teens Hangout programą.',
        funSunForChildrenMainInfoTextLV: 'Kā izbaudīt atpūtu - kopā ar bērniem? Izvēlieties viesnīcas ar bērnu klubu TUI Тoucan un Jums nebūs katru dienu jādomā, kā izklaidēt savus bērnus. Mēs esam izpētījuši mūsu mazo tūristu un viņu vecāku vēlmes un izstrādājuši programmas atbilstoši bērnu vecumam un interesēm. Galda spēles, sacensības, zinātniski eksperimenti un radošās darbnīcas – bērnus nebūs iespējams dabūt laukā no kluba. Pat “spītīgi” pusaudži atliks malā telefonus, un novērtēs mūsu Teens Hangout.',
    }
})

//FOR CHILDREN TOUCAN
const funSunForChildrenToucan = (background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV) => ({background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV});

const funSunForChildrenToucans = [
    
    funSunForChildrenToucan('background: url(https://www.tui.ru/getmedia/5cc1f04e-596f-4943-99e3-a9c1fff28ea0/first-slider-1) top center;', 'Тукан Baby (0 - 4)',  'Мы знаем, что нужно каждой маме для спокойного отдыха и позаботились о самом необходимом. По вашему запросу мы бесплатно предоставим детскую коляску, стерилизатор, ванночку и горшок.', 'Тукан Baby (0 - 4)',  'Мы знаем, что нужно каждой маме для спокойного отдыха и позаботились о самом необходимом. По вашему запросу мы бесплатно предоставим детскую коляску, стерилизатор, ванночку и горшок.', 'Тукан Baby (0 - 4)',  'Мы знаем, что нужно каждой маме для спокойного отдыха и позаботились о самом необходимом. По вашему запросу мы бесплатно предоставим детскую коляску, стерилизатор, ванночку и горшок.','Toucan Baby (0 - 4)','Teenused väiksematele külalistele ja nende vanematele: beebivarustus, ema nurk, pesumasin, lastemenüü, mänguruum Toucan Kids toas.','Toucan Baby (0 - 4)','Mes žinome, ko reikia ramiam mamų poilsiui ir viskuo pasirūpinome. Jūsų paslaugoms: vaikiškas vežimėlis, buteliukų sterilizatorius, vonelė ir naktipuodis.','Toucan Baby (0 - 4)','Мēs zinām, kas nepieciešams katrai māmiņai, lai varētu atpūsties un esam parūpējušies par pašu nepieciešamāko. Pēc pieprasījuma mēs bezmaksas piešķirsim ratiņus, sterilizatoru, vanniņu un podiņu.'),
    
    funSunForChildrenToucan('background: url(https://www.tui.ru/getmedia/5e8f5871-c3e8-441b-88a5-5f42fdc090f6/first-slider-2) top center', 'Tукан Kids (4 - 7)',  'Веселимся и развиваемся! Детей ждут игры в бассейне, спортивные занятия, творческие уроки и мультфильмы.', 'Tукан Kids (4 - 7)',  'Веселимся и развиваемся! Детей ждут игры в бассейне, спортивные занятия, творческие уроки и мультфильмы.', 'Tукан Kids (4 - 7)',  'Веселимся и развиваемся! Детей ждут игры в бассейне, спортивные занятия, творческие уроки и мультфильмы.','Toucan Kids (4 - 7)','Lapsi ootavad mängud basseinis, sportlikud ja loomingulised mängud ning multifimid.','Toucan Kids (4 - 7)','Linksminamės ir mokomės! Žaidimai baseine, sporto užsiėmimai, kūrybiškumo pamokos ir animciniai filmukai.','Toucan Kids (4 - 7)','Spēlējamies un attīstāmies! Bērnus gaida spēles baseinā, sporta nodarbības, radošās darbnīcas un multfilmas.'),
    
    funSunForChildrenToucan('background: url(https://www.tui.ru/getmedia/5c383544-4ec3-4b19-adfe-36a5237c5300/first-slider-3) top center', 'Tукан Junior (8 - 12)',  'Мир такой большой и интересный - игрушки подождут! Специально для юных первооткрывателей - научные эксперименты, хитроумные квесты и занятия в спортивной Академии Тукана.', 'Tукан Junior (8 - 12)',  'Мир такой большой и интересный - игрушки подождут! Специально для юных первооткрывателей - научные эксперименты, хитроумные квесты и занятия в спортивной Академии Тукана.', 'Tукан Junior (8 - 12)',  'Мир такой большой и интересный - игрушки подождут! Специально для юных первооткрывателей - научные эксперименты, хитроумные квесты и занятия в спортивной Академии Тукана.','Toucan Junior (8 - 12)','Maaailm on nii suur ja huvitav! Teaduslikud eksperimendid, loomingulised mängud ja sportlikud tegevused Toucan akadeemias.','Toucan Junior (8 - 12)','Pasaulis toks didelis ir įdomus! Specialiai jauniesiems atradėjams - mokslo eksperimentai, galvosūkiai ir sporto užsiėmimai Tukano Akademijoje.','Toucan Junior (8 - 12)','Pasaule ir tik liela un interesanta – rotaļlietas pagaidīs! Speciāli jaunajiem atklājējiem - zinātniskie eksperimenti, viltīgie kvesti un nodarbības Toucan sporta akadēmijā.'),
    
    funSunForChildrenToucan('background: url(https://www.tui.ru/getmedia/048952c0-6089-4f2e-9458-e072b242657f/first-slider-4?2) top center', 'Teens Hangout (12+)',  'Новинка сезона! Уголок для подростков, оформленный в современном стиле. Полон сил и энергии? Включайся в спортивные игры! Нет настроения для активных игр? Прикройся маской и угадай, кто "Мафия"! Период работы: с 1 июня по 1 сентября.', 'Teens Hangout (12+)',  'Новинка сезона! Уголок для подростков, оформленный в современном стиле. Полон сил и энергии? Включайся в спортивные игры! Нет настроения для активных игр? Прикройся маской и угадай, кто "Мафия"! Период работы: с 1 июня по 1 сентября.', 'Teens Hangout (12+)',  'Новинка сезона! Уголок для подростков, оформленный в современном стиле. Полон сил и энергии? Включайся в спортивные игры! Нет настроения для активных игр? Прикройся маской и угадай, кто "Мафия"! Период работы: с 1 июня по 1 сентября.','Teens Hangout (12+)','Kaasaegne programm teismelistele. Palju energiat? Osale spordimängudes! Ei meeldi aktiivsed mängud? Mängi koos uute sõpradega "Maafiat"! Tööperiood: 1 juuni kuni 1 september.','Teens Hangout (12+)','Sezono naujiena! Erdvė paaugliams, įrengta šiuolaikiniu stiliumi. Pilnas jėgų ir energijos? Prisijunk prie sporto žaidimų! Nėra nuotaikos aktyviems žaidimams? Užsidėk kaukę ir atspėk kas "Mafija"! Darbo laikas: nuo birželio 1 iki rugsėjo 1 d.','Teens Hangout (12+)','Sezonas jaunums! Mūsdienīgi noformēts stūrītis pusaudžiem. Pilns spēka un enerģijas? Ņem dalību sporta spēlēs! Nav noskaņojuma aktīvām spēlēm? Paslēpies aiz maskas un uzmini, kurš ir "Mafija"! Darba laiks no 1 jūnija līdz 1 septembrīm.'),
    
]

const funSunForChildrenToucanBlock = new Vue({
    el: '#funSunForChildrenToucan',
    data:{
        funSunForChildrenToucans: funSunForChildrenToucans,
        funSunForChildrenToucan: funSunForChildrenToucan
        
    }
});

//FOR CHILDREN 
const funSunForChildrenTCBaby = new Vue ({
    el: '#funSunForChildrenTCBaby',
    data: {
        funSunForChildrenTCBabyPic: 'https://www.tui.ru/getmedia/c8f4ef0b-d87b-41f2-b747-50eab12b0575/left-right-pics-1',
        
        funSunForChildrenTCBabyTitleRU: 'С заботой о самых маленьких - Тукан Baby',
        funSunForChildrenTCBabyTitleBY: 'С заботой о самых маленьких - Тукан Baby',
        funSunForChildrenTCBabyTitleUA: 'С заботой о самых маленьких - Тукан Baby',
        funSunForChildrenTCBabyTitleEE: 'Hoolime kõige väiksematest - Toucan Baby',
        funSunForChildrenTCBabyTitleLT: 'Pasirūpinsime ir pačiais mažiausiais - Toucan Baby',
        funSunForChildrenTCBabyTitleLV: 'Ar rūpēm par pašiem mazākājiem - Toucan Baby',
        
        funSunForChildrenTCBabyText1RU: 'Собираетесь на отдых с малышом? Мы продумали все, чтобы и Вам, и Вашему малышу было комфортно. В каждом отеле круглосуточно доступен уголок матери, оборудованный блендером, микроволновкой, чайником и стерилизатором для бутылочек.',
        funSunForChildrenTCBabyText1BY: 'Собираетесь на отдых с малышом? Мы продумали все, чтобы и Вам, и Вашему малышу было комфортно. В каждом отеле круглосуточно доступен уголок матери, оборудованный блендером, микроволновкой, чайником и стерилизатором для бутылочек.',
        funSunForChildrenTCBabyText1UA: 'Собираетесь на отдых с малышом? Мы продумали все, чтобы и Вам, и Вашему малышу было комфортно. В каждом отеле круглосуточно доступен уголок матери, оборудованный блендером, микроволновкой, чайником и стерилизатором для бутылочек.',
        funSunForChildrenTCBabyText1EE: 'Soovite minna puhkusele imikuga? Mõtlesime kõik läbi nii, et teile ja teie lapsele oleks mugav. Igas hotellis ööpäevaringselt on saadaval ema nurk, mis on varustatud mikrolaineahi, steriliseerija, segisti ja veekeetjaga.',
        funSunForChildrenTCBabyText1LT: 'Ruošiates keliauti su mažyliu? Apie viską pagalvojome, kad Jums ir Jūsų mažyliui būtų patogu. Kiekviename viešbutyje visą parą veikiantis mamos kampelis, kur rasite trintuvą, mikrobangų krosnelę, virdulį, buteliukų sterilizatorių.',
        funSunForChildrenTCBabyText1LV: 'Gatavojaties atpūsties kopā ar mazuli? Mēs esam visu rūpīgi pārdomājuši, lai Jums un Jūsu mazulim būtu ērti. Katrā viesnīcā diennakti ir pieejams māmiņu stūrītis, kurā atrodas blenderis, mikroviļņu krāsns, tējkanna un sterilizators pudelītēm.',
        
        funSunForChildrenTCBabyText2RU: 'По запросу мы бесплатно предоставим Вам коляску, ванночку, горшок и детское сиденье на унитаз. На территории вы найдете множество тихих дорожек, которые отлично подойдут для прогулок с коляской. А если малыш испачкается - в детском клубе есть стиральная машинка. Не волнуйтесь, Ваш отдых пройдет отлично!',
        funSunForChildrenTCBabyText2BY: 'По запросу мы бесплатно предоставим Вам коляску, ванночку, горшок и детское сиденье на унитаз. На территории вы найдете множество тихих дорожек, которые отлично подойдут для прогулок с коляской. А если малыш испачкается - в детском клубе есть стиральная машинка. Не волнуйтесь, Ваш отдых пройдет отлично!',
        funSunForChildrenTCBabyText2UA: 'По запросу мы бесплатно предоставим Вам коляску, ванночку, горшок и детское сиденье на унитаз. На территории вы найдете множество тихих дорожек, которые отлично подойдут для прогулок с коляской. А если малыш испачкается - в детском клубе есть стиральная машинка. Не волнуйтесь, Ваш отдых пройдет отлично!',
        funSunForChildrenTCBabyText2EE: 'Soovi korral tasuta pakume teile lastevankri, lastepoti ja WC lasteistet. Hotelli territooriumil on palju vaikseid kohti, mis suurepäraselt sobivad vankriga jalitamiseks. Samuti lasteklubis on pesumasin. Ärge muretsege, teie puhkus saab olema muretu ning suurepärane!',
        funSunForChildrenTCBabyText2LT: 'Nemokamai suteiksime vaikiškus vežimėlius, vonelės, naktipuodžius, vaikiškus unitazo dangčius. Viešbučių teritorijose rasite daugybę ramių takelių, kurie idealiai tinka pasivaikščiojimui su vežimėliais. O jei mažylis išsiteps - vaikų klube rasite skalbyklę. Nesijaudinkite, Jūsų atostogos bus puikios!',
        funSunForChildrenTCBabyText2LV: 'Pēc pieprasījuma mēs bezmaksas Jums iedosim ratiņus, vanniņu, podiņu un bērnu sēdeklīti uz tualetes poda. Teritorijā Jūs atradīsiet daudz klusu celiņu, kas noderēs pastaigai ar ratiņiem. Ja bērns sasmērēsies – bērnu klubā ir veļas mazgājamā mašīna. Neuztraucieties, Jūsu atpūtu nekas nespēs sabojāt!',
        
        
    }
})

const funSunForChildrenTCTravel = new Vue ({
    el: '#funSunForChildrenTCTravel',
    data: {
        funSunForChildrenTCTravelPic: 'https://www.tui.ru/getmedia/80f1f108-4c07-41a6-85a1-2466437252b8/left-right-pics-2?2',
        
        funSunForChildrenTCTravelTitleRU: 'Тукан Путешественник',
        funSunForChildrenTCTravelTitleBY: 'Тукан Путешественник',
        funSunForChildrenTCTravelTitleUA: 'Тукан Путешественник',
        funSunForChildrenTCTravelTitleEE: 'Toucan Seikleja',
        funSunForChildrenTCTravelTitleLT: 'Tukanas keliautojas',
        funSunForChildrenTCTravelTitleLV: 'Toucan ceļotājs',
        
        funSunForChildrenTCTravelText1RU: 'Этим летом Тукан отправляется в кругосветное путешествие и приглашает с собой всех гостей с 4 до 12 лет. Каждый день маленькие непоседы будут получать письмо о том, в какой стране их ждут приключения сегодня.',
        funSunForChildrenTCTravelText1BY: 'Этим летом Тукан отправляется в кругосветное путешествие и приглашает с собой всех гостей с 4 до 12 лет. Каждый день маленькие непоседы будут получать письмо о том, в какой стране их ждут приключения сегодня.',
        funSunForChildrenTCTravelText1UA: 'Этим летом Тукан отправляется в кругосветное путешествие и приглашает с собой всех гостей с 4 до 12 лет. Каждый день маленькие непоседы будут получать письмо о том, в какой стране их ждут приключения сегодня.',
        funSunForChildrenTCTravelText1EE: 'Sellel suvel Toucan kutsub kõiki 4-12 aastaseid turiste maailmaresile! Iga päev noored seiklejad hakkavad saama kirju, mis riigis ootavad neid seiklused täna.',
        funSunForChildrenTCTravelText1LT: 'Šią vasarą Tukanas leidžiasi į pasaulinį turą ir kviečia visus svečius nuo 4 iki 12 metų. Kiekvieną dieną mažieji gaus laišką apie šalį, kurioje šiandien jų laukia nuotykiai.',
        funSunForChildrenTCTravelText1LV: 'Šovasar Toucan dosies ceļojumā apkārt pasaulei un aicinās sev līdz visus viesus vecumā no 4 līdz 12 gadiem. Katru dienu mazie nemiera gari saņems vēstuli ar ziņu par to, kurā zemē viņus šodien gaida piedzīvojumi.',
        
        funSunForChildrenTCTravelText2RU: 'При первой регистрации в клубе юные путешественники получат паспорт, в который собирают печати за участие в активностях. Вместе с Туканом дети пройдут хитроумные квесты, приготовят коктейли, запустят в небо своего собственного змея - и это лишь малая часть того, что мы приготовили для Вашего ребенка.',
        funSunForChildrenTCTravelText2BY: 'При первой регистрации в клубе юные путешественники получат паспорт, в который собирают печати за участие в активностях. Вместе с Туканом дети пройдут хитроумные квесты, приготовят коктейли, запустят в небо своего собственного змея - и это лишь малая часть того, что мы приготовили для Вашего ребенка.',
        funSunForChildrenTCTravelText2UA: 'При первой регистрации в клубе юные путешественники получат паспорт, в который собирают печати за участие в активностях. Вместе с Туканом дети пройдут хитроумные квесты, приготовят коктейли, запустят в небо своего собственного змея - и это лишь малая часть того, что мы приготовили для Вашего ребенка.',
        funSunForChildrenTCTravelText2EE: 'Saabumisel lapsed saavad noore ränduri passi, millesse nad koguvad tegevustes osalemise eest templeid. Koos Toucaniga lapsed võtavad osa spordi ja loomingulistes mängudes, meisterdavad oma tuulelohe ja palju muud.',
        funSunForChildrenTCTravelText2LT: 'Pirmą kartą užsiregistravę klube, mažieji keliautojai gaus pasą, kuriame galės rinkti antspaudus už dalyvavimą veikloje. Kartu su Tukanu vaikai spręs galvosūkius, ruoš kokteilius, leis aitvarus - ir tai tik maža dalis to, ką paruošėme Jūsų vaikui.',
        funSunForChildrenTCTravelText2LV: 'Pirmo reizi reģistrējoties klubā, jaunie ceļotāji saņems pasi, kurā sakrās zīmodziņus par dalību aktivitātēs. Kopā ar Toucan bērni izies viltīgus kvestus, gatavos kokteiļus, laidīs gaisā pašu gatavotus pūķus – un tā ir tikai maza daļiņa no tā, ko mēs esam sagatavojuši Jūsu bērnam.',
        
    }
})

const funSunForChildrenTCAcademy = new Vue ({
    el: '#funSunForChildrenTCAcademy',
    data: {
        funSunForChildrenTCAcademyPic: 'https://www.tui.ru/getmedia/456bf283-8d2f-4f2c-be72-44952af21c06/left-right-pics-3?2',
        
        funSunForChildrenTCAcademyTitleRU: 'Академия Тукана',
        funSunForChildrenTCAcademyTitleBY: 'Академия Тукана',
        funSunForChildrenTCAcademyTitleUA: 'Академия Тукана',
        funSunForChildrenTCAcademyTitleEE: 'Toucan Akadeemia',
        funSunForChildrenTCAcademyTitleLT: 'Tukano akademija',
        funSunForChildrenTCAcademyTitleLV: 'Toucan akadēmija',
        
        funSunForChildrenTCAcademyText1RU: 'Чтобы отдых прошел ярко, мы создали академию Тукана, где дети смогут научиться новому в игровой форме:',
        funSunForChildrenTCAcademyText2RU: '- Академия футбола',
        funSunForChildrenTCAcademyText3RU: '- Академия плавания',
        funSunForChildrenTCAcademyText4RU: '- Танцевальная академия',
        funSunForChildrenTCAcademyText5RU: 'И, кто знает, может быть домой Ваш ребенок вернется с новым хобби.',
        
        funSunForChildrenTCAcademyText1BY: 'Чтобы отдых прошел ярко, мы создали академию Тукана, где дети смогут научиться новому в игровой форме:',
        funSunForChildrenTCAcademyText2BY: '- Академия футбола',
        funSunForChildrenTCAcademyText3BY: '- Академия плавания',
        funSunForChildrenTCAcademyText4BY: '- Танцевальная академия',
        funSunForChildrenTCAcademyText5BY: 'И, кто знает, может быть домой Ваш ребенок вернется с новым хобби.',
        
        funSunForChildrenTCAcademyText1UA: 'Чтобы отдых прошел ярко, мы создали академию Тукана, где дети смогут научиться новому в игровой форме:',
        funSunForChildrenTCAcademyText2UA: '- Академия футбола',
        funSunForChildrenTCAcademyText3UA: '- Академия плавания',
        funSunForChildrenTCAcademyText4UA: '- Танцевальная академия',
        funSunForChildrenTCAcademyText5UA: 'И, кто знает, может быть домой Ваш ребенок вернется с новым хобби.',
        
        funSunForChildrenTCAcademyText1EE: 'Selleks, et puhkus oleks erksam, on Toucan Akadeemia. Kus lapsed saavad uusi teadmisi ja oskusi:',
        funSunForChildrenTCAcademyText2EE: '- Jalgpalliakadeemia',
        funSunForChildrenTCAcademyText3EE: '- Ujumisakadeemia',
        funSunForChildrenTCAcademyText4EE: '- Tantsuakadeemia',
        funSunForChildrenTCAcademyText5EE: 'Ja kes teab, äkki teie laps leiab uue hobi.',
        
        funSunForChildrenTCAcademyText1LT: 'Kad poilsis būtų smagus, sukūrėme Tukano akademiją, kurioje vaikai žaidžiant gali išmokti naujų dalykų:',
        funSunForChildrenTCAcademyText2LT: '- Futbolo akademija',
        funSunForChildrenTCAcademyText3LT: '- Plaukimo akademija',
        funSunForChildrenTCAcademyText4LT: '- Šokių pamokos',
        funSunForChildrenTCAcademyText5LT: 'Ir kas žino, galbūt jūsų vaikas grįš namo su nauju hobiu.',
        
        funSunForChildrenTCAcademyText1LV: 'Lai atpūta būtu krāšņa, mēs nodibinājām Toucan akadēmiju, kur bērni ar spēļu palīdzību iemācīsies jaunas lietas:',
        funSunForChildrenTCAcademyText2LV: '- Futbola akadēmija',
        funSunForChildrenTCAcademyText3LV: '- Peldēšanas akadēmija',
        funSunForChildrenTCAcademyText4LV: '- Dēju akadēmija',
        funSunForChildrenTCAcademyText5LV: 'Kas zina, varbūt mājās Jūsu bērns atgriezīsies jau ar jaunu hobiju.',
        
    }
})

const funSunForChildrenTCEvening = new Vue ({
    el: '#funSunForChildrenTCEvening',
    data: {
        funSunForChildrenTCEveningPic: 'https://www.tui.ru/getmedia/bb91ef44-970d-4045-a1a6-422c6742231c/left-right-pics-4?2',
        
        funSunForChildrenTCEveningTitleRU: 'Вечерняя программа',
        funSunForChildrenTCEveningTitleBY: 'Вечерняя программа',
        funSunForChildrenTCEveningTitleUA: 'Вечерняя программа',
        funSunForChildrenTCEveningTitleEE: 'Õhtune programm',
        funSunForChildrenTCEveningTitleLT: 'Vakaro programa',
        funSunForChildrenTCEveningTitleLV: 'Vakara programma',
        
        funSunForChildrenTCEveningText1RU: 'Чтобы отдых прошел ярко, мы создали академию Тукана, где дети смогут научиться новому в игровой форме:',
        funSunForChildrenTCEveningText2RU: '- Мини диско/ Тукан тусейшен',
        funSunForChildrenTCEveningText3RU: '- Детское сумо/караоке',
        funSunForChildrenTCEveningText4RU: '- Кинопоказы на открытом воздухе',
        funSunForChildrenTCEveningText5RU: '- Тематические фестивали для всей семьи',
        
        funSunForChildrenTCEveningText1BY: 'Чтобы отдых прошел ярко, мы создали академию Тукана, где дети смогут научиться новому в игровой форме:',
        funSunForChildrenTCEveningText2BY: '- Мини диско/ Тукан тусейшен',
        funSunForChildrenTCEveningText3BY: '- Детское сумо/караоке',
        funSunForChildrenTCEveningText4BY: '- Кинопоказы на открытом воздухе',
        funSunForChildrenTCEveningText5BY: '- Тематические фестивали для всей семьи',
        
        funSunForChildrenTCEveningText1UA: 'Чтобы отдых прошел ярко, мы создали академию Тукана, где дети смогут научиться новому в игровой форме:',
        funSunForChildrenTCEveningText2UA: '- Мини диско/ Тукан тусейшен',
        funSunForChildrenTCEveningText3UA: '- Детское сумо/караоке',
        funSunForChildrenTCEveningText4UA: '- Кинопоказы на открытом воздухе',
        funSunForChildrenTCEveningText5UA: '- Тематические фестивали для всей семьи',
        
        funSunForChildrenTCEveningText1EE: 'Õhtul ootab lapsi lõbusad üritused:',
        funSunForChildrenTCEveningText2EE: '- Mini-disko/ Toucan Party',
        funSunForChildrenTCEveningText3EE: '- Laste sumo/karaoke',
        funSunForChildrenTCEveningText4EE: '- Kino vaatamine vabas õhus',
        funSunForChildrenTCEveningText5EE: '- Temaatilised festivalid kogu perele',
        
        funSunForChildrenTCEveningText1LT: 'Jums nebus nuobodu net vakare! Jūsų vaikų laukia linksmi užsiėmimai:',
        funSunForChildrenTCEveningText2LT: '- Vaikų diskoteka/Tukano vakarėlis',
        funSunForChildrenTCEveningText3LT: '- Vaikiškas sumo/karaokė',
        funSunForChildrenTCEveningText4LT: '- Kino seansas po atviru dangumi',
        funSunForChildrenTCEveningText5LT: '- Teminiai festivaliai visai šeimai',
        
        funSunForChildrenTCEveningText1LV: 'Garlaikoties nesanāks pat vakarā! Jūsu bērnus gaida jautri pasākumi:',
        funSunForChildrenTCEveningText2LV: '- Mini-disko/ Toucan ballīte',
        funSunForChildrenTCEveningText3LV: '- Bērnu sumo /karaoke',
        funSunForChildrenTCEveningText4LV: '- Kinoizrādes zem klajas debess',
        funSunForChildrenTCEveningText5LV: '- Tematiskie festivāli visai ģimenei',
        
        
        
    }
})


//БУФЕТ
const funSunForChildrenBufet = new Vue ({
    el:'#funSunForChildrenBufet',
    data: {
        funSunForChildrenBufetTitleRU: 'Буфет Тукан',
        funSunForChildrenBufetTitleBY: 'Буфет Тукан',
        funSunForChildrenBufetTitleUA: 'Буфет Тукан',
        funSunForChildrenBufetTitleEE: 'Toucan buffet',
        funSunForChildrenBufetTitleLT: 'Tukano bufetas',
        funSunForChildrenBufetTitleLV: 'Toucan bufete',
        
        funSunForChildrenBufetTextRU: 'Ваши детки привередливы в еде? Не переживайте, каждый найдет что-то на свой вкус. В сезоне-2019 мы сделали буфет Тукана еще более полезным и вкусным!',
        funSunForChildrenBufetTextBY: 'Ваши детки привередливы в еде? Не переживайте, каждый найдет что-то на свой вкус. В сезоне-2019 мы сделали буфет Тукана еще более полезным и вкусным!',
        funSunForChildrenBufetTextUA: 'Ваши детки привередливы в еде? Не переживайте, каждый найдет что-то на свой вкус. В сезоне-2019 мы сделали буфет Тукана еще более полезным и вкусным!',
        funSunForChildrenBufetTextEE: '2019 hooaja biffet on veelgi tervislikum ja maitsvam! Me hoolime teie lapse heaolu eest!',
        funSunForChildrenBufetTextLT: 'Jūsų vaikai išrankūs maistui? Nesijaudinkite, kiekvienas tikrai ras savo mėgiamų patiekalų. 2019 metui sezonui atidarėme Tukano bufetą su dar daugiau sveikesnių ir skanesnių patiekalų!',
        funSunForChildrenBufetTextLV: 'Jūsu bērni ir izvēlīgi ēdiena ziņā? Nepārdzīvojiet, katrs atradīs kaut ko savai gaumei. 2019. gada sezonā mēs Toucan bufetes galdu esam padarījuši vēl veselīgāku un garšīgāku!',
        
    }
})


//FOR CHILDREN БУФЕТ SLIDER
const funSunForChildrenBufetItem = (background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV) => ({background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV});

const funSunForChildrenBufetItems = [
    
    funSunForChildrenBufetItem('background: url(https://www.tui.ru/getmedia/2bd2805f-d6be-4f0e-8d41-e193fbc0203f/bufet-slider-1) top center;', 'Каши на завтрак', 'Каши на завтрак', 'Каши на завтрак', 'Hommikul puder','Košė pusryčiams','Brokastu putras'),
    
    funSunForChildrenBufetItem('background: url(https://www.tui.ru/getmedia/b44de57d-ca48-4816-a8dd-9cef0cbb5df2/bufet-slider-2?2) top center', 'Детская зона в ресторане', 'Детская зона в ресторане', 'Детская зона в ресторане', 'Lasteala restoranis','Skyrius vaikams restorane','Bērnu zona restorānā'),
    
    funSunForChildrenBufetItem('background: url(https://www.tui.ru/getmedia/180e9e63-e79f-44db-bb10-fede808a1c91/bufet-slider-3) top center', 'Мороженое', 'Мороженое', 'Мороженое', 'Jäätis','Ledai','Saldējums'),
    
    funSunForChildrenBufetItem('background: url(https://www.tui.ru/getmedia/8b2aae79-1f4a-4702-8a90-e04276be9969/bufet-slider-4) top center', 'Уголок мамы', 'Уголок мамы', 'Уголок мамы', 'Ema nurk','Mamos kampelis','Mātes stūrītis'),
    
]

const funSunForChildrenBufetItemBlock = new Vue({
    el: '#funSunForChildrenBufetItem',
    data:{
        funSunForChildrenBufetItems: funSunForChildrenBufetItems,
        funSunForChildrenBufetItem: funSunForChildrenBufetItem
        
    }
});



const funSunForChildrenBufetPics = new Vue ({
    el: '#funSunForChildrenBufetPic',
    data: {
        funSunForChildrenBufetPic1 : 'background: url(https://www.tui.ru/getmedia/b8272a2e-efae-4f1f-aee3-e2a512542fdc/square-slider-1?3) top center',
    
        funSunForChildrenBufetPic2 : 'background: url(https://www.tui.ru/getmedia/6b0139bb-b439-4984-b862-1f21c5b57b5f/square-slider-2?3) top center',
        
        funSunForChildrenBufetPic3 : 'background: url(https://www.tui.ru/getmedia/32dd06f2-00b5-4125-985b-3d4b38a5870c/square-slider-3?3) top center', 
        
        funSunForChildrenBufetPic4 : 'background: url(https://www.tui.ru/getmedia/80db905a-5c0d-45bd-993a-da22bc4587c7/square-slider-4?3) top center',
    }
})



//СТРАНИЦА ПРОГРАММА РАЗВЛЕЧЕНИЙ FUN SUN


const funSunProgrammPage = new Vue ({
    el: '#funSunProgrammPage',
    data: {
        titleRU : 'Семейный отдых FUN&SUN',
        subTitleRU : 'Расписание развлечений в клубе Тукан',
        
        titleBY : 'Семейный отдых FUN&SUN',
        subTitleBY : 'Расписание развлечений в клубе Тукан',
        
        titleUA : 'Семейный отдых FUN&SUN',
        subTitleUA : 'Расписание развлечений в клубе Тукан',
        
        titleEE : 'Perepuhkus FUN&SUN',
        subTitleEE : 'Meelelahutuse ajakava klubis Toucan',
        
        titleLT : 'Šeimos poilsis FUN&SUN viešbučiuose',
        subTitleLT : 'Pramogų tvarkaraštis Mini Toucan vaikų klube',
        
        titleLV : 'Ģimenes atpūta FUN&SUN',
        subTitleLV : 'Izklaides grafiks Toucan klubā',
    }
})

//SLIDER 1 РАЗВЛЕЧЕНИЙ MENU
const funSunProgrammPageAllEntMenu = new Vue ({
    el:'#funSunProgrammPageAllEntMenu',
    data: {
        menuItem1RU: 'Все',
        menuItem2RU: 'Академии Тукан',
        menuItem3RU: 'Творческие и игровые активности',
        menuItem4RU: 'Спортивные активности',
        menuItem5RU: 'Вечерние шоу',
        
        menuItem1BY: 'Все',
        menuItem2BY: 'Академии Тукан',
        menuItem3BY: 'Творческие и игровые активности',
        menuItem4BY: 'Спортивные активности',
        menuItem5BY: 'Вечерние шоу',
        
        menuItem1UA: 'Все',
        menuItem2UA: 'Академии Тукан',
        menuItem3UA: 'Творческие и игровые активности',
        menuItem4UA: 'Спортивные активности',
        menuItem5UA: 'Вечерние шоу',
        
        menuItem1EE: 'Visi',
        menuItem2EE: 'Toucan akadeemia',
        menuItem3EE: 'Loomingulised ja aktiivsed tegevused',
        menuItem4EE: 'Sporditegevused',
        menuItem5EE: 'Õhtune meelelahutus',
        
        menuItem1LT: 'Vizos',
        menuItem2LT: 'Tukano akademija',
        menuItem3LT: 'Kūrybiniai užsiėmimai ir žaidimai',
        menuItem4LT: 'Sportinė veikla',
        menuItem5LT: 'Vakaro šou',
        
        menuItem1LV: 'Visi',
        menuItem2LV: 'Toucan akadēmijas',
        menuItem3LV: 'Radošas un spēļu aktivitātes',
        menuItem4LV: 'Sporta aktivitātes',
        menuItem5LV: 'Vakara šovi',
    }
})


 
      
//ВКЛАДКА 1      
const funSunProgrammPageAllEntSliderItem1 = (background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV) => ({background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV});

const funSunProgrammPageAllEntSliderItems1 = [
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/79ecef71-913b-4399-8911-ed61b4d79dd2/tab1-1);background-position: center;background-size: cover', 'Академия плавания', 'Академия плавания', 'Академия плавания', 'Ujumisakadeemia','Plaukimo akademija','Peldēšanas akadēmija'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/9d6ab996-65d5-43e4-b972-17d16291c4a3/tab1-2);background-position: center;background-size: cover', 'Танцевальная академия', 'Танцевальная академия', 'Танцевальная академия','Tantsuakadeemia','Šokių pamokos','Deju akadēmija'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/9a277d44-dd0f-4c53-a180-046333c4257c/tab1-3);background-position: center;background-size: cover', 'Футбольная Академия', 'Футбольная Академия', 'Футбольная Академия','Jalgpalliakadeemia','Futbolo akademija','Futbola akadēmija'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/aee56176-ff4b-4eb4-93ce-e409fe6ad040/tab2-1);background-position: center;background-size: cover','Сбор путешественников. Письмо от Тукана','Сбор путешественников. Письмо от Тукана','Сбор путешественников. Письмо от Тукана','Reisijate kogunemine. Toucan kiri','Keliautojų susirinkimas. Tukano laiškas','Ceļotāju pulcēšanās. Vēstule no Toucan'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/e1556a4e-0b91-40c4-ac34-2e0a25257ed1/tab2-2);background-position: center;background-size: cover','Тематические квесты и соревнования','Тематические квесты и соревнования','Тематические квесты и соревнования','Temaatilised mängud ja võistlused','Teminiai galvosūkiai ir žaidimai','Tematiskie kvesti un sacensības'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/f1478906-fcee-4f97-bd12-6120190df66a/tab2-3);background-position: center;background-size: cover','Творческая мастерская Тукана','Творческая мастерская Тукана','Творческая мастерская Тукана','Toucan loomingulised töötoad','Kūrybinės Tukano dirbtuvės','Toucan radošā darbnīca'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/19b71da6-c781-4712-b09d-f85445c67861/tab2-4);background-position: center;background-size: cover','Научные эксперименты','Научные эксперименты','Научные эксперименты','Teaduslikud eksperimendid','Mokslo eksperimentai','Zinātniski eksperimenti'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/6cf0d64a-ede1-419f-a680-fae4096e1ce6/tab2-5);background-position: center;background-size: cover','Сюжетно-ролевые игры','Сюжетно-ролевые игры','Сюжетно-ролевые игры','Rollimängud','Vaidmenų žaidimai','Sižeta un lomu spēles'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/bf108f5e-ae09-492c-a34b-c5d5b12af52a/tab2-6);background-position: center;background-size: cover','Аквагрим','Аквагрим','Аквагрим','Näomaalingud','Akvagrimas','Akvagrims'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/38608293-6b1c-459e-b7d6-71bcf146f480/tab2-7);background-position: center;background-size: cover','Тукан коктейль','Тукан коктейль','Тукан коктейль','Toucan kokteilid','Tukano kokteilis','Kokteilis Toucan'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/ee791898-d7de-4e9e-b758-0675fefd58e9/tab3-1);background-position: center;background-size: cover','Пляжный волейбол','Пляжный волейбол','Пляжный волейбол','Rannavõrkpall','Paplūdimio tinklinis','Pludmales volejbols'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/b2b1f234-eaa8-49bf-bb14-dcf75037dea6/tab3-2);background-position: center;background-size: cover','Аква аэробика','Аква аэробика','Аква аэробика','Vesiaeroobika','Vandens aerobika','Ūdens aerobika'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/6937b753-7e09-4b13-9ccc-8db2543d39c1/tab3-3);background-position: center;background-size: cover','Детская йога, танцевальная аэробика, гимнастика','Детская йога, танцевальная аэробика, гимнастика','Детская йога, танцевальная аэробика, гимнастика','Laste jooga, tantsuaeroobika, võimlemine','Joga vaikams, šokių aerobika, gimnastika','Bērnu joga, deju aerobika,vingrošana'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/e6973f11-f60c-40e9-b8f8-cfb91da7f204/tab3-4);background-position: center;background-size: cover','Игры в бассейне','Игры в бассейне','Игры в бассейне','Mängud basseinis','Žaidimai baseine','Spēles baseinā'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/7f9ef707-3095-4144-8be6-59d4d03ddf05/tab3-5);background-position: center;background-size: cover','Мини гольф','Мини гольф','Мини гольф','Mini-golf','Mini golfas','Mini-golfs'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/803107f8-90a2-4432-ad23-b32b2f5f48b1/tab3-6);background-position: center;background-size: cover','Стрельба из лука','Стрельба из лука','Стрельба из лука','Vibulaskmine','Šaudymas iš lanko','Loka šaušana'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/642cab39-6ec5-4494-8cc0-b260f095f007/tab3-7);background-position: center;background-size: cover','Подвижные игры и эстафеты','Подвижные игры и эстафеты','Подвижные игры и эстафеты','Aktiivsed mängud','Žaidimai ir estafetės','Kustīgas spēles un stafetes'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/38b17bf7-4d9a-494d-9124-e9f104a466b6/tab3-8);background-position: center;background-size: cover','Дартс','Дартс','Дартс','Noolemäng','Smiginis','Šautriņas'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/bce94a6d-7fdb-4539-abc0-b52e2e3f532e/tab4-1);background-position: center;background-size: cover','Мини диско','Мини диско','Мини диско','Mini-disko','Vaikų diskoteka','Mini-disko'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/bc8dc507-5c9f-49c5-be00-e4e964c238cc/tab4-2);background-position: center;background-size: cover','Tукан Тусейшн','Tукан Тусейшн','Toucan pidu','','Tukano vakarėlis',''),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/4cc9b050-d671-42ce-80fb-2f79c6b3dc8b/tab4-3);background-position: center;background-size: cover','Тематические фестивали для всей семьи','Тематические фестивали для всей семьи','Тематические фестивали для всей семьи','Temaatilised festivalid kogu perele','Teminiai festivaliai visai šeimai','Tematiskie festivāli visai ģimenei'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/2ce25f71-3f23-486d-8738-afbd40678111/tab4-4);background-position: center;background-size: cover','Кинопоказы на открытом воздухе','Кинопоказы на открытом воздухе','Кинопоказы на открытом воздухе','Vabaõhufilmid','Kino seansai po atviru dangumi','Kinoizrādes zem klajas debess'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/eab60a0a-36d9-4950-a620-c1c5b4b9de24/tab4-5);background-position: center;background-size: cover','Кидс караоке','Кидс караоке','Кидс караоке','Laste karaoke','Karaokė vaikams','Bērnu karaoke'),
    
    funSunProgrammPageAllEntSliderItem1('background: url(https://www.tui.ru/getmedia/d01a755a-dab4-4cb2-8da5-27d8ddeebe41/tab4-6);background-position: center;background-size: cover','Детское Сумо','Детское Сумо','Детское Сумо','Laste Sumo','Vaikiškas sumo','Bērnu Sumo'),
    
    
    
]

const funSunProgrammPageAllEntSliderBlock1 = new Vue({
    el: '#s1b1',
    data:{
        funSunProgrammPageAllEntSliderItems1: funSunProgrammPageAllEntSliderItems1,
        funSunProgrammPageAllEntSliderItem1: funSunProgrammPageAllEntSliderItem1
        
    }
});      

//ВКЛАДКА 2      
const funSunProgrammPageAllEntSliderItem2 = (background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV) => ({background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV});

const funSunProgrammPageAllEntSliderItems2 = [
    
    funSunProgrammPageAllEntSliderItem2('background: url(https://www.tui.ru/getmedia/79ecef71-913b-4399-8911-ed61b4d79dd2/tab1-1);background-position: center;background-size: cover', 'Академия плавания', 'Академия плавания', 'Академия плавания','Ujumisakadeemia','Plaukimo akademija','Peldēšanas akadēmija'),
    
    funSunProgrammPageAllEntSliderItem2('background: url(https://www.tui.ru/getmedia/9d6ab996-65d5-43e4-b972-17d16291c4a3/tab1-2);background-position: center;background-size: cover', 'Танцевальная академия', 'Танцевальная академия', 'Танцевальная академия','Tantsuakadeemia','Šokių pamokos','Deju akadēmija'),
    
    funSunProgrammPageAllEntSliderItem2('background: url(https://www.tui.ru/getmedia/9a277d44-dd0f-4c53-a180-046333c4257c/tab1-3);background-position: center;background-size: cover', 'Футбольная Академия', 'Футбольная Академия', 'Футбольная Академия','Jalgpalliakadeemia','Futbolo akademija','Futbola akadēmija'),
    
    
    
]

const funSunProgrammPageAllEntSliderBlock2 = new Vue({
    el: '#s1b2',
    data:{
        funSunProgrammPageAllEntSliderItems2: funSunProgrammPageAllEntSliderItems2,
        funSunProgrammPageAllEntSliderItem2: funSunProgrammPageAllEntSliderItem2
        
    }
});      



//ВКЛАДКА 3      
const funSunProgrammPageAllEntSliderItem3 = (background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV) => ({background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV});

const funSunProgrammPageAllEntSliderItems3 = [
    
    funSunProgrammPageAllEntSliderItem3('background: url(https://www.tui.ru/getmedia/aee56176-ff4b-4eb4-93ce-e409fe6ad040/tab2-1);background-position: center;background-size: cover','Сбор путешественников. Письмо от Тукана','Сбор путешественников. Письмо от Тукана','Сбор путешественников. Письмо от Тукана','Reisijate kogunemine. Toucan kiri','Keliautojų susirinkimas. Tukano laiškas','Ceļotāju pulcēšanās. Vēstule no Toucan'),
    
    funSunProgrammPageAllEntSliderItem3('background: url(https://www.tui.ru/getmedia/e1556a4e-0b91-40c4-ac34-2e0a25257ed1/tab2-2);background-position: center;background-size: cover','Тематические квесты и соревнования','Тематические квесты и соревнования','Тематические квесты и соревнования','Temaatilised mängud ja võistlused','Teminiai galvosūkiai ir žaidimai','Tematiskie kvesti un sacensības'),
    
    funSunProgrammPageAllEntSliderItem3('background: url(https://www.tui.ru/getmedia/f1478906-fcee-4f97-bd12-6120190df66a/tab2-3);background-position: center;background-size: cover','Творческая мастерская Тукана','Творческая мастерская Тукана','Творческая мастерская Тукана','Toucan loomingulised töötoad','Kūrybinės Tukano dirbtuvės','Toucan radošā darbnīca'),
    
    funSunProgrammPageAllEntSliderItem3('background: url(https://www.tui.ru/getmedia/19b71da6-c781-4712-b09d-f85445c67861/tab2-4);background-position: center;background-size: cover','Научные эксперименты','Научные эксперименты','Научные эксперименты','Teaduslikud eksperimendid','Mokslo eksperimentai','Zinātniski eksperimenti'),
    
    funSunProgrammPageAllEntSliderItem3('background: url(https://www.tui.ru/getmedia/6cf0d64a-ede1-419f-a680-fae4096e1ce6/tab2-5);background-position: center;background-size: cover','Сюжетно-ролевые игры','Сюжетно-ролевые игры','Сюжетно-ролевые игры','Rollimängud','Vaidmenų žaidimai','Sižeta un lomu spēles'),
    
    funSunProgrammPageAllEntSliderItem3('background: url(https://www.tui.ru/getmedia/bf108f5e-ae09-492c-a34b-c5d5b12af52a/tab2-6);background-position: center;background-size: cover','Аквагрим','Аквагрим','Аквагрим','Näomaalingud','Akvagrimas','Akvagrims'),
    
    funSunProgrammPageAllEntSliderItem3('background: url(https://www.tui.ru/getmedia/38608293-6b1c-459e-b7d6-71bcf146f480/tab2-7);background-position: center;background-size: cover','Тукан коктейль','Тукан коктейль','Тукан коктейль','Toucan kokteilid','Tukano kokteilis','Toucan kokteilis'),
    
    
    
]

const funSunProgrammPageAllEntSliderBlock3 = new Vue({
    el: '#s1b3',
    data:{
        funSunProgrammPageAllEntSliderItems3: funSunProgrammPageAllEntSliderItems3,
        funSunProgrammPageAllEntSliderItem3: funSunProgrammPageAllEntSliderItem3
        
    }
});      


//ВКЛАДКА 4      
const funSunProgrammPageAllEntSliderItem4 = (background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV) => ({background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV});

const funSunProgrammPageAllEntSliderItems4 = [
    
    funSunProgrammPageAllEntSliderItem4('background: url(https://www.tui.ru/getmedia/ee791898-d7de-4e9e-b758-0675fefd58e9/tab3-1);background-position: center;background-size: cover','Пляжный волейбол','Пляжный волейбол','Пляжный волейбол','Rannavõrkpall','Paplūdimio tinklinis','Pludmales volejbols'),
    
    funSunProgrammPageAllEntSliderItem4('background: url(https://www.tui.ru/getmedia/b2b1f234-eaa8-49bf-bb14-dcf75037dea6/tab3-2);background-position: center;background-size: cover','Аква аэробика','Аква аэробика','Аква аэробика','Vesiaeroobika','Vandens aerobika','Ūdens aerobika'),
    
    funSunProgrammPageAllEntSliderItem4('background: url(https://www.tui.ru/getmedia/6937b753-7e09-4b13-9ccc-8db2543d39c1/tab3-3);background-position: center;background-size: cover','Детская йога, танцевальная аэробика, гимнастика','Детская йога, танцевальная аэробика, гимнастика','Детская йога, танцевальная аэробика, гимнастика','Laste jooga, tantsuaeroobika, võimlemine','Joga vaikams, šokių aerobika, gimnastika','Bērnu joga, deju aerobika, vingrošana'),
    
    funSunProgrammPageAllEntSliderItem4('background: url(https://www.tui.ru/getmedia/e6973f11-f60c-40e9-b8f8-cfb91da7f204/tab3-4);background-position: center;background-size: cover','Игры в бассейне','Игры в бассейне','Игры в бассейне','Mängud basseinis','Žaidimai baseine','Spēles baseinā'),
    
    funSunProgrammPageAllEntSliderItem4('background: url(https://www.tui.ru/getmedia/7f9ef707-3095-4144-8be6-59d4d03ddf05/tab3-5);background-position: center;background-size: cover','Мини гольф','Мини гольф','Мини гольф','Mini-golf','Mini golfas','Mini-golfs'),
    
    funSunProgrammPageAllEntSliderItem4('background: url(https://www.tui.ru/getmedia/803107f8-90a2-4432-ad23-b32b2f5f48b1/tab3-6);background-position: center;background-size: cover','Стрельба из лука','Стрельба из лука','Стрельба из лука','Loka šaušana','Šaudymas iš lanko','Loka šaušana'),
    
    funSunProgrammPageAllEntSliderItem4('background: url(https://www.tui.ru/getmedia/642cab39-6ec5-4494-8cc0-b260f095f007/tab3-7);background-position: center;background-size: cover','Подвижные игры и эстафеты','Подвижные игры и эстафеты','Подвижные игры и эстафеты','Kustīgas spēles un stafetes','Žaidimai ir estafetės','Kustīgas spēles un stafetes'),
    
    funSunProgrammPageAllEntSliderItem4('background: url(https://www.tui.ru/getmedia/38b17bf7-4d9a-494d-9124-e9f104a466b6/tab3-8);background-position: center;background-size: cover','Дартс','Дартс','Дартс','Šautriņas','Smiginis','Šautriņas'),
    
    
    
]

const funSunProgrammPageAllEntSliderBlock4 = new Vue({
    el: '#s1b4',
    data:{
        funSunProgrammPageAllEntSliderItems4: funSunProgrammPageAllEntSliderItems4,
        funSunProgrammPageAllEntSliderItem4: funSunProgrammPageAllEntSliderItem4
        
    }
});      


//ВКЛАДКА 5      
const funSunProgrammPageAllEntSliderItem5 = (background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV) => ({background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV});

const funSunProgrammPageAllEntSliderItems5 = [
    
    funSunProgrammPageAllEntSliderItem5('background: url(https://www.tui.ru/getmedia/bce94a6d-7fdb-4539-abc0-b52e2e3f532e/tab4-1);background-position: center;background-size: cover','Мини диско','Мини диско','Мини диско','Mini-disko','Vaikų diskoteka','Mini-disko'),
    
    funSunProgrammPageAllEntSliderItem5('background: url(https://www.tui.ru/getmedia/bc8dc507-5c9f-49c5-be00-e4e964c238cc/tab4-2);background-position: center;background-size: cover','Tукан Тусейшн','Tукан Тусейшн','Tукан Тусейшн','Toucan ballīte','Tukano vakarėlis','Toucan ballīte'),
    
    funSunProgrammPageAllEntSliderItem5('background: url(https://www.tui.ru/getmedia/4cc9b050-d671-42ce-80fb-2f79c6b3dc8b/tab4-3);background-position: center;background-size: cover','Тематические фестивали для всей семьи','Тематические фестивали для всей семьи','Тематические фестивали для всей семьи','Tematiskie festivāli visai ģimenei','Teminiai festivaliai visai šeimai','Tematiskie festivāli visai ģimenei'),
    
    funSunProgrammPageAllEntSliderItem5('background: url(https://www.tui.ru/getmedia/2ce25f71-3f23-486d-8738-afbd40678111/tab4-4);background-position: center;background-size: cover','Кинопоказы на открытом воздухе','Кинопоказы на открытом воздухе','Кинопоказы на открытом воздухе','Kinoizrādes zem klajas debess','Kino seansas po atviru dangumi','Kinoizrādes zem klajas debess'),
    
    funSunProgrammPageAllEntSliderItem5('background: url(https://www.tui.ru/getmedia/eab60a0a-36d9-4950-a620-c1c5b4b9de24/tab4-5);background-position: center;background-size: cover','Кидс караоке','Кидс караоке','Кидс караоке','Bērnu karaoke','Karaokė vaikams','Bērnu karaoke'),
    
    funSunProgrammPageAllEntSliderItem5('background: url(https://www.tui.ru/getmedia/d01a755a-dab4-4cb2-8da5-27d8ddeebe41/tab4-6);background-position: center;background-size: cover','Детское Сумо','Детское Сумо','Детское Сумо','Bērnu sumo','Vaikiškas sumo','Bērnu sumo'),
    
    
    
]

const funSunProgrammPageAllEntSliderBlock5 = new Vue({
    el: '#s1b5',
    data:{
        funSunProgrammPageAllEntSliderItems5: funSunProgrammPageAllEntSliderItems5,
        funSunProgrammPageAllEntSliderItem5: funSunProgrammPageAllEntSliderItem5
        
    }
});    




const funSunProgrammPageTitle2 = new Vue ({
    el: '#rs',
    data: {
        titleRU : 'Расписание спортивных занятий и развлечений',
        
        titleBY : 'Расписание спортивных занятий и развлечений',
        
        titleUA : 'Расписание спортивных занятий и развлечений',
        
        titleEE : 'Izklaides un sporta nodarbību grafiks',
        
        titleLT : 'Sporto ir pramogų tvarkaraštis',
        
        titleLV : 'Izklaides un sporta nodarbību grafiks',
        
    }
})



//SLIDER 2 РАЗВЛЕЧЕНИЙ MENU
const funSunProgrammPageAllEntMenu2 = new Vue ({
    el:'#funSunProgrammPageAllEntMenu2',
    data: {
        menuItem1RU: 'Все',
        menuItem2RU: 'Для всей семьи',
        menuItem3RU: 'Вечерние шоу',
        
        menuItem1BY: 'Все',
        menuItem2BY: 'Для всей семьи',
        menuItem3BY: 'Вечерние шоу',
        
        menuItem1UA: 'Все',
        menuItem2UA: 'Для всей семьи',
        menuItem3UA: 'Вечерние шоу',
        
        menuItem1EE: 'Visi',
        menuItem2EE: 'Visai ģimenei',
        menuItem3EE: 'Vakara šovi',
        
        menuItem1LT: 'Visi',
        menuItem2LT: 'Visai šeimai',
        menuItem3LT: 'Vakaro šou',
        
        menuItem1LV: 'Visi',
        menuItem2LV: 'Visai ģimenei',
        menuItem3LV: 'Vakara šovi',
        
    }
})


//ВКЛАДКА 1      
const funSunProgrammPageAllEntSlider2Item1 = (background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV) => ({background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV});

const funSunProgrammPageAllEntSlider2Items1 = [
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/4d2805d4-c685-4ebe-8152-4266be2186f0/block2-tab1-1);background-position: center;background-size: cover','Йога','Йога','Йога','Joga','Joga','Joga'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/b931a3c8-e194-4643-a279-a337c8d698ac/block2-tab1-2);background-position: center;background-size: cover','Пилатес','Пилатес','Пилатес','Pilates','Pilates','Pilates'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/5477f17e-3fbf-454c-b8f4-c0c3d644ccd8/block2-tab1-3);background-position: center;background-size: cover','Airgun','Airgun','Airgun','Airgun','Airgun','Airgun'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/1ef216bd-cb15-486d-94e3-cc094ff3811c/block2-tab1-4);background-position: center;background-size: cover','Бочче','Бочче','Бочче','Bočča','Petankė','Bočča'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/e1b0f5a2-1517-41e0-9570-ec90959cb2b7/block2-tab1-5);background-position: center;background-size: cover','Пляжный волейбол','Пляжный волейбол','Пляжный волейбол','Pludmales volejbols','Paplūdimio tinklinis','Pludmales volejbols'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/04fae21e-035d-4b0c-8772-84ed4f66ffe2/block2-tab1-6);background-position: center;background-size: cover','Стрельба из лука','Стрельба из лука','Стрельба из лука','Loka šaušana','Šaudymas iš lanko','Loka šaušana'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/5f42f60a-41cd-4ede-be81-4f7e179c9a63/block2-tab1-7);background-position: center;background-size: cover','Дартс','Дартс','Дартс','Šautriņas','Smiginis','Šautriņas'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/53dd3a9f-af3d-42ae-a605-96dbf536d776/block2-tab1-8);background-position: center;background-size: cover','Аквааэробика в бассейне','Аквааэробика в бассейне','Аквааэробика в бассейне','Ūdens aerobika baseinā','Vandens aerobika baseine','Ūdens aerobika baseinā'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/b79aff66-5bd7-41bd-bf97-0ac114a0faab/block2-tab1-9);background-position: center;background-size: cover','Игры в бассейне','Игры в бассейне','Игры в бассейне','Spēles baseinā','Žaidimai baseine','Spēles baseinā'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/55319d6e-9a86-442b-9316-e6c9743d3947/block2-tab1-10);background-position: center;background-size: cover','Водное поло','Водное поло','Водное поло','Ūdens polo','Vandens polo','Ūdens polo'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/60848e48-bf99-49a4-88f2-b6ec972512f3/block2-tab1-11);background-position: center;background-size: cover','Make Body (упражнения на жиросжигание)','Make Body (упражнения на жиросжигание)','Make Body (упражнения на жиросжигание)','Make Body (vingrinājumi tauku dedzināšanai)','Make Body (liekninantys pratimai)','Make Body (vingrinājumi tauku dedzināšanai)'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/476bb12b-404a-4663-93e0-2c36c30e8695/block2-tab1-12);background-position: center;background-size: cover','Power aerobic','Power aerobic','Power aerobic','Spēka aerobika','Power aerobic','Spēka aerobika'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/b2fc9a48-45aa-41c4-967e-7c5ef3eaf959/block2-tab1-13);background-position: center;background-size: cover','Belly dance','Belly dance','Belly dance','Vēderdejas','Belly dance','Vēderdejas'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/961a00b4-ca73-480e-8cbb-58732e0caad7/block2-tab1-14);background-position: center;background-size: cover','Latina - Salca Dance','Latina - Salca Dance','Latina - Salca Dance','Latina - Salca Dance','Latina - Salca Dance','Latina - Salca Dance'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/cb577d1e-4642-425a-9624-6d8a1b66ed84/block2-tab1-15);background-position: center;background-size: cover','Дартс','Дартс','Дартс','Šautriņas','Smiginis','Šautriņas'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/9ff949a7-d259-484f-ae97-8865c41020ec/block2-tab1-16);background-position: center;background-size: cover','Бочче','Бочче','Бочче','Bočča','Petankė','Bočča'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/274fae3c-fd6b-4bfc-a17f-04c5e021a036/block2-tab1-18);background-position: center;background-size: cover','Урок национального языка','Урок национального языка','Урок национального языка','Valsts valodas nodarbības','Vietinės kalbos pamokos','Valsts valodas nodarbības'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/ce0aaa5c-ad6f-4b04-a5a3-d797ac30b1fa/block2-tab1-19);background-position: center;background-size: cover','Кулинарный мастер-класс','Кулинарный мастер-класс','Кулинарный мастер-класс','Kulinārijas meistarklase','Kulinarijos pamokos','Kulinārijas meistarklase'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/05c41adf-1a83-4992-a35f-3151fad85515/block2-tab1-20);background-position: center;background-size: cover','Мастер-класс по мобильной фотографии','Мастер-класс по мобильной фотографии','Мастер-класс по мобильной фотографии','Mobilās fotogrāfijas meistarklase','Mobiliosios fotografijos pamokos','Mobilās fotogrāfijas meistarklase'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/edfb0c18-ba3f-4179-aa7f-0ec7c00c43e8/block2-tab1-21);background-position: center;background-size: cover','Мастер-класс по приготовлению коктейлей','Мастер-класс по приготовлению коктейлей','Мастер-класс по приготовлению коктейлей','Kokteiļu gatavošanas meistarklase','Kokteilių ruošimo pamokos','Kokteiļu gatavošanas meistarklase'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/2b25a264-0daa-4942-ad4b-5d9b3f0e8f23/block2-tab1-24);background-position: center;background-size: cover','Ежедневные турниры','Ежедневные турниры','Ежедневные турниры','Ikdienas turnīri','Kasdieniniai turnyrai','Ikdienas turnīri'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/fa9ae5e5-e1c2-4d20-9afa-3928be9f4a5e/block2-tab1-25);background-position: center;background-size: cover','Zumba','Zumba','Zumba','Zumba','Zumba','Zumba'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/873acc69-de12-4bbe-ba8f-cf8faf034eb6/block2-tab1-26);background-position: center;background-size: cover','Power Zumba','Power Zumba','Power Zumba','Power Zumba','Power Zumba','Power Zumba'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/31636b08-305e-4cec-8ef5-33c954fe312c/block2-tab1-28);background-position: center;background-size: cover','Basic Step','Basic Step','Basic Step','Basic Step','Basic Step','Basic Step'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/3217a3a6-6d1a-49ff-8f70-4ae45777f01b/block2-tab1-29);background-position: center;background-size: cover','Power Step','Power Step','Power Step','Power Step','Power Step','Power Step'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/f9d3c662-e0f8-418b-b0d5-a9a22e5284e4/block2-tab1-30);background-position: center;background-size: cover','Баскетбол','Баскетбол','Баскетбол','Basketbols','Krepšinis','Basketbols'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/4c2d35dd-c6cd-4489-b972-192fe61cab33/block2-tab1-31);background-position: center;background-size: cover','Футбол','Футбол','Футбол','Futbols','Futbolas','Futbols'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/9ee285ad-ed30-4807-a1ee-32db96a4fbe2/block2-tab2-1);background-position: center;background-size: cover','Beach party','Beach party','Beach party','Beach party','Paplūdimio vakarėlis','Beach party'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/862c7c4f-3815-452a-965a-4390b554c3b5/block2-tab2-2);background-position: center;background-size: cover','Профессиональные шоу','Профессиональные шоу','Профессиональные шоу','Profesionālie šovi','Profesionalūs pasirodymai','Profesionālie šovi'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/c82f2219-4350-4aa9-911a-a3f039419d29/block2-tab2-3);background-position: center;background-size: cover','Дискотека','Дискотека','Дискотека','Diskotēka','Diskoteka','Diskotēka'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/be0afaa0-e7c8-49a7-aae4-84a18e504264/block2-tab2-4?2);background-position: center;background-size: cover','Выступления популярных артистов','Выступления популярных артистов','Выступления популярных артистов','Pazīstamu skatuves mākslinieku uzstāšanās','Populiarių menininkų spektakliai','Pazīstamu skatuves mākslinieku uzstāšanās'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/98042b33-5817-4670-8ae9-17cc3e5c9afa/block2-tab2-5);background-position: center;background-size: cover','Живая музыка','Живая музыка','Живая музыка','Dzīvā mūzika','Gyva muzika','Dzīvā mūzika'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/6aaf0cd2-c626-4e41-84a8-6d72ee178910/block2-tab2-6);background-position: center;background-size: cover','Тематическая вечеринка','Тематическая вечеринка','Тематическая вечеринка','Tematiskas ballītes','Teminis vakarėlis','Tematiskas ballītes'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/7182589e-dfb1-4896-8d32-2fa6a64f1cfe/block2-tab2-7);background-position: center;background-size: cover','Караоке','Караоке','Караоке','Karaoke','Karaoke','Karaoke'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/ea667d41-0290-4207-b8b5-c399dbd8a057/block2-tab2-8);background-position: center;background-size: cover','Белая вечеринка','Белая вечеринка','Белая вечеринка','Baltā ballīte','Baltoji partija','Baltā ballīte'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/e7ca55d4-dc5f-4308-bc42-8796881350b7/block2-tab2-9);background-position: center;background-size: cover','Национальное шоу','Национальное шоу','Национальное шоу','Nacionālie šovi','Nacionalinė paroda','Nacionālie šovi'),
        
]

const funSunProgrammPageAllEntSlider2Block1 = new Vue({
    el: '#s3b11',
    data:{
        titleRU : 'До обеда',
        funSunProgrammPageAllEntSlider2Items1: funSunProgrammPageAllEntSlider2Items1,
        funSunProgrammPageAllEntSlider2Item1: funSunProgrammPageAllEntSlider2Item1
        
    }
});    


//ВКЛАДКА 2      
const funSunProgrammPageAllEntSlider2Item2 = (background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV) => ({background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV});

const funSunProgrammPageAllEntSlider2Items2 = [
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/4d2805d4-c685-4ebe-8152-4266be2186f0/block2-tab1-1);background-position: center;background-size: cover','Йога','Йога','Йога','Joga','Joga','Joga'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/b931a3c8-e194-4643-a279-a337c8d698ac/block2-tab1-2);background-position: center;background-size: cover','Пилатес','Пилатес','Пилатес','Pilates','Pilates','Pilates'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/5477f17e-3fbf-454c-b8f4-c0c3d644ccd8/block2-tab1-3);background-position: center;background-size: cover','Airgun','Airgun','Airgun','Airgun','Airgun','Airgun'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/1ef216bd-cb15-486d-94e3-cc094ff3811c/block2-tab1-4);background-position: center;background-size: cover','Бочче','Бочче','Бочче','Bočča','Petankė','Bočča'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/e1b0f5a2-1517-41e0-9570-ec90959cb2b7/block2-tab1-5);background-position: center;background-size: cover','Пляжный волейбол','Пляжный волейбол','Пляжный волейбол','Pludmales volejbols','Paplūdimio tinklinis','Pludmales volejbols'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/04fae21e-035d-4b0c-8772-84ed4f66ffe2/block2-tab1-6);background-position: center;background-size: cover','Стрельба из лука','Стрельба из лука','Стрельба из лука','Loka šaušana','Šaudymas iš lanko','Loka šaušana'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/5f42f60a-41cd-4ede-be81-4f7e179c9a63/block2-tab1-7);background-position: center;background-size: cover','Дартс','Дартс','Дартс','Šautriņas','Smiginis','Šautriņas'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/53dd3a9f-af3d-42ae-a605-96dbf536d776/block2-tab1-8);background-position: center;background-size: cover','Аквааэробика в бассейне','Аквааэробика в бассейне','Аквааэробика в бассейне','Ūdens aerobika baseinā','','Ūdens aerobika baseinā'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/b79aff66-5bd7-41bd-bf97-0ac114a0faab/block2-tab1-9);background-position: center;background-size: cover','Игры в бассейне','Игры в бассейне','Игры в бассейне','Spēles baseinā','Vandens aerobika baseine','Spēles baseinā'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/55319d6e-9a86-442b-9316-e6c9743d3947/block2-tab1-10);background-position: center;background-size: cover','Водное поло','Водное поло','Водное поло','Ūdens polo','Vandens polo','Ūdens polo'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/60848e48-bf99-49a4-88f2-b6ec972512f3/block2-tab1-11);background-position: center;background-size: cover','Make Body (упражнения на жиросжигание)','Make Body (упражнения на жиросжигание)','Make Body (упражнения на жиросжигание)','Make Body (vingrinājumi tauku dedzināšanai)','Make Body (liekninantys pratimai)','Make Body (vingrinājumi tauku dedzināšanai)'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/476bb12b-404a-4663-93e0-2c36c30e8695/block2-tab1-12);background-position: center;background-size: cover','Power aerobic','Power aerobic','Power aerobic','Spēka aerobika','','Spēka aerobika'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/b2fc9a48-45aa-41c4-967e-7c5ef3eaf959/block2-tab1-13);background-position: center;background-size: cover','Belly dance','Belly dance','Belly dance','Vēderdejas','Power aerobic','Vēderdejas'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/961a00b4-ca73-480e-8cbb-58732e0caad7/block2-tab1-14);background-position: center;background-size: cover','Latina - Salca Dance','Latina - Salca Dance','Latina - Salca Dance','Latina - Salca Dance','Latina - Salca Dance','Latina - Salca Dance'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/cb577d1e-4642-425a-9624-6d8a1b66ed84/block2-tab1-15);background-position: center;background-size: cover','Дартс','Дартс','Дартс','Šautriņas','Smiginis','Šautriņas'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/9ff949a7-d259-484f-ae97-8865c41020ec/block2-tab1-16);background-position: center;background-size: cover','Бочче','Бочче','Бочче','Bočča','Petankė','Bočča'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/274fae3c-fd6b-4bfc-a17f-04c5e021a036/block2-tab1-18);background-position: center;background-size: cover','Урок национального языка','Урок национального языка','Урок национального языка','Valsts valodas nodarbības','Vietinės kalbos pamokos','Valsts valodas nodarbības'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/ce0aaa5c-ad6f-4b04-a5a3-d797ac30b1fa/block2-tab1-19);background-position: center;background-size: cover','Кулинарный мастер-класс','Кулинарный мастер-класс','Кулинарный мастер-класс','Kulinārijas meistarklases','Kulinarijos pamokos','Kulinārijas meistarklases'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/05c41adf-1a83-4992-a35f-3151fad85515/block2-tab1-20);background-position: center;background-size: cover','Мастер-класс по мобильной фотографии','Мастер-класс по мобильной фотографии','Мастер-класс по мобильной фотографии','Mobilās fotogrāfijas meistarklase','Mobiliosios fotografijos pamokos','Mobilās fotogrāfijas meistarklase'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/edfb0c18-ba3f-4179-aa7f-0ec7c00c43e8/block2-tab1-21);background-position: center;background-size: cover','Мастер-класс по приготовлению коктейлей','Мастер-класс по приготовлению коктейлей','Мастер-класс по приготовлению коктейлей','Kokteiļu gatavošanas meistarklase','Kokteilių ruošimo pamokos','Kokteiļu gatavošanas meistarklase'),
    
    funSunProgrammPageAllEntSlider2Item1('background: url(https://www.tui.ru/getmedia/2b25a264-0daa-4942-ad4b-5d9b3f0e8f23/block2-tab1-24);background-position: center;background-size: cover','Ежедневные турниры','Ежедневные турниры','Ежедневные турниры','Ikdienas turnīri','Kasdieniniai turnyrai','Ikdienas turnīri'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/fa9ae5e5-e1c2-4d20-9afa-3928be9f4a5e/block2-tab1-25);background-position: center;background-size: cover','Zumba','Zumba','Zumba','Zumba','Zumba','Zumba'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/873acc69-de12-4bbe-ba8f-cf8faf034eb6/block2-tab1-26);background-position: center;background-size: cover','Power Zumba','Power Zumba','Power Zumba','Power Zumba','Power Zumba','Power Zumba'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/31636b08-305e-4cec-8ef5-33c954fe312c/block2-tab1-28);background-position: center;background-size: cover','Basic Step','Basic Step','Basic Step','Basic Step','Basic Step','Basic Step'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/3217a3a6-6d1a-49ff-8f70-4ae45777f01b/block2-tab1-29);background-position: center;background-size: cover','Power Step','Power Step','Power Step','Power Step','Power Step','Power Step'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/f9d3c662-e0f8-418b-b0d5-a9a22e5284e4/block2-tab1-30);background-position: center;background-size: cover','Баскетбол','Баскетбол','Баскетбол','Basketbols','Krepšinis','Basketbols'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/4c2d35dd-c6cd-4489-b972-192fe61cab33/block2-tab1-31);background-position: center;background-size: cover','Футбол','Футбол','Футбол','Futbols','Futbolas','Futbols'),
    
    funSunProgrammPageAllEntSlider2Item2('background: url(https://www.tui.ru/getmedia/2b25a264-0daa-4942-ad4b-5d9b3f0e8f23/block2-tab1-24);background-position: center;background-size: cover','Ежедневные турниры','Ежедневные турниры','Ежедневные турниры','Loka šaušana','Šaudymas iš lanko','Loka šaušana'),
    
    
    
        
]

const funSunProgrammPageAllEntSlider2Block2 = new Vue({
    el: '#s3b22',
    data:{
        titleRU : 'До обеда',
        titleBY : 'До обеда',
        titleUA : 'До обеда',
        //Не верно у эстонии
        titleEE : 'Pirms pusdienas',
        titleLT : 'Iki pietų',
        titleLV : 'Pirms pusdienas',
        
        
        funSunProgrammPageAllEntSlider2Items2: funSunProgrammPageAllEntSlider2Items2,
        funSunProgrammPageAllEntSlider2Item2: funSunProgrammPageAllEntSlider2Item2
        
    }
});    

//ВКЛАДКА 2      
const funSunProgrammPageAllEntSlider2Item3 = (background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV) => ({background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV});

const funSunProgrammPageAllEntSlider2Items3 = [
    
    funSunProgrammPageAllEntSlider2Item3('background: url(https://www.tui.ru/getmedia/9ee285ad-ed30-4807-a1ee-32db96a4fbe2/block2-tab2-1);background-position: center;background-size: cover','Beach party','Beach party','Beach party','Pludmales ballīte','Beach party','Pludmales ballīte'),
    
    funSunProgrammPageAllEntSlider2Item3('background: url(https://www.tui.ru/getmedia/862c7c4f-3815-452a-965a-4390b554c3b5/block2-tab2-2);background-position: center;background-size: cover','Профессиональные шоу','Профессиональные шоу','Профессиональные шоу','Profesionālie šovi','Profesionalūs šou','Profesionālie šovi'),
    
    funSunProgrammPageAllEntSlider2Item3('background: url(https://www.tui.ru/getmedia/c82f2219-4350-4aa9-911a-a3f039419d29/block2-tab2-3);background-position: center;background-size: cover','Дискотека','Дискотека','Дискотека','Diskotēka','Diskoteka','Diskotēka'),
    
    funSunProgrammPageAllEntSlider2Item3('background: url(https://www.tui.ru/getmedia/be0afaa0-e7c8-49a7-aae4-84a18e504264/block2-tab2-4?2);background-position: center;background-size: cover','Выступления популярных артистов','Выступления популярных артистов','Выступления популярных артистов','Pazīstamu skatuves mākslinieku uzstāšanās','Populiarių atlikėjų pasirodymas','Pazīstamu skatuves mākslinieku uzstāšanās'),
    
    funSunProgrammPageAllEntSlider2Item3('background: url(https://www.tui.ru/getmedia/98042b33-5817-4670-8ae9-17cc3e5c9afa/block2-tab2-5);background-position: center;background-size: cover','Живая музыка','Живая музыка','Живая музыка','Dzīvā mūzika','Gyva muzika','Dzīvā mūzika'),
    
    funSunProgrammPageAllEntSlider2Item3('background: url(https://www.tui.ru/getmedia/6aaf0cd2-c626-4e41-84a8-6d72ee178910/block2-tab2-6);background-position: center;background-size: cover','Тематическая вечеринка','Тематическая вечеринка','Тематическая вечеринка','Tematiskas ballītes','Teminiai vakarėliai','Tematiskas ballītes'),
    
    funSunProgrammPageAllEntSlider2Item3('background: url(https://www.tui.ru/getmedia/7182589e-dfb1-4896-8d32-2fa6a64f1cfe/block2-tab2-7);background-position: center;background-size: cover','Караоке','Караоке','Караоке','Karaoke','Karaoke','Karaoke'),
    
    funSunProgrammPageAllEntSlider2Item3('background: url(https://www.tui.ru/getmedia/ea667d41-0290-4207-b8b5-c399dbd8a057/block2-tab2-8);background-position: center;background-size: cover','Белая вечеринка','Белая вечеринка','Белая вечеринка','Baltā ballīte','Baltas vakarėlis','Baltā ballīte'),
    
    funSunProgrammPageAllEntSlider2Item3('background: url(https://www.tui.ru/getmedia/e7ca55d4-dc5f-4308-bc42-8796881350b7/block2-tab2-9);background-position: center;background-size: cover','Национальное шоу','Национальное шоу','Национальное шоу','Nacionālie šovi','Nacionaliniai šou','Nacionālie šovi'),
        
]

const funSunProgrammPageAllEntSlider2Block3 = new Vue({
    el: '#s3b33',
    data:{
        titleRU : 'Вечером',
        titleBY : 'Вечером',
        titleUA : 'Вечером',
        
        //Не верно у эстонии
        titleEE : 'Pēcpusdienas',
        titleLT : 'Po pietų',
        titleLV : 'Pēcpusdienas',
        
        
        funSunProgrammPageAllEntSlider2Items3: funSunProgrammPageAllEntSlider2Items3,
        funSunProgrammPageAllEntSlider2Item3: funSunProgrammPageAllEntSlider2Item3
        
    }
});    
