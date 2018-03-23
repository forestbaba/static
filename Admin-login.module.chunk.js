webpackJsonp(["Admin-login.module"],{

/***/ "../../../../../src/app/admin-login/Admin-login.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n\n        <div class=\" row text-center\">\n                <div class=\"col-md-12\">\n                <div class=\"header-text\">\n                    <h3>SafePaddy Admin</h3>\n                </div><!-- Header Text Ends Here -->\n\n                <div class=\"form-container\">\n                    <form class=\"form-group\">\n                        <div class=\"text-field\">\n                            <input class=\"my-input form-control\" type=\"text\" placeholder=\" Username \" length=\"100\" name=\"admin-user\" />\n                            <!-- <span class=\"fa fa-user fa-lg\"></span> -->\n                        </div>\n                        <div class=\"password-field\">\n                            <input class=\"my-input form-control\" type=\"password\" value=\"\" placeholder=\" Password \" name=\"admin-password\">\n                            <!-- <span class=\"fa fa-key\"></span>  -->\n                        </div>\n                        <div>\n                            <br>\n                            <a href='#' class=\"my-btn form-control\" type=\"button\" text-center> Log In</a>\n                        </div>\n\n                    </form>\n                    <span id=\"error\"></span>\n                    <small (click)=\"adminResetPassword()\">Forget Password?</small>\n                </div><!-- Form Container  Class Ends Here -->\n\n\n                    <div class=\"myFooter\">\n                        <small> All rights reserved by safepaddy inc. 2018</small>\n                    </div>\n            </div><!--Column Class Ends Here -->\n        </div><!--Wrapper  and Row Class Ends Here -->\n\n</header>\n\n"

/***/ }),

/***/ "../../../../../src/app/admin-login/Admin-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminloginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import {TableData} from "../user-setting/billings/billings.component";
var AdminloginComponent = (function () {
    function AdminloginComponent() {
    }
    AdminloginComponent.prototype.adminResetPassword = function () {
        // line of code to send activation email to admin user
    };
    AdminloginComponent.prototype.ngOnInit = function () {
    };
    return AdminloginComponent;
}());
AdminloginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'admin-login',
        template: __webpack_require__("../../../../../src/app/admin-login/Admin-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin-login/admin-login.component.css")]
    })
], AdminloginComponent);

//# sourceMappingURL=Admin-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-login/Admin-login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginModule", function() { return AdminLoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Admin_login_component__ = __webpack_require__("../../../../../src/app/admin-login/Admin-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Admin_login_routing__ = __webpack_require__("../../../../../src/app/admin-login/Admin-login.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdminLoginModule = (function () {
    function AdminLoginModule() {
    }
    return AdminLoginModule;
}());
AdminLoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__Admin_login_routing__["a" /* AdminloginRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__Admin_login_component__["a" /* AdminloginComponent */]]
    })
], AdminLoginModule);

//# sourceMappingURL=Admin-login.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin-login/Admin-login.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminloginRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Admin_login_component__ = __webpack_require__("../../../../../src/app/admin-login/Admin-login.component.ts");

var AdminloginRoutes = [{
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__Admin_login_component__["a" /* AdminloginComponent */]
            }]
    }];
//# sourceMappingURL=Admin-login.routing.js.map

/***/ }),

/***/ "../../../../../src/app/admin-login/admin-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n    padding:0;\n    margin:0;\n    box-sizing: border-box;\n    font-family: 'Lato','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    color:#fff;\n}\n::-webkit-input-placeholder {\n    color: #c7c0bd;\n}\n:-ms-input-placeholder {\n    color: #c7c0bd;\n}\n::placeholder {\n    color: #c7c0bd;\n}\n\n/*!*body {*!*/\n    /*!*font-family: 'Lato','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;*!*/\n    /*!*font-size:16px;*!*/\n    /*!*font-weight: 400;*!*/\n    /*!*line-height:1.7;*!*/\n    /*!*color:#fff;*!*/\n\n/*!*}*!*/\n/*!*.wrapper{*!*/\n    /*!*position: relative;*!*/\n/*}*/\n.header {\n    height: 100vh;\n    background-image:linear-gradient(to right bottom, rgba(255,020,0200,0.9),rgba(0,0,11,0.8)), url(" + escape(__webpack_require__("../../../../../src/assets/img/full-screen-image-3.jpg")) + ");\n    background-size: cover;\n    background-position: top;\n    position: relative;\n    z-index: -5;\n}\n\n.row{\n    position:absolute;\n    padding-top:15% ;\n    left:40%;\n    text-align:justify;\n}\n.header-text{\n    margin-left: 2px;\n    padding-bottom: 10px;\n}\n.form-container{\n    width: 100%;\n}\n.my-input{\n    padding:12px 20px;\n    margin: 8px 0;\n    font-size: 16px;\n    background-color: rgba(54, 21, 54, 0.425);\n    border: none;\n    border-radius: 20px;\n    width:100%;\n    color: #ffffff;\n}\n\n.my-input:focus{\n    outline:none;\n\n}\n.my-btn{\n    padding:12px 20px;\n    margin: 8px 0;\n    font-size: 16px;\n    background-color: rgba(248, 121, 8, 0.8);\n    border: none;\n    border-radius: 20px;\n    width:100%;\n    color: white;\n    box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2);\n}\n\n\n.myFooter{\n    padding-top: 80%;\n    color: rgb(139, 114, 114);\n    text-align:center;\n\n\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/img/full-screen-image-3.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "full-screen-image-3.9f19f770f70da96443b0.jpg";

/***/ }),

/***/ "../../../../css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ })

});
//# sourceMappingURL=Admin-login.module.chunk.js.map