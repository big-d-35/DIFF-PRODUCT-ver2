/*
Привет.
Ниже файл с информацией для ВСЕХ страниц TOUCAN для клиентского и агентского сайте (RU BY UA )

Для того чтобы изменить информацию достаточно заменить ее в этом файле и обновить файл который лежит на сайте tui.ru \ media \ новый сайт \ концепции \ TUI Toucan \ JS \ VUE-Toucan-hot-hotels-ru-by-ua.js - ВНИМАНИЕ! именно нажать на кнопку заменить, иначе придется менять ссылку на всех страницах.

Обрати внимение на название переменных в файле html, если в конце есть указание к стране (например имя оканчивается myNameRU - значит это перевод на русский, myNameEE - значит это перевод на эстонский и тп)

Также обрати внимание на название ссылок - если оканчивается на Client - значит ссылка на клиент, если Agent - значит ссылка на агенте.

Некоторые страницы в консоли могут ругаться на отсутствие некоторых элементов, это нормально, просто у нас один файл на все страницы и соответственно на некоторых страницах нет элементов с других страниц, поэтому не обращай внимание.

*/

const toucanHotHotels = new Vue ({
    el: '#hotels-toucan',
    data: {
        titleRU: 'ОТЕЛИ С ДЕТСКИМИ КЛУБАМИ МИНИ ТУКАН',
        titleBY: 'ОТЕЛИ С ДЕТСКИМИ КЛУБАМИ МИНИ ТУКАН',
        titleUA: 'ОТЕЛИ С ДЕТСКИМИ КЛУБАМИ МИНИ ТУКАН',
        
        //RU 
        country1RU: 'Турция',
        country2RU: 'Кипр',
        country3RU: 'Черногория',
        country4RU: 'Италия',
        country5RU: 'Испания',
        country6RU: 'Россия',
        country7RU: 'ОАЭ',
        
        //BY 
        country1BY: 'Турция',
        country2BY: 'Кипр',
        country3BY: 'Черногория',
        country4BY: 'Италия',
        country5BY: 'Испания',
        country6BY: 'Россия',
        country7BY: 'ОАЭ',
        
        //UA 
        country1UA: 'Турция',
        country2UA: 'Кипр',
        country3UA: 'Черногория',
        country4UA: 'Италия',
        country5UA: 'Испания',
        country6UA: 'Россия',
        country7UA: 'ОАЭ',
        
        //HOTELS 1 ТУРЦИЯ
        country1Hotels : [
            //HOTEL
            {
                hotelName : 'Pegasos Club 4*',
                background: 'background: url(https://www.tui.ru/getmedia/960b240d-2407-4940-8d3e-247396f9eb4a/T12_hotel_Pegasos-Club);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Club',
                hotelLinkClient: '/hotel/europe-turkey-alanya-incekum-pegasos__club/',
                
                //RU
                countryNameRU: 'Турция, Инджекум',
                aboutHotelRUItems: [
                    { item: 'Песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые бассейны' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Отличная инфраструктура для детей' },
                    { item: 'Бесплатный Wi-Fi (на территории)' },
                    { item: 'Водные батуты, боулинг, аквапарк,  теннисные корты, амфитеатр, несколько бассейнов' },
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Турция, Инджекум',
                aboutHotelBYItems: [
                    { item: 'Песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые бассейны' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Отличная инфраструктура для детей' },
                    { item: 'Бесплатный Wi-Fi (на территории)' },
                    { item: 'Водные батуты, боулинг, аквапарк,  теннисные корты, амфитеатр, несколько бассейнов' },
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Турция, Инджекум',
                aboutHotelUAItems: [
                    { item: 'Песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые бассейны' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Отличная инфраструктура для детей' },
                    { item: 'Бесплатный Wi-Fi (на территории)' },
                    { item: 'Водные батуты, боулинг, аквапарк,  теннисные корты, амфитеатр, несколько бассейнов' },
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'Pegasos Resort 5*',
                background: 'background: url(https://www.tui.ru/getmedia/78cdee2e-c69d-435e-ade3-94320e66a3f3/T13_Hotel_PegasosResort);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Resort',
                hotelLinkClient: '/hotel/europe-turkey-alanya-incekum-pegasos__resort/',
                
                //RU
                countryNameRU: 'Турция, Инджекум',
                aboutHotelRUItems: [
                    { item: 'Фешенебельный отельный комплекс' },
                    { item: 'Собственный песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые и крытые бассейны' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Free Wi-Fi (на территории)' }
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Турция, Инджекум',
                aboutHotelBYItems: [
                    { item: 'Фешенебельный отельный комплекс' },
                    { item: 'Собственный песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые и крытые бассейны' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Free Wi-Fi (на территории)' }
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Турция, Инджекум',
                aboutHotelUAItems: [
                    { item: 'Фешенебельный отельный комплекс' },
                    { item: 'Собственный песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые и крытые бассейны' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Free Wi-Fi (на территории)' }
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'Pegasos Royal 5*',
                background: 'background: url(https://www.tui.ru/getmedia/9a66b6c3-5dfc-4913-99ae-2d5fa8c4f70f/T14_Hotel_Pegasos-Royal);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Royal',
                hotelLinkClient: '/hotel/europe-turkey-alanya-incekum-pegasos__royal/',
                
                //RU
                countryNameRU: 'Турция, Инджекум',
                aboutHotelRUItems: [
                    { item: 'Высокий уровень обслуживания' },
                    { item: 'Двухкомнатные номера' },
                    { item: 'Песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые и крытые бассейны' },
                    { item: 'Аквапарк' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Free Wi-Fi (на территории)' }
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Турция, Инджекум',
                aboutHotelBYItems: [
                    { item: 'Высокий уровень обслуживания' },
                    { item: 'Двухкомнатные номера' },
                    { item: 'Песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые и крытые бассейны' },
                    { item: 'Аквапарк' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Free Wi-Fi (на территории)' }
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Турция, Инджекум',
                aboutHotelUAItems: [
                    { item: 'Высокий уровень обслуживания' },
                    { item: 'Двухкомнатные номера' },
                    { item: 'Песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые и крытые бассейны' },
                    { item: 'Аквапарк' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Free Wi-Fi (на территории)' }
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'Kilikya Resort Camyuva 5*',
                background: 'background: url(https://www.tui.ru/getmedia/2e390b7d-5b2a-4434-9933-5c3749992bed/f_Kilikya-Resort-min);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Camyuva/Kilikya-Resort-Camyuva',
                hotelLinkClient: '/hotel/europe-turkey-kemer-camyuva-kilikya__resort__camyuva/',
                
                //RU
                countryNameRU: 'Турция, Кемер',
                aboutHotelRUItems: [
                    { item: 'Низкая ценовая категория' },
                    { item: 'Пляж, отмеченный Голубым флагом' },
                    { item: 'Прокат велосипедов (платно)' },
                    { item: 'Бесплатный Wi-Fi в библиотеке' },
                    { item: 'Круглосуточный бар' },
                    { item: 'Тренажерный зал и спортивные площадки' },
                    { item: 'Детский бассейн и водные горки' }
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Турция, Кемер',
                aboutHotelBYItems: [
                    { item: 'Низкая ценовая категория' },
                    { item: 'Пляж, отмеченный Голубым флагом' },
                    { item: 'Прокат велосипедов (платно)' },
                    { item: 'Бесплатный Wi-Fi в библиотеке' },
                    { item: 'Круглосуточный бар' },
                    { item: 'Тренажерный зал и спортивные площадки' },
                    { item: 'Детский бассейн и водные горки' }
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Турция, Кемер',
                aboutHotelUAItems: [
                    { item: 'Низкая ценовая категория' },
                    { item: 'Пляж, отмеченный Голубым флагом' },
                    { item: 'Прокат велосипедов (платно)' },
                    { item: 'Бесплатный Wi-Fi в библиотеке' },
                    { item: 'Круглосуточный бар' },
                    { item: 'Тренажерный зал и спортивные площадки' },
                    { item: 'Детский бассейн и водные горки' }
                    
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
        ],
        
        //HOTELS 2 АНДОРРА
        country2Hotels : [
            //HOTEL
            {
                hotelName : 'Andorra Center 4*',
                background: 'background: url(https://www.tui.ru/getmedia/cd352184-64b1-4c27-aa64-af2f947fd8b8/T17_Hotel_Andorra-Center);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Andorra/grandvalira/Andorra-La-Vella/Andorra-Center',
                hotelLinkClient: '',
                
                //RU
                countryNameRU: 'Андорра, Грандвалира',
                aboutHotelRUItems: [
                    { item: 'Центр города Андорра-Ла-Велья' },
                    { item: 'Расположен в живописном месте' },
                    { item: 'SPA (бесплатно)' },
                    { item: 'Крытый бассейн' },
                    { item: 'Free WI-FI (в номерах)' },
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Андорра, Грандвалира',
                aboutHotelBYItems: [
                    { item: 'Центр города Андорра-Ла-Велья' },
                    { item: 'Расположен в живописном месте' },
                    { item: 'SPA (бесплатно)' },
                    { item: 'Крытый бассейн' },
                    { item: 'Free WI-FI (в номерах)' },
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Андорра, Грандвалира',
                aboutHotelUAItems: [
                    { item: 'Центр города Андорра-Ла-Велья' },
                    { item: 'Расположен в живописном месте' },
                    { item: 'SPA (бесплатно)' },
                    { item: 'Крытый бассейн' },
                    { item: 'Free WI-FI (в номерах)' },
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'La Mola 2*',
                background: 'background: url(https://www.tui.ru/getmedia/200bf094-a279-43ce-9638-2dc53ca0fafd/T18_Hotel_La-Mola);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Andorra/grandvalira/Escaldes/Mola-Park-Atiram',
                hotelLinkClient: '',
                
                //RU
                countryNameRU: 'Андорра, Грандвалира',
                aboutHotelRUItems: [
                    { item: 'Недалеко от центра Энкампа' },
                    { item: 'Близость к подъемнику' },
                    { item: 'Free WI-FI (в лобби)' },
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Андорра, Грандвалира',
                aboutHotelBYItems: [
                    { item: 'Недалеко от центра Энкампа' },
                    { item: 'Близость к подъемнику' },
                    { item: 'Free WI-FI (в лобби)' },
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Андорра, Грандвалира',
                aboutHotelUAItems: [
                    { item: 'Недалеко от центра Энкампа' },
                    { item: 'Близость к подъемнику' },
                    { item: 'Free WI-FI (в лобби)' },
                    
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'Cosmos Andorra 3*',
                background: 'background: url(https://www.tui.ru/getmedia/1cd99d92-6811-42e2-977b-f3902aff35f0/T19_Hotel_Cosmos-Andorra);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Andorra/grandvalira/Andorra-La-Vella/Cosmos-Andorra',
                hotelLinkClient: '',
                
                //RU
                countryNameRU: 'Андорра, Грандвалира',
                aboutHotelRUItems: [
                    { item: 'Расположен в центре Эскальдес' },
                    { item: 'В 400 м от термального комплекса Кальдеа' },
                    { item: 'Стандартные номера и апартаменты' },
                    { item: 'Free WI-FI (в номерах)' },
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Андорра, Грандвалира',
                aboutHotelBYItems: [
                    { item: 'Расположен в центре Эскальдес' },
                    { item: 'В 400 м от термального комплекса Кальдеа' },
                    { item: 'Стандартные номера и апартаменты' },
                    { item: 'Free WI-FI (в номерах)' },
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Андорра, Грандвалира',
                aboutHotelUAItems: [
                    { item: 'Расположен в центре Эскальдес' },
                    { item: 'В 400 м от термального комплекса Кальдеа' },
                    { item: 'Стандартные номера и апартаменты' },
                    { item: 'Free WI-FI (в номерах)' },
                    
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
        ],
        
        //HOTELS 3 КИПР
        country3Hotels : [
            //HOTEL
            {
                hotelName : 'Christofinia 4*',
                background: 'background: url(https://www.tui.ru/getmedia/2f97eb45-b78e-4f46-9312-3f6d6216d10c/T20_Hotel_Christofinia);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/Christofinia/',
                hotelLinkClient: '/hotel/europe-cyprus-ayia__napa-ayia__napa-christofinia/',
                
                //RU
                countryNameRU: 'Кипр, Айя-Напа',
                aboutHotelRUItems: [
                    { item: 'Отель со стильным интерьером и просторной территорией' },
                    { item: 'Рядом с лучшим пляжем Айя-Напы Nissi Beach' },
                    { item: 'Аквапарк WaterWorld (недалеко от отеля)' },
                    { item: 'Муниципальный песчаный пляж - через дорогу' },
                    { item: 'Сауна, SPA (платно) и тренажерный зал' },
                    { item: 'Бесплатный WI-FI (в лобби)' },
                    { item: 'Большой основной бассейн со swim-up баром ' },
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Кипр, Айя-Напа',
                aboutHotelBYItems: [
                    { item: 'Отель со стильным интерьером и просторной территорией' },
                    { item: 'Рядом с лучшим пляжем Айя-Напы Nissi Beach' },
                    { item: 'Аквапарк WaterWorld (недалеко от отеля)' },
                    { item: 'Муниципальный песчаный пляж - через дорогу' },
                    { item: 'Сауна, SPA (платно) и тренажерный зал' },
                    { item: 'Бесплатный WI-FI (в лобби)' },
                    { item: 'Большой основной бассейн со swim-up баром ' },
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Кипр, Айя-Напа',
                aboutHotelUAItems: [
                    { item: 'Отель со стильным интерьером и просторной территорией' },
                    { item: 'Рядом с лучшим пляжем Айя-Напы Nissi Beach' },
                    { item: 'Аквапарк WaterWorld (недалеко от отеля)' },
                    { item: 'Муниципальный песчаный пляж - через дорогу' },
                    { item: 'Сауна, SPA (платно) и тренажерный зал' },
                    { item: 'Бесплатный WI-FI (в лобби)' },
                    { item: 'Большой основной бассейн со swim-up баром ' },
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'St. Raphael Resort 5*',
                background: 'background: url(https://www.tui.ru/getmedia/42d77e04-8b00-4095-890d-7df28ff5b30b/f_St-Raphael-Resort-Aerial-View-007_f_1);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Cyprus/Limasol-Resort/Limasol-City/St-Raphael-Resort',
                hotelLinkClient: '/hotel/europe-cyprus-limasol__resort-limasol__city-st__raphael__resort/',
                
                //RU
                countryNameRU: 'Кипр, Лимасол',
                aboutHotelRUItems: [
                    { item: 'Номера для размещения 2 взр. + 3 реб. (Standard Inland View Rooms, 35 кв.м.)' },
                    { item: 'Залы для проведения выставок/конференций, площадью 500 кв. м' },
                    { item: 'Собственный песчаный пляж: шезлонги и зонтики - бесплатно' },
                    { item: 'На пляже ресторан по системе Grab & Go' },
                    { item: 'Есть система питания Ultra All Inclusive' },
                    { item: 'Ознакомительный урок дайвинга в бассейне (для Ultra All Inclusive)' },
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Кипр, Лимасол',
                aboutHotelBYItems: [
                    { item: 'Номера для размещения 2 взр. + 3 реб. (Standard Inland View Rooms, 35 кв.м.)' },
                    { item: 'Залы для проведения выставок/конференций, площадью 500 кв. м' },
                    { item: 'Собственный песчаный пляж: шезлонги и зонтики - бесплатно' },
                    { item: 'На пляже ресторан по системе Grab & Go' },
                    { item: 'Есть система питания Ultra All Inclusive' },
                    { item: 'Ознакомительный урок дайвинга в бассейне (для Ultra All Inclusive)' },
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Кипр, Лимасол',
                aboutHotelUAItems: [
                    { item: 'Номера для размещения 2 взр. + 3 реб. (Standard Inland View Rooms, 35 кв.м.)' },
                    { item: 'Залы для проведения выставок/конференций, площадью 500 кв. м' },
                    { item: 'Собственный песчаный пляж: шезлонги и зонтики - бесплатно' },
                    { item: 'На пляже ресторан по системе Grab & Go' },
                    { item: 'Есть система питания Ultra All Inclusive' },
                    { item: 'Ознакомительный урок дайвинга в бассейне (для Ultra All Inclusive)' },
                    
                ],
                buttonUA : 'Выбрать тур',
            },
            
            //HOTEL
            {
                hotelName : 'Tasia Maris Garden 3*',
                background: 'background: url(https://www.tui.ru/getmedia/1673daeb-3112-43fa-a2e7-04a41da112c4/f_PreviewImage_f_7);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/tasia-maris-gardens',
                hotelLinkClient: '/hotel/europe-cyprus-ayia__napa-ayia__napa-tasia__maris__gardens/',
                
                //RU
                countryNameRU: 'Кипр, Айя-Напа',
                aboutHotelRUItems: [
                    { item: 'В центре Айя-Напы' },
                    { item: 'Просторные номера построены по принципу апартаментов' },
                    { item: 'В номерах - балкон / терраса и полностью оборудованные кухни' },
                    { item: 'Красивая территория с просторным бассейном и 2-этажными бунгало' },
                    { item: 'Муниципальный песчаный пляж в 50 м' },
                    { item: 'Пляж Нисси 500 метрах' },
                    { item: 'Джакузи, солнечная терраса (с бесплатными шезлонгами и зонтиками)' },
                    
                    
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Кипр, Айя-Напа',
                aboutHotelBYItems: [
                    { item: 'В центре Айя-Напы' },
                    { item: 'Просторные номера построены по принципу апартаментов' },
                    { item: 'В номерах - балкон / терраса и полностью оборудованные кухни' },
                    { item: 'Красивая территория с просторным бассейном и 2-этажными бунгало' },
                    { item: 'Муниципальный песчаный пляж в 50 м' },
                    { item: 'Пляж Нисси 500 метрах' },
                    { item: 'Джакузи, солнечная терраса (с бесплатными шезлонгами и зонтиками)' },
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Кипр, Айя-Напа',
                aboutHotelUAItems: [
                    { item: 'В центре Айя-Напы' },
                    { item: 'Просторные номера построены по принципу апартаментов' },
                    { item: 'В номерах - балкон / терраса и полностью оборудованные кухни' },
                    { item: 'Красивая территория с просторным бассейном и 2-этажными бунгало' },
                    { item: 'Муниципальный песчаный пляж в 50 м' },
                    { item: 'Пляж Нисси 500 метрах' },
                    { item: 'Джакузи, солнечная терраса (с бесплатными шезлонгами и зонтиками)' },
                ],
                buttonUA : 'Выбрать тур',
            },
            
        ],
        
        //HOTELS 4 ЧЕРНОГОРИЯ
        country4Hotels : [
            //HOTEL
            {
                hotelName : 'Aleksandar 4*',
                background: 'background: url(https://www.tui.ru/getmedia/13c783b4-c8a7-4673-b3fa-8df70e917c4e/f_Main-Bulding_f_1-min);background-position: center;background-size: cover',
                hotelLinkAgent: '/tours/europe/montenegro/budvanska-rivijera/budva/aleksandar/',
                hotelLinkClient: '/hotel/europe-montenegro-budvanska__rivijera-budva-aleksandar/',
                
                //RU
                countryNameRU: 'Черногория, Будва',
                aboutHotelRUItems: [
                    { item: 'Общественный песчано-галечный пляж протяженностью 1600 м, через дорогу' },
                    { item: 'Живая музыка' },
                    { item: 'Питание от BB до All Inclusive' },
                    { item: '1 раз в неделю: вечер дегустации местного вина, уголок здоровья с фруктовыми соками, фольклорный вечер (для All Inclusive)' },
                    { item: '2 раза в неделю: коктейль-парти ' },
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Черногория, Будва',
                aboutHotelBYItems: [
                   { item: 'Общественный песчано-галечный пляж протяженностью 1600 м, через дорогу' },
                    { item: 'Живая музыка' },
                    { item: 'Питание от BB до All Inclusive' },
                    { item: '1 раз в неделю: вечер дегустации местного вина, уголок здоровья с фруктовыми соками, фольклорный вечер (для All Inclusive)' },
                    { item: '2 раза в неделю: коктейль-парти ' },
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Черногория, Будва',
                aboutHotelUAItems: [
                    { item: 'Общественный песчано-галечный пляж протяженностью 1600 м, через дорогу' },
                    { item: 'Живая музыка' },
                    { item: 'Питание от BB до All Inclusive' },
                    { item: '1 раз в неделю: вечер дегустации местного вина, уголок здоровья с фруктовыми соками, фольклорный вечер (для All Inclusive)' },
                    { item: '2 раза в неделю: коктейль-парти ' },
                    
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'Castellastva 4*',
                background: 'background: url(https://www.tui.ru/getmedia/3e5ec649-f74f-417b-a68d-e63f1705f0b3/kastellastva-min);background-position: center;background-size: cover',
                hotelLinkAgent: '/tours/europe/montenegro/budvanska-rivijera/petrovac/castellastva/',
                hotelLinkClient: '/hotel/europe-montenegro-budvanska__rivijera-petrovac-castellastva/',
                
                //RU
                countryNameRU: 'Черногория, Петровац',
                aboutHotelRUItems: [
                    { item: 'Общественный песчано-галечный пляж, протяженностью 600 м, через дорогу' },
                    { item: 'Недорогой отель для тех, кто любит смотреть достопримечательности' },
                    { item: 'Питание: BB, HB, FB' },
                    { item: 'Бассейн с соленой водой, фитнес и СПА' },
                    
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Черногория, Петровац',
                aboutHotelBYItems: [
                    { item: 'Общественный песчано-галечный пляж, протяженностью 600 м, через дорогу' },
                    { item: 'Недорогой отель для тех, кто любит смотреть достопримечательности' },
                    { item: 'Питание: BB, HB, FB' },
                    { item: 'Бассейн с соленой водой, фитнес и СПА' },
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Черногория, Петровац',
                aboutHotelUAItems: [
                    { item: 'Общественный песчано-галечный пляж, протяженностью 600 м, через дорогу' },
                    { item: 'Недорогой отель для тех, кто любит смотреть достопримечательности' },
                    { item: 'Питание: BB, HB, FB' },
                    { item: 'Бассейн с соленой водой, фитнес и СПА' },
                    
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
        ],
        
        //HOTELS 5 ИТАЛИЯ
        country5Hotels : [
            //HOTEL
            {
                hotelName : 'Falkensteiner Club Funimation Calabria (ex. Garden Resort Calabria) 4*',
                background: 'background: url(https://www.tui.ru/getmedia/2bc0a092-4458-4eb9-9f9d-e6b27024967a/italy-hotels-min);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Italy/Calabria/Pizzo/Valtur-Garden-Calabria',
                hotelLinkClient: '/hotel/europe-italy-calabria-pizzo-garden__resort__calabria/',
                
                //RU
                countryNameRU: 'Калабрия, Пиццо',
                aboutHotelRUItems: [
                    { item: 'Расположен посреди парка' },
                    { item: 'Питание All Inclusive' },
                    { item: 'Широкий песчаный пляж' },
                    { item: 'Бесплатный WI-FI в лобби' },
                    { item: '2 открытых бассейна' },
                    { item: 'Огромная зелёная территория' },
                    { item: 'Взрослая и детская анимация' },
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Калабрия, Пиццо',
                aboutHotelBYItems: [
                    { item: 'Расположен посреди парка' },
                    { item: 'Питание All Inclusive' },
                    { item: 'Широкий песчаный пляж' },
                    { item: 'Бесплатный WI-FI в лобби' },
                    { item: '2 открытых бассейна' },
                    { item: 'Огромная зелёная территория' },
                    { item: 'Взрослая и детская анимация' },
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Калабрия, Пиццо',
                aboutHotelUAItems: [
                    { item: 'Расположен посреди парка' },
                    { item: 'Питание All Inclusive' },
                    { item: 'Широкий песчаный пляж' },
                    { item: 'Бесплатный WI-FI в лобби' },
                    { item: '2 открытых бассейна' },
                    { item: 'Огромная зелёная территория' },
                    { item: 'Взрослая и детская анимация' },
                    
                ],
                buttonUA : 'Выбрать тур',
            },
            
        ],
        
        //HOTELS 6 ИСПАНИЯ
        country6Hotels : [
            //HOTEL
            {
                hotelName : 'Estival Park Hotel Resort 4*',
                background: 'background: url(https://www.tui.ru/getmedia/25de3cd0-dd39-452b-83bf-6b68fd9cedc7/estival-park-min);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Spain/Costa-Dorada/La-Pineda/Estival-Park-Hotel-Resort',
                hotelLinkClient: '/hotel/europe-spain-costa__dorada-la__pineda-estival__park__hotel__resort/',
                
                //RU
                countryNameRU: 'Испания, Салоу',
                aboutHotelRUItems: [
                    { item: 'Большая территория, собственные "оазисы" с бассейнами' },
                    { item: 'Питание на 5+, много фруктов и морепродуктов' },
                    
                    { item: 'Рядом аквапарк Aquopolis с дельфинарием' },
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Испания, Салоу',
                aboutHotelBYItems: [
                    { item: 'Большая территория, собственные "оазисы" с бассейнами' },
                    { item: 'Питание на 5+, много фруктов и морепродуктов' },
                    
                    { item: 'Рядом аквапарк Aquopolis с дельфинарием' },
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Испания, Салоу',
                aboutHotelUAItems: [
                    { item: 'Большая территория, собственные "оазисы" с бассейнами' },
                    { item: 'Питание на 5+, много фруктов и морепродуктов' },
                   
                    { item: 'Рядом аквапарк Aquopolis с дельфинарием' },
                    
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
            //HOTEL
           /* {
                hotelName : 'Don Juan Tossa 4*',
                background: 'background: url(https://www.tui.ru/getmedia/d163d8fb-7186-4929-96d2-27b24b9a144e/hontana-hossa-min);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Spain/Costa-Brava/Tossa-De-Mar/Hotansa-Tossa',
                hotelLinkClient: '/hotel/europe-spain-costa__brava-tossa__de__mar-don__juan__tossa/',
                
                //RU
                countryNameRU: 'Испания, Тосса де мар',
                aboutHotelRUItems: [
                    { item: 'Рядом живописная бухта' },
                    { item: 'Бассейн на террасе с видом на крепость' },
                    { item: 'Теннисный корт' },
                    { item: 'Лучшее соотношение цены и качества' },
                    
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Испания, Тосса де мар',
                aboutHotelBYItems: [
                    { item: 'Рядом живописная бухта' },
                    { item: 'Бассейн на террасе с видом на крепость' },
                    { item: 'Теннисный корт' },
                    { item: 'Лучшее соотношение цены и качества' },
                    
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Испания, Тосса де мар',
                aboutHotelUAItems: [
                    { item: 'Рядом живописная бухта' },
                    { item: 'Бассейн на террасе с видом на крепость' },
                    { item: 'Теннисный корт' },
                    { item: 'Лучшее соотношение цены и качества' },
                    
                    
                ],
                buttonUA : 'Выбрать тур',
            },*/
            
            
        ],
        
        //HOTELS 7 РОССИЯ
        country7Hotels : [
            //HOTEL
            {
                hotelName : 'Бархатные сезоны 3*',
                background: 'background: url(https://www.tui.ru/getmedia/2b0182c1-1e96-45ab-bb2e-fca9b7166c64/barhatnie-sezoni-small);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Russia/Sochi/Imeretinskaya-Bukhta/barhatnye-sezony-gorod-otel-russquiy-dom',
                hotelLinkClient: '/hotel/europe-russia-sochi-imeretinskaya__bukhta-barhatnye__sezony__gorod__otel__russquiy__dom__(1)/',
                
                //RU
                countryNameRU: 'Россия, Сочи',
                aboutHotelRUItems: [
                    { item: 'Крупнейший гостиничный комплекс Сочи с огромной территорией' },
                    { item: 'Расположен рядом со всеми олимпийскими объектами' },
                    { item: '7 минут пешком до моря (от Русского квартала с Клубом Тукан)' },
                    { item: 'Есть удобные апартаменты для длительного проживания' },
                    { item: 'Разные типы питания' },
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'Россия, Сочи',
                aboutHotelBYItems: [
                    { item: 'Крупнейший гостиничный комплекс Сочи с огромной территорией' },
                    { item: 'Расположен рядом со всеми олимпийскими объектами' },
                    { item: '7 минут пешком до моря (от Русского квартала с Клубом Тукан)' },
                    { item: 'Есть удобные апартаменты для длительного проживания' },
                    { item: 'Разные типы питания' },
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'Россия, Сочи',
                aboutHotelUAItems: [
                    { item: 'Крупнейший гостиничный комплекс Сочи с огромной территорией' },
                    { item: 'Расположен рядом со всеми олимпийскими объектами' },
                    { item: '7 минут пешком до моря (от Русского квартала с Клубом Тукан)' },
                    { item: 'Есть удобные апартаменты для длительного проживания' },
                    { item: 'Разные типы питания' },
                    
                ],
                buttonUA : 'Выбрать тур',
            },
            
        ],
        
        //HOTELS 8 OAE
        country8Hotels : [
            //HOTEL
            {
                hotelName : 'Al Hamra Village Golf & Beach Resort 4*',
                background: 'background: url(https://www.tui.ru/getmedia/7d1ba713-d51b-4603-96d0-532147ae9b8a/T15_Hotel_Al-Hamra-Village-Golf-Beach-Resort-1);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-Beach-Hotels/al-hamra-village-golf-beach-resort',
                hotelLinkClient: '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__village__golf__beach__resort/',
                
                //RU
                countryNameRU: 'ОАЭ, Рас Аль Хайма',
                aboutHotelRUItems: [
                    { item: 'Просторные номера (мин.28 кв.м)' },
                    { item: 'Номера с выходом к бассейну' },
                    { item: 'Идеальный белопесчаный пляж' },
                    { item: 'Огромный бассейн (500 кв.м)' },
                    { item: 'SPA, тренажерный зал, сауна' },
                    { item: 'Живописные гольф-поля' },
                    { item: 'Вид на самый красивый салют в Рас Аль Хайме (на Новый год)' },
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'ОАЭ, Рас Аль Хайма',
                aboutHotelBYItems: [
                    { item: 'Просторные номера (мин.28 кв.м)' },
                    { item: 'Номера с выходом к бассейну' },
                    { item: 'Идеальный белопесчаный пляж' },
                    { item: 'Огромный бассейн (500 кв.м)' },
                    { item: 'SPA, тренажерный зал, сауна' },
                    { item: 'Живописные гольф-поля' },
                    { item: 'Вид на самый красивый салют в Рас Аль Хайме (на Новый год)' },
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'ОАЭ, Рас Аль Хайма',
                aboutHotelUAItems: [
                    { item: 'Просторные номера (мин.28 кв.м)' },
                    { item: 'Номера с выходом к бассейну' },
                    { item: 'Идеальный белопесчаный пляж' },
                    { item: 'Огромный бассейн (500 кв.м)' },
                    { item: 'SPA, тренажерный зал, сауна' },
                    { item: 'Живописные гольф-поля' },
                    { item: 'Вид на самый красивый салют в Рас Аль Хайме (на Новый год)' },
                    
                ],
                buttonUA : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'Al Hamra Residence 5*',
                background: 'background: url(https://www.tui.ru/getmedia/d01735ab-c45f-46a4-ba4d-d107366f623c/T16_hotel_Al-Hamra-Residence);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-residence',
                hotelLinkClient: '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__residence/',
                
                //RU
                countryNameRU: 'ОАЭ, Рас Аль Хайма',
                aboutHotelRUItems: [
                    { item: 'Просторные номера (мин. 83 кв.м)' },
                    { item: 'Полностью оборудованная кухня (в каждом номере)' },
                    { item: 'Идеальный белопесчаный пляж' },
                    { item: 'Огромный бассейн (500 кв.м)' },
                    { item: 'Вид на самый красивый салют в Рас Аль Хайме (на Новый год)' },
                    { item: 'Дети до 12 лет размещаются бесплатно' },
                    
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'ОАЭ, Рас Аль Хайма',
                aboutHotelBYItems: [
                    { item: 'Просторные номера (мин. 83 кв.м)' },
                    { item: 'Полностью оборудованная кухня (в каждом номере)' },
                    { item: 'Идеальный белопесчаный пляж' },
                    { item: 'Огромный бассейн (500 кв.м)' },
                    { item: 'Вид на самый красивый салют в Рас Аль Хайме (на Новый год)' },
                    { item: 'Дети до 12 лет размещаются бесплатно' },
                    
                    
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                //RU
                countryNameUA: 'ОАЭ, Рас Аль Хайма',
                aboutHotelUAItems: [
                    { item: 'Просторные номера (мин. 83 кв.м)' },
                    { item: 'Полностью оборудованная кухня (в каждом номере)' },
                    { item: 'Идеальный белопесчаный пляж' },
                    { item: 'Огромный бассейн (500 кв.м)' },
                    { item: 'Вид на самый красивый салют в Рас Аль Хайме (на Новый год)' },
                    { item: 'Дети до 12 лет размещаются бесплатно' },
                    
                    
                    
                ],
                buttonUA : 'Выбрать тур',
            },
            
            //HOTEL
            {
                hotelName : 'Blue Diamond Alsalam Resort 5*',
                background: 'background: url(https://www.tui.ru/getmedia/722dc212-70d8-46e0-87d7-cec17f7d3109/f_Hotel-Exterior_f_8);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Asia/UAE/Fujairah/Fujairah-beach-hotels/blue-diamond-alsalam-resort',
                hotelLinkClient: '/hotel/asia-uae-fujairah-fujairah__beach__hotels-blue__diamond__alsalam__resort/',
                
                //RU
                countryNameRU: 'ОАЭ, Фуджейра',
                aboutHotelRUItems: [
                    { item: 'Просторные номера с красивым интерьером' },
                    { item: 'Вид из номеров отеля – на пляж / на яхт-клуб или на город' },
                    { item: 'Стандартные типы номеров и оборудованные кухней 1-2 спальные апартаменты' },
                    { item: 'Окруженный волнорезами собственный песчаный пляж с плавным заходом в воду' },
                    { item: 'Детский бассейн глубиной 65 см ' },
                    { item: 'Большой бассейн перед зданием отеля' },
                    { item: 'Релакс–бассейн на крыше отеля' },
                    { item: 'Просторный тренажерный зал с современным оборудованием' },
                    
                    
                ],
                buttonRU : 'Выбрать тур',
                
                //BY
                countryNameBY: 'ОАЭ, Фуджейра',
                aboutHotelBYItems: [
                    { item: 'Просторные номера с красивым интерьером' },
                    { item: 'Вид из номеров отеля – на пляж / на яхт-клуб или на город' },
                    { item: 'Стандартные типы номеров и оборудованные кухней 1-2 спальные апартаменты' },
                    { item: 'Окруженный волнорезами собственный песчаный пляж с плавным заходом в воду' },
                    { item: 'Детский бассейн глубиной 65 см ' },
                    { item: 'Большой бассейн перед зданием отеля' },
                    { item: 'Релакс–бассейн на крыше отеля' },
                    { item: 'Просторный тренажерный зал с современным оборудованием' },
                    
                    
                ],
                buttonBY : 'Выбрать тур',
                
                //UA
                countryNameUA: 'ОАЭ, Фуджейра',
                aboutHotelUAItems: [
                    { item: 'Просторные номера с красивым интерьером' },
                    { item: 'Вид из номеров отеля – на пляж / на яхт-клуб или на город' },
                    { item: 'Стандартные типы номеров и оборудованные кухней 1-2 спальные апартаменты' },
                    { item: 'Окруженный волнорезами собственный песчаный пляж с плавным заходом в воду' },
                    { item: 'Детский бассейн глубиной 65 см ' },
                    { item: 'Большой бассейн перед зданием отеля' },
                    { item: 'Релакс–бассейн на крыше отеля' },
                    { item: 'Просторный тренажерный зал с современным оборудованием' },
                    
                    
                ],
                buttonUA : 'Выбрать тур',
            },
            
        ],
    }
})