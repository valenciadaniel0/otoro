function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/form/form.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/form/form.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginFormFormPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div id=\"container\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"ion-align-self-center\" col-8 offset=\"2\">\r\n          <img src=\"../../../assets/logo/otoro.png\" width=\"70%\" height=\"auto\" />\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col col-12>\r\n          <h4 class=\"no-margin-bottom\">Iniciar sesi&oacute;n</h4>\r\n          <small>Es genial verte de nuevo</small>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row id=\"form-container\">\r\n        <ion-col col-12>\r\n          <form [formGroup]=\"myForm\">\r\n            <div class=\"form-group\">\r\n              <label class=\"bold\">Correo electrónico</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control width-100\"\r\n                formControlName=\"email\"\r\n              />\r\n              <span *ngIf=\"controlHasError('email', 'required')\">\r\n                <strong class=\"error\">Campo requerido</strong>\r\n              </span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"bold\">Contraseña</label>\r\n              <input\r\n                type=\"password\"\r\n                class=\"form-control width-100\"\r\n                formControlName=\"password\"\r\n              />\r\n              <span *ngIf=\"controlHasError('password', 'required')\">\r\n                <strong class=\"error\">Campo requerido</strong>\r\n              </span>\r\n            </div>\r\n            <div class=\"display-flex\" id=\"btn-container\">\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"login()\"\r\n                class=\"margin-center\"\r\n              >\r\n                Ingresar\r\n              </ion-button>\r\n            </div>\r\n          </form>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col col-6>\r\n          <small>Olvid&eacute; mi contrase&ntilde;a</small>\r\n        </ion-col>\r\n        <ion-col col-6 class=\"align-text-right\">\r\n          <small>Registrarme</small>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/login/form/form.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/login/form/form.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginFormFormPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#btn-container,\n#form-container {\n  margin-top: 5%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vZm9ybS9DOlxcVXNlcnNcXGluZ2RtXFxwcm9qZWN0c1xcb3Rvcm9cXGZyb250L3NyY1xcYXBwXFxsb2dpblxcZm9ybVxcZm9ybS5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2Zvcm0vZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsY0FBYztBQ0NoQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2Zvcm0vZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnRuLWNvbnRhaW5lcixcclxuI2Zvcm0tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4iLCIjYnRuLWNvbnRhaW5lcixcbiNmb3JtLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/login/form/form.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/login/form/form.page.ts ***!
    \*****************************************/

  /*! exports provided: FormPage */

  /***/
  function srcAppLoginFormFormPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormPage", function () {
      return FormPage;
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


    var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login/form/login.service.ts");
    /* harmony import */


    var src_app_users_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/users/users.service */
    "./src/app/users/users.service.ts");

    var FormPage = /*#__PURE__*/function () {
      function FormPage(loginService, router, storage, usersService) {
        _classCallCheck(this, FormPage);

        this.loginService = loginService;
        this.router = router;
        this.storage = storage;
        this.usersService = usersService;
      }

      _createClass(FormPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.imageUrl = "../../assets/logo/otoro-logo.png";
          this.imageId = "top-image";
          this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("email", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("password", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
          this.myForm.controls["email"].setValue(null);
          this.myForm.controls["password"].setValue(null);
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
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          var controls = this.myForm.controls;

          if (this.myForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
              return controls[controlName].markAsTouched();
            });
            return;
          }

          var body = {
            email: controls["email"].value,
            password: controls["password"].value
          };
          this.loginService.run(body).toPromise().then(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var result, deviceToken, user;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      result = res.json();
                      _context.next = 3;
                      return this.storage.get("deviceToken");

                    case 3:
                      deviceToken = _context.sent;
                      this.storage.set("auth", result);
                      user = {
                        active: result.active,
                        deviceToken: deviceToken,
                        email: result.email,
                        id: result.id,
                        name: result.name,
                        roles: result.roles
                      };
                      this.updateUser(user, result.token);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }, function (err) {
            console.log(err);
            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser(body, token) {
          var _this2 = this;

          this.usersService.update(body, token).toPromise().then(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.router.navigate(["/dashboard"]);

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }, function (err) {
            console.log(err);
            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }]);

      return FormPage;
    }();

    FormPage.ctorParameters = function () {
      return [{
        type: _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: src_app_users_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]
      }];
    };

    FormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-form",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./form.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/form/form.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./form.page.scss */
      "./src/app/login/form/form.page.scss"))["default"]]
    })], FormPage);
    /***/
  },

  /***/
  "./src/app/login/form/login.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/login/form/login.service.ts ***!
    \*********************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppLoginFormLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
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

    var LoginService = /*#__PURE__*/function () {
      function LoginService(service) {
        _classCallCheck(this, LoginService);

        this.service = service;
      }

      _createClass(LoginService, [{
        key: "run",
        value: function run(body) {
          var url = "users/authenticate";
          return this.service.queryPostRegular(url, body);
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: src_app_core_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }];
    };

    LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
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


    var _form_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./form/form.page */
    "./src/app/login/form/form.page.ts");

    var routes = [{
      path: "",
      component: _form_form_page__WEBPACK_IMPORTED_MODULE_3__["FormPage"]
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };

    LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _form_form_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./form/form.page */
    "./src/app/login/form/form.page.ts");
    /* harmony import */


    var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../dashboard/dashboard.module */
    "./src/app/dashboard/dashboard.module.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardPageModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot()],
      declarations: [_form_form_page__WEBPACK_IMPORTED_MODULE_8__["FormPage"]],
      providers: [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"]]
    })], LoginModule);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map