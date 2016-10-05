function AS_Button_d599400509564adb9755ad07bb5995fd(eventobject) {
    var imageObj = kony.image.createImage("bluemappin.png");
    frmMap.map.locationData = [{
        lat: "17.4469390",
        lon: "78.3741190",
        name: "Using ImageObject For Pin",
        desc: "Kony Solutions Hyderabad Office",
        //image:"mappin.png"
        image: {
            source: imageObj,
            sourceType: kony.map.PIN_IMG_SRC_TYPE_IMAGE,
            anchor: kony.map.PIN_IMG_ANCHOR_BOTTOM_CENTER
        }
    }];
    frmMap.show();
}