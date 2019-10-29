/*
Привет.
Ниже файл с информацией для ВСЕХ страниц FUN SUN для клиентского и агентского сайте (EE LT LV )

Для того чтобы изменить информацию достаточно заменить ее в этом файле и обновить файл который лежит на сайте tui.ru \ media \ новый сайт \ концепции \ FUN SUN \ JS \ VUE-fun-sun-hotels-ee-lt-lv.js - ВНИМАНИЕ! именно нажать на кнопку заменить, иначе придется менять ссылку на всех страницах.

Обрати внимение на название переменных в файле html, если в конце есть указание к стране (например имя оканчивается myNameRU - значит это перевод на русский, myNameEE - значит это перевод на эстонский и тп)

Также обрати внимание на название ссылок - если оканчивается на Client - значит ссылка на клиент, если Agent - значит ссылка на агенте.

Некоторые страницы в консоли могут ругаться на отсутствие некоторых элементов, это нормально, просто у нас один файл на все страницы и соответственно на некоторых страницах нет элементов с других страниц, поэтому не обращай внимание.

*/

const funSunHotHotels = new Vue ({
    el: '#hotels-fun-sun',
    data: {
        titleEE: 'FUN&SUN kontseptsiooni hotellid',
        titleLT: 'Viešbučiai su FUN&SUN koncepcija',
        titleLV: 'Viesnīcas ar FUN&SUN koncepciju',
        
        //RU 
        country1EE: 'Türgi',
        country2EE: 'Küpros',
        
        
        //BY 
        country1LT: 'Turkija',
        country2LT: 'Kipras',
        
        
        //UA 
        country1LV: 'Turcija',
        country2LV: 'Kipra',
        
        
        //HOTELS 1 ТУРЦИЯ
        country1Hotels : [
            //HOTEL 1
            {
                hotelName : 'FUN&SUN Miarosa Incekum Beach 5*',
                background: 'background: url(https://www.tui.ru/getmedia/e112b2c4-35a6-43bb-b43f-e788025b543e/new_hotel_04_04);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/TUI-FUN-SUN-Miarosa-Incekum-Beach',
                hotelLinkClient: '/hotel/europe-turkey-alanya-incekum-tui__fun__sun__miarosa__incekum__beach/',
                
                //EE
                countryNameEE: 'Türgi, Alanya(Incekum)',
                aboutHotelEEItems: [
                    { item: 'Kompaktne territoorium' },
                    { item: 'Relax tsoon basseini ja baariga' },
                    { item: 'Veeliumäed' },
                    { item: 'Uuued toad' },
                    { item: 'Liivarand' },
                    { item: 'Toucan territoorium koos basseiniga' }
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Alanija (Avsalar)',
                aboutHotelLTItems: [
                    { item: 'Kompaktiška teritorija' },
                    { item: 'Relax-zona su baseinu ir baru' },
                    { item: 'Vandens kalneliai' },
                    { item: 'Nauji kambariai' },
                    { item: 'Smėlio paplūdimys' },
                    { item: 'Neįprasta Toucan vaikų klubo teritorija su baseinu' }
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Alānija (Avsalara)',
                aboutHotelLVItems: [
                    { item: 'Kompakta teritorija' },
                    { item: 'Relax-zona ar baseinu un bāru' },
                    { item: 'Lieli ūdens slidkalniņi' },
                    { item: 'Jauni numuri' },
                    { item: 'Smilšu pludmale' },
                    { item: 'Bērnu kluba Toucan neparastā teritorija ar baseinu' }
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            //HOTEL 2 
            /*{
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
            },*/
            
            //HOTEL 3
            {
                hotelName : 'FUN&SUN Comfort Beach Resort 5*',
                background: 'background: url(https://www.tui.ru/getmedia/1775cfc9-5312-4a34-86a2-6093a73b5bf8/global_photo_comfort);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Goynuk/TUI-FUN-SUN-Comfort-Beach-Resort',
                hotelLinkClient: '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__comfort__beach__resort/',
                
                //EE
                countryNameEE: 'Türgi, Kemer (Göynuk)',
                aboutHotelEEItems: [
                    { item: 'Suur roheline ala' },
                    { item: 'Avarad toad' },
                    { item: 'Veekeskus (4 veeliumäe)' },
                    { item: 'Miniloomaaed' },
                    { item: '4 basseini' },
                    { item: 'Rannas laugjas vetteminek' }
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Kemeras (Goiniukas)',
                aboutHotelLTItems: [
                    { item: 'Didelė, žalia teritorija' },
                    { item: 'Erdvūs kambariai' },
                    { item: 'Vandens pramogų parkas su 4 kalneliais' },
                    { item: 'Mini zoologijos sodas' },
                    { item: '4 baseinai' },
                    { item: 'Paplūdimys su nuožulniu įbridimu į jūrą' }
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Kemera (Goiņuka)',
                aboutHotelLVItems: [
                    { item: 'Liela zaļa teritorija' },
                    { item: 'Plaši numuri' },
                    { item: 'Ūdens atrakciju parks ar 4 slidkalniņiem' },
                    { item: 'Mini-zoodārzs' },
                    { item: '4 baseini' },
                    { item: 'Pludmale ar lēzenu ieeju jūrā' }
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            
            //HOTEL 4
            {
                hotelName : 'FUN&SUN River Resort Belek 5*',
                background: 'background: url(https://www.tui.ru/getmedia/ac816ac1-3c20-4a5f-a712-862c2ec73b37/photo-8-2);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/belek/Belek/TUI-FUN-SUN-River-Resort-Belek',
                hotelLinkClient: '/hotel/europe-turkey-belek-belek-tui__fun__sun__river__resort__belek/',
                
                //EE
                countryNameEE: 'Türgi, Belek',
                aboutHotelEEItems: [
                    { item: 'Hotell asub jõekaldal' },
                    { item: 'Kahekorruselised bangalod Kreeka stiilis' },
                    { item: 'Taskukohane Belek - hea hind antud kuurordi suhtes' },
                    { item: 'Jõel laevaga transfeer privaatsesse randa (8-12 minutit)' },
                    { item: 'On olemas Family toad (kuni 5 inimest) ning villad (kuni 9 inimest)' },
                    { item: 'SWIM UP toad' }
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Belekas',
                aboutHotelLTItems: [
                    { item: 'Ant upės kranto' },
                    { item: 'Neiprasta teritorija su vasarnamiais graikiško stiliaus' },
                    { item: 'Ekonominis Belekas - žema kaina' },
                    { item: 'Pervežimas iki nuosavo paplūdimio (8-12 min. kelio)' },
                    { item: 'Yra Family kambariai talpinantys iki 5 asm. ir vilos talpinančios iki 9 asm.' },
                    { item: 'Yra SWIM UP kambariai' }
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Beleka',
                aboutHotelLVItems: [
                    { item: 'Viesnīca atrodas upes krastā' },
                    { item: 'Neparasta teritorija ar grieķu stila divstāvu bungalo' },
                    { item: 'Atpūta Beleka - par izdevīgu cenu' },
                    { item: 'Transfers līdz privātās pludmales pa upi (laiks ceļā 8-12 minūtes)' },
                    { item: 'Family numuros var izmitināt maks. 5 pers. un villas maks. 9 pers.' },
                    { item: 'Ir SWIM UP numuri' }
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            
            //HOTEL 5
            /*{
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
            },*/
            
            
            //HOTEL 6
            {
                hotelName : 'FUN&SUN Сlub Serra Palace 5*',
                background: 'background: url(https://www.tui.ru/getmedia/d23f7504-8e8e-4757-b2ae-421600d11b95/photo-10);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/side/Kizilot/TUI-FUN-SUN-Club-Serra-Palace-(ex-Club-Calimera-S',
                hotelLinkClient: '/hotel/europe-turkey-side-kizilot-tui__fun__sun__club__serra__palace/',
                
                //EE
                countryNameEE: 'Тürgi, Side (Kizilot)',
                aboutHotelEEItems: [
                    { item: 'Kõige suurema territooriumiga Hotell: 150 000 ruutmeetrit' },
                    { item: 'Veepark kogu perele' },
                    { item: 'Veeliumäed lastele' },
                    { item: '2 pearestorani: üld- ja eraldi restoran FUN&SUN' },
                    { item: '7 välibasseini (nii lastele, kui ka täiskasvanutele)' },
                    { item: 'Hotelli külastavad turistid erinevatest maailmanurkadest' },
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Sidė (Kizylot)',
                aboutHotelLTItems: [
                    { item: 'Didžiausia teritorija tarp FUN&SUN viešbučių: 150 000 kv.m.' },
                    { item: 'Vandens parkas visai šeimai' },
                    { item: 'Vandens kalneliai vaikams' },
                    { item: '2 pagrindiniai restoranai: bendras ir atskiras FUN&SUN' },
                    { item: '7 lauko baseinai (suaugusiems ir vaikams), įskaitant olimpinio dydžio baseiną' },
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Side (Kizilota)',
                aboutHotelLVItems: [
                    { item: 'Vislielāka teritorija starp FUN&SUN viesnīcam: 150 000 kv.m.' },
                    { item: 'Ūdens atrakciju parks visai ģimenei' },
                    { item: 'Bērnu ūdens slidkalniņi' },
                    { item: '2 galvenie restorāni: kopējais un FUN&SUN restorāns' },
                    { item: '7 āra baseini (pieaugušajiem un bērniem), tostarp olimpiskā izmēra baseins' },
                    { item: 'Vienīga viesnīca no mūsu piedāvājuma, kur atpūšas tūristi no dažādam valstim' },
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            
            //HOTEL 7
            {
                hotelName : 'FUN&SUN Miarosa Ghazal Resort 5*',
                background: 'background: url(https://www.tui.ru/getmedia/22840909-3e68-42ad-8e6a-ec6ffae85d0e/photo-11);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Goynuk/TUI-FUN-SUN-Miarosa-Ghazal-Resort',
                hotelLinkClient: '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__miarosa__ghazal__resort/',
                
                //EE
                countryNameEE: 'Türgi, Kemer (Göynuk)',
                aboutHotelEEItems: [
                    { item: 'Roheline alal 2 km kaugusel Kemerist' },
                    { item: 'SPA keskus' },
                    { item: 'Bassein veeliumägedega' },
                    { item: 'Toad vaatega mägedele' },
                    { item: 'Lasterestoran Toucan' },
                    { item: 'Privaatne vaikne piirkond rannas ainult täiskasvanutele 18+' },
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Kemer (Goiniuk)',
                aboutHotelLTItems: [
                    { item: 'Žalia teritorija vos 2 km iki Kemero' },
                    { item: 'SPA centras' },
                    { item: 'Baseinas su vandens kalneliais' },
                    { item: 'Kambariai su nuostabiais vaizdais į kalnus' },
                    { item: 'Atskiras restoranas vaikams Toucan' },
                    { item: 'Atskira rami zona paplūdimyje tik suaugusiems 18+' },
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Kemera (Goiņuka)',
                aboutHotelLVItems: [
                    { item: 'Apzaļumota teritorija 2 km attālumā no Kemeras' },
                    { item: 'SPA centrs' },
                    { item: 'Baseins ar ūdens slidkalniņiem' },
                    { item: 'Numuri ar satriecošu skatu uz kalniem' },
                    { item: 'Atsevišķs bērnu restorāns Toucan' },
                    { item: 'Atsevišķa mierīga zona pludmalē tikai pieaugušajiem 18+' },
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            //HOTEL 8
            {
                hotelName : 'FUN&SUN Club Belek 5*',
                background: 'background: url(https://www.tui.ru/getmedia/c53735b0-0177-41f5-bad2-e0b80d967d6d/photo-12);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-Club-Belek',
                hotelLinkClient: '/hotel/europe-turkey-belek-belek-tui__fun__sun__club__belek/',
                
                //EE
                countryNameEE: 'Тürgi, Belek',
                aboutHotelEEItems: [
                    { item: 'Kaks ühes hotell, LIFE - Euroopa stiilis ja MOOD - Maroko stiilis' },
                    { item: 'Bungalo MOOD - privaatne rohelise territooriumiga hotell relax basseinidega' },
                    { item: 'Olümpiabassein' },
                    { item: 'PREMUIM kategooria toad - Mood Suite, Villa' },
                    { item: 'Wellness & Fitness programmid' },
                    { item: 'Sinise lipuga rand' }
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Belekas',
                aboutHotelLTItems: [
                    { item: 'Viešbutis "2 in 1" LIFE - europetiško stiliaus ir MOOD - marokietiško stiliaus' },
                    { item: 'Vasarnamiai MOOD - tai žalia teritorija su relax baseinais' },
                    { item: 'Olimpinio dydžio baseinas' },
                    { item: 'Kambariai PREMUIM kategorijos - Mood Suite, Villa' },
                    { item: 'Atskira sporto zona Wellness & Fitness' },
                    { item: 'Paplūdimys kasmet apdovanojamas "Mėlynąja vėliava"' }
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Beleka',
                aboutHotelLVItems: [
                    { item: 'Viesnīca "divi vienā": LIFE - Eiropas stils un marokāņu stils - MOOD' },
                    { item: 'MOOD bungalo - apzaļumota noslēgtā teritorijā ar relax-baseiniem' },
                    { item: 'Olimpiskā izmēra baseins' },
                    { item: 'PREMUIM kategorijas numuri - Mood Suite, Villa' },
                    { item: 'Atsevišķa sporta teritorija Wellness & Fitness' },
                    { item: 'Pludmale ir gadu saņem "Zilo karogu"' }
                ],
                buttonLV : 'Izvēlēties ceļojumu',
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
                
                //EE
                countryNameEE: 'Küpros, Ayia Napa',
                aboutHotelEEItems: [
                    { item: 'Isiklik veepark' },
                    { item: 'Suure basseiniga territoorium' },
                    { item: 'Läheduses on Limanaki rand' },
                    { item: 'Tasuta jäätis 10:00 kuni 22:00' },
                    { item: 'Läheduses on lõbustuspark' },
                    { item: 'Avarad toad' },
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Kipras, Ayia Napa',
                aboutHotelLTItems: [
                    { item: 'Nuosavas vandens pramogų parkas' },
                    { item: 'Teritorija su dideliu baseinu' },
                    { item: 'Šalia Limanaki smėlio paplūdimio' },
                    { item: 'Ledai nemokamai nuo 10 ryto iki 10 vakaro' },
                    { item: 'Šalia atrakcionų parkas' },
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Kipra, Aijanapa',
                aboutHotelLVItems: [
                    { item: 'Privātais ūdens atrakciju parks' },
                    { item: 'Liels baseins teritorijā' },
                    { item: 'Blakus atrodas Limanaki smilšu pludmale' },
                    { item: 'Bezmaksas saldējums no 10 no rīta līdz 10 vakarā' },
                    { item: 'Blakus atrodas lunaparks' },
                    { item: 'Jauni numuri' },
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            
            //HOTEL 2
            {
                hotelName : 'FUN&SUN Vangelis Hotel & Suite',
                background: 'background: url(https://www.tui.ru/getmedia/b4929e8f-5478-472e-860d-66c05edd9ed8/f_Pool-2_f_1);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Cyprus/Protaras/Protaras-city/vangelis-hotel-suites',
                hotelLinkClient: '/hotel/europe-cyprus-protaras-protaras__city-fun__sun__vangelis__hotel__suites/',
                
                //EE
                countryNameEE: 'Küpros, Protaras',
                aboutHotelEEItems: [
                    { item: 'Asub Protaras kuurordi südames' },
                    { item: 'All Inclusive ja HB+ toitlustus' },
                    { item: 'Hotell asub parimate randade läheduses: Fig Tree Bay (150 meetrit), Konnos Bay, Kalamies, Sunrise' },
                    { item: 'Tubade majutus: 2 täiskasvanu+3 last/3 täiskasvanu+2 last/ 4 täiskasvanu+1 laps' },
                    { item: 'Kõik numbrid on renoveeritud' },
                    
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Kipras, Protaras',
                aboutHotelLTItems: [
                    { item: 'Protaro kuroto centre' },
                    { item: 'Viešbutis dirba pagal All Inclusive ir HB+ maitinimo sistemas' },
                    { item: 'Viešbutis įsikūręs šalia geriausių paplūdimių: Fig Tree Bay (150 m), Konnos Bay, Kalamies, Sunrise' },
                    { item: 'Kambariai įvairaus dydžio: 2+3 aba 3+2 arba 4+1 asm.' },
                    { item: 'Renovacija atlikta visuose kambariuose' },
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Kipra, Protara',
                aboutHotelLVItems: [
                    { item: 'Viesnīca atrodas Protaras kūrorta centrā' },
                    { item: 'Viesnīca piedāvā ēdināšanu pēc "Viss iekļauts" un HB+ sistēmam' },
                    { item: 'Viesnīca atrodas blakus labākajiem pludmalem: Fig Tree Bay (600 metri), Konnos Bay, Kalamies, Sunrise' },
                    { item: 'Izmitināšanas iespējas: 2 pieaugušie+3 bērni/3 pieaugušie+2 bērni/4 pieaugušie+1 bērns' },
                    { item: 'Visi numuri ir renovēti' },
                    { item: 'Jauni numuri' },
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            
        ],
        
    }
})

