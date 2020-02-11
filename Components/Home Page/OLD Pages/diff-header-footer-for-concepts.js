const AgentMenuHeader = new Vue ({
    el: '#home-page-diff-menu-top',
    data: {
        logoLink: 'https://agent.tui.ru/Images/logo.png',
        
        
        
        //Франшиза
        menuItemFranchaizingLink: '/Franchaizing',
        menuItemFranchaizingNameRU: 'Франчайзинг',
        menuItemFranchaizingNameBY: 'Франчайзинг',
        menuItemFranchaizingNameUA: 'Франчайзинг',
        menuItemFranchaizingNameEE: 'Frantsiis',
        menuItemFranchaizingNameLT: 'Franšīze',
        menuItemFranchaizingNameLV: 'Frančižė',
        
        //Сотрудничество
        menuItemPartnershipLink: '/Partnership',
        menuItemPartnershipNameRU: 'Сотрудничество',
        menuItemPartnershipNameBY: 'Сотрудничество',
        menuItemPartnershipNameUA: 'Сотрудничество',
        menuItemPartnershipNameEE: 'Koostöö',
        menuItemPartnershipNameLT: 'Bendradarbiavimas',
        menuItemPartnershipNameLV: 'Sadarbība',
        
        //О компании
        menuItemAboutLink: '/About/About-company',
        menuItemAboutNameRU: 'О компании',
        menuItemAboutNameBY: 'О компании',
        menuItemAboutNameUA: 'О компании',
        menuItemAboutNameEE: 'Meist',
        menuItemAboutNameLT: 'Apie įmonę',
        menuItemAboutNameLV: 'Par kompāniju',
        
        //Магазин
        menuItemShopLink: '/Branded-Shop',
        menuItemShopLinkUA: '/Information-page/tui-shop-new ',
        menuItemShopNameRU: 'TUI Shop',
        menuItemShopNameBY: 'TUI Shop',
        menuItemShopNameUA: 'Брендовая Продукция TUI ',
        menuItemShopNameEE: 'TUI Shop',
        menuItemShopNameLT: 'TUI Shop',
        menuItemShopNameLV: 'TUI Shop',
        
        //Концепции отдыха
        menuItemConceptsLink: '/concepts/home/',
        menuItemConceptsNameRU: 'Концепции отдыха ',
        menuItemConceptsNameBY: 'Концепции отдыха ',
        menuItemConceptsNameUA: 'Концепции отдыха ',
        menuItemConceptsNameEE: 'Puhkuse kontseptsioonid',
        menuItemConceptsNameLT: 'Poilsio koncepcijos',
        menuItemConceptsNameLV: 'Atpūtas koncepcijas',
        
        //Smart
        menuItemSmartLink: '/concepts/smart',
        menuItemSmartLogo: 'https://www.tui.ru/getmedia/1244ce51-44fe-4fb1-b80c-f8b2389015c0/SMART-logo-200px',
        menuItemSmartName: 'SMART',
        menuItemSmartNameRU: 'Умный подход к отдыху',
        menuItemSmartNameBY: 'Умный подход к отдыху',
        menuItemSmartNameUA: 'Умный подход к отдыху',
        menuItemSmartNameEE: 'Nutikas lähenemine puhkamisele',
        menuItemSmartNameLT: 'Protingas požiūris į poilsį',
        menuItemSmartNameLV: 'Pārdomāta pieeja atpūtai',
        
        //Fun Sun
        menuItemFunSunLink: '/concepts/tui-fun-sun',
        menuItemFunSunLogo: 'https://www.tui.ru/getmedia/a43e4cf0-4244-45b4-8bd4-275b7d8ba1a9/logoTopFN',
        menuItemFunSunName: 'FUN&SUN',
        menuItemFunSunNameRU: 'Семейный отдых',
        menuItemFunSunNameBY: 'Семейный отдых',
        menuItemFunSunNameUA: 'Семейный отдых',
        menuItemFunSunNameEE: 'Perepuhkus',
        menuItemFunSunNameLT: 'Šeimos atostogos',
        menuItemFunSunNameLV: 'Šeimų poilsis',
        
        //Day Night
        menuItemDayNightLink: '/concepts/tui-day-night',
        menuItemDayNightLogo: 'https://www.tui.ru/getmedia/dfa8f32e-6221-4be8-9c2e-23d063b6b989/DN-logo_vertical_web',
        menuItemDayNightName: 'DAY&NIGHT',
        menuItemDayNightNameRU: 'Молодежный отдых',
        menuItemDayNightNameBY: 'Молодежный отдых',
        menuItemDayNightNameUA: 'Молодежный отдых',
        menuItemDayNightNameEE: 'Puhkus noortele',
        menuItemDayNightNameLT: 'Jaunimo poilsis',
        menuItemDayNightNameLV: 'Jauniešu atpūta',
        
        //Toucan
        menuItemToucanLink: '/concepts/tui-toucan',
        menuItemToucanLogo: 'https://www.tui.ru/getmedia/eda1b56f-2532-46eb-8626-65425d799edf/TC-logo-mini-vertical',
        menuItemToucanName: 'MINI TOUCAN',
        menuItemToucanNameRU: 'Отдых с детьми',
        menuItemToucanNameBY: 'Отдых с детьми',
        menuItemToucanNameUA: 'Отдых с детьми',
        menuItemToucanNameEE: 'Puhkus lastega',
        menuItemToucanNameLT: 'Poilsis su vaikais',
        menuItemToucanNameLV: 'Atpūta ar bērniem',
        
        //О Концепциях
        menuItemConceptsAboutLink: '/concepts/home',
        menuItemConceptsAboutLogo: 'https://www.tui.ru/getmedia/e7f4d372-680e-46e8-bb37-28e2ec6f2f50/toucan-main-page-100x100',
        menuItemConceptsAboutNameRU1: 'О концепциях',
        menuItemConceptsAboutNameRU2: 'отдыха ',
        menuItemConceptsAboutNameBY1: 'О концепциях',
        menuItemConceptsAboutNameBY2: 'отдыха ',
        menuItemConceptsAboutNameUA1: 'О концепциях',
        menuItemConceptsAboutNameUA2: 'отдыха ',
        menuItemConceptsAboutNameEE1: 'Puhkuse',
        menuItemConceptsAboutNameEE2: 'kontseptsioonidest',
        menuItemConceptsAboutNameLT1: 'Apie ',
        menuItemConceptsAboutNameLT2: 'poilsio Koncepcijas',
        menuItemConceptsAboutNameLV1: 'Par',
        menuItemConceptsAboutNameLV2: 'atpūtas koncepcijam',
        
        //Премиум
        menuItemPremiumLink: '/premium/premium',
        menuItemPremiumLinkUA: '/information-page/tui-prestige/',
        menuItemPremiumName: 'TUI Premium ',
        
        
        //Личный кабинет
        menuItemLoginNameRU: 'Личный кабинет',
        menuItemLoginNamelinkRU: 'https://b2b.tui.ru/',
        menuItemLoginNameBY: 'Личный кабинет',
        menuItemLoginNamelinkBY: 'http://b2b.tui.by/',
        menuItemLoginNameUA: 'Личный кабинет',
        menuItemLoginNamelinkUA: 'https://b2b.tui.ua/',
        menuItemLoginNameEE: 'Logi sisse',
        menuItemLoginNamelinkEE: 'https://b2b.tuibaltics.eu/',
        menuItemLoginNameLT: 'Agento zona',
        menuItemLoginNamelinkLT: 'https://b2b.tuibaltics.eu/',
        menuItemLoginNameLV: 'Personīgais kabinets',
        menuItemLoginNamelinkLV: 'https://b2b.tuibaltics.eu/',
        
        //Меню с телефоном
        menuPhoneTitleRU: 'Агентствам:',
        menuPhonePhoneRU: '+7 495 660-5-660',
        menuPhoneTitleBY: 'Агентствам:',
        menuPhonePhoneBY: '+375 17 316 90 74',
        menuPhoneTitleUA: 'Агентствам:',
        menuPhonePhoneUA: '044 401 08 08',
        menuPhoneTitleEE: 'Agentidele:',
        menuPhonePhoneEE: '+372 4455006',
        menuPhoneTitleLT: 'Agentūroms:',
        menuPhonePhoneLT: '+370 602 75 745',
        menuPhoneTitleLV: 'Aģentūrām:',
        menuPhonePhoneLV: '+371 6 300 77 70',
                
        
        //Сайт для туристов
        menuTouristSiteLinkRU: 'http://www.tui.ru',
        menuTouristSiteNameRU: 'Сайт для туристов',
        menuTouristSiteLinkBY: 'http://www.tui.by',
        menuTouristSiteNameBY: 'Сайт для туристов',
        menuTouristSiteLinkUA: 'http://www.tui.ua',
        menuTouristSiteNameUA: 'Сайт для туристов',
        menuTouristSiteLinkEE: 'http://www.tui.ee',
        menuTouristSiteNameEE: 'Klientidele',
        menuTouristSiteLinkLT: 'http://www.tui.lt',
        menuTouristSiteNameLT: 'Tinklapis klientams',
        menuTouristSiteLinkLV: 'http://www.tui.lv',
        menuTouristSiteNameLV: 'Vietne tūristiem',
    }
});

const AgentMenuFooter = new Vue ({
    el: '#home-page-diff-footer',
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
})