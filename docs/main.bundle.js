webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <div class=\"header\">\n    <img class=\"logo\" src=\"../assets/images/health-logo.png\"/>\n    <div class=\"heading\">Presents</div>\n  </div>\n  <div class=\"mid\">\n    <picture>\n      <source media=\"(max-width: 400px)\" srcset=\"../assets/images/HG-cover-photo-360px.png\">\n      <source media=\"(max-width: 970px)\" srcset=\"../assets/images/HG-cover-photo-768px.png\">\n      <img src=\"../assets/images/HG-cover-photo-1366px.png\" alt=\"Flowers\" style=\"width:100%; max-height: 480px;\">\n    </picture>\n  </div>\n\n  <div class=\"footer\">\n\n    <div class=\"top\">\n      <div class=\"coming-soon\">Coming soon!</div>\n\n      <div class=\"scrollable-area\">\n        Health Games has all of your favourite online games in one place. Not only can you win great cash prizes but, as\n        with The Health Lottery, every time you play, Health Games will make a charitable contribution to support local\n        health causes across Great Britain.\n\n        With Health Games, there’s no deposit required, and we’ll even get you started with a lump sum of free spins!\n        Not only that, but you will also enjoy an additional bonus on your first deposit. So, win big with our casino,\n        slots, slingo, and instant win games; cash in on millions of pounds in jackpots, and enjoy hundreds of fun and\n        exciting games. A whole host of exclusive promotions will be offered to our customers from inception and a\n        dedicated VIP team will make sure that our biggest customers are getting the exclusive treatment they deserve.\n\n        With massive jackpots and exciting joining bonuses, take advantage of your free spins, and play with Health\n        Games!\n      </div>\n\n    </div>\n\n    <div class=\"bottom\">\n      <div class=\"social\">\n        <img style=\"margin-left: 50px;\" src=\"../assets/images/social.png\"/>\n      </div>\n      <div class=\"eighteen\"> <b>18+</b> You must be 18 or over to play or claim a prize. Underage gambling is an offence. The Health Lottery (ELM) Limited is licensed and regulated by the Gambling Commission (license no. 000-026057-R-309179)</div>\n      <div class=\"commission\">\n        <img style=\"width: 124px;\" src=\"../assets/images/Gambling-Commission-logo-transparent.png\"/>\n        <img src=\"../assets/images/gambleaware.png\"/>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'NerisLight';\n  src: url(" + escape(__webpack_require__("../../../../../src/assets/fonts/Neris-Light.otf")) + ");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'NerisSemibold';\n  src: url(" + escape(__webpack_require__("../../../../../src/assets/fonts/Neris-SemiBold.otf")) + ");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'NerisThin';\n  src: url(" + escape(__webpack_require__("../../../../../src/assets/fonts/Neris-Thin.otf")) + ");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'StagBold';\n  src: url(" + escape(__webpack_require__("../../../../../src/assets/fonts/Stag-Bold.otf")) + ");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'StagSemibold';\n  src: url(" + escape(__webpack_require__("../../../../../src/assets/fonts/Stag-Semibold.otf")) + ");\n  font-weight: normal;\n  font-style: normal; }\n\n.content {\n  height: 100%;\n  color: #676767; }\n  .content .header {\n    height: 160px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .content .header .logo {\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n      max-width: 236px;\n      max-height: 113px;\n      width: auto;\n      height: auto;\n      margin: 26px 69px 0; }\n    .content .header .heading {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 auto;\n              flex: 0 1 auto;\n      position: absolute;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      font-size: 3.3em;\n      font-family: NerisThin;\n      padding-top: 70px; }\n  .content .mid {\n    height: auto; }\n  .content .footer {\n    padding-top: 30px; }\n    .content .footer .top {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      .content .footer .top .coming-soon {\n        font-family: StagSemibold;\n        font-size: 45px;\n        color: #9e2d87; }\n      .content .footer .top .scrollable-area {\n        margin-top: 20px;\n        height: 90px;\n        width: 700px;\n        overflow: auto;\n        font-family: NerisLight;\n        font-size: 18px;\n        line-height: 28px;\n        text-align: center;\n        padding: 0 11px;\n        color: #8e8d8d; }\n    .content .footer .bottom {\n      padding-top: 40px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      .content .footer .bottom .social {\n        width: 300px; }\n      .content .footer .bottom .eighteen {\n        width: 700px;\n        font-family: NerisLight;\n        text-align: center;\n        color: #8e8d8d;\n        font-size: 14px; }\n        .content .footer .bottom .eighteen b {\n          font-size: 18px;\n          color: #737373; }\n      .content .footer .bottom .commission {\n        width: 300px; }\n\n/**\n  IPAD OVERRIDES\n */\n@media (min-width: 768px) and (max-width: 768px) {\n  .logo {\n    margin-left: 0px !important; }\n  .footer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .footer .eighteen {\n      width: auto !important;\n      text-align: left !important;\n      padding-right: 14px; }\n    .footer .scrollable-area {\n      margin-top: 10px !important;\n      width: auto !important;\n      height: 210px !important;\n      text-align: left !important; }\n    .footer .top {\n      display: block !important; }\n    .footer .coming-soon {\n      padding-left: 20px; }\n    .footer .bottom {\n      display: block !important;\n      padding-left: 20px; }\n      .footer .bottom .social {\n        position: absolute;\n        bottom: 24px;\n        left: -18px; }\n      .footer .bottom .commission {\n        margin-bottom: -100px; } }\n\n/**\n  PHONE OVERRIDES\n */\n@media (max-width: 500px) {\n  .header {\n    height: 110px !important; }\n    .header .logo {\n      width: 104px !important;\n      margin: 30px 0 0 10px !important; }\n    .header .heading {\n      padding: 40px 0 0 !important;\n      font-size: 1.5em !important; }\n  .footer {\n    padding-top: 15px !important; }\n    .footer .coming-soon {\n      font-size: 25px !important; }\n    .footer .scrollable-area {\n      padding: 0 20px !important;\n      font-size: 14px !important;\n      line-height: 18px !important;\n      width: auto !important;\n      height: 144px !important;\n      margin-top: 15px !important; }\n    .footer .social {\n      position: absolute;\n      bottom: 75px;\n      left: -18px; }\n      .footer .social img {\n        height: 17px; }\n    .footer .commission {\n      width: 100px !important; }\n      .footer .commission img {\n        width: 80px !important; }\n  .bottom {\n    padding: 35px 8px 0 !important; }\n  .eighteen {\n    font-size: 10px !important;\n    text-align: left !important; }\n    .eighteen b {\n      font-size: 12px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/assets/fonts/Neris-Light.otf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Neris-Light.b79cb6c21ef6accdc91f.otf";

/***/ }),

/***/ "../../../../../src/assets/fonts/Neris-SemiBold.otf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Neris-SemiBold.318770eef8a05100236a.otf";

/***/ }),

/***/ "../../../../../src/assets/fonts/Neris-Thin.otf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Neris-Thin.ed26e43fe7b668a61335.otf";

/***/ }),

/***/ "../../../../../src/assets/fonts/Stag-Bold.otf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Stag-Bold.5fa2916d0bd1dd0964d5.otf";

/***/ }),

/***/ "../../../../../src/assets/fonts/Stag-Semibold.otf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Stag-Semibold.20a0d29d625c1eab50e6.otf";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map