/*
Привет.
Ниже файл с информацией для ВСЕХ страниц TOUCAN для клиентского и агентского сайте (EE LT LV )

Для того чтобы изменить информацию достаточно заменить ее в этом файле и обновить файл который лежит на сайте tui.ru \ media \ новый сайт \ концепции \ TUI Toucan \ files \ VUE-Toucan-hot-hotels-ru-by-ua.js - ВНИМАНИЕ! именно нажать на кнопку заменить, иначе придется менять ссылку на всех страницах.

Обрати внимение на название переменных в файле html, если в конце есть указание к стране (например имя оканчивается myNameRU - значит это перевод на русский, myNameEE - значит это перевод на эстонский и тп)

Также обрати внимание на название ссылок - если оканчивается на Client - значит ссылка на клиент, если Agent - значит ссылка на агенте.

Некоторые страницы в консоли могут ругаться на отсутствие некоторых элементов, это нормально, просто у нас один файл на все страницы и соответственно на некоторых страницах нет элементов с других страниц, поэтому не обращай внимание.

*/

const toucanHotHotels = new Vue ({
    el: '#hotels-toucan',
    data: {
        titleEE: 'MINI TOUCAN LASTEKLUBID',
        titleLT: 'MINI TOUCAN VAIKŲ KLUBAI',
        titleLV: 'BĒRNU KLUBI MINI TOUCAN',
        
        //EE 
        country1EE: 'Türgi',
        country2EE: 'Küpros',
        country3EE: 'Montenegro',
        country4EE: 'Itaalia',
        country5EE: 'Hispaania',
        country6EE: 'Venemaa',
        country7EE: 'AÜE',
        
        //LT 
        country1LT: 'Turkija',
        country2LT: 'Kipras',
        country3LT: 'Juodkalnija',
        country4LT: 'Italija',
        country5LT: 'Ispanija',
        country6LT: 'Rusija',
        country7LT: 'JAE',
        
        //LV 
        country1LV: 'TURCIJA',
        country2LV: 'KIPRA',
        country3LV: 'Melnkalne',
        country4LV: 'Itālija',
        country5LV: 'SPĀNIJA',
        country6LV: 'Krievija',
        country7LV: 'AAE',
        
        //HOTELS 1 ТУРЦИЯ
        country1Hotels : [
            //HOTEL
            {
                hotelName : 'Pegasos Club 4*',
                background: 'background: url(https://www.tui.ru/getmedia/960b240d-2407-4940-8d3e-247396f9eb4a/T12_hotel_Pegasos-Club);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Club',
                hotelLinkClient: '/hotel/europe-turkey-alanya-incekum-pegasos__club/',
                
                //EE
                countryNameEE: 'Türgi, Incekum',
                aboutHotelEEItems: [
                    { item: 'Liivarand' },
                    { item: 'Laugjas vetteminek' },
                    { item: 'Välibasseinid' },
                    { item: 'SPA' },
                    { item: 'Tasuta täispuhutavad atraktsioonid meres' },
                    { item: 'Free Wi-Fi (territooriumil)' }
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Inčekum',
                aboutHotelLTItems: [
                    { item: 'Smėlio paplūdimys' },
                    { item: 'Nuožulnus įbridimas į jūrą' },
                    { item: 'Lauko baseinai' },
                    { item: 'SPA' },
                    { item: 'Nemokami pripučiami atrakcionai paplūdimyje' },
                    { item: 'Nemokamas Wi-Fi (viešbučio teritorijoje)' }
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Indžekuma',
                aboutHotelLVItems: [
                    { item: 'Smilšu pludmale' },
                    { item: 'Lēzena ieeja pludmalē' },
                    { item: 'Āra baseini' },
                    { item: 'SPA' },
                    { item: 'Bezmaksas piepūšamas atrakcijas jūrā' },
                    { item: 'Bezmaksas Wi-Fi (teritorijā)' }
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            
            //HOTEL
            {
                hotelName : 'Pegasos Resort 5*',
                background: 'background: url(https://www.tui.ru/getmedia/78cdee2e-c69d-435e-ade3-94320e66a3f3/T13_Hotel_PegasosResort);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Resort',
                hotelLinkClient: '/hotel/europe-turkey-alanya-incekum-pegasos__resort/',
                
                //EE
                countryNameEE: 'Türgi, Incekum',
                aboutHotelEEItems: [
                    { item: 'Luksuslik hotellikompleks' },
                    { item: 'Liivarand' },
                    { item: 'Laugjas vetteminek' },
                    { item: 'Väli- ja sisebasseinid' },
                    { item: 'SPA' },
                    { item: 'Tasuta täispuhutavad atraktsioonid meres' },
                    { item: 'Tasuta Wi-Fi (territooriumil)' }
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Inčekum',
                aboutHotelLTItems: [
                    { item: 'Modernus viešbučių kompleksas' },
                    { item: 'Smėlio paplūdimys' },
                    { item: 'Nuožulnus įbridimas į jūrą' },
                    { item: 'Lauko ur uždaras baseinai' },
                    { item: 'SPA' },
                    { item: 'Nemokami pripučiami atrakcionai paplūdimyje' },
                    { item: 'Nemokamas Wi-Fi (viešbučio teritorijoje)' }
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Indžekuma',
                aboutHotelLVItems: [
                    { item: 'Grezns viesnīcu komplekss' },
                    { item: 'Smilšu pludmale' },
                    { item: 'Lēzena ieeja jūrā' },
                    { item: 'Āra un iekštelpu baseini' },
                    { item: 'SPA' },
                    { item: 'Bezmaksas piepūšamas atrakcijas jūrā' },
                    { item: 'Bezmaksas Wi-Fi (teritorijā)' }
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            
            //HOTEL
            {
                hotelName : 'Pegasos Royal 5*',
                background: 'background: url(https://www.tui.ru/getmedia/9a66b6c3-5dfc-4913-99ae-2d5fa8c4f70f/T14_Hotel_Pegasos-Royal);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Royal',
                hotelLinkClient: '/hotel/europe-turkey-alanya-incekum-pegasos__royal/',
                
                //EE
                countryNameEE: 'Türgi, Incekum',
                aboutHotelEEItems: [
                    { item: 'Kõrgetasemeline teenindus' },
                    { item: 'Kahetoalised toad' },
                    { item: 'Liivarand' },
                    { item: 'Laugjas vetteminek' },
                    { item: 'Väli- ja sisebasseinid' },
                    { item: 'Veepark' },
                    { item: 'SPA' },
                    { item: 'Tasuta täispuhutavad atraktsioonid meres' },
                    { item: 'Tasuta Wi-Fi (territooriumil)' }
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Inčekum',
                aboutHotelLTItems: [
                    { item: 'Aukštas aptarnavimo lygis' },
                    { item: 'Dviejų kambarių apartamentai' },
                    { item: 'Smėlio paplūdimys' },
                    { item: 'Nuožulnus įbridimas į jūrą' },
                    { item: 'Lauko ir uždaras baseinai' },
                    { item: 'Vandens pramogų parkas' },
                    { item: 'SPA' },
                    { item: 'Nemokami pripučiami atrakcionai paplūdimyje' },
                    { item: 'Nemokamas Wi-Fi (viešbučio teritorijoje)' }
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Indžekuma',
                aboutHotelLVItems: [
                    { item: 'Augsts apkalpošanas līmenis' },
                    { item: 'Divistabu numuri' },
                    { item: 'Smilšu pludmale' },
                    { item: 'Lēzena ieeja pludmalē' },
                    { item: 'Āra un iekštelpu baseini' },
                    { item: 'Ūdens atrakciju parks' },
                    { item: 'SPA' },
                    { item: 'Bezmaksas piepūšamas atrakcijas jūrā' },
                    { item: 'Bezmaksas Wi-Fi (teritorijā)' }
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            
            //HOTEL
            {
                hotelName : 'Kilikya Resort Camyuva 5*',
                background: 'background: url(https://www.tui.ru/getmedia/2e390b7d-5b2a-4434-9933-5c3749992bed/f_Kilikya-Resort-min);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Camyuva/Kilikya-Resort-Camyuva',
                hotelLinkClient: '/hotel/europe-turkey-kemer-camyuva-kilikya__resort__camyuva/',
                
                //EE
                countryNameEE: 'Türgi, Kemer',
                aboutHotelEEItems: [
                    { item: 'Soodsa hinnaga hotell' },
                    { item: 'Sinise lipuga rand' },
                    { item: 'Jalgratta rent (lisatasu eest)' },
                    { item: 'tasuta Wi-Fi (raamatukogus)' },
                    { item: 'Baar on avatud ööpäevaringselt' }
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Turkija, Kemeras',
                aboutHotelLTItems: [
                    { item: 'žema kaina' },
                    { item: 'paplūdimys apdovanotas Mėlynąją vėliava' },
                    { item: 'dviračių nuoma (mokama)' },
                    { item: 'nemokamas Wi-Fi bibliotekoje' },
                    { item: 'baras veikiantis visą parą' }
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Turcija, Kemera',
                aboutHotelLVItems: [
                    { item: 'zema cenu kategorija' },
                    { item: 'pludmalei piešķirts Zilais karogs' },
                    { item: 'velosipēdu noma (maksas)' },
                    { item: 'bezmaksas Wi-Fi bibliotēkā' },
                    { item: 'bārs 24h' }
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            
        ],
        
        //HOTELS 2 АНДОРРА
        country2Hotels : [
            //HOTEL
            {
                hotelName : 'Andorra Center 4*',
                background: 'background: url(https://www.tui.ru/getmedia/cd352184-64b1-4c27-aa64-af2f947fd8b8/T17_Hotel_Andorra-Center);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Andorra/grandvalira/Andorra-La-Vella/Andorra-Center',
                
                //EE
                countryNameEE: 'Andorra, Grandvalira',
                aboutHotelEEItems: [
                    { item: 'Asub Andorra La Vella kesklinnas' },
                    { item: 'Asub maalilises kohas' },
                    { item: 'SPA (tasuta)' },
                    { item: 'Sisebassein' },
                    { item: 'Tasuta WI-FI (tubades)' },
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Andora, Grandvalira',
                aboutHotelLTItems: [
                    { item: 'Andora la Velja miesto centras' },
                    { item: 'Įsikūręs vaizdingoje vietoje' },
                    { item: 'SPA (nemokama)' },
                    { item: 'Uždaras baseinas' },
                    { item: 'Nemokamas WI-FI (kambariuose)' },
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Andora, Grandvalira',
                aboutHotelLVItems: [
                    { item: 'Andora La Velja pilsētas centrs' },
                    { item: 'Atrodas gleznainā vietā' },
                    { item: 'SPA (bezmaksas)' },
                    { item: 'Iekštelpu baseins' },
                    { item: 'Bezmaksas WI-FI (numuros)' },
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            
            //HOTEL
            {
                hotelName : 'La Mola 2*',
                background: 'background: url(https://www.tui.ru/getmedia/200bf094-a279-43ce-9638-2dc53ca0fafd/T18_Hotel_La-Mola);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Andorra/grandvalira/Escaldes/Mola-Park-Atiram',
                
                //EE
                countryNameEE: 'Andorra, Grandvalira',
                aboutHotelEEItems: [
                    { item: 'Encamp kesklinna läheduses' },
                    { item: 'Suusatõstuki läheduses' },
                    { item: 'Tasuta WI-FI (fuajees)' },
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Andora, Grandvalira',
                aboutHotelLTItems: [
                    { item: 'Netoli iki Enkampo centro' },
                    { item: 'Netoli keltuvo' },
                    { item: 'Nemokamas WI-FI (fojė)' },
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Andora, Grandvalira',
                aboutHotelLVItems: [
                    { item: 'Netālu no Enkampa kūrorta centra' },
                    { item: 'Tuvu pacēlājam' },
                    { item: 'Bezmaksas WI-FI (vestibilā)' },
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            
            //HOTEL
            {
                hotelName : 'Cosmos Andorra 3*',
                background: 'background: url(https://www.tui.ru/getmedia/1cd99d92-6811-42e2-977b-f3902aff35f0/T19_Hotel_Cosmos-Andorra);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Andorra/grandvalira/Andorra-La-Vella/Cosmos-Andorra',
                
                //EE
                countryNameEE: 'Andorra, Grandvalira',
                aboutHotelEEItems: [
                    { item: 'Hotell asub Escaldes kesklinnas' },
                    { item: '400m. kaugusel on Caldea Thermal Spa' },
                    { item: 'Standardsed toad ja apartamendid' },
                    { item: 'Tasuta WI-FI (tubades)' },
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Andora, Grandvalira',
                aboutHotelLTItems: [
                    { item: 'Įsikūręs Eskaldes centre' },
                    { item: '400 m iki Kaldea terminio komplekso' },
                    { item: 'Standartiniai kambariai ir apartamentai' },
                    { item: 'Nemokamas WI-FI (kambariuose)' },
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Andora, Grandvalira',
                aboutHotelLVItems: [
                    { item: 'Eskaldes pilsētas centrs' },
                    { item: '400 m attālumā no "Caldea" termālā kompleksa' },
                    { item: 'Standarta numuri un apartamenti' },
                    { item: 'Bezmaksas WI-FI (numuros)' },
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
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
                
                //EE
                countryNameEE: 'Küpros, Ayia Napa',
                aboutHotelEEItems: [
                    { item: 'Renoveeritud 2018 astal' },
                    { item: 'Ayia Napa parima ranna Nissi Beach läheduses' },
                    { item: 'Veepark WaterWorld (hotelli läheduses)' },
                    { item: 'Liivarand' },
                    { item: 'Sauna (lisatasu eest)' },
                    { item: 'Tasuta WI-FI (fuajees)' },
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Kipras, Ayia Napa',
                aboutHotelLTItems: [
                    { item: '2018 metais atlikta renovacija' },
                    { item: 'Šalia Nissi Beach paplūdimys' },
                    { item: 'Vandens pramogų parkas WaterWorld (netoli viešbučio)' },
                    { item: 'Smėlio paplūdimys' },
                    { item: 'Sauna (mokama)' },
                    { item: 'Nemokamas WI-FI (fojė)' },
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Kipra, Aijanapa',
                aboutHotelLVItems: [
                    { item: 'Renovācija-2018 .g.' },
                    { item: 'Blakus labākajai Aijanapas pludmalei "Nissi Beach"' },
                    { item: 'Ūdens atrakciju parks "WaterWorld" (netālu no viesnīcas)' },
                    { item: 'Smilšu pludmale' },
                    { item: 'Sauna (maksas)' },
                    { item: 'Bezmaksas WI-FI (vestibilā)' },
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            
            //HOTEL
            {
                hotelName : 'St. Raphael Resort 5*',
                background: 'background: url(https://www.tui.ru/getmedia/42d77e04-8b00-4095-890d-7df28ff5b30b/f_St-Raphael-Resort-Aerial-View-007_f_1);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Cyprus/Limasol-Resort/Limasol-City/St-Raphael-Resort',
                hotelLinkClient: '/hotel/europe-cyprus-limasol__resort-limasol__city-st__raphael__resort/',
                
                //EE
                countryNameEE: 'Küpros, Limasol',
                aboutHotelEEItems: [
                    { item: 'Majutuse toad 2 täiskasvanu + 3 last (Standard Inland View Rooms, 35 ruutmeetrit)' },
                    { item: 'Näituste / konverentside saalid, pindala 500 ruutmeetrit' },
                    { item: 'Isiklik liivarand: tasuta lamamistoolid ja päikesevarjud' },
                    { item: 'Rannas on Grab & Go restoran' },
                    { item: 'Pakutakse Ultra Kõik Hinnas toitlustamist' },
                    { item: 'Sukeldumise sissejuhatav tund basseinis (Ultra All Inclusive)' },
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Kipras, Limasolis',
                aboutHotelLTItems: [
                    { item: 'Kambariai talpinantys 2+3 asm. (Standard Inland View Rooms, 35 kv.m)' },
                    { item: 'Konferencijų salės, plotas - 500 kv.m' },
                    { item: 'СNuosavas smėlio paplūdimys: skėčiai ir gultai - nemokama' },
                    { item: 'Restoranas paplūdimyje pagal Grab & Go sistemą' },
                    { item: 'Maitinimas Ultra All Inclusive' },
                    { item: 'Įvadinė nardymo pamoka baseine (pasirinkus Ultra All Inclusive maitinimo sistemą)' },
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Kipra, Limasola',
                aboutHotelLVItems: [
                    { item: 'Numuri ar izmitināšanas iespējam: 2 pieaugušie+3 bērni (Standard Inland View Rooms, 35 kv.m )' },
                    { item: 'Konferenču/izstāžu zāles 500 kv.m ' },
                    { item: 'Privātā smilšu pludmale: atpūtas krēsli un saulessargi - bezmaksas' },
                    { item: 'Pludmales restorāns pēc sistēmas "Grab & Go"' },
                    { item: 'Ēdināšana pēc sistēmas "Ultra Viss iekļauts"' },
                    { item: 'Zemūdens niršanas nodarbība baseinā ("Ultra Viss iekļauts" viesiem)' },
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            //HOTEL
            {
                hotelName : 'Tasia Maris Garden 3*',
                background: 'background: url(https://www.tui.ru/getmedia/1673daeb-3112-43fa-a2e7-04a41da112c4/f_PreviewImage_f_7);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/tasia-maris-gardens',
                hotelLinkClient: '/hotel/europe-cyprus-ayia__napa-ayia__napa-tasia__maris__gardens/',
                
                //EE
                countryNameEE: 'Küpros, Ayia Napa',
                aboutHotelEEItems: [
                    { item: 'Ayia Napa kesklinnas' },
                    { item: 'Avarad toad on ehitatud korterite põhimõttel' },
                    { item: 'Tubadel on rõdu / terrass ja täielikult varustatud köögid' },
                    { item: 'Ilusad alad, millel on avar bassein ja 2-korruselised bungalowe' },
                    { item: 'Munitsipaalliivarand 50 m. kõrgusel' },
                    { item: 'Nissi rand 500 meetrit' },
                    { item: 'Mullivann, päikeseterrass (tasuta lamamistoolide ja päikesevarjudega)' },
                    
                    
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Kipras, Ayia Napa',
                aboutHotelLTItems: [
                    { item: 'Ayia Napos centre' },
                    { item: 'Erdvūs kambariai pastatyti butų principu' },
                    { item: 'Kambariuose yra balkonas / terasa ir virtuvės su visa įranga.' },
                    { item: 'Puikūs plotai su erdviu baseinu ir dviejų aukštų vasarnamiais' },
                    { item: 'Savivaldybės smėlio paplūdimys 50 m atstumu' },
                    { item: 'Nissi paplūdimys 500 metrų' },
                    { item: 'Sūkurinė vonia, saulės terasa (su nemokamais gultais ir saulės voniomis)' },
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Kipra, Aijanapa',
                aboutHotelLVItems: [
                    { item: 'Aijanapas centrā' },
                    { item: 'Plašās istabas ir veidotas pēc dzīvokļu principa' },
                    { item: 'Numuriem ir balkons / terase un pilnībā aprīkotas virtuves.' },
                    { item: 'Skaista teritorija ar plašu baseinu un divstāvu vasarnīcām' },
                    { item: 'Pašvaldības smilšu pludmale 50 m attālumā' },
                    { item: 'Nissi pludmale 500 metri' },
                    { item: 'Džakuzi, sauļošanās terase (ar bezmaksas sauļošanās krēsliem un saulessargiem)' },
                ],
                buttonLV : 'Izvēlēties ceļojumu',
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
                
                //EE
                countryNameEE: 'Montenegro, Budva',
                aboutHotelEEItems: [
                    { item: 'Üle tee on 1600 m pikk avalik liiva- ja kiviklibu rand' },
                    { item: 'elav muusika' },
                    { item: 'Pakutakse Kõik Hinnas toitlustamist' },
                    { item: 'Üks kord nädalas: kohaliku veini degusteerimise õhtu, terviseala puuviljamahladega, folklooriõhtu (Kõik hinnas)' },
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Juodkalnija, Budva',
                aboutHotelLTItems: [
                    { item: 'smėlio-žvyro paplūdimys, ilgis 1600 m, per kelią' },
                    { item: 'gyva muzika' },
                    { item: 'maitinimas All Inclusive' },
                    { item: '1 kartą per savaitę: vietinio vyno degustacija, šviežiai spaustos sultys, folkloro vakaras (pasirinkus All Inclusive maitinimo sistemą)' },
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Melnkalne, Budva',
                aboutHotelLVItems: [
                    { item: 'municipālā smilšu-oļu pludmale, pāri ceļam, garums - 1600 m' },
                    { item: 'dzīvā mūzika' },
                    { item: 'ēdināšana pēc "Viss iekļauts" sistēmas' },
                    { item: 'reizi nedēļā: vietējā ražojuma vīna degustācijas vakars; "veselības stūrītis" ar augļu sulām, folkloras vakars ("Viss iekļauts") viesiem)' },
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            
            //HOTEL
            {
                hotelName : 'Castellastva 4*',
                background: 'background: url(https://www.tui.ru/getmedia/3e5ec649-f74f-417b-a68d-e63f1705f0b3/kastellastva-min);background-position: center;background-size: cover',
                hotelLinkAgent: '/tours/europe/montenegro/budvanska-rivijera/petrovac/castellastva/',
                hotelLinkClient: '/hotel/europe-montenegro-budvanska__rivijera-petrovac-castellastva/',
                
                //EE
                countryNameEE: 'Montenegro, Petrovac',
                aboutHotelEEItems: [
                    { item: 'Üle tee on 600 m pikk avalik liiva- ja kiviklibu rand' },
                    { item: 'Soodne hotell turistidele, kellele meeldib külastada vaatamisväärsusi' },
                    
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Juodkalnija, Petrovacas',
                aboutHotelLTItems: [
                    { item: 'smėlio-žvyro paplūdimys, ilgis 600 m, per kelią' },
                    { item: 'viešbutis rekomenduojamas norintiems labiau pažinti šalį' },
                    
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Melnkalne, Petrovaca',
                aboutHotelLVItems: [
                    { item: 'municipālā smilšu-oļu pludmale, pāri ceļam, garums - 600 m ' },
                    { item: 'ekonomiskās klases viesnīca, apskates objektu cienītājiem ' },
                    
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
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
                
                //EE
                countryNameEE: 'Calabria, Pizzo',
                aboutHotelEEItems: [
                    { item: 'Asub keset pargi' },
                    { item: 'Kõik Hinnas' },
                    { item: 'fuajees tasuta WI-FI' },
                    { item: '2 välibasseini' },
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Kalabrija, Picco',
                aboutHotelLTItems: [
                    { item: 'Šalia parko' },
                    { item: 'Maitinimas All Inclusive' },
                    { item: 'Smėlio paplūdimys' },
                    { item: 'Nemokamas WI-FI fojė' },
                    { item: '2 lauko baseinai' },
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Kalabrija, Picco',
                aboutHotelLVItems: [
                    { item: 'Atrodas parka vidū' },
                    { item: 'Ēdināšana "Viss iekļauts"' },
                    { item: 'Smilšu pludmale' },
                    { item: 'Bezmaksas WI-FI vestibilā' },
                    { item: '2 āra baseini' },
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
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
                
                //EE
                countryNameEE: 'Hispaania, Salou',
                aboutHotelEEItems: [
                    { item: 'Avar territoorium, isiklikud "oaasid" basseinidega' },
                    { item: '5+ toitlustamine, palju puuvilju ja mereande' },
                    { item: 'Suurepärane SPA-keskus' },
                    { item: 'Läheduses Aquopolise veepark ja delfinaarium' },
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Ispanija, Salou',
                aboutHotelLTItems: [
                    { item: 'Didelė teritorija' },
                    { item: 'Maitinimas kaip 5+ viešbutyje, daug vaisių ir jūros gėrybių' },
                    { item: 'Geras SPA centras' },
                    { item: 'Šalia Aquopolis vandens parkas su delfinariumu' },
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Spānija, Salou',
                aboutHotelLVItems: [
                    { item: 'Liela teritorija, privātās "oāzes" ar baseiniem' },
                    { item: 'Ēdināšana 5+, daudz augļu un jūras velšu' },
                    { item: 'Lieliskais Spa centrs' },
                    { item: 'Blakus atrodas "Aquopolis" ūdens atrakciju parks ar delfināriju' },
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
            
            
            //HOTEL
            /*{
                hotelName : 'Don Juan Tossa 4*',
                background: 'background: url(https://www.tui.ru/getmedia/d163d8fb-7186-4929-96d2-27b24b9a144e/hontana-hossa-min);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Spain/Costa-Brava/Tossa-De-Mar/Hotansa-Tossa',
                hotelLinkClient: '/hotel/europe-spain-costa__brava-tossa__de__mar-don__juan__tossa/',
                
                //EE
                countryNameEE: 'Hispaania, Tossa de Mar',
                aboutHotelEEItems: [
                    { item: 'Lähedal maaliline laht' },
                    { item: 'Terassil on bassein vaatega linnusele' },
                    { item: 'Tenniseväljak' },
                    { item: 'Parim hinna ja kvaliteedi suhe' },
                    
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'Ispanija, Tossa de Mar',
                aboutHotelLTItems: [
                    { item: 'Šalia vaizdingos įlankos' },
                    { item: 'Baseinas terasoje su vaizdu į pilį' },
                    { item: 'Teniso kortas' },
                    { item: 'Geras kainos ir kokybės santykis' },
                    
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'Spānija, Tossa de Mara',
                aboutHotelLVItems: [
                    { item: 'Blakus atrodas gleznais līcis' },
                    { item: 'Terases baseins ar skatu uz cietoksni' },
                    { item: 'Tenisa korts' },
                    { item: 'Labākās cenas un kvalitātes attiecība' },
                    
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },*/
            
            
        ],
        
                
        //HOTELS 8 OAE
        country8Hotels : [
            //HOTEL
            /*{
                hotelName : 'Al Hamra Village Golf & Beach Resort 4*',
                background: 'background: url(https://www.tui.ru/getmedia/7d1ba713-d51b-4603-96d0-532147ae9b8a/T15_Hotel_Al-Hamra-Village-Golf-Beach-Resort-1);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-Beach-Hotels/al-hamra-village-golf-beach-resort',
                hotelLinkClient: '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__village__golf__beach__resort/',
                
                //EE
                countryNameEE: 'AÜE, Ras Al Khaimah',
                aboutHotelEEItems: [
                    { item: 'Avarad toad (vähemalt 28 ruutmeetrit)' },
                    { item: 'Basseinile juurdepääsuga toad' },
                    { item: 'Täiuslik valge liivaga rand' },
                    { item: 'Suur bassein (500 ruutmeetrit)' },
                    { item: 'SPA' },
                    { item: 'Maalilised golfiväljakud' },
                    { item: 'Vaade kõige ilusamale ilutulestikule: Ras Al Khaimah (Aastavahetus)' },
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'JAE, Ras al Chaima',
                aboutHotelLTItems: [
                    { item: 'Erdvūs kambariai (min.28 kv.m)' },
                    { item: 'Kambariai su išėjimu prie baseino' },
                    { item: 'Balto smėlio paplūdimys' },
                    { item: 'Didelis baseinas (500 kv.m)' },
                    { item: 'SPA' },
                    { item: 'Golfo laukas' },
                    { item: 'Graži aplinka' },
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'AAE, Rāselhaima',
                aboutHotelLVItems: [
                    { item: 'Plaši numuri (min.28 kv.m)' },
                    { item: 'Numuri ar izeju pie baseina' },
                    { item: 'Ideāla baltu smilšu pludmale' },
                    { item: 'Liels baseins (500 kv.m )' },
                    { item: 'SPA' },
                    { item: 'Gleznaini golfa laukumi' },
                    { item: 'Skats uz skaistāko uguņošanu Rāselhaimas pilsētā (Jaunajā gadā)' },
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },*/
            
            
            //HOTEL
            /*{
                hotelName : 'Al Hamra Residence 5*',
                background: 'background: url(https://www.tui.ru/getmedia/d01735ab-c45f-46a4-ba4d-d107366f623c/T16_hotel_Al-Hamra-Residence);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-residence',
                hotelLinkClient: '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__residence/',
                
                //EE
                countryNameEE: 'AÜE, Ras Al Khaimah',
                aboutHotelEEItems: [
                    { item: 'Suured toad (vähemalt 83 ruutmeetrit)' },
                    { item: 'Täisvarustusega köök (igas toas)' },
                    { item: 'Täiuslik valge liivaga rand' },
                    { item: 'Suur bassein (500 ruutmeetrit)' },
                    { item: 'Vaade kõige ilusamale ilutulestikule: Ras Al Khaimah (Aastavahetus)' },
                    
                    
                ],
                buttonEE : 'Otsi reisi',
                
               //LT
                countryNameLT: 'JAE, Ras al Chaima',
                aboutHotelLTItems: [
                    { item: 'Erdvūs kambariai (min.83 kv.m)' },
                    { item: 'Pilnai įrengta virtuvė (kiekviename kambaryje)' },
                    { item: 'Balto smėlio paplūdimys' },
                    { item: 'Didelis baseinas (500 kv.m)' },
                    { item: 'Graži aplinka' },
                    
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'AAE, Rāselhaima',
                aboutHotelLVItems: [
                    { item: 'Plaši numuri (min.83 kv.m)' },
                    { item: 'Pilnībā aprīkota virtuve (katrā numurā)' },
                    { item: 'Ideāla baltu smilšu pludmale' },
                    { item: 'Liels baseins (500 kv.m )' },
                    { item: 'Skats uz skaistāko uguņošanu Rāselhaimas pilsētā (Jaunajā gadā)' },
                    
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },*/
            
            //HOTEL
            {
                hotelName : 'Blue Diamond Alsalam Resort 5*',
                background: 'background: url(https://www.tui.ru/getmedia/722dc212-70d8-46e0-87d7-cec17f7d3109/f_Hotel-Exterior_f_8);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Asia/UAE/Fujairah/Fujairah-beach-hotels/blue-diamond-alsalam-resort',
                hotelLinkClient: '/hotel/asia-uae-fujairah-fujairah__beach__hotels-blue__diamond__alsalam__resort/',
                
                //EE
                countryNameEE: 'AÜE, Fujairah',
                aboutHotelEEItems: [
                    { item: 'Avarad toad ilusa interjööriga' },
                    { item: 'Vaade hotellitubadest - rand / jahtklubi või linn' },
                    { item: 'Standartsed toad ja 1-2 magamistoa apartamendid köögiga' },
                    { item: 'Ümbritsetud lainemurdjaga isiklik liivarand, laugjas vetteminek' },
                    { item: 'Lastebassein, sügavus 65 cm ' },
                    { item: 'Suur bassein hotelli ees' },
                    { item: 'Relax bassein hotelli katusel' },
                    { item: 'Avar jõusaal kaasaegsete seadmetega' },
                    
                    
                ],
                buttonEE : 'Otsi reisi',
                
                //LT
                countryNameLT: 'JAE, Fujairah',
                aboutHotelLTItems: [
                    { item: 'Erdvūs kambariai su nuostabiu interjeru' },
                    { item: 'Vaizdas iš viešbučio kambarių - į paplūdimį / į jachtų klubą arba į miestą' },
                    { item: 'Standartiniai kambarių tipai ir įrengti 1–2 kambarių butai' },
                    { item: 'Prieplaukos apsuptas privatus smėlio paplūdimys su sklandžiu įėjimu į vandenį' },
                    { item: 'Vaikų baseinas 65 cm gylyje' },
                    { item: 'Didelis baseinas priešais viešbutį' },
                    { item: 'Poilsis ant viešbučio stogo' },
                    { item: 'Erdvi sporto salė su modernia įranga' },
                    
                    
                ],
                buttonLT : 'Pasirinkti',
                
                //LV
                countryNameLV: 'AAE, Fudžeira',
                aboutHotelLVItems: [
                    { item: 'Plaši numuri ar skaistu interjeru' },
                    { item: 'Skats uz pludmali/jahtu piestātni/ pilsētu' },
                    { item: 'Standarta numuri un vienvietīgie/divvietīgie apartamenti ar virtuvi' },
                    { item: 'Privātā smilšu pludmale ar molu un lēzenu ieeju ūdenī' },
                    { item: 'Bērnu baseins 65 сm ' },
                    { item: 'Pretī vienīcas ēkai ir liels baseins' },
                    { item: 'Relax-baseins viesnīcas jumtā' },
                    { item: 'Plaša trenažieru zāle ar mūsdienīgu aprīkojumu' },
                    
                    
                ],
                buttonLV : 'Izvēlēties ceļojumu',
            },
        ],
    }
})