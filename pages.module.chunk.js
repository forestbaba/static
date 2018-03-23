webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page register-page\" data-color=\"black\" data-image=\"../../../assets/img/full-screen-image-2.jpg\">\n\n        <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 col-md-offset-2\">\n                        <div class=\"header-text\">\n                            <h2>About Us Page</h2>\n                            <h4>Register for free and experience the dashboard today</h4>\n                            <hr />\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-md-offset-2\">\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <div class=\"icon\">\n                                    <i class=\"pe-7s-user\"></i>\n                                </div>\n                            </div>\n                            <div class=\"media-body\">\n                                <h4>Our Vision</h4>\n                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n                            </div>\n                        </div>\n\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <div class=\"icon\">\n                                    <i class=\"pe-7s-graph1\"></i>\n                                </div>\n                            </div>\n                            <div class=\"media-body\">\n                                <h4>Our Mission</h4>\n                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n\n                            </div>\n                        </div>\n\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <div class=\"icon\">\n                                    <i class=\"pe-7s-headphones\"></i>\n                                </div>\n                            </div>\n                            <div class=\"media-body\">\n                                <h4>Support Team</h4>\n                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-4 col-md-offset-s1\">\n                        <div id=\"\" class=\"\">\n                            <div class=\"media\">\n                                <div class=\"media-left\">\n                                    <div class=\"icon\">\n                                        <i class=\"pe-7s-headphones\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"media-body\">\n                                    <h4>Support Team</h4>\n                                    Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n\n                                </div>\n                            </div>\n                            <div class=\"media\">\n                                <div class=\"media-left\">\n                                    <div class=\"icon\">\n                                        <i class=\"pe-7s-magic-wand\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"media-body\">\n                                    <h4>SafePaddy Magic</h4>\n                                    Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n\n                                </div>\n                            </div>\n                            <div class=\"media\">\n                                <div class=\"media-left\">\n                                    <div class=\"icon\">\n                                        <i class=\"pe-7s-science pe-spin\"></i>\n                                        <i class=pe-li pe-spin pe-7s-help2></i>\n                                    </div>\n                                </div>\n                                <div class=\"media-body\">\n                                    <h4>The future is clear </h4>\n                                    Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <footer class=\"footer footer-transparent\">\n            <div class=\"container\">\n                <p class=\"copyright text-center\">\n                    &copy; {{test | date: 'yyyy'}} <a href=\"#\">SafePaddy Inc.</a>, made with love for a better life\n                </p>\n            </div>\n        </footer>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
        this.test = new Date();
    }
    AboutUsComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    AboutUsComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    return AboutUsComponent;
}());
AboutUsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register-cmp',
        template: __webpack_require__("../../../../../src/app/pages/about-us/about-us.component.html")
    })
], AboutUsComponent);

//# sourceMappingURL=about-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page register-page\" data-color=\"black\" data-image=\"../../../assets/img/full-screen-image-2.jpg\">\n\n    <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 col-md-offset-2\">\n                        <div class=\"header-text\">\n                            <h2>Contact Us </h2>\n                            <hr />\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-md-offset-2\">\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <div class=\"icon\">\n                                    <i class=\"pe-7s-user\"></i>\n                                </div>\n                            </div>\n                            <div class=\"media-body\">\n                                <h4>Free Account</h4>\n                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n                            </div>\n                        </div>\n\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <div class=\"icon\">\n                                    <i class=\"pe-7s-graph1\"></i>\n                                </div>\n                            </div>\n                            <div class=\"media-body\">\n                                <h4>Awesome Performances</h4>\n                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n\n                            </div>\n                        </div>\n                        <div class=\"media\" style=\"margin-left:12%; padding:5%;\">\n\n                            <div class=\"icon\">\n                                <i class=\"pe-7s-graph1\"></i>\n                                <i class=\"pe-7s-user\"></i>\n                                <i class=\"pe-7s-user\"></i>\n                                <i class=\"fa fa-twitter\"></i>\n                                <i class=\"fa fa-facebook\"></i>\n                            </div>\n\n\n\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-4 col-md-offset-s1\">\n                        <form method=\"#\" action=\"#\">\n                            <div class=\"card card-plain\">\n                                <div class=\"content\">\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Your Name\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Company\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"number\" placeholder=\"Phone Number\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <textarea placeholder=\"Please Enter Your Message Here\" class=\"form-control\"></textarea>\n                                    </div>\n\n\n\n                                </div>\n                                <div class=\"footer text-center\">\n                                     <input type=\"submit\" placeholder=\"Enter email\" class=\"form-control\">\n                                </div>\n                            </div>\n                        </form>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <footer class=\"footer footer-transparent\">\n            <div class=\"container\">\n                <p class=\"copyright text-center\">\n                    &copy; {{test | date: 'yyyy'}} <a href=\"https://www.creative-tim.com\">SafePaddy</a>, made with love for a better life\n                </p>\n            </div>\n        </footer>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactUsComponent = (function () {
    function ContactUsComponent() {
        this.test = new Date();
    }
    ContactUsComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    ContactUsComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    return ContactUsComponent;
}());
ContactUsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register-cmp',
        template: __webpack_require__("../../../../../src/app/pages/contact-us/contact-us.component.html")
    })
], ContactUsComponent);

//# sourceMappingURL=contact-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/lock/lock.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"wrapper wrapper-full-page\"> -->\n\n    <div class=\"full-page lock-page\" data-color=\"red\" data-image=\"../../../assets/img/full-screen-image-4.jpg\"> \n\n    <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <form method=\"#\" action=\"#\">\n                  \n\n                <div class=\"user-profile\">\n                        <h4>Admin Panel</h4>\n                    <!-- <div class=\"author\">\n                        <img class=\"avatar\" src=\"../../../assets/img/myicon.png\" alt=\"...\"> \n                    </div> -->\n                    \n                    <div class=\"form-group\">\n                        <input type=\"text\" placeholder=\"Enter Username\" class=\"form-control\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" placeholder=\"Enter Password\" class=\"form-control\">\n                    </div>\n                    <a href=\"#\">\n                            <p class=\"text-center\">forget password? </p>\n                    </a>\n                    <button type=\"button\" class=\"btn btn-neutral btn-round btn-fil btn-wd\">Log In</button>\n                </div>\n            </form>\n        </div>\n\n    \t<footer class=\"footer footer-transparent\">\n            <div class=\"container\">\n                <nav class=\"pull-left\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Terms and Condition\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Privacy Policy\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                               Blog\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <p class=\"copyright pull-right\">\n                    &copy; {{test | date: 'yyyy'}} <a href=\"#\">CodeBit Inc</a>, made with love for a better web\n                </p>\n            </div>\n        </footer>\n    </div> \n\n<!-- </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/pages/lock/lock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LockComponent = (function () {
    function LockComponent() {
        this.test = new Date();
    }
    LockComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LockComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    return LockComponent;
}());
LockComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'lock-cmp',
        template: __webpack_require__("../../../../../src/app/pages/lock/lock.component.html")
    })
], LockComponent);

//# sourceMappingURL=lock.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page login-page\" data-color=\"black\" data-image=\"../../../assets/img/full-screen-image-3.jpg\">\n\n        <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <!-- Our Tag Text Starts Here -->\n                    <div class=\"col-md-6 col-sm-6 col-md-offset-0 col-sm-offset-0 text-left card-hidden\"\n                         id=\"tryHeaderText\" style=\"color:white; margin-top:100px;\">\n                         <h2 id=\"header-one\"> You Are Safer With <span style=\"color:whitesmoke; \"><strong>SAFEPADDY</strong></span></h2>\n                         <h4 id=\"header-two\">We offer the better way to Handle emergences with friends & Family always at your beck and call</h4>\n                        <div id=\"myDownloadbutton\">\n                            <a href=\"#\" class=\"btn-black\" > Play Store</a>\n                            <a href=\"#\" class=\"btn-black\" > Apple Store</a>\n                        </div>\n\n                    </div>\n                    <!-- form div starts here -->\n\n\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-0 col-sm-offset-0 pull-right\" [ngSwitch]=\"toggle\">\n\n                        <!--login-->\n                        <div *ngSwitchDefault>\n                            <form method=\"\" action=\"\">\n                                <!--   if you want to have the card without animation please remove the \".card-hidden\" class   -->\n                                <div class=\"card \">\n                                    <div class=\"header text-center\">Login</div>\n                                    <div class=\"content\">\n                                        <div class=\"form-group\">\n                                            <label>Email address</label>\n                                            <input [(ngModel)]=\"loginData.username\" ngModel name=\"email\"  required email type=\"email\" placeholder=\"Enter email\" class=\"form-control\">\n\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label>Password</label>\n\n                                            <div class=\"input-group\">\n\n                                                <input ngControl=\"login\" [(ngModel)]=\"loginData.password\" ngModel name=\"pass\"\n                                                       *ngIf=\"!showPasswordNow\" type=\"password\" placeholder=\"Password\"\n                                                       class=\"form-control\">\n                                                <input ngControl=\"login\" [(ngModel)]=\"loginData.password\" ngModel name=\"pass\"\n                                                       *ngIf=\"showPasswordNow\" placeholder=\"Password\" class=\"form-control\">\n                                                <span (mousedown)=\"mousedown()\" (mouseup)=\"mouseup()\" class=\"input-group-addon\"><i class=\"pe-7s-look\"></i></span>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <div>\n                                        <small class=\"text-success text-capitalize\"> {{loginError}}</small>\n                                    </div>\n                                    <div class=\"footer\">\n                                        <div class=\" pull-right\">\n                                            <a (click)=\"gotoForg()\">Forget Password?</a>&nbsp;&nbsp;&nbsp;&nbsp;\n                                            <button (click)=\"userLogin()\" type=\"submit\" class=\"btn btn-fill  btn-wd \" style=\"background:rgba(0,0,0, 0.7);\" > Login</button>\n                                        </div>\n                                        <div class=\" text-center \">\n                                            <a (click)=\"gotoReg()\">New User? Click Here to Register</a>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n\n\n                        <!--Register start-->\n                        <div *ngSwitchCase=\"1\">\n                           <div class=\"card\">\n                               <form>\n                                   <div class=\"header text-center\">Register</div>\n                                   <div class=\"content\">\n                                       <div class=\"form-group\">\n                                           <label>User Name: </label>\n                                           <input  type=\"text\" class=\"form-control\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"signUpData.username\" placeholder=\"Enter Username\" >\n                                       </div>\n                                       <div class=\"form-group\">\n                                           <label>Email: </label>\n                                           <input  type=\"email\" class=\"form-control\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"signUpData.email\" placeholder=\"Enter Email\" >\n                                       </div>\n                                       <div class=\"form-group\">\n                                           <label>Phone Number: </label>\n                                           <input  type=\"number\" class=\"form-control\" name=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"signUpData.phone\" placeholder=\"Enter Phone Number\" >\n                                       </div>\n                                       <div class=\"form-group\">\n                                           <label>Password</label>\n                                           <div class=\"input-group\">\n                                               <input ngControl=\"login\" (ngModel)=\"signUpData.password\" name=\"login\"\n                                                      *ngIf=\"!showPasswordNow\" type=\"password\" placeholder=\"Password\"\n                                                      class=\"form-control\">\n                                               <input ngControl=\"login\" [(ngModel)]=\"signUpData.password\" name=\"login\"\n                                                      *ngIf=\"showPasswordNow\" placeholder=\"Password\" class=\"form-control\">\n                                               <span (mousedown)=\"mousedown()\" (mouseup)=\"mouseup()\" class=\"input-group-addon\"><i class=\"pe-7s-look\"></i></span>\n                                           </div>\n                                       </div>\n                                   </div>\n                                   <div class=\"footer\" style=\"margin-bottom:10px;\">\n                                       <div class=\"pull-right\">\n                                           <a (click)=\"createUser()\" type=\"submit\" class=\"btn btn-fill btn-wd\" style=\"background:rgba(0,0,0, 0.7);\">Register</a>\n                                       </div>\n                                       <div class=\"pull-left\">\n                                           <a (click)=\"gotoLogIn()\">Already a User?</a>\n                                       </div>\n                                   </div>\n                               </form>\n                           </div>\n                        </div>\n\n                        <!--Password forget start-->\n                        <div *ngSwitchCase=\"2\">\n                            <form method=\"#\" action=\"#\"  >\n                                <!--   if you want to have the card without animation please remove the \".card-hidden\" class   -->\n                                <div class=\"card \" >\n                                    <div class=\"header text-center\" >Reset Password Request</div>\n                                        <div class=\"content\" [ngSwitch]=\"resetPass\" >\n                                            <div *ngSwitchDefault >\n                                                <span class=\"pe-7s-door-lock text-center \" style=\"font-size:50px;margin-left:40%; padding-bottom:10%; color:lightgrey;\"></span>\n                                                <div class=\"form-group\" >\n                                                    <input  [(ngModel)]=\"resetData.email\" type=\"email\" name=\"email\" placeholder=\"Enter email\" class=\"form-control\">\n                                                </div>\n                                                <div>\n                                                    <button (click)=\"resetPassword()\" type=\"submit\" style=\"width:100%; background:rgba(0,0,0, 0.7);\"id=\"resetpassword\" class=\"btn btn-fill  btn-wd text-center\">Reset Password</button>\n                                                </div>\n                                            </div>\n                                            <div *ngSwitchCase=\"1\" style=\"background-color: lightgray; padding:20px; color: black;\" class=\"text-center\">Check Your Email for Reset Info</div>\n                                        </div>\n\n\n                                    \n                                    <div class=\"footer text-center\">\n                                        <a (click)=\"gotoLogIn()\">Back to Login</a>\n                                        \n                                    </div>\n\n                                </div>\n                            </form>\n                        </div>\n\n\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <footer class=\"footer footer-transparent\">\n            <div class=\"container\">\n                <nav class=\"pull-left\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Privacy Policy\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Terms and Condition\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Blog\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <p class=\"copyright pull-right\">\n                    &copy; {{test | date: 'yyyy'}} <a href=\"https://www.creative-tim.com\">SafePaddy Inc.</a>, made with\n                    love for a better life\n                </p>\n            </div>\n        </footer>\n\n    </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__codebit_services_serviceInterceptors__ = __webpack_require__("../../../../../src/app/_codebit/services/serviceInterceptors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__codebit_app_constant__ = __webpack_require__("../../../../../src/app/_codebit/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loginService__ = __webpack_require__("../../../../../src/app/pages/login/loginService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.signUpData = {};
        this.signUpResponse = {};
        this.loginData = {};
        this.loginResponse = {};
        this.resetData = {};
        this.resetResponse = {};
    }
    LoginComponent.prototype.mousedown = function () {
        this.showPasswordNow = true;
    };
    LoginComponent.prototype.mouseup = function () {
        this.showPasswordNow = false;
    };
    LoginComponent.prototype.gotoReg = function () {
        this.toggle = 1;
    };
    LoginComponent.prototype.gotoForg = function () {
        this.toggle = 2;
        this.resetPass = 0;
    };
    LoginComponent.prototype.gotoLogIn = function () {
        this.toggle = 0;
    };
    /**
     * The function for creating user
     */
    LoginComponent.prototype.createUser = function () {
        var _this = this;
        this.loginService.createUser(this.signUpData)
            .subscribe(function (data) { return _this.signUpResponse = data; }, function (error) { return function () {
            console.log("Error occur!");
        }; }, function () {
            console.log(_this.signUpResponse);
        });
    };
    LoginComponent.prototype.resetPassword = function () {
        var _this = this;
        this.loginService.resetPassword(this.resetData)
            .subscribe(function (data) {
            _this.resetResponse = data;
            console.log(_this.resetResponse);
            if (_this.resetResponse.status == 1) {
                _this.resetPass = 1;
            }
        }, function (error) { return function () {
            console.log("Error occur!");
            // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        }; });
    };
    /**** check point **/
    LoginComponent.prototype.userLogin = function () {
        var _this = this;
        this.loginService.userLogin(this.loginData)
            .subscribe(function (data) {
            _this.loginResponse = data;
            // console.log(this.loginResponse);
            if (data.status == 1) {
                _this.saveLoginData(data.message, data.user);
                _this.router.navigate(['/safeuser/home']);
            }
            else {
                _this.loginError = data.message;
            }
        }, function (error) { return function () {
            console.log("Error occur!");
        }; });
    };
    LoginComponent.prototype.saveLoginData = function (token, user) {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__codebit_app_constant__["b" /* Key */].TOKEN, token);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__codebit_app_constant__["b" /* Key */].USER, JSON.stringify(user));
    };
    /**
     * The function for form submit
     */
    LoginComponent.prototype.onSubmit = function () {
        console.log('submitted');
    };
    LoginComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LoginComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
        this.showSessionExpired();
    };
    LoginComponent.prototype.showSessionExpired = function () {
        $.notify({
            icon: "pe-7s-key",
            message: "Your session has expired. <b>Please login</b> to continue enjoying <b>SafePaddy<b/>"
        }, {
            type: 'info',
            timer: 4000,
            placement: {
                from: 'top',
                align: 'center'
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_2__codebit_services_serviceInterceptors__["a" /* CustomInterceptor */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_2__codebit_services_serviceInterceptors__["a" /* CustomInterceptor */], multi: true }
        ]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        providers: [__WEBPACK_IMPORTED_MODULE_4__loginService__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__codebit_app_constant__["a" /* Configuration */]],
        selector: 'login-cmp',
        template: __webpack_require__("../../../../../src/app/pages/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__loginService__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__loginService__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/loginService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__codebit_app_constant__ = __webpack_require__("../../../../../src/app/_codebit/app.constant.ts");
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




var LoginService = (function () {
    function LoginService(http, _configuration) {
        this.http = http;
        this._configuration = _configuration;
        this.actionUrl = _configuration.ServerWithApiUrl; //+ 'values/';
        this.signUpUrl = __WEBPACK_IMPORTED_MODULE_3__codebit_app_constant__["a" /* Configuration */].COMMON_API + 'createUser';
        this.loginUrl = __WEBPACK_IMPORTED_MODULE_3__codebit_app_constant__["a" /* Configuration */].COMMON_API + 'login';
        this.resetUrl = __WEBPACK_IMPORTED_MODULE_3__codebit_app_constant__["a" /* Configuration */].COMMON_API + 'forgetpass';
    }
    LoginService.prototype.createUser = function (data) {
        return this.http.post(this.signUpUrl, data, this._configuration.HTTP_OPTIONS);
    };
    LoginService.prototype.userLogin = function (data) {
        // alert(this.loginUrl)
        return this.http.post(this.loginUrl, data, this._configuration.HTTP_OPTIONS);
    };
    LoginService.prototype.resetPassword = function (data) {
        return this.http.get(this.resetUrl + '?email=' + data.email);
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__codebit_app_constant__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__codebit_app_constant__["a" /* Configuration */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=loginService.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_routing__ = __webpack_require__("../../../../../src/app/pages/pages.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lock_lock_component__ = __webpack_require__("../../../../../src/app/pages/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__support_support_component__ = __webpack_require__("../../../../../src/app/pages/support/support.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_us_about_us_component__ = __webpack_require__("../../../../../src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pricing_pricing_component__ = __webpack_require__("../../../../../src/app/pages/pricing/pricing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__pages_routing__["a" /* PagesRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__lock_lock_component__["a" /* LockComponent */],
            __WEBPACK_IMPORTED_MODULE_8__support_support_component__["a" /* SupportComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pricing_pricing_component__["a" /* PricingComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contact_us_contact_us_component__["a" /* ContactUsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__about_us_about_us_component__["a" /* AboutUsComponent */]
        ]
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lock_lock_component__ = __webpack_require__("../../../../../src/app/pages/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_us_about_us_component__ = __webpack_require__("../../../../../src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pricing_pricing_component__ = __webpack_require__("../../../../../src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__support_support_component__ = __webpack_require__("../../../../../src/app/pages/support/support.component.ts");







var PagesRoutes = [{
        path: '',
        children: [{
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
            }, {
                path: 'lock',
                component: __WEBPACK_IMPORTED_MODULE_1__lock_lock_component__["a" /* LockComponent */]
            }, {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_0__register_register_component__["a" /* RegisterComponent */]
            }, {
                path: 'contact-us',
                component: __WEBPACK_IMPORTED_MODULE_4__contact_us_contact_us_component__["a" /* ContactUsComponent */]
            }, {
                path: 'about-us',
                component: __WEBPACK_IMPORTED_MODULE_3__about_us_about_us_component__["a" /* AboutUsComponent */]
            }, {
                path: 'pricing',
                component: __WEBPACK_IMPORTED_MODULE_5__pricing_pricing_component__["a" /* PricingComponent */]
            }, {
                path: 'support',
                component: __WEBPACK_IMPORTED_MODULE_6__support_support_component__["a" /* SupportComponent */]
            }]
    }];
//# sourceMappingURL=pages.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page register-page\" data-color=\"red\" data-image=\"../../../assets/img/full-screen-image-2.jpg\">\n\n    <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 col-md-offset-2\">\n                        <div class=\"header-text\">\n                            <h2>Pricing Table For Safepaddy </h2>\n                            <h4>Register for free and experience the dashboard today</h4>\n                            <hr />\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-md-offset-2\">\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <div class=\"icon\">\n                                    <i class=\"pe-7s-user\"></i>\n                                </div>\n                            </div>\n                            <div class=\"media-body\">\n                                <h4>Free Account</h4>\n                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n                            </div>\n                        </div>\n\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <div class=\"icon\">\n                                    <i class=\"pe-7s-graph1\"></i>\n                                </div>\n                            </div>\n                            <div class=\"media-body\">\n                                <h4>Awesome Performances</h4>\n                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n\n                            </div>\n                        </div>\n\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <div class=\"icon\">\n                                    <i class=\"pe-7s-headphones\"></i>\n                                </div>\n                            </div>\n                            <div class=\"media-body\">\n                                <h4>Global Support</h4>\n                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-4 col-md-offset-s1\">\n                        <form method=\"#\" action=\"#\">\n                            <div class=\"card card-plain\">\n                                <div class=\"content\">\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Your First Name\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Your Last Name\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Company\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Enter email\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"password\" placeholder=\"Password Confirmation\" class=\"form-control\">\n                                    </div>\n                                </div>\n                                <div class=\"footer text-center\">\n                                    <button type=\"submit\" class=\"btn btn-fill btn-neutral btn-wd\">Create Free Account</button>\n                                </div>\n                            </div>\n                        </form>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <footer class=\"footer footer-transparent\">\n            <div class=\"container\">\n                <p class=\"copyright text-center\">\n                    &copy; {{test | date: 'yyyy'}} <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n                </p>\n            </div>\n        </footer>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PricingComponent = (function () {
    function PricingComponent() {
        this.test = new Date();
    }
    PricingComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    PricingComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    return PricingComponent;
}());
PricingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register-cmp',
        template: __webpack_require__("../../../../../src/app/pages/pricing/pricing.component.html")
    })
], PricingComponent);

//# sourceMappingURL=pricing.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page register-page\" data-color=\"red\" data-image=\"../../../assets/img/full-screen-image-2.jpg\">\n\n    <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 col-md-offset-2\">\n                        <div class=\"header-text\">\n                            <h2>Light Bootstrap Dashboard PRO</h2>\n                            <h4>Register for free and experience the dashboard today</h4>\n                            <hr />\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-md-offset-2\">\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <div class=\"icon\">\n                                    <i class=\"pe-7s-user\"></i>\n                                </div>\n                            </div>\n                            <div class=\"media-body\">\n                                <h4>Free Account</h4>\n                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n                            </div>\n                        </div>\n\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <div class=\"icon\">\n                                    <i class=\"pe-7s-graph1\"></i>\n                                </div>\n                            </div>\n                            <div class=\"media-body\">\n                                <h4>Awesome Performances</h4>\n                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n\n                            </div>\n                        </div>\n\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <div class=\"icon\">\n                                    <i class=\"pe-7s-headphones\"></i>\n                                </div>\n                            </div>\n                            <div class=\"media-body\">\n                                <h4>Global Support</h4>\n                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-4 col-md-offset-s1\">\n                        <form method=\"#\" action=\"#\">\n                            <div class=\"card card-plain\">\n                                <div class=\"content\">\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Your First Name\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Your Last Name\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Company\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Enter email\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"password\" placeholder=\"Password Confirmation\" class=\"form-control\">\n                                    </div>\n                                </div>\n                                <div class=\"footer text-center\">\n                                    <button type=\"submit\" class=\"btn btn-fill btn-neutral btn-wd\">Create Free Account</button>\n                                </div>\n                            </div>\n                        </form>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <footer class=\"footer footer-transparent\">\n            <div class=\"container\">\n                <p class=\"copyright text-center\">\n                    &copy; {{test | date: 'yyyy'}} <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n                </p>\n            </div>\n        </footer>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegisterComponent = (function () {
    function RegisterComponent() {
        this.test = new Date();
    }
    RegisterComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    RegisterComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register-cmp',
        template: __webpack_require__("../../../../../src/app/pages/register/register.component.html")
    })
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/support/support.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page register-page\" data-color=\"red\" data-image=\"../../../assets/img/full-screen-image-2.jpg\">\n\n    <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 col-md-offset-2\">\n                        <div class=\"header-text\">\n                            <h2>Support Page</h2>\n                            <h4>Register for free and experience the dashboard today</h4>\n                            <hr />\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-md-offset-2\">\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <div class=\"icon\">\n                                    <i class=\"pe-7s-user\"></i>\n                                </div>\n                            </div>\n                            <div class=\"media-body\">\n                                <h4>Free Account</h4>\n                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n                            </div>\n                        </div>\n\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <div class=\"icon\">\n                                    <i class=\"pe-7s-graph1\"></i>\n                                </div>\n                            </div>\n                            <div class=\"media-body\">\n                                <h4>Awesome Performances</h4>\n                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n\n                            </div>\n                        </div>\n\n                        <div class=\"media\">\n                            <div class=\"media-left\">\n                                <div class=\"icon\">\n                                    <i class=\"pe-7s-headphones\"></i>\n                                </div>\n                            </div>\n                            <div class=\"media-body\">\n                                <h4>Global Support</h4>\n                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.\n\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-4 col-md-offset-s1\">\n                        <form method=\"#\" action=\"#\">\n                            <div class=\"card card-plain\">\n                                <div class=\"content\">\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Your First Name\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Your Last Name\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Company\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"email\" placeholder=\"Enter email\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"password\" placeholder=\"Password Confirmation\" class=\"form-control\">\n                                    </div>\n                                </div>\n                                <div class=\"footer text-center\">\n                                    <button type=\"submit\" class=\"btn btn-fill btn-neutral btn-wd\">Create Free Account</button>\n                                </div>\n                            </div>\n                        </form>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <footer class=\"footer footer-transparent\">\n            <div class=\"container\">\n                <p class=\"copyright text-center\">\n                    &copy; {{test | date: 'yyyy'}} <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n                </p>\n            </div>\n        </footer>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/support/support.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SupportComponent = (function () {
    function SupportComponent() {
        this.test = new Date();
    }
    SupportComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    SupportComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    return SupportComponent;
}());
SupportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register-cmp',
        template: __webpack_require__("../../../../../src/app/pages/support/support.component.html")
    })
], SupportComponent);

//# sourceMappingURL=support.component.js.map

/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map