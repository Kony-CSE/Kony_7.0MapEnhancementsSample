function addWidgetsfrmSearchRoutesOnMap() {
    frmSearchRoutesOnMap.setDefaultUnit(kony.flex.DP);
    var lblIntro = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblIntro",
        "isVisible": true,
        "left": "136dp",
        "skin": "skLblBg1",
        "text": "Search routes on map",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "23dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnSearchAndDrawRoute = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnSearchAndDrawRoute",
        "isVisible": true,
        "left": "55dp",
        "onClick": AS_Button_ecd2d96d4cc84271b6942bcab3c727ac,
        "skin": "sknBtnBg1",
        "text": "Search Route",
        "top": "79dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmSearchRoutesOnMap.add(
    lblIntro, btnSearchAndDrawRoute);
};

function frmSearchRoutesOnMapGlobals() {
    frmSearchRoutesOnMap = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSearchRoutesOnMap,
        "enabledForIdleTimeout": false,
        "id": "frmSearchRoutesOnMap",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "sknFrmBg1"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};