webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./PasswordReset/password.module": [
		"../../../../../src/app/PasswordReset/password.module.ts",
		"password.module"
	],
	"./admin-audit-acct/audit.module": [
		"../../../../../src/app/admin-audit-acct/audit.module.ts",
		"audit.module"
	],
	"./admin-distress-alerts/distress-alerts.module": [
		"../../../../../src/app/admin-distress-alerts/distress-alerts.module.ts",
		"distress-alerts.module"
	],
	"./admin-distress/distress.module": [
		"../../../../../src/app/admin-distress/distress.module.ts",
		"distress.module"
	],
	"./admin-login/Admin-login.module": [
		"../../../../../src/app/admin-login/Admin-login.module.ts",
		"Admin-login.module"
	],
	"./admin-manage-customer/manageCustomer.module": [
		"../../../../../src/app/admin-manage-customer/manageCustomer.module.ts",
		"manageCustomer.module"
	],
	"./admin-manage-staff/staff.module": [
		"../../../../../src/app/admin-manage-staff/staff.module.ts",
		"staff.module"
	],
	"./admin-transaction-log/transact.module": [
		"../../../../../src/app/admin-transaction-log/transact.module.ts",
		"transact.module"
	],
	"./calendar/calendar.module": [
		"../../../../../src/app/calendar/calendar.module.ts",
		"calendar.module"
	],
	"./charts/charts.module": [
		"../../../../../src/app/charts/charts.module.ts",
		"common",
		"charts.module"
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module.0"
	],
	"./forms/forms.module": [
		"../../../../../src/app/forms/forms.module.ts",
		"forms.module",
		"common"
	],
	"./maps/maps.module": [
		"../../../../../src/app/maps/maps.module.ts",
		"maps.module"
	],
	"./pages/pages.module": [
		"../../../../../src/app/pages/pages.module.ts",
		"pages.module"
	],
	"./tables/tables.module": [
		"../../../../../src/app/tables/tables.module.ts",
		"tables.module"
	],
	"./user-contacts/contacts.module": [
		"../../../../../src/app/user-contacts/contacts.module.ts",
		"contacts.module"
	],
	"./user-custom-distress-message/customdis.module": [
		"../../../../../src/app/user-custom-distress-message/customdis.module.ts",
		"customdis.module"
	],
	"./user-dashboard/dashboard.module": [
		"../../../../../src/app/user-dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"./user-setting/user-setting.module": [
		"../../../../../src/app/user-setting/user-setting.module.ts",
		"user-setting.module"
	],
	"./user-transaction/transaction.module": [
		"../../../../../src/app/user-transaction/transaction.module.ts",
		"transaction.module"
	],
	"./userpage/user.module": [
		"../../../../../src/app/userpage/user.module.ts",
		"user.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/_codebit/app.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Key; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by olyjosh on 22/02/2018.
 */


var Configuration = Configuration_1 = (function () {
    function Configuration() {
        this.ServerWithApiUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/oliverveits.wordpress.com/posts/3078';
        this.HTTP_OPTIONS = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
    }
    return Configuration;
}());
Configuration.SERVER_URL = 'http://192.168.8.104:8321/';
// public static readonly SERVER_URL = 'http://127.0.0.1:8321/';
// public SERVER_URL = 'http://192.168.40.121:8321/';
Configuration.COMMON_API = Configuration_1.SERVER_URL + 'auth/';
Configuration.API = Configuration_1.SERVER_URL + 'api/';
Configuration = Configuration_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Configuration);

var Key = (function () {
    function Key() {
    }
    return Key;
}());
Key.USER = 'user';
Key.TOKEN = 'token';
Key = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Key);

var Configuration_1;
//# sourceMappingURL=app.constant.js.map

/***/ }),

/***/ "../../../../../src/app/_codebit/services/serviceInterceptors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constant__ = __webpack_require__("../../../../../src/app/_codebit/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/**
 * Created by olyjosh on 22/02/2018.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomInterceptor = (function () {
    //
    function CustomInterceptor(router) {
        this.router = router;
    }
    CustomInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        if (req.url.indexOf(__WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* Configuration */].API) == 0) {
            var token = this.getToken();
            if (token != null && token != __WEBPACK_IMPORTED_MODULE_5_util__["isUndefined"]) {
                // req.headers.set("token", token);
                req = req.clone({
                    setHeaders: {
                        token: token
                    }
                });
                req.headers.append(__WEBPACK_IMPORTED_MODULE_4__app_constant__["b" /* Key */].TOKEN, token);
            }
        }
        return next.handle(req)
            .do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                // let e : HttpResponse = (HttpResponse)event;
            }
        }).catch(function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */] && (err.status == 401 || err.status == 403)) {
                _this.doLogoutComplete();
                _this.router.navigate(['/']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err);
        });
    };
    CustomInterceptor.prototype.getToken = function () {
        return localStorage.getItem(__WEBPACK_IMPORTED_MODULE_4__app_constant__["b" /* Key */].TOKEN);
    };
    CustomInterceptor.prototype.saveToken = function (token) {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_4__app_constant__["b" /* Key */].TOKEN, token);
    };
    CustomInterceptor.prototype.doLogoutComplete = function () {
        // LoginComponent.setExpired(true)
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_4__app_constant__["b" /* Key */].TOKEN);
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_4__app_constant__["b" /* Key */].USER);
    };
    return CustomInterceptor;
}());
CustomInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _a || Object])
], CustomInterceptor);

var _a;
//# sourceMappingURL=serviceInterceptors.js.map

/***/ }),

/***/ "../../../../../src/app/admin-sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"logo myColor data-color-green\">\n\t<a href=\"#\" class=\"simple-text logo-mini\">\n\t\t<div class=\"logo-img\">\n\t\t\t<img src=\"../../assets/img/myicon.png\"/>\n\t\t</div>\n\t</a>\n\t<a href=\"http://www.creative-tim.com\" class=\"simple-text logo-normal\">\n\t\tSafe Paddy Admin\n\t</a>\n</div>\n\n<div class=\"sidebar-wrapper\" data-color=\"green\">\n\n\t<div class=\"user\">\n\t\t<div class=\"info\">\n\t\t\t<div class=\"photo\">\n\t\t\t\t<img src=\"../assets/img/default-avatar.jpg\" />\n\t\t\t</div>\n\t\t\t<a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n\t\t\t\t<span>\n\t\t\t\t\t<small>Super User</small>\n\t\t\t\t\t<b class=\"caret\"></b>\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t\t<div class=\"collapse\" id=\"collapseExample\">\n\t\t\t\t<ul class=\"nav\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a [routerLink]=\"['/pages/user']\">\n\t\t\t\t\t\t\t<span class=\"sidebar-mini fa fa-user\"></span>\n\t\t\t\t\t\t\t<span class=\"sidebar-normal\">My Profile</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a [routerLink]=\"['/charts']\">\n\t\t\t\t\t\t\t<span class=\"sidebar-mini fa fa-key\"></span>\n\t\t\t\t\t\t\t<span class=\"sidebar-normal\">Add Admin</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n    </div>\n    \n    <!-- SOMETHING GOES HERE-->\n\t<div *ngIf=\"isNotMobileMenu()\"style=\"background: purple;\">\n\t\t<form class=\"navbar-form navbar-left navbar-search-form\" role=\"search\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                <input class=\"form-control\" placeholder=\"Search...\" type=\"text\" value=\"\">\n            </div>\n        </form>\n\t\t<ul class=\"nav nav-mobile-menu\">\n            <li>\n                <a ruterLinkActive = \"active\" [routerLink]=\"['/charts']\">\n                    <i class=\"fa fa-line-chart\"></i>\n                    <p>Stats</p>\n                </a>\n            </li>\n\n            <li class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">\n                    <i class=\"fa fa-gavel\"></i>\n                    <p class=\"hidden-md hidden-lg\">\n                        Actions\n                        <b class=\"caret\"></b>\n                    </p>\n                </a>\n                <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Create New Post</a></li>\n                    <li><a href=\"#\">Manage Something</a></li>\n                    <li><a href=\"#\">Do Nothing</a></li>\n                    <li><a href=\"#\">Submit to live</a></li>\n                    <li class=\"divider\"></li>\n                    <li><a href=\"#\">Another Action</a></li>\n                </ul>\n            </li>\n\n            <li class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">\n                    <i class=\"fa fa-bell-o\"></i>\n                    <span class=\"notification\">5</span>\n                    <p class=\"hidden-md hidden-lg\">\n                        Notifications\n                        <b class=\"caret\"></b>\n                    </p>\n                </a>\n                <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Notification 1</a></li>\n                    <li><a href=\"#\">Notification 2</a></li>\n                    <li><a href=\"#\">Notification 3</a></li>\n                    <li><a href=\"#\">Notification 4</a></li>\n                    <li><a href=\"#\">Another notification</a></li>\n                </ul>\n            </li>\n\n            <li class=\"dropdown dropdown-with-icons\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">\n                    <i class=\"fa fa-list\"></i>\n                    <p class=\"hidden-md hidden-lg\">\n                        More\n                        <b class=\"caret\"></b>\n                    </p>\n                </a>\n                <ul class=\"dropdown-menu dropdown-with-icons\">\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pe-7s-mail\"></i> Messages\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pe-7s-help1\"></i> Help Center\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pe-7s-tools\"></i> Settings\n                        </a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    \n                    <li>\n                        <a class=\"text-danger\" href=\"#\">\n                            <i class=\"pe-7s-close-circle\"></i>\n                            Log out\n                        </a>\n                    </li>\n                </ul>\n            </li>\n\n        </ul>\n    </div>\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\n                <!--If is a single link-->\n                <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\n                    <i class=\"{{menuitem.icontype}}\"></i>\n                    <p>{{menuitem.title}}</p>\n                </a>\n                <!--If it have a submenu-->\n                <a data-toggle=\"collapse\" href=\"#{{menuitem.title}}\" *ngIf=\"menuitem.type === 'sub'\">\n                    <i class=\"{{menuitem.icontype}}\"></i>\n                    <p>{{menuitem.title}}<b class=\"caret\"></b></p>\n                </a>\n\n                <!--Display the submenu items-->\n                <div id=\"{{menuitem.title}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n                    <ul class=\"nav\">\n                        <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\">\n                            <a [routerLink]=\"[menuitem.path, childitem.path]\">\n                                <span class=\"sidebar-mini\">{{childitem.ab}}</span>\n                                <span class=\"sidebar-normal\">{{childitem.title}}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </li>\n\t\t\t<li>\n\t\t\t\t<a href=\"http://lbd-pro-angular2.creative-tim.com/documentation/tutorial?ref=lbd-pro-archive\">\n\t\t\t\t\t<i class=\"pe-7s-study\"></i>\n\t\t\t\t\t<p>Help & Support</p>\n\t\t\t\t</a>\n\t\t\t</li>\n        </ul>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin-sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//Menu Items
var ROUTES = [
    {
        path: 'dashboard',
        title: 'dashboard',
        type: 'link',
        icontype: 'pe-7s-credit'
    },
    {
        path: 'distress-alerts',
        title: 'Distress Alerts',
        type: 'link',
        icontype: 'pe-7s-add-user'
    },
    {
        path: 'customers',
        title: 'Manage Customers',
        type: 'link',
        icontype: 'pe-7s-add-user'
    },
    {
        path: 'staff',
        title: 'Manage Staffs',
        type: 'link',
        icontype: 'pe-7s-clock'
    },
    {
        path: 'distress',
        title: 'Distress Category Management',
        type: 'link',
        icontype: 'pe-7s-credit'
    }, {
        path: 'audit',
        title: 'Audit and Account',
        type: 'link',
        icontype: 'pe-7s-credit'
    }, {
        path: 'transact',
        title: 'Transactions logs',
        type: 'link',
        icontype: 'pe-7s-credit'
    },
];
//END SIDEBAR MENU HERE...
var AdminSidebarComponent = (function () {
    function AdminSidebarComponent() {
    }
    AdminSidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    AdminSidebarComponent.prototype.ngOnInit = function () {
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
            $('html').addClass('perfect-scrollbar-on');
        }
        else {
            $('html').addClass('perfect-scrollbar-off');
        }
    };
    AdminSidebarComponent.prototype.ngAfterViewInit = function () {
        var $sidebarParent = $('.sidebar .nav > li.active .collapse li.active > a').parent().parent().parent();
        var collapseId = $sidebarParent.siblings('a').attr("href");
        $(collapseId).collapse("show");
    };
    return AdminSidebarComponent;
}());
AdminSidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'admin-sidebar-cmp',
        template: __webpack_require__("../../../../../src/app/admin-sidebar/sidebar.component.html"),
    })
], AdminSidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../src/app/admin-sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminSidebarModule = (function () {
    function AdminSidebarModule() {
    }
    return AdminSidebarModule;
}());
AdminSidebarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* AdminSidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* AdminSidebarComponent */]]
    })
], AdminSidebarModule);

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_fixedplugin_fixedplugin_module__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_module__ = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_pagesnavbar_pagesnavbar_module__ = __webpack_require__("../../../../../src/app/shared/pagesnavbar/pagesnavbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layouts_user_user_layout_component__ = __webpack_require__("../../../../../src/app/layouts/user/user-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/admin-sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__layouts_adminlogin_admin_login_layout_component__ = __webpack_require__("../../../../../src/app/layouts/adminlogin/admin-login-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__codebit_services_serviceInterceptors__ = __webpack_require__("../../../../../src/app/_codebit/services/serviceInterceptors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // this is needed!

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_15__admin_sidebar_sidebar_module__["a" /* AdminSidebarModule */],
            __WEBPACK_IMPORTED_MODULE_9__shared_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_module__["a" /* FooterModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_fixedplugin_fixedplugin_module__["a" /* FixedPluginModule */],
            __WEBPACK_IMPORTED_MODULE_10__shared_pagesnavbar_pagesnavbar_module__["a" /* PagesnavbarModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["c" /* HttpClientModule */]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_18__codebit_services_serviceInterceptors__["a" /* CustomInterceptor */],
                multi: true
            }
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_13__layouts_user_user_layout_component__["a" /* UserLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_12__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_16__layouts_adminlogin_admin_login_layout_component__["a" /* AdminLoginLayoutComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_user_user_layout_component__ = __webpack_require__("../../../../../src/app/layouts/user/user-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_adminlogin_admin_login_layout_component__ = __webpack_require__("../../../../../src/app/layouts/adminlogin/admin-login-layout.component.ts");




var AppRoutes = [{
        path: '',
        redirectTo: 'pages/login',
        pathMatch: 'full',
    }, {
        path: 'admin-login',
        component: __WEBPACK_IMPORTED_MODULE_3__layouts_adminlogin_admin_login_layout_component__["a" /* AdminLoginLayoutComponent */],
        children: [{
                path: '',
                loadChildren: './admin-login/Admin-login.module#AdminLoginModule'
            }],
    },
    {
        path: 'sys-admin',
        component: __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [{
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'customers',
                loadChildren: './admin-manage-customer/manageCustomer.module#manageCustomerModule'
            }, {
                path: 'audit',
                loadChildren: './admin-audit-acct/audit.module#auditModule'
            }, {
                path: 'staff',
                loadChildren: './admin-manage-staff/staff.module#staffModule'
            }, {
                path: 'transact',
                loadChildren: './admin-transaction-log/transact.module#transactModule'
            }, {
                path: 'distress',
                loadChildren: './admin-distress/distress.module#distressModule'
            }, {
                path: 'distress-alerts',
                loadChildren: './admin-distress-alerts/distress-alerts.module#DistressAlertsModule'
            },
            {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule'
            }, {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            }]
    }, {
        path: 'safeuser',
        component: __WEBPACK_IMPORTED_MODULE_2__layouts_user_user_layout_component__["a" /* UserLayoutComponent */],
        children: [
            {
                path: 'home',
                loadChildren: './user-dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'contacts',
                loadChildren: './user-contacts/contacts.module#ContactsModule'
            }, {
                path: 'settings',
                loadChildren: './user-setting/user-setting.module#UserSettingModule'
            },
            {
                path: 'transaction',
                loadChildren: './user-transaction/transaction.module#TransactionModule'
            }, {
                path: 'profile',
                loadChildren: './userpage/user.module#UserModule'
            }, {
                path: 'password',
                loadChildren: './PasswordReset/password.module#passwordModule'
            }, {
                path: 'customdis',
                loadChildren: './user-custom-distress-message/customdis.module#CustomDistressModule'
            },
            {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule'
            }, {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            }
        ]
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
        children: [{
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
    }
];
// import { Routes } from '@angular/router';
// import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
// import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
// import {UserLayoutComponent} from './layouts/user/user-layout.component';
// export const AppRoutes: Routes = [{
//         path: '',
//         redirectTo: 'pages/login',
//         pathMatch: 'full',
//     }, {
//         path: 'sys-admin',
//         component: AdminLayoutComponent,
//         children: [{
//             path: '',
//             loadChildren: './dashboard/dashboard.module#DashboardModule'
//         },
//     {
//         path: '',
//         component: AdminLayoutComponent,
//         children: [{
//             path: '',
//             loadChildren: './dashboard/dashboard.module#DashboardModule'
//         },{
//             path: 'components',
//             loadChildren: './components/components.module#ContactsModule'
//         },{
//             path: 'forms',
//             loadChildren: './forms/forms.module#Forms'
//         },{
//             path: 'tables',
//             loadChildren: './tables/tables.module#UserSettingModule'
//         },{
//             path: 'maps',
//             loadChildren: './maps/maps.module#MapsModule'
//         },{
//             path: 'charts',
//             loadChildren: './charts/charts.module#ChartsModule'
//         },{
//             path: 'chartsooo',
//             loadChildren: './chartsooo/chartsooo.module#ChartsoooModule'
//         },{
//             path: 'calendar',
//             loadChildren: './calendar/calendar.module#CalendarModule'
//         },{
//             path: '',
//             loadChildren: './userpage/user.module#UserModule'
//         }]
//         },{
//             path: '',
//             component: AuthLayoutComponent,
//             children: [{
//                 path: 'pages',
//                 loadChildren: './pages/pages.module#PagesModule'
//             }]
//         }
// ];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"purple\" data-image=\"\">\n        <admin-sidebar-cmp></admin-sidebar-cmp>\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/full-screen-image-3.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <footer-cmp></footer-cmp>\n    </div>\n\n</div>\n<!--<fixedplugin-cmp></fixedplugin-cmp>-->\n"

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/admin-sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            //   this.url = event.url;
            _this.navbar.sidebarClose();
        });
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $main_panel = $('.main-panel');
            $main_panel.perfectScrollbar();
        }
    };
    return AdminLayoutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__admin_sidebar_sidebar_component__["a" /* AdminSidebarComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__admin_sidebar_sidebar_component__["a" /* AdminSidebarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__admin_sidebar_sidebar_component__["a" /* AdminSidebarComponent */]) === "function" && _a || Object)
], AdminLayoutComponent.prototype, "sidebar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a" /* NavbarComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _b || Object)
], AdminLayoutComponent.prototype, "navbar", void 0);
AdminLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _d || Object])
], AdminLayoutComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/adminlogin/admin-login-layout.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/layouts/adminlogin/admin-login-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminLoginLayoutComponent = (function () {
    // url: string;
    function AdminLoginLayoutComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    AdminLoginLayoutComponent.prototype.ngOnInit = function () {
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            //   this.url = event.url;
        });
    };
    return AdminLoginLayoutComponent;
}());
AdminLoginLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/layouts/adminlogin/admin-login-layout.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _b || Object])
], AdminLoginLayoutComponent);

var _a, _b;
//# sourceMappingURL=admin-login-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.html":
/***/ (function(module, exports) {

module.exports = "  <pagesnavbar-cmp></pagesnavbar-cmp>\n  <router-outlet></router-outlet>\n  <!--<fixedplugin-cmp></fixedplugin-cmp>-->\n"

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_pagesnavbar_pagesnavbar_component__ = __webpack_require__("../../../../../src/app/shared/pagesnavbar/pagesnavbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthLayoutComponent = (function () {
    function AuthLayoutComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            //   this.url = event.url;
            _this.pagesnavbar.sidebarClose();
        });
    };
    return AuthLayoutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__shared_pagesnavbar_pagesnavbar_component__["a" /* PagesnavbarComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_pagesnavbar_pagesnavbar_component__["a" /* PagesnavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_pagesnavbar_pagesnavbar_component__["a" /* PagesnavbarComponent */]) === "function" && _a || Object)
], AuthLayoutComponent.prototype, "pagesnavbar", void 0);
AuthLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _c || Object])
], AuthLayoutComponent);

var _a, _b, _c;
//# sourceMappingURL=auth-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/user/user-layout.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"purple\" data-image=\"\">\n        <sidebar-cmp></sidebar-cmp>\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/full-screen-image-3.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <footer-cmp></footer-cmp>\n    </div>\n\n</div>\n<!--<fixedplugin-cmp></fixedplugin-cmp>-->\n"

/***/ }),

/***/ "../../../../../src/app/layouts/user/user-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__codebit_app_constant__ = __webpack_require__("../../../../../src/app/_codebit/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserLayoutComponent = (function () {
    function UserLayoutComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    UserLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.validateAuthentication();
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            //   this.url = event.url;
            _this.navbar.sidebarClose();
        });
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $main_panel = $('.main-panel');
            $main_panel.perfectScrollbar();
        }
        //storing data in local storage , obtaining token and user parameters
    };
    UserLayoutComponent.prototype.verifyLoggedIn = function () {
        var token = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__codebit_app_constant__["b" /* Key */].TOKEN);
        var user = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__codebit_app_constant__["b" /* Key */].USER);
        if (token == null || token == __WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"] || user == __WEBPACK_IMPORTED_MODULE_6_util__["isNullOrUndefined"] || user == __WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"]) {
            // LoginComponent.setExpired(true)
            this.router.navigate(['/']);
        }
    };
    UserLayoutComponent.prototype.validateAuthentication = function () {
        this.verifyLoggedIn();
        //TODO : Logic to validate session expiry status
    };
    return UserLayoutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidebar'),
    __metadata("design:type", Object)
], UserLayoutComponent.prototype, "sidebar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a" /* NavbarComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
], UserLayoutComponent.prototype, "navbar", void 0);
UserLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/layouts/user/user-layout.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _c || Object])
], UserLayoutComponent);

var _a, _b, _c;
//# sourceMappingURL=user-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-plugin\">\n    <div class=\"dropdown\">\n        <a href=\"#\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\">Configuration</li>\n            <li class=\"adjustments-line\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                    <p *ngIf=\"isPages()\">Sidebar Image</p>\n                    <p *ngIf=\"!isPages()\"> Background Image</p>\n                    <bSwitch\n                      [switch-on-color]=\"'primary'\"\n                      [(ngModel)]=\"background_image\"\n                      [ngClass]=\"['switch','switch-sidebar-image']\"\n                      (onChangeState)=\"onChange($event)\">\n                    </bSwitch>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n\t\t\t<li class=\"adjustments-line\" *ngIf=\"isPages()\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                    <p>Sidebar Mini</p>\n                    <bSwitch\n                      [switch-on-color]=\"'primary'\"\n                      [ngClass]=\"['switch','switch-sidebar-mini']\"\n                      (onChangeState)=\"onChange1($event)\">\n                    </bSwitch>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n\t\t\t<li class=\"adjustments-line\" *ngIf=\"isPages()\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                    <p>Fixed Navbar</p>\n                    <bSwitch\n                      [switch-on-color]=\"'primary'\"\n                      [ngClass]=\"['switch','switch-navbar-fixed']\"\n                      (onChangeState)=\"onChange2($event)\">\n                    </bSwitch>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"adjustments-line\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                    <p>Filters</p>\n                    <div class=\"pull-right\">\n                        <span class=\"badge filter\" data-color=\"black\"></span>\n                        <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\n                        <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                        <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                        <span class=\"badge filter badge-red active\" data-color=\"red\"></span>\n                        <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"header-title\">Sidebar Images</li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../../../assets/img/full-screen-image-1.jpg\">\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../../../assets/img/full-screen-image-2.jpg\">\n                </a>\n            </li>\n            <li class=\"active\">\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../../../assets/img/full-screen-image-3.jpg\">\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../../../assets/img/full-screen-image-4.jpg\">\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0
};
var FixedPluginComponent = (function () {
    function FixedPluginComponent(location) {
        this.background_image = true;
        this.location = location;
    }
    FixedPluginComponent.prototype.ngOnInit = function () {
        var $sidebar = $('.sidebar');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        var $full_page = $('.full-page');
        var $sidebar_responsive = $('body > .navbar-collapse');
        var window_width = $(window).width();
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .badge').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($full_page.length != 0) {
                $full_page.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        $('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
            var new_image = $(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    FixedPluginComponent.prototype.onChange = function ($event) {
        var $sidebar = $('.sidebar');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        var $full_page = $('.full-page');
        var $full_page_background = $('.full-page-background');
        var $sidebar_responsive = $('body > .navbar-collapse');
        if ($event.currentValue) {
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeIn('fast');
                $sidebar.attr('data-image', '#');
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeIn('fast');
                $full_page.attr('data-image', '#');
            }
            this.background_image = true;
        }
        else {
            if ($sidebar_img_container.length != 0) {
                $sidebar.removeAttr('data-image');
                $sidebar_img_container.fadeOut('fast');
            }
            if ($full_page_background.length != 0) {
                $full_page.removeAttr('data-image', '#');
                $full_page_background.fadeOut('fast');
            }
            this.background_image = false;
        }
    };
    FixedPluginComponent.prototype.onChange1 = function ($event) {
        var $body = $('body');
        if (misc.sidebar_mini_active == true) {
            $('body').removeClass('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            $('.sidebar .collapse').collapse('hide').on('hidden.bs.collapse', function () {
                $(this).css('height', 'auto');
            });
            setTimeout(function () {
                $('body').addClass('sidebar-mini');
                $('.sidebar .collapse').css('height', 'auto');
                misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    FixedPluginComponent.prototype.onChange2 = function ($event) {
        var $nav = $('nav.navbar').first();
        if ($nav.hasClass('navbar-fixed')) {
            $nav.removeClass('navbar-fixed').prependTo('.main-panel');
        }
        else {
            $nav.prependTo('.wrapper').addClass('navbar-fixed');
        }
    };
    FixedPluginComponent.prototype.isPages = function () {
        if (this.location.prepareExternalUrl(this.location.path()) == '/pages/login' || this.location.prepareExternalUrl(this.location.path()) == '/pages/register' ||
            this.location.prepareExternalUrl(this.location.path()) == '/pages/lock') {
            return false;
        }
        else {
            return true;
        }
    };
    return FixedPluginComponent;
}());
FixedPluginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fixedplugin-cmp',
        template: __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object])
], FixedPluginComponent);

var _a;
//# sourceMappingURL=fixedplugin.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jw_bootstrap_switch_ng2__ = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jw_bootstrap_switch_ng2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FixedPluginModule = (function () {
    function FixedPluginModule() {
    }
    return FixedPluginModule;
}());
FixedPluginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]]
    })
], FixedPluginModule);

//# sourceMappingURL=fixedplugin.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Privacy Policy\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Terms and condition\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                       Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"https://www.creative-tim.com\">SafePaddy Inc</a>, made with love for a better web\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer-cmp',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav #navbar class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-minimize\">\n            <button id=\"minimizeSidebar\" class=\"btn btn-danger btn-fill btn-round btn-icon\">\n                <i class=\"fa fa-ellipsis-v visible-on-sidebar-regular\"></i>\n                <i class=\"fa fa-navicon visible-on-sidebar-mini\"></i>\n            </button>\n        </div>\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <div class=\"\" *ngIf=\"isMobileMenu()\">\n                <form class=\"navbar-form navbar-left navbar-search-form\" role=\"search\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                        <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                    </div>\n                </form>\n\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a ruterLinkActive = \"active\" [routerLink]=\"['/charts']\">\n                            <i class=\"fa fa-line-chart\"></i>\n                            <p>Stats</p>\n                        </a>\n                    </li>\n\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"fa fa-gavel\"></i>\n                            <p class=\"hidden-md hidden-lg\">\n                                Actions\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Create New Post</a></li>\n                            <li><a href=\"#\">Manage Something</a></li>\n                            <li><a href=\"#\">Do Nothing</a></li>\n                            <li><a href=\"#\">Submit to live</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Another Action</a></li>\n                        </ul>\n                    </li>\n\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"fa fa-bell-o\"></i>\n                            <span class=\"notification\">5</span>\n                            <p class=\"hidden-md hidden-lg\">\n                                Notifications\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Notification 1</a></li>\n                            <li><a href=\"#\">Notification 2</a></li>\n                            <li><a href=\"#\">Notification 3</a></li>\n                            <li><a href=\"#\">Notification 4</a></li>\n                            <li><a href=\"#\">Another notification</a></li>\n                        </ul>\n                    </li>\n\n                    <li class=\"dropdown dropdown-with-icons\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"fa fa-list\"></i>\n                            <p class=\"hidden-md hidden-lg\">\n                                More\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <ul class=\"dropdown-menu dropdown-with-icons\">\n                            <li>\n                                <a href=\"#\">\n                                    <i class=\"pe-7s-mail\"></i> Messages\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\">\n                                    <i class=\"pe-7s-help1\"></i> Help Center\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\">\n                                    <i class=\"pe-7s-tools\"></i> Settings\n                                </a>\n                            </li>\n                            <li class=\"divider\"></li>\n                            <li>\n                                <a href=\"#\">\n                                    <i class=\"pe-7s-lock\"></i> Lock Screen\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-danger\">\n                                    <i class=\"pe-7s-close-circle\"></i>\n                                    Log out\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = (function () {
    function NavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        if ($('body').hasClass('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        $('#minimizeSidebar').click(function () {
            var $btn = $(this);
            if (misc.sidebar_mini_active == true) {
                $('body').removeClass('sidebar-mini');
                misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    NavbarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() < 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        // var toggleButton = this.toggleButton;
        // var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            var parent = this.listTitles[item];
            if (parent.path === titlee) {
                return parent.title;
            }
            else if (parent.children) {
                var children_from_url = titlee.split("/")[2];
                for (var current = 0; current < parent.children.length; current++) {
                    if (parent.children[current].path === children_from_url) {
                        return parent.children[current].title;
                    }
                }
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("navbar-cmp"),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "button", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navbar-cmp',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
    })
], NavbarModule);

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pagesnavbar/pagesnavbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav #pagesnavbar class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"> Safe Paddy  </a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a routerLinkActive=\"active\" [routerLink]=\"['/pages/pricing']\">\n                        <!--<i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i>-->\n                        <p>Pricing</p>\n                    </a>\n                </li>\n                <li>\n                    <a routerLinkActive=\"active\" [routerLink]=\"['/pages/support']\">\n                        <!--<i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>-->\n                        <p>Support</p>\n                    </a>\n                </li>\n                <li>\n                    <a routerLinkActive=\"active\" [routerLink]=\"['/pages/contact-us']\">\n                        <!--<i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>-->\n                        <p>Contact</p>\n                    </a>\n                </li>\n                <li>\n                    <a routerLinkActive=\"active\" [routerLink]=\"['/pages/about-us']\">\n                        <!--<i class=\"fa fa-lock\" aria-hidden=\"true\"></i>-->\n                        <p>About</p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/pagesnavbar/pagesnavbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesnavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagesnavbarComponent = (function () {
    function PagesnavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    PagesnavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        console.log(this.location.prepareExternalUrl(this.location.path()));
    };
    PagesnavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    PagesnavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    PagesnavbarComponent.prototype.sidebarToggle = function () {
        // var toggleButton = this.toggleButton;
        // var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    PagesnavbarComponent.prototype.isLogin = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === 'pages/login') {
            return true;
        }
        return false;
    };
    PagesnavbarComponent.prototype.isLock = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === 'pages/lock') {
            return true;
        }
        return false;
    };
    PagesnavbarComponent.prototype.isRegister = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === 'pages/register') {
            return true;
        }
        return false;
    };
    PagesnavbarComponent.prototype.getPath = function () {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    };
    return PagesnavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("pagesnavbar-cmp"),
    __metadata("design:type", Object)
], PagesnavbarComponent.prototype, "button", void 0);
PagesnavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'pagesnavbar-cmp',
        template: __webpack_require__("../../../../../src/app/shared/pagesnavbar/pagesnavbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
], PagesnavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=pagesnavbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pagesnavbar/pagesnavbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesnavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagesnavbar_component__ = __webpack_require__("../../../../../src/app/shared/pagesnavbar/pagesnavbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PagesnavbarModule = (function () {
    function PagesnavbarModule() {
    }
    return PagesnavbarModule;
}());
PagesnavbarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__pagesnavbar_component__["a" /* PagesnavbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__pagesnavbar_component__["a" /* PagesnavbarComponent */]]
    })
], PagesnavbarModule);

//# sourceMappingURL=pagesnavbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"logo myColor\" data-color=\"black\" >\n            <a href=\"#\" class=\"simple-text logo-mini\">\n                <div class=\"logo-img\">\n                    <img src=\"../../assets/img/myicon.png\"/>\n                </div>\n            </a>\n            <a [routerLink]=\"['']\" class=\"simple-text logo-normal\">\n                Safe Paddy\n            </a>\n</div>\n\n<div class=\"sidebar-wrapper\" data-color=\"black\" style=\"background: black;\" >\n\n\t<div class=\"user\">\n\t\t<div class=\"info\">\n\t\t\t<div class=\"photo\">\n\t\t\t\t<img src=\"../assets/img/default-avatar.jpg\" />\n\t\t\t</div>\n\t\t\t<a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n\t\t\t\t<span>\n\t\t\t\t\t{{name}}\n\t\t\t\t\t<b class=\"caret\"></b>\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t\t<div class=\"collapse\" id=\"collapseExample\">\n\t\t\t\t<ul class=\"nav\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a [routerLink]=\"['/safeuser/profile']\">\n\t\t\t\t\t\t\t<span class=\"sidebar-mini fa fa-user\"></span>\n\t\t\t\t\t\t\t<span class=\"sidebar-normal\">My Profile</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a [routerLink]=\"['/safeuser/password']\">\n\t\t\t\t\t\t\t<span class=\"sidebar-mini fa fa-key\"></span>\n\t\t\t\t\t\t\t<span class=\"sidebar-normal\">Change Password </span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!--<li>-->\n\t\t\t\t\t\t<!--<a href=\"#\">-->\n\t\t\t\t\t\t\t<!--<span class=\"sidebar-mini fa fa-gear\"></span>-->\n\t\t\t\t\t\t\t<!--<span class=\"sidebar-normal\">Settings</span>-->\n\t\t\t\t\t\t<!--</a>-->\n\t\t\t\t\t<!--</li>-->\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n    </div>\n    \n    <!-- SOMETHING GOES HERE-->\n\t<div *ngIf=\"isNotMobileMenu()\" style=\"background: black;\">\n\t\t<form class=\"navbar-form navbar-left navbar-search-form\" role=\"search\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                <input class=\"form-control\" placeholder=\"Search...\" type=\"text\" value=\"\">\n            </div>\n        </form>\n\t\t<ul class=\"nav nav-mobile-menu\">\n            <li>\n                <a ruterLinkActive = \"active\" [routerLink]=\"['/charts']\">\n                    <i class=\"fa fa-line-chart\"></i>\n                    <p>Stats</p>\n                </a>\n            </li>\n\n            <li class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">\n                    <i class=\"fa fa-gavel\"></i>\n                    <p class=\"hidden-md hidden-lg\">\n                        Actions\n                        <b class=\"caret\"></b>\n                    </p>\n                </a>\n                <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Create New Post</a></li>\n                    <li><a href=\"#\">Manage Something</a></li>\n                    <li><a href=\"#\">Do Nothing</a></li>\n                    <li><a href=\"#\">Submit to live</a></li>\n                    <li class=\"divider\"></li>\n                    <li><a href=\"#\">Another Action</a></li>\n                </ul>\n            </li>\n\n            <li class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">\n                    <i class=\"fa fa-bell-o\"></i>\n                    <span class=\"notification\">5</span>\n                    <p class=\"hidden-md hidden-lg\">\n                        Notifications\n                        <b class=\"caret\"></b>\n                    </p>\n                </a>\n                <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Notification 1</a></li>\n                    <li><a href=\"#\">Notification 2</a></li>\n                    <li><a href=\"#\">Notification 3</a></li>\n                    <li><a href=\"#\">Notification 4</a></li>\n                    <li><a href=\"#\">Another notification</a></li>\n                </ul>\n            </li>\n\n            <li class=\"dropdown dropdown-with-icons\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">\n                    <i class=\"fa fa-list\"></i>\n                    <p class=\"hidden-md hidden-lg\">\n                        More\n                        <b class=\"caret\"></b>\n                    </p>\n                </a>\n                <ul class=\"dropdown-menu dropdown-with-icons\">\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pe-7s-mail\"></i> Messages\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pe-7s-help1\"></i> Help Center\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pe-7s-tools\"></i> Settings\n                        </a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    \n                    <li>\n                        <a class=\"text-danger\" href=\"#\">\n                            <i class=\"pe-7s-close-circle\"></i>\n                            Log out\n                        </a>\n                    </li>\n                </ul>\n            </li>\n\n        </ul>\n    </div>\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\n                <!--If is a single link-->\n                <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\n                    <i class=\"{{menuitem.icontype}}\"></i>\n                    <p class=\"text-capitalize\">{{menuitem.title}}</p>\n                </a>\n                <!--If it have a submenu-->\n                <a data-toggle=\"collapse\" href=\"#{{menuitem.title}}\" *ngIf=\"menuitem.type === 'sub'\">\n                    <i class=\"{{menuitem.icontype}}\"></i>\n                    <p>{{menuitem.title}}<b class=\"caret\"></b></p>\n                </a>\n\n                <!--Display the submenu items-->\n                <div id=\"{{menuitem.title}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n                    <ul class=\"nav\">\n                        <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\">\n                            <a [routerLink]=\"[menuitem.path, childitem.path]\">\n                                <span class=\"sidebar-mini\">{{childitem.ab}}</span>\n                                <span class=\"sidebar-normal\">{{childitem.title}}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </li>\n\t\t\t<li>\n\t\t\t\t<a href=\"http://lbd-pro-angular2.creative-tim.com/documentation/tutorial?ref=lbd-pro-archive\">\n\t\t\t\t\t<i class=\"pe-7s-study\"></i>\n\t\t\t\t\t<p>Help & Support</p>\n\t\t\t\t</a>\n\t\t\t</li>\n        </ul>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__codebit_app_constant__ = __webpack_require__("../../../../../src/app/_codebit/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Menu Items
var ROUTES = [
    {
        path: 'home',
        title: 'dashboard',
        type: 'link',
        icontype: 'pe-7s-credit'
    },
    {
        path: 'contacts',
        title: 'Contacts',
        type: 'link',
        icontype: 'pe-7s-add-user'
    },
    {
        path: 'transaction',
        title: 'Transaction',
        type: 'link',
        icontype: 'pe-7s-credit'
    },
    {
        path: 'settings',
        title: 'Settings',
        type: 'sub',
        icontype: 'pe-7s-portfolio',
        children: [
            { path: 'billings', title: 'Billing', ab: 'B' },
            { path: 'subscriptions', title: 'Manage Subscription', ab: 'MS' },
            { path: 'cdm', title: 'Custom Distress Message', ab: 'CDM' },
        ]
    },
];
//END SIDEBAR MENU HERE...
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        this.getName();
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
            $('html').addClass('perfect-scrollbar-on');
        }
        else {
            $('html').addClass('perfect-scrollbar-off');
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        var $sidebarParent = $('.sidebar .nav > li.active .collapse li.active > a').parent().parent().parent();
        var collapseId = $sidebarParent.siblings('a').attr("href");
        $(collapseId).collapse("show");
    };
    SidebarComponent.prototype.getName = function () {
        this.name = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_1__codebit_app_constant__["b" /* Key */].USER)).name;
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sidebar-cmp',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
    })
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=sidebar.module.js.map

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
    production: false
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




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map