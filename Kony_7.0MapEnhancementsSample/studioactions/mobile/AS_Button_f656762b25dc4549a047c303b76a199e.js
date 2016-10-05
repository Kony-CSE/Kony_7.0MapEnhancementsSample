function AS_Button_f656762b25dc4549a047c303b76a199e(eventobject) {
    frmMap.map.locationData = [{
        lat: "17.4469390",
        lon: "78.3741190",
        name: "Using Image In Resources For Pin",
        desc: "Kony Solutions Hyderabad Office",
        //image:"mappin.png"
        image: {
            source: "mappin.png",
            sourceType: kony.map.PIN_IMG_SRC_TYPE_RESOURCES,
            anchor: kony.map.PIN_IMG_ANCHOR_BOTTOM_CENTER
        }
    }];
    frmMap.show();
}