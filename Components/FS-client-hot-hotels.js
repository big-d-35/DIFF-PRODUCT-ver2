const fsHotHotel = (fsimg, fsplace, fsname, fsoldPrice, fsnewPrice, fsconditions, fslink) => ({fsimg, fsplace, fsname, fsoldPrice, fsnewPrice, fsconditions, fslink});

const hotels = [
    hotel('https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=cc593b08-f217-4016-9484-63e15cc57fa2', 'Турция, Белек, Белек', 'FUN&amp;SUN River Resort Belek 5*', '108 830', '83 364', 'на двоих, 7 ночей', 'https://www.tui.ru/hotel/europe-turkey-belek-belek-tui__fun__sun__river__resort__belek/'),
    hotel('https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=17fe8be5-b956-4307-b7e6-2d23e4645d5c', 'Турция, Кемер, Финике', 'FUN&SUN Club Di Finica 5*', '83 364', '71 380', 'на двоих, 7 ночей', 'https://www.tui.ru/hotel/europe-turkey-kemer-finike-tui__fun__sun__club__di__finica/'),
    hotel('https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=5bc1d530-5e06-4495-aae2-34e4acb454d6', 'Турция, Кемер, Гейнюк', 'FUN&SUN Comfort Beach Resort 5*', '103 764', '89 804', 'на двоих, 7 ночей', 'https://www.tui.ru/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__comfort__beach__resort/')
]

new Vue({
    el: '#fs-hot-hotels',
    data:{
        hotels: hotels
        
    }
})