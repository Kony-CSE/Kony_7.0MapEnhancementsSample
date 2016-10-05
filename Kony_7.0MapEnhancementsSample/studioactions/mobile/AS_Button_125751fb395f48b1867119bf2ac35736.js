function AS_Button_125751fb395f48b1867119bf2ac35736(eventobject) {
    var circleConfiguration = {
        id: "KonyOffice",
        centerLocation: {
            lat: "17.4469390",
            lon: "78.3741190"
        },
        radius: 5,
        navigateAndZoom: true,
        showCenterPin: false,
        circleConfig: {
            lineColor: "FF0000FF",
            lineWidth: 5
        }
    };
    frmMap.map.addCircle(circleConfiguration);
    frmMap.show();
}