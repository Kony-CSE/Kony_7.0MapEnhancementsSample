function AS_Button_200444d8055d4a34a19f20490a42480a(eventobject) {
    frmMap.map.locationData = [{
        lat: "17.4469390",
        lon: "78.3741190",
        name: "Using Image FilePath For Pin",
        desc: "Kony Solutions Hyderabad Office",
        //image:"mappin.png"
        image: {
            source: kony.io.FileSystem.getDataDirectoryPath() + "/mappin.png",
            sourceType: kony.map.PIN_IMG_SRC_TYPE_IMAGE,
            anchor: kony.map.PIN_IMG_ANCHOR_BOTTOM_CENTER
        }
    }];
    frmMap.show();
}