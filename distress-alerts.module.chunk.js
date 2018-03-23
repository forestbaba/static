webpackJsonp(["distress-alerts.module"],{

/***/ "../../../../../src/app/admin-distress-alerts/distress-alerts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header text-center\">\n                        <h4 class=\"title\">Distress Alerts</h4>\n                        <p class=\"category\">List of distress alerts as triggered by users</p>\n                        <br/>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                        <table class=\"table table-bigboy\">\n                            <thead>\n                            <tr>\n                                <th class=\"text-left\">\n                                    {{ tableData3.headerRow[0] }}\n                                </th>\n                                <th>{{ tableData3.headerRow[1] }}</th>\n                                <th class=\"text-left\">{{ tableData3.headerRow[2] }}</th>\n                                <th class=\"th-description\">{{ tableData3.headerRow[3] }}</th>\n                                <th class=\"text-right\">{{ tableData3.headerRow[4] }}</th>\n                                <th class=\"text-right\">{{ tableData3.headerRow[5] }}</th>\n                                <th></th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let row of tableData3.dataRows\">\n                                <td>\n                                    <!--<div class=\"img-container\">-->\n                                    <div class=\"img-container\" style=\"width: 100px;height: 100px; line-height: 100px;\">\n                                        <img src=\"../../assets/img/{{row[0]}}\" alt=\"...\">\n\n                                    </div>\n                                </td>\n                                <td class=\"td-name\">\n                                    {{row[1]}}\n                                    <a><h6>0803399388</h6></a>\n                                </td>\n                                <td>{{row[2]}}</td>\n                                <td class=\"td-number\">\n                                    {{row[3]}}\n                                </td>\n                                <td class=\"td-number\">\n                                    {{row[4]}}\n                                </td>\n                                <td class=\"td-number\">\n                                    {{row[5]}}\n                                </td>\n                                <td class=\"td-actions\">\n                                    <button type=\"button\" rel=\"tooltip\" data-placement=\"left\" title=\"Details\"\n                                            class=\"btn btn-info btn-simple btn-icon\">\n                                        <i class=\"fa fa-image\"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin-distress-alerts/distress-alerts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistressAlertsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DistressAlertsComponent = (function () {
    function DistressAlertsComponent() {
        this.state_plain = true;
    }
    DistressAlertsComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['#', 'Name', 'Phone No.', 'Email', 'Actions'],
            dataRows: [
                ['1', 'Andrew Mike', '08031234565', 'example@bvs.com'],
                ['2', 'John Doe', '0809999999', 'example@bvs.com'],
                ['3', 'Alex Mike', '080534333333', 'example@bvs.com'],
                ['4', 'Mike Monday', '080222333332', 'example@bvs.com'],
                ['5', 'Paul Dickens', '0908898989', 'example@bvs.com']
            ]
        };
        this.tableData3 = {
            headerRow: ['', 'User', 'Distress type', 'Message', 'Address', 'Coordinate', ''],
            dataRows: [
                ['blog-1.jpg', 'Adesuwa James', 'Health Emergency', 'Got a heart attack again', 'No 12, Olorunshogo street, powerline, Ogba-Aguda ', '6.5244,3.35483', '', 'Adeniji Kayode'],
                ['blog-1.jpg', 'Adesuwa James', 'Security Emergency', 'Currently under arm robbery attack', 'No 12, Olorunshogo street, powerline, Ogba-Aguda ', '6.5244,3.35483', '', 'Adeniji Kayode'],
                ['blog-1.jpg', 'Adesuwa James', 'Child Safety', 'I have been Kidnapped ', 'No 12, Olorunshogo street, powerline, Ogba-Aguda ', '6.5244,3.35483', '', 'Adeniji Kayode'],
                ['blog-1.jpg', 'Adesuwa James', 'Anticipated Distress', 'Currently under armed robbery attack', 'No 12, Olorunshogo street, powerline, Ogba-Aguda ', '6.5244,3.35483', '', 'Adeniji Kayode'],
                ['blog-1.jpg', 'Adesuwa James', 'Child Safety', 'Currently under arm robbery attack', 'No 12, Olorunshogo street, powerline, Ogba-Aguda ', '6.5244,3.35483', '', 'Adeniji Kayode']
            ]
        };
    };
    DistressAlertsComponent.prototype.ngAfterViewInit = function () {
        // Init Tooltips
        $('[rel="tooltip"]').tooltip();
        $('.switch-plain').bootstrapSwitch({
            onColor: '',
            onText: '',
            offText: ''
        });
    };
    return DistressAlertsComponent;
}());
DistressAlertsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'extended-table-cmp',
        template: __webpack_require__("../../../../../src/app/admin-distress-alerts/distress-alerts.component.html")
    })
], DistressAlertsComponent);

//# sourceMappingURL=distress-alerts.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-distress-alerts/distress-alerts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistressAlertsModule", function() { return DistressAlertsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__distress_alerts_routing__ = __webpack_require__("../../../../../src/app/admin-distress-alerts/distress-alerts.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sweetalert_sweetalert_component__ = __webpack_require__("../../../../../src/app/admin-distress-alerts/sweetalert/sweetalert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__distress_alerts_component__ = __webpack_require__("../../../../../src/app/admin-distress-alerts/distress-alerts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2__ = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DistressAlertsModule = (function () {
    function DistressAlertsModule() {
    }
    return DistressAlertsModule;
}());
DistressAlertsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__distress_alerts_routing__["a" /* DistressAlertsRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__sweetalert_sweetalert_component__["a" /* SweetAlertComponent */],
            __WEBPACK_IMPORTED_MODULE_6__distress_alerts_component__["a" /* DistressAlertsComponent */]
        ]
    })
], DistressAlertsModule);

//# sourceMappingURL=distress-alerts.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin-distress-alerts/distress-alerts.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistressAlertsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__distress_alerts_component__ = __webpack_require__("../../../../../src/app/admin-distress-alerts/distress-alerts.component.ts");

var DistressAlertsRoutes = [{
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__distress_alerts_component__["a" /* DistressAlertsComponent */]
            }]
    }];
//# sourceMappingURL=distress-alerts.routing.js.map

/***/ }),

/***/ "../../../../../src/app/admin-distress-alerts/sweetalert/sweetalert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n<div class=\"container-fluid\">\n    <div class=\"card card-plain\">\n        <h4 class=\"title\">Sweet Alert 2</h4>\n        <p class=\"category\">A beautiful plugin, that replace the classic alert, Handcrafted by our friend <a target=\"_blank\" href=\"https://twitter.com/t4t5\">Tristan Edwards</a>. Please check out the <a href=\"http://limonte.github.io/sweetalert2/\" target=\"_blank\">full documentation.</a></p>\n\n        <br><br>\n        <div class=\"places-sweet-alerts\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>Basic example</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('basic')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>A title with a text under</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('title-and-text')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>A success message</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('success-message')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>Custom HTML description</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('custom-html')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>A warning message, with a function attached to the \"Confirm\" Button...</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('warning-message-and-confirmation')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>...and by passing a parameter, you can execute something else for \"Cancel\"</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('warning-message-and-cancel')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>A message with auto close timer set to 2 seconds</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('auto-close')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>Modal window with input field</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('input-field')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin-distress-alerts/sweetalert/sweetalert.component.ts":
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
        template: __webpack_require__("../../../../../src/app/admin-distress-alerts/sweetalert/sweetalert.component.html")
    })
], SweetAlertComponent);

//# sourceMappingURL=sweetalert.component.js.map

/***/ })

});
//# sourceMappingURL=distress-alerts.module.chunk.js.map