//ТУКАН СПОРТИВНЫЕ РАЗВЛЕЧЕНИЯ
const toucanEntProgramm = new Vue ({
    el: '#toucan-ent-programm',
    data: {
        titleRU : 'Расписание спортивных занятий и развлечений',
        titleBY : 'Расписание спортивных занятий и развлечений',
        titleUA : 'Расписание спортивных занятий и развлечений',
        titleEE : '',
        titleLT : '',
        titleLV : '',
        
        
        //MENU ITEM 1
        menu1RU : 'Все',
        menu1BY : 'Все',
        menu1UA : 'Все',
        menu1EE : '',
        menu1LT : '',
        menu1LV : '',
        
        //MENU ITEM 2
        menu2RU : 'Спорт и активности',
        menu2BY : 'Спорт и активности',
        menu2UA : 'Спорт и активности',
        menu2EE : '',
        menu2LT : '',
        menu2LV : '',
        
        //MENU ITEM 3
        menu3RU : 'Игровые активности',
        menu3BY : 'Игровые активности',
        menu3UA : 'Игровые активности',
        menu3EE : '',
        menu3LT : '',
        menu3LV : '',
        
        //MENU ITEM 4
        menu4RU : 'Творческие активности',
        menu4BY : 'Творческие активности',
        menu4UA : 'Творческие активности',
        menu4EE : '',
        menu4LT : '',
        menu4LV : '',
        
        //MENU ITEM 5
        menu5RU : 'Вечерняя программа',
        menu5BY : 'Вечерняя программа',
        menu5UA : 'Вечерняя программа',
        menu5EE : '',
        menu5LT : '',
        menu5LV : '',
        
        //SLIDER 2
        slider2Slides : [
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/0269798c-1f79-4a5f-9c12-83ab8b925cb5/b_1-1)',
                nameRU : 'Детская Йога, степ и танцевальная аэробика.',
                nameBY : 'Детская Йога, степ и танцевальная аэробика.',
                nameUA : 'Детская Йога, степ и танцевальная аэробика.',
                nameEE : '',
                nameLT : '',
                nameLV : '',
                
               
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/5ccd74da-fab0-42f1-883c-5634fffc6879/b_1-2)',
                nameRU : 'Танцевальная академия',
                nameBY : 'Танцевальная академия',
                nameUA : 'Танцевальная академия',
                nameEE : '',
                nameLT : '',
                nameLV : '',
                
               
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/5435a85d-ae41-4cb4-bbee-d6dd0e818123/b_1-3)',
                nameRU : 'Спортивные состязания',
                nameBY : 'Спортивные состязания',
                nameUA : 'Спортивные состязания',
                nameEE : '',
                nameLT : '',
                nameLV : '',
                
                
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/41681cb7-bf25-4fdb-945c-06031be67beb/b_1-4)',
                nameRU : 'Олимпийские игры',
                nameBY : 'Олимпийские игры',
                nameUA : 'Олимпийские игры',
                nameEE : '',
                nameLT : '',
                nameLV : '',
                
                
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
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/d3257527-5606-4b02-8de1-949a813d8180/b_1-6)',
                nameRU : 'Игры-квесты',
                nameBY : 'Игры-квесты',
                nameUA : 'Игры-квесты',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/4187a64e-3bcc-4a0a-bd6e-0ae214a2b55c/b_1-7)',
                nameRU : 'Творческая мастерская Тукана',
                nameBY : 'Творческая мастерская Тукана',
                nameUA : 'Творческая мастерская Тукана',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/a610c95a-6556-442f-ad1b-ce9897f49229/b_1-8)',
                nameRU : 'Игры в бассейне',
                nameBY : 'Игры в бассейне',
                nameUA : 'Игры в бассейне',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/503f3677-def2-472c-bc5a-5703267e989b/b_1-9)',
                nameRU : 'Сюжетно-ролевые игры',
                nameBY : 'Сюжетно-ролевые игры',
                nameUA : 'Сюжетно-ролевые игры',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/6d9adec7-92e4-41e2-bb6a-dd9c4bccbdb2/b_1-10)',
                nameRU : 'Аквагрим',
                nameBY : 'Аквагрим',
                nameUA : 'Аквагрим',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/5ea58479-6dd6-4e1e-b6e4-61286e8b482f/b_1-11)',
                nameRU : 'Тукан коктейль',
                nameBY : 'Тукан коктейль',
                nameUA : 'Тукан коктейль',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/19b71da6-c781-4712-b09d-f85445c67861/tab2-4)',
                nameRU : 'Научные эксперименты',
                nameBY : 'Научные эксперименты',
                nameUA : 'Научные эксперименты',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/276b4c71-b9d2-4c30-b098-602017c813da/b_1-12)',
                nameRU : 'Мыльные пузыри',
                nameBY : 'Мыльные пузыри',
                nameUA : 'Мыльные пузыри',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/28333cd6-daea-4e8a-ab2f-37e1d3cbb009/b_1-13)',
                nameRU : 'День рождения Тукана',
                nameBY : 'День рождения Тукана',
                nameUA : 'День рождения Тукана',
                nameEE : '',
                nameLT : '',
                nameLV : '',
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
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/459613e1-4b25-40fe-a50c-1a16bbd79bea/b_1-14)',
                nameRU : 'Воздушный змей',
                nameBY : 'Воздушный змей',
                nameUA : 'Воздушный змей',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/67c7c714-0727-4910-ac4f-12522756c8a6/b_1-15)',
                nameRU : 'Эко творчество',
                nameBY : 'Эко творчество',
                nameUA : 'Эко творчество',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/8f756b7a-1bee-484c-b2ff-1eb21692fb98/b_1-16)',
                nameRU : 'Рисование на камнях',
                nameBY : 'Рисование на камнях',
                nameUA : 'Рисование на камнях',
                nameEE : '',
                nameLT : '',
                nameLV : '',
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
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/b9437385-3913-4bf4-b10b-531c1d31d7b6/b_1-18)',
                nameRU : '"Tукан Тусейшн"',
                nameBY : '"Tукан Тусейшн"',
                nameUA : '"Tукан Тусейшн"',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/876e8f93-ed28-46fd-8322-88ae673192ab/no-img);background-size:cover;background-position: center;',
                nameRU : 'Тематические фестивали',
                nameBY : 'Тематические фестивали',
                nameUA : 'Тематические фестивали',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/03ca4ee6-0ac2-4cde-a2da-b69a5339e289/b_1-19)',
                nameRU : 'Кинопоказы на открытом воздухе',
                nameBY : 'Кинопоказы на открытом воздухе',
                nameUA : 'Кинопоказы на открытом воздухе',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/5f5c2df6-09e4-4f0b-b98c-875c7c669790/b_1-20)',
                nameRU : 'Тукан "Голос"',
                nameBY : 'Тукан "Голос"',
                nameUA : 'Тукан "Голос"',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/2e233e2b-c533-47eb-88d6-58f692729240/b_1-21)',
                nameRU : 'Латинская вечеринка',
                nameBY : 'Латинская вечеринка',
                nameUA : 'Латинская вечеринка',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
        ],
    }
})

//Новые Отели
//HOTEL
            {
                hotelName : 'Blue Diamond Alsalam Resort 5*',
                background: 'background: url(https://www.tui.ru/getmedia/722dc212-70d8-46e0-87d7-cec17f7d3109/f_Hotel-Exterior_f_8);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Asia/UAE/Fujairah/Fujairah-beach-hotels/blue-diamond-alsalam-resort',
                hotelLinkClient: '/hotel/asia-uae-fujairah-fujairah__beach__hotels-blue__diamond__alsalam__resort/',
                
                //EE
                countryNameEE: 'ОАЭ, Фуджейра',
                aboutHotelEEItems: [
                    { item: 'Просторные номера с красивым интерьером' },
                    { item: 'Вид из номеров отеля – на пляж / на яхт-клуб или на город' },
                    { item: 'Стандартные типы номеров и оборудованные кухней 1-2 спальные апартаменты' },
                    { item: 'Окруженный волнорезами собственный песчаный пляж с плавным заходом в воду' },
                    { item: 'Детский бассейн глубиной 65 см ' },
                    { item: 'Большой бассейн перед зданием отеля' },
                    { item: 'Релакс–бассейн на крыше отеля' },
                    { item: 'Просторный тренажерный зал с современным оборудованием' },
                    
                    
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'ОАЭ, Фуджейра',
                aboutHotelLTItems: [
                    { item: 'Просторные номера с красивым интерьером' },
                    { item: 'Вид из номеров отеля – на пляж / на яхт-клуб или на город' },
                    { item: 'Стандартные типы номеров и оборудованные кухней 1-2 спальные апартаменты' },
                    { item: 'Окруженный волнорезами собственный песчаный пляж с плавным заходом в воду' },
                    { item: 'Детский бассейн глубиной 65 см ' },
                    { item: 'Большой бассейн перед зданием отеля' },
                    { item: 'Релакс–бассейн на крыше отеля' },
                    { item: 'Просторный тренажерный зал с современным оборудованием' },
                    
                    
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'ОАЭ, Фуджейра',
                aboutHotelLVItems: [
                    { item: 'Просторные номера с красивым интерьером' },
                    { item: 'Вид из номеров отеля – на пляж / на яхт-клуб или на город' },
                    { item: 'Стандартные типы номеров и оборудованные кухней 1-2 спальные апартаменты' },
                    { item: 'Окруженный волнорезами собственный песчаный пляж с плавным заходом в воду' },
                    { item: 'Детский бассейн глубиной 65 см ' },
                    { item: 'Большой бассейн перед зданием отеля' },
                    { item: 'Релакс–бассейн на крыше отеля' },
                    { item: 'Просторный тренажерный зал с современным оборудованием' },
                    
                    
                ],
                buttonLV : 'Выбрать тур',
            },
