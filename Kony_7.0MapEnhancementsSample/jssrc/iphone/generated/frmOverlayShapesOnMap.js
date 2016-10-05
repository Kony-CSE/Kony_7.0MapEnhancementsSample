function addWidgetsfrmOverlayShapesOnMap() {
    frmOverlayShapesOnMap.setDefaultUnit(kony.flex.DP);
    var lblIntro = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblIntro",
        "isVisible": true,
        "left": "136dp",
        "skin": "skLblBg1",
        "text": "Overlay shapes on map",
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
    var btnDrawPolygon = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnDrawPolygon",
        "isVisible": true,
        "left": "55dp",
        "onClick": AS_Button_a63fa7ce69b54ff88a16c16136a977b6,
        "skin": "sknBtnBg1",
        "text": "Draw Polygon",
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
    var btnDrawCircle = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnDrawCircle",
        "isVisible": true,
        "left": "55dp",
        "onClick": AS_Button_125751fb395f48b1867119bf2ac35736,
        "skin": "sknBtnBg1",
        "text": "Draw Circle",
        "top": "150dp",
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
    frmOverlayShapesOnMap.add(
    lblIntro, btnDrawPolygon, btnDrawCircle);
};

function frmOverlayShapesOnMapGlobals() {
    frmOverlayShapesOnMap = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmOverlayShapesOnMap,
        "enabledForIdleTimeout": false,
        "id": "frmOverlayShapesOnMap",
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