webpackJsonp(["manageCustomer.module"],{

/***/ "../../../../../src/app/admin-manage-customer/manageCustomer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Manage Customers</h4>\n                        <p class=\"category\">Find here details of your customers record</p>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                        <table class=\"table table-hover table-striped\">\n                            <thead>\n                            <tr>\n                                <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let row of tableData1.dataRows\">\n                                <td *ngFor=\"let cell of row\">{{cell}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/admin-manage-customer/manageCustomer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return manageCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var manageCustomerComponent = (function () {
    function manageCustomerComponent() {
    }
    manageCustomerComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['ID', 'Name', 'Country', 'City', 'Subscription'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', 'VIP'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', 'VIP'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', 'BASIC'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', 'VIP'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', 'VIP'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', 'VIP']
            ]
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
        this.tableData3 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice (Success)', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez (Info)', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene (Danger)', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
                ['7', 'Mike Chaney (Warning)', '$38,735', 'Romania', 'Bucharest']
            ]
        };
    };
    return manageCustomerComponent;
}());
manageCustomerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-cmp',
        template: __webpack_require__("../../../../../src/app/admin-manage-customer/manageCustomer.component.html")
    })
], manageCustomerComponent);

//# sourceMappingURL=manageCustomer.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-manage-customer/manageCustomer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageCustomerModule", function() { return manageCustomerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manageCustomer_component__ = __webpack_require__("../../../../../src/app/admin-manage-customer/manageCustomer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manageCustomer_routing__ = __webpack_require__("../../../../../src/app/admin-manage-customer/manageCustomer.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var manageCustomerModule = (function () {
    function manageCustomerModule() {
    }
    return manageCustomerModule;
}());
manageCustomerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__manageCustomer_routing__["a" /* manageCustomerRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__manageCustomer_component__["a" /* manageCustomerComponent */]]
    })
], manageCustomerModule);

//# sourceMappingURL=manageCustomer.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin-manage-customer/manageCustomer.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return manageCustomerRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manageCustomer_component__ = __webpack_require__("../../../../../src/app/admin-manage-customer/manageCustomer.component.ts");

var manageCustomerRoutes = [{
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__manageCustomer_component__["a" /* manageCustomerComponent */]
            }]
    }];
//# sourceMappingURL=manageCustomer.routing.js.map

/***/ })

});
//# sourceMappingURL=manageCustomer.module.chunk.js.map