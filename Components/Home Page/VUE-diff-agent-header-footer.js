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
        menuItemSmartLogo: 'https://www.tui.ru/getmedia/dae3517e-c26d-4e8c-9ed0-93d2faef2cd9/smart-logo-300px',
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
        //Title
        agentFooterItemTitleRU: 'Сайты о концепциях',
        agentFooterItemTitleBY: 'Сайты о концепциях',
        agentFooterItemTitleUA: 'Сайты о концепциях',
        agentFooterItemTitleEE: 'Kontseptsiooni veebilehed',
        agentFooterItemTitleLT: 'Mūsų koncepcijos',
        agentFooterItemTitleLV: 'Mūsu koncepcijas',
        
        //Home link
        agentFooterItemHomeLink: '/concepts/home/',
        agentFooterItemHomeLinkNameRU: 'Все концепции ',
        agentFooterItemHomeLinkNameBY: 'Все концепции ',
        agentFooterItemHomeLinkNameUA: 'Все концепции ',
        agentFooterItemHomeLinkNameEE: 'Kõik kontseptsioonid',
        agentFooterItemHomeLinkNameLT: 'Visos koncepcijos',
        agentFooterItemHomeLinkNameLV: 'Visas koncepcijas',
        
        //Сайт для агентств
        agentFooterItemAgentLinkRU: 'http://agent.tui.ru/',
        agentFooterItemAgentLinkNameRU: 'Сайт для агентств',
        agentFooterItemAgentLinkBY: 'http://agent.tui.by/',
        agentFooterItemAgentLinkNameBY: 'Сайт для агентств',
        agentFooterItemAgentLinkUA: 'http://agent.tui.ua/',
        agentFooterItemAgentLinkNameUA: 'Сайт для агентств',
        agentFooterItemAgentLinkEE: 'http://agent.tui.ee/',
        agentFooterItemAgentLinkNameEE: 'Agentidele',
        agentFooterItemAgentLinkLT: 'http://agent.tui.lt/',
        agentFooterItemAgentLinkNameLT: 'Agento zona',
        agentFooterItemAgentLinkLV: 'http://agent.tui.lv/',
        agentFooterItemAgentLinkNameLV: 'Vietne aģentiem',
        
        //Сайт B2B
        agentFooterItemB2bLinkRU: 'http://b2b.tui.ru/',
        agentFooterItemB2bLinkNameRU: 'Сайт B2b',
        agentFooterItemB2bLinkBY: 'http://b2b.tui.by/',
        agentFooterItemB2bLinkNameBY: 'Сайт B2b',
        agentFooterItemB2bLinkUA: 'http://b2b.tui.ua/',
        agentFooterItemB2bLinkNameUA: 'Сайт B2b',
        agentFooterItemB2bLinkEE: 'https://b2b.tuibaltics.eu/',
        agentFooterItemB2bLinkNameEE: 'B2B veebileht',
        agentFooterItemB2bLinkLT: 'https://b2b.tuibaltics.eu/',
        agentFooterItemB2bLinkNameLT: 'B2b zona',
        agentFooterItemB2bLinkLV: 'https://b2b.tuibaltics.eu/',
        agentFooterItemB2bLinkNameLV: 'B2b vietne',
        
        //Контакты title
        agentFooterItemTitle2RU: 'Контакты',
        agentFooterItemTitle2BY: 'Контакты',
        agentFooterItemTitle2UA: 'Контакты',
        agentFooterItemTitle2EE: 'Kontakt',
        agentFooterItemTitle2LT: 'Kontaktai',
        agentFooterItemTitle2LV: 'Kontakti',
        
        //Телефон
        agentFooterItemPhoneRU: 'tel:84951043450',
        agentFooterItemPhoneNameRU: '8 (495) 104-34-50',
        agentFooterItemPhoneBY: 'tel:+375173169074',
        agentFooterItemPhoneNameBY: '+375 17 316 90 74',
        agentFooterItemPhoneUA: 'tel:+3800444010808',
        agentFooterItemPhoneNameUA: '+380 044 401 08 08',
        agentFooterItemPhoneEE: 'tel:+3723350005',
        agentFooterItemPhoneNameEE: '+372 3350005',
        agentFooterItemPhoneLT: 'tel:+37052408889',
        agentFooterItemPhoneNameLT: '+370 5 240 88 89',
        agentFooterItemPhoneLV: 'tel:+37163007772',
        agentFooterItemPhoneNameLV: '+371 63007772',
        
        //Почта
        agentFooterItemMailRU: 'mailto:diffproduct@tui.ru',
        agentFooterItemMailNameRU: 'diffproduct@tui.ru',
        agentFooterItemMailBY: 'mailto:diffproduct@tui.ru',
        agentFooterItemMailNameBY: 'diffproduct@tui.ru',
        agentFooterItemMailUA: 'mailto:diffproduct@tui.ua',
        agentFooterItemMailNameUA: 'diffproduct@tui.ua',
        agentFooterItemMailEE: 'mailto:tallinn@tuibaltics.eu',
        agentFooterItemMailNameEE: 'tallinn@tuibaltics.eu',
        agentFooterItemMailLT: 'mailto:rezervacijos@tuibaltics.eu',
        agentFooterItemMailNameLT: 'rezervacijos@tuibaltics.eu',
        agentFooterItemMailLV: 'mailto:book@tuibaltics.eu',
        agentFooterItemMailNameLV: 'book@tuibaltics.eu',
    }
})