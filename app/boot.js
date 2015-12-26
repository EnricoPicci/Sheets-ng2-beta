System.register(['angular2/platform/browser', './appCmp', './SheetFactory'], function(exports_1) {
    var browser_1, appCmp_1, SheetFactory_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (appCmp_1_1) {
                appCmp_1 = appCmp_1_1;
            },
            function (SheetFactory_1_1) {
                SheetFactory_1 = SheetFactory_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(appCmp_1.AppComponent, [SheetFactory_1.SheetFactory]);
        }
    }
});
//# sourceMappingURL=boot.js.map