const hotel = (image, place, name, oldPrice, newPrice, conditions, link) => ({image, place, name, oldPrice, newPrice, conditions, link});

const hotels = [
    hotel('https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=f2a7cde6-9bcb-4918-9339-94a3accf0129', 'Турция, Кемер, Гейнюк', 'FUN&SUN Miarosa Ghazal Resort 5', '80 364', '43 073', 'на двоих, 7 ночей', 'https://www.tui.ru/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__miarosa__ghazal__resort/'),
    hotel('https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=5bc1d530-5e06-4495-aae2-34e4acb454d6', 'Турция, Кемер, Гейнюк', 'FUN&SUN Comfort Beach Resort 5*', '73 764', '36 375', 'на двоих, 7 ночей', 'https://www.tui.ru/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__comfort__beach__resort/'),
    hotel('https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=ff3a5465-b130-4db4-a2e6-6c2cafba804a', 'Турция, Белек, Белек', 'FUN&SUN Miarosa Incekum Beach', '80 469', '33 346', 'на двоих, 7 ночей', 'https://www.tui.ru/hotel/europe-turkey-alanya-incekum-tui__fun__sun__miarosa__incekum__beach/')     
]

new Vue({
    el: '#fs-hot-hotels',
    data:{
        hotels: hotels,
        hotel: hotel
        
    }
})