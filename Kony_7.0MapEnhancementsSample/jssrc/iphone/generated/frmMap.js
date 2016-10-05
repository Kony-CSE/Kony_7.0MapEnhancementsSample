function addWidgetsfrmMap() {
    frmMap.setDefaultUnit(kony.flex.DP);
    var map = new kony.ui.Map({
        "calloutWidth": 80,
        "defaultPinImage": "pinb.png",
        "height": "100%",
        "id": "map",
        "isVisible": true,
        "left": "0dp",
        "locationData": [{
            "desc": "Phoenix infocity, Gachibowli",
            "lat": "17.447326",
            "lon": "78.371358",
            "name": "KonyLabs(New)"
        }, {
            "desc": "Mindspace, Hitech City",
            "lat": "17.441839",
            "lon": "78.380928",
            "name": "KonyLabs(Old)"
        }, {
            "desc": "Orlando, US",
            "lat": "28.449340",
            "lon": "-81.481519",
            "name": "KonyLabs"
        }],
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "top": "0dp",
        "width": "100%"
    }, {}, {
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "showCurrentLocation": constants.MAP_VIEW_SHOW_CURRENT_LOCATION_NONE,
        "zoomLevel": 15
    });
    frmMap.add(
    map);
};

function frmMapGlobals() {
    frmMap = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMap,
        "enabledForIdleTimeout": false,
        "id": "frmMap",
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