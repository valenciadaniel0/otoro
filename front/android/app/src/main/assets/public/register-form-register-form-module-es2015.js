(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-form-register-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/photo-card/photo-card.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/photo-card/photo-card.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n      <img [src]=\"photo\" />\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button color=\"primary\" (click)=\"takePicture()\" class=\"width-100\">\r\n        <ion-icon name=\"camera\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button color=\"primary\" (click)=\"selectPhoto()\" class=\"width-100\">\r\n        <ion-icon name=\"image-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n");

/***/ }),

/***/ "./src/app/shared/photo-card/photo-card.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/photo-card/photo-card.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9waG90by1jYXJkL3Bob3RvLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/photo-card/photo-card.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/photo-card/photo-card.component.ts ***!
  \***********************************************************/
/*! exports provided: PhotoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoCardComponent", function() { return PhotoCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




let PhotoCardComponent = class PhotoCardComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnInit() { }
    selectPhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ab = yield this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos);
            yield this.uploadImage(ab);
        });
    }
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ab = yield this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera);
            yield this.uploadImage(ab);
        });
    }
    getPhoto(source) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                source,
            });
            this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);
            return image.webPath;
        });
    }
};
PhotoCardComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhotoCardComponent.prototype, "uploadImage", void 0);
PhotoCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-photo-card",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./photo-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/photo-card/photo-card.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./photo-card.component.scss */ "./src/app/shared/photo-card/photo-card.component.scss")).default]
    })
], PhotoCardComponent);



/***/ }),

/***/ "./src/app/users/register-form/register-form-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/users/register-form/register-form-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormPageRoutingModule", function() { return RegisterFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-form.page */ "./src/app/users/register-form/register-form.page.ts");




const routes = [
    {
        path: '',
        component: _register_form_page__WEBPACK_IMPORTED_MODULE_3__["RegisterFormPage"]
    }
];
let RegisterFormPageRoutingModule = class RegisterFormPageRoutingModule {
};
RegisterFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterFormPageRoutingModule);



/***/ }),

/***/ "./src/app/users/register-form/register-form.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/users/register-form/register-form.module.ts ***!
  \*************************************************************/
/*! exports provided: RegisterFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormPageModule", function() { return RegisterFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-form-routing.module */ "./src/app/users/register-form/register-form-routing.module.ts");
/* harmony import */ var src_app_shared_photo_card_photo_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/photo-card/photo-card.component */ "./src/app/shared/photo-card/photo-card.component.ts");







let RegisterFormPageModule = class RegisterFormPageModule {
};
RegisterFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterFormPageRoutingModule"],
        ],
        declarations: [src_app_shared_photo_card_photo_card_component__WEBPACK_IMPORTED_MODULE_6__["PhotoCardComponent"]],
    })
], RegisterFormPageModule);



/***/ })

}]);
//# sourceMappingURL=register-form-register-form-module-es2015.js.map