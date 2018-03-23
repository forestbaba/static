webpackJsonp(["customdis.module"],{

/***/ "../../../../../src/app/user-custom-distress-message/customdis.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Custom Distress Message</h4>\n                        <p class=\"category\">You Can Edit the default message sent to your contacts when you trigger emergency alert</p>\n\n\n\n                            <p>Health Message</p>\n                            <form class=\"form-group\">\n                              <textarea class=\"form-control\" Placeholder= \"This is the default message to be sent to your contact when you trigger the panic button on your device via this app\">\n                              </textarea>\n                            </form>\n                            <a href=\"#\">\n                                <span class=\"badge badge-pill badge-primary\">Edit</span>\n                            </a>\n                            <hr>\n\n\n\n\n\n                            <p>Child Safety Message</p>\n                            <form class=\"form-group\">\n                              <textarea class=\"form-control\" Placeholder= \"This is the default message to be sent to your contact when you trigger the panic button on your device via this app\">\n                              </textarea>\n                            </form>\n                            <a href=\"#\">\n                                <span class=\"badge badge-pill badge-primary\">Edit</span>\n                            </a>\n                            <hr>\n\n\n\n\n\n                            <p>Anticipated Distress </p>\n                            <form class=\"form-group\">\n                              <textarea class=\"form-control\" Placeholder= \"This is the default message to be sent to your contact when you trigger the panic button on your device via this app\">\n                              </textarea>\n                            </form>\n                            <a href=\"#\">\n                                <span class=\"badge badge-pill badge-primary\">Edit</span>\n                            </a>\n                            <hr>\n\n\n\n\n\n                            <p>Security Message</p>\n                            <form class=\"form-group\">\n                                  <textarea class=\"form-control\" value=\"This is the default message to be sent to your contact when you trigger the panic button on your device via this app\">\n                                  </textarea>\n                            </form>\n                            <a href=\"#\">\n                                <span class=\"badge badge-pill badge-primary \">Edit</span>\n                            </a>\n                            <hr>\n\n            <!-- Distress Message Forms Ends Here--->\n\n\n                    <div class=\"content table-responsive table-full-width\">\n                        <table class=\"table\">\n                            <thead>\n                            <tr>\n                                <th class=\"text-center\">{{ tableData1.headerRow[0] }}</th>\n                                <th>{{ tableData1.headerRow[1] }}</th>\n                                <th>{{ tableData1.headerRow[2] }}</th>\n                                <th class=\" text-left\">{{ tableData1.headerRow[3] }}</th>\n                                <th class=\"text-left\">{{ tableData1.headerRow[4] }}</th>\n                                <th class=\"text-right\">{{ tableData1.headerRow[5] }}</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let row of tableData1.dataRows\">\n                                <td class=\"text-center\">{{row[0]}}</td>\n                                <td>{{row[1]}}</td>\n                                <td>{{row[2]}}</td>\n                                <td class=\"text-left\"> {{row[3]}}</td>\n                                <td class=\"text-left\"> {{row[4]}}</td>\n\n\n                                <td class=\"td-actions text-right\">\n                                    <!--<a rel=\"tooltip\" title=\"View Profile\" class=\"btn btn-info btn-simple btn-xs\">-->\n                                        <!--<i class=\"fa fa-user\"></i>-->\n                                    <!--</a>-->\n                                    <a rel=\"tooltip\" title=\"Details\" class=\"btn btn-success btn-simple btn-xs\">\n                                        <i class=\"fa fa-edit\"></i>\n                                    </a>\n                                    <!--<a rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">-->\n                                        <!--<i class=\"fa fa-times\"></i>-->\n                                    <!--</a>-->\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-custom-distress-message/customdis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDistressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomDistressComponent = (function () {
    function CustomDistressComponent() {
        this.state_plain = true;
    }
    CustomDistressComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['#', 'Transaction id', 'Description', 'Date', 'Amount', 'Actions'],
            dataRows: [
                ['1', '221334', 'monthly subscription', 'March 2018', '9000'],
                ['2', '23478', 'Annual Sub', 'Feb 2018', '60000'],
                ['3', '2347898', 'Monthly sub', 'example@bvs.com', '4555'],
                ['4', '564534', 'Monthly sub', 'example@bvs.com', '90000'],
                ['5', '211311', 'Annual Sub', 'example@bvs.com', '9000']
            ]
        };
    };
    CustomDistressComponent.prototype.ngAfterViewInit = function () {
        // Init Tooltips
        $('[rel="tooltip"]').tooltip();
        $('.switch-plain').bootstrapSwitch({
            onColor: '',
            onText: '',
            offText: ''
        });
    };
    return CustomDistressComponent;
}());
CustomDistressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'extended-table-cmp',
        template: __webpack_require__("../../../../../src/app/user-custom-distress-message/customdis.component.html")
    })
], CustomDistressComponent);

//# sourceMappingURL=customdis.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-custom-distress-message/customdis.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDistressModule", function() { return CustomDistressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customdis_routing__ = __webpack_require__("../../../../../src/app/user-custom-distress-message/customdis.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sweetalert_sweetalert_component__ = __webpack_require__("../../../../../src/app/user-custom-distress-message/sweetalert/sweetalert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customdis_component__ = __webpack_require__("../../../../../src/app/user-custom-distress-message/customdis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2__ = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CustomDistressModule = (function () {
    function CustomDistressModule() {
    }
    return CustomDistressModule;
}());
CustomDistressModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__customdis_routing__["a" /* CustomDistressRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__sweetalert_sweetalert_component__["a" /* SweetAlertComponent */],
            __WEBPACK_IMPORTED_MODULE_6__customdis_component__["a" /* CustomDistressComponent */]
        ]
    })
], CustomDistressModule);

//# sourceMappingURL=customdis.module.js.map

/***/ }),

/***/ "../../../../../src/app/user-custom-distress-message/customdis.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDistressRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customdis_component__ = __webpack_require__("../../../../../src/app/user-custom-distress-message/customdis.component.ts");

var CustomDistressRoutes = [{
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__customdis_component__["a" /* CustomDistressComponent */]
            }]
    }];
//# sourceMappingURL=customdis.routing.js.map

/***/ }),

/***/ "../../../../../src/app/user-custom-distress-message/sweetalert/sweetalert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n<div class=\"container-fluid\">\n    <div class=\"card card-plain\">\n        <h4 class=\"title\">Sweet Alert 2</h4>\n        <p class=\"category\">A beautiful plugin, that replace the classic alert, Handcrafted by our friend <a target=\"_blank\" href=\"https://twitter.com/t4t5\">Tristan Edwards</a>. Please check out the <a href=\"http://limonte.github.io/sweetalert2/\" target=\"_blank\">full documentation.</a></p>\n\n        <br><br>\n        <div class=\"places-sweet-alerts\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>Basic example</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('basic')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>A title with a text under</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('title-and-text')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>A success message</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('success-message')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>Custom HTML description</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('custom-html')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>A warning message, with a function attached to the \"Confirm\" Button...</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('warning-message-and-confirmation')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>...and by passing a parameter, you can execute something else for \"Cancel\"</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('warning-message-and-cancel')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>A message with auto close timer set to 2 seconds</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('auto-close')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>Modal window with input field</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('input-field')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-custom-distress-message/sweetalert/sweetalert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SweetAlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SweetAlertComponent = (function () {
    function SweetAlertComponent() {
    }
    SweetAlertComponent.prototype.showSwal = function (type) {
        if (type == 'basic') {
            swal("Here's a message!");
        }
        else if (type == 'title-and-text') {
            swal("Here's a message!", "It's pretty, isn't it?");
        }
        else if (type == 'success-message') {
            swal("Good job!", "You clicked the button!", "success");
        }
        else if (type == 'warning-message-and-confirmation') {
            swal({ title: "Are you sure?",
                text: "You will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn btn-info btn-fill",
                confirmButtonText: "Yes, delete it!",
                cancelButtonClass: "btn btn-danger btn-fill",
                closeOnConfirm: false,
            }, function () {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            });
        }
        else if (type == 'warning-message-and-cancel') {
            swal({ title: "Are you sure?",
                text: "You will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false,
                closeOnCancel: false
            }, function (isConfirm) {
                if (isConfirm) {
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                }
                else {
                    swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
            });
        }
        else if (type == 'custom-html') {
            swal({ title: 'HTML example',
                html: 'You can use <b>bold text</b>, ' +
                    '<a href="http://github.com">links</a> ' +
                    'and other HTML tags'
            });
        }
        else if (type == 'auto-close') {
            swal({ title: "Auto close alert!",
                text: "I will close in 2 seconds.",
                timer: 2000,
                showConfirmButton: false
            });
        }
        else if (type == 'input-field') {
            swal({
                title: 'Input something',
                html: '<p><input id="input-field" class="form-control">',
                showCancelButton: true,
                closeOnConfirm: false,
                allowOutsideClick: false
            }, function () {
                swal({
                    html: 'You entered: <strong>' +
                        $('#input-field').val() +
                        '</strong>'
                });
            });
        }
    };
    return SweetAlertComponent;
}());
SweetAlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sweetalert-cmp',
        template: __webpack_require__("../../../../../src/app/user-custom-distress-message/sweetalert/sweetalert.component.html")
    })
], SweetAlertComponent);

//# sourceMappingURL=sweetalert.component.js.map

/***/ })

});
//# sourceMappingURL=customdis.module.chunk.js.map