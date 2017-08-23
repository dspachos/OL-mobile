webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_route_service__ = __webpack_require__("../../../../../src/app/core/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = __WEBPACK_IMPORTED_MODULE_2__core_route_service__["a" /* Route */].withShell([
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__about_component__["a" /* AboutComponent */], data: { title: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_i18n_service__["b" /* extract */])('About') } }
]);
var AboutRoutingModule = (function () {
    function AboutRoutingModule() {
    }
    return AboutRoutingModule;
}());
AboutRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        providers: []
    })
], AboutRoutingModule);

//# sourceMappingURL=about-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"jumbotron text-center\">\n\n    <h1>\n      <span translate>APP_NAME</span> / About\n    </h1>\n\n    <p>\n      <img src=\"assets/logo.png\" width=\"50%\" />\n  \t</p>\n\n    <p>\n      <i class=\"fa fa-bookmark-o\"></i> <span translate>Version</span> {{version}}\n    </p>\n  \n    <p>\n      <a href=\"http://wavesnetwork.eu\">http://wavesnetwork.eu</a>\n    </p>\n  \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent() {
        this.version = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].version;
    }
    AboutComponent.prototype.ngOnInit = function () { };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_routing_module__ = __webpack_require__("../../../../../src/app/about/about-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_4__about_routing_module__["a" /* AboutRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__about_component__["a" /* AboutComponent */]
        ]
    })
], AboutModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_logger_service__ = __webpack_require__("../../../../../src/app/core/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var log = new __WEBPACK_IMPORTED_MODULE_11__core_logger_service__["a" /* Logger */]('App');
var AppComponent = (function () {
    function AppComponent(router, activatedRoute, titleService, translateService, i18nService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.translateService = translateService;
        this.i18nService = i18nService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Setup logger
        if (__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].production) {
            __WEBPACK_IMPORTED_MODULE_11__core_logger_service__["a" /* Logger */].enableProductionMode();
        }
        log.debug('init');
        // Setup translations
        this.i18nService.init(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].defaultLanguage, __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].supportedLanguages);
        // Change page title on navigation or language change, based on route data
        var onNavigationEnd = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* NavigationEnd */]; });
        __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].merge(this.translateService.onLangChange, onNavigationEnd)
            .map(function () {
            var route = _this.activatedRoute;
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) {
            var title = event['title'];
            if (title) {
                _this.titleService.setTitle(_this.translateService.instant(title));
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_12__core_i18n_service__["a" /* I18nService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__core_i18n_service__["a" /* I18nService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_module__ = __webpack_require__("../../../../../src/app/about/about.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__play_play_module__ = __webpack_require__("../../../../../src/app/play/play.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_12__about_about_module__["a" /* AboutModule */],
            __WEBPACK_IMPORTED_MODULE_13__play_play_module__["a" /* PlayModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shell_shell_component__ = __webpack_require__("../../../../../src/app/core/shell/shell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shell_header_header_component__ = __webpack_require__("../../../../../src/app/core/shell/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__http_http_service__ = __webpack_require__("../../../../../src/app/core/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__http_http_cache_service__ = __webpack_require__("../../../../../src/app/core/http/http-cache.service.ts");
/* unused harmony export createHttpService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











function createHttpService(backend, defaultOptions, httpCacheService) {
    return new __WEBPACK_IMPORTED_MODULE_9__http_http_service__["a" /* HttpService */](backend, defaultOptions, httpCacheService);
}
var CoreModule = (function () {
    function CoreModule(parentModule) {
        // Import guard
        if (parentModule) {
            throw new Error(parentModule + " has already been loaded. Import Core module in the AppModule only.");
        }
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__shell_header_header_component__["a" /* HeaderComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__shell_shell_component__["a" /* ShellComponent */],
            __WEBPACK_IMPORTED_MODULE_7__shell_header_header_component__["a" /* HeaderComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__i18n_service__["a" /* I18nService */],
            __WEBPACK_IMPORTED_MODULE_10__http_http_cache_service__["a" /* HttpCacheService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_10__http_http_cache_service__["a" /* HttpCacheService */]],
                useFactory: createHttpService
            }
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Optional */])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* SkipSelf */])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/http/http-cache.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_service__ = __webpack_require__("../../../../../src/app/core/logger.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCacheService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var log = new __WEBPACK_IMPORTED_MODULE_2__logger_service__["a" /* Logger */]('HttpCacheService');
var cachePersistenceKey = 'httpCache';
/**
 * Provides a cache facility for HTTP requests with configurable persistence policy.
 */
var HttpCacheService = (function () {
    function HttpCacheService() {
        this.cachedData = {};
        this.storage = null;
        this.loadCacheData();
    }
    /**
     * Sets the cache data for the specified request.
     * @param {!string} url The request URL.
     * @param {any} params Optional request query parameters.
     * @param {ResponseOptions} data The received data.
     * @param {Date=} lastUpdated The cache last update, current date is used if not specified.
     */
    HttpCacheService.prototype.setCacheData = function (url, params, data, lastUpdated) {
        var cacheKey = this.getCacheKey(url, params);
        this.cachedData[cacheKey] = {
            lastUpdated: lastUpdated || new Date(),
            data: data
        };
        log.debug('Cache set for key: "' + cacheKey + '"');
        this.saveCacheData();
    };
    /**
     * Gets the cached data for the specified request.
     * @param {!string} url The request URL.
     * @param {any=} params Optional request query parameters.
     * @return {?ResponseOptions} The cached data or null if no cached data exists for this request.
     */
    HttpCacheService.prototype.getCacheData = function (url, params) {
        var cacheKey = this.getCacheKey(url, params);
        var cacheEntry = this.cachedData[cacheKey];
        if (cacheEntry) {
            log.debug('Cache hit for key: "' + cacheKey + '"');
            return cacheEntry.data;
        }
        return null;
    };
    /**
     * Gets the cached entry for the specified request.
     * @param {!string} url The request URL.
     * @param {any=} params Optional request query parameters.
     * @return {?HttpCacheEntry} The cache entry or null if no cache entry exists for this request.
     */
    HttpCacheService.prototype.getHttpCacheEntry = function (url, params) {
        return this.cachedData[this.getCacheKey(url, params)] || null;
    };
    /**
     * Clears the cached entry (if exists) for the specified request.
     * @param {!string} url The request URL.
     * @param {any=} params Optional request query parameters.
     */
    HttpCacheService.prototype.clearCache = function (url, params) {
        var cacheKey = this.getCacheKey(url, params);
        this.cachedData[cacheKey] = undefined;
        log.debug('Cache cleared for key: "' + cacheKey + '"');
        this.saveCacheData();
    };
    /**
     * Cleans cache entries older than the specified date.
     * @param {date=} expirationDate The cache expiration date. If no date is specified, all cache is cleared.
     */
    HttpCacheService.prototype.cleanCache = function (expirationDate) {
        var _this = this;
        if (expirationDate) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["each"])(this.cachedData, function (value, key) {
                if (expirationDate >= value.lastUpdated) {
                    delete _this.cachedData[key];
                }
            });
        }
        else {
            this.cachedData = {};
        }
        this.saveCacheData();
    };
    /**
     * Sets the cache persistence policy.
     * Note that changing the cache persistence will also clear the cache from its previous storage.
     * @param {'local'|'session'=} persistence How the cache should be persisted, it can be either local or session
     *   storage, or if no value is provided it will be only in-memory (default).
     */
    HttpCacheService.prototype.setPersistence = function (persistence) {
        this.cleanCache();
        this.storage = persistence === 'local' || persistence === 'session' ? window[persistence + 'Storage'] : null;
        this.loadCacheData();
    };
    ;
    HttpCacheService.prototype.getCacheKey = function (url, params) {
        return url + (params ? JSON.stringify(params) : '');
    };
    HttpCacheService.prototype.saveCacheData = function () {
        if (this.storage) {
            this.storage[cachePersistenceKey] = JSON.stringify(this.cachedData);
        }
    };
    HttpCacheService.prototype.loadCacheData = function () {
        var data = this.storage ? this.storage[cachePersistenceKey] : null;
        this.cachedData = data ? JSON.stringify(data) : {};
    };
    return HttpCacheService;
}());
HttpCacheService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], HttpCacheService);

//# sourceMappingURL=http-cache.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/http/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logger_service__ = __webpack_require__("../../../../../src/app/core/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_cache_service__ = __webpack_require__("../../../../../src/app/core/http/http-cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__request_options_args__ = __webpack_require__("../../../../../src/app/core/http/request-options-args.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var log = new __WEBPACK_IMPORTED_MODULE_6__logger_service__["a" /* Logger */]('HttpService');
/**
 * Provides a base framework for http service extension.
 * The default extension adds support for API prefixing, request caching and default error handler.
 */
var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions, httpCacheService) {
        var _this = 
        // Customize default options here if needed
        _super.call(this, backend, defaultOptions) || this;
        _this.defaultOptions = defaultOptions;
        _this.httpCacheService = httpCacheService;
        return _this;
    }
    /**
     * Performs any type of http request.
     * You can customize this method with your own extended behavior.
     */
    HttpService.prototype.request = function (request, options) {
        var _this = this;
        options = options || {};
        var url;
        if (typeof request === 'string') {
            url = request;
            request = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].serverUrl + url;
        }
        else {
            url = request.url;
            request.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].serverUrl + url;
        }
        if (!options.cache) {
            // Do not use cache
            return this.httpRequest(request, options);
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (subscriber) {
                var cachedData = options.cache === __WEBPACK_IMPORTED_MODULE_8__request_options_args__["a" /* HttpCachePolicy */].Update ? null : _this.httpCacheService.getCacheData(url);
                if (cachedData !== null) {
                    // Create new response to avoid side-effects
                    subscriber.next(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Response */](cachedData));
                    subscriber.complete();
                }
                else {
                    _this.httpRequest(request, options).subscribe(function (response) {
                        // Store the serializable version of the response
                        _this.httpCacheService.setCacheData(url, null, new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* ResponseOptions */]({
                            body: response.text(),
                            status: response.status,
                            headers: response.headers,
                            statusText: response.statusText,
                            type: response.type,
                            url: response.url
                        }));
                        subscriber.next(response);
                    }, function (error) { return subscriber.error(error); }, function () { return subscriber.complete(); });
                }
            });
        }
    };
    HttpService.prototype.get = function (url, options) {
        return this.request(url, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["extend"])({}, options, { method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* RequestMethod */].Get }));
    };
    HttpService.prototype.post = function (url, body, options) {
        return this.request(url, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["extend"])({}, options, {
            body: body,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* RequestMethod */].Post
        }));
    };
    HttpService.prototype.put = function (url, body, options) {
        return this.request(url, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["extend"])({}, options, {
            body: body,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* RequestMethod */].Put
        }));
    };
    HttpService.prototype.delete = function (url, options) {
        return this.request(url, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["extend"])({}, options, { method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* RequestMethod */].Delete }));
    };
    HttpService.prototype.patch = function (url, body, options) {
        return this.request(url, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["extend"])({}, options, {
            body: body,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* RequestMethod */].Patch
        }));
    };
    HttpService.prototype.head = function (url, options) {
        return this.request(url, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["extend"])({}, options, { method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* RequestMethod */].Head }));
    };
    HttpService.prototype.options = function (url, options) {
        return this.request(url, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["extend"])({}, options, { method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* RequestMethod */].Options }));
    };
    // Customize the default behavior for all http requests here if needed
    HttpService.prototype.httpRequest = function (request, options) {
        var req = _super.prototype.request.call(this, request, options);
        if (!options.skipErrorHandler) {
            req = req.catch(this.errorHandler.bind(this));
        }
        return req;
    };
    // Customize the default error handler here if needed
    HttpService.prototype.errorHandler = function (response) {
        if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
            // Avoid unchaught exceptions on production
            log.error('Request error', response);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(response);
        }
        throw response;
    };
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]));
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__http_cache_service__["a" /* HttpCacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__http_cache_service__["a" /* HttpCacheService */]) === "function" && _c || Object])
], HttpService);

var _a, _b, _c;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/http/request-options-args.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCachePolicy; });
/**
 * Cache policy for HTTP requests.
 * With the value 'Never' the request is always made and the cache is not used.
 * With the value 'Always' the request result is fetched from cache if possible, or the request is made and cached.
 * If the value 'Update' is used, a request will be forced and the cache entry updated.
 */
var HttpCachePolicy;
(function (HttpCachePolicy) {
    HttpCachePolicy[HttpCachePolicy["Never"] = false] = "Never";
    HttpCachePolicy[HttpCachePolicy["Always"] = true] = "Always";
    HttpCachePolicy[HttpCachePolicy["Update"] = 'update'] = "Update";
})(HttpCachePolicy || (HttpCachePolicy = {}));
//# sourceMappingURL=request-options-args.js.map

/***/ }),

/***/ "../../../../../src/app/core/i18n.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translations_en_US_json__ = __webpack_require__("../../../../../src/translations/en-US.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translations_en_US_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__translations_en_US_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations_fr_FR_json__ = __webpack_require__("../../../../../src/translations/fr-FR.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations_fr_FR_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__translations_fr_FR_json__);
/* harmony export (immutable) */ __webpack_exports__["b"] = extract;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var languageKey = 'language';
/**
 * Pass-through function to mark a string for translation extraction.
 * Running `npm translations:extract` will include the given string by using this.
 * @param {string} s The string to extract for translation.
 * @return {string} The same string.
 */
function extract(s) {
    return s;
}
var I18nService = (function () {
    function I18nService(translateService) {
        this.translateService = translateService;
        // Embed languages to avoid extra HTTP requests
        translateService.setTranslation('en-US', __WEBPACK_IMPORTED_MODULE_3__translations_en_US_json___default.a);
        translateService.setTranslation('fr-FR', __WEBPACK_IMPORTED_MODULE_4__translations_fr_FR_json___default.a);
    }
    /**
     * Initializes i18n for the application.
     * Loads language from local storage if present, or sets default language.
     * @param {!string} defaultLanguage The default language to use.
     * @param {Array.<String>} supportedLanguages The list of supported languages.
     */
    I18nService.prototype.init = function (defaultLanguage, supportedLanguages) {
        this.defaultLanguage = defaultLanguage;
        this.supportedLanguages = supportedLanguages;
        this.language = null;
        this.translateService.onLangChange
            .subscribe(function (event) { localStorage.setItem(languageKey, event.lang); });
    };
    Object.defineProperty(I18nService.prototype, "language", {
        /**
         * Gets the current language.
         * @return {string} The current language code.
         */
        get: function () {
            return this.translateService.currentLang;
        },
        /**
         * Sets the current language.
         * Note: The current language is saved to the local storage.
         * If no parameter is specified, the language is loaded from local storage (if present).
         * @param {string} language The IETF language code to set.
         */
        set: function (language) {
            language = language || localStorage.getItem(languageKey);
            var isSupportedLanguage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["includes"])(this.supportedLanguages, language);
            // Fallback if language is not supported
            if (!isSupportedLanguage) {
                language = this.defaultLanguage;
            }
            this.translateService.use(language);
        },
        enumerable: true,
        configurable: true
    });
    return I18nService;
}());
I18nService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateService */]) === "function" && _a || Object])
], I18nService);

var _a;
//# sourceMappingURL=i18n.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LogLevel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */ var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
var Logger = (function () {
    function Logger(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    Logger.enableProductionMode = function () {
        Logger.level = LogLevel.Warning;
    };
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    Logger.prototype.debug = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.log, LogLevel.Debug, objects);
    };
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    Logger.prototype.info = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.info, LogLevel.Info, objects);
    };
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    Logger.prototype.warn = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.warn, LogLevel.Warning, objects);
    };
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    Logger.prototype.error = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.error, LogLevel.Error, objects);
    };
    Logger.prototype.log = function (func, level, objects) {
        var _this = this;
        if (level <= Logger.level) {
            var log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(function (output) { return output.apply(output, [_this.source, level].concat(objects)); });
        }
    };
    return Logger;
}());

/**
 * Current logging level.
 * Set it to LogLevel.Off to disable logs completely.
 */
Logger.level = LogLevel.Debug;
/**
 * Additional log outputs.
 */
Logger.outputs = [];
//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/route.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shell_shell_component__ = __webpack_require__("../../../../../src/app/core/shell/shell.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Route; });

/**
 * Provides helper methods to create routes.
 */
var Route = (function () {
    function Route() {
    }
    /**
     * Creates routes using the shell component and authentication.
     * @param routes The routes to add.
     * @return {Routes} The new routes using shell as the base.
     */
    Route.withShell = function (routes) {
        return [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__shell_shell_component__["a" /* ShellComponent */],
                children: routes
            }];
    };
    return Route;
}());

//# sourceMappingURL=route.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/shell/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-toggleable-sm navbar-inverse bg-inverse\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" aria-controls=\"navbar-menu\"\n            aria-label=\"Toggle navigation\" (click)=\"toggleMenu()\" [attr.aria-expanded]=\"!menuHidden\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" routerLink=\"/home\" translate>APP_NAME</a>\n    <div id=\"navbar-menu\" class=\"collapse navbar-collapse float-xs-none\" [ngbCollapse]=\"menuHidden\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link text-uppercase\" routerLink=\"/home\" routerLinkActive=\"active\">\n          <i class=\"fa fa-home\"></i>\n          <span translate>Home</span>\n        </a>\n        <a class=\"nav-item nav-link text-uppercase\" routerLink=\"/about\" routerLinkActive=\"active\">\n          <i class=\"fa fa-question-circle\"></i>\n          <span translate>About</span>\n        </a>\n      </div>\n      <div class=\"navbar-nav ml-auto\">\n        \n      </div>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/core/shell/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * Application global variables.\n */\n.navbar {\n  margin-bottom: 1rem; }\n\n.nav-link.dropdown-toggle {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/shell/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(i18nService) {
        this.i18nService = i18nService;
        this.menuHidden = true;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.toggleMenu = function () {
        this.menuHidden = !this.menuHidden;
    };
    HeaderComponent.prototype.setLanguage = function (language) {
        this.i18nService.language = language;
    };
    Object.defineProperty(HeaderComponent.prototype, "currentLanguage", {
        get: function () {
            return this.i18nService.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "languages", {
        get: function () {
            return this.i18nService.supportedLanguages;
        },
        enumerable: true,
        configurable: true
    });
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/core/shell/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/shell/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__i18n_service__["a" /* I18nService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__i18n_service__["a" /* I18nService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/shell/shell.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/core/shell/shell.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/shell/shell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShellComponent = (function () {
    function ShellComponent() {
    }
    ShellComponent.prototype.ngOnInit = function () { };
    return ShellComponent;
}());
ShellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-shell',
        template: __webpack_require__("../../../../../src/app/core/shell/shell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/shell/shell.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ShellComponent);

//# sourceMappingURL=shell.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_route_service__ = __webpack_require__("../../../../../src/app/core/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = __WEBPACK_IMPORTED_MODULE_2__core_route_service__["a" /* Route */].withShell([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */], data: { title: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_i18n_service__["b" /* extract */])('Home') } }
]);
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        providers: []
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center\">\n<app-loader [isLoading]=\"isLoading\"></app-loader>\n</p>\n\n<div class=\"container\">\n\n<div class=\"card mb-2 p-2\">\n\t\t<div class=\"card-img\">\n\t\t  <img class=\"card-img-top\" src=\"assets/vps/1/intro.jpg\" alt=\"Card image cap\" />\n\t\t</div>\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">Alpha Thalassemia</h4>\n    <h6 class=\"card-subtitle mt-2 mb-4 text-muted\">\n    \tAuthor: Eleni Dafli <font class=\"text-info\">(4/5 <i class=\"fa fa-star\" aria-hidden=\"true\"></i>)</font>\n    </h6>    \t\n\n    <p class=\"card-text\">\n      A virtual patient case for thalassemia. It aims to get patients suffering from thalassemia familiarized with their illness and its treatment.\n    </p>\n    <a routerLink=\"/play\" class=\"float-right btn btn-primary\"><i class=\"fa fa-unlock-alt\"></i> Play now!</a>\n    <div class=\"float-left text-center text-warning\">\n    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n    <p class=\"text-muted\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> ~ 15 minutes</p>\n    </div> \n\t\n    \n  </div>\n</div>\n\n\n<div class=\"card mb-2 p-2\">\n\t\t<div class=\"card-img\">\n\t\t  <img class=\"card-img-top\" src=\"assets/vps/2/intro.jpg\" alt=\"Card image cap\" />\n\t\t</div>\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">Beta Thalassemia</h4>\n    <h6 class=\"card-subtitle mt-2 mb-4 text-muted\">\n    \tAuthor: Eleni Dafli <font class=\"text-info\">(4/5 <i class=\"fa fa-star\" aria-hidden=\"true\"></i>)</font>\n    </h6>    \t\n    <p class=\"card-text\">\n      Some quick example text to build on the card title\n      and make up the bulk of the card's content.\n    </p>\n\n    <a href=\"#\" class=\"float-right btn btn-primary\"><i class=\"fa fa-unlock-alt\"></i> Play now!</a>\n    <div class=\"float-left text-center text-warning\">\n    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n    <p class=\"text-muted\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> ~ 12 minutes</p>\n    </div> \n\n  </div>\n</div>\n\n<div class=\"card mb-2 p-2\">\n\t\t<div class=\"card-img\">\n\t\t  <img class=\"card-img-top\" src=\"assets/vps/3/intro.jpg\" alt=\"Card image cap\" />\n\t\t</div>\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">OSCE Station 2. Rectal examination</h4>\n    <h6 class=\"card-subtitle mt-2 mb-4 text-muted\">\n    \tAuthor: Panos Bamidis <font class=\"text-info\">(3/5 <i class=\"fa fa-star\" aria-hidden=\"true\"></i>)</font>\n    </h6>    \t\n    <p class=\"card-text\">\n      A virtual patient about \"OSCE Station 2. Rectal examination\"\n    </p>\n    <a href=\"#\" class=\"btn btn-primary float-right disabled\" disable=\"disable\"><i class=\"fa fa-lock\"></i> Play now!</a>\n    <div class=\"float-left text-center text-warning\">\n    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n    <p class=\"text-muted\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> ~ 10 minutes</p>\n    </div> \n\n  </div>\n</div>\n\n\n</div> <!--====  End of container  ====-->\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.logo {\n  width: 100px; }\n\nq {\n  font-style: italic;\n  font-size: 1.2rem;\n  quotes: \"\\AB   \" \" \\BB\"; }\n\n.card-img {\n  height: 164px;\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quote_service__ = __webpack_require__("../../../../../src/app/home/quote.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(quoteService) {
        this.quoteService = quoteService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.isLoading = false;
        //   this.quoteService.getRandomQuote({ category: 'dev' })
        //     .finally(() => {  })
        //     .subscribe((quote: string) => { this.quote = quote; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__quote_service__["a" /* QuoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__quote_service__["a" /* QuoteService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quote_service__ = __webpack_require__("../../../../../src/app/home/quote.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__home_routing_module__["a" /* HomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__home_component__["a" /* HomeComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__quote_service__["a" /* QuoteService */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/quote.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var routes = {
    quote: function (c) { return "/jokes/random?category=" + c.category; }
};
var QuoteService = (function () {
    function QuoteService(http) {
        this.http = http;
    }
    QuoteService.prototype.getRandomQuote = function (context) {
        return this.http.get(routes.quote(context), { cache: true })
            .map(function (res) { return res.json(); })
            .map(function (body) { return body.value; })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of('Error, could not load joke :-('); });
    };
    return QuoteService;
}());
QuoteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], QuoteService);

var _a;
//# sourceMappingURL=quote.service.js.map

/***/ }),

/***/ "../../../../../src/app/play/play-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_route_service__ = __webpack_require__("../../../../../src/app/core/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__play_component__ = __webpack_require__("../../../../../src/app/play/play.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = __WEBPACK_IMPORTED_MODULE_2__core_route_service__["a" /* Route */].withShell([
    { path: 'play', component: __WEBPACK_IMPORTED_MODULE_4__play_component__["a" /* PlayComponent */], data: { title: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_i18n_service__["b" /* extract */])('Play') } }
]);
var PlayRoutingModule = (function () {
    function PlayRoutingModule() {
    }
    return PlayRoutingModule;
}());
PlayRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        providers: []
    })
], PlayRoutingModule);

//# sourceMappingURL=play-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/play/play.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-5\">\n\n<p *ngIf=\"node\" class=\"text-center\"><ngb-progressbar type=\"warning\" [value]=\"node.progress\" [striped]=\"true\" [animated]=\"true\">Completed <i>{{node.progress}}%</i></ngb-progressbar>\n<button type=\"button\" class=\"btn btn-link\">Review your pathway</button>\n</p>\n\n<div class=\"card\" *ngIf=\"node\">\n  <div class=\"card-images\" *ngIf=\"node.images.length\">\n    <img *ngFor=\"let im of node.images\" class=\"card-img-top\" [src]=\"im.src\" alt=\"Card image cap\" />\n  </div>\n\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">{{node.title}}</h4>\n    <h6 class=\"card-subtitle mb-2 text-muted\">{{node.subtitle}}</h6>\n    <p class=\"card-text\">\n      {{node.content}}\n    </p>\n    <button class=\"btn card-link btn-sm btn-outline-primary\" (click)=\"open(content)\">Supporting information</button>\n  </div>\n \n   <div class=\"card-footer\" *ngIf=\"node.buttons.length\">\n   \t<strong>What do you want to do next?</strong>\n  \t\t<div class=\"custom-controls-stacked\">\n  \t\t  <label class=\"custom-control custom-radio mt-3 mb-3 \" *ngFor=\"let b of node.buttons; let i=index\" >\n  \t\t    <input name=\"radio-stacked\" type=\"radio\" class=\"custom-control-input\" (change)=\"onSelectionChange(b.target_node)\" value=\"b.target_node\">\n  \t\t    <span class=\"custom-control-indicator\"></span>\n  \t\t    <span class=\"custom-control-description\">{{b.label}}</span>\n  \t\t  </label>\n  \t\t</div>\n  \t    <button type=\"button\" (click)=\"goToAction()\" class=\"text-wrap mt-3 mb-3 btn btn-primary btn-block\">Continue</button>\n    </div>\n \n   <div class=\"card-footer\" *ngIf=\"node.final\">\n    <strong>Your pathway</strong>\n        {{ pathway | json }}      \n    </div>\n\n </div>\n\n</div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Supporting information</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Display node tips here!</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/play/play.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-images img {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/play/play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayComponent = (function () {
    function PlayComponent(modalService, http, route) {
        this.modalService = modalService;
        this.http = http;
        this.route = route;
        this.choice = 0;
        this.pathway = [];
    }
    PlayComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PlayComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    PlayComponent.prototype.goToAction = function () {
        var _this = this;
        this.node = this.nodes.find(function (item) { return item.id == _this.choice; });
        this.pathway.push(this.node); // push the node in the pathway
    };
    PlayComponent.prototype.onSelectionChange = function (entry) {
        this.choice = entry;
    };
    PlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.sub = this.route.params.subscribe(params => {
        //   this.id = +params['id']; // (+) converts string 'id' to a number
        console.log('Play!!!');
        this.sub = this.http.get('assets/vps/1/data.json')
            .subscribe(function (data) {
            // Read the result field from the JSON response.
            console.log(data['nodes']);
            _this.nodes = data["nodes"];
            _this.node = data["nodes"][0];
            _this.pathway.push(_this.node); // push the node in the pathway
        });
    };
    PlayComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return PlayComponent;
}()); //end class 
PlayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-play',
        template: __webpack_require__("../../../../../src/app/play/play.component.html"),
        styles: [__webpack_require__("../../../../../src/app/play/play.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], PlayComponent);

var _a, _b, _c;
//# sourceMappingURL=play.component.js.map

/***/ }),

/***/ "../../../../../src/app/play/play.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__play_routing_module__ = __webpack_require__("../../../../../src/app/play/play-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__play_component__ = __webpack_require__("../../../../../src/app/play/play.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PlayModule = (function () {
    function PlayModule() {
    }
    return PlayModule;
}());
PlayModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__play_routing_module__["a" /* PlayRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__play_component__["a" /* PlayComponent */]
        ]
    })
], PlayModule);

//# sourceMappingURL=play.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isLoading\" class=\"text-xs-center\">\n  <i class=\"fa fa-cog fa-spin fa-3x\"></i> <span>{{message}}</span>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/loader/loader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa {\n  vertical-align: middle; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
        this.isLoading = false;
        this.message = null;
    }
    LoaderComponent.prototype.ngOnInit = function () { };
    return LoaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Object)
], LoaderComponent.prototype, "isLoading", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", String)
], LoaderComponent.prototype, "message", void 0);
LoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-loader',
        template: __webpack_require__("../../../../../src/app/shared/loader/loader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/loader/loader.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LoaderComponent);

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_loader_component__ = __webpack_require__("../../../../../src/app/shared/loader/loader.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__loader_loader_component__["a" /* LoaderComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__loader_loader_component__["a" /* LoaderComponent */]
        ],
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    version: '(dev)',
    serverUrl: '/api',
    defaultLanguage: 'en-US',
    supportedLanguages: [
        'en-US',
        'fr-FR'
    ]
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/translations/en-US.json":
/***/ (function(module, exports) {

module.exports = {"APP_NAME":"WAVES","Version":"1.0 Beta","Home":"Home","About":"About","Hello world !":"Hello world !"}

/***/ }),

/***/ "../../../../../src/translations/fr-FR.json":
/***/ (function(module, exports) {

module.exports = {"APP_NAME":"OLMobile","Version":"Version","Home":"Accueil","About":"A propos","Hello world !":"Bonjour le monde !"}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map