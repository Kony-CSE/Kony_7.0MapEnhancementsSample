function addWidgetsfrmCustomizationOfMapPins() {
    frmCustomizationOfMapPins.setDefaultUnit(kony.flex.DP);
    var lblIntro = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblIntro",
        "isVisible": true,
        "left": "136dp",
        "skin": "skLblBg1",
        "text": "Set map pin images from various sources",
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
    var btnByUsingImage = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnByUsingImage",
        "isVisible": true,
        "left": "55dp",
        "onClick": AS_Button_f656762b25dc4549a047c303b76a199e,
        "skin": "sknBtnBg1",
        "text": "By using image",
        "top": "79dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnByUsingBase64String = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnByUsingBase64String",
        "isVisible": true,
        "left": "55dp",
        "onClick": AS_Button_3da2db7bf8ea4327b4642c25a7db9af1,
        "skin": "sknBtnBg1",
        "text": "By using Base64 string",
        "top": "150dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnByUsingImageObject = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnByUsingImageObject",
        "isVisible": true,
        "left": "55dp",
        "onClick": AS_Button_d599400509564adb9755ad07bb5995fd,
        "skin": "sknBtnBg1",
        "text": "By using image object",
        "top": "220dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnByUsingImageFilePath = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnByUsingImageFilePath",
        "isVisible": true,
        "left": "55dp",
        "onClick": AS_Button_200444d8055d4a34a19f20490a42480a,
        "skin": "sknBtnBg1",
        "text": "By using image file path",
        "top": "290dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmCustomizationOfMapPins.add(
    lblIntro, btnByUsingImage, btnByUsingBase64String, btnByUsingImageObject, btnByUsingImageFilePath);
};

function frmCustomizationOfMapPinsGlobals() {
    frmCustomizationOfMapPins = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCustomizationOfMapPins,
        "enabledForIdleTimeout": false,
        "id": "frmCustomizationOfMapPins",
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