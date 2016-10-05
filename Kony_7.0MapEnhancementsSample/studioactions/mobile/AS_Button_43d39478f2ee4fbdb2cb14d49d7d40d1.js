function AS_Button_43d39478f2ee4fbdb2cb14d49d7d40d1(eventobject) {
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