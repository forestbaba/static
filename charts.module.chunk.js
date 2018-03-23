webpackJsonp(["charts.module"],{

/***/ "../../../../../src/app/charts/charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <lbd-chart\n                  [title]=\"'24 Hours Performance'\"\n                  [subtitle]=\"'Line Chart'\"\n                  [chartType]=\"dataChartType\"\n                  [chartData]=\"dataChartData\"\n                  [chartOptions]=\"dataChartOptions\"\n                  [withHr]=\"false\">\n                </lbd-chart>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <lbd-chart\n                      [title]=\"'NASDAQ: AAPL'\"\n                      [subtitle]=\"'Line Chart with Points'\"\n                      [chartType]=\"data2ChartType\"\n                      [chartData]=\"data2ChartData\"\n                      [chartOptions]=\"data2ChartOptions\"\n                      [withHr]=\"false\">\n                    </lbd-chart>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <lbd-chart\n                      [title]=\"'Users Behavior'\"\n                      [subtitle]=\"'Multiple Lines Charts'\"\n                      [chartType]=\"hoursChartType\"\n                      [chartData]=\"hoursChartData\"\n                      [chartOptions]=\"hoursChartOptions\"\n                      [chartResponsive]=\"hoursChartResponsive\"\n                      [legendItems]=\"hoursChartLegendItems\"\n                      [withHr]=\"false\">\n                    </lbd-chart>\n                </div>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <lbd-chart\n                      [title]=\"'Public Preferences'\"\n                      [subtitle]=\"'Pie Chart'\"\n                      [chartType]=\"emailChartType\"\n                      [chartData]=\"emailChartData\"\n                      [legendItems]=\"emailChartLegendItems\"\n                      [withHr]=\"false\">\n                    </lbd-chart>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <lbd-chart\n                      [title]=\"'Views'\"\n                      [subtitle]=\"'Bar Chart'\"\n                      [chartType]=\"viewsChartType\"\n                      [chartData]=\"viewsChartData\"\n                      [chartOptions]=\"viewsChartOptions\"\n                      [chartResponsive]=\"viewsChartResponsive\"\n                      [withHr]=\"false\">\n                    </lbd-chart>\n                </div>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <lbd-chart\n                      [title]=\"'Activity'\"\n                      [subtitle]=\"'Multiple Bars Chart'\"\n                      [chartType]=\"activityChartType\"\n                      [chartData]=\"activityChartData\"\n                      [chartOptions]=\"activityChartOptions\"\n                      [chartResponsive]=\"activityChartResponsive\"\n                      [withHr]=\"false\">\n                    </lbd-chart>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
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



var ChartsComponent = (function () {
    function ChartsComponent() {
    }
    ChartsComponent.prototype.ngOnInit = function () {
        this.emailChartType = __WEBPACK_IMPORTED_MODULE_1__lbd_lbd_chart_lbd_chart_component__["a" /* ChartType */].Pie;
        this.emailChartData = {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
        };
        this.emailChartLegendItems = [
            { title: 'Apple', imageClass: 'fa fa-circle text-info' },
            { title: 'Samsung', imageClass: 'fa fa-circle text-danger' },
            { title: 'Windows Phone', imageClass: 'fa fa-circle text-warning' }
        ];
        this.dataChartType = __WEBPACK_IMPORTED_MODULE_1__lbd_lbd_chart_lbd_chart_component__["a" /* ChartType */].Line;
        this.dataChartData = {
            labels: ['6pm', '9pm', '11pm', '2am', '4am', '8am', '2pm', '5pm', '8pm', '11pm', '4am'],
            series: [
                [1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14, 13]
            ]
        };
        this.dataChartOptions = {
            showPoint: false,
            lineSmooth: true,
            height: "260px",
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
            },
            low: 0,
            high: 16
        };
        this.data2ChartType = __WEBPACK_IMPORTED_MODULE_1__lbd_lbd_chart_lbd_chart_component__["a" /* ChartType */].Line;
        this.data2ChartData = {
            labels: ['\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
            series: [
                [22.20, 34.90, 42.28, 51.93, 62.21, 80.23, 62.21, 82.12, 102.50, 107.23]
            ]
        };
        this.data2ChartOptions = {
            lineSmooth: false,
            height: "260px",
            axisY: {
                offset: 40,
                labelInterpolationFnc: function (value) {
                    return '$' + value;
                }
            },
            low: 10,
            high: 110,
            classNames: {
                point: 'ct-point ct-green',
                line: 'ct-line ct-green'
            }
        };
        this.hoursChartType = __WEBPACK_IMPORTED_MODULE_1__lbd_lbd_chart_lbd_chart_component__["a" /* ChartType */].Line;
        this.hoursChartData = {
            labels: ['\'06', '\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
            series: [
                [287, 385, 490, 554, 586, 698, 695, 752, 788, 846, 944],
                [67, 152, 143, 287, 335, 435, 437, 539, 542, 544, 647],
                [23, 113, 67, 190, 239, 307, 308, 439, 410, 410, 509]
            ]
        };
        this.hoursChartOptions = {
            low: 0,
            high: 1000,
            showArea: false,
            height: '245px',
            axisX: {
                showGrid: true,
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
        this.viewsChartType = __WEBPACK_IMPORTED_MODULE_1__lbd_lbd_chart_lbd_chart_component__["a" /* ChartType */].Bar;
        this.viewsChartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        this.viewsChartOptions = {
            seriesBarDistance: 10,
            classNames: {
                bar: 'ct-bar ct-azure'
            },
            axisX: {
                showGrid: false
            }
        };
        this.viewsChartResponsive = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
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
            height: "245px"
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
    };
    return ChartsComponent;
}());
ChartsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'charts-cmp',
        template: __webpack_require__("../../../../../src/app/charts/charts.component.html")
    })
], ChartsComponent);

//# sourceMappingURL=charts.component.js.map

/***/ }),

/***/ "../../../../../src/app/charts/charts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lbd_lbd_module__ = __webpack_require__("../../../../../src/app/lbd/lbd.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__charts_component__ = __webpack_require__("../../../../../src/app/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__charts_routing__ = __webpack_require__("../../../../../src/app/charts/charts.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__charts_routing__["a" /* ChartsRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__lbd_lbd_module__["a" /* LbdModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__charts_component__["a" /* ChartsComponent */]]
    })
], ChartsModule);

//# sourceMappingURL=charts.module.js.map

/***/ }),

/***/ "../../../../../src/app/charts/charts.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__charts_component__ = __webpack_require__("../../../../../src/app/charts/charts.component.ts");

var ChartsRoutes = [{
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__charts_component__["a" /* ChartsComponent */]
            }]
    }];
//# sourceMappingURL=charts.routing.js.map

/***/ })

});
//# sourceMappingURL=charts.module.chunk.js.map