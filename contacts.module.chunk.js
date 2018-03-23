webpackJsonp(["contacts.module"],{

/***/ "../../../../../src/app/user-contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Enrolled Contacts</h4>\n                        <p class=\"category\">List of your close contact to reach in distress</p>\n                    </div>\n                    <div class=\"pull-right\" >\n\n\n                        <a (click)=\"showSweet()\">\n                            <small><span class=\"fa fa-plus\"></span> Enroll Contact\n                            </small>\n                        </a>\n                    </div>\n                    <br>\n                    <div class=\"content table-responsive table-full-width\">\n                        <table class=\"table\">\n                            <thead>\n                            <tr>\n                                <th class=\"text-center\">{{ tableData1.headerRow[0] }}</th>\n                                <th>{{ tableData1.headerRow[1] }}</th>\n                                <th>{{ tableData1.headerRow[2] }}</th>\n                                <th class=\"text-center\">{{ tableData1.headerRow[3] }}</th>\n                                <th class=\"text-right\">{{ tableData1.headerRow[4] }}</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let elt of tableData1.dataRows\">\n                                <td class=\"text-center\">{{tableData1.dataRows.indexOf(elt)+1}}</td>\n                                <td>{{elt.name}}</td>\n                                <td>{{elt.phone}}</td>\n                                <td class=\"text-center\"> {{elt.email}}</td>\n                                <td class=\"td-actions text-right\">\n                                    <a rel=\"tooltip\" title=\"View Profile\" class=\"btn btn-info btn-simple btn-xs\">\n                                        <i class=\"fa fa-user\"></i>\n                                    </a>\n                                    <a rel=\"tooltip\" title=\"Edit Profile\" (click)=\"showEdit(elt)\" class=\"btn btn-success btn-simple btn-xs\">\n                                        <i class=\"fa fa-edit\"></i>\n                                    </a>\n                                    <a rel=\"tooltip\" title=\"Remove\" (click)=\"removeContact(elt, tableData1.dataRows)\" class=\"btn btn-danger btn-simple btn-xs\">\n                                        <i class=\"fa fa-times\"></i>\n                                    </a>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contactsService__ = __webpack_require__("../../../../../src/app/user-contacts/contactsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__codebit_app_constant__ = __webpack_require__("../../../../../src/app/_codebit/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsComponent = (function () {
    function ContactsComponent(contactService) {
        this.contactService = contactService;
        this.state_plain = true;
        this.someTxet = "some text";
        this.htmlform = '<form (ngSubmit)="enrollContact(data)" class="form-group">' +
            '<input id="name" class="form-control" type="text" placeholder="Enter First Name" /><br>' +
            '<input id="phone" class="form-control" placeholder="Enter Phone Number" /><br>' +
            '<input id="email" class="form-control" placeholder="Enter Email Address" /></form>';
        this.enrollResponse = {};
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['#', 'Name', 'Phone No.', 'Email', 'Actions'],
            dataRows: []
        };
        this.contacts = [];
        this.getContact();
    };
    ContactsComponent.prototype.ngAfterViewInit = function () {
        // Init Tooltips
        $('[rel="tooltip"]').tooltip();
        $('.switch-plain').bootstrapSwitch({
            onColor: '',
            onText: '',
            offText: ''
        });
    };
    ContactsComponent.prototype.getContact = function () {
        var _this = this;
        this.contactService.getContacts().subscribe(function (data) {
            _this.contacts = data;
            _this.tableData1.dataRows = data;
        }, function (error) { return function () {
            console.log("Error occur!");
        }; });
    };
    ContactsComponent.prototype.showEdit = function (contact) {
        var editform = '<form class="form-group"></form>' +
            '<input class="form-control" value=' + JSON.stringify(contact.name) + ' type="text" placeholder="Enter First Name"  /><br>' +
            // '<input class="form-control" type="text" placeholder="Enter Last Name" /><br>' +
            '<input class="form-control" value=' + contact.phone + ' placeholder="Enter Phone Number" /><br>' +
            '<input class="form-control" value=' + contact.email + ' placeholder="Enter Email Address" />';
        swal({
            title: 'Edit Contact',
            html: editform,
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
    };
    ContactsComponent.prototype.removeContact = function (contact, dataRows) {
        swal({
            title: 'Please confirm delete',
            html: 'Are you sure you want to delete <br>' + JSON.stringify(contact[1]),
            showCancelButton: true,
            closeOnConfirm: false,
            allowOutsideClick: false
        }, function () {
            var index = dataRows.indexOf(contact);
            dataRows.splice(index, 1);
            swal({
                html: 'Contact deleted successfully: '
            });
        });
    };
    ContactsComponent.prototype.showSweet = function () {
        var inst = this;
        swal({
            title: 'Add Contact',
            html: this.htmlform,
            showCancelButton: true,
            closeOnConfirm: false,
            allowOutsideClick: false
        }, function () {
            var name = $('#name').val();
            var phone = $('#phone').val();
            var email = $('#email').val();
            if (name.length == 0 && phone.length == 0) {
                swal({
                    html: 'Phone Number Must be Entered... '
                });
                return;
            }
            if (!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/)) {
                swal({
                    html: 'Invalid email '
                });
                return;
            }
            var data22 = {
                'name': name,
                'phone': phone,
                'email': email
            };
            inst.contactService
                .enrollContact(data22)
                .subscribe(function (data) {
                if (data.status == 1) {
                    // let dum = [8, data22.name, data22.phone, data22.email];
                    inst.tableData1.dataRows.push(data.message);
                    swal({
                        html: 'Contact Added Successfully '
                    });
                }
                else {
                }
            }, function (error) { return function () {
                console.log("Error occur!");
                // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
            }; });
        });
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__contactsService__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_2__codebit_app_constant__["a" /* Configuration */]],
        selector: 'extended-table-cmp',
        template: __webpack_require__("../../../../../src/app/user-contacts/contacts.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contactsService__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contactsService__["a" /* ContactService */]) === "function" && _a || Object])
], ContactsComponent);

var _a;
//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-contacts/contacts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_routing__ = __webpack_require__("../../../../../src/app/user-contacts/contacts.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_component__ = __webpack_require__("../../../../../src/app/user-contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jw_bootstrap_switch_ng2__ = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jw_bootstrap_switch_ng2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { SweetAlertComponent } from './sweetalert/sweetalert.component';


var ContactsModule = (function () {
    function ContactsModule() {
    }
    return ContactsModule;
}());
ContactsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__contacts_routing__["a" /* ContactsRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"]
        ],
        declarations: [
            // SweetAlertComponent,
            __WEBPACK_IMPORTED_MODULE_5__contacts_component__["a" /* ContactsComponent */]
        ]
    })
], ContactsModule);

//# sourceMappingURL=contacts.module.js.map

/***/ }),

/***/ "../../../../../src/app/user-contacts/contacts.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contacts_component__ = __webpack_require__("../../../../../src/app/user-contacts/contacts.component.ts");

var ContactsRoutes = [{
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__contacts_component__["a" /* ContactsComponent */]
            }]
    }];
//# sourceMappingURL=contacts.routing.js.map

/***/ }),

/***/ "../../../../../src/app/user-contacts/contactsService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
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




var ContactService = (function () {
    function ContactService(http, _configuration) {
        this.http = http;
        this._configuration = _configuration;
        this.getContactUrl = __WEBPACK_IMPORTED_MODULE_3__codebit_app_constant__["a" /* Configuration */].API + 'getEnrollContacts';
        this.enrolContactUrl = __WEBPACK_IMPORTED_MODULE_3__codebit_app_constant__["a" /* Configuration */].API + 'enrollContact';
    }
    ContactService.prototype.getContacts = function () {
        return this.http.get(this.getContactUrl);
    };
    ContactService.prototype.enrollContact = function (data) {
        return this.http.post(this.enrolContactUrl, data);
    };
    return ContactService;
}());
ContactService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__codebit_app_constant__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__codebit_app_constant__["a" /* Configuration */]) === "function" && _b || Object])
], ContactService);

var _a, _b;
//# sourceMappingURL=contactsService.js.map

/***/ })

});
//# sourceMappingURL=contacts.module.chunk.js.map