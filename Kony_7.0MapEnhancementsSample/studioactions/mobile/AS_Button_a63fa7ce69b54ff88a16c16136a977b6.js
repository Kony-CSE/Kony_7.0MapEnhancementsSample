function AS_Button_a63fa7ce69b54ff88a16c16136a977b6(eventobject) {
    var polygonDataForAlabama = {
        id: "Alabama",
        locations: [{
            lat: "35.0041",
            lon: "-88.1955"
        }, {
            lat: "34.9918",
            lon: "-85.6068"
        }, {
            lat: "32.8404",
            lon: "-85.1756"
        }, {
            lat: "32.2593",
            lon: "-84.8927"
        }, {
            lat: "32.1535",
            lon: "-85.0342"
        }, {
            lat: "31.7947",
            lon: "-85.1358"
        }, {
            lat: "31.5200",
            lon: "-85.0438"
        }, {
            lat: "31.3384",
            lon: "-85.0836"
        }, {
            lat: "31.2093",
            lon: "-85.1070"
        }, {
            lat: "31.0023",
            lon: "-84.9944"
        }, {
            lat: "30.9953",
            lon: "-87.6009"
        }, {
            lat: "30.9423",
            lon: "-87.5926"
        }, {
            lat: "30.8539",
            lon: "-87.6256"
        }, {
            lat: "30.6745",
            lon: "-87.4072"
        }, {
            lat: "30.4404",
            lon: "-87.3688"
        }, {
            lat: "30.1463",
            lon: "-87.5240"
        }, {
            lat: "30.1546",
            lon: "-88.3864"
        }, {
            lat: "31.8939",
            lon: "-88.4743"
        }, {
            lat: "34.8938",
            lon: "-88.1021"
        }, {
            lat: "34.9479",
            lon: "-88.1721"
        }, {
            lat: "34.9107",
            lon: "-88.1461"
        }],
        navigateAndZoom: true,
        polygonConfig: {
            lineColor: "0xFF0000FF",
            fillColor: "0xFF0000FF",
            lineWidth: 3
        }
    };
    var polygonDataForClorado = {
        id: "Clorado",
        locations: [{
            lat: "37.0004",
            lon: "-109.0448"
        }, {
            lat: "36.9949",
            lon: "-102.0424"
        }, {
            lat: "41.0006",
            lon: "-102.0534"
        }, {
            lat: "40.9996",
            lon: "-109.0489"
        }, {
            lat: "37.0004",
            lon: "-109.0448"
        }],
        navigateAndZoom: true,
        polygonConfig: {
            lineColor: "0x000FF0FF",
            fillColor: "0x000FF0FF",
            lineWidth: 3
        }
    };
    frmMap.map.addPolygon(polygonDataForAlabama);
    frmMap.map.addPolygon(polygonDataForClorado);
    frmMap.show();
}