//startup.js file
var appConfig = {
    appId: "MapEhancements",
    appName: "MapEnhancements",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "169.254.89.161",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    url: "http://10.211.55.5:8585/MapEhancements/MWServlet",
    secureurl: "http://10.211.55.5:8585/MapEhancements/MWServlet",
    middlewareContext: "MapEhancements"
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
        APILevel: 6900
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmIntro.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};