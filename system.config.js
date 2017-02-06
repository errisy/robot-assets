
(function (global) {
    System.config({
        paths: {"npm:":"node_modules/"},
        map: {"robot":"robot","ui-core":"node_modules/core-js/client/shim.js","ui-zone":"node_modules/zone.js/dist/zone.js","ui-reflect":"node_modules/reflect-metadata/Reflect.js","ui-system":"node_modules/systemjs/dist/system.js","babel-polyfill":"node_modules/babel-polyfill/dist/polyfill.js","@angular/core":"node_modules/@angular/core/bundles/core.umd.js","@angular/common":"node_modules/@angular/common/bundles/common.umd.js","@angular/compiler":"node_modules/@angular/compiler/bundles/compiler.umd.js","@angular/platform-browser":"node_modules/@angular/platform-browser/bundles/platform-browser.umd.js","@angular/platform-browser-dynamic":"node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js","@angular/http":"node_modules/@angular/http/bundles/http.umd.js","@angular/router":"node_modules/@angular/router/bundles/router.umd.js","@angular/forms":"node_modules/@angular/forms/bundles/forms.umd.js","@angular/upgrade":"node_modules/@angular/upgrade/bundles/upgrade.umd.js","rxjs/Subject":"node_modules/rxjs/bundles/Rx.js","rxjs/Observable":"node_modules/rxjs/bundles/Rx.js","rxjs/operator/toPromise":"node_modules/rxjs/bundles/Rx.js","rxjs/observable/fromPromise":"node_modules/rxjs/bundles/Rx.js"},
        packages: {"robot":{"main":"index.js","defaultExtension":"js"}}
    });
})(this);
