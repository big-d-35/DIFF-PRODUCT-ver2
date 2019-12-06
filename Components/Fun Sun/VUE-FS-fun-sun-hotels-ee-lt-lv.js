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
        
        //EE 
        country1EE: 'Türgi',
        country2EE: 'Küpros',
        country3EE: 'Egiptus',
        country4EE: 'Montenegro',
        country5EE: 'Hispaania',
        country6EE: 'Kreeka',
        
        
        //LT 
        country1LT: 'Turkija',
        country2LT: 'Kipras',
        country3LT: 'Egiptas',
        country4LT: 'Juodkalnija',
        country5LT: 'Ispanija',
        country6LT: 'Graikija',
        
        
        //LV 
        country1LV: 'Turcija',
        country2LV: 'Kipra',
        country3LV: 'Ēģipte',
        country4LV: 'Melnkalne',
        country5LV: 'Spānija',
        country6LV: 'Grieķija',
        
        
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
            {
                hotelName : 'FUN&SUN Club Di Finica 5*',
                background: 'background: url(https://www.tui.ru/getmedia/7299bc8c-2f8b-4dc0-aa2a-dd56a6b2830a/global);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Finike/TUI-FUN-SUN-Club-Di-Finica',
                hotelLinkClient: '/hotel/europe-turkey-kemer-finike-tui__fun__sun__club__di__finica/',
                
                //EE
                countryNameEE: 'Türgi, Kemer',
                aboutHotelEEItems: [
                    { item: 'Ainulaadne asukohta' },
                    { item: 'Hotelli ümbritsevad apelsinipuusalud' },
                    { item: 'Avar, laugja kallasega randUued toad' },
                    { item: 'Suur. roheline territoorium' },
                    { item: 'Veeliumäed' },
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Kemeras ',
                aboutHotelLTItems: [
                    { item: 'Unikali vita' },
                    { item: 'Viešbutis išsidėstęs apelsinų giraitės apsuptyje' },
                    { item: 'Paltus paplūdimys su nuožulniu įėjimu į jūrą' },
                    { item: 'Nauji kambariai' },
                    { item: 'Didelė, žalia teritorija' },
                    { item: 'vandens kalneliai' }
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Kemera (Finike)',
                aboutHotelLVItems: [
                    { item: 'Unikāla atrašanās vieta' },
                    { item: 'Viesnīcu ieskauj apelsīnu birzis' },
                    { item: 'Plaša pludmale ar gludu ieeju' },
                    { item: 'Jauni numuri' },
                    { item: 'Liela zaļā zona' },
                    { item: 'Ūdens slidkalniņi' }
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
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
            {
                hotelName : 'FUN&SUN Club Saphire 5*',
                background: 'background: url(https://www.tui.ru/getmedia/517b01e9-57fe-4adb-a50f-a010ef13d1e5/photo-9);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/kemer/Tekirova/TUI-FUN-SUN-Club-Saphire/',
                hotelLinkClient: '/hotel/europe-turkey-kemer-tekirova-tui__fun__sun__club__saphire/',
                
                //EE
                countryNameEE: 'Türgi, Kemer ',
                aboutHotelEEItems: [
                    { item: 'Hea hind' },
                    { item: 'Roheline territoorium, kus kasvavad männid' },
                    { item: 'Zippline-varustusega laste mänguväljak' },
                    { item: 'Uus Chill out 18+ tsoon (ainult täiskasvanutele, ööpäevaringse baari ja suupistetega)' },
                    { item: 'Eraldatud Relax tsoon basseini ja baariga' },
                    { item: 'Esimene FUN&SUN kontseptsiooniga hotell' }
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Kemeras',
                aboutHotelLTItems: [
                    { item: 'Gera kaina' },
                    { item: 'žalia teritorija su pušimis' },
                    { item: 'Zipline įranga vaikų aikštelė' },
                    { item: 'Nauja Chill out 18+ zona (tik suaugusiems, su 24 val. veikiančiu baru ir užkandžiais)' },
                    { item: 'Relax zona su baseinu ir baru' },
                    { item: 'Pirmasis FUN&SUN koncepcijos viešbutis' }
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Kemera',
                aboutHotelLVItems: [
                    { item: 'Izdevīga cena' },
                    { item: 'Apzaļumota teritorija ar priežu kokiem' },
                    { item: '"Zippline" aprīkojums bērnu rotaļu laukumā' },
                    { item: 'Jauna "Chill out" zona 18+ (tikai pieaugušajiem, bārs un uzkodas 24h)' },
                    { item: 'Atsevišķa "Relax" zona ar baseinu un bāru' },
                    { item: 'Pirma viesnīca pēc FUN&SUN koncepcijas' }
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            
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
           /* {
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
            },*/
            
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
            
            //HOTEL 9
            {
                hotelName : 'FUN&SUN Club Euphoria Palm Beach 5*',
                background: 'background: url(https://www.tui.ru/getmedia/c2885925-438a-4a46-9301-372ed0a7407d/814664);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/side/Kizilagac/fun-sun-euphoria-palm-beach',
                hotelLinkClient: '/hotel/europe-turkey-side-kizilagac-fun__sun__euphoria__palm__beach/',
                
                //EE
                countryNameEE: 'Türgi, Side, Kyzylach',
                aboutHotelEEItems: [
                    { item: 'Isiklik liiva- ja kivikliburand, väli- ja sisebasseinid, veeliumäed' },
                    { item: 'Hotell koosneb ühest peahoonest ja kahekorruselistest bungalode kompleksist' },
                    { item: 'Suur hotelli pindala - 183 000 ruutmeetrit' },
                    { item: 'välibassein, lõõgastusbassein, sisebassein, 2 veeliumäge' },
                    { item: 'Jõusaal, mitmeotstarbeline mänguväljak, disko, türgi saun / saun / leiliruum' },
                    { item: '6 a la carte restorani' }
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Sidė, Kyzylagač',
                aboutHotelLTItems: [
                    { item: 'Viešbutis su nuosavu smėlio – žvyro paplūdimiu, lauko ir uždaru baseinais, vandens kalneliais' },
                    { item: 'Viešbutį sudaro vienas pagrindinis pastatas ir kompleksas 2-jų aukštų vasarnamių' },
                    { item: 'Didelė viešbučio teritorija - 183 000 kv.m.' },
                    { item: 'Lauko baseinas, relax baseinas, uždaras baseinas, 2 vandens kalneliai' },
                    { item: 'Treniruoklių salė, multifunkciniai kortai, diskoteka, turkiška pirtis / sauna / garinė pirtis' },
                    { item: '6 a la carte restoranai' }
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Side, Kizilača',
                aboutHotelLVItems: [
                    { item: 'Viesnīca ar privāto smilšu-oļu pludmali, āra un iekštelpu baseiniem, ūdens slidkalniņiem' },
                    { item: 'Viesnīca sastāv no galvenās ēkas un 2-stāvu bungalo kompleksa' },
                    { item: 'Viesnīcas teritorija - 183 000 kv. m.' },
                    { item: 'āra baseins, "relax" baseins, iekštelpu baseins, 2 ūdens slidkalniņi' },
                    { item: 'Trenažieru zāle, multikorts, diskotēka, turku pirts / sauna / tvaika pirts' },
                    { item: '6 A La Carte restorāni' }
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            //HOTEL 10
            {
                hotelName : 'FUN&SUN Imperial Sunland Resort 5*',
                background: 'background: url(https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=355f8bd9-2cb8-4ae8-9c6c-4e808f094af0);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Beldibi/FUN-SUN-Imperial-Sunland-Resort-(ex-Sunland-Resor',
                hotelLinkClient: '/hotel/europe-turkey-kemer-beldibi-fun__sun__imperial__sunland__resort__(ex__sunland__resor/',
                
                //EE
                countryNameEE: 'Türgi, Kemer',
                aboutHotelEEItems: [
                    { item: 'Kompaktse rohelise territooriumi ja ilusa arhitektuuriga hotell' },
                    { item: 'Enamikes tubades - merevaade' },
                    { item: 'Oma liiva- ja kivikluburand' },
                    { item: 'kai Lõõgastusbassein' },
                    { item: 'Ilus SPA-kompleks' },
                    { item: '3 a la carte restorani' },
                    
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Kemeras',
                aboutHotelLTItems: [
                    { item: 'Viešbutis su kompaktiška, žalia teritorija, graži architektūra' },
                    { item: 'Dauguma kambarių - su vaizdu į jūrą' },
                    { item: 'Nuosavas smėlio-žvyro paplūdimys' },
                    { item: 'Relax baseinas' },
                    { item: 'Gražus SPA centras' },
                    { item: '3 a la carte restoranai' },
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Kemera',
                aboutHotelLVItems: [
                    { item: 'Viesnīca ar kompaktu, apzaļumotu teritoriju, skaistu arhitektūru' },
                    { item: 'Vairākums viesnīcas numuru ir ar skatu uz jūru' },
                    { item: 'Privātā smilšu-oļu pludmale ar piestātni' },
                    { item: 'Relax-baseins' },
                    { item: 'Skaists SPA komplekss' },
                    { item: '3 A La Carte restorāni' },
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            //HOTEL 11
            {
                hotelName : 'FUN&SUN Life Side 5',
                background: 'background: url(https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=f21e1fe8-2170-4202-9ada-d5b4701659c4&height=460);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/side/Manavgat/fun-sun-life-side-resort-hotel',
                hotelLinkClient: '/hotel/europe-turkey-side-manavgat-fun__sun__life__side__resort__hotel/',
                
                //EE
                countryNameEE: 'Türgi, Kemer',
                aboutHotelEEItems: [
                    { item: 'Laste välibassein' },
                    { item: 'Esimene rannajoon' },
                    { item: 'Oma kai' },
                    { item: 'Lasteklubi' },
                    
                    
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Kemeras',
                aboutHotelLTItems: [
                    { item: 'Vaikų lauko baseinas' },
                    { item: '1-oje viešbučių linijoje' },
                    { item: 'Nuosavas pirsas' },
                    { item: 'Vaikų klubas' },
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Kemera',
                aboutHotelLVItems: [
                    { item: 'Bērnu āra baseins' },
                    { item: 'Pirmajā līnija no pludmales' },
                    { item: 'Privātā piestātne' },
                    { item: 'Bērnu klubs' },
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            //HOTEL 12
            {
                hotelName : 'FUN&SUN Life Belek',
                background: 'background: url(https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=a215bf9d-232c-48c7-bd56-4dcad82655f3&height=460);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/belek/Bogazkent/FUN-SUN-Life-Belek',
                hotelLinkClient: '/hotel/europe-turkey-belek-bogazkent-fun__sun__life__belek/',
                
                //EE
                countryNameEE: 'Тürgi, Belek',
                aboutHotelEEItems: [
                    { item: 'Kompaktse territooriumiga hotell' },
                    { item: 'Oma liiva- ja kivikliburand' },
                    { item: '50-kohaline kino' },
                    { item: '3 a la carte restorani' },
                    { item: 'Maitsev toit kõikides hotelli restoranides' },
                    { item: 'Uus lasteklubi Toucan koos' },
                    { item: 'Mänguväljakuga' },
                    
                    
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Belekas',
                aboutHotelLTItems: [
                    { item: 'Viešbutis su kompaktiška teritorija' },
                    { item: 'Nuosavas, smėlio-žvyro paplūdimys' },
                    { item: 'Kino teatras (50 asm.)' },
                    { item: 'SPA centras' },
                    { item: '3 a la Carte restoranai' },
                    { item: 'Skanus maistas' },
                    { item: 'Naujas Toucan vaikų klubas' },
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Beleka, Boazkenta',
                aboutHotelLVItems: [
                    { item: 'Viesnīca ar kompaktu teritoriju' },
                    { item: 'Privātā smilšu-oļu pludmale' },
                    { item: 'Kinoteātris 50 personām' },
                    { item: 'SPA centrs' },
                    { item: '3 A La Carte restorāni' },
                    { item: 'Garda ēdināšana visos viesnīcas restorānos' },
                    { item: 'Jauns bērnu klubs Toucan ar rotaļu laukumu' },
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
            
            //HOTEL 3
            {
                hotelName : 'FUN&SUN King Evelthon Beach 5*',
                background: 'background: url(https://www.tui.ru/getmedia/bd2f0658-959f-447d-9c96-e20db587bbb7/f_KING13B-Pool-Area_f_1);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Cyprus/Paphos/Paphos/fun-sun-king-evelthon-beach-hotel-resort',
                hotelLinkClient: '/hotel/europe-cyprus-paphos-paphos-fun__sun__king__evelthon__beach__hotel__resort/',
                
                //EE
                countryNameEE: 'Küpros, Pafos',
                aboutHotelEEItems: [
                    { item: 'Suur veepark täiskasvanutele ja lastele' },
                    { item: 'Hotelli kogupindala on 100000 ruutmeetrit' },
                    { item: 'Avar territoorium, mugavad toad' },
                    { item: 'Kõrgetasemeline teenindus, mitmekesine toitlustus, hea infrastruktuur aktiivseks puhkuseks' },
                    { item: 'Tasuta Wi-FI, Kõik hinnas, 3 a la carte restorani' },
                    { item: 'Esimene rannajoon: hotelli ees on munitsipaalrand' },
                    { item: 'Lastele: lastebassein, lasteklubi Toucan, lasteväljak, restoranid kõrgete toolidega lastele, lastemenüü' },
                    
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Kipras, Pafosas',
                aboutHotelLTItems: [
                    { item: 'Didelis vandens pramogų parkas suaugusiems ir vaikams' },
                    { item: 'Bendra teritorija 100 000 kv.m.' },
                    { item: 'Didelė teritorija, jaukūs kambariai' },
                    { item: 'Kokybiškas aptarnavimas, įvairus maitinimas, išvystyta infrastruktūra aktyviam poilsiui' },
                    { item: 'Nemokamas Wi-Fi, All Inclusive, 3 a la carte restoranai' },
                    { item: 'Pirma viešbučių linija: priešais viešbutį miesto paplūdimys' },
                    { item: 'Vaikams: baseinas, vaikų klubas Toucan, žaidimų aikštelė, aukštos kėdės restoranuose, vaikiškas meniu' },
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Kipra, Pafa',
                aboutHotelLVItems: [
                    { item: 'Liels ūdens atrakciju parks pieaugušajiem un bērniem ' },
                    { item: 'Viesnīca aizņem  100000 kv. m platību.' },
                    { item: 'Liela teritorija, omulīgi numuri' },
                    { item: 'Labs apkalpošanas līmenis, daudzveidīga ēdināšana, attīstīta infrastrūta aktīvai atpūtai' },
                    { item: 'Bezmaksas  Wi-Fi, "Viss iekļauts", 3 A La Carte restorāni' },
                    { item: 'Pirmajā līnija no pludmales:  municipālā pludmale pretī viesnīcai' },
                    { item: 'Bēniem: bērnu baseins, bērnu klubs Toucan,  rotaļu laukums, restorāns (i) ar augstiem krēsliem, bērnu ēdienkarte' },
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            //HOTEL 4
            {
                hotelName : 'FUN&SUN Anastasia Beach Hotel 4*',
                background: 'background: url(https://www.tui.ru/getmedia/b433218a-6a8a-46b1-b1fb-6fc594436d20/f_ART_4563_f_1);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Cyprus/Protaras/Protaras-city/fun-sun-anastasia-beach-hotel',
                hotelLinkClient: '/hotel/europe-cyprus-protaras-protaras__city-fun__sun__anastasia__beach__hotel/',
                
                //EE
                countryNameEE: 'Küpros, Protaras',
                aboutHotelEEItems: [
                    { item: 'SPA ja wellness sisebassein, jõusaal, tenniseväljak, lauatennis' },
                    { item: 'Hotell asub Marlita lahe kuldsetest liivadest jalutuskäigu kaugusel' },
                    { item: 'Veepark (7 veeluimäe, aeglase vooluga jõgi, jacuzzi, vabaõhubassein ja lasteala; avatud maist oktoobrini)' },
                    { item: 'Magevee välibassein (2,30 m)' },
                    { item: 'Lastele - lastebassein ja sisebassein, mis on FUN&SUN kontseptsiooni osa Toucan lasteklubist' },
                    { item: 'Premium Kõik Hinnas. Hotellis on 3 a la carte restorani, lisaks külalised saavad tasuta külastada üks neljast a ala carte restoranidest linnas' },
                    { item: 'Hotelli läheduses on liivane munitsipaalrand' },
                    
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Kipras, Protaras',
                aboutHotelLTItems: [
                    { item: 'Vandens pramogų parkas (7 kalneliai, lėtai tekanti upė, sūkurinė vonia, lauko baseinas ir zona vaikams; atidarytas nuo gegužės iki lapkričio)' },
                    { item: 'lauko baseinas su gėlu vandeniu (2,30 m)' },
                    { item: 'SPA, uždaras baseinas, treniruoklių salė, teniso kortai, stalo tenisas' },
                    { item: 'Vaikams - baseinas, uždaras baseinas, pagal FUN&SUN koncepciją: vaikų klubas Toucan' },
                    { item: 'Premium All Inclusive. 3 a la carte restoranai + svečiai gali apsilankyti viename iš 4 a la carte restoranų mieste' },
                    { item: 'Miesto, smėlio paplūdimys priešais viešbutį' },
                   
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Kipra, Protara',
                aboutHotelLVItems: [
                    { item: 'ūdens atrakciju parks (7 slidkalniņi, upe ar lēnu straumi, burbuļvanna, āra baseins un bērnu zona; atvērts no maija līdz oktobrim)' },
                    { item: 'āra baseins ar saldūdeni (2,30 m)' },
                    { item: 'SPA-un atveseļošanās iekštelpu baseins, trenažieru zāle, tenisa korts, galda teniss' },
                    { item: 'Bērniem - bērnu baseins, iekštelpu bērnu baseins, pēc  FUN&SUN koncepcijas: bērnu klubs Toucan' },
                    { item: 'Premium "Viss iekļauts". 3  A La Carte restorāni viesnīcā + viesnīcas viesi var bezmaksas apmeklēt vienu no 4 A La Carte restorāniem pilsētā' },
                    { item: 'Municipālā smilšu pludmale pretī viesnīcai' },
                    
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
        ],
        
        //HOTELS 3 ЕГИПЕТ
        country3Hotels : [
            //HOTEL 1
            {
                hotelName : 'FUN&SUN Albatros Palace 5*',
                background: 'background: url(https://www.tui.ru/getmedia/b615e0bc-a053-452a-9366-135d40212d30/albatros);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Africa/Egypt/Sharm-El-Sheikh/Sharm-El-Sheikh/FUN-SUN-Albatros-Palace',
                hotelLinkClient: '/hotel/africa-egypt-hurghada-hurghada-albatros__palace__resort/',
                
                //EE
                countryNameEE: 'Egiptus, Sharm El Sheikh (Montaza)',
                aboutHotelEEItems: [
                    { item: 'Suur ja hubane territoorium' },
                    { item: 'Uued toad (2019. a)' },
                    { item: '3 restorani hommikusöögi/lõunaks ning 4 restorani õhtusöögiks - tasuta' },
                    { item: '7 baari (kaasa arvatud 24 h baar - tasuta)' },
                    { item: '9 basseini täiskasvanutele ja lastele (1 soojendusega talvel)' },
                    { item: 'Oma veekeskus (18 veeliumäge)' },
                    { item: 'Ilusa korallrifiga rand' },
                    { item: 'Kai - 100 m' },
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Egiptas, Šarm el Šeichas (Montaza)',
                aboutHotelLTItems: [
                    { item: 'Didelė, jauki teritorija' },
                    { item: 'Nauji kambariai (2019 m.)' },
                    { item: '3 restoranai pusryčiams/pietums ir 4 restoranai vakarienei - nemokama' },
                    { item: '7 barai (įskaitant barą dirbantį 24 val., nemokama)' },
                    { item: '9 baseinai suaugusiems ir vaikams (1 iš jų šildomas žiemos metu)' },
                    { item: 'Nuosavas vandens pramogų parkas (18 vandens kalnelių)' },
                    { item: 'Paplūdimys su gražiu koraliniu rifu' },
                    { item: 'Pontonas - 100 m.' },
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Ēģipte, Šarmelšeiha (Montaza)',
                aboutHotelLVItems: [
                    { item: 'Liela omulīga teritorija' },
                    { item: 'Jauni numuri (2019.g)' },
                    { item: 'Brokastis/pusdienas notiek 3 restorānos, vakariņas - 4 restorānos (bezmaksas)' },
                    { item: '7 bāri (ieskaitot 24h bāru, bezmaksas)' },
                    { item: '9 baseini pieaugušajiem un bērniem (1 baseins ziemas sezonā ir apsildāms)' },
                    { item: 'Privāts ūdens atrakciju parks (18 ūdens slidkalniņi)' },
                    { item: 'Pludmale ar skaistu koraļļu rifu' },
                    { item: 'Pontons 100 m' },
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },

        ],
        
        //HOTELS 4 ЧЕРНОГОРИЯ
        country4Hotels : [
            //HOTEL 1
            {
                hotelName : 'FUN&SUN Pearl Beach Resort 4*',
                background: 'background: url(https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=ca9e5526-502a-4dfb-947b-9d6b1784d4a6&height=460);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Montenegro/Barska-Rivijera/chan/FUN-SUN-Pearl-Beach-Resort',
                hotelLinkClient: '/hotel/europe-montenegro-barska__rivijera-chan-fun__sun__pearl__beach__resort/',
                
                //EE
                countryNameEE: 'Черногория, Чань',
                aboutHotelEEItems: [
                    { item: 'Hotell esimesel rannajoonel' },
                    { item: 'Liiva- ja kivikliburand, hotellist 80 m kaugusel' },
                    { item: 'Randa peetakse üheks parimaks Montenegro rannaks' },
                    { item: 'Päikesevarjud ja lamamistoolid - tasuta. "Hotell-kuurort" - väga suure territooriumiga (umbes 100 000 m2)' },
                    { item: 'Suurte lodžadega avarad toad' },
                    { item: 'Suur lasteklubi' },
                    { item: 'Hotell pakub aktiivset animatsiooniprogrammi täiskasvanutele ja lastele ' },
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Juodkalnija, Chan',
                aboutHotelLTItems: [
                    { item: 'Viešbutis 1-oje linijoje' },
                    { item: 'Smėlio-žvyro paplūdimys, 80 m iki viešbučio' },
                    { item: 'Vienas geriausių paplūdimių Juodkalnijoje' },
                    { item: '"viešbutis-kurortas" su labai didele teritorija (apie 100 000 kv. m)' },
                    { item: 'Erdvūs kambariai su dideliais balkonais' },
                    { item: 'Didelis vaikų klubas' },
                    { item: 'Pirmas viešbutis Rusijos turistams su aktyvia animacine programa suaugusiems ir vaikams ' },
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Melnkalne, Chan',
                aboutHotelLVItems: [
                    { item: 'Pirmajā līnijā no pludmales' },
                    { item: 'Smilšu-oļu pludmale, 80 m attālumā no viesnīcas (viena no Melnkalnes labākajām pludmalēm)' },
                    { item: 'Saulessargi un atpūtas krēsli - bezmaksas' },
                    { item: '"Viesnīca-kūrorts" aizņem lielu teritoriju (100 000 kv.m)' },
                    { item: 'Plaši numuri ar lielam lodžijam' },
                    { item: 'Liels bērnu klubs ' },
                    { item: 'Viesnīca ar aktīvu animācijas programmu pieaugušajiem un bērniem' },
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },

        ],
        
        //HOTELS 5 ИСПАНИЯ
        country5Hotels : [
            //HOTEL 1
            {
                hotelName : 'FUN&SUN Sorra Daurada Splash 4*',
                background: 'background: url(https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=bf556f49-b34b-4fbe-bf37-0ab3976ab5ec&height=460);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Spain/Costa-De-Barcelona/Malgrat-De-Mar/Sorra-Daurada',
                hotelLinkClient: '/hotel/europe-spain-costa__de__barcelona-malgrat__de__mar-sorra__daurada/',
                
                //EE
                countryNameEE: 'Hispaania, Costa de Barcelona',
                aboutHotelEEItems: [
                    { item: 'Esimene FUN&SUN kontseptsiooniga hotell Hispaanias' },
                    { item: 'Hotell esimesel rannajoonel (üle tee)' },
                    { item: 'Hotellis tuleb toitlustus poolpansion (HB) ja "kõik hinnas" (AI)' },
                    { item: 'Avatakse suur lasteklubi' },
                    { item: 'Laste veekeskus' },
                    { item: 'Hotell on täielikult renoveeritud' },
                    { item: 'Rahulik piirkond' },
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Ispanija, Kosta de Barselona',
                aboutHotelLTItems: [
                    { item: 'Pirmasis FUN&SUN koncepcijos viešbutis Ispanijoje' },
                    { item: 'Viešbutis 1-oje linijoje, per kelią iki paplūdimio' },
                    { item: 'Dirba pagal HB ir AI maitinimo sistemas' },
                    { item: 'Didelis vaikų klubas, vaikų vandens pramogų parkas' },
                    { item: 'Viešbutis visiškai atnaujintas' },
                    { item: 'Ramus regionas' },
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Spānija, Kosta de Barselona',
                aboutHotelLVItems: [
                    { item: 'Pirmā viesnīca pēc FUN&SUN koncepcijas Spānijā' },
                    { item: 'Viesnīca atrodas pludmales pirmajā līnijā, pāri ceļam' },
                    { item: 'Viesnīca darbosies pēc puspansijas un "Viss iekļauts" ēdināšanas sistēmām' },
                    { item: 'Būs liels bērnu klubs' },
                    { item: 'Bērnu ūdens atrakciju parks' },
                    { item: 'Viesnīca ir pilnīgi renovēta' },
                    { item: 'Klusa atrašanas vieta' },
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },

        ],
        
        //HOTELS 5 ГРЕЦИЯ
        country6Hotels : [
            //HOTEL 1
            {
                hotelName : 'FUN&SUN Apollo Palace 5*',
                background: 'background: url(https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=1f8171ff-2fff-421f-9736-c20495904ff0&height=460);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Greece/Corfu/Messonghi/sentido-apollo-palace',
                hotelLinkClient: '/hotel/europe-greece-corfu-messonghi-sentido__apollo__palace/',
                
                //EE
                countryNameEE: 'Kreeka, Korfu',
                aboutHotelEEItems: [
                    { item: 'Esimene rannajoon, kõigest mõne sammu kaugusel rannast' },
                    { item: 'Lamamistoolid ja päikesevarjud ranna eraldatud tsoonis on hotellikülalistele tasuta' },
                    { item: 'Mugavad toad võimalusega majutada 2+2' },
                    { item: 'Suur territoorium, kus kasvavad oliivipuud' },
                    { item: '3 basseini, neist 2 lasteosaga' },
                    
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Graikija, Korfu',
                aboutHotelLTItems: [
                    { item: '1-oje viešbučių linijoje, keli žingsniai iki paplūdimio' },
                    { item: 'Skėčiai, gultai tam tikroje paplūdimio dalyje - nemokama' },
                    { item: 'Patogūs kambariai su apgyvendinimo galimybe 2+2' },
                    { item: 'Didelė viešbučio teritorija su alyvuogių giraite' },
                    { item: '3 baseinai (2 iš jų su vaikų skyriumi)' },
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Grieķija, Korfu',
                aboutHotelLVItems: [
                    { item: 'Pludmales pirmajā līnijā, dažu soļu attālumā no pludmales' },
                    { item: 'Atpūtas krēsli un saulessargi atsevišķā pludmales zonā, viesnīcas viesiem - bezmaksas' },
                    { item: 'Komfortablie numuri ar izmitināšanu 2+2' },
                    { item: 'Liela viesnīcas teritorija ar olīvkokiem' },
                    { item: '3 baseini, divi no tiem ir ar bērnu zonu' },
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },

        ],
        
    }
})

