function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recover-password-recover-password-module"], {
  /***/
  "./src/app/users/recover-password/recover-password-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/users/recover-password/recover-password-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: RecoverPasswordPageRoutingModule */

  /***/
  function srcAppUsersRecoverPasswordRecoverPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecoverPasswordPageRoutingModule", function () {
      return RecoverPasswordPageRoutingModule;
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


    var _recover_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./recover-password.page */
    "./src/app/users/recover-password/recover-password.page.ts");

    var routes = [{
      path: '',
      component: _recover_password_page__WEBPACK_IMPORTED_MODULE_3__["RecoverPasswordPage"]
    }];

    var RecoverPasswordPageRoutingModule = function RecoverPasswordPageRoutingModule() {
      _classCallCheck(this, RecoverPasswordPageRoutingModule);
    };

    RecoverPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RecoverPasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/users/recover-password/recover-password.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/users/recover-password/recover-password.module.ts ***!
    \*******************************************************************/

  /*! exports provided: RecoverPasswordPageModule */

  /***/
  function srcAppUsersRecoverPasswordRecoverPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecoverPasswordPageModule", function () {
      return RecoverPasswordPageModule;
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


    var _recover_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./recover-password-routing.module */
    "./src/app/users/recover-password/recover-password-routing.module.ts");

    var RecoverPasswordPageModule = function RecoverPasswordPageModule() {
      _classCallCheck(this, RecoverPasswordPageModule);
    };

    RecoverPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _recover_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecoverPasswordPageRoutingModule"]],
      declarations: []
    })], RecoverPasswordPageModule);
    /***/
  }
}]);
//# sourceMappingURL=recover-password-recover-password-module-es5.js.map