(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/select-city/select-city.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/select-city/select-city.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Ciudades</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"searchForm\">\r\n    <input\r\n      name=\"query\"\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      placeholder=\"Busca una ciudad\"\r\n      formControlName=\"queryControl\"\r\n      (keyup)=\"search()\"\r\n    />\r\n  </form>\r\n  <div class=\"city-list\" *ngIf=\"cities.length > 0\">\r\n    <div\r\n      class=\"select-city\"\r\n      *ngFor=\"let city of cities\"\r\n      (click)=\"dismiss(city)\"\r\n    >\r\n      {{ city.name }}\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n    <h4 class=\"centered-text\">Perfil</h4>\r\n    <ion-row>\r\n      <ion-col>\r\n        <img [src]=\"photo\" />\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"primary\" (click)=\"takePicture()\" class=\"width-100\">\r\n          <ion-icon name=\"camera\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"primary\" (click)=\"selectPhoto()\" class=\"width-100\">\r\n          <ion-icon name=\"image-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"centered-text\"\r\n        >Sube una imagen de perfil</ion-col\r\n      >\r\n      <div class=\"separator\"></div>\r\n    </ion-row>\r\n    <ion-row id=\"form-container\">\r\n      <ion-col col-12>\r\n        <form [formGroup]=\"myForm\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Nombres y apellidos</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('name', 'required')\"\r\n              formControlName=\"name\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('name', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Correo electr&oacute;nico</label>\r\n            <input\r\n              type=\"email\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('email', 'required')\"\r\n              formControlName=\"email\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('email', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Ciudad</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"              \r\n              (click)=\"openCityModal()\"\r\n              [class.error-input]=\"controlHasError('city', 'required')\"\r\n              formControlName=\"city\"\r\n            />\r\n            <!-- <ion-item (click)=\"openCityModal()\" class=\"no-padding-left\">\r\n              <span *ngIf=\"!city\">Selecciona una ciudad</span>\r\n              <span *ngIf=\"city\">{{city.name}}</span>\r\n            </ion-item> -->           \r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('city', 'required')\"\r\n            >\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Tel&eacute;fono(Opcional)</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"phone\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Descripci&oacute;n de tus servicios</label>\r\n            <textarea\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('serviceDescription', 'required')\"\r\n              formControlName=\"serviceDescription\"\r\n            ></textarea>\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('serviceDescription', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Contrase&ntilde;a</label>\r\n            <input\r\n              type=\"password\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('password', 'required')\"\r\n              formControlName=\"password\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Confirmar Contrase&ntilde;a</label>\r\n            <input\r\n              type=\"password\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('confirmPassword', 'required')\"\r\n              formControlName=\"confirmPassword\"\r\n            />\r\n          </div>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button color=\"primary\" (click)=\"updateUser()\" class=\"width-100\">\r\n          Actualizar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/recover-password/recover-password.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/recover-password/recover-password.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div id=\"container\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"ion-align-self-center\" col-8 offset=\"2\">\r\n          <img src=\"../../../assets/logo/otoro.png\" width=\"70%\" height=\"auto\" />\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col col-12 *ngIf=\"!showCodeForm\">\r\n          <h4 class=\"no-margin-bottom\">Recuperar contrase&ntilde;a</h4>\r\n          <small>Por favor ingresa tu correo electrónico</small><br />\r\n        </ion-col>\r\n        <ion-col col-12 *ngIf=\"showCodeForm\">\r\n          <h4 class=\"no-margin-bottom\">Ingresar c&oacute;digo</h4>\r\n          <small\r\n            >Hemos enviado un código a tu correo, por favor ingresalo para\r\n            recuperar tu contrase&ntilde;a</small\r\n          ><br />\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row id=\"form-container\">\r\n        <ion-col col-12>\r\n          <form [formGroup]=\"myForm\" *ngIf=\"!showCodeForm\">\r\n            <div class=\"form-group\">\r\n              <label class=\"bold\">Correo electrónico</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control width-100\"\r\n                [class.error-input]=\"controlHasError('email', 'required')\"\r\n                formControlName=\"email\"\r\n              />\r\n              <span\r\n                class=\"error-input-label\"\r\n                *ngIf=\"controlHasError('email', 'required')\"\r\n              >\r\n                <strong class=\"error\">Campo requerido</strong>\r\n              </span>\r\n            </div>\r\n            <div class=\"display-flex\" id=\"btn-container\">\r\n              <ion-button\r\n                color=\"danger\"\r\n                (click)=\"cancel()\"\r\n                class=\"margin-center\"\r\n              >\r\n                Cancelar\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"primary\"\r\n                class=\"margin-center\"\r\n                (click)=\"updateRecoverCode()\"\r\n              >\r\n                Enviar\r\n              </ion-button>\r\n            </div>\r\n          </form>\r\n          <form [formGroup]=\"myCodeForm\" *ngIf=\"showCodeForm\">\r\n            <div class=\"form-group\">\r\n              <label class=\"bold\">Código</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control width-100\"\r\n                [class.error-input]=\"controlHasError('code', 'required')\"\r\n                formControlName=\"code\"\r\n              />\r\n              <span\r\n                class=\"error-input-label\"\r\n                *ngIf=\"controlHasError('code', 'required')\"\r\n              >\r\n                <strong class=\"error\">Campo requerido</strong>\r\n              </span>\r\n            </div>\r\n            <div class=\"display-flex\" id=\"btn-container\">\r\n              <ion-button\r\n                color=\"danger\"\r\n                (click)=\"cancel()\"\r\n                class=\"margin-center\"\r\n              >\r\n                Cancelar\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"primary\"\r\n                class=\"margin-center\"\r\n                (click)=\"recoverPassword()\"\r\n              >\r\n                Validar\r\n              </ion-button>\r\n            </div>\r\n          </form>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/register-form/register-form.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/register-form/register-form.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div id=\"container\">\r\n    <h4 class=\"centered-text\" *ngIf=\"step === 1\">Registrarme</h4>\r\n    <h4 class=\"centered-text\" *ngIf=\"step !== 1\">Casi terminamos</h4>\r\n    <ion-row *ngIf=\"step !== 1\">\r\n      <ion-col>\r\n        <img [src]=\"photo\" />\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"step !== 1\">\r\n      <ion-col>\r\n        <ion-button color=\"primary\" (click)=\"takePicture()\" class=\"width-100\">\r\n          <ion-icon name=\"camera\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"primary\" (click)=\"selectPhoto()\" class=\"width-100\">\r\n          <ion-icon name=\"image-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"step !== 1\">\r\n      <ion-col size=\"12\" class=\"centered-text\"\r\n        >Sube una imagen de perfil</ion-col\r\n      >\r\n      <div class=\"separator\"></div>\r\n    </ion-row>\r\n\r\n    <ion-row id=\"form-container\">\r\n      <ion-col col-12>\r\n        <form [formGroup]=\"myForm\">\r\n          <div class=\"form-group\" *ngIf=\"step === 1\">\r\n            <label class=\"bold\">Nombres y apellidos</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('name', 'required')\"\r\n              formControlName=\"name\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('name', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"step === 1\">\r\n            <label class=\"bold\">Correo electr&oacute;nico</label>\r\n            <input\r\n              type=\"email\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('email', 'required')\"\r\n              formControlName=\"email\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('email', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"step === 1\">\r\n            <label class=\"bold\">Ciudad</label>\r\n            <ion-item (click)=\"openCityModal()\">\r\n              <span *ngIf=\"!city\">Selecciona una ciudad</span>\r\n              <span *ngIf=\"city\">{{city.name}}</span>\r\n            </ion-item>\r\n            <input type=\"text\" class=\"display-none\" formControlName=\"city\" />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('city', 'required') && step === 1\"\r\n            >\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"step === 1\">\r\n            <label class=\"bold\">Tel&eacute;fono(Opcional)</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"phone\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"step === 1\">\r\n            <label class=\"bold\">Contrase&ntilde;a</label>\r\n            <input\r\n              type=\"password\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('password', 'required')\"\r\n              formControlName=\"password\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('password', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"step === 1\">\r\n            <label class=\"bold\">Confirmar Contrase&ntilde;a</label>\r\n            <input\r\n              type=\"password\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('confirmPassword', 'required')\"\r\n              formControlName=\"confirmPassword\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('confirmPassword', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"step !== 1\">\r\n            <label class=\"bold\">Descripci&oacute;n de tus servicios</label>\r\n            <textarea\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('serviceDescription', 'required')\"\r\n              formControlName=\"serviceDescription\"\r\n            ></textarea>\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('serviceDescription', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button\r\n          color=\"primary\"\r\n          (click)=\"continueToSecondStep()\"\r\n          class=\"width-100\"\r\n          *ngIf=\"step === 1\"\r\n        >\r\n          Continuar\r\n        </ion-button>\r\n        <ion-button\r\n          color=\"primary\"\r\n          (click)=\"register()\"\r\n          class=\"width-100\"\r\n          *ngIf=\"step !== 1\"\r\n        >\r\n          Guardar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button\r\n          color=\"danger\"\r\n          (click)=\"cancel()\"\r\n          class=\"width-100\"\r\n          *ngIf=\"step === 1\"\r\n        >\r\n          Cancelar\r\n        </ion-button>\r\n        <ion-button\r\n          color=\"danger\"\r\n          (click)=\"goBackToFirstStep()\"\r\n          class=\"width-100\"\r\n          *ngIf=\"step !== 1\"\r\n        >\r\n          Volver\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>users</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

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
    getAll(query) {
        let url = `cities${undefined != query && null != query && "" != query
            ? `?query=${query}`
            : ``}`;
        return this.restService.queryGetRegular(url);
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
/* harmony default export */ __webpack_exports__["default"] = (".city-list {\n  padding-top: 5%;\n}\n\n.city-list .select-city {\n  border-bottom: 1px #e6e6e6 solid;\n  padding: 5px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlbGVjdC1jaXR5L0M6XFxVc2Vyc1xcaW5nZG1cXHByb2plY3RzXFxvdG9yb1xcZnJvbnQvc3JjXFxhcHBcXHNoYXJlZFxcc2VsZWN0LWNpdHlcXHNlbGVjdC1jaXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2VsZWN0LWNpdHkvc2VsZWN0LWNpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FDQ2pCOztBREZBO0VBR0ksZ0NBQWdDO0VBQ2hDLGNBQWM7QUNHbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2VsZWN0LWNpdHkvc2VsZWN0LWNpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2l0eS1saXN0IHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgLnNlbGVjdC1jaXR5IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCAjZTZlNmU2IHNvbGlkO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgfVxyXG59XHJcbiIsIi5jaXR5LWxpc3Qge1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5jaXR5LWxpc3QgLnNlbGVjdC1jaXR5IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICNlNmU2ZTYgc29saWQ7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuIl19 */");

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
        this.cities = [];
        this.query = "";
    }
    ngOnInit() {
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
            .getAll(this.query)
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

/***/ "./src/app/users/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/users/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/users/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/users/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/select-city/select-city.component */ "./src/app/shared/select-city/select-city.component.ts");










let ProfilePage = class ProfilePage {
    constructor(router, alertController, storage, modalController, usersService, sanitizer, loadingController) {
        this.router = router;
        this.alertController = alertController;
        this.storage = storage;
        this.modalController = modalController;
        this.usersService = usersService;
        this.sanitizer = sanitizer;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("name", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("city", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("email", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("password", []),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("confirmPassword", []),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("phone", []),
            serviceDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("serviceDescription", []),
        });
        this.myForm.controls["name"].setValue(null);
        this.myForm.controls["city"].setValue(null);
        this.myForm.controls["phone"].setValue(null);
        this.myForm.controls["serviceDescription"].setValue(null);
        this.myForm.controls["email"].setValue(null);
        this.myForm.controls["password"].setValue(null);
        this.myForm.controls["confirmPassword"].setValue(null);
        this.storage.get("auth").then((auth) => {
            this.auth = auth;
            this.myForm.controls["name"].setValue(auth.name);
            this.myForm.controls["city"].setValue(auth.city.name);
            this.city = auth.city;
            this.myForm.controls["phone"].setValue(auth.phone);
            this.myForm.controls["serviceDescription"].setValue(auth.serviceDescription);
            this.myForm.controls["email"].setValue(auth.email);
        });
        this.formData = new FormData();
        this.uploadImage = (webPath) => {
            this.uploadImageImplementation(webPath);
        };
    }
    selectPhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ab = yield this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraSource"].Photos);
            yield this.uploadImage(ab);
        });
    }
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ab = yield this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraSource"].Camera);
            yield this.uploadImage(ab);
        });
    }
    getPhoto(source) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraResultType"].Uri,
                source,
            });
            this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);
            return image.webPath;
        });
    }
    uploadImageImplementation(webPath) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: "Cargando...",
            });
            yield this.loading.present();
            const blob = yield fetch(webPath).then((r) => r.blob());
            this.formData.append("image", blob, `profile-picture.jpg`);
            yield this.loading.dismiss("login");
        });
    }
    updateUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: "Cargando...",
            });
            let controls = this.myForm.controls;
            if (this.myForm.invalid) {
                Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
                return;
            }
            let body = {
                id: this.auth.id,
                active: 1,
                deviceToken: this.auth.deviceToken,
                email: controls["email"].value,
                name: controls["name"].value,
                phone: controls["phone"].value,
                serviceDescription: controls["serviceDescription"].value,
                password: controls["password"].value,
                username: controls["email"].value,
                profilePicture: this.auth.profilePicture,
                city: this.city,
                roles: [{ id: 2 }],
            };
            this.formData.append("userCommand", new Blob([JSON.stringify(body)], {
                type: "application/json",
            }));
            this.loading.present();
            this.usersService
                .update(this.formData, this.auth.token)
                .toPromise()
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loading.dismiss();
                let newAuth = Object.assign(Object.assign({}, body), { token: this.auth.token });
                this.storage.set("auth", newAuth);
                let alert = yield this.alertController.create({
                    header: "Perfil actualizado",
                    message: "Tu perfil ha sido actualizado correctamente",
                    buttons: [
                        {
                            text: "Aceptar",
                            role: "cancel",
                            handler: () => {
                                return false;
                            },
                        },
                    ],
                });
                alert.present();
            }), (err) => {
                this.loading.dismiss();
                let error = JSON.parse(err._body);
                console.log(error);
            });
        });
    }
    openCityModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_9__["SelectCityComponent"],
                cssClass: "my-custom-class",
            });
            return yield modal.present().then(() => {
                modal.onWillDismiss().then((response) => {
                    this.city = response.data.city;
                    if (this.city) {
                        this.myForm.controls["city"].setValue(this.city.name);
                    }
                    else {
                        this.myForm.controls["city"].setValue(null);
                    }
                });
            });
        });
    }
    controlHasError(controlName, validationType) {
        const control = this.myForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/users/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ }),

/***/ "./src/app/users/recover-password/recover-password.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/users/recover-password/recover-password.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3JlY292ZXItcGFzc3dvcmQvcmVjb3Zlci1wYXNzd29yZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/users/recover-password/recover-password.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/users/recover-password/recover-password.page.ts ***!
  \*****************************************************************/
/*! exports provided: RecoverPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverPasswordPage", function() { return RecoverPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var src_app_login_form_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/login/form/login.service */ "./src/app/login/form/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let RecoverPasswordPage = class RecoverPasswordPage {
    constructor(router, storage, usersService, loginService, loadingController) {
        this.router = router;
        this.storage = storage;
        this.usersService = usersService;
        this.loginService = loginService;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.formData = new FormData();
        this.showCodeForm = false;
        this.imageUrl = "../../assets/logo/otoro-logo.png";
        this.imageId = "top-image";
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("email", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.myForm.controls["email"].setValue(null);
        this.myCodeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("code", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.myCodeForm.controls["code"].setValue(null);
    }
    cancel() {
        this.showCodeForm = false;
        this.router.navigate(["/login"]);
    }
    updateRecoverCode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let controls = this.myForm.controls;
            if (this.myForm.invalid) {
                Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
                return;
            }
            const body = {
                email: controls["email"].value,
            };
            this.userEmail = controls["email"].value;
            this.loading = yield this.loadingController.create({
                message: "Cargando...",
            });
            yield this.loading.present();
            this.usersService
                .updateRecoverCode(body)
                .toPromise()
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.showCodeForm = true;
                yield this.loading.dismiss();
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let error = JSON.parse(err._body);
                console.log(error);
                yield this.loading.dismiss();
            }));
        });
    }
    recoverPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let controls = this.myCodeForm.controls;
            if (this.myCodeForm.invalid) {
                Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
                return;
            }
            const body = {
                email: this.userEmail,
                recoverCode: controls["code"].value,
            };
            this.loading = yield this.loadingController.create({
                message: "Cargando...",
            });
            yield this.loading.present();
            this.usersService
                .recoverPassword(body)
                .toPromise()
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.login();
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let error = JSON.parse(err._body);
                console.log(error);
                yield this.loading.dismiss();
            }));
        });
    }
    login() {
        let controls = this.myCodeForm.controls;
        const body = {
            email: this.userEmail,
            password: controls["code"].value,
        };
        this.loginService
            .run(body)
            .toPromise()
            .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showCodeForm = false;
            this.myForm.controls["email"].setValue(null);
            this.myCodeForm.controls["code"].setValue(null);
            let result = res.json();
            let deviceToken = yield this.storage.get("deviceToken");
            this.storage.set("auth", result);
            let user = {
                id: result.id,
                deviceToken: deviceToken,
                active: result.active,
                email: result.email,
                name: result.name,
                phone: result.phone,
                profilePicture: result.profilePicture,
                serviceDescription: result.serviceDescription,
                password: "",
                username: result.email,
                city: result.city,
                roles: result.roles,
            };
            this.formData.append("userCommand", new Blob([JSON.stringify(user)], {
                type: "application/json",
            }));
            this.updateUser(result.token);
        }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let error = JSON.parse(err._body);
            console.log(error);
            yield this.loading.dismiss();
        }));
    }
    updateUser(token) {
        this.usersService
            .update(this.formData, token)
            .toPromise()
            .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
            this.router.navigate(["/dashboard"]);
        }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
            let error = JSON.parse(err._body);
            console.log(error);
        }));
    }
    controlHasError(controlName, validationType) {
        let control = this.myForm.controls[controlName];
        if (this.showCodeForm) {
            control = this.myCodeForm.controls[controlName];
        }
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
};
RecoverPasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
    { type: src_app_login_form_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
RecoverPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-recover-password",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./recover-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/recover-password/recover-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./recover-password.page.scss */ "./src/app/users/recover-password/recover-password.page.scss")).default]
    })
], RecoverPasswordPage);



/***/ }),

/***/ "./src/app/users/register-form/register-form.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/users/register-form/register-form.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/users/register-form/register-form.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/users/register-form/register-form.page.ts ***!
  \***********************************************************/
/*! exports provided: RegisterFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormPage", function() { return RegisterFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/select-city/select-city.component */ "./src/app/shared/select-city/select-city.component.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var src_app_login_form_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/login/form/login.service */ "./src/app/login/form/login.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");











let RegisterFormPage = class RegisterFormPage {
    constructor(router, storage, modalController, usersService, loginService, sanitizer, loadingController, menuController) {
        this.router = router;
        this.storage = storage;
        this.modalController = modalController;
        this.usersService = usersService;
        this.loginService = loginService;
        this.sanitizer = sanitizer;
        this.loadingController = loadingController;
        this.menuController = menuController;
        this.step = 1;
    }
    ngOnInit() {
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("name", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("city", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("email", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("password", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("confirmPassword", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("phone", []),
            serviceDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("serviceDescription", []),
        });
        this.myForm.controls["name"].setValue(null);
        this.myForm.controls["city"].setValue(null);
        this.myForm.controls["phone"].setValue(null);
        this.myForm.controls["serviceDescription"].setValue(null);
        this.myForm.controls["email"].setValue(null);
        this.myForm.controls["password"].setValue(null);
        this.myForm.controls["confirmPassword"].setValue(null);
        this.formData = new FormData();
        this.uploadImage = (webPath) => {
            this.uploadImageImplementation(webPath);
        };
    }
    selectPhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ab = yield this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraSource"].Photos);
            yield this.uploadImage(ab);
        });
    }
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ab = yield this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraSource"].Camera);
            yield this.uploadImage(ab);
        });
    }
    getPhoto(source) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraResultType"].Uri,
                source,
            });
            this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);
            return image.webPath;
        });
    }
    uploadImageImplementation(webPath) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: "Cargando...",
            });
            yield this.loading.present();
            const blob = yield fetch(webPath).then((r) => r.blob());
            this.formData.append("image", blob, `profile-picture.jpg`);
            yield this.loading.dismiss("login");
        });
    }
    continueToSecondStep() {
        this.step = 2;
    }
    goBackToFirstStep() {
        this.step = 1;
    }
    cancel() {
        this.step = 1;
        this.myForm.controls["name"].setValue(null);
        this.myForm.controls["city"].setValue(null);
        this.myForm.controls["phone"].setValue(null);
        this.myForm.controls["serviceDescription"].setValue(null);
        this.myForm.controls["email"].setValue(null);
        this.myForm.controls["password"].setValue(null);
        this.myForm.controls["confirmPassword"].setValue(null);
        this.router.navigate(["/login"]);
    }
    register() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: "Cargando...",
            });
            let controls = this.myForm.controls;
            if (this.myForm.invalid) {
                Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
                return;
            }
            const body = {
                active: 1,
                email: controls["email"].value,
                name: controls["name"].value,
                phone: controls["phone"].value,
                serviceDescription: controls["serviceDescription"].value,
                password: controls["password"].value,
                username: controls["email"].value,
                city: this.city,
                roles: [{ id: 2 }],
            };
            this.formData.append("userCommand", new Blob([JSON.stringify(body)], {
                type: "application/json",
            }));
            this.loading.present();
            this.usersService
                .register(this.formData)
                .toPromise()
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.login();
            }), (err) => {
                this.loading.dismiss();
                let error = JSON.parse(err._body);
            });
        });
    }
    login() {
        let controls = this.myForm.controls;
        const body = {
            email: controls["email"].value,
            password: controls["password"].value,
        };
        this.loginService
            .run(body)
            .toPromise()
            .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = res.json();
            let deviceToken = yield this.storage.get("deviceToken");
            this.storage.set("auth", result);
            let user = {
                active: result.active,
                deviceToken: deviceToken,
                email: result.email,
                id: result.id,
                profilePicture: result.profilePicture,
                name: result.name,
                serviceDescription: result.serviceDescription,
                phone: result.phone,
                roles: result.roles,
                city: result.city,
            };
            this.formData.set("userCommand", new Blob([JSON.stringify(user)], {
                type: "application/json",
            }));
            this.updateUser(result.token);
        }), (err) => {
            this.loading.dismiss();
            let error = JSON.parse(err._body);
            console.log(error);
        });
    }
    updateUser(token) {
        this.usersService
            .update(this.formData, token)
            .toPromise()
            .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.menuController.enable(true);
            this.loading.dismiss();
            this.router.navigate(["/dashboard"]);
        }), (err) => {
            this.loading.dismiss();
            let error = JSON.parse(err._body);
            console.log(error);
        });
    }
    openCityModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__["SelectCityComponent"],
                cssClass: "my-custom-class",
            });
            return yield modal.present().then(() => {
                modal.onWillDismiss().then((response) => {
                    this.city = response.data.city;
                    if (this.city) {
                        this.myForm.controls["city"].setValue(this.city.name);
                    }
                    else {
                        this.myForm.controls["city"].setValue(null);
                    }
                });
            });
        });
    }
    controlHasError(controlName, validationType) {
        const control = this.myForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
};
RegisterFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"] },
    { type: src_app_login_form_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
RegisterFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-register-form",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/register-form/register-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register-form.page.scss */ "./src/app/users/register-form/register-form.page.scss")).default]
    })
], RegisterFormPage);



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function() { return UsersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.page */ "./src/app/users/users.page.ts");




const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]
    },
    {
        path: 'recover-password',
        loadChildren: () => __webpack_require__.e(/*! import() | recover-password-recover-password-module */ "recover-password-recover-password-module").then(__webpack_require__.bind(null, /*! ./recover-password/recover-password.module */ "./src/app/users/recover-password/recover-password.module.ts")).then(m => m.RecoverPasswordPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() | register-form-register-form-module */ "register-form-register-form-module").then(__webpack_require__.bind(null, /*! ./register-form/register-form.module */ "./src/app/users/register-form/register-form.module.ts")).then(m => m.RegisterFormPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/users/profile/profile.module.ts")).then(m => m.ProfilePageModule)
    }
];
let UsersPageRoutingModule = class UsersPageRoutingModule {
};
UsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsersPageRoutingModule);



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.page */ "./src/app/users/users.page.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _recover_password_recover_password_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recover-password/recover-password.page */ "./src/app/users/recover-password/recover-password.page.ts");
/* harmony import */ var _register_form_register_form_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register-form/register-form.page */ "./src/app/users/register-form/register-form.page.ts");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.page */ "./src/app/users/profile/profile.page.ts");












let UsersPageModule = class UsersPageModule {
};
UsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersPageRoutingModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot(),
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"], _recover_password_recover_password_page__WEBPACK_IMPORTED_MODULE_9__["RecoverPasswordPage"], _register_form_register_form_page__WEBPACK_IMPORTED_MODULE_10__["RegisterFormPage"], _profile_profile_page__WEBPACK_IMPORTED_MODULE_11__["ProfilePage"]],
        providers: [_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]],
    })
], UsersPageModule);



/***/ }),

/***/ "./src/app/users/users.page.scss":
/*!***************************************!*\
  !*** ./src/app/users/users.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/users/users.page.ts":
/*!*************************************!*\
  !*** ./src/app/users/users.page.ts ***!
  \*************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UsersPage = class UsersPage {
    constructor() { }
    ngOnInit() {
    }
};
UsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users.page.scss */ "./src/app/users/users.page.scss")).default]
    })
], UsersPage);



/***/ })

}]);
//# sourceMappingURL=users-users-module-es2015.js.map