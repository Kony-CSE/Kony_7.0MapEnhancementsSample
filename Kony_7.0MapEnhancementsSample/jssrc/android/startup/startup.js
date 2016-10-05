//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "MapEhancements",
    appName: "MapEnhancements",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "169.254.89.161",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "MapEhancements",
    isMFApp: false,
    eventTypes: [],
    url: "http://10.211.55.5:8585/MapEhancements/MWServlet",
    secureurl: "http://10.211.55.5:8585/MapEhancements/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmCustomizationOfMapPinsGlobals();
    frmIntroGlobals();
    frmMapGlobals();
    frmOverlayShapesOnMapGlobals();
    frmSearchRoutesOnMapGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6900
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmIntro.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;