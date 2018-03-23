webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/user-dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <!-- ROW STARTS HERE-->\n\n        <div  class=\"row\">\n          <div class=\"col-md-6\">\n              <div class=\"card\">\n                  <div class=\"header\">\n                      Recent Distress Alerts\n                  </div>\n                  <div class=\"content\">\n                      <table class=\"table table-hover\">\n\n                          <tbody>\n                          <tr>\n                              <td>Health Distress Message</td>\n                              <td> Hello (varName), Olayiwola needs your help</td>\n                          </tr>\n                          <tr>\n                              <td>Security Distress Message</td>\n                              <td> Hello (varName), Olayiwola needs your help</td>\n                          </tr>\n                          <tr>\n                              <td>Child Distress Message</td>\n                              <td> Hello (varName), Olayiwola needs your help</td>\n                          </tr>\n\n                          <tr>\n                              <td>Security Distress Message</td>\n                              <td> Hello (varName), Olayiwola needs your help</td>\n                          </tr>\n                          <tr>\n                              <td>Child Distress Message</td>\n                              <td> Hello (varName), Olayiwola needs your help</td>\n                          </tr>\n\n\n                          </tbody>\n                      </table>\n                  </div>\n                  <div class=\"footer\">\n                      <small>add check box here</small>\n                  </div>\n              </div><!-- Recent Distress Alert Ends here-->\n              <lbd-chart\n              [title]=\"'Transaction History'\"\n              [subtitle]=\"' '\"\n              [chartType]=\"activityChartType\"\n              [chartData]=\"activityChartData\"\n              [chartOptions]=\"activityChartOptions\"\n              [chartResponsive]=\"activityChartResponsive\"\n              [legendItems]=\"activityChartLegendItems\"\n              [withHr]=\"true\"\n              [footerIconClass]=\"'fa fa-check'\"\n              [footerText]=\"'Data information certified'\">\n            </lbd-chart><!-- Transaction History Ends here-->\n          </div><!-- First Column Ends here-->\n\n              <div class=\"col-md-6\">\n                  <div class=\"card card-user\" style=\"padding-bottom: 20px;\">\n                      <div class=\"image\">\n                          <img src=\"../../assets/img/full-screen-image-3.jpg\" alt=\" \"/>\n                      </div>\n                      <div class=\"content\">\n                          <div class=\"author\">\n                              <a href=\"#\">\n                                  <img class=\"avatar border-gray\" src=\"../../assets/img/default-avatar.png\" alt=\"...\"/>\n\n                                  <h4 class=\"title\">Adenike Ojukwu<br />\n                                      <small>naijasugar</small>\n                                  </h4>\n                              </a>\n                          </div>\n                          <p class=\"description text-center\"> \"Lamborghini Mercy\n                          </p>\n                      </div>\n                        <hr>\n                      <div style=\"margin-left:10px; margin-right:10px;\">\n                          <small>current subscription plan: </small>\n                      </div>\n                      <div style=\"margin-left:10px; margin-right:10px;\">\n                          <small>Profile completion: </small>\n                      </div>\n                      <hr>\n                      <div class=\"text-center\">\n                          <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-facebook-square\"></i></button>\n                          <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-twitter\"></i></button>\n                          <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-google-plus-square\"></i></button>\n\n                      </div>\n                  </div>\n                  <!-- user detail card ends here --->\n                  <div class=\"card\">\n                      <div class=\"header\">\n                          Location Ratings\n                      </div>\n                      <div class=\"content\" >\n                          5 star rating\n                      </div>\n                      <div class=\"footer\">\n                          <small> Click Here To Add Your Details </small>\n                      </div>\n                  </div>\n                  <!-- The Location Rating Ends Here --->\n                  <div class=\"card\">\n                      <lbd-task-list\n                      [title]=\"'Recent Security News'\"\n                      [subtitle]=\"' '\"\n                      [tasks]=\"tasks\"\n                      [withHr]=\"true\"\n                      [footerIconClass]=\"'fa fa-history'\"\n                      [footerText]=\"'Updated 3 minutes ago'\">\n                      </lbd-task-list>\n                  </div>\n              </div><!-- Second Column Ends here-->\n\n        </div>\n\n        <!-- ROW ENDS HERE-->\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lbd_lbd_chart_lbd_chart_component__ = __webpack_require__("../../../../../src/app/lbd/lbd-chart/lbd-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.tableData = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['US', 'USA', '2.920	', '53.23%'],
                ['DE', 'Germany', '1.300', '20.43%'],
                ['AU', 'Australia', '760', '10.35%'],
                ['GB', 'United Kingdom	', '690', '7.87%'],
                ['RO', 'Romania', '600', '5.94%'],
                ['BR', 'Brasil', '550', '4.34%']
            ]
        };
        var mapData = {
            "AU": 760,
            "BR": 550,
            "CA": 120,
            "DE": 1300,
            "FR": 540,
            "GB": 690,
            "GE": 200,
            "IN": 200,
            "RO": 600,
            "RU": 300,
            "US": 2920,
        };
        $('#worldMap').vectorMap({
            map: 'world_mill_en',
            backgroundColor: "transparent",
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    fill: '#e4e4e4',
                    "fill-opacity": 0.9,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 0
                }
            },
            series: {
                regions: [{
                        values: mapData,
                        scale: ["#AAAAAA", "#444444"],
                        normalizeFunction: 'polynomial'
                    }]
            },
        });
        this.emailChartType = __WEBPACK_IMPORTED_MODULE_1__lbd_lbd_chart_lbd_chart_component__["a" /* ChartType */].Pie;
        this.emailChartData = {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
        };
        this.emailChartLegendItems = [
            { title: 'Open', imageClass: 'fa fa-circle text-info' },
            { title: 'Bounce', imageClass: 'fa fa-circle text-danger' },
            { title: 'Unsubscribe', imageClass: 'fa fa-circle text-warning' }
        ];
        this.hoursChartType = __WEBPACK_IMPORTED_MODULE_1__lbd_lbd_chart_lbd_chart_component__["a" /* ChartType */].Line;
        this.hoursChartData = {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
                [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
                [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
                [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
            ]
        };
        this.hoursChartOptions = {
            low: 0,
            high: 800,
            showArea: false,
            height: '245px',
            axisX: {
                showGrid: false,
            },
            lineSmooth: __WEBPACK_IMPORTED_MODULE_2_chartist__["Interpolation"].simple({
                divisor: 3
            }),
            showLine: true,
            showPoint: true,
        };
        this.hoursChartResponsive = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        this.hoursChartLegendItems = [
            { title: 'Open', imageClass: 'fa fa-circle text-info' },
            { title: 'Click', imageClass: 'fa fa-circle text-danger' },
            { title: 'Click Second Time', imageClass: 'fa fa-circle text-warning' }
        ];
        this.activityChartType = __WEBPACK_IMPORTED_MODULE_1__lbd_lbd_chart_lbd_chart_component__["a" /* ChartType */].Bar;
        this.activityChartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
            ]
        };
        this.activityChartOptions = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '245px'
        };
        this.activityChartResponsive = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        this.activityChartLegendItems = [
            { title: 'Tesla Model S', imageClass: 'fa fa-circle text-info' },
            { title: 'BMW 5 Series', imageClass: 'fa fa-circle text-danger' }
        ];
        this.tasks = [
            { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false, check_number: 'checkbox1' },
            { title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: true, check_number: 'checkbox2' },
            {
                title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
                checked: true, check_number: 'checkbox3'
            },
            { title: 'Create 4 Invisible User Experiences you Never Knew About', checked: false, check_number: 'checkbox4' },
            { title: 'Read \'Following makes Medium better\'', checked: false, check_number: 'checkbox5' },
            { title: 'Unfollow 5 enemies from twitter', checked: false, check_number: 'checkbox6' },
        ];
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard-cmp',
        template: __webpack_require__("../../../../../src/app/user-dashboard/dashboard.component.html")
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lbd_lbd_module__ = __webpack_require__("../../../../../src/app/lbd/lbd.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_component__ = __webpack_require__("../../../../../src/app/user-dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_routing__ = __webpack_require__("../../../../../src/app/user-dashboard/dashboard.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__dashboard_routing__["a" /* DashboardRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__lbd_lbd_module__["a" /* LbdModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__dashboard_component__["a" /* DashboardComponent */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/user-dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("../../../../../src/app/user-dashboard/dashboard.component.ts");

var DashboardRoutes = [{
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */]
            }]
    }];
//# sourceMappingURL=dashboard.routing.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map