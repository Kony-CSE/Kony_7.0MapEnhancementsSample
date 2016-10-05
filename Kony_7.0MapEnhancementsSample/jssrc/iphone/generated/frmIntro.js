function addWidgetsfrmIntro() {
    frmIntro.setDefaultUnit(kony.flex.DP);
    var lblIntro = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblIntro",
        "isVisible": true,
        "left": "136dp",
        "skin": "skLblBg1",
        "text": "Map Widget Enhancements",
        "top": "23dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnCustomizationOfMapPins = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnCustomizationOfMapPins",
        "isVisible": true,
        "left": "55dp",
        "onClick": AS_Button_b80d6b9fd70a4b55b4df0787f2b2b9f9,
        "skin": "sknBtnBg1",
        "text": "Customization of map pins",
        "top": "79dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnDrawShapesOnMap = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnDrawShapesOnMap",
        "isVisible": true,
        "left": "55dp",
        "onClick": AS_Button_db0e1e941d7442b09348a84a3b8aff5c,
        "skin": "sknBtnBg1",
        "text": "Overlay shapes on map",
        "top": "145dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnSearchRoutesOnMap = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnSearchRoutesOnMap",
        "isVisible": true,
        "left": "55dp",
        "onClick": AS_Button_398a751cac504634bd8594d886c32b1e,
        "skin": "sknBtnBg1",
        "text": "Search routes on map",
        "top": "210dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    frmIntro.add(
    lblIntro, btnCustomizationOfMapPins, btnDrawShapesOnMap, btnSearchRoutesOnMap);
};

function frmIntroGlobals() {
    frmIntro = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmIntro,
        "enabledForIdleTimeout": false,
        "id": "frmIntro",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "sknFrmBg1"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "titleBarSkin": "slTitleBar"
    });
};