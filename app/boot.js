System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './app.component', './sheetBackEnd.service', '../externalServicesClientMock/backEnd.clientMock.service', './sheetWeightAdjuster.service'], function(exports_1) {
    var core_1, browser_1, router_1, app_component_1, sheetBackEnd_service_1, backEnd_clientMock_service_1, sheetWeightAdjuster_service_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (sheetBackEnd_service_1_1) {
                sheetBackEnd_service_1 = sheetBackEnd_service_1_1;
            },
            function (backEnd_clientMock_service_1_1) {
                backEnd_clientMock_service_1 = backEnd_clientMock_service_1_1;
            },
            function (sheetWeightAdjuster_service_1_1) {
                sheetWeightAdjuster_service_1 = sheetWeightAdjuster_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, core_1.provide(sheetBackEnd_service_1.SheetBackEnd, { useClass: backEnd_clientMock_service_1.BackEndClientMock }), sheetWeightAdjuster_service_1.SheetWeightAdjuster]);
        }
    }
});
//# sourceMappingURL=boot.js.map