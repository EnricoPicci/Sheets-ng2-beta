System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './app.component', './sheetFactory', './sheetWeightAdjuster.service'], function(exports_1) {
    var core_1, browser_1, router_1, app_component_1, sheetFactory_1, sheetWeightAdjuster_service_1;
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
            function (sheetFactory_1_1) {
                sheetFactory_1 = sheetFactory_1_1;
            },
            function (sheetWeightAdjuster_service_1_1) {
                sheetWeightAdjuster_service_1 = sheetWeightAdjuster_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, core_1.provide(sheetFactory_1.SheetFactory, { useClass: sheetFactory_1.SheetFactory }), sheetWeightAdjuster_service_1.SheetWeightAdjuster]);
        }
    }
});
//# sourceMappingURL=boot.js.map