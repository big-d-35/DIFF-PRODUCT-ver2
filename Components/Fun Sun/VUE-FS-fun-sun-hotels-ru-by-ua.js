/*
Привет.
Ниже файл с информацией для ВСЕХ страниц FUN SUN для клиентского и агентского сайте (RU BY UA )

Для того чтобы изменить информацию достаточно заменить ее в этом файле и обновить файл который лежит на сайте tui.ru \ media \ новый сайт \ концепции \ FUN SUN \ JS \ VUE-fun-sun-hotels-ru-by-ua.js - ВНИМАНИЕ! именно нажать на кнопку заменить, иначе придется менять ссылку на всех страницах.

Обрати внимение на название переменных в файле html, если в конце есть указание к стране (например имя оканчивается myNameRU - значит это перевод на русский, myNameEE - значит это перевод на эстонский и тп)

Также обрати внимание на название ссылок - если оканчивается на Client - значит ссылка на клиент, если Agent - значит ссылка на агенте.

Некоторые страницы в консоли могут ругаться на отсутствие некоторых элементов, это нормально, просто у нас один файл на все страницы и соответственно на некоторых страницах нет элементов с других страниц, поэтому не обращай внимание.

*/

const funSunHotHotels = new Vue ({
    el: '#hotels-fun-sun',
    data: {
        titleRU: 'ОТЕЛИ С КОНЦЕПЦИЕЙ FUN&SUN',
        titleBY: 'ОТЕЛИ С КОНЦЕПЦИЕЙ FUN&SUN',
        titleUA: 'ОТЕЛИ С КОНЦЕПЦИЕЙ FUN&SUN',
        
        //RU 
        country1RU: 'Турция',
        country2RU: 'Кипр',
        
        
        //BY 
        country1BY: 'Турция',
        country2BY: 'Кипр',
        
        
        //UA 
        country1UA: 'Турция',
        country2UA: 'Кипр',
        
        
        //HOTELS 1 ТУРЦИЯ
        country1Hotels : [
            //HOTEL 1
            {
                hotelName : 'FUN&SUN Miarosa Incekum Beach 5*',
                background: 'background: url(https://www.tui.ru/getmedia/e112b2c4-35a6-43bb-b43f-e788025b543e/new_hotel_04_04);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/TUI-FUN-SUN-Miarosa-Incekum-Beach',
                hotelLinkClient: '/hotel/europe-turkey-alanya-incekum-tui__fun__sun__miarosa__incekum__beach/',
                
                //RU
                countryNameRU: 'Турция, Алания (Авсаллар)',
                aboutHotelRUItems: [
                    { item: 'Компактная территория' },
                    { item: 'Есть relax-зона с бассейном и баром' },
                    { item: 'Крутые водные горки' },
                    { item: 'Новые номера' },
                    { item: 'Песчаный пляж' },
                    { item: 'Необычная территория Детского Клуба Тукан с бассейном' }
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Турция, Алания (Авсаллар)',
                aboutHotelBYItems: [
                    { item: 'Компактная территория' },
                    { item: 'Есть relax-зона с бассейном и баром' },
                    { item: 'Крутые водные горки' },
                    { item: 'Новые номера' },
                    { item: 'Песчаный пляж' },
                    { item: 'Необычная территория Детского Клуба Тукан с бассейном' }
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Турция, Алания (Авсаллар)',
                aboutHotelUAItems: [
                    { item: 'Компактная территория' },
                    { item: 'Есть relax-зона с бассейном и баром' },
                    { item: 'Крутые водные горки' },
                    { item: 'Новые номера' },
                    { item: 'Песчаный пляж' },
                    { item: 'Необычная территория Детского Клуба Тукан с бассейном' }
                ],
                buttonUA : 'Выбрать тур',
            },
            
            //HOTEL 2 
            {
                hotelName : 'FUN&SUN Club Di Finica 5*',
                background: 'background: url(https://www.tui.ru/getmedia/7299bc8c-2f8b-4dc0-aa2a-dd56a6b2830a/global);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Finike/TUI-FUN-SUN-Club-Di-Finica',
                hotelLinkClient: '/hotel/europe-turkey-kemer-finike-tui__fun__sun__club__di__finica/',
                
                //RU
                countryNameRU: 'Турция, Кемер (Финике)',
                aboutHotelRUItems: [
                    { item: 'Уникальное месторасположение' },
                    { item: 'Отель окружен апельсиновыми рощами' },
                    { item: 'Просторный пляж с плавным входом' },
                    { item: 'Новые номера' },
                    { item: 'Большая зеленая территория' },
                    { item: 'Водные горки' }
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Турция, Кемер (Финике)',
                aboutHotelBYItems: [
                    { item: 'Уникальное месторасположение' },
                    { item: 'Отель окружен апельсиновыми рощами' },
                    { item: 'Просторный пляж с плавным входом' },
                    { item: 'Новые номера' },
                    { item: 'Большая зеленая территория' },
                    { item: 'Водные горки' }
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Турция, Кемер (Финике)',
                aboutHotelUAItems: [
                    { item: 'Уникальное месторасположение' },
                    { item: 'Отель окружен апельсиновыми рощами' },
                    { item: 'Просторный пляж с плавным входом' },
                    { item: 'Новые номера' },
                    { item: 'Большая зеленая территория' },
                    { item: 'Водные горки' }
                ],
                buttonUA : 'Выбрать тур',
            },
            
            //HOTEL 3
            {
                hotelName : 'FUN&SUN Comfort Beach Resort 5*',
                background: 'background: url(https://www.tui.ru/getmedia/1775cfc9-5312-4a34-86a2-6093a73b5bf8/global_photo_comfort);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Goynuk/TUI-FUN-SUN-Comfort-Beach-Resort',
                hotelLinkClient: '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__comfort__beach__resort/',
                
                //RU
                countryNameRU: 'Турция, Кемер (Гейнюк)',
                aboutHotelRUItems: [
                    { item: 'Большая зеленая территория' },
                    { item: 'Просторные номера' },
                    { item: 'Аквапарк с 4 водными горками' },
                    { item: 'Мини-зоопарк' },
                    { item: '4 бассейна' },
                    { item: 'Пляж с плавным пологим входом в море' }
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Турция, Кемер (Гейнюк)',
                aboutHotelBYItems: [
                    { item: 'Большая зеленая территория' },
                    { item: 'Просторные номера' },
                    { item: 'Аквапарк с 4 водными горками' },
                    { item: 'Мини-зоопарк' },
                    { item: '4 бассейна' },
                    { item: 'Пляж с плавным пологим входом в море' }
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Турция, Кемер (Гейнюк)',
                aboutHotelUAItems: [
                    { item: 'Большая зеленая территория' },
                    { item: 'Просторные номера' },
                    { item: 'Аквапарк с 4 водными горками' },
                    { item: 'Мини-зоопарк' },
                    { item: '4 бассейна' },
                    { item: 'Пляж с плавным пологим входом в море' }
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
            //HOTEL 4
            {
                hotelName : 'FUN&SUN River Resort Belek 5*',
                background: 'background: url(https://www.tui.ru/getmedia/ac816ac1-3c20-4a5f-a712-862c2ec73b37/photo-8-2);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/belek/Belek/TUI-FUN-SUN-River-Resort-Belek',
                hotelLinkClient: '/hotel/europe-turkey-belek-belek-tui__fun__sun__river__resort__belek/',
                
                //RU
                countryNameRU: 'Турция, Белек',
                aboutHotelRUItems: [
                    { item: 'Расположен на берегу реки' },
                    { item: 'Необычная территория с двухэтажными бунгало в греческом стиле' },
                    { item: 'Бюджетный Белек - низкая цена для данного региона' },
                    { item: 'Трансфер до собственного пляжа осуществляется по реке с живописным видом (время пути 8-12 минут)' },
                    { item: 'Есть номера Family с размещением 5 человек и виллы с размещением 9 человек' },
                    { item: 'Есть номера SWIM UP' }
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Турция, Белек',
                aboutHotelBYItems: [
                    { item: 'Расположен на берегу реки' },
                    { item: 'Необычная территория с двухэтажными бунгало в греческом стиле' },
                    { item: 'Бюджетный Белек - низкая цена для данного региона' },
                    { item: 'Трансфер до собственного пляжа осуществляется по реке с живописным видом (время пути 8-12 минут)' },
                    { item: 'Есть номера Family с размещением 5 человек и виллы с размещением 9 человек' },
                    { item: 'Есть номера SWIM UP' }
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Турция, Белек',
                aboutHotelUAItems: [
                    { item: 'Расположен на берегу реки' },
                    { item: 'Необычная территория с двухэтажными бунгало в греческом стиле' },
                    { item: 'Бюджетный Белек - низкая цена для данного региона' },
                    { item: 'Трансфер до собственного пляжа осуществляется по реке с живописным видом (время пути 8-12 минут)' },
                    { item: 'Есть номера Family с размещением 5 человек и виллы с размещением 9 человек' },
                    { item: 'Есть номера SWIM UP' }
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
            //HOTEL 5
            {
                hotelName : 'FUN&SUN Club Saphire 5*',
                background: 'background: url(https://www.tui.ru/getmedia/517b01e9-57fe-4adb-a50f-a010ef13d1e5/photo-9);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/kemer/Tekirova/TUI-FUN-SUN-Club-Saphire/',
                hotelLinkClient: '/hotel/europe-turkey-kemer-tekirova-tui__fun__sun__club__saphire/',
                
                //RU
                countryNameRU: 'Турция, Кемер (Текирова)',
                aboutHotelRUItems: [
                    { item: 'Выгодная стоимость' },
                    { item: 'Зеленая территория с сосновыми деревьями' },
                    { item: 'Оборудование Zippline на детской площадке' },
                    { item: 'Новая зона Chill out 18+ (только для взрослых, с круглосуточным баром и закусками)' },
                    { item: 'Отдельная Relax зона с бассейном и баром' },
                    { item: 'Первый отель по концепции FUN&SUN' }
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Турция, Кемер (Текирова)',
                aboutHotelBYItems: [
                    { item: 'Выгодная стоимость' },
                    { item: 'Зеленая территория с сосновыми деревьями' },
                    { item: 'Оборудование Zippline на детской площадке' },
                    { item: 'Новая зона Chill out 18+ (только для взрослых, с круглосуточным баром и закусками)' },
                    { item: 'Отдельная Relax зона с бассейном и баром' },
                    { item: 'Первый отель по концепции FUN&SUN' }
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Турция, Кемер (Текирова)',
                aboutHotelUAItems: [
                    { item: 'Выгодная стоимость' },
                    { item: 'Зеленая территория с сосновыми деревьями' },
                    { item: 'Оборудование Zippline на детской площадке' },
                    { item: 'Новая зона Chill out 18+ (только для взрослых, с круглосуточным баром и закусками)' },
                    { item: 'Отдельная Relax зона с бассейном и баром' },
                    { item: 'Первый отель по концепции FUN&SUN' }
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
            //HOTEL 6
            {
                hotelName : 'FUN&SUN Сlub Serra Palace 5*',
                background: 'background: url(https://www.tui.ru/getmedia/d23f7504-8e8e-4757-b2ae-421600d11b95/photo-10);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/side/Kizilot/TUI-FUN-SUN-Club-Serra-Palace-(ex-Club-Calimera-S',
                hotelLinkClient: '/hotel/europe-turkey-side-kizilot-tui__fun__sun__club__serra__palace/',
                
                //RU
                countryNameRU: 'Турция, Сиде (Кызылот)',
                aboutHotelRUItems: [
                    { item: 'Самая большая территория среди отелей FUN&SUN: 150 000 кв.м.' },
                    { item: 'Аквапарк для всей семьи' },
                    { item: '2 главных ресторана: общий и отдельный ресторан FUN&SUN' },
                    { item: '7 открытых бассейнов (взрослые и детские), включая бассейн олимпийского размера' },
                    { item: 'Единственный отель из нашей линейки для туристов из разных стран' },
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Турция, Сиде (Кызылот)',
                aboutHotelBYItems: [
                    { item: 'Самая большая территория среди отелей FUN&SUN: 150 000 кв.м.' },
                    { item: 'Аквапарк для всей семьи' },
                    { item: '2 главных ресторана: общий и отдельный ресторан FUN&SUN' },
                    { item: '7 открытых бассейнов (взрослые и детские), включая бассейн олимпийского размера' },
                    { item: 'Единственный отель из нашей линейки для туристов из разных стран' },
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Турция, Сиде (Кызылот)',
                aboutHotelUAItems: [
                    { item: 'Самая большая территория среди отелей FUN&SUN: 150 000 кв.м.' },
                    { item: 'Аквапарк для всей семьи' },
                    { item: '2 главных ресторана: общий и отдельный ресторан FUN&SUN' },
                    { item: '7 открытых бассейнов (взрослые и детские), включая бассейн олимпийского размера' },
                    { item: 'Единственный отель из нашей линейки для туристов из разных стран' },
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
            //HOTEL 7
            {
                hotelName : 'FUN&SUN Miarosa Ghazal Resort 5*',
                background: 'background: url(https://www.tui.ru/getmedia/22840909-3e68-42ad-8e6a-ec6ffae85d0e/photo-11);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Goynuk/TUI-FUN-SUN-Miarosa-Ghazal-Resort',
                hotelLinkClient: '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__miarosa__ghazal__resort/',
                
                //RU
                countryNameRU: 'Турция, Кемер (Гейнюк)',
                aboutHotelRUItems: [
                    { item: 'Зеленая территория в 2 км от Кемера' },
                    { item: 'SPA-центр' },
                    { item: 'Бассейн с водными горками' },
                    { item: 'Отдельный детский ресторан Тукан' },
                    { item: 'Отдельная спокойная зона на пляже только для взрослых 18+' },
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Турция, Кемер (Гейнюк)',
                aboutHotelBYItems: [
                    { item: 'Зеленая территория в 2 км от Кемера' },
                    { item: 'SPA-центр' },
                    { item: 'Бассейн с водными горками' },
                    { item: 'Отдельный детский ресторан Тукан' },
                    { item: 'Отдельная спокойная зона на пляже только для взрослых 18+' },
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Турция, Кемер (Гейнюк)',
                aboutHotelUAItems: [
                    { item: 'Зеленая территория в 2 км от Кемера' },
                    { item: 'SPA-центр' },
                    { item: 'Бассейн с водными горками' },
                    { item: 'Отдельный детский ресторан Тукан' },
                    { item: 'Отдельная спокойная зона на пляже только для взрослых 18+' },
                ],
                buttonUA : 'Выбрать тур',
            },
            
            //HOTEL 8
            {
                hotelName : 'FUN&SUN Club Belek 5*',
                background: 'background: url(https://www.tui.ru/getmedia/c53735b0-0177-41f5-bad2-e0b80d967d6d/photo-12);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-Club-Belek',
                hotelLinkClient: '/hotel/europe-turkey-belek-belek-tui__fun__sun__club__belek/',
                
                //RU
                countryNameRU: 'Турция, Белек',
                aboutHotelRUItems: [
                    { item: 'Отель "2 в 1": LIFE - Европейский стиль и MOOD - марокканский стиль' },
                    { item: 'Бунгало MOOD - это уединенная зеленая территория с relax-бассейнами' },
                    { item: 'Бассейн олимпийского размера' },
                    { item: 'Номера PREMUIM категории - Mood Suite, Villa' },
                    { item: 'Отдельное спорт-пространство Wellness & Fitness' },
                    { item: 'Пляж, ежегодно получающий награду "Голубой флаг"' }
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Турция, Белек',
                aboutHotelBYItems: [
                    { item: 'Отель "2 в 1": LIFE - Европейский стиль и MOOD - марокканский стиль' },
                    { item: 'Бунгало MOOD - это уединенная зеленая территория с relax-бассейнами' },
                    { item: 'Бассейн олимпийского размера' },
                    { item: 'Номера PREMUIM категории - Mood Suite, Villa' },
                    { item: 'Отдельное спорт-пространство Wellness & Fitness' },
                    { item: 'Пляж, ежегодно получающий награду "Голубой флаг"' }
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Турция, Белек',
                aboutHotelUAItems: [
                    { item: 'Отель "2 в 1": LIFE - Европейский стиль и MOOD - марокканский стиль' },
                    { item: 'Бунгало MOOD - это уединенная зеленая территория с relax-бассейнами' },
                    { item: 'Бассейн олимпийского размера' },
                    { item: 'Номера PREMUIM категории - Mood Suite, Villa' },
                    { item: 'Отдельное спорт-пространство Wellness & Fitness' },
                    { item: 'Пляж, ежегодно получающий награду "Голубой флаг"' }
                ],
                buttonUA : 'Выбрать тур',
            },
            
            //HOTEL 9
            {
                hotelName : 'FUN&SUN Club Euphoria Palm Beach 5*',
                background: 'background: url(https://www.tui.ru/getmedia/c2885925-438a-4a46-9301-372ed0a7407d/814664);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/side/Kizilagac/fun-sun-euphoria-palm-beach',
                hotelLinkClient: '/hotel/europe-turkey-side-kizilagac-fun__sun__euphoria__palm__beach/',
                
                //RU
                countryNameRU: 'Турция, Сиде, Кызылач',
                aboutHotelRUItems: [
                    { item: 'Отель с собственным песчано-галечным пляжем, открытым и крытым бассейном, водными горками' },
                    { item: 'Отель состоит из одного главного здания и комплекса 2-этажных бунгало' },
                    { item: 'Большая территория отеля - 183 000 кв. м.' },
                    { item: 'Jткрытый бассейн, релакс-бассейн, крытый бассейн, 2 водные горки' },
                    { item: 'Тренажерный зал, мультикорт, дискотека, турецкая баня / сауна / парная' },
                    { item: '6 a la cart ресторанов' }
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Турция, Сиде, Кызылач',
                aboutHotelBYItems: [
                    { item: 'Отель с собственным песчано-галечным пляжем, открытым и крытым бассейном, водными горками' },
                    { item: 'Отель состоит из одного главного здания и комплекса 2-этажных бунгало' },
                    { item: 'Большая территория отеля - 183 000 кв. м.' },
                    { item: 'Jткрытый бассейн, релакс-бассейн, крытый бассейн, 2 водные горки' },
                    { item: 'Тренажерный зал, мультикорт, дискотека, турецкая баня / сауна / парная' },
                    { item: '6 a la cart ресторанов' }
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Турция, Сиде, Кызылач',
                aboutHotelUAItems: [
                    { item: 'Отель с собственным песчано-галечным пляжем, открытым и крытым бассейном, водными горками' },
                    { item: 'Отель состоит из одного главного здания и комплекса 2-этажных бунгало' },
                    { item: 'Большая территория отеля - 183 000 кв. м.' },
                    { item: 'Jткрытый бассейн, релакс-бассейн, крытый бассейн, 2 водные горки' },
                    { item: 'Тренажерный зал, мультикорт, дискотека, турецкая баня / сауна / парная' },
                    { item: '6 a la cart ресторанов' }
                ],
                buttonUA : 'Выбрать тур',
            },
        ],
        
        //HOTELS 2 КИПР
        country2Hotels : [
            //HOTEL 1
            {
                hotelName : 'FUN&SUN Panthea Waterpark 4*',
                background: 'background: url(https://www.tui.ru/getmedia/9df19944-804d-4c56-9667-c545a0b902e0/%d1%84%d0%be%d1%82%d0%be-13);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/TUI-FUN-SUN-Panthea-Waterpark/',
                hotelLinkClient: '/hotel/europe-cyprus-ayia__napa-ayia__napa-fun__sun__panthea__waterpark/',
                
                //RU
                countryNameRU: 'Кипр, Айя-Напа',
                aboutHotelRUItems: [
                    { item: 'Собственный аквапарк' },
                    { item: 'Территория с большим бассейном' },
                    { item: 'Рядом песчаный пляж Лиманаки' },
                    { item: 'Бесплатное мороженое с 10 утра до 10 вечера' },
                    { item: 'Расположен рядом с луна-парком' },
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Кипр, Айя-Напа',
                aboutHotelBYItems: [
                    { item: 'Собственный аквапарк' },
                    { item: 'Территория с большим бассейном' },
                    { item: 'Рядом песчаный пляж Лиманаки' },
                    { item: 'Бесплатное мороженое с 10 утра до 10 вечера' },
                    { item: 'Расположен рядом с луна-парком' },
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Кипр, Айя-Напа',
                aboutHotelUAItems: [
                    { item: 'Собственный аквапарк' },
                    { item: 'Территория с большим бассейном' },
                    { item: 'Рядом песчаный пляж Лиманаки' },
                    { item: 'Бесплатное мороженое с 10 утра до 10 вечера' },
                    { item: 'Расположен рядом с луна-парком' },
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
            //HOTEL 2
            {
                hotelName : 'FUN&SUN Vangelis Hotel & Suite',
                background: 'background: url(https://www.tui.ru/getmedia/b4929e8f-5478-472e-860d-66c05edd9ed8/f_Pool-2_f_1);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Cyprus/Protaras/Protaras-city/vangelis-hotel-suites',
                hotelLinkClient: '/hotel/europe-cyprus-protaras-protaras__city-fun__sun__vangelis__hotel__suites/',
                
                //RU
                countryNameRU: 'Кипр, Протарас',
                aboutHotelRUItems: [
                    { item: 'Расположен в самом центре курорта Протарас' },
                    { item: 'Отель предлагает питание по системе All Inclusive и HB+' },
                    { item: 'Отель находится рядом с лучшими пляжами: Fig Tree Bay (в 150 метрах), Konnos Bay, Kalamies, Sunrise' },
                    { item: 'Номера с размещением 2 взр.+3 реб./3 взр.+2 реб./4 взр.+1 реб' },
                    { item: 'Реновация во всех номерах' },
                    
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Кипр, Протарас',
                aboutHotelBYItems: [
                    { item: 'Расположен в самом центре курорта Протарас' },
                    { item: 'Отель предлагает питание по системе All Inclusive и HB+' },
                    { item: 'Отель находится рядом с лучшими пляжами: Fig Tree Bay (в 150 метрах), Konnos Bay, Kalamies, Sunrise' },
                    { item: 'Номера с размещением 2 взр.+3 реб./3 взр.+2 реб./4 взр.+1 реб' },
                    { item: 'Реновация во всех номерах' },
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Кипр, Протарас',
                aboutHotelUAItems: [
                    { item: 'Расположен в самом центре курорта Протарас' },
                    { item: 'Отель предлагает питание по системе All Inclusive и HB+' },
                    { item: 'Отель находится рядом с лучшими пляжами: Fig Tree Bay (в 150 метрах), Konnos Bay, Kalamies, Sunrise' },
                    { item: 'Номера с размещением 2 взр.+3 реб./3 взр.+2 реб./4 взр.+1 реб' },
                    { item: 'Реновация во всех номерах' },
                    
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
            //HOTEL 3
            {
                hotelName : 'FUN&SUN King Evelthon Beach 5*',
                background: 'background: url(https://www.tui.ru/getmedia/bd2f0658-959f-447d-9c96-e20db587bbb7/f_KING13B-Pool-Area_f_1);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Cyprus/Paphos/Paphos/fun-sun-king-evelthon-beach-hotel-resort',
                hotelLinkClient: '/hotel/europe-cyprus-paphos-paphos-fun__sun__king__evelthon__beach__hotel__resort/',
                
                //RU
                countryNameRU: 'Кипр, Пафос',
                aboutHotelRUItems: [
                    { item: 'Большой аквапарк для взрослых и детей' },
                    { item: 'Отель расположен на большой ландшафтной территории в 100000 кв. м.' },
                    { item: 'Большая территория, уютные номера' },
                    { item: 'Качественный сервис, разнообразное питание, развитая инфраструктура для активного отдыха' },
                    { item: 'Бесплатный Wi-Fi, All Inclusive, 3 a la carte ресторана' },
                    { item: 'Первая береговая линия: перед отелем муниципальный пляж' },
                    { item: 'Для детей: детский бассейн, детский клуб Тукан, детская площадка, ресторан(ы) с высокими стульчиками для детей, детское меню' },
                    
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Кипр, Пафос',
                aboutHotelBYItems: [
                    { item: 'Большой аквапарк для взрослых и детей' },
                    { item: 'Отель расположен на большой ландшафтной территории в 100000 кв. м.' },
                    { item: 'Большая территория, уютные номера' },
                    { item: 'Качественный сервис, разнообразное питание, развитая инфраструктура для активного отдыха' },
                    { item: 'Бесплатный Wi-Fi, All Inclusive, 3 a la carte ресторана' },
                    { item: 'Первая береговая линия: перед отелем муниципальный пляж' },
                    { item: 'Для детей: детский бассейн, детский клуб Тукан, детская площадка, ресторан(ы) с высокими стульчиками для детей, детское меню' },
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Кипр, Пафос',
                aboutHotelUAItems: [
                    { item: 'Большой аквапарк для взрослых и детей' },
                    { item: 'Отель расположен на большой ландшафтной территории в 100000 кв. м.' },
                    { item: 'Большая территория, уютные номера' },
                    { item: 'Качественный сервис, разнообразное питание, развитая инфраструктура для активного отдыха' },
                    { item: 'Бесплатный Wi-Fi, All Inclusive, 3 a la carte ресторана' },
                    { item: 'Первая береговая линия: перед отелем муниципальный пляж' },
                    { item: 'Для детей: детский бассейн, детский клуб Тукан, детская площадка, ресторан(ы) с высокими стульчиками для детей, детское меню' },
                    
                ],
                buttonUA : 'Выбрать тур',
            },
            
            //HOTEL 4
            {
                hotelName : 'FUN&SUN Anastasia Beach Hotel 4*',
                background: 'background: url(https://www.tui.ru/getmedia/b433218a-6a8a-46b1-b1fb-6fc594436d20/f_ART_4563_f_1);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Cyprus/Protaras/Protaras-city/fun-sun-anastasia-beach-hotel',
                hotelLinkClient: '/hotel/europe-cyprus-protaras-protaras__city-fun__sun__anastasia__beach__hotel/',
                
                //RU
                countryNameRU: 'Кипр, Протарас',
                aboutHotelRUItems: [
                    { item: 'Отель находится всего в двух шагах от золотых песков залива Марлита' },
                    { item: 'Аквапарк (7 горок, река с медленным течением, джакузи, открытый бассейн и детская зона; работает с мая по октябрь)' },
                    { item: 'Открытый бассейн с пресной водой (2,30 м)' },
                    { item: 'SPA-и оздоровительный крытый бассейн, тренажерный зал, теннисный корт, настольный теннис' },
                    { item: 'Для детей - детский бассейн, крытый детский бассейн, в рамках концепции FUN&SUN: детский клуб Тукан' },
                    { item: 'Premium All Inclusive. 3 ресторанов a la carte в отеле + гости отеля бесплатно могут посетить один из 4 ресторанов a la carte в городе' },
                    { item: 'Муниципальный песчаный около отеля' },
                    
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Кипр, Протарас',
                aboutHotelBYItems: [
                    { item: 'Отель находится всего в двух шагах от золотых песков залива Марлита' },
                    { item: 'Аквапарк (7 горок, река с медленным течением, джакузи, открытый бассейн и детская зона; работает с мая по октябрь)' },
                    { item: 'Открытый бассейн с пресной водой (2,30 м)' },
                    { item: 'SPA-и оздоровительный крытый бассейн, тренажерный зал, теннисный корт, настольный теннис' },
                    { item: 'Для детей - детский бассейн, крытый детский бассейн, в рамках концепции FUN&SUN: детский клуб Тукан' },
                    { item: 'Premium All Inclusive. 3 ресторанов a la carte в отеле + гости отеля бесплатно могут посетить один из 4 ресторанов a la carte в городе' },
                    { item: 'Муниципальный песчаный около отеля' },
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Кипр, Протарас',
                aboutHotelUAItems: [
                    { item: 'Отель находится всего в двух шагах от золотых песков залива Марлита' },
                    { item: 'Аквапарк (7 горок, река с медленным течением, джакузи, открытый бассейн и детская зона; работает с мая по октябрь)' },
                    { item: 'Открытый бассейн с пресной водой (2,30 м)' },
                    { item: 'SPA-и оздоровительный крытый бассейн, тренажерный зал, теннисный корт, настольный теннис' },
                    { item: 'Для детей - детский бассейн, крытый детский бассейн, в рамках концепции FUN&SUN: детский клуб Тукан' },
                    { item: 'Premium All Inclusive. 3 ресторанов a la carte в отеле + гости отеля бесплатно могут посетить один из 4 ресторанов a la carte в городе' },
                    { item: 'Муниципальный песчаный около отеля' },
                    
                ],
                buttonUA : 'Выбрать тур',
            },
            
        ],
        
    }
})
