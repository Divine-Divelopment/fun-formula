import ymaps from "ymaps";

ymaps
    .load()
    .then(maps => {
        const map = new maps.Map("map", {
            center: [55.782623, 37.723367],
            zoom: 18,
            controls: ["zoomControl"],
            lang: "ru-RU",
        });
        const myPlacemark = new maps.Placemark(map.getCenter(), {
            hintContent: "Собственный значок метки",
            balloonContent: "Москва, ул.Щербаковская, д.3,  БЦ «Щербаковский», 12 этаж, офиc №1212"
        }, {
            iconLayout: "default#image",
            iconImageHref: "img/pin.png",
            iconImageSize: [30, 45],
            iconImageOffset: [-30, -45]
        });

        map.geoObjects.add(myPlacemark);
        map.behaviors.disable("scrollZoom");

        window.addEventListener("resize", function () {
            map.container.fitToViewport();
        });
    })
    .catch(error => console.log("Failed to load Yandex Maps", error));
