(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~login-login-module~posts-posts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/card/card.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/card/card.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card (click)=\"action()\">\r\n  <ion-card-header>\r\n    <ion-card-subtitle class=\"centered-text black-text\">{{text}}</ion-card-subtitle>\r\n  </ion-card-header>\r\n</ion-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/image/image.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/image/image.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img [src]=\"url\" [className]=\"class\"  />");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-card/post-card.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-card/post-card.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"post-card\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\">\n        <app-image [url]=\"imageSrc\" class=\"post-image\"></app-image>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h4 class=\"post-title\">{{ title }}</h4>\n        <div class=\"post-details\" *ngIf=\"type === 1\">\n          <span><ion-icon name=\"calendar\"></ion-icon>{{ date }}</span>\n        </div>\n        <div class=\"post-details\" *ngIf=\"type === 2\">\n          <span><ion-icon name=\"pricetag\"></ion-icon>{{ price }}</span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/select-city/select-city.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/select-city/select-city.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Modal Header</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"searchForm\">\n    <ion-item>\n      <input\n        name=\"query\"\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"Busca una ciudad\"\n        formControlName=\"queryControl\"\n        (keyup)=\"search()\"\n      />\n    </ion-item>\n  </form>\n  <div class=\"city-list\" *ngIf=\"cities.length > 0\">\n    <div\n      class=\"select-city\"\n      *ngFor=\"let city of cities\"\n      (click)=\"dismiss(city)\"\n    >\n      {{ city.name }}\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/core/services/rest.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/rest.service.ts ***!
  \***********************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");




let RestService = class RestService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    queryPostRegular(route, body) {
        let repos = this.http.post(this.apiUrl.concat(route), body);
        return repos;
    }
    queryDeleteRegular(route) {
        let repos = this.http.delete(this.apiUrl.concat(route));
        return repos;
    }
    queryGet(route, token) {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        });
        let options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        let repos = this.http.get(this.apiUrl.concat(route), options);
        return repos;
    }
    queryPost(route, body, token) {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        });
        let options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        let repos = this.http.post(this.apiUrl.concat(route), body, options);
        return repos;
    }
    queryDelete(route) {
        let token = localStorage.getItem("token");
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ Authorization: token });
        let options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        let repos = this.http.delete(this.apiUrl.concat(route), options);
        return repos;
    }
    queryExternalApi(route) {
        let repos = this.http.get(this.apiUrl.concat(route));
        return repos;
    }
};
RestService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
];
RestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], RestService);



/***/ }),

/***/ "./src/app/shared/card/card.component.scss":
/*!*************************************************!*\
  !*** ./src/app/shared/card/card.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CardComponent = class CardComponent {
    constructor() { }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "text", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "action", void 0);
CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-card",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/card/card.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./card.component.scss */ "./src/app/shared/card/card.component.scss")).default]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/shared/image/image.component.scss":
/*!***************************************************!*\
  !*** ./src/app/shared/image/image.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbWFnZS9pbWFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/image/image.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/image/image.component.ts ***!
  \*************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ImageComponent = class ImageComponent {
    constructor() { }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImageComponent.prototype, "url", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImageComponent.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImageComponent.prototype, "class", void 0);
ImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-image",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/image/image.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./image.component.scss */ "./src/app/shared/image/image.component.scss")).default]
    })
], ImageComponent);



/***/ }),

/***/ "./src/app/shared/post-card/post-card.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/post-card/post-card.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wb3N0LWNhcmQvcG9zdC1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/post-card/post-card.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/post-card/post-card.component.ts ***!
  \*********************************************************/
/*! exports provided: PostCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCardComponent", function() { return PostCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PostCardComponent = class PostCardComponent {
    constructor() { }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostCardComponent.prototype, "date", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostCardComponent.prototype, "imageSrc", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostCardComponent.prototype, "price", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostCardComponent.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostCardComponent.prototype, "type", void 0);
PostCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-post-card",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-card/post-card.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./post-card.component.scss */ "./src/app/shared/post-card/post-card.component.scss")).default]
    })
], PostCardComponent);



/***/ }),

/***/ "./src/app/shared/select-city/city.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/select-city/city.service.ts ***!
  \****************************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/rest.service */ "./src/app/core/services/rest.service.ts");



let CityService = class CityService {
    constructor(restService) {
        this.restService = restService;
    }
    getAll(query, token) {
        let url = `cities${undefined != query && null != query && "" != query
            ? `?query=${query}`
            : ``}`;
        return this.restService.queryGet(url, token);
    }
};
CityService.ctorParameters = () => [
    { type: src_app_core_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
];
CityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], CityService);



/***/ }),

/***/ "./src/app/shared/select-city/select-city.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/select-city/select-city.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZWxlY3QtY2l0eS9zZWxlY3QtY2l0eS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/select-city/select-city.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/select-city/select-city.component.ts ***!
  \*************************************************************/
/*! exports provided: SelectCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCityComponent", function() { return SelectCityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./city.service */ "./src/app/shared/select-city/city.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let SelectCityComponent = class SelectCityComponent {
    constructor(modalController, cityService, storage) {
        this.modalController = modalController;
        this.cityService = cityService;
        this.storage = storage;
        this.auth = "";
        this.cities = [];
        this.query = "";
    }
    ngOnInit() {
        this.storage.get("auth").then((auth) => {
            this.auth = auth;
        });
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            queryControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("queryControl", []),
        });
        this.searchForm.controls["queryControl"].setValue(null);
    }
    dismiss(city = undefined) {
        this.modalController.dismiss({
            dismissed: true,
            city: city,
        });
    }
    search() {
        let controls = this.searchForm.controls;
        this.query = controls["queryControl"].value;
        if (this.query && this.query.length > 3) {
            this.getCities();
        }
        else {
            this.cities = [];
        }
    }
    getCities() {
        this.cityService
            .getAll(this.query, this.auth.token)
            .toPromise()
            .then((res) => {
            const result = res.json();
            this.cities = result;
        }, (err) => {
            let error = JSON.parse(err._body);
            console.log(error);
        });
    }
};
SelectCityComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _city_service__WEBPACK_IMPORTED_MODULE_4__["CityService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
SelectCityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-select-city",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-city.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/select-city/select-city.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-city.component.scss */ "./src/app/shared/select-city/select-city.component.scss")).default]
    })
], SelectCityComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image/image.component */ "./src/app/shared/image/image.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-card/post-card.component */ "./src/app/shared/post-card/post-card.component.ts");
/* harmony import */ var _select_city_select_city_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-city/select-city.component */ "./src/app/shared/select-city/select-city.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_5__["PostCardComponent"], _image_image_component__WEBPACK_IMPORTED_MODULE_3__["ImageComponent"], _select_city_select_city_component__WEBPACK_IMPORTED_MODULE_6__["SelectCityComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ],
        exports: [_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_5__["PostCardComponent"], _image_image_component__WEBPACK_IMPORTED_MODULE_3__["ImageComponent"], _select_city_select_city_component__WEBPACK_IMPORTED_MODULE_6__["SelectCityComponent"]]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~login-login-module~posts-posts-module-es2015.js.map