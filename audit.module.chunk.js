webpackJsonp(["audit.module"],{

/***/ "../../../../../src/app/admin-audit-acct/audit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Audit and Accounting</h4>\n                        <p class=\"category\">Find here details of your customers record</p>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                        <table class=\"table table-hover table-striped\">\n                            <thead>\n                            <tr>\n                                <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let row of tableData1.dataRows\">\n                                <td *ngFor=\"let cell of row\">{{cell}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n                <!--<div class=\"col-md-12\">-->\n                    <!--<div class=\"card card-plain\">-->\n                        <!--<div class=\"header\">-->\n                            <!--<h4 class=\"title\">Table on Plain Background</h4>-->\n                            <!--<p class=\"category\">Here is a subtitle for this table</p>-->\n                        <!--</div>-->\n                        <!--<div class=\"content table-responsive table-full-width\">-->\n                            <!--<table class=\"table table-hover\">-->\n                                <!--<thead>-->\n                                <!--<tr>-->\n                                    <!--<th *ngFor=\"let cell of tableData2.headerRow\">{{ cell }}</th>-->\n                                <!--</tr>-->\n                                <!--</thead>-->\n                                <!--<tbody>-->\n                                <!--<tr *ngFor=\"let row of tableData2.dataRows\">-->\n                                    <!--<td *ngFor=\"let cell of row\">{{cell}}</td>-->\n                                <!--</tr>-->\n                                <!--</tbody>-->\n                            <!--</table>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"col-md-12\">-->\n                    <!--<div class=\"card\">-->\n                        <!--<div class=\"header\">-->\n                            <!--<h4 class=\"title\">Regular Table with Colors</h4>-->\n                            <!--<p class=\"category\">Here is a subtitle for this table</p>-->\n                        <!--</div>-->\n                        <!--<div class=\"content table-responsive table-full-width\">-->\n                            <!--<table class=\"table table-hover\">-->\n                                <!--<thead>-->\n                                <!--<tr>-->\n                                    <!--<th *ngFor=\"let cell of tableData3.headerRow\">{{ cell }}</th>-->\n                                <!--</tr>-->\n                                <!--</thead>-->\n                                <!--<tbody>-->\n                                <!--<tr class=\"success\">-->\n                                    <!--<td *ngFor=\"let cell of tableData3.dataRows[0]\">{{cell}}</td>-->\n                                <!--</tr>-->\n                                <!--<tr>-->\n                                    <!--<td *ngFor=\"let cell of tableData3.dataRows[1]\">{{cell}}</td>-->\n                                <!--</tr>-->\n                                <!--<tr class=\"info\">-->\n                                    <!--<td *ngFor=\"let cell of tableData3.dataRows[2]\">{{cell}}</td>-->\n                                <!--</tr>-->\n                                <!--<tr>-->\n                                    <!--<td *ngFor=\"let cell of tableData3.dataRows[3]\">{{cell}}</td>-->\n                                <!--</tr>-->\n                                <!--<tr class=\"danger\">-->\n                                    <!--<td *ngFor=\"let cell of tableData3.dataRows[4]\">{{cell}}</td>-->\n                                <!--</tr>-->\n                                <!--<tr>-->\n                                    <!--<td *ngFor=\"let cell of tableData3.dataRows[5]\">{{cell}}</td>-->\n                                <!--</tr>-->\n                                <!--<tr class=\"warning\">-->\n                                    <!--<td *ngFor=\"let cell of tableData3.dataRows[6]\">{{cell}}</td>-->\n                                <!--</tr>-->\n                                <!--</tbody>-->\n                            <!--</table>-->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        <!--</div>-->\n    <!--</div>-->\n<!--</div>-->\n\n\n\n\n\n\n\n\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n\n                <div class=\"card\">\n                    <div class=\"header\"> Manage Customer </div>\n                    <div class=\"content\">\n                        <form method=\"#\" action=\"#\">\n                            <div class=\"form-group\">\n                                <label>Manage Customer </label>\n                                <input type=\"text\" placeholder=\"Your security answer \" class=\"form-control\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Old Password</label>\n                                <input type=\"password\" placeholder=\"Old Password\" class=\"form-control\">\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label>New Password</label>\n                                <input type=\"password\" placeholder=\"New Password\" class=\"form-control\">\n                            </div>\n\n\n                            <div class=\"form-group\">\n                                <label class=\"\">New Password Again</label>\n                                <input type=\"password\" placeholder=\"New Password Again\" class=\"form-control\">\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\" >\n                                    <input id=\"checkbox21\" type=\"checkbox\" checked=\"\" >\n                                    <label for=\"checkbox21\">\n                                       <small> I agree to terms and condition for password change  </small>\n                                    </label>\n                                </div>\n                            </div>\n\n\n                            <button type=\"submit\" class=\"btn btn-fill \" style=\"background-color: purple;\">Change My Password</button>\n                        </form>\n                    </div>\n                </div> <!-- end card -->\n\n            </div> <!--  end col-md-6  -->\n                    <!-- CHANGE PASSWORD ENDS HERE-->\n                    <!--<div class=\"content\">-->\n                        <!--<form>-->\n                            <!--<div class=\"row\">-->\n                                <!--<div class=\"col-md-5\">-->\n                                    <!--<div class=\"form-group\">-->\n                                        <!--<label>Company (disabled)</label>-->\n                                        <!--<input type=\"text\" class=\"form-control\" disabled placeholder=\"Company\" value=\"Creative Code Inc.\">-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                                <!--<div class=\"col-md-3\">-->\n                                    <!--<div class=\"form-group\">-->\n                                        <!--<label>Username</label>-->\n                                        <!--<input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"naijasugar\">-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                                <!--<div class=\"col-md-4\">-->\n                                    <!--<div class=\"form-group\">-->\n                                        <!--<label for=\"exampleInputEmail1\">Email address (disabled)</label>-->\n                                        <!--<input type=\"email\" class=\"form-control\" placeholder=\"adenikeojukwu@gmail.com\">-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                            <!--</div>-->\n\n                            <!--<div class=\"row\">-->\n                                <!--<div class=\"col-md-6\">-->\n                                    <!--<div class=\"form-group\">-->\n                                        <!--<label>First Name</label>-->\n                                        <!--<input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Adenike\">-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                                <!--<div class=\"col-md-6\">-->\n                                    <!--<div class=\"form-group\">-->\n                                        <!--<label>Last Name</label>-->\n                                        <!--<input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Ojukwu\">-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                            <!--</div>-->\n\n                            <!--<div class=\"row\">-->\n                                <!--<div class=\"col-md-12\">-->\n                                    <!--<div class=\"form-group\">-->\n                                        <!--<label>Address</label>-->\n                                        <!--<input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\">-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                            <!--</div>-->\n\n                            <!--<div class=\"row\">-->\n                                <!--<div class=\"col-md-4\">-->\n                                    <!--<div class=\"form-group\">-->\n                                        <!--<label>City</label>-->\n                                        <!--<input type=\"text\" class=\"form-control\" placeholder=\"Ikeja\" value=\"Ikeja\">-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                                <!--<div class=\"col-md-4\">-->\n                                    <!--<div class=\"form-group\">-->\n                                        <!--<label>Country</label>-->\n                                        <!--<input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Andrew\">-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                                <!--<div class=\"col-md-4\">-->\n                                    <!--<div class=\"form-group\">-->\n                                        <!--<label>Postal Code</label>-->\n                                        <!--<input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\">-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                            <!--</div>-->\n\n                            <!--<div class=\"row\">-->\n                                <!--<div class=\"col-md-12\">-->\n                                    <!--<div class=\"form-group\">-->\n                                        <!--<label>About Me</label>-->\n                                        <!--<textarea rows=\"5\" class=\"form-control\" placeholder=\"Here can be your description\" value=\"Mike\">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>-->\n                                    <!--</div>-->\n                                <!--</div>-->\n                            <!--</div>-->\n\n                            <!--<button type=\"submit\" class=\"btn btn-info btn-fill pull-right\">Update Profile</button>-->\n                            <!--<div class=\"clearfix\"></div>-->\n                        <!--</form>-->\n                    <!--</div>-->\n                <!--</div>-->\n            <!--</div>-->\n            <!--<div class=\"col-md-4\">-->\n                <!--<div class=\"card card-user\">-->\n                    <!--<div class=\"image\">-->\n                        <!--<img src=\"../../assets/img/full-screen-image-3.jpg\" alt=\"...\"/>-->\n                    <!--</div>-->\n                    <!--<div class=\"content\">-->\n                        <!--<div class=\"author\">-->\n                             <!--<a href=\"#\">-->\n                            <!--<img class=\"avatar border-gray\" src=\"../../assets/img/default-avatar.png\" alt=\"...\"/>-->\n\n                              <!--<h4 class=\"title\">Adenike Ojukwu<br />-->\n                                 <!--<small>naijasugar</small>-->\n                              <!--</h4>-->\n                            <!--</a>-->\n                        <!--</div>-->\n                        <!--<p class=\"description text-center\"> \"Lamborghini Mercy <br>-->\n                                            <!--Your chick she so thirsty <br>-->\n                                            <!--I'm in that two seat Lambo\"-->\n                        <!--</p>-->\n                    <!--</div>-->\n                    <!--<hr>-->\n                    <!--<div class=\"text-center\">-->\n                        <!--<button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-facebook-square\"></i></button>-->\n                        <!--<button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-twitter\"></i></button>-->\n                        <!--<button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-google-plus-square\"></i></button>-->\n\n                    <!--</div>-->\n                <!--</div>-->\n            <!--</div>-->\n\n        <!--</div>-->\n    <!--</div>-->\n<!--</div>-->\n        </div>"

/***/ }),

/***/ "../../../../../src/app/admin-audit-acct/audit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auditcomponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var auditcomponent = (function () {
    function auditcomponent() {
    }
    auditcomponent.prototype.ngOnInit = function () {
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
    return auditcomponent;
}());
auditcomponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-cmp',
        template: __webpack_require__("../../../../../src/app/admin-audit-acct/audit.component.html")
    })
], auditcomponent);

//# sourceMappingURL=audit.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-audit-acct/audit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auditModule", function() { return auditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__audit_component__ = __webpack_require__("../../../../../src/app/admin-audit-acct/audit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__audit_routing__ = __webpack_require__("../../../../../src/app/admin-audit-acct/audit.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var auditModule = (function () {
    function auditModule() {
    }
    return auditModule;
}());
auditModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__audit_routing__["a" /* auditRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__audit_component__["a" /* auditcomponent */]]
    })
], auditModule);

//# sourceMappingURL=audit.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin-audit-acct/audit.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auditRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audit_component__ = __webpack_require__("../../../../../src/app/admin-audit-acct/audit.component.ts");

var auditRoutes = [{
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__audit_component__["a" /* auditcomponent */]
            }]
    }];
//# sourceMappingURL=audit.routing.js.map

/***/ })

});
//# sourceMappingURL=audit.module.chunk.js.map