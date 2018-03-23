webpackJsonp(["user-setting.module"],{

/***/ "../../../../../src/app/user-setting/billings/billings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container\">\n\n            <div class=\"row\">\n\n                <!-- Start Here -->\n                <div class=\"col-md-8 order-md-1\">\n                    <div class=\"card\">\n                        <div class=\"header\">\n                            <h4 class=\"mb-3\">Billing address</h4>\n                        </div><!-- CARD HEADER ENDS HERE -->\n\n                        <div class=\"content\">\n                             <form class=\"needs-validation\" novalidate>\n                               <div class=\"row\">\n                                   <div class=\"col-md-6 mb-3\">\n                                        <label for=\"firstName\">First name</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"First name\" value=\"\" required>\n                                   </div>\n                                   <div class=\"col-md-6 mb-3\">\n                                       <label for=\"lastName\">Last name</label>\n                                       <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\" value=\"\" required>\n                                   </div>\n                               </div>\n\n                             <div class=\" mb-3\">\n                                <label for=\"username\">Username</label>\n                                    <div class=\"input-group\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\">@</span>\n                                        </div>\n                                        <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" required>\n                                    </div>\n                             </div>\n\n                        <div class=\"mb-3\">\n                            <label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>\n                            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">\n\n                        </div>\n\n                        <div class=\"mb-3\">\n                            <label for=\"address\">Address</label>\n                            <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required>\n\n                        </div>\n\n                        <div class=\"mb-3\">\n                            <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\n                            <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\">\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-5 mb-3\">\n                                <label for=\"country\">Country</label>\n                                <select class=\"custom-select d-block w-100 form-control\" id=\"country\" required>\n                                    <option value=\"\">Choose...</option>\n                                    <option>Ghana</option>\n                                    <option>Nigeria</option>\n                                    <option>Kenya</option>\n                                    <option>South Africa</option>\n                                    <option>United Kingdom</option>\n                                    <option>United States</option>\n                                </select>\n\n                            </div>\n                            <div class=\"col-md-4 mb-3\">\n                                <label for=\"state\">State</label>\n                                <select class=\"custom-select d-block w-100 form-control\" id=\"state\" required>\n                                    <option value=\"\">Choose...</option>\n                                    <option>California</option>\n                                    <option>Lagos</option>\n                                    <option>Accra</option>\n                                    <option>Jonannesburg</option>\n                                    <option>London</option>\n                                </select>\n                                <div class=\" hidden invalid-feedback\">\n                                    Please provide a valid state.\n                                </div>\n                            </div>\n                            <div class=\"col-md-3 mb-3\">\n                                <label for=\"zip\">Zip</label>\n                                <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required>\n                                <div class=\"hidden invalid-feedback\">\n                                    Zip code required.\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"mb-4\">\n                        <div class=\"custom-control custom-checkbox\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\n                            <label class=\"custom-control-label\" for=\"same-address\">Shipping address is the same as my billing address</label>\n                        </div>\n                        <div class=\"custom-control custom-checkbox\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\n                            <label class=\"custom-control-label\" for=\"save-info\">Save this information for next time</label>\n                        </div>\n                        <hr class=\"mb-4\">\n\n                          <div class=\"row\">\n                              <h4 class=\" mb-3\" style=\"margin-left:2%;\">Payment</h4>\n                              <div class=\"col-md-4 mb-3\">\n                                <div class=\"card\" style=\"margin-left:2%;\">\n                                    <div class=\"content\">\n                                        <div class=\"custom-control custom-radio\">\n                                            <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\n                                            <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n                                        </div>\n                                    </div>\n                                </div>\n                              </div><!--Credit Card-->\n                              <div class=\"col-md-4 mb-3\">\n                                  <div class=\"card\">\n                                      <div class=\"content\">\n                                          <div class=\"custom-control custom-radio\">\n                                              <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n                                              <label class=\"custom-control-label\" for=\"debit\"> Bank Transfer</label>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div><!-- Debit Card payment -->\n                              <div class=\"col-md-4\">\n                                  <div class=\"card\">\n                                      <div class=\"content\">\n                                          <div class=\"custom-control custom-radio\">\n                                              <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\"  required>\n                                              <label class=\"custom-control-label\" for=\"paypal\"> USSD CODE </label>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div><!-- Paypal Payment Method -->\n                          </div><!-- Payment Method Code Option-->\n\n                    <div class=\"card\" style=\"padding:5%; background-color: lightgray;\"><!-- Wrap Payment Details to change with ngSwitch Model -->\n                        <div class=\"row\">\n                            <div class=\"col-md-6 mb-3\">\n                                <label for=\"cc-name\">Name on card</label>\n                                <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>\n                                <small class=\"text-muted\">Full name as displayed on card</small>\n                                <div class=\"hidden invalid-feedback\">\n                                    Name on card is required\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 mb-3\">\n                                <label for=\"cc-number\">Credit card number</label>\n                                <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>\n                                <div class=\"hidden invalid-feedback\">\n                                    Credit card number is required\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-3 mb-3\">\n                                <label for=\"cc-expiration\">Expiration</label>\n                                <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\n                                <div class=\"hdden invalid-feedback\">\n                                    Expiration date required\n                                </div>\n                            </div>\n                            <div class=\"col-md-3 mb-3\">\n                                <label for=\"cc-expiration\">CVV</label>\n                                <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\n                                <div class=\"hidden invalid-feedback\">\n                                    Security code required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                        <hr class=\"mb-4\">\n                        <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\" id=\"checkOut\" style=\"background-color: purple; color: white;\">Continue to checkout</button>\n                    </form>\n                        </div><!-- CARD CONTENT ENDS HERE -->\n                    </div><!-- CARD CLOSE -->\n\n                 </div><!-- BILLING ADDRESS ENDS HERE -->\n\n\n\n                <div class=\"col-md-3 order-md-1\">\n                    <div class=\"card\">\n                        <div class=\"header\">\n                            <H4> Order Summary</H4>\n                        </div><!-- CARD HEADER ENDS HERE -->\n\n                        <div class=\"content\" style=\"color:lightgray; padding:1%;\">\n                            <ul>\n                                <li title=\"Your Current Subscription Plan\"> Current Plan: </li>\n                                <li title=\"Your Current Subscription Plan\"> Due Date: </li>\n                                <li title=\"Your Current Subscription Plan\"> Other Details: </li>\n                            </ul>\n\n                        </div><!-- CARD CONTENT ENDS HERE -->\n                        <div class=\"footer\">\n                            <a href=\"#\">\n                            <small>Having Issue? Contact Support</small>\n                            </a>\n                        </div>\n\n                    </div>\n                </div>\n\n\n             </div><!-- ROW ENDS HERE -->\n\n\n\n\n\n        <!--<div class=\"row\">-->\n            <!--<div class=\"col-md-12\">-->\n                <!--<div class=\"card\">-->\n                    <!--<div class=\"header\">-->\n                        <!--<h4 class=\"title\">Billing Details</h4>-->\n                        <!--<p class=\"category\">Find here details of your billing record</p>-->\n                    <!--</div>-->\n                    <!--<div class=\"content table-responsive table-full-width\">-->\n                          <!--<table class=\"table table-hover table-striped\">-->\n                                <!--<thead>-->\n                                    <!--<tr>-->\n                                        <!--<th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>-->\n                                    <!--</tr>-->\n                                <!--</thead>-->\n                                <!--<tbody>-->\n                                    <!--<tr *ngFor=\"let row of tableData1.dataRows\">-->\n                                        <!--<td *ngFor=\"let cell of row\">{{cell}}</td>-->\n                                    <!--</tr>-->\n                                <!--</tbody>-->\n                          <!--</table>-->\n\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"col-md-12\">-->\n                    <!--<div class=\"card card-plain\">-->\n                        <!--<div class=\"header\">-->\n                            <!--<h4 class=\"title\">Table on Plain Background</h4>-->\n                            <!--<p class=\"category\">Here is a subtitle for this table</p>-->\n                        <!--</div>-->\n                        <!--<div class=\"content table-responsive table-full-width\">-->\n                            <!--<table class=\"table table-hover\">-->\n                                <!--<thead>-->\n                                    <!--<tr>-->\n                                        <!--<th *ngFor=\"let cell of tableData2.headerRow\">{{ cell }}</th>-->\n                                    <!--</tr>-->\n                                <!--</thead>-->\n                                <!--<tbody>-->\n                                    <!--<tr *ngFor=\"let row of tableData2.dataRows\">-->\n                                        <!--<td *ngFor=\"let cell of row\">{{cell}}</td>-->\n                                    <!--</tr>-->\n                                <!--</tbody>-->\n                            <!--</table>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"col-md-12\">-->\n                    <!--<div class=\"card\">-->\n                        <!--<div class=\"header\">-->\n                            <!--<h4 class=\"title\">Regular Table with Colors</h4>-->\n                            <!--<p class=\"category\">Here is a subtitle for this table</p>-->\n                        <!--</div>-->\n                        <!--<div class=\"content table-responsive table-full-width\">-->\n                            <!--<table class=\"table table-hover\">-->\n                                <!--<thead>-->\n                                    <!--<tr>-->\n                                      <!--<th *ngFor=\"let cell of tableData3.headerRow\">{{ cell }}</th>-->\n                                    <!--</tr>-->\n                                <!--</thead>-->\n                              <!--<tbody>-->\n                                      <!--<tr class=\"success\">-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[0]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr>-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[1]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr class=\"info\">-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[2]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr>-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[3]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr class=\"danger\">-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[4]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr>-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[5]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr class=\"warning\">-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[6]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                              <!--</tbody>-->\n                            <!--</table>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n            <!--</div>-->\n        <!--</div>-->\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-setting/billings/billings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BillingsComponent = (function () {
    function BillingsComponent() {
    }
    BillingsComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
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
    return BillingsComponent;
}());
BillingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'regular-table-cmp',
        template: __webpack_require__("../../../../../src/app/user-setting/billings/billings.component.html")
    })
], BillingsComponent);

//# sourceMappingURL=billings.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-setting/cdm/cdm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container\" style=\"width:98%;\">\n        <div class=\"card\" style=\"padding:1%;\">\n                <div class=\"header\">\n                    <h4 class=\"title\">Custom Distress Message</h4>\n                </div>\n                <hr>\n                <div class=\"content\">\n                    <p>Health Message</p>\n                    <form class=\"form-group\">\n                                  <textarea class=\"form-control\" Placeholder= \"This is the default message to be sent to your contact when you trigger the panic button on your device via this app\">\n                                  </textarea>\n                    </form>\n                    <a href=\"#\">\n                        <span class=\"badge badge-pill badge-primary pull-right\"> Edit </span>\n                    </a>\n                </div>\n\n        </div>\n\n        <div class=\"card\" style=\"padding:1%;\"><!-- Health Message -->\n            <div class=\"content\">\n                <p>Security Message </p>\n                <form class=\"form-group\">\n                    <textarea class=\"form-control\" Placeholder= \"This is the default message to be sent to your contact when you trigger the panic button on your device via this app\">\n                    </textarea>\n                </form>\n                <a href=\"#\">\n                    <span class=\"badge badge-pill badge-primary pull-right\">Edit </span>\n                </a>\n\n            </div>\n\n        </div>\n\n\n        <div class=\"card\" style=\"padding:1%;\"><!-- Health Message -->\n            <div class=\"content\">\n                <p>Health Message</p>\n                <form class=\"form-group\">\n                    <textarea class=\"form-control\" Placeholder= \"This is the default message to be sent to your contact when you trigger the panic button on your device via this app\">\n                    </textarea>\n                </form>\n                <a href=\"#\">\n                    <span class=\"badge badge-pill badge-primary pull-right\"> Edit </span>\n                </a>\n\n            </div>\n\n        </div>\n\n\n        <div class=\"card\" style=\"padding:1%;\"><!-- Child Safety    --->\n            <div class=\"content\">\n                <p>Child Safety </p>\n                <form class=\"form-group\">\n                    <textarea class=\"form-control\" Placeholder= \"This is the default message to be sent to your contact when you trigger the panic button on your device via this app\">\n                    </textarea>\n                </form>\n                <a href=\"#\">\n                    <span class=\"badge badge-pill badge-primary pull-right\"> Edit </span>\n                </a>\n\n            </div>\n\n        </div>\n\n\n            <!--<div class=\"row\">-->\n\n                <!--&lt;!&ndash; Start Here &ndash;&gt;-->\n                <!--<div class=\"col-md-8 order-md-1\">-->\n                    <!--<div class=\"card\">-->\n                        <!--<div class=\"header\">-->\n                            <!--<h4 class=\"mb-3\">custom Distress Message </h4>-->\n                        <!--</div>&lt;!&ndash; CARD HEADER ENDS HERE &ndash;&gt;-->\n\n                        <!--<div class=\"content\">-->\n                             <!--<form class=\"needs-validation\" novalidate>-->\n                               <!--<div class=\"row\">-->\n                                   <!--<div class=\"col-md-6 mb-3\">-->\n                                        <!--<label for=\"firstName\">First name</label>-->\n                                        <!--<input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"First name\" value=\"\" required>-->\n                                   <!--</div>-->\n                                   <!--<div class=\"col-md-6 mb-3\">-->\n                                       <!--<label for=\"lastName\">Last name</label>-->\n                                       <!--<input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\" value=\"\" required>-->\n                                   <!--</div>-->\n                               <!--</div>-->\n\n                             <!--<div class=\" mb-3\">-->\n                                <!--<label for=\"username\">Username</label>-->\n                                    <!--<div class=\"input-group\">-->\n                                        <!--<div class=\"input-group-prepend\">-->\n                                            <!--<span class=\"input-group-text\">@</span>-->\n                                        <!--</div>-->\n                                        <!--<input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" required>-->\n                                    <!--</div>-->\n                             <!--</div>-->\n\n                        <!--<div class=\"mb-3\">-->\n                            <!--<label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>-->\n                            <!--<input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">-->\n\n                        <!--</div>-->\n\n                        <!--<div class=\"mb-3\">-->\n                            <!--<label for=\"address\">Address</label>-->\n                            <!--<input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required>-->\n\n                        <!--</div>-->\n\n                        <!--<div class=\"mb-3\">-->\n                            <!--<label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>-->\n                            <!--<input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\">-->\n                        <!--</div>-->\n\n                        <!--<div class=\"row\">-->\n                            <!--<div class=\"col-md-5 mb-3\">-->\n                                <!--<label for=\"country\">Country</label>-->\n                                <!--<select class=\"custom-select d-block w-100\" id=\"country\" required>-->\n                                    <!--<option value=\"\">Choose...</option>-->\n                                    <!--<option>Ghana</option>-->\n                                    <!--<option>Nigeria</option>-->\n                                    <!--<option>Kenya</option>-->\n                                    <!--<option>South Africa</option>-->\n                                    <!--<option>United Kingdom</option>-->\n                                    <!--<option>United States</option>-->\n                                <!--</select>-->\n\n                            <!--</div>-->\n                            <!--<div class=\"col-md-4 mb-3\">-->\n                                <!--<label for=\"state\">State</label>-->\n                                <!--<select class=\"custom-select d-block w-100\" id=\"state\" required>-->\n                                    <!--<option value=\"\">Choose...</option>-->\n                                    <!--<option>California</option>-->\n                                    <!--<option>Lagos</option>-->\n                                    <!--<option>Accra</option>-->\n                                    <!--<option>Jonannesburg</option>-->\n                                    <!--<option>London</option>-->\n                                <!--</select>-->\n                                <!--<div class=\" hidden invalid-feedback\">-->\n                                    <!--Please provide a valid state.-->\n                                <!--</div>-->\n                            <!--</div>-->\n                            <!--<div class=\"col-md-3 mb-3\">-->\n                                <!--<label for=\"zip\">Zip</label>-->\n                                <!--<input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required>-->\n                                <!--<div class=\"hidden invalid-feedback\">-->\n                                    <!--Zip code required.-->\n                                <!--</div>-->\n                            <!--</div>-->\n                        <!--</div>-->\n                        <!--<hr class=\"mb-4\">-->\n                        <!--<div class=\"custom-control custom-checkbox\">-->\n                            <!--<input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">-->\n                            <!--<label class=\"custom-control-label\" for=\"same-address\">Shipping address is the same as my billing address</label>-->\n                        <!--</div>-->\n                        <!--<div class=\"custom-control custom-checkbox\">-->\n                            <!--<input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">-->\n                            <!--<label class=\"custom-control-label\" for=\"save-info\">Save this information for next time</label>-->\n                        <!--</div>-->\n                        <!--<hr class=\"mb-4\">-->\n\n                        <!--<h4 class=\"mb-3\">Payment</h4>-->\n\n                        <!--<div class=\"d-block my-3\">-->\n                            <!--<div class=\"custom-control custom-radio\">-->\n                                <!--<input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>-->\n                                <!--<label class=\"custom-control-label\" for=\"credit\">Credit card</label>-->\n                            <!--</div>-->\n                            <!--<div class=\"custom-control custom-radio\">-->\n                                <!--<input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>-->\n                                <!--<label class=\"custom-control-label\" for=\"debit\">Debit card</label>-->\n                            <!--</div>-->\n                            <!--<div class=\"custom-control custom-radio\">-->\n                                <!--<input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>-->\n                                <!--<label class=\"custom-control-label\" for=\"paypal\">Paypal</label>-->\n                            <!--</div>-->\n                        <!--</div>-->\n                        <!--<div class=\"row\">-->\n                            <!--<div class=\"col-md-6 mb-3\">-->\n                                <!--<label for=\"cc-name\">Name on card</label>-->\n                                <!--<input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>-->\n                                <!--<small class=\"text-muted\">Full name as displayed on card</small>-->\n                                <!--<div class=\"hidden invalid-feedback\">-->\n                                    <!--Name on card is required-->\n                                <!--</div>-->\n                            <!--</div>-->\n                            <!--<div class=\"col-md-6 mb-3\">-->\n                                <!--<label for=\"cc-number\">Credit card number</label>-->\n                                <!--<input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>-->\n                                <!--<div class=\"hidden invalid-feedback\">-->\n                                    <!--Credit card number is required-->\n                                <!--</div>-->\n                            <!--</div>-->\n                        <!--</div>-->\n                        <!--<div class=\"row\">-->\n                            <!--<div class=\"col-md-3 mb-3\">-->\n                                <!--<label for=\"cc-expiration\">Expiration</label>-->\n                                <!--<input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>-->\n                                <!--<div class=\"hdden invalid-feedback\">-->\n                                    <!--Expiration date required-->\n                                <!--</div>-->\n                            <!--</div>-->\n                            <!--<div class=\"col-md-3 mb-3\">-->\n                                <!--<label for=\"cc-expiration\">CVV</label>-->\n                                <!--<input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>-->\n                                <!--<div class=\"hidden invalid-feedback\">-->\n                                    <!--Security code required-->\n                                <!--</div>-->\n                            <!--</div>-->\n                        <!--</div>-->\n                        <!--<hr class=\"mb-4\">-->\n                        <!--<button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Continue to checkout</button>-->\n                    <!--</form>-->\n                        <!--</div>&lt;!&ndash; CARD CONTENT ENDS HERE &ndash;&gt;-->\n                    <!--</div>&lt;!&ndash; CARD CLOSE &ndash;&gt;-->\n\n                 <!--</div>&lt;!&ndash; BILLING ADDRESS ENDS HERE &ndash;&gt;-->\n\n\n\n                <!--<div class=\"col-md-3 order-md-1\">-->\n                    <!--<div class=\"card\">-->\n                        <!--<div class=\"header\">-->\n                            <!--<H4> Order Summary</H4>-->\n                        <!--</div>&lt;!&ndash; CARD HEADER ENDS HERE &ndash;&gt;-->\n\n                        <!--<div class=\"content\">-->\n\n                        <!--</div>&lt;!&ndash; CARD CONTENT ENDS HERE &ndash;&gt;-->\n\n                    <!--</div>-->\n                <!--</div>-->\n\n\n             <!--</div>&lt;!&ndash; ROW ENDS HERE &ndash;&gt;-->\n        <!--<div class=\"row\">-->\n            <!--<div class=\"col-md-12\">-->\n                <!--<div class=\"card\">-->\n                    <!--<div class=\"header\">-->\n                        <!--<h4 class=\"title\">Billing Details</h4>-->\n                        <!--<p class=\"category\">Find here details of your billing record</p>-->\n                    <!--</div>-->\n                    <!--<div class=\"content table-responsive table-full-width\">-->\n                          <!--<table class=\"table table-hover table-striped\">-->\n                                <!--<thead>-->\n                                    <!--<tr>-->\n                                        <!--<th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>-->\n                                    <!--</tr>-->\n                                <!--</thead>-->\n                                <!--<tbody>-->\n                                    <!--<tr *ngFor=\"let row of tableData1.dataRows\">-->\n                                        <!--<td *ngFor=\"let cell of row\">{{cell}}</td>-->\n                                    <!--</tr>-->\n                                <!--</tbody>-->\n                          <!--</table>-->\n\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"col-md-12\">-->\n                    <!--<div class=\"card card-plain\">-->\n                        <!--<div class=\"header\">-->\n                            <!--<h4 class=\"title\">Table on Plain Background</h4>-->\n                            <!--<p class=\"category\">Here is a subtitle for this table</p>-->\n                        <!--</div>-->\n                        <!--<div class=\"content table-responsive table-full-width\">-->\n                            <!--<table class=\"table table-hover\">-->\n                                <!--<thead>-->\n                                    <!--<tr>-->\n                                        <!--<th *ngFor=\"let cell of tableData2.headerRow\">{{ cell }}</th>-->\n                                    <!--</tr>-->\n                                <!--</thead>-->\n                                <!--<tbody>-->\n                                    <!--<tr *ngFor=\"let row of tableData2.dataRows\">-->\n                                        <!--<td *ngFor=\"let cell of row\">{{cell}}</td>-->\n                                    <!--</tr>-->\n                                <!--</tbody>-->\n                            <!--</table>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"col-md-12\">-->\n                    <!--<div class=\"card\">-->\n                        <!--<div class=\"header\">-->\n                            <!--<h4 class=\"title\">Regular Table with Colors</h4>-->\n                            <!--<p class=\"category\">Here is a subtitle for this table</p>-->\n                        <!--</div>-->\n                        <!--<div class=\"content table-responsive table-full-width\">-->\n                            <!--<table class=\"table table-hover\">-->\n                                <!--<thead>-->\n                                    <!--<tr>-->\n                                      <!--<th *ngFor=\"let cell of tableData3.headerRow\">{{ cell }}</th>-->\n                                    <!--</tr>-->\n                                <!--</thead>-->\n                              <!--<tbody>-->\n                                      <!--<tr class=\"success\">-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[0]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr>-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[1]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr class=\"info\">-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[2]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr>-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[3]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr class=\"danger\">-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[4]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr>-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[5]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr class=\"warning\">-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[6]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                              <!--</tbody>-->\n                            <!--</table>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n            <!--</div>-->\n        <!--</div>-->\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-setting/cdm/cdm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cdmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var cdmComponent = (function () {
    function cdmComponent() {
    }
    cdmComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
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
    return cdmComponent;
}());
cdmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'regular-table-cmp',
        template: __webpack_require__("../../../../../src/app/user-setting/cdm/cdm.component.html")
    })
], cdmComponent);

//# sourceMappingURL=cdm.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-setting/subscriptions/subscriptions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Subscription</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                          <table class=\"table table-hover table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of tableData1.dataRows\">\n                                        <td *ngFor=\"let cell of row\">{{cell}}</td>\n                                    </tr>\n                                </tbody>\n                          </table>\n\n                    </div>\n                </div>\n                <!--<div class=\"col-md-12\">-->\n                    <!--<div class=\"card card-plain\">-->\n                        <!--<div class=\"header\">-->\n                            <!--<h4 class=\"title\">Table on Plain Background</h4>-->\n                            <!--<p class=\"category\">Here is a subtitle for this table</p>-->\n                        <!--</div>-->\n                        <!--<div class=\"content table-responsive table-full-width\">-->\n                            <!--<table class=\"table table-hover\">-->\n                                <!--<thead>-->\n                                    <!--<tr>-->\n                                        <!--<th *ngFor=\"let cell of tableData2.headerRow\">{{ cell }}</th>-->\n                                    <!--</tr>-->\n                                <!--</thead>-->\n                                <!--<tbody>-->\n                                    <!--<tr *ngFor=\"let row of tableData2.dataRows\">-->\n                                        <!--<td *ngFor=\"let cell of row\">{{cell}}</td>-->\n                                    <!--</tr>-->\n                                <!--</tbody>-->\n                            <!--</table>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"col-md-12\">-->\n                    <!--<div class=\"card\">-->\n                        <!--<div class=\"header\">-->\n                            <!--<h4 class=\"title\">Regular Table with Colors</h4>-->\n                            <!--<p class=\"category\">Here is a subtitle for this table</p>-->\n                        <!--</div>-->\n                        <!--<div class=\"content table-responsive table-full-width\">-->\n                            <!--<table class=\"table table-hover\">-->\n                                <!--<thead>-->\n                                    <!--<tr>-->\n                                      <!--<th *ngFor=\"let cell of tableData3.headerRow\">{{ cell }}</th>-->\n                                    <!--</tr>-->\n                                <!--</thead>-->\n                              <!--<tbody>-->\n                                      <!--<tr class=\"success\">-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[0]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr>-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[1]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr class=\"info\">-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[2]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr>-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[3]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr class=\"danger\">-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[4]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr>-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[5]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                                      <!--<tr class=\"warning\">-->\n                                          <!--<td *ngFor=\"let cell of tableData3.dataRows[6]\">{{cell}}</td>-->\n                                      <!--</tr>-->\n                              <!--</tbody>-->\n                            <!--</table>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-setting/subscriptions/subscriptions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SubscriptionsComponent = (function () {
    function SubscriptionsComponent() {
    }
    SubscriptionsComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['ID', 'Sub type', 'Date', 'Amount', 'Status', 'Action'],
            dataRows: [
                ['1', 'Basic', 'March 7th', '$36,738', 'Active'],
                ['2', 'Basic', 'Feb 7th', '$23,789', 'Expired'],
                ['3', 'Basic', 'January 7th', '$56,142', 'Expired'],
                ['4', 'Basic', 'December 7th', '$38,735', 'Expired'],
                ['5', 'VIP', 'November 7th', '$63,542', 'Expired'],
                ['6', 'VIP', 'October 7th', '$78,615', 'Expired']
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
    return SubscriptionsComponent;
}());
SubscriptionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'regular-table-cmp',
        template: __webpack_require__("../../../../../src/app/user-setting/subscriptions/subscriptions.component.html")
    })
], SubscriptionsComponent);

//# sourceMappingURL=subscriptions.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-setting/user-setting.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingModule", function() { return UserSettingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jw_bootstrap_switch_ng2__ = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jw_bootstrap_switch_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_setting_routing__ = __webpack_require__("../../../../../src/app/user-setting/user-setting.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__billings_billings_component__ = __webpack_require__("../../../../../src/app/user-setting/billings/billings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cdm_cdm_component__ = __webpack_require__("../../../../../src/app/user-setting/cdm/cdm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subscriptions_subscriptions_component__ = __webpack_require__("../../../../../src/app/user-setting/subscriptions/subscriptions.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UserSettingModule = (function () {
    function UserSettingModule() {
    }
    return UserSettingModule;
}());
UserSettingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__user_setting_routing__["a" /* UserSettingRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__billings_billings_component__["a" /* BillingsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__cdm_cdm_component__["a" /* cdmComponent */],
            __WEBPACK_IMPORTED_MODULE_8__subscriptions_subscriptions_component__["a" /* SubscriptionsComponent */]
        ]
    })
], UserSettingModule);

//# sourceMappingURL=user-setting.module.js.map

/***/ }),

/***/ "../../../../../src/app/user-setting/user-setting.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__billings_billings_component__ = __webpack_require__("../../../../../src/app/user-setting/billings/billings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cdm_cdm_component__ = __webpack_require__("../../../../../src/app/user-setting/cdm/cdm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscriptions_subscriptions_component__ = __webpack_require__("../../../../../src/app/user-setting/subscriptions/subscriptions.component.ts");



var UserSettingRoutes = [
    {
        path: '',
        children: [{
                path: 'billings',
                component: __WEBPACK_IMPORTED_MODULE_0__billings_billings_component__["a" /* BillingsComponent */]
            }, {
                path: 'cdm',
                component: __WEBPACK_IMPORTED_MODULE_1__cdm_cdm_component__["a" /* cdmComponent */]
            }, {
                path: 'subscriptions',
                component: __WEBPACK_IMPORTED_MODULE_2__subscriptions_subscriptions_component__["a" /* SubscriptionsComponent */]
            }]
    }
];
//# sourceMappingURL=user-setting.routing.js.map

/***/ })

});
//# sourceMappingURL=user-setting.module.chunk.js.map