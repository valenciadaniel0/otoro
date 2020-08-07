function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/select-city/select-city.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/select-city/select-city.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSelectCitySelectCityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Ciudades</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"searchForm\">\r\n    <input\r\n      name=\"query\"\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      placeholder=\"Busca una ciudad\"\r\n      formControlName=\"queryControl\"\r\n      (keyup)=\"search()\"\r\n    />\r\n  </form>\r\n  <div class=\"city-list\" *ngIf=\"cities.length > 0\">\r\n    <div\r\n      class=\"select-city\"\r\n      *ngFor=\"let city of cities\"\r\n      (click)=\"dismiss(city)\"\r\n    >\r\n      {{ city.name }}\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/profile/profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/profile/profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n    <h4 class=\"centered-text\">Perfil</h4>\r\n    <ion-row>\r\n      <ion-col>\r\n        <img *ngIf=\"photo\" [src]=\"photo\" />\r\n        <img *ngIf=\"auth && !photo && auth.profilePicture\" [src]=\"storedPhoto\" />\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"primary\" (click)=\"takePicture()\" class=\"width-100\">\r\n          <ion-icon name=\"camera\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"primary\" (click)=\"selectPhoto()\" class=\"width-100\">\r\n          <ion-icon name=\"image-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"centered-text\"\r\n        >Sube una imagen de perfil</ion-col\r\n      >\r\n      <div class=\"separator\"></div>\r\n    </ion-row>\r\n    <ion-row id=\"form-container\">\r\n      <ion-col col-12>\r\n        <form [formGroup]=\"myForm\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Nombres y apellidos</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('name', 'required')\"\r\n              formControlName=\"name\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('name', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Correo electr&oacute;nico</label>\r\n            <input\r\n              type=\"email\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('email', 'required')\"\r\n              formControlName=\"email\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('email', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Ciudad</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"              \r\n              (click)=\"openCityModal()\"\r\n              [class.error-input]=\"controlHasError('city', 'required')\"\r\n              formControlName=\"city\"\r\n            />\r\n            <!-- <ion-item (click)=\"openCityModal()\" class=\"no-padding-left\">\r\n              <span *ngIf=\"!city\">Selecciona una ciudad</span>\r\n              <span *ngIf=\"city\">{{city.name}}</span>\r\n            </ion-item> -->           \r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('city', 'required')\"\r\n            >\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Tel&eacute;fono(Opcional)</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"phone\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Descripci&oacute;n de tus servicios</label>\r\n            <textarea\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('serviceDescription', 'required')\"\r\n              formControlName=\"serviceDescription\"\r\n            ></textarea>\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('serviceDescription', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Contrase&ntilde;a</label>\r\n            <input\r\n              type=\"password\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('password', 'required')\"\r\n              formControlName=\"password\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Confirmar Contrase&ntilde;a</label>\r\n            <input\r\n              type=\"password\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('confirmPassword', 'required')\"\r\n              formControlName=\"confirmPassword\"\r\n            />\r\n          </div>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button color=\"primary\" (click)=\"updateUser()\" class=\"width-100\">\r\n          Actualizar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/recover-password/recover-password.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/recover-password/recover-password.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersRecoverPasswordRecoverPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div id=\"container\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"ion-align-self-center\" col-8 offset=\"2\">\r\n          <img src=\"../../../assets/logo/otoro.png\" width=\"70%\" height=\"auto\" />\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col col-12 *ngIf=\"!showCodeForm\">\r\n          <h4 class=\"no-margin-bottom\">Recuperar contrase&ntilde;a</h4>\r\n          <small>Por favor ingresa tu correo electrónico</small><br />\r\n        </ion-col>\r\n        <ion-col col-12 *ngIf=\"showCodeForm\">\r\n          <h4 class=\"no-margin-bottom\">Ingresar c&oacute;digo</h4>\r\n          <small\r\n            >Hemos enviado un código a tu correo, por favor ingresalo para\r\n            recuperar tu contrase&ntilde;a</small\r\n          ><br />\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row id=\"form-container\">\r\n        <ion-col col-12>\r\n          <form [formGroup]=\"myForm\" *ngIf=\"!showCodeForm\">\r\n            <div class=\"form-group\">\r\n              <label class=\"bold\">Correo electrónico</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control width-100\"\r\n                [class.error-input]=\"controlHasError('email', 'required')\"\r\n                formControlName=\"email\"\r\n              />\r\n              <span\r\n                class=\"error-input-label\"\r\n                *ngIf=\"controlHasError('email', 'required')\"\r\n              >\r\n                <strong class=\"error\">Campo requerido</strong>\r\n              </span>\r\n            </div>\r\n            <div class=\"display-flex\" id=\"btn-container\">\r\n              <ion-button\r\n                color=\"danger\"\r\n                (click)=\"cancel()\"\r\n                class=\"margin-center\"\r\n              >\r\n                Cancelar\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"primary\"\r\n                class=\"margin-center\"\r\n                (click)=\"updateRecoverCode()\"\r\n              >\r\n                Enviar\r\n              </ion-button>\r\n            </div>\r\n          </form>\r\n          <form [formGroup]=\"myCodeForm\" *ngIf=\"showCodeForm\">\r\n            <div class=\"form-group\">\r\n              <label class=\"bold\">Código</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control width-100\"\r\n                [class.error-input]=\"controlHasError('code', 'required')\"\r\n                formControlName=\"code\"\r\n              />\r\n              <span\r\n                class=\"error-input-label\"\r\n                *ngIf=\"controlHasError('code', 'required')\"\r\n              >\r\n                <strong class=\"error\">Campo requerido</strong>\r\n              </span>\r\n            </div>\r\n            <div class=\"display-flex\" id=\"btn-container\">\r\n              <ion-button\r\n                color=\"danger\"\r\n                (click)=\"cancel()\"\r\n                class=\"margin-center\"\r\n              >\r\n                Cancelar\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"primary\"\r\n                class=\"margin-center\"\r\n                (click)=\"recoverPassword()\"\r\n              >\r\n                Validar\r\n              </ion-button>\r\n            </div>\r\n          </form>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/register-form/register-form.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/register-form/register-form.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersRegisterFormRegisterFormPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div id=\"container\">\r\n    <h4 class=\"centered-text\" *ngIf=\"step === 1\">Registrarme</h4>\r\n    <h4 class=\"centered-text\" *ngIf=\"step !== 1\">Casi terminamos</h4>\r\n    <ion-row *ngIf=\"step !== 1\">\r\n      <ion-col>\r\n        <img [src]=\"photo\" />\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"step !== 1\">\r\n      <ion-col>\r\n        <ion-button color=\"primary\" (click)=\"takePicture()\" class=\"width-100\">\r\n          <ion-icon name=\"camera\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"primary\" (click)=\"selectPhoto()\" class=\"width-100\">\r\n          <ion-icon name=\"image-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"step !== 1\">\r\n      <ion-col size=\"12\" class=\"centered-text\"\r\n        >Sube una imagen de perfil</ion-col\r\n      >\r\n      <div class=\"separator\"></div>\r\n    </ion-row>\r\n\r\n    <ion-row id=\"form-container\">\r\n      <ion-col col-12>\r\n        <form [formGroup]=\"myForm\">\r\n          <div class=\"form-group\" *ngIf=\"step === 1\">\r\n            <label class=\"bold\">Nombres y apellidos</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('name', 'required')\"\r\n              formControlName=\"name\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('name', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"step === 1\">\r\n            <label class=\"bold\">Correo electr&oacute;nico</label>\r\n            <input\r\n              type=\"email\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('email', 'required')\"\r\n              formControlName=\"email\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('email', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"step === 1\">\r\n            <label class=\"bold\">Ciudad</label>\r\n            <ion-item (click)=\"openCityModal()\">\r\n              <span *ngIf=\"!city\">Selecciona una ciudad</span>\r\n              <span *ngIf=\"city\">{{city.name}}</span>\r\n            </ion-item>\r\n            <input type=\"text\" class=\"display-none\" formControlName=\"city\" />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('city', 'required') && step === 1\"\r\n            >\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"step === 1\">\r\n            <label class=\"bold\">Tel&eacute;fono(Opcional)</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"phone\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"step === 1\">\r\n            <label class=\"bold\">Contrase&ntilde;a</label>\r\n            <input\r\n              type=\"password\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('password', 'required')\"\r\n              formControlName=\"password\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('password', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"step === 1\">\r\n            <label class=\"bold\">Confirmar Contrase&ntilde;a</label>\r\n            <input\r\n              type=\"password\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('confirmPassword', 'required')\"\r\n              formControlName=\"confirmPassword\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('confirmPassword', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"step !== 1\">\r\n            <label class=\"bold\">Descripci&oacute;n de tus servicios</label>\r\n            <textarea\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('serviceDescription', 'required')\"\r\n              formControlName=\"serviceDescription\"\r\n            ></textarea>\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('serviceDescription', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button\r\n          color=\"primary\"\r\n          (click)=\"continueToSecondStep()\"\r\n          class=\"width-100\"\r\n          *ngIf=\"step === 1\"\r\n        >\r\n          Continuar\r\n        </ion-button>\r\n        <ion-button\r\n          color=\"primary\"\r\n          (click)=\"register()\"\r\n          class=\"width-100\"\r\n          *ngIf=\"step !== 1\"\r\n        >\r\n          Guardar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button\r\n          color=\"danger\"\r\n          (click)=\"cancel()\"\r\n          class=\"width-100\"\r\n          *ngIf=\"step === 1\"\r\n        >\r\n          Cancelar\r\n        </ion-button>\r\n        <ion-button\r\n          color=\"danger\"\r\n          (click)=\"goBackToFirstStep()\"\r\n          class=\"width-100\"\r\n          *ngIf=\"step !== 1\"\r\n        >\r\n          Volver\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>users</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/shared/select-city/city.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/select-city/city.service.ts ***!
    \****************************************************/

  /*! exports provided: CityService */

  /***/
  function srcAppSharedSelectCityCityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityService", function () {
      return CityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/services/rest.service */
    "./src/app/core/services/rest.service.ts");

    var CityService = /*#__PURE__*/function () {
      function CityService(restService) {
        _classCallCheck(this, CityService);

        this.restService = restService;
      }

      _createClass(CityService, [{
        key: "getAll",
        value: function getAll(query) {
          var url = "cities".concat(undefined != query && null != query && "" != query ? "?query=".concat(query) : "");
          return this.restService.queryGetRegular(url);
        }
      }]);

      return CityService;
    }();

    CityService.ctorParameters = function () {
      return [{
        type: src_app_core_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }];
    };

    CityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], CityService);
    /***/
  },

  /***/
  "./src/app/shared/select-city/select-city.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/shared/select-city/select-city.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSelectCitySelectCityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".city-list {\n  padding-top: 5%;\n}\n\n.city-list .select-city {\n  border-bottom: 1px #e6e6e6 solid;\n  padding: 5px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlbGVjdC1jaXR5L0M6XFxVc2Vyc1xcaW5nZG1cXHByb2plY3RzXFxvdG9yb1xcZnJvbnQvc3JjXFxhcHBcXHNoYXJlZFxcc2VsZWN0LWNpdHlcXHNlbGVjdC1jaXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2VsZWN0LWNpdHkvc2VsZWN0LWNpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FDQ2pCOztBREZBO0VBR0ksZ0NBQWdDO0VBQ2hDLGNBQWM7QUNHbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2VsZWN0LWNpdHkvc2VsZWN0LWNpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2l0eS1saXN0IHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgLnNlbGVjdC1jaXR5IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCAjZTZlNmU2IHNvbGlkO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgfVxyXG59XHJcbiIsIi5jaXR5LWxpc3Qge1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5jaXR5LWxpc3QgLnNlbGVjdC1jaXR5IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICNlNmU2ZTYgc29saWQ7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/select-city/select-city.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/select-city/select-city.component.ts ***!
    \*************************************************************/

  /*! exports provided: SelectCityComponent */

  /***/
  function srcAppSharedSelectCitySelectCityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCityComponent", function () {
      return SelectCityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _city_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./city.service */
    "./src/app/shared/select-city/city.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SelectCityComponent = /*#__PURE__*/function () {
      function SelectCityComponent(modalController, cityService, storage) {
        _classCallCheck(this, SelectCityComponent);

        this.modalController = modalController;
        this.cityService = cityService;
        this.storage = storage;
        this.cities = [];
        this.query = "";
      }

      _createClass(SelectCityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            queryControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("queryControl", [])
          });
          this.searchForm.controls["queryControl"].setValue(null);
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          var city = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          this.modalController.dismiss({
            dismissed: true,
            city: city
          });
        }
      }, {
        key: "search",
        value: function search() {
          var controls = this.searchForm.controls;
          this.query = controls["queryControl"].value;

          if (this.query && this.query.length > 3) {
            this.getCities();
          } else {
            this.cities = [];
          }
        }
      }, {
        key: "getCities",
        value: function getCities() {
          var _this = this;

          this.cityService.getAll(this.query).toPromise().then(function (res) {
            var result = res.json();
            _this.cities = result;
          }, function (err) {
            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }]);

      return SelectCityComponent;
    }();

    SelectCityComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _city_service__WEBPACK_IMPORTED_MODULE_4__["CityService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    SelectCityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-select-city",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./select-city.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/select-city/select-city.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./select-city.component.scss */
      "./src/app/shared/select-city/select-city.component.scss"))["default"]]
    })], SelectCityComponent);
    /***/
  },

  /***/
  "./src/app/users/profile/profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/users/profile/profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/users/profile/profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/users/profile/profile.page.ts ***!
    \***********************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppUsersProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../users.service */
    "./src/app/users/users.service.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/select-city/select-city.component */
    "./src/app/shared/select-city/select-city.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(router, alertController, storage, modalController, usersService, sanitizer, loadingController) {
        _classCallCheck(this, ProfilePage);

        this.router = router;
        this.alertController = alertController;
        this.storage = storage;
        this.modalController = modalController;
        this.usersService = usersService;
        this.sanitizer = sanitizer;
        this.loadingController = loadingController;
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("name", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("city", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("email", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("password", []),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("confirmPassword", []),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("phone", []),
            serviceDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("serviceDescription", [])
          });
          this.myForm.controls["name"].setValue(null);
          this.myForm.controls["city"].setValue(null);
          this.myForm.controls["phone"].setValue(null);
          this.myForm.controls["serviceDescription"].setValue(null);
          this.myForm.controls["email"].setValue(null);
          this.myForm.controls["password"].setValue(null);
          this.myForm.controls["confirmPassword"].setValue(null);
          this.storage.get("auth").then(function (auth) {
            _this2.auth = auth;

            _this2.myForm.controls["name"].setValue(auth.name);

            _this2.myForm.controls["city"].setValue(auth.city.name);

            _this2.city = auth.city;

            _this2.myForm.controls["phone"].setValue(auth.phone);

            _this2.myForm.controls["serviceDescription"].setValue(auth.serviceDescription);

            _this2.myForm.controls["email"].setValue(auth.email);

            if (_this2.auth.profilePicture) {
              _this2.storedPhoto = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].profile_pictures_url).concat(_this2.auth.profilePicture, ".jpg");
            }
          });
          this.formData = new FormData();

          this.uploadImage = function (webPath) {
            _this2.uploadImageImplementation(webPath);
          };
        }
      }, {
        key: "selectPhoto",
        value: function selectPhoto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var ab;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraSource"].Photos);

                  case 2:
                    ab = _context.sent;
                    _context.next = 5;
                    return this.uploadImage(ab);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "takePicture",
        value: function takePicture() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var ab;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraSource"].Camera);

                  case 2:
                    ab = _context2.sent;
                    _context2.next = 5;
                    return this.uploadImage(ab);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getPhoto",
        value: function getPhoto(source) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var image;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Camera.getPhoto({
                      quality: 90,
                      allowEditing: false,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraResultType"].Uri,
                      source: source
                    });

                  case 2:
                    image = _context3.sent;
                    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);
                    return _context3.abrupt("return", image.webPath);

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "uploadImageImplementation",
        value: function uploadImageImplementation(webPath) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var blob;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create({
                      message: "Cargando..."
                    });

                  case 2:
                    this.loading = _context4.sent;
                    _context4.next = 5;
                    return this.loading.present();

                  case 5:
                    _context4.next = 7;
                    return fetch(webPath).then(function (r) {
                      return r.blob();
                    });

                  case 7:
                    blob = _context4.sent;
                    this.formData.append("image", blob, "profile-picture.jpg");
                    _context4.next = 11;
                    return this.loading.dismiss("login");

                  case 11:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this3 = this;

            var controls, body;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadingController.create({
                      message: "Cargando..."
                    });

                  case 2:
                    this.loading = _context6.sent;
                    controls = this.myForm.controls;

                    if (!this.myForm.invalid) {
                      _context6.next = 7;
                      break;
                    }

                    Object.keys(controls).forEach(function (controlName) {
                      return controls[controlName].markAsTouched();
                    });
                    return _context6.abrupt("return");

                  case 7:
                    body = {
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
                      roles: [{
                        id: 2
                      }]
                    };
                    this.formData.append("userCommand", new Blob([JSON.stringify(body)], {
                      type: "application/json"
                    }));
                    this.loading.present();
                    this.usersService.update(this.formData, this.auth.token).toPromise().then(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        var newAuth, alert;
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                this.loading.dismiss();
                                newAuth = Object.assign(Object.assign({}, body), {
                                  token: this.auth.token
                                });
                                _context5.next = 4;
                                return this.storage.set("auth", newAuth);

                              case 4:
                                _context5.next = 6;
                                return this.getUser(newAuth.email);

                              case 6:
                                _context5.next = 8;
                                return this.alertController.create({
                                  header: "Perfil actualizado",
                                  message: "Tu perfil ha sido actualizado correctamente",
                                  buttons: [{
                                    text: "Aceptar",
                                    role: "cancel",
                                    handler: function handler() {
                                      return false;
                                    }
                                  }]
                                });

                              case 8:
                                alert = _context5.sent;
                                alert.present();

                              case 10:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    }, function (err) {
                      _this3.loading.dismiss();

                      var error = JSON.parse(err._body);
                      console.log(error);
                    });

                  case 11:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getUser",
        value: function getUser(email) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.usersService.getByEmail(email, this.auth.token).toPromise().then(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                console.log("the user");
                                console.log(res);

                              case 2:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7);
                      }));
                    }, function (err) {
                      _this4.loading.dismiss();

                      var error = JSON.parse(err._body);
                      console.log(error);
                    });

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "openCityModal",
        value: function openCityModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.modalController.create({
                      component: src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_9__["SelectCityComponent"],
                      cssClass: "my-custom-class"
                    });

                  case 2:
                    modal = _context9.sent;
                    _context9.next = 5;
                    return modal.present().then(function () {
                      modal.onWillDismiss().then(function (response) {
                        _this5.city = response.data.city;

                        if (_this5.city) {
                          _this5.myForm.controls["city"].setValue(_this5.city.name);
                        } else {
                          _this5.myForm.controls["city"].setValue(null);
                        }
                      });
                    });

                  case 5:
                    return _context9.abrupt("return", _context9.sent);

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "controlHasError",
        value: function controlHasError(controlName, validationType) {
          var control = this.myForm.controls[controlName];

          if (!control) {
            return false;
          }

          var result = control.hasError(validationType) && (control.dirty || control.touched);
          return result;
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }];
    };

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/users/profile/profile.page.scss"))["default"]]
    })], ProfilePage);
    /***/
  },

  /***/
  "./src/app/users/recover-password/recover-password.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/users/recover-password/recover-password.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersRecoverPasswordRecoverPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3JlY292ZXItcGFzc3dvcmQvcmVjb3Zlci1wYXNzd29yZC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/users/recover-password/recover-password.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/users/recover-password/recover-password.page.ts ***!
    \*****************************************************************/

  /*! exports provided: RecoverPasswordPage */

  /***/
  function srcAppUsersRecoverPasswordRecoverPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecoverPasswordPage", function () {
      return RecoverPasswordPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../users.service */
    "./src/app/users/users.service.ts");
    /* harmony import */


    var src_app_login_form_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/login/form/login.service */
    "./src/app/login/form/login.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var RecoverPasswordPage = /*#__PURE__*/function () {
      function RecoverPasswordPage(router, storage, usersService, loginService, loadingController) {
        _classCallCheck(this, RecoverPasswordPage);

        this.router = router;
        this.storage = storage;
        this.usersService = usersService;
        this.loginService = loginService;
        this.loadingController = loadingController;
      }

      _createClass(RecoverPasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formData = new FormData();
          this.showCodeForm = false;
          this.imageUrl = "../../assets/logo/otoro-logo.png";
          this.imageId = "top-image";
          this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("email", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
          });
          this.myForm.controls["email"].setValue(null);
          this.myCodeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("code", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
          });
          this.myCodeForm.controls["code"].setValue(null);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.showCodeForm = false;
          this.router.navigate(["/login"]);
        }
      }, {
        key: "updateRecoverCode",
        value: function updateRecoverCode() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this6 = this;

            var controls, body;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    controls = this.myForm.controls;

                    if (!this.myForm.invalid) {
                      _context12.next = 4;
                      break;
                    }

                    Object.keys(controls).forEach(function (controlName) {
                      return controls[controlName].markAsTouched();
                    });
                    return _context12.abrupt("return");

                  case 4:
                    body = {
                      email: controls["email"].value
                    };
                    this.userEmail = controls["email"].value;
                    _context12.next = 8;
                    return this.loadingController.create({
                      message: "Cargando..."
                    });

                  case 8:
                    this.loading = _context12.sent;
                    _context12.next = 11;
                    return this.loading.present();

                  case 11:
                    this.usersService.updateRecoverCode(body).toPromise().then(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                          while (1) {
                            switch (_context10.prev = _context10.next) {
                              case 0:
                                this.showCodeForm = true;
                                _context10.next = 3;
                                return this.loading.dismiss();

                              case 3:
                              case "end":
                                return _context10.stop();
                            }
                          }
                        }, _callee10, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                        var error;
                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                error = JSON.parse(err._body);
                                console.log(error);
                                _context11.next = 4;
                                return this.loading.dismiss();

                              case 4:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11, this);
                      }));
                    });

                  case 12:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "recoverPassword",
        value: function recoverPassword() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var _this7 = this;

            var controls, body;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    controls = this.myCodeForm.controls;

                    if (!this.myCodeForm.invalid) {
                      _context15.next = 4;
                      break;
                    }

                    Object.keys(controls).forEach(function (controlName) {
                      return controls[controlName].markAsTouched();
                    });
                    return _context15.abrupt("return");

                  case 4:
                    body = {
                      email: this.userEmail,
                      recoverCode: controls["code"].value
                    };
                    _context15.next = 7;
                    return this.loadingController.create({
                      message: "Cargando..."
                    });

                  case 7:
                    this.loading = _context15.sent;
                    _context15.next = 10;
                    return this.loading.present();

                  case 10:
                    this.usersService.recoverPassword(body).toPromise().then(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                        return regeneratorRuntime.wrap(function _callee13$(_context13) {
                          while (1) {
                            switch (_context13.prev = _context13.next) {
                              case 0:
                                this.login();

                              case 1:
                              case "end":
                                return _context13.stop();
                            }
                          }
                        }, _callee13, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                        var error;
                        return regeneratorRuntime.wrap(function _callee14$(_context14) {
                          while (1) {
                            switch (_context14.prev = _context14.next) {
                              case 0:
                                error = JSON.parse(err._body);
                                console.log(error);
                                _context14.next = 4;
                                return this.loading.dismiss();

                              case 4:
                              case "end":
                                return _context14.stop();
                            }
                          }
                        }, _callee14, this);
                      }));
                    });

                  case 11:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "login",
        value: function login() {
          var _this8 = this;

          var controls = this.myCodeForm.controls;
          var body = {
            email: this.userEmail,
            password: controls["code"].value
          };
          this.loginService.run(body).toPromise().then(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var result, deviceToken, user;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      this.showCodeForm = false;
                      this.myForm.controls["email"].setValue(null);
                      this.myCodeForm.controls["code"].setValue(null);
                      result = res.json();
                      _context16.next = 6;
                      return this.storage.get("deviceToken");

                    case 6:
                      deviceToken = _context16.sent;
                      this.storage.set("auth", result);
                      user = {
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
                        roles: result.roles
                      };
                      this.formData.append("userCommand", new Blob([JSON.stringify(user)], {
                        type: "application/json"
                      }));
                      this.updateUser(result.token);

                    case 11:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var error;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      error = JSON.parse(err._body);
                      console.log(error);
                      _context17.next = 4;
                      return this.loading.dismiss();

                    case 4:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser(token) {
          var _this9 = this;

          this.usersService.update(this.formData, token).toPromise().then(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.loading.dismiss();

                    case 2:
                      this.router.navigate(["/dashboard"]);

                    case 3:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var error;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.loading.dismiss();

                    case 2:
                      error = JSON.parse(err._body);
                      console.log(error);

                    case 4:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          });
        }
      }, {
        key: "controlHasError",
        value: function controlHasError(controlName, validationType) {
          var control = this.myForm.controls[controlName];

          if (this.showCodeForm) {
            control = this.myCodeForm.controls[controlName];
          }

          if (!control) {
            return false;
          }

          var result = control.hasError(validationType) && (control.dirty || control.touched);
          return result;
        }
      }]);

      return RecoverPasswordPage;
    }();

    RecoverPasswordPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
      }, {
        type: src_app_login_form_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
      }];
    };

    RecoverPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-recover-password",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./recover-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/recover-password/recover-password.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./recover-password.page.scss */
      "./src/app/users/recover-password/recover-password.page.scss"))["default"]]
    })], RecoverPasswordPage);
    /***/
  },

  /***/
  "./src/app/users/register-form/register-form.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/users/register-form/register-form.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersRegisterFormRegisterFormPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/users/register-form/register-form.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/users/register-form/register-form.page.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterFormPage */

  /***/
  function srcAppUsersRegisterFormRegisterFormPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterFormPage", function () {
      return RegisterFormPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/select-city/select-city.component */
    "./src/app/shared/select-city/select-city.component.ts");
    /* harmony import */


    var _users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../users.service */
    "./src/app/users/users.service.ts");
    /* harmony import */


    var src_app_login_form_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/login/form/login.service */
    "./src/app/login/form/login.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var RegisterFormPage = /*#__PURE__*/function () {
      function RegisterFormPage(router, storage, modalController, usersService, loginService, sanitizer, loadingController, menuController) {
        _classCallCheck(this, RegisterFormPage);

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

      _createClass(RegisterFormPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("name", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("city", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("email", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("password", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("confirmPassword", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("phone", []),
            serviceDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("serviceDescription", [])
          });
          this.myForm.controls["name"].setValue(null);
          this.myForm.controls["city"].setValue(null);
          this.myForm.controls["phone"].setValue(null);
          this.myForm.controls["serviceDescription"].setValue(null);
          this.myForm.controls["email"].setValue(null);
          this.myForm.controls["password"].setValue(null);
          this.myForm.controls["confirmPassword"].setValue(null);
          this.formData = new FormData();

          this.uploadImage = function (webPath) {
            _this10.uploadImageImplementation(webPath);
          };
        }
      }, {
        key: "selectPhoto",
        value: function selectPhoto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var ab;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraSource"].Photos);

                  case 2:
                    ab = _context20.sent;
                    _context20.next = 5;
                    return this.uploadImage(ab);

                  case 5:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "takePicture",
        value: function takePicture() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var ab;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraSource"].Camera);

                  case 2:
                    ab = _context21.sent;
                    _context21.next = 5;
                    return this.uploadImage(ab);

                  case 5:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "getPhoto",
        value: function getPhoto(source) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var image;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Camera.getPhoto({
                      quality: 90,
                      allowEditing: false,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraResultType"].Uri,
                      source: source
                    });

                  case 2:
                    image = _context22.sent;
                    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);
                    return _context22.abrupt("return", image.webPath);

                  case 5:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "uploadImageImplementation",
        value: function uploadImageImplementation(webPath) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var blob;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.loadingController.create({
                      message: "Cargando..."
                    });

                  case 2:
                    this.loading = _context23.sent;
                    _context23.next = 5;
                    return this.loading.present();

                  case 5:
                    _context23.next = 7;
                    return fetch(webPath).then(function (r) {
                      return r.blob();
                    });

                  case 7:
                    blob = _context23.sent;
                    this.formData.append("image", blob, "profile-picture.jpg");
                    _context23.next = 11;
                    return this.loading.dismiss("login");

                  case 11:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "continueToSecondStep",
        value: function continueToSecondStep() {
          this.step = 2;
        }
      }, {
        key: "goBackToFirstStep",
        value: function goBackToFirstStep() {
          this.step = 1;
        }
      }, {
        key: "cancel",
        value: function cancel() {
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
      }, {
        key: "register",
        value: function register() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var _this11 = this;

            var controls, body;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.loadingController.create({
                      message: "Cargando..."
                    });

                  case 2:
                    this.loading = _context25.sent;
                    controls = this.myForm.controls;

                    if (!this.myForm.invalid) {
                      _context25.next = 7;
                      break;
                    }

                    Object.keys(controls).forEach(function (controlName) {
                      return controls[controlName].markAsTouched();
                    });
                    return _context25.abrupt("return");

                  case 7:
                    body = {
                      active: 1,
                      email: controls["email"].value,
                      name: controls["name"].value,
                      phone: controls["phone"].value,
                      serviceDescription: controls["serviceDescription"].value,
                      password: controls["password"].value,
                      username: controls["email"].value,
                      city: this.city,
                      roles: [{
                        id: 2
                      }]
                    };
                    this.formData.append("userCommand", new Blob([JSON.stringify(body)], {
                      type: "application/json"
                    }));
                    this.loading.present();
                    this.usersService.register(this.formData).toPromise().then(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
                        return regeneratorRuntime.wrap(function _callee24$(_context24) {
                          while (1) {
                            switch (_context24.prev = _context24.next) {
                              case 0:
                                this.login();

                              case 1:
                              case "end":
                                return _context24.stop();
                            }
                          }
                        }, _callee24, this);
                      }));
                    }, function (err) {
                      _this11.loading.dismiss();

                      var error = JSON.parse(err._body);
                    });

                  case 11:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "login",
        value: function login() {
          var _this12 = this;

          var controls = this.myForm.controls;
          var body = {
            email: controls["email"].value,
            password: controls["password"].value
          };
          this.loginService.run(body).toPromise().then(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var result, deviceToken, user;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      result = res.json();
                      _context26.next = 3;
                      return this.storage.get("deviceToken");

                    case 3:
                      deviceToken = _context26.sent;
                      this.storage.set("auth", result);
                      user = {
                        active: result.active,
                        deviceToken: deviceToken,
                        email: result.email,
                        id: result.id,
                        profilePicture: result.profilePicture,
                        name: result.name,
                        serviceDescription: result.serviceDescription,
                        phone: result.phone,
                        roles: result.roles,
                        city: result.city
                      };
                      this.formData.set("userCommand", new Blob([JSON.stringify(user)], {
                        type: "application/json"
                      }));
                      this.updateUser(result.token);

                    case 8:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          }, function (err) {
            _this12.loading.dismiss();

            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser(token) {
          var _this13 = this;

          this.usersService.update(this.formData, token).toPromise().then(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      this.menuController.enable(true);
                      this.loading.dismiss();
                      this.router.navigate(["/dashboard"]);

                    case 3:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          }, function (err) {
            _this13.loading.dismiss();

            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }, {
        key: "openCityModal",
        value: function openCityModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            var _this14 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return this.modalController.create({
                      component: src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__["SelectCityComponent"],
                      cssClass: "my-custom-class"
                    });

                  case 2:
                    modal = _context28.sent;
                    _context28.next = 5;
                    return modal.present().then(function () {
                      modal.onWillDismiss().then(function (response) {
                        _this14.city = response.data.city;

                        if (_this14.city) {
                          _this14.myForm.controls["city"].setValue(_this14.city.name);
                        } else {
                          _this14.myForm.controls["city"].setValue(null);
                        }
                      });
                    });

                  case 5:
                    return _context28.abrupt("return", _context28.sent);

                  case 6:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "controlHasError",
        value: function controlHasError(controlName, validationType) {
          var control = this.myForm.controls[controlName];

          if (!control) {
            return false;
          }

          var result = control.hasError(validationType) && (control.dirty || control.touched);
          return result;
        }
      }]);

      return RegisterFormPage;
    }();

    RegisterFormPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]
      }, {
        type: src_app_login_form_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }];
    };

    RegisterFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-register-form",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register-form.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/register-form/register-form.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register-form.page.scss */
      "./src/app/users/register-form/register-form.page.scss"))["default"]]
    })], RegisterFormPage);
    /***/
  },

  /***/
  "./src/app/users/users-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/users/users-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: UsersPageRoutingModule */

  /***/
  function srcAppUsersUsersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function () {
      return UsersPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users.page */
    "./src/app/users/users.page.ts");

    var routes = [{
      path: '',
      component: _users_page__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]
    }, {
      path: 'recover-password',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | recover-password-recover-password-module */
        "recover-password-recover-password-module").then(__webpack_require__.bind(null,
        /*! ./recover-password/recover-password.module */
        "./src/app/users/recover-password/recover-password.module.ts")).then(function (m) {
          return m.RecoverPasswordPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | register-form-register-form-module */
        "register-form-register-form-module").then(__webpack_require__.bind(null,
        /*! ./register-form/register-form.module */
        "./src/app/users/register-form/register-form.module.ts")).then(function (m) {
          return m.RegisterFormPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | profile-profile-module */
        "profile-profile-module").then(__webpack_require__.bind(null,
        /*! ./profile/profile.module */
        "./src/app/users/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }];

    var UsersPageRoutingModule = function UsersPageRoutingModule() {
      _classCallCheck(this, UsersPageRoutingModule);
    };

    UsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UsersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/users/users.module.ts":
  /*!***************************************!*\
    !*** ./src/app/users/users.module.ts ***!
    \***************************************/

  /*! exports provided: UsersPageModule */

  /***/
  function srcAppUsersUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersPageModule", function () {
      return UsersPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./users-routing.module */
    "./src/app/users/users-routing.module.ts");
    /* harmony import */


    var _users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./users.page */
    "./src/app/users/users.page.ts");
    /* harmony import */


    var _users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./users.service */
    "./src/app/users/users.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _recover_password_recover_password_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./recover-password/recover-password.page */
    "./src/app/users/recover-password/recover-password.page.ts");
    /* harmony import */


    var _register_form_register_form_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./register-form/register-form.page */
    "./src/app/users/register-form/register-form.page.ts");
    /* harmony import */


    var _profile_profile_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./profile/profile.page */
    "./src/app/users/profile/profile.page.ts");

    var UsersPageModule = function UsersPageModule() {
      _classCallCheck(this, UsersPageModule);
    };

    UsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersPageRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot()],
      declarations: [_users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"], _recover_password_recover_password_page__WEBPACK_IMPORTED_MODULE_9__["RecoverPasswordPage"], _register_form_register_form_page__WEBPACK_IMPORTED_MODULE_10__["RegisterFormPage"], _profile_profile_page__WEBPACK_IMPORTED_MODULE_11__["ProfilePage"]],
      providers: [_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]]
    })], UsersPageModule);
    /***/
  },

  /***/
  "./src/app/users/users.page.scss":
  /*!***************************************!*\
    !*** ./src/app/users/users.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUsersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/users/users.page.ts":
  /*!*************************************!*\
    !*** ./src/app/users/users.page.ts ***!
    \*************************************/

  /*! exports provided: UsersPage */

  /***/
  function srcAppUsersUsersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersPage", function () {
      return UsersPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UsersPage = /*#__PURE__*/function () {
      function UsersPage() {
        _classCallCheck(this, UsersPage);
      }

      _createClass(UsersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UsersPage;
    }();

    UsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./users.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./users.page.scss */
      "./src/app/users/users.page.scss"))["default"]]
    })], UsersPage);
    /***/
  }
}]);
//# sourceMappingURL=users-users-module-es5.js.map