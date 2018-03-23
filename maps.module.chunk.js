webpackJsonp(["maps.module"],{

/***/ "../../../../../src/app/maps/fullscreenmap/fullscreenmap.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"full-screen-map\">\n    <ngui-map zoom=\"13\" center=\"40.748817,-73.985428\" scrollwheel=\"false\" >\n        <marker [position]=\"[40.748817,-73.985428]\"></marker>\n    </ngui-map>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/maps/fullscreenmap/fullscreenmap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullScreenMapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullScreenMapsComponent = (function () {
    function FullScreenMapsComponent() {
    }
    FullScreenMapsComponent.prototype.ngOnInit = function () {
    };
    return FullScreenMapsComponent;
}());
FullScreenMapsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fullscreen-map-cmp',
        template: __webpack_require__("../../../../../src/app/maps/fullscreenmap/fullscreenmap.component.html")
    })
], FullScreenMapsComponent);

//# sourceMappingURL=fullscreenmap.component.js.map

/***/ }),

/***/ "../../../../../src/app/maps/googlemaps/googlemaps.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-map\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Satellite Map</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <ngui-map zoom=\"3\" center=\"40.748817,-73.985428\"  mapTypeId=\"satellite\" scrollwheel=\"false\">\n                            <marker [position]=\"[40.748817,-73.985428]\"></marker>\n                        </ngui-map>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card card-map\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Regular Map</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <ngui-map zoom=\"13\" center=\"40.748817,-73.985428\" scrollwheel=\"false\" >\n                            <marker [position]=\"[40.748817,-73.985428]\"></marker>\n                        </ngui-map>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/maps/googlemaps/googlemaps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GoogleMapsComponent = (function () {
    function GoogleMapsComponent() {
    }
    GoogleMapsComponent.prototype.ngOnInit = function () {
    };
    return GoogleMapsComponent;
}());
GoogleMapsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vector-maps-cmp',
        template: __webpack_require__("../../../../../src/app/maps/googlemaps/googlemaps.component.html")
    })
], GoogleMapsComponent);

//# sourceMappingURL=googlemaps.component.js.map

/***/ }),

/***/ "../../../../../src/app/maps/maps.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngui_map__ = __webpack_require__("../../../../@ngui/map/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngui_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ngui_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__maps_routing__ = __webpack_require__("../../../../../src/app/maps/maps.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fullscreenmap_fullscreenmap_component__ = __webpack_require__("../../../../../src/app/maps/fullscreenmap/fullscreenmap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__googlemaps_googlemaps_component__ = __webpack_require__("../../../../../src/app/maps/googlemaps/googlemaps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vectormaps_vectormaps_component__ = __webpack_require__("../../../../../src/app/maps/vectormaps/vectormaps.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MapsModule = (function () {
    function MapsModule() {
    }
    return MapsModule;
}());
MapsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__maps_routing__["a" /* MapsRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__ngui_map__["NguiMapModule"].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY' })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__fullscreenmap_fullscreenmap_component__["a" /* FullScreenMapsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__googlemaps_googlemaps_component__["a" /* GoogleMapsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__vectormaps_vectormaps_component__["a" /* VectorMapsComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], MapsModule);

//# sourceMappingURL=maps.module.js.map

/***/ }),

/***/ "../../../../../src/app/maps/maps.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fullscreenmap_fullscreenmap_component__ = __webpack_require__("../../../../../src/app/maps/fullscreenmap/fullscreenmap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__googlemaps_googlemaps_component__ = __webpack_require__("../../../../../src/app/maps/googlemaps/googlemaps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vectormaps_vectormaps_component__ = __webpack_require__("../../../../../src/app/maps/vectormaps/vectormaps.component.ts");



var MapsRoutes = [{
        path: '',
        children: [{
                path: 'fullscreen',
                component: __WEBPACK_IMPORTED_MODULE_0__fullscreenmap_fullscreenmap_component__["a" /* FullScreenMapsComponent */]
            }]
    }, {
        path: '',
        children: [{
                path: 'google',
                component: __WEBPACK_IMPORTED_MODULE_1__googlemaps_googlemaps_component__["a" /* GoogleMapsComponent */]
            }]
    }, {
        path: '',
        children: [{
                path: 'vector',
                component: __WEBPACK_IMPORTED_MODULE_2__vectormaps_vectormaps_component__["a" /* VectorMapsComponent */]
            }]
    }
];
//# sourceMappingURL=maps.routing.js.map

/***/ }),

/***/ "../../../../../src/app/maps/vectormaps/vectormaps.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h3 class=\"text-center\">\n                    World Map<br />\n                    <small>\n                        Looks great on any resolution. Made by our friends from <a target=\"_blank\" href=\"http://jvectormap.com/\">jVector Map</a>.\n                    </small>\n                </h3>\n                <div class=\"card card-plain\">\n                    <div class=\"card-content\">\n                        <div id=\"worldMap\" class=\"map map-big\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/maps/vectormaps/vectormaps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VectorMapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VectorMapsComponent = (function () {
    function VectorMapsComponent() {
    }
    VectorMapsComponent.prototype.ngOnInit = function () {
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
    };
    return VectorMapsComponent;
}());
VectorMapsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vector-maps-cmp',
        template: __webpack_require__("../../../../../src/app/maps/vectormaps/vectormaps.component.html")
    })
], VectorMapsComponent);

//# sourceMappingURL=vectormaps.component.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/components/custom-marker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var debounceTime_1 = __webpack_require__("../../../../rxjs/operator/debounceTime.js");
var ngui_map_1 = __webpack_require__("../../../../@ngui/map/dist/services/ngui-map.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var INPUTS = [
    'position'
];
// to avoid DOM event conflicts map_*
var OUTPUTS = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged',
    'map_click', 'map_mouseover', 'map_mouseout', 'map_mouseup', 'map_mousedown', 'map_drag', 'map_dragend'
];
/**
 * Wrapper to a create extend OverlayView at runtime, only after google maps is loaded.
 * Otherwise throws a google is unknown error.
 */
function getCustomMarkerOverlayView(htmlEl, position) {
    var CustomMarkerOverlayView = (function (_super) {
        __extends(CustomMarkerOverlayView, _super);
        function CustomMarkerOverlayView(htmlEl, position) {
            var _this = _super.call(this) || this;
            _this.visible = true;
            _this.setPosition = function (position) {
                _this.htmlEl.style.visibility = 'hidden';
                if (position.constructor.name === 'Array') {
                    _this.position = new google.maps.LatLng(position[0], position[1]);
                }
                else if (typeof position === 'string') {
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ address: position }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            _this.setPosition(results[0].geometry.location);
                        }
                        else {
                        }
                    });
                }
                else if (position && typeof position.lng === 'function') {
                    _this.position = position;
                }
                if (_this.getProjection() && typeof _this.position.lng === 'function') {
                    var positionOnMap_1 = function () {
                        var posPixel = _this.getProjection().fromLatLngToDivPixel(_this.position);
                        var x = Math.round(posPixel.x - (_this.htmlEl.offsetWidth / 2));
                        var y = Math.round(posPixel.y - _this.htmlEl.offsetHeight / 2);
                        _this.htmlEl.style.left = x + 'px';
                        _this.htmlEl.style.top = y + 'px';
                        _this.htmlEl.style.visibility = 'visible';
                    };
                    if (_this.htmlEl.offsetWidth && _this.htmlEl.offsetHeight) {
                        positionOnMap_1();
                    }
                    else {
                        setTimeout(function () { return positionOnMap_1(); });
                    }
                }
            };
            _this.htmlEl = htmlEl;
            _this.position = position;
            return _this;
        }
        CustomMarkerOverlayView.prototype.onAdd = function () {
            this.getPanes().overlayMouseTarget.appendChild(this.htmlEl);
            // required for correct display inside google maps container
            this.htmlEl.style.position = 'absolute';
        };
        CustomMarkerOverlayView.prototype.draw = function () {
            this.setPosition(this.position);
            this.setZIndex(this.zIndex);
            this.setVisible(this.visible);
        };
        CustomMarkerOverlayView.prototype.onRemove = function () {
            //
        };
        CustomMarkerOverlayView.prototype.getPosition = function () {
            return this.position;
        };
        ;
        CustomMarkerOverlayView.prototype.setZIndex = function (zIndex) {
            zIndex && (this.zIndex = zIndex); /* jshint ignore:line */
            this.htmlEl.style.zIndex = this.zIndex;
        };
        CustomMarkerOverlayView.prototype.setVisible = function (visible) {
            this.htmlEl.style.display = visible ? 'inline-block' : 'none';
            this.visible = visible;
        };
        ;
        return CustomMarkerOverlayView;
    }(google.maps.OverlayView));
    return new CustomMarkerOverlayView(htmlEl, position);
}
var CustomMarker = (function () {
    function CustomMarker(nguiMapComponent, elementRef, nguiMap) {
        var _this = this;
        this.nguiMapComponent = nguiMapComponent;
        this.elementRef = elementRef;
        this.nguiMap = nguiMap;
        this.initialized$ = new core_1.EventEmitter();
        this.inputChanges$ = new Subject_1.Subject();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
    }
    // Initialize this map object when map is ready
    CustomMarker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    CustomMarker.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    CustomMarker.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        this.nguiMapComponent.removeFromMapObjectGroup('CustomMarker', this.mapObject);
        if (this.mapObject) {
            this.nguiMap.clearObjectEvents(OUTPUTS, this, 'mapObject');
        }
    };
    CustomMarker.prototype.initialize = function () {
        var _this = this;
        this.el = this.elementRef.nativeElement;
        this.mapObject = getCustomMarkerOverlayView(this.el, this['position']);
        this.mapObject.setMap(this.nguiMapComponent.map);
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(OUTPUTS, this, 'mapObject');
        // update object when input changes
        debounceTime_1.debounceTime.call(this.inputChanges$, 1000)
            .subscribe(function (changes) { return _this.nguiMap.updateGoogleObject(_this.mapObject, changes); });
        this.nguiMapComponent.addToMapObjectGroup('CustomMarker', this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    return CustomMarker;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CustomMarker.prototype, "initialized$", void 0);
CustomMarker = __decorate([
    core_1.Component({
        selector: 'ngui-map > custom-marker',
        inputs: INPUTS,
        outputs: OUTPUTS,
        template: "\n    <ng-content></ng-content>\n  ",
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent,
        core_1.ElementRef,
        ngui_map_1.NguiMap])
], CustomMarker);
exports.CustomMarker = CustomMarker;
//# sourceMappingURL=custom-marker.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/components/info-window.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var debounceTime_1 = __webpack_require__("../../../../rxjs/operator/debounceTime.js");
var ngui_map_1 = __webpack_require__("../../../../@ngui/map/dist/services/ngui-map.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var INPUTS = [
    'content', 'disableAutoPan', 'maxWidth', 'pixelOffset', 'position', 'zIndex', 'options'
];
var OUTPUTS = [
    'closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'
];
var InfoWindow = (function () {
    function InfoWindow(elementRef, nguiMap, nguiMapComponent) {
        var _this = this;
        this.elementRef = elementRef;
        this.nguiMap = nguiMap;
        this.nguiMapComponent = nguiMapComponent;
        this.initialized$ = new core_1.EventEmitter();
        this.objectOptions = {};
        this.inputChanges$ = new Subject_1.Subject();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
    }
    // Initialize this map object when map is ready
    InfoWindow.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    InfoWindow.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    // called when map is ready
    InfoWindow.prototype.initialize = function () {
        var _this = this;
        this.objectOptions = this.nguiMapComponent.optionBuilder.googlizeAllInputs(INPUTS, this);
        this.infoWindow = new google.maps.InfoWindow(this.objectOptions);
        this.infoWindow['mapObjectName'] = 'InfoWindow';
        // register infoWindow ids to NguiMap, so that it can be opened by id
        if (this.elementRef.nativeElement.id) {
            this.nguiMapComponent.infoWindows[this.elementRef.nativeElement.id] = this;
        }
        else {
            console.error('An InfoWindow must have an id. e.g. id="detail"');
        }
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(OUTPUTS, this, 'infoWindow');
        // update object when input changes
        debounceTime_1.debounceTime.call(this.inputChanges$, 1000)
            .subscribe(function (changes) { return _this.nguiMap.updateGoogleObject(_this.infoWindow, changes); });
        this.nguiMapComponent.addToMapObjectGroup('InfoWindow', this.infoWindow);
        this.initialized$.emit(this.infoWindow);
    };
    InfoWindow.prototype.open = function (anchor) {
        // set content and open it
        this.infoWindow.setContent(this.template.element.nativeElement);
        this.infoWindow.open(this.nguiMapComponent.map, anchor);
    };
    InfoWindow.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        if (this.infoWindow) {
            this.nguiMap.clearObjectEvents(OUTPUTS, this, 'infoWindow');
            delete this.infoWindow;
        }
    };
    return InfoWindow;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], InfoWindow.prototype, "initialized$", void 0);
__decorate([
    core_1.ViewChild('template', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], InfoWindow.prototype, "template", void 0);
InfoWindow = __decorate([
    core_1.Component({
        selector: 'ngui-map > info-window',
        inputs: INPUTS,
        outputs: OUTPUTS,
        template: "<div #template><ng-content></ng-content></div>",
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        ngui_map_1.NguiMap,
        ngui_map_component_1.NguiMapComponent])
], InfoWindow);
exports.InfoWindow = InfoWindow;
//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/components/ngui-map.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var option_builder_1 = __webpack_require__("../../../../@ngui/map/dist/services/option-builder.js");
var navigator_geolocation_1 = __webpack_require__("../../../../@ngui/map/dist/services/navigator-geolocation.js");
var geo_coder_1 = __webpack_require__("../../../../@ngui/map/dist/services/geo-coder.js");
var ngui_map_1 = __webpack_require__("../../../../@ngui/map/dist/services/ngui-map.js");
var api_loader_1 = __webpack_require__("../../../../@ngui/map/dist/services/api-loader.js");
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var debounceTime_1 = __webpack_require__("../../../../rxjs/operator/debounceTime.js");
var util_1 = __webpack_require__("../../../../@ngui/map/dist/services/util.js");
var INPUTS = [
    'backgroundColor', 'center', 'disableDefaultUI', 'disableDoubleClickZoom', 'draggable', 'draggableCursor',
    'draggingCursor', 'heading', 'keyboardShortcuts', 'mapMaker', 'mapTypeControl', 'mapTypeId', 'maxZoom', 'minZoom',
    'noClear', 'overviewMapControl', 'panControl', 'panControlOptions', 'rotateControl', 'scaleControl', 'scrollwheel',
    'streetView', 'styles', 'tilt', 'zoom', 'streetViewControl', 'zoomControl', 'zoomControlOptions', 'mapTypeControlOptions',
    'overviewMapControlOptions', 'rotateControlOptions', 'scaleControlOptions', 'streetViewControlOptions', 'fullscreenControl', 'fullscreenControlOptions',
    'options',
    // ngui-map-specific inputs
    'geoFallbackCenter'
];
var OUTPUTS = [
    'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'heading_changed', 'idle',
    'typeid_changed', 'mousemove', 'mouseout', 'mouseover', 'projection_changed', 'resize', 'rightclick',
    'tilesloaded', 'tile_changed', 'zoom_changed',
    // to avoid DOM event conflicts
    'mapClick', 'mapMouseover', 'mapMouseout', 'mapMousemove', 'mapDrag', 'mapDragend', 'mapDragstart'
];
var NguiMapComponent = (function () {
    function NguiMapComponent(optionBuilder, elementRef, geolocation, geoCoder, nguiMap, apiLoader, zone) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.geolocation = geolocation;
        this.geoCoder = geoCoder;
        this.nguiMap = nguiMap;
        this.apiLoader = apiLoader;
        this.zone = zone;
        this.mapReady$ = new core_1.EventEmitter();
        this.mapOptions = {};
        this.inputChanges$ = new Subject_1.Subject();
        // map objects by group
        this.infoWindows = {};
        // map has been fully initialized
        this.mapIdledOnce = false;
        this.initializeMapAfterDisplayed = false;
        apiLoader.load();
        // all outputs needs to be initialized,
        // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
        OUTPUTS.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
    }
    NguiMapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.apiLoaderSub = this.apiLoader.api$.subscribe(function () { return _this.initializeMap(); });
    };
    NguiMapComponent.prototype.ngAfterViewChecked = function () {
        if (this.initializeMapAfterDisplayed && this.el && this.el.offsetWidth > 0) {
            this.initializeMap();
        }
    };
    NguiMapComponent.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    NguiMapComponent.prototype.initializeMap = function () {
        var _this = this;
        this.el = this.elementRef.nativeElement.querySelector('.google-map');
        if (this.el && this.el.offsetWidth === 0) {
            this.initializeMapAfterDisplayed = true;
            return;
        }
        this.initializeMapAfterDisplayed = false;
        this.mapOptions = this.optionBuilder.googlizeAllInputs(INPUTS, this);
        this.mapOptions.zoom = this.mapOptions.zoom || 15;
        typeof this.mapOptions.center === 'string' && (delete this.mapOptions.center);
        this.zone.runOutsideAngular(function () {
            _this.map = new google.maps.Map(_this.el, _this.mapOptions);
            _this.map['mapObjectName'] = 'NguiMapComponent';
            if (!_this.mapOptions.center) {
                _this.setCenter();
            }
            // set google events listeners and emits to this outputs listeners
            _this.nguiMap.setObjectEvents(OUTPUTS, _this, 'map');
            _this.map.addListener('idle', function () {
                if (!_this.mapIdledOnce) {
                    _this.mapIdledOnce = true;
                    setTimeout(function () {
                        _this.mapReady$.emit(_this.map);
                    });
                }
            });
            // update map when input changes
            debounceTime_1.debounceTime.call(_this.inputChanges$, 1000)
                .subscribe(function (changes) { return _this.nguiMap.updateGoogleObject(_this.map, changes); });
            if (typeof window !== 'undefined' && window['nguiMapRef']) {
                // expose map object for test and debugging on (<any>window)
                window['nguiMapRef'].map = _this.map;
            }
        });
    };
    NguiMapComponent.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this.geolocation.getCurrentPosition().subscribe(function (position) {
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.map.setCenter(latLng);
            }, function (error) {
                console.error('ngui-map: Error finding the current position');
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            });
        }
        else if (typeof this['center'] === 'string') {
            this.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                _this.map.setCenter(results[0].geometry.location);
            }, function (error) {
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            });
        }
    };
    NguiMapComponent.prototype.openInfoWindow = function (id, anchor) {
        this.infoWindows[id].open(anchor);
    };
    NguiMapComponent.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        if (this.el && !this.initializeMapAfterDisplayed) {
            this.nguiMap.clearObjectEvents(OUTPUTS, this, 'map');
        }
        if (this.apiLoaderSub) {
            this.apiLoaderSub.unsubscribe();
        }
    };
    // map.markers, map.circles, map.heatmapLayers.. etc
    NguiMapComponent.prototype.addToMapObjectGroup = function (mapObjectName, mapObject) {
        var groupName = util_1.toCamelCase(mapObjectName.toLowerCase()) + 's'; // e.g. markers
        this.map[groupName] = this.map[groupName] || [];
        this.map[groupName].push(mapObject);
    };
    NguiMapComponent.prototype.removeFromMapObjectGroup = function (mapObjectName, mapObject) {
        var groupName = util_1.toCamelCase(mapObjectName.toLowerCase()) + 's'; // e.g. markers
        if (this.map && this.map[groupName]) {
            var index = this.map[groupName].indexOf(mapObject);
            (index > -1) && this.map[groupName].splice(index, 1);
        }
    };
    return NguiMapComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], NguiMapComponent.prototype, "mapReady$", void 0);
NguiMapComponent = __decorate([
    core_1.Component({
        selector: 'ngui-map',
        providers: [ngui_map_1.NguiMap, option_builder_1.OptionBuilder, geo_coder_1.GeoCoder, navigator_geolocation_1.NavigatorGeolocation],
        styles: ["\n    ngui-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
        inputs: INPUTS,
        outputs: OUTPUTS,
        encapsulation: core_1.ViewEncapsulation.None,
        template: "\n    <div class=\"google-map\"></div>\n    <ng-content></ng-content>\n  ",
    }),
    __metadata("design:paramtypes", [option_builder_1.OptionBuilder,
        core_1.ElementRef,
        navigator_geolocation_1.NavigatorGeolocation,
        geo_coder_1.GeoCoder,
        ngui_map_1.NguiMap,
        api_loader_1.NgMapApiLoader,
        core_1.NgZone])
], NguiMapComponent);
exports.NguiMapComponent = NguiMapComponent;
//# sourceMappingURL=ngui-map.component.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/base-map-directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var BaseMapDirective = (function () {
    function BaseMapDirective(nguiMapComponent, mapObjectName, inputs, outputs) {
        var _this = this;
        this.nguiMapComponent = nguiMapComponent;
        this.mapObjectName = mapObjectName;
        this.inputs = inputs;
        this.outputs = outputs;
        // this should be redefined on each childr directive
        this.initialized$ = new core_1.EventEmitter();
        this._subscriptions = [];
        this.nguiMap = this.nguiMapComponent['nguiMap'];
        this.optionBuilder = this.nguiMapComponent['optionBuilder'];
        // all outputs must be initialized
        this.outputs.forEach(function (output) { return _this[output] = new core_1.EventEmitter(); });
        this.mapObjectName = mapObjectName;
    }
    // Initialize this map object when map is ready
    BaseMapDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    // only called when map is ready
    BaseMapDirective.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        // will be set after geocoded
        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
        typeof this.objectOptions.center === 'string' && (delete this.objectOptions.center);
        // noinspection TypeScriptUnresolvedFunction
        if (this.libraryName) {
            this.mapObject = new google.maps[this.libraryName][this.mapObjectName](this.objectOptions);
        }
        else {
            this.mapObject = new google.maps[this.mapObjectName](this.objectOptions);
        }
        this.mapObject.setMap(this.nguiMapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        this.mapObject['nguiMapComponent'] = this.nguiMapComponent;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    // When input is changed, update object too.
    // e.g., when map center is changed by user, update center on the map
    BaseMapDirective.prototype.ngOnChanges = function (changes) {
        this.nguiMap.updateGoogleObject(this.mapObject, changes);
    };
    // When destroyed, remove event listener, and delete this object to prevent memory leak
    BaseMapDirective.prototype.ngOnDestroy = function () {
        this._subscriptions.map(function (subscription) { return subscription.unsubscribe(); });
        this.nguiMapComponent.removeFromMapObjectGroup(this.mapObjectName, this.mapObject);
        if (this.mapObject) {
            this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
        }
    };
    return BaseMapDirective;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], BaseMapDirective.prototype, "initialized$", void 0);
exports.BaseMapDirective = BaseMapDirective;
//# sourceMappingURL=base-map-directive.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/bicycling-layer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_map_directive_1 = __webpack_require__("../../../../@ngui/map/dist/directives/base-map-directive.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var INPUTS = [];
var OUTPUTS = [];
var BicyclingLayer = (function (_super) {
    __extends(BicyclingLayer, _super);
    // declare INPUTS for AOT compiler
    // declare OUTPUTS for AOT compiler
    function BicyclingLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'BicyclingLayer', INPUTS, OUTPUTS) || this;
    }
    return BicyclingLayer;
}(base_map_directive_1.BaseMapDirective));
BicyclingLayer = __decorate([
    core_1.Directive({
        selector: 'ngui-map > bicycling-layer',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent])
], BicyclingLayer);
exports.BicyclingLayer = BicyclingLayer;
//# sourceMappingURL=bicycling-layer.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/circle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_map_directive_1 = __webpack_require__("../../../../@ngui/map/dist/directives/base-map-directive.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var INPUTS = [
    'center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
    // ngui-map specific inputs
    'geoFallbackCenter'
];
var OUTPUTS = [
    'centerChanged', 'click', 'dblclick', 'drag', 'dragend', 'dragstart',
    'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'radiusChanged', 'rightclick',
];
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'Circle', INPUTS, OUTPUTS) || this;
        _this.nguiMapComp = nguiMapComp;
        _this.objectOptions = {};
        return _this;
    }
    Circle.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setCenter();
    };
    Circle.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (center) {
                var latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);
                _this.mapObject.setCenter(latLng);
            }, function (error) {
                console.error('ngui-map, error in finding the current position');
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
        else if (typeof this['center'] === 'string') {
            this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                _this.mapObject.setCenter(results[0].geometry.location);
            }, function (error) {
                console.error('ngui-map, error in finding location from', _this['center']);
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
    };
    return Circle;
}(base_map_directive_1.BaseMapDirective));
Circle = __decorate([
    core_1.Directive({
        selector: 'ngui-map>circle, ngui-map>map-circle',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent])
], Circle);
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/data-layer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_map_directive_1 = __webpack_require__("../../../../@ngui/map/dist/directives/base-map-directive.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var INPUTS = ['controlPosition', 'controls', 'drawingMode', 'featureFactory', 'style', 'geoJson'];
var OUTPUTS = [
    'addfeature', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover',
    'mouseup', 'removefeature', 'removeproperty', 'rightclick', 'setgeometry', 'setproperty'
];
var DataLayer = (function (_super) {
    __extends(DataLayer, _super);
    function DataLayer(nguiMapComponent) {
        return _super.call(this, nguiMapComponent, 'Data', INPUTS, OUTPUTS) || this;
    }
    // only called when map is ready
    DataLayer.prototype.initialize = function () {
        if (this['geoJson']) {
            // addGeoJson from an object
            this.nguiMapComponent.map.data.addGeoJson(this['geoJson']);
        }
        else if (this['geoJsonUrl']) {
            // loadGeoJson from a URL
            this.nguiMapComponent.map.data.loadGeoJson(this['geoJsonUrl']);
        }
        else {
            this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
            this.nguiMapComponent.map.data.add(this.objectOptions);
        }
        // unlike others, data belongs to map. e.g., map.data.loadGeoJson(), map.data.add()
        this.mapObject = this.nguiMapComponent.map.data;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    return DataLayer;
}(base_map_directive_1.BaseMapDirective));
DataLayer = __decorate([
    core_1.Directive({
        selector: 'ngui-map > data-layer',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent])
], DataLayer);
exports.DataLayer = DataLayer;
//# sourceMappingURL=data-layer.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/directions-renderer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_map_directive_1 = __webpack_require__("../../../../@ngui/map/dist/directives/base-map-directive.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var navigator_geolocation_1 = __webpack_require__("../../../../@ngui/map/dist/services/navigator-geolocation.js");
var INPUTS = [
    'directions', 'draggable', 'hideRouteList', 'infoWindow', 'panel', 'markerOptions',
    'polylineOptions', 'preserveViewport', 'routeIndex', 'suppressBicyclingLayer',
    'suppressInfoWindows', 'suppressMarkers', 'suppressPolylines'
];
var OUTPUTS = ['directions_changed'];
var DirectionsRenderer = (function (_super) {
    __extends(DirectionsRenderer, _super);
    function DirectionsRenderer(nguiMapComponent, geolocation) {
        var _this = _super.call(this, nguiMapComponent, 'DirectionsRenderer', INPUTS, OUTPUTS) || this;
        _this.geolocation = geolocation;
        return _this;
    }
    // only called when map is ready
    DirectionsRenderer.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        if (typeof this.objectOptions['panel'] === 'string') {
            this.objectOptions['panel'] = document.querySelector(this.objectOptions['panel']);
        }
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer(this.objectOptions);
        this.directionsRenderer.setMap(this.nguiMapComponent.map);
        // set google events listeners and emidirectionsRenderer to this outputs listeners
        this.showDirections(this.directionsRequest);
        this.nguiMap.setObjectEvents(this.outputs, this, 'directionsRenderer');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.directionsRenderer);
    };
    DirectionsRenderer.prototype.ngOnChanges = function (changes) {
        var newOptions = {};
        for (var key in changes) {
            if (this.inputs.indexOf(key) !== -1) {
                newOptions[key] = this.optionBuilder.googlize(changes[key].currentValue);
            }
        }
        if (changes['directionsRequest'] && this.directionsRenderer) {
            this.directionsService && this.showDirections(this.directionsRequest);
        }
    };
    DirectionsRenderer.prototype.showDirections = function (directionsRequest) {
        var _this = this;
        this.directionsService.route(directionsRequest, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                _this.directionsRenderer.setDirections(response);
            }
            else {
                console.error('Directions request failed due to ' + status);
            }
        });
    };
    DirectionsRenderer.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.nguiMap.clearObjectEvents(this.outputs, this, 'directionsRenderer');
    };
    return DirectionsRenderer;
}(base_map_directive_1.BaseMapDirective));
__decorate([
    core_1.Input('directions-request'),
    __metadata("design:type", Object)
], DirectionsRenderer.prototype, "directionsRequest", void 0);
DirectionsRenderer = __decorate([
    core_1.Directive({
        selector: 'ngui-map > directions-renderer',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent,
        navigator_geolocation_1.NavigatorGeolocation])
], DirectionsRenderer);
exports.DirectionsRenderer = DirectionsRenderer;
//# sourceMappingURL=directions-renderer.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/drawing-manager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_map_directive_1 = __webpack_require__("../../../../@ngui/map/dist/directives/base-map-directive.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var INPUTS = [
    'options',
    'circleOptions', 'drawingControl', 'drawingControlOptions', 'drawingMode',
    'map', 'markerOptions', 'polygonOptions', 'polylineOptions', 'rectangleOptions'
];
var OUTPUTS = [
    'circlecomplete', 'markercomplete', 'overlaycomplete',
    'polygoncomplete', 'polylinecomplete', 'rectanglecomplete'
];
var DrawingManager = (function (_super) {
    __extends(DrawingManager, _super);
    function DrawingManager(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'DrawingManager', INPUTS, OUTPUTS) || this;
        _this.libraryName = 'drawing';
        return _this;
    }
    return DrawingManager;
}(base_map_directive_1.BaseMapDirective));
DrawingManager = __decorate([
    core_1.Directive({
        selector: 'ngui-map > drawing-manager',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent])
], DrawingManager);
exports.DrawingManager = DrawingManager;
//# sourceMappingURL=drawing-manager.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/ground-overlay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_map_directive_1 = __webpack_require__("../../../../@ngui/map/dist/directives/base-map-directive.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var INPUTS = ['url', 'bounds', 'clickable', 'opacity'];
var OUTPUTS = ['click', 'dblclick'];
var GroundOverlay = (function (_super) {
    __extends(GroundOverlay, _super);
    function GroundOverlay(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'GroundOverlay', INPUTS, OUTPUTS) || this;
        _this.objectOptions = {};
        return _this;
    }
    // re-declaring initialize function. called when map is ready
    GroundOverlay.prototype.initialize = function () {
        // url, bounds are not the options of GroundOverlay
        this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this);
        // noinspection TypeScriptUnresolvedFunction
        this.mapObject = new google.maps.GroundOverlay(this['url'], this['bounds'], this.objectOptions);
        this.mapObject.setMap(this.nguiMapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    return GroundOverlay;
}(base_map_directive_1.BaseMapDirective));
GroundOverlay = __decorate([
    core_1.Directive({
        selector: 'ngui-map > ground-overlay',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent])
], GroundOverlay);
exports.GroundOverlay = GroundOverlay;
//# sourceMappingURL=ground-overlay.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/heatmap-layer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_map_directive_1 = __webpack_require__("../../../../@ngui/map/dist/directives/base-map-directive.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var INPUTS = ['data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options'];
var OUTPUTS = [];
var HeatmapLayer = (function (_super) {
    __extends(HeatmapLayer, _super);
    function HeatmapLayer(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'HeatmapLayer', INPUTS, OUTPUTS) || this;
        // declare OUTPUTS for AOT compiler
        _this.libraryName = 'visualization';
        return _this;
    }
    return HeatmapLayer;
}(base_map_directive_1.BaseMapDirective));
HeatmapLayer = __decorate([
    core_1.Directive({
        selector: 'ngui-map > heatmap-layer',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent])
], HeatmapLayer);
exports.HeatmapLayer = HeatmapLayer;
//# sourceMappingURL=heatmap-layer.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/kml-layer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_map_directive_1 = __webpack_require__("../../../../@ngui/map/dist/directives/base-map-directive.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var INPUTS = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex', 'options'];
var OUTPUTS = ['click', 'defaultviewport_changed', 'status_changed'];
var KmlLayer = (function (_super) {
    __extends(KmlLayer, _super);
    function KmlLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'KmlLayer', INPUTS, OUTPUTS) || this;
    }
    return KmlLayer;
}(base_map_directive_1.BaseMapDirective));
KmlLayer = __decorate([
    core_1.Directive({
        selector: 'ngui-map > kml-layer',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent])
], KmlLayer);
exports.KmlLayer = KmlLayer;
//# sourceMappingURL=kml-layer.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/marker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_map_directive_1 = __webpack_require__("../../../../@ngui/map/dist/directives/base-map-directive.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var INPUTS = [
    'anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity',
    'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex', 'options',
    // ngui-map specific inputs
    'geoFallbackPosition'
];
var OUTPUTS = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged'
];
var Marker = (function (_super) {
    __extends(Marker, _super);
    function Marker(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'Marker', INPUTS, OUTPUTS) || this;
        _this.nguiMapComp = nguiMapComp;
        _this.objectOptions = {};
        return _this;
    }
    // Initialize this map object when map is ready
    Marker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    Marker.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setPosition();
    };
    Marker.prototype.setPosition = function () {
        var _this = this;
        if (!this['position']) {
            this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (position) {
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.mapObject.setPosition(latLng);
            }, function (error) {
                console.error('ngui-map, error finding the current location');
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            }));
        }
        else if (typeof this['position'] === 'string') {
            this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({ address: this['position'] }).subscribe(function (results) {
                _this.mapObject.setPosition(results[0].geometry.location);
            }, function (error) {
                console.error('ngui-map, error finding the location from', _this['position']);
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            }));
        }
    };
    return Marker;
}(base_map_directive_1.BaseMapDirective));
Marker = __decorate([
    core_1.Directive({
        selector: 'ngui-map > marker',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent])
], Marker);
exports.Marker = Marker;
//# sourceMappingURL=marker.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/places-auto-complete.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var api_loader_1 = __webpack_require__("../../../../@ngui/map/dist/services/api-loader.js");
var option_builder_1 = __webpack_require__("../../../../@ngui/map/dist/services/option-builder.js");
var PlacesAutoComplete = (function () {
    function PlacesAutoComplete(optionBuilder, elementRef, apiLoader) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.apiLoader = apiLoader;
        this.place_changed = new core_1.EventEmitter();
        this.initialized$ = new core_1.EventEmitter();
        // only called when map is ready
        this.initialize = function () {
            _this.objectOptions =
                _this.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], _this);
            _this.autocomplete = new google.maps.places.Autocomplete(_this.elementRef.nativeElement, _this.objectOptions);
            _this.autocomplete.addListener('place_changed', function (place) {
                _this.place_changed.emit(_this.autocomplete.getPlace());
            });
            _this.initialized$.emit(_this.autocomplete);
        };
        apiLoader.load();
        apiLoader.api$.subscribe(function () { return _this.initialize(); });
    }
    return PlacesAutoComplete;
}());
__decorate([
    core_1.Input('bounds'),
    __metadata("design:type", Object)
], PlacesAutoComplete.prototype, "bounds", void 0);
__decorate([
    core_1.Input('componentRestrictions'),
    __metadata("design:type", Object)
], PlacesAutoComplete.prototype, "componentRestrictions", void 0);
__decorate([
    core_1.Input('types'),
    __metadata("design:type", Array)
], PlacesAutoComplete.prototype, "types", void 0);
__decorate([
    core_1.Output('place_changed'),
    __metadata("design:type", core_1.EventEmitter)
], PlacesAutoComplete.prototype, "place_changed", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PlacesAutoComplete.prototype, "initialized$", void 0);
PlacesAutoComplete = __decorate([
    core_1.Directive({
        selector: '[places-auto-complete]'
    }),
    __metadata("design:paramtypes", [option_builder_1.OptionBuilder,
        core_1.ElementRef,
        api_loader_1.NgMapApiLoader])
], PlacesAutoComplete);
exports.PlacesAutoComplete = PlacesAutoComplete;
//# sourceMappingURL=places-auto-complete.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/polygon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_map_directive_1 = __webpack_require__("../../../../@ngui/map/dist/directives/base-map-directive.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var INPUTS = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'paths',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
];
var OUTPUTS = [
    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick',
];
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'Polygon', INPUTS, OUTPUTS) || this;
    }
    return Polygon;
}(base_map_directive_1.BaseMapDirective));
Polygon = __decorate([
    core_1.Directive({
        selector: 'ngui-map>polygon, ngui-map>map-polygon',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent])
], Polygon);
exports.Polygon = Polygon;
//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/polyline.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_map_directive_1 = __webpack_require__("../../../../@ngui/map/dist/directives/base-map-directive.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var INPUTS = [
    'clickable', 'draggable', 'editable', 'geodesic', 'icons', 'path', 'strokeColor',
    'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'options'
];
var OUTPUTS = [
    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'
];
var Polyline = (function (_super) {
    __extends(Polyline, _super);
    function Polyline(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'Polyline', INPUTS, OUTPUTS) || this;
    }
    return Polyline;
}(base_map_directive_1.BaseMapDirective));
Polyline = __decorate([
    core_1.Directive({
        selector: 'ngui-map > polyline',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent])
], Polyline);
exports.Polyline = Polyline;
//# sourceMappingURL=polyline.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/street-view-panorama.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_map_directive_1 = __webpack_require__("../../../../@ngui/map/dist/directives/base-map-directive.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var INPUTS = [
    'selector', 'options',
    'addressControl', 'addressControlOptions', 'clickToGo', 'disableDefaultUI', 'disableDoubleClickZoom',
    'enableCloseButton', 'fullscreenControl', 'fullscreenControlOptions', 'imageDateControl', 'linksControl',
    'motionTracking', 'motionTrackingControl', 'panControl', 'panControlOptions', 'pano',
    'position', 'pov', 'scrollwheel', 'showRoadLabels', 'visible', 'zoomControl', 'zoomControlOptions'
];
var OUTPUTS = [
    'closeclick', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'status_changed',
    'visible_changed', 'zoom_changed'
];
var StreetViewPanorama = (function (_super) {
    __extends(StreetViewPanorama, _super);
    function StreetViewPanorama(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'StreetViewPanorama', INPUTS, OUTPUTS) || this;
    }
    // only called when map is ready
    StreetViewPanorama.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        var element;
        if (this.objectOptions.selector) {
            // noinspection TypeScriptValidateTypes
            element = document.querySelector(this['selector']);
            delete this.objectOptions.selector;
        }
        else {
            element = this.nguiMapComponent.el;
        }
        // will be set after geocoded
        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
        this.mapObject = new google.maps[this.mapObjectName](element, this.objectOptions);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        this.mapObject['nguiMapComponent'] = this.nguiMapComponent;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    // When destroyed, remove event listener, and delete this object to prevent memory leak
    StreetViewPanorama.prototype.ngOnDestroy = function () {
        if (this.nguiMapComponent.el) {
            this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
        }
    };
    return StreetViewPanorama;
}(base_map_directive_1.BaseMapDirective));
StreetViewPanorama = __decorate([
    core_1.Directive({
        selector: 'ngui-map > street-view-panorama',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent])
], StreetViewPanorama);
exports.StreetViewPanorama = StreetViewPanorama;
//# sourceMappingURL=street-view-panorama.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/traffic-layer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_map_directive_1 = __webpack_require__("../../../../@ngui/map/dist/directives/base-map-directive.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var INPUTS = ['autoRefresh', 'options'];
var OUTPUTS = [];
var TrafficLayer = (function (_super) {
    __extends(TrafficLayer, _super);
    // declare OUTPUTS for AOT compiler
    function TrafficLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'TrafficLayer', INPUTS, OUTPUTS) || this;
    }
    return TrafficLayer;
}(base_map_directive_1.BaseMapDirective));
TrafficLayer = __decorate([
    core_1.Directive({
        selector: 'ngui-map > traffic-layer',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent])
], TrafficLayer);
exports.TrafficLayer = TrafficLayer;
//# sourceMappingURL=traffic-layer.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/directives/transit-layer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_map_directive_1 = __webpack_require__("../../../../@ngui/map/dist/directives/base-map-directive.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var INPUTS = [];
var OUTPUTS = [];
var TransitLayer = (function (_super) {
    __extends(TransitLayer, _super);
    // declare INPUTS for AOT compiler
    // declare OUTPUTS for AOT compiler
    function TransitLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'TransitLayer', INPUTS, OUTPUTS) || this;
    }
    return TransitLayer;
}(base_map_directive_1.BaseMapDirective));
TransitLayer = __decorate([
    core_1.Directive({
        selector: 'ngui-map > transit-layer',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent])
], TransitLayer);
exports.TransitLayer = TransitLayer;
//# sourceMappingURL=transit-layer.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bicycling_layer_1 = __webpack_require__("../../../../@ngui/map/dist/directives/bicycling-layer.js");
exports.BicyclingLayer = bicycling_layer_1.BicyclingLayer;
var navigator_geolocation_1 = __webpack_require__("../../../../@ngui/map/dist/services/navigator-geolocation.js");
exports.NavigatorGeolocation = navigator_geolocation_1.NavigatorGeolocation;
var option_builder_1 = __webpack_require__("../../../../@ngui/map/dist/services/option-builder.js");
exports.OptionBuilder = option_builder_1.OptionBuilder;
var config_1 = __webpack_require__("../../../../@ngui/map/dist/services/config.js");
exports.NG_MAP_CONFIG_TOKEN = config_1.NG_MAP_CONFIG_TOKEN;
var api_loader_1 = __webpack_require__("../../../../@ngui/map/dist/services/api-loader.js");
exports.NgMapApiLoader = api_loader_1.NgMapApiLoader;
exports.NgMapAsyncApiLoader = api_loader_1.NgMapAsyncApiLoader;
exports.NgMapAsyncCallbackApiLoader = api_loader_1.NgMapAsyncCallbackApiLoader;
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
exports.NguiMapComponent = ngui_map_component_1.NguiMapComponent;
var info_window_1 = __webpack_require__("../../../../@ngui/map/dist/components/info-window.js");
exports.InfoWindow = info_window_1.InfoWindow;
var custom_marker_1 = __webpack_require__("../../../../@ngui/map/dist/components/custom-marker.js");
exports.CustomMarker = custom_marker_1.CustomMarker;
var circle_1 = __webpack_require__("../../../../@ngui/map/dist/directives/circle.js");
exports.Circle = circle_1.Circle;
var data_layer_1 = __webpack_require__("../../../../@ngui/map/dist/directives/data-layer.js");
exports.DataLayer = data_layer_1.DataLayer;
var directions_renderer_1 = __webpack_require__("../../../../@ngui/map/dist/directives/directions-renderer.js");
exports.DirectionsRenderer = directions_renderer_1.DirectionsRenderer;
var drawing_manager_1 = __webpack_require__("../../../../@ngui/map/dist/directives/drawing-manager.js");
exports.DrawingManager = drawing_manager_1.DrawingManager;
var geo_coder_1 = __webpack_require__("../../../../@ngui/map/dist/services/geo-coder.js");
exports.GeoCoder = geo_coder_1.GeoCoder;
var ground_overlay_1 = __webpack_require__("../../../../@ngui/map/dist/directives/ground-overlay.js");
exports.GroundOverlay = ground_overlay_1.GroundOverlay;
var heatmap_layer_1 = __webpack_require__("../../../../@ngui/map/dist/directives/heatmap-layer.js");
exports.HeatmapLayer = heatmap_layer_1.HeatmapLayer;
var kml_layer_1 = __webpack_require__("../../../../@ngui/map/dist/directives/kml-layer.js");
exports.KmlLayer = kml_layer_1.KmlLayer;
var marker_1 = __webpack_require__("../../../../@ngui/map/dist/directives/marker.js");
exports.Marker = marker_1.Marker;
var ngui_map_1 = __webpack_require__("../../../../@ngui/map/dist/services/ngui-map.js");
exports.NguiMap = ngui_map_1.NguiMap;
var places_auto_complete_1 = __webpack_require__("../../../../@ngui/map/dist/directives/places-auto-complete.js");
exports.PlacesAutoComplete = places_auto_complete_1.PlacesAutoComplete;
var polygon_1 = __webpack_require__("../../../../@ngui/map/dist/directives/polygon.js");
exports.Polygon = polygon_1.Polygon;
var polyline_1 = __webpack_require__("../../../../@ngui/map/dist/directives/polyline.js");
exports.Polyline = polyline_1.Polyline;
var street_view_panorama_1 = __webpack_require__("../../../../@ngui/map/dist/directives/street-view-panorama.js");
exports.StreetViewPanorama = street_view_panorama_1.StreetViewPanorama;
var traffic_layer_1 = __webpack_require__("../../../../@ngui/map/dist/directives/traffic-layer.js");
exports.TrafficLayer = traffic_layer_1.TrafficLayer;
var transit_layer_1 = __webpack_require__("../../../../@ngui/map/dist/directives/transit-layer.js");
exports.TransitLayer = transit_layer_1.TransitLayer;
var ngui_map_module_1 = __webpack_require__("../../../../@ngui/map/dist/ngui-map.module.js");
exports.NguiMapModule = ngui_map_module_1.NguiMapModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/ngui-map.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var option_builder_1 = __webpack_require__("../../../../@ngui/map/dist/services/option-builder.js");
var geo_coder_1 = __webpack_require__("../../../../@ngui/map/dist/services/geo-coder.js");
var navigator_geolocation_1 = __webpack_require__("../../../../@ngui/map/dist/services/navigator-geolocation.js");
var config_1 = __webpack_require__("../../../../@ngui/map/dist/services/config.js");
var api_loader_1 = __webpack_require__("../../../../@ngui/map/dist/services/api-loader.js");
var ngui_map_component_1 = __webpack_require__("../../../../@ngui/map/dist/components/ngui-map.component.js");
var info_window_1 = __webpack_require__("../../../../@ngui/map/dist/components/info-window.js");
var custom_marker_1 = __webpack_require__("../../../../@ngui/map/dist/components/custom-marker.js");
var bicycling_layer_1 = __webpack_require__("../../../../@ngui/map/dist/directives/bicycling-layer.js");
var circle_1 = __webpack_require__("../../../../@ngui/map/dist/directives/circle.js");
var data_layer_1 = __webpack_require__("../../../../@ngui/map/dist/directives/data-layer.js");
var directions_renderer_1 = __webpack_require__("../../../../@ngui/map/dist/directives/directions-renderer.js");
var drawing_manager_1 = __webpack_require__("../../../../@ngui/map/dist/directives/drawing-manager.js");
var ground_overlay_1 = __webpack_require__("../../../../@ngui/map/dist/directives/ground-overlay.js");
var heatmap_layer_1 = __webpack_require__("../../../../@ngui/map/dist/directives/heatmap-layer.js");
var kml_layer_1 = __webpack_require__("../../../../@ngui/map/dist/directives/kml-layer.js");
var marker_1 = __webpack_require__("../../../../@ngui/map/dist/directives/marker.js");
var ngui_map_1 = __webpack_require__("../../../../@ngui/map/dist/services/ngui-map.js");
var places_auto_complete_1 = __webpack_require__("../../../../@ngui/map/dist/directives/places-auto-complete.js");
var polygon_1 = __webpack_require__("../../../../@ngui/map/dist/directives/polygon.js");
var polyline_1 = __webpack_require__("../../../../@ngui/map/dist/directives/polyline.js");
var street_view_panorama_1 = __webpack_require__("../../../../@ngui/map/dist/directives/street-view-panorama.js");
var traffic_layer_1 = __webpack_require__("../../../../@ngui/map/dist/directives/traffic-layer.js");
var transit_layer_1 = __webpack_require__("../../../../@ngui/map/dist/directives/transit-layer.js");
var COMPONENTS_DIRECTIVES = [
    ngui_map_component_1.NguiMapComponent, info_window_1.InfoWindow,
    marker_1.Marker, circle_1.Circle, custom_marker_1.CustomMarker, polygon_1.Polygon, info_window_1.InfoWindow, polyline_1.Polyline, ground_overlay_1.GroundOverlay,
    transit_layer_1.TransitLayer, traffic_layer_1.TrafficLayer, heatmap_layer_1.HeatmapLayer, bicycling_layer_1.BicyclingLayer, kml_layer_1.KmlLayer, data_layer_1.DataLayer,
    street_view_panorama_1.StreetViewPanorama, places_auto_complete_1.PlacesAutoComplete, directions_renderer_1.DirectionsRenderer,
    drawing_manager_1.DrawingManager,
];
var NguiMapModule = NguiMapModule_1 = (function () {
    function NguiMapModule() {
    }
    NguiMapModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NguiMapModule_1,
            providers: [
                { provide: config_1.NG_MAP_CONFIG_TOKEN, useValue: config }
            ],
        };
    };
    return NguiMapModule;
}());
NguiMapModule = NguiMapModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: COMPONENTS_DIRECTIVES,
        exports: [COMPONENTS_DIRECTIVES],
        providers: [
            geo_coder_1.GeoCoder,
            navigator_geolocation_1.NavigatorGeolocation,
            ngui_map_1.NguiMap,
            option_builder_1.OptionBuilder,
            { provide: api_loader_1.NgMapApiLoader, useClass: api_loader_1.NgMapAsyncCallbackApiLoader },
        ]
    })
], NguiMapModule);
exports.NguiMapModule = NguiMapModule;
var NguiMapModule_1;
//# sourceMappingURL=ngui-map.module.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/services/api-loader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ReplaySubject_1 = __webpack_require__("../../../../rxjs/ReplaySubject.js");
var config_1 = __webpack_require__("../../../../@ngui/map/dist/services/config.js");
var util_1 = __webpack_require__("../../../../@ngui/map/dist/services/util.js");
var first_1 = __webpack_require__("../../../../rxjs/operator/first.js");
var NgMapApiLoader = (function () {
    function NgMapApiLoader(config) {
        this.config = config;
        this.api$ = first_1.first.call(new ReplaySubject_1.ReplaySubject(1));
        this.config = this.config || { apiUrl: 'https://maps.google.com/maps/api/js' };
    }
    NgMapApiLoader.prototype.ngOnDestroy = function () {
        this.api$.complete();
    };
    return NgMapApiLoader;
}());
exports.NgMapApiLoader = NgMapApiLoader;
var NgMapAsyncCallbackApiLoader = (function (_super) {
    __extends(NgMapAsyncCallbackApiLoader, _super);
    function NgMapAsyncCallbackApiLoader(zone, config) {
        var _this = _super.call(this, config) || this;
        _this.zone = zone;
        return _this;
    }
    NgMapAsyncCallbackApiLoader.prototype.load = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return;
        }
        if (util_1.isMapsApiLoaded()) {
            this.api$.next(google.maps);
        }
        else if (!document.querySelector('#ngui-map-api')) {
            window['nguiMapRef'] = window['nguiMapRef'] || [];
            window['nguiMapRef'].push({ zone: this.zone, componentFn: function () { return _this.api$.next(google.maps); } });
            this.addGoogleMapsApi();
        }
    };
    NgMapAsyncCallbackApiLoader.prototype.addGoogleMapsApi = function () {
        window['initNguiMap'] = window['initNguiMap'] || function () {
            window['nguiMapRef'].forEach(function (nguiMapRef) {
                nguiMapRef.zone.run(function () { nguiMapRef.componentFn(); });
            });
            window['nguiMapRef'].splice(0, window['nguiMapRef'].length);
        };
        var script = document.createElement('script');
        script.id = 'ngui-map-api';
        // script.src = "https://maps.google.com/maps/api/js?callback=initNguiMap";
        var apiUrl = this.config.apiUrl;
        apiUrl += apiUrl.indexOf('?') !== -1 ? '&' : '?';
        script.src = apiUrl + 'callback=initNguiMap';
        document.querySelector('body').appendChild(script);
    };
    return NgMapAsyncCallbackApiLoader;
}(NgMapApiLoader));
NgMapAsyncCallbackApiLoader = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()), __param(1, core_1.Inject(config_1.NG_MAP_CONFIG_TOKEN)),
    __metadata("design:paramtypes", [core_1.NgZone, Object])
], NgMapAsyncCallbackApiLoader);
exports.NgMapAsyncCallbackApiLoader = NgMapAsyncCallbackApiLoader;
var NgMapAsyncApiLoader = (function (_super) {
    __extends(NgMapAsyncApiLoader, _super);
    function NgMapAsyncApiLoader(config) {
        return _super.call(this, config) || this;
    }
    NgMapAsyncApiLoader.prototype.load = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return;
        }
        if (util_1.isMapsApiLoaded()) {
            this.api$.next(google.maps);
        }
        else if (!document.querySelector('#ngui-map-api')) {
            var script = document.createElement('script');
            script.id = 'ngui-map-api';
            script.async = true;
            script.onload = function () { return _this.api$.next(google.maps); };
            script.src = this.config.apiUrl;
            document.querySelector('body').appendChild(script);
        }
    };
    return NgMapAsyncApiLoader;
}(NgMapApiLoader));
NgMapAsyncApiLoader = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Optional()), __param(0, core_1.Inject(config_1.NG_MAP_CONFIG_TOKEN)),
    __metadata("design:paramtypes", [Object])
], NgMapAsyncApiLoader);
exports.NgMapAsyncApiLoader = NgMapAsyncApiLoader;
//# sourceMappingURL=api-loader.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/services/config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
exports.NG_MAP_CONFIG_TOKEN = new core_1.OpaqueToken('NG_MAP_CONFIG_TOKEN');
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/services/geo-coder.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var api_loader_1 = __webpack_require__("../../../../@ngui/map/dist/services/api-loader.js");
/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */
var GeoCoder = (function () {
    function GeoCoder(apiLoader) {
        this.apiLoader = apiLoader;
        this.apiLoaderSubs = [];
    }
    GeoCoder.prototype.geocode = function (options) {
        var _this = this;
        return new Observable_1.Observable(function (responseObserver) {
            _this.apiLoaderSubs.push(_this.apiLoader.api$
                .subscribe(function () { return _this.requestGeocode(options, responseObserver); }));
        });
    };
    GeoCoder.prototype.ngOnDestroy = function () {
        this.apiLoaderSubs.map(function (sub) { return sub.unsubscribe(); });
    };
    GeoCoder.prototype.requestGeocode = function (options, observer) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode(options, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                observer.next(results);
                observer.complete();
            }
            else {
                observer.error(results);
            }
        });
    };
    return GeoCoder;
}());
GeoCoder = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [api_loader_1.NgMapApiLoader])
], GeoCoder);
exports.GeoCoder = GeoCoder;
//# sourceMappingURL=geo-coder.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/services/navigator-geolocation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
/**
 *  service for navigator.geolocation methods
 */
var NavigatorGeolocation = (function () {
    function NavigatorGeolocation() {
    }
    NavigatorGeolocation.prototype.getCurrentPosition = function (geoLocationOptions) {
        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
        return new Observable_1.Observable(function (responseObserver) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    responseObserver.next(position);
                    responseObserver.complete();
                }, function (evt) { return responseObserver.error(evt); }, geoLocationOptions);
            }
            else {
                responseObserver.error('Browser Geolocation service failed.');
            }
        });
    };
    ;
    return NavigatorGeolocation;
}());
NavigatorGeolocation = __decorate([
    core_1.Injectable()
], NavigatorGeolocation);
exports.NavigatorGeolocation = NavigatorGeolocation;
//# sourceMappingURL=navigator-geolocation.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/services/ngui-map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var option_builder_1 = __webpack_require__("../../../../@ngui/map/dist/services/option-builder.js");
var geo_coder_1 = __webpack_require__("../../../../@ngui/map/dist/services/geo-coder.js");
/**
 * collection of map instance-related properties and methods
 */
var NguiMap = (function () {
    function NguiMap(geoCoder, optionBuilder, zone) {
        var _this = this;
        this.geoCoder = geoCoder;
        this.optionBuilder = optionBuilder;
        this.zone = zone;
        this.updateGoogleObject = function (object, changes) {
            var val, currentValue, setMethodName;
            if (object) {
                for (var key in changes) {
                    setMethodName = "set" + key.replace(/^[a-z]/, function (x) { return x.toUpperCase(); });
                    currentValue = changes[key].currentValue;
                    if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
                        // To preserve setMethod name in Observable callback, wrap it as a function, then execute
                        (function (setMethodName) {
                            _this.geoCoder.geocode({ address: currentValue }).subscribe(function (results) {
                                if (typeof object[setMethodName] === 'function') {
                                    object[setMethodName](results[0].geometry.location);
                                }
                                else {
                                    console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' +
                                        'Please check Google Maps API documentation, and use "setOptions" instead.');
                                }
                            });
                        })(setMethodName);
                    }
                    else {
                        val = _this.optionBuilder.googlize(currentValue);
                        if (typeof object[setMethodName] === 'function') {
                            object[setMethodName](val);
                        }
                        else {
                            console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' +
                                'Please check Google Maps API documentation, and use "setOptions" instead.');
                        }
                    }
                }
            }
        };
    }
    NguiMap.prototype.setObjectEvents = function (definedEvents, thisObj, prefix) {
        var _this = this;
        definedEvents.forEach(function (definedEvent) {
            var eventName = definedEvent
                .replace(/([A-Z])/g, function ($1) { return "_" + $1.toLowerCase(); }) // positionChanged -> position_changed
                .replace(/^map_/, ''); // map_click -> click  to avoid DOM conflicts
            var zone = _this.zone;
            zone.runOutsideAngular(function () {
                thisObj[prefix].addListener(eventName, function (event) {
                    var param = event ? event : {};
                    param.target = this;
                    zone.run(function () { return thisObj[definedEvent].emit(param); });
                });
            });
        });
    };
    NguiMap.prototype.clearObjectEvents = function (definedEvents, thisObj, prefix) {
        var _this = this;
        definedEvents.forEach(function (definedEvent) {
            var eventName = definedEvent
                .replace(/([A-Z])/g, function ($1) { return "_" + $1.toLowerCase(); }) // positionChanged -> position_changed
                .replace(/^map_/, ''); // map_click -> click  to avoid DOM conflicts
            _this.zone.runOutsideAngular(function () {
                google.maps.event.clearListeners(thisObj[prefix], eventName);
            });
        });
        if (thisObj[prefix]) {
            if (thisObj[prefix].setMap) {
                thisObj[prefix].setMap(null);
            }
            delete thisObj[prefix].nguiMapComponent;
            delete thisObj[prefix];
        }
    };
    return NguiMap;
}());
NguiMap = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [geo_coder_1.GeoCoder,
        option_builder_1.OptionBuilder,
        core_1.NgZone])
], NguiMap);
exports.NguiMap = NguiMap;
//# sourceMappingURL=ngui-map.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/services/option-builder.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var util_1 = __webpack_require__("../../../../@ngui/map/dist/services/util.js");
/**
 * change any object to google object options
 * e.g. [1,2] -> new google.maps.LatLng(1,2);
 */
var OptionBuilder = (function () {
    function OptionBuilder() {
    }
    OptionBuilder.prototype.googlizeAllInputs = function (definedInputs, userInputs) {
        var _this = this;
        var options = {};
        // if options given from user, only take options and ignore other inputs
        if (userInputs.options) {
            console.log('userInputs.options .................', userInputs.options);
            options = userInputs.options;
            if (!this.onlyOptionsGiven(definedInputs, userInputs)) {
                console.error('when "options" are used, other options are ignored');
            }
        }
        else {
            definedInputs.forEach(function (input) {
                if (userInputs[input] !== undefined) {
                    options[input] = _this.googlize(userInputs[input], { key: input });
                }
            });
        }
        return options;
    };
    OptionBuilder.prototype.googlizeMultiple = function (inputs, options) {
        options = options || {};
        for (var key in inputs) {
            var val = inputs[key];
            // (non-strings are fully converted)
            if (typeof val !== 'string') {
                options[key] = val;
            } // sometimes '0' needed to stay as it is
            else if (!(options['doNotConverStringToNumber'] && val.match(/^[0-9]+$/))) {
                options[key] = this.googlize(val, { key: key });
            }
        } // for(var key in attrs)
        return options;
    };
    OptionBuilder.prototype.googlize = function (input, options) {
        options = options || {};
        var output = input;
        if (typeof input === 'string') {
            if (input === 'false') {
                output = false;
            }
            else if (input === '0') {
                output = 0;
            }
            else {
                output =
                    // -> googlize -> getJsonParsed -> googlizeMultiple -> googlize until all elements are parsed
                    this.getJSONParsed(input, options)
                        || this.getAnyMapObject(input)
                        || this.getAnyMapConstant(input, options)
                        || this.getDateObject(input)
                        || input;
            }
        }
        if (options['key']) {
            var key = options['key'];
            if (output instanceof Array) {
                if (key === 'bounds') {
                    output = new google.maps.LatLngBounds(output[0], output[1]);
                }
                else if (key === 'icons') {
                    output = this.getMapIcons(output);
                }
                else if (key === 'position' || key.match(/^geoFallback/)) {
                    output = this.getLatLng(output);
                }
            }
            else if (output instanceof Object) {
                if (key === 'icon') {
                    output = this.getMarkerIcon(output);
                }
                else if (key.match(/ControlOptions$/)) {
                    output = this.getMapControlOption(output);
                }
            }
        }
        // delete keys only for processing, not used by google
        delete output['doNotConverStringToNumber'];
        delete output['key'];
        return output;
    };
    OptionBuilder.prototype.getLatLng = function (input) {
        var output;
        if (input[0].constructor === Array) {
            output = input.map(function (el) { return new google.maps.LatLng(el[0], el[1]); });
        }
        else if (!isNaN(parseFloat(input[0])) && isFinite(input[0])) {
            output = new google.maps.LatLng(input[0], input[1]);
        }
        return output;
    };
    OptionBuilder.prototype.getJSONParsed = function (input, options) {
        var output;
        try {
            output = util_1.getJSON(input);
            if (output instanceof Array) {
                // [{a:1}] : not lat/lng ones
                if (output[0].constructor !== Object) {
                    output = this.getLatLng(output);
                }
            }
            else if (output === Object(output)) {
                // check for nested hashes and convert to Google API options
                var newOptions = options;
                newOptions['doNotConverStringToNumber'] = true;
                output = this.googlizeMultiple(output, newOptions);
            }
        }
        catch (e) {
        }
        return output;
    };
    OptionBuilder.prototype.getAnyMapObject = function (input) {
        var output;
        if (input.match(/^[A-Z][a-zA-Z0-9]+\(.*\)$/)) {
            try {
                output = Function("return new google.maps." + input + ";")();
            }
            catch (e) { }
        }
        return output;
    };
    OptionBuilder.prototype.getAnyMapConstant = function (input, options) {
        var output;
        if (input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/)) {
            try {
                var matches = input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/);
                output = google.maps[matches[1]][matches[2]];
            }
            catch (e) { }
        }
        else if (input.match(/^[A-Z]+$/)) {
            try {
                var capitalizedKey = options['key'].charAt(0).toUpperCase() +
                    options['key'].slice(1);
                output = google.maps[capitalizedKey][input];
            }
            catch (e) { }
        }
        return output;
    };
    /**
     * streetviewControl, panControl, etc, not a general control
     */
    OptionBuilder.prototype.getMapControlOption = function (controlOptions) {
        var newControlOptions = controlOptions;
        for (var key in newControlOptions) {
            if (newControlOptions[key]) {
                var value = newControlOptions[key];
                if (typeof value === 'string') {
                    value = value.toUpperCase();
                }
                else if (key === 'mapTypeIds') {
                    value = value.map(function (str) {
                        if (str.match(/^[A-Z]+$/)) {
                            return google.maps.MapTypeId[str.toUpperCase()];
                        }
                        else {
                            return str;
                        }
                    });
                }
                if (key === 'style') {
                    var objName = key.replace(/Options$/, '') + 'Style';
                    newControlOptions[key] = google.maps[objName][value];
                }
                else if (key === 'position') {
                    newControlOptions[key] = google.maps.ControlPosition[value];
                }
                else {
                    newControlOptions[key] = value;
                }
            }
        }
        return newControlOptions;
    };
    OptionBuilder.prototype.getDateObject = function (input) {
        var output;
        if (input.match(/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/)) {
            try {
                output = new Date(input);
            }
            catch (e) { }
        }
        return output;
    };
    OptionBuilder.prototype.getMapIcons = function (input) {
        return input.map(function (el) {
            if (el.icon.path.match(/^[A-Z_]+$/)) {
                el.icon.path = google.maps.SymbolPath[el.icon.path];
            }
            return el;
        });
    };
    OptionBuilder.prototype.getMarkerIcon = function (input) {
        var output = input;
        if (('' + output.path).match(/^[A-Z_]+$/)) {
            output.path = google.maps.SymbolPath[output.path];
        }
        for (var key in output) {
            var arr = output[key];
            if (key === 'anchor' || key === 'origin' || key === 'labelOrigin') {
                output[key] = new google.maps.Point(arr[0], arr[1]);
            }
            else if (key === 'size' || key === 'scaledSize') {
                output[key] = new google.maps.Size(arr[0], arr[1]);
            }
        }
        return output;
    };
    OptionBuilder.prototype.onlyOptionsGiven = function (definedInputs, userInputs) {
        for (var i = 0; i < definedInputs.length; i++) {
            var input = definedInputs[i];
            if (input !== 'options' && typeof userInputs[input] !== 'undefined') {
                return false;
            }
        }
        return true;
    };
    return OptionBuilder;
}());
OptionBuilder = __decorate([
    core_1.Injectable()
], OptionBuilder);
exports.OptionBuilder = OptionBuilder;
//# sourceMappingURL=option-builder.js.map

/***/ }),

/***/ "../../../../@ngui/map/dist/services/util.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * return json string from json-like string
 */
function jsonize(str) {
    try {
        JSON.parse(str);
        return str;
    }
    catch (e) {
        return str
            .replace(/([\$\w]+)\s*:/g, // wrap keys without double quote
        function (_, $1) {
            return '"' + $1 + '":';
        })
            .replace(/'([^']+)'/g, // replacing single quote to double quote
        function (_, $1) {
            return '"' + $1 + '"';
        });
    }
}
exports.jsonize = jsonize;
;
/**
 * Returns string to an object by using JSON.parse()
 */
function getJSON(input) {
    if (typeof input === 'string') {
        var re = /^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/; // lat,lng
        if (input.match(re)) {
            input = '[' + input + ']';
        }
        return JSON.parse(jsonize(input));
    }
    else {
        return input;
    }
}
exports.getJSON = getJSON;
;
/* tslint:enable */
/**
 * Returns camel-cased from string 'Foo Bar' to 'fooBar'
 */
function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}
exports.toCamelCase = toCamelCase;
function isMapsApiLoaded() {
    return typeof google === 'object' && typeof google.maps === 'object';
}
exports.isMapsApiLoaded = isMapsApiLoaded;
//# sourceMappingURL=util.js.map

/***/ })

});
//# sourceMappingURL=maps.module.chunk.js.map