function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list-general/posts-list-general.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list-general/posts-list-general.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostsPostsListGeneralPostsListGeneralPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-fab\r\n    vertical=\"bottom\"\r\n    horizontal=\"end\"\r\n    slot=\"fixed\"\r\n    (click)=\"goToPostCreation()\"\r\n  >\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <h4 class=\"centered-text\">Todas las publicaciones</h4>\r\n  <form [formGroup]=\"searchForm\">\r\n    <ion-item>\r\n      <input\r\n        name=\"query\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"Busca una ciudad\"\r\n        formControlName=\"queryControl\"\r\n        (keyup)=\"search()\"\r\n      />\r\n    </ion-item>\r\n  </form>\r\n  <ion-row class=\"top-tab-container\">\r\n    <ion-col (click)=\"changeActiveTab(1)\"><span>Envios</span></ion-col>\r\n    <ion-col (click)=\"changeActiveTab(2)\"><span>Ventas</span></ion-col>\r\n  </ion-row>\r\n  <div class=\"posts-list\" *ngIf=\"shippings.length > 0 && activeTab === 1\">\r\n    <app-post-card\r\n      *ngFor=\"let shipping of shippings\"\r\n      imageSrc=\"http://cinnco.co/dist/img/apple-iphone.png\"\r\n      [title]=\"shipping.title\"\r\n      [date]=\"shipping.date\"\r\n      [description]=\"shipping.description\"\r\n      [origin]=\"shipping.origin\"\r\n      [user]=\"shipping.user\"\r\n      [openCommentsModal]=\"openCommentsModal\"\r\n      [openDetailsModal]=\"openDetailsModal\"\r\n      [id]=\"shipping.id\"\r\n      [destination]=\"shipping.destination\"\r\n      [post]=\"shipping\"\r\n      type=\"1\"\r\n    ></app-post-card>\r\n  </div>\r\n  <div class=\"posts-list\" *ngIf=\"sells.length > 0 && activeTab === 2\">\r\n    <app-post-card\r\n      *ngFor=\"let sell of sells\"\r\n      imageSrc=\"http://cinnco.co/dist/img/apple-iphone.png\"\r\n      [title]=\"sell.title\"\r\n      [price]=\"sell.price\"\r\n      [user]=\"sell.user\"\r\n      [description]=\"sell.description\"\r\n      [openCommentsModal]=\"openCommentsModal\"\r\n      [openDetailsModal]=\"openDetailsModal\"\r\n      [origin]=\"sell.origin\"\r\n      [post]=\"sell\"\r\n      [id]=\"sell.id\"\r\n      type=\"2\"\r\n    ></app-post-card>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list/posts-list.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list/posts-list.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostsPostsListPostsListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-fab\r\n    vertical=\"bottom\"\r\n    horizontal=\"end\"\r\n    slot=\"fixed\"\r\n    (click)=\"goToPostCreation()\"\r\n  >\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <h4 class=\"centered-text\">{{title}}</h4>\r\n  <ion-row class=\"top-tab-container\">\r\n    <ion-col (click)=\"changeActiveTab(1)\"><span>Envios</span></ion-col>\r\n    <ion-col (click)=\"changeActiveTab(2)\"><span>Ventas</span></ion-col>\r\n  </ion-row>\r\n  <div class=\"posts-list\" *ngIf=\"shippings.length > 0 && activeTab === 1\">\r\n    <app-post-card\r\n      *ngFor=\"let shipping of shippings\"\r\n      imageSrc=\"http://cinnco.co/dist/img/apple-iphone.png\"\r\n      [title]=\"shipping.title\"\r\n      [date]=\"shipping.date\"\r\n      [description]=\"shipping.description\"\r\n      [origin]=\"shipping.origin\"\r\n      [user]=\"shipping.user\"\r\n      [openCommentsModal]=\"openCommentsModal\"\r\n      [openDetailsModal]=\"openDetailsModal\"\r\n      [id]=\"shipping.id\"\r\n      [destination]=\"shipping.destination\"\r\n      [post]=\"shipping\"\r\n      type=\"1\"\r\n    ></app-post-card>\r\n  </div>\r\n  <div class=\"posts-list\" *ngIf=\"sells.length > 0 && activeTab === 2\">\r\n    <app-post-card\r\n      *ngFor=\"let sell of sells\"\r\n      imageSrc=\"http://cinnco.co/dist/img/apple-iphone.png\"\r\n      [title]=\"sell.title\"\r\n      [price]=\"sell.price\"\r\n      [user]=\"sell.user\"\r\n      [description]=\"sell.description\"\r\n      [openCommentsModal]=\"openCommentsModal\"\r\n      [openDetailsModal]=\"openDetailsModal\"\r\n      [origin]=\"sell.origin\"\r\n      [post]=\"sell\"\r\n      [id]=\"sell.id\"\r\n      type=\"2\"\r\n    ></app-post-card>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/sell-form/sell-form.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/sell-form/sell-form.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostsSellFormSellFormPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n    <h4 class=\"centered-text\">Que quieres publicar?</h4>\r\n    <ion-row id=\"form-container\">\r\n      <ion-slides>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo1\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(1)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(1)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo2\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(2)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(2)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo3\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(3)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(3)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      <ion-col col-12>\r\n        <form [formGroup]=\"sellForm\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">T&iacute;tulo</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"title\"\r\n            />\r\n            <span *ngIf=\"controlHasError('title', 'required')\">\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Descripci&oacute;n</label>\r\n            <textarea\r\n              class=\"form-control width-100\"\r\n              formControlName=\"description\"\r\n            ></textarea>\r\n            <span *ngIf=\"controlHasError('description', 'required')\">\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Precio</label>\r\n            <input\r\n              class=\"form-control width-100\"\r\n              formControlName=\"price\"\r\n              type=\"number\"\r\n            />\r\n            <span *ngIf=\"controlHasError('price', 'required')\">\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Ubicaci&oacute;n</label>\r\n            <ion-item (click)=\"openOriginModal()\">\r\n              <span *ngIf=\"!origin\">Selecciona una ubicaci&oacute;n</span>\r\n              <span *ngIf=\"origin\">{{origin.name}}</span>\r\n            </ion-item>\r\n            <input type=\"text\" class=\"display-none\" formControlName=\"origin\" />\r\n            <span *ngIf=\"controlHasError('origin', 'required')\">\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button color=\"primary\" (click)=\"saveSell()\" class=\"width-100\">\r\n          Guardar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button\r\n          color=\"danger\"\r\n          (click)=\"goBackToDashboard()\"\r\n          class=\"width-100\"\r\n        >\r\n          Cancelar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <ion-grid id=\"tabs-container\">\r\n    <ion-row>\r\n      <ion-col (click)=\"goToShippingForm()\" col-6 class=\"centered-text\">\r\n        <ion-icon name=\"send\"></ion-icon>\r\n        <ion-label>Envio</ion-label>\r\n      </ion-col>\r\n      <ion-col col-6 class=\"centered-text\">\r\n        <ion-icon name=\"pricetag\"></ion-icon>\r\n        <ion-label>Venta</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/shipping-form/shipping-form.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/shipping-form/shipping-form.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostsShippingFormShippingFormPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n    <h4 class=\"centered-text\">Que quieres publicar?</h4>\r\n    <ion-row id=\"form-container\">\r\n      <ion-slides>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo1\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(1)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(1)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo2\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(2)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(2)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo3\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(3)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(3)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      <ion-col col-12>\r\n        <form [formGroup]=\"shippingForm\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">T&iacute;tulo</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"title\"\r\n            />\r\n            <span *ngIf=\"controlHasError('title', 'required')\">\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Descripci&oacute;n</label>\r\n            <textarea\r\n              class=\"form-control width-100\"\r\n              formControlName=\"description\"\r\n            ></textarea>\r\n            <span *ngIf=\"controlHasError('description', 'required')\">\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <ion-item>\r\n              <ion-label class=\"bold\">Selecciona fecha</ion-label>\r\n              <ion-datetime\r\n                id=\"dynamicDisabled\"\r\n                displayFormat=\"MMMM DD YYYY\"\r\n                value=\"1994-12-15\"\r\n                formControlName=\"date\"\r\n              ></ion-datetime>\r\n            </ion-item>\r\n            <span *ngIf=\"controlHasError('date', 'required')\">\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Origen del envio</label>\r\n            <ion-item (click)=\"openOriginModal()\">\r\n              <span *ngIf=\"!origin\">Selecciona un origen</span>\r\n              <span *ngIf=\"origin\">{{origin.name}}</span>\r\n            </ion-item>\r\n            <input type=\"text\" class=\"display-none\" formControlName=\"origin\" />\r\n            <span *ngIf=\"controlHasError('origin', 'required')\">\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Origen del destino</label>\r\n            <ion-item (click)=\"openDestinationModal()\">\r\n              <span *ngIf=\"!destination\">Selecciona un destino</span>\r\n              <span *ngIf=\"destination\">{{destination.name}}</span>\r\n            </ion-item>\r\n            <input\r\n              type=\"text\"\r\n              class=\"display-none\"\r\n              formControlName=\"destination\"\r\n              display=\"none\"\r\n            />\r\n            <span *ngIf=\"controlHasError('destination', 'required')\">\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button color=\"primary\" (click)=\"saveShipping()\" class=\"width-100\">\r\n          Guardar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button\r\n          color=\"danger\"\r\n          (click)=\"goBackToDashboard()\"\r\n          class=\"width-100\"\r\n        >\r\n          Cancelar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <ion-grid id=\"tabs-container\">\r\n    <ion-row>\r\n      <ion-col col-6 class=\"centered-text\">\r\n        <ion-icon name=\"send\"></ion-icon>\r\n        <ion-label>Envio</ion-label>\r\n      </ion-col>\r\n      <ion-col (click)=\"goToSellForm()\" col-6 class=\"centered-text\">\r\n        <ion-icon name=\"pricetag\"></ion-icon>\r\n        <ion-label>Venta</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/posts/post.service.ts":
  /*!***************************************!*\
    !*** ./src/app/posts/post.service.ts ***!
    \***************************************/

  /*! exports provided: PostService */

  /***/
  function srcAppPostsPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostService", function () {
      return PostService;
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


    var _core_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/services/rest.service */
    "./src/app/core/services/rest.service.ts");

    var PostService = /*#__PURE__*/function () {
      function PostService(service) {
        _classCallCheck(this, PostService);

        this.service = service;
      }

      _createClass(PostService, [{
        key: "save",
        value: function save(body, token) {
          var url = "posts";
          return this.service.queryPost(url, body, token);
        }
      }, {
        key: "getByType",
        value: function getByType(auth, type) {
          var url = "posts/get-by-type/".concat(type, "/").concat(auth.id);
          return this.service.queryGet(url, auth.token);
        }
      }, {
        key: "search",
        value: function search(auth, query, type) {
          var url = "posts/search/".concat(type).concat(undefined != query && null != query && "" != query ? "?query=".concat(query) : "");
          return this.service.queryGet(url, auth.token);
        }
      }]);

      return PostService;
    }();

    PostService.ctorParameters = function () {
      return [{
        type: _core_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }];
    };

    PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], PostService);
    /***/
  },

  /***/
  "./src/app/posts/posts-list-general/posts-list-general-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/posts/posts-list-general/posts-list-general-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: PostsListGeneralPageRoutingModule */

  /***/
  function srcAppPostsPostsListGeneralPostsListGeneralRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsListGeneralPageRoutingModule", function () {
      return PostsListGeneralPageRoutingModule;
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


    var _posts_list_general_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./posts-list-general.page */
    "./src/app/posts/posts-list-general/posts-list-general.page.ts");

    var routes = [{
      path: '',
      component: _posts_list_general_page__WEBPACK_IMPORTED_MODULE_3__["PostsListGeneralPage"]
    }];

    var PostsListGeneralPageRoutingModule = function PostsListGeneralPageRoutingModule() {
      _classCallCheck(this, PostsListGeneralPageRoutingModule);
    };

    PostsListGeneralPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PostsListGeneralPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/posts/posts-list-general/posts-list-general.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/posts/posts-list-general/posts-list-general.module.ts ***!
    \***********************************************************************/

  /*! exports provided: PostsListGeneralPageModule */

  /***/
  function srcAppPostsPostsListGeneralPostsListGeneralModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsListGeneralPageModule", function () {
      return PostsListGeneralPageModule;
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


    var _posts_list_general_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./posts-list-general-routing.module */
    "./src/app/posts/posts-list-general/posts-list-general-routing.module.ts");
    /* harmony import */


    var _posts_list_general_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./posts-list-general.page */
    "./src/app/posts/posts-list-general/posts-list-general.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var PostsListGeneralPageModule = function PostsListGeneralPageModule() {
      _classCallCheck(this, PostsListGeneralPageModule);
    };

    PostsListGeneralPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _posts_list_general_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostsListGeneralPageRoutingModule"]],
      declarations: [_posts_list_general_page__WEBPACK_IMPORTED_MODULE_6__["PostsListGeneralPage"]]
    })], PostsListGeneralPageModule);
    /***/
  },

  /***/
  "./src/app/posts/posts-list-general/posts-list-general.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/posts/posts-list-general/posts-list-general.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostsPostsListGeneralPostsListGeneralPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWxpc3QtZ2VuZXJhbC9wb3N0cy1saXN0LWdlbmVyYWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/posts/posts-list-general/posts-list-general.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/posts/posts-list-general/posts-list-general.page.ts ***!
    \*********************************************************************/

  /*! exports provided: PostsListGeneralPage */

  /***/
  function srcAppPostsPostsListGeneralPostsListGeneralPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsListGeneralPage", function () {
      return PostsListGeneralPage;
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


    var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../post.service */
    "./src/app/posts/post.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/comments/comments.component */
    "./src/app/shared/comments/comments.component.ts");
    /* harmony import */


    var src_app_shared_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/post-details/post-details.component */
    "./src/app/shared/post-details/post-details.component.ts");

    var PostsListGeneralPage = /*#__PURE__*/function () {
      function PostsListGeneralPage(route, postService, storage, modalController) {
        _classCallCheck(this, PostsListGeneralPage);

        this.route = route;
        this.postService = postService;
        this.storage = storage;
        this.modalController = modalController;
        this.activeTab = 1;
        this.sells = [];
        this.shippings = [];
      }

      _createClass(PostsListGeneralPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.storage.get("auth").then(function (auth) {
            _this.auth = auth;

            _this.getShippings();
          });
          this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            queryControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("queryControl", [])
          });
          this.searchForm.controls["queryControl"].setValue(null);

          this.openCommentsModal = function (postId) {
            _this.openCommentsModalImplementation(postId);
          };

          this.openDetailsModal = function (post) {
            _this.openDetailsModalImplementation(post);
          };
        }
      }, {
        key: "openCommentsModalImplementation",
        value: function openCommentsModalImplementation(postId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: src_app_shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_7__["CommentsComponent"],
                      componentProps: {
                        postId: postId
                      },
                      cssClass: "my-custom-class"
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present().then(function () {});

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "openDetailsModalImplementation",
        value: function openDetailsModalImplementation(post) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: src_app_shared_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_8__["PostDetailsComponent"],
                      componentProps: {
                        post: post
                      },
                      cssClass: "my-custom-class"
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present().then(function () {});

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "changeActiveTab",
        value: function changeActiveTab(tabNumber) {
          this.activeTab = tabNumber;

          if (this.activeTab === 1) {
            this.getShippings();
          } else {
            this.getSells();
          }
        }
      }, {
        key: "search",
        value: function search() {
          var controls = this.searchForm.controls;
          this.query = controls["queryControl"].value;

          if (this.query && this.query.length > 3) {
            if (this.activeTab === 1) {
              this.getShippings();
              this.sells = [];
            } else {
              this.getSells();
              this.shippings = [];
            }
          } else {
            this.shippings = [];
            this.sells = [];

            if (this.activeTab == 1 && this.query == "") {
              this.getShippings();
            } else if (this.query == "") {
              this.getSells();
            }
          }
        }
      }, {
        key: "getShippings",
        value: function getShippings() {
          var _this2 = this;

          this.postService.search(this.auth, this.query, 1).toPromise().then(function (res) {
            var result = res.json();
            _this2.shippings = result;
          }, function (err) {
            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }, {
        key: "getSells",
        value: function getSells() {
          var _this3 = this;

          this.postService.search(this.auth, this.query, 2).toPromise().then(function (res) {
            var result = res.json();
            _this3.sells = result;
          }, function (err) {
            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }]);

      return PostsListGeneralPage;
    }();

    PostsListGeneralPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    PostsListGeneralPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-posts-list-general",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./posts-list-general.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list-general/posts-list-general.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./posts-list-general.page.scss */
      "./src/app/posts/posts-list-general/posts-list-general.page.scss"))["default"]]
    })], PostsListGeneralPage);
    /***/
  },

  /***/
  "./src/app/posts/posts-list/posts-list-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/posts/posts-list/posts-list-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: PostsListPageRoutingModule */

  /***/
  function srcAppPostsPostsListPostsListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsListPageRoutingModule", function () {
      return PostsListPageRoutingModule;
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


    var _posts_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./posts-list.page */
    "./src/app/posts/posts-list/posts-list.page.ts");

    var routes = [{
      path: '',
      component: _posts_list_page__WEBPACK_IMPORTED_MODULE_3__["PostsListPage"]
    }];

    var PostsListPageRoutingModule = function PostsListPageRoutingModule() {
      _classCallCheck(this, PostsListPageRoutingModule);
    };

    PostsListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PostsListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/posts/posts-list/posts-list.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/posts/posts-list/posts-list.module.ts ***!
    \*******************************************************/

  /*! exports provided: PostsListPageModule */

  /***/
  function srcAppPostsPostsListPostsListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsListPageModule", function () {
      return PostsListPageModule;
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


    var _posts_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./posts-list-routing.module */
    "./src/app/posts/posts-list/posts-list-routing.module.ts");
    /* harmony import */


    var _posts_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./posts-list.page */
    "./src/app/posts/posts-list/posts-list.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var PostsListPageModule = function PostsListPageModule() {
      _classCallCheck(this, PostsListPageModule);
    };

    PostsListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _posts_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostsListPageRoutingModule"]],
      declarations: [_posts_list_page__WEBPACK_IMPORTED_MODULE_6__["PostsListPage"]]
    })], PostsListPageModule);
    /***/
  },

  /***/
  "./src/app/posts/posts-list/posts-list.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/posts/posts-list/posts-list.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostsPostsListPostsListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#tabs-container {\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdHMtbGlzdC9DOlxcVXNlcnNcXGluZ2RtXFxwcm9qZWN0c1xcb3Rvcm9cXGZyb250L3NyY1xcYXBwXFxwb3N0c1xccG9zdHMtbGlzdFxccG9zdHMtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWxpc3QvcG9zdHMtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFdBQVc7QUNDYiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWxpc3QvcG9zdHMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGFicy1jb250YWluZXIge1xyXG4gIGJvdHRvbTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwiI3RhYnMtY29udGFpbmVyIHtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/posts/posts-list/posts-list.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/posts/posts-list/posts-list.page.ts ***!
    \*****************************************************/

  /*! exports provided: PostsListPage */

  /***/
  function srcAppPostsPostsListPostsListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsListPage", function () {
      return PostsListPage;
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


    var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../post.service */
    "./src/app/posts/post.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_shared_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/post-details/post-details.component */
    "./src/app/shared/post-details/post-details.component.ts");
    /* harmony import */


    var src_app_shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/comments/comments.component */
    "./src/app/shared/comments/comments.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var PostsListPage = /*#__PURE__*/function () {
      function PostsListPage(route, postService, storage, modalController) {
        _classCallCheck(this, PostsListPage);

        this.route = route;
        this.postService = postService;
        this.storage = storage;
        this.modalController = modalController;
        this.activeTab = 1;
        this.sells = [];
        this.shippings = [];
        this.title = "Todas las publicaciones";
        this.userId = 0;
      }

      _createClass(PostsListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.sub = this.route.params.subscribe(function (params) {
                      _this4.userId = params["user-id"];

                      if (_this4.userId !== 0) {
                        _this4.title = "Aquí esta lo que has publicado";
                      }

                      _this4.storage.get("auth").then(function (auth) {
                        _this4.auth = auth;

                        _this4.getShippings();
                      });
                    });

                    this.openCommentsModal = function (postId) {
                      _this4.openCommentsModalImplementation(postId);
                    };

                    this.openDetailsModal = function (post) {
                      _this4.openDetailsModalImplementation(post);
                    };

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "openCommentsModalImplementation",
        value: function openCommentsModalImplementation(postId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.create({
                      component: src_app_shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_6__["CommentsComponent"],
                      componentProps: {
                        postId: postId
                      },
                      cssClass: "my-custom-class"
                    });

                  case 2:
                    modal = _context4.sent;
                    _context4.next = 5;
                    return modal.present().then(function () {});

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "openDetailsModalImplementation",
        value: function openDetailsModalImplementation(post) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: src_app_shared_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_5__["PostDetailsComponent"],
                      componentProps: {
                        post: post
                      },
                      cssClass: "my-custom-class"
                    });

                  case 2:
                    modal = _context5.sent;
                    _context5.next = 5;
                    return modal.present().then(function () {});

                  case 5:
                    return _context5.abrupt("return", _context5.sent);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "changeActiveTab",
        value: function changeActiveTab(tabNumber) {
          this.activeTab = tabNumber;

          if (this.activeTab === 1) {
            this.getShippings();
          } else {
            this.getSells();
          }
        }
      }, {
        key: "getShippings",
        value: function getShippings() {
          var _this5 = this;

          this.postService.getByType(this.auth, 1).toPromise().then(function (res) {
            var result = res.json();
            _this5.shippings = result;
          }, function (err) {
            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }, {
        key: "getSells",
        value: function getSells() {
          var _this6 = this;

          this.postService.getByType(this.auth, 2).toPromise().then(function (res) {
            var result = res.json();
            _this6.sells = result;
          }, function (err) {
            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }]);

      return PostsListPage;
    }();

    PostsListPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }];
    };

    PostsListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-posts-list",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./posts-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list/posts-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./posts-list.page.scss */
      "./src/app/posts/posts-list/posts-list.page.scss"))["default"]]
    })], PostsListPage);
    /***/
  },

  /***/
  "./src/app/posts/posts-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/posts/posts-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: PostsRoutingModule */

  /***/
  function srcAppPostsPostsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsRoutingModule", function () {
      return PostsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var routes = [{
      path: "create-shipping",
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./shipping-form/shipping-form.module */
        "./src/app/posts/shipping-form/shipping-form.module.ts")).then(function (m) {
          return m.ShippingFormPageModule;
        });
      }
    }, {
      path: "create-sell",
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./sell-form/sell-form.module */
        "./src/app/posts/sell-form/sell-form.module.ts")).then(function (m) {
          return m.SellFormPageModule;
        });
      }
    }, {
      path: "list/:user-id",
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./posts-list/posts-list.module */
        "./src/app/posts/posts-list/posts-list.module.ts")).then(function (m) {
          return m.PostsListPageModule;
        });
      }
    }, {
      path: "posts-list-general",
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./posts-list-general/posts-list-general.module */
        "./src/app/posts/posts-list-general/posts-list-general.module.ts")).then(function (m) {
          return m.PostsListGeneralPageModule;
        });
      }
    }];

    var PostsRoutingModule = function PostsRoutingModule() {
      _classCallCheck(this, PostsRoutingModule);
    };

    PostsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], PostsRoutingModule);
    /***/
  },

  /***/
  "./src/app/posts/posts.module.ts":
  /*!***************************************!*\
    !*** ./src/app/posts/posts.module.ts ***!
    \***************************************/

  /*! exports provided: PostsModule */

  /***/
  function srcAppPostsPostsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsModule", function () {
      return PostsModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _posts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./posts-routing.module */
    "./src/app/posts/posts-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _sell_form_sell_form_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sell-form/sell-form.module */
    "./src/app/posts/sell-form/sell-form.module.ts");
    /* harmony import */


    var _shipping_form_shipping_form_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shipping-form/shipping-form.module */
    "./src/app/posts/shipping-form/shipping-form.module.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _posts_list_posts_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./posts-list/posts-list.module */
    "./src/app/posts/posts-list/posts-list.module.ts");
    /* harmony import */


    var _posts_list_general_posts_list_general_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./posts-list-general/posts-list-general.module */
    "./src/app/posts/posts-list-general/posts-list-general.module.ts");

    var PostsModule = function PostsModule() {
      _classCallCheck(this, PostsModule);
    };

    PostsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _posts_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostsRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _shipping_form_shipping_form_module__WEBPACK_IMPORTED_MODULE_9__["ShippingFormPageModule"], _sell_form_sell_form_module__WEBPACK_IMPORTED_MODULE_8__["SellFormPageModule"], _posts_list_posts_list_module__WEBPACK_IMPORTED_MODULE_11__["PostsListPageModule"], _posts_list_general_posts_list_general_module__WEBPACK_IMPORTED_MODULE_12__["PostsListGeneralPageModule"]],
      providers: [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"]],
      exports: []
    })], PostsModule);
    /***/
  },

  /***/
  "./src/app/posts/sell-form/sell-form-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/posts/sell-form/sell-form-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: SellFormPageRoutingModule */

  /***/
  function srcAppPostsSellFormSellFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellFormPageRoutingModule", function () {
      return SellFormPageRoutingModule;
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


    var _sell_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sell-form.page */
    "./src/app/posts/sell-form/sell-form.page.ts");

    var routes = [{
      path: '',
      component: _sell_form_page__WEBPACK_IMPORTED_MODULE_3__["SellFormPage"]
    }];

    var SellFormPageRoutingModule = function SellFormPageRoutingModule() {
      _classCallCheck(this, SellFormPageRoutingModule);
    };

    SellFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SellFormPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/posts/sell-form/sell-form.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/posts/sell-form/sell-form.module.ts ***!
    \*****************************************************/

  /*! exports provided: SellFormPageModule */

  /***/
  function srcAppPostsSellFormSellFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellFormPageModule", function () {
      return SellFormPageModule;
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


    var _sell_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sell-form-routing.module */
    "./src/app/posts/sell-form/sell-form-routing.module.ts");
    /* harmony import */


    var _sell_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sell-form.page */
    "./src/app/posts/sell-form/sell-form.page.ts");

    var SellFormPageModule = function SellFormPageModule() {
      _classCallCheck(this, SellFormPageModule);
    };

    SellFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sell_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellFormPageRoutingModule"]],
      declarations: [_sell_form_page__WEBPACK_IMPORTED_MODULE_6__["SellFormPage"]]
    })], SellFormPageModule);
    /***/
  },

  /***/
  "./src/app/posts/sell-form/sell-form.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/posts/sell-form/sell-form.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostsSellFormSellFormPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3NlbGwtZm9ybS9zZWxsLWZvcm0ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/posts/sell-form/sell-form.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/posts/sell-form/sell-form.page.ts ***!
    \***************************************************/

  /*! exports provided: SellFormPage */

  /***/
  function srcAppPostsSellFormSellFormPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellFormPage", function () {
      return SellFormPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../post.service */
    "./src/app/posts/post.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/select-city/select-city.component */
    "./src/app/shared/select-city/select-city.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var SellFormPage = /*#__PURE__*/function () {
      function SellFormPage(router, postService, storage, modalController, sanitizer, loadingController) {
        _classCallCheck(this, SellFormPage);

        this.router = router;
        this.postService = postService;
        this.storage = storage;
        this.modalController = modalController;
        this.sanitizer = sanitizer;
        this.loadingController = loadingController;
      }

      _createClass(SellFormPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.formData = new FormData();
          this.activeTab = 2;
          this.storage.get("auth").then(function (auth) {
            _this7.auth = auth;
          });
          this.sellForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("title", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("description", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("price", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            origin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("origin", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          });
          this.sellForm.controls["title"].setValue(null);
          this.sellForm.controls["description"].setValue(null);
          this.sellForm.controls["price"].setValue(null);
          this.sellForm.controls["origin"].setValue(null);
        }
      }, {
        key: "selectPhoto",
        value: function selectPhoto(slide) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var ab;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Photos, slide);

                  case 2:
                    ab = _context6.sent;
                    _context6.next = 5;
                    return this.uploadImage(ab, slide);

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "takePicture",
        value: function takePicture(slide) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var ab;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Camera, slide);

                  case 2:
                    ab = _context7.sent;
                    _context7.next = 5;
                    return this.uploadImage(ab, slide);

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getPhoto",
        value: function getPhoto(source, slide) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var image, photo;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"].Camera.getPhoto({
                      quality: 90,
                      allowEditing: false,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraResultType"].Uri,
                      source: source
                    });

                  case 2:
                    image = _context8.sent;
                    photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);

                    if (slide === 1) {
                      this.photo1 = photo;
                    } else if (slide === 2) {
                      this.photo2 = photo;
                    } else {
                      this.photo3 = photo;
                    }

                    return _context8.abrupt("return", image.webPath);

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(webPath, slide) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var blob;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.loadingController.create({
                      message: "Cargando..."
                    });

                  case 2:
                    this.loading = _context9.sent;
                    _context9.next = 5;
                    return this.loading.present();

                  case 5:
                    _context9.next = 7;
                    return fetch(webPath).then(function (r) {
                      return r.blob();
                    });

                  case 7:
                    blob = _context9.sent;

                    if (slide === 1) {
                      this.formData.append("image1", blob, "profile-picture1.jpg");
                    } else if (slide === 2) {
                      this.formData.append("image2", blob, "profile-picture2.jpg");
                    } else {
                      this.formData.append("image3", blob, "profile-picture3.jpg");
                    }

                    _context9.next = 11;
                    return this.loading.dismiss();

                  case 11:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "openOriginModal",
        value: function openOriginModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this8 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.modalController.create({
                      component: src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__["SelectCityComponent"],
                      cssClass: "my-custom-class"
                    });

                  case 2:
                    modal = _context10.sent;
                    _context10.next = 5;
                    return modal.present().then(function () {
                      modal.onWillDismiss().then(function (response) {
                        _this8.origin = response.data.city;

                        if (_this8.origin) {
                          _this8.sellForm.controls["origin"].setValue(_this8.origin.name);
                        } else {
                          _this8.sellForm.controls["origin"].setValue(null);
                        }
                      });
                    });

                  case 5:
                    return _context10.abrupt("return", _context10.sent);

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "saveSell",
        value: function saveSell() {
          var controls = this.sellForm.controls;

          if (this.sellForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
              return controls[controlName].markAsTouched();
            });
            return;
          }

          var body = {
            type: 2,
            image: "",
            title: controls["title"].value,
            description: controls["description"].value,
            price: controls["price"].value,
            origin: this.origin,
            user: {
              id: this.auth.id
            }
          };
          this.formData.append("postCommand", new Blob([JSON.stringify(body)], {
            type: "application/json"
          }));
          this.postService.save(this.formData, this.auth.token).toPromise().then(function (res) {
            //const result = res.json();
            console.log(res);
          }, function (err) {
            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }, {
        key: "goBackToDashboard",
        value: function goBackToDashboard() {
          this.router.navigate(["/dashboard"]);
        }
      }, {
        key: "goToShippingForm",
        value: function goToShippingForm() {
          if (this.activeTab !== 1) {
            this.router.navigate(["posts/create-shipping"]);
          }
        }
      }, {
        key: "controlHasError",
        value: function controlHasError(controlName, validationType) {
          var control = this.sellForm.controls[controlName];

          if (!control) {
            return false;
          }

          var result = control.hasError(validationType) && (control.dirty || control.touched);
          return result;
        }
      }]);

      return SellFormPage;
    }();

    SellFormPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }];
    };

    SellFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sell-form",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sell-form.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/sell-form/sell-form.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sell-form.page.scss */
      "./src/app/posts/sell-form/sell-form.page.scss"))["default"]]
    })], SellFormPage);
    /***/
  },

  /***/
  "./src/app/posts/shipping-form/shipping-form-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/posts/shipping-form/shipping-form-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ShippingFormPageRoutingModule */

  /***/
  function srcAppPostsShippingFormShippingFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShippingFormPageRoutingModule", function () {
      return ShippingFormPageRoutingModule;
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


    var _shipping_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shipping-form.page */
    "./src/app/posts/shipping-form/shipping-form.page.ts");

    var routes = [{
      path: '',
      component: _shipping_form_page__WEBPACK_IMPORTED_MODULE_3__["ShippingFormPage"]
    }];

    var ShippingFormPageRoutingModule = function ShippingFormPageRoutingModule() {
      _classCallCheck(this, ShippingFormPageRoutingModule);
    };

    ShippingFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ShippingFormPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/posts/shipping-form/shipping-form.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/posts/shipping-form/shipping-form.module.ts ***!
    \*************************************************************/

  /*! exports provided: ShippingFormPageModule */

  /***/
  function srcAppPostsShippingFormShippingFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShippingFormPageModule", function () {
      return ShippingFormPageModule;
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


    var _shipping_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shipping-form-routing.module */
    "./src/app/posts/shipping-form/shipping-form-routing.module.ts");
    /* harmony import */


    var _shipping_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shipping-form.page */
    "./src/app/posts/shipping-form/shipping-form.page.ts");

    var ShippingFormPageModule = function ShippingFormPageModule() {
      _classCallCheck(this, ShippingFormPageModule);
    };

    ShippingFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shipping_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShippingFormPageRoutingModule"]],
      declarations: [_shipping_form_page__WEBPACK_IMPORTED_MODULE_6__["ShippingFormPage"]],
      providers: [],
      exports: []
    })], ShippingFormPageModule);
    /***/
  },

  /***/
  "./src/app/posts/shipping-form/shipping-form.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/posts/shipping-form/shipping-form.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostsShippingFormShippingFormPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-group {\n  margin: 10px 0;\n}\n\n#tabs-container {\n  bottom: 0;\n  position: static;\n  width: 100%;\n}\n\n.image-container {\n  min-height: 200px;\n  background-size: cover;\n}\n\n@media (min-width: 0px) {\n  .images {\n    -moz-column-count: 2;\n         column-count: 2;\n  }\n}\n\n@media (min-width: 420px) {\n  .images {\n    -moz-column-count: 3;\n         column-count: 3;\n  }\n}\n\n@media (min-width: 720px) {\n  .images {\n    -moz-column-count: 4;\n         column-count: 4;\n  }\n}\n\n.one-image {\n  margin: 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvc2hpcHBpbmctZm9ybS9DOlxcVXNlcnNcXGluZ2RtXFxwcm9qZWN0c1xcb3Rvcm9cXGZyb250L3NyY1xcYXBwXFxwb3N0c1xcc2hpcHBpbmctZm9ybVxcc2hpcHBpbmctZm9ybS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bvc3RzL3NoaXBwaW5nLWZvcm0vc2hpcHBpbmctZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FDQ2hCOztBREVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixXQUFXO0FDQ2I7O0FERUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0FDQ3hCOztBREVBO0VBQ0U7SUFDRSxvQkFBZTtTQUFmLGVBQWU7RUNDakI7QUFDRjs7QURFQTtFQUNFO0lBQ0Usb0JBQWU7U0FBZixlQUFlO0VDQ2pCO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLG9CQUFlO1NBQWYsZUFBZTtFQ0NqQjtBQUNGOztBREVBO0VBQ0UsV0FBVztBQ0NiIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvc2hpcHBpbmctZm9ybS9zaGlwcGluZy1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuI3RhYnMtY29udGFpbmVyIHtcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDBweCkge1xyXG4gIC5pbWFnZXMge1xyXG4gICAgY29sdW1uLWNvdW50OiAyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQyMHB4KSB7XHJcbiAgLmltYWdlcyB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuICAuaW1hZ2VzIHtcclxuICAgIGNvbHVtbi1jb3VudDogNDtcclxuICB9XHJcbn1cclxuXHJcbi5vbmUtaW1hZ2Uge1xyXG4gIG1hcmdpbjogMnB4O1xyXG59XHJcbiIsIi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbiN0YWJzLWNvbnRhaW5lciB7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDBweCkge1xuICAuaW1hZ2VzIHtcbiAgICBjb2x1bW4tY291bnQ6IDI7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQyMHB4KSB7XG4gIC5pbWFnZXMge1xuICAgIGNvbHVtbi1jb3VudDogMztcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgLmltYWdlcyB7XG4gICAgY29sdW1uLWNvdW50OiA0O1xuICB9XG59XG5cbi5vbmUtaW1hZ2Uge1xuICBtYXJnaW46IDJweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/posts/shipping-form/shipping-form.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/posts/shipping-form/shipping-form.page.ts ***!
    \***********************************************************/

  /*! exports provided: ShippingFormPage */

  /***/
  function srcAppPostsShippingFormShippingFormPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShippingFormPage", function () {
      return ShippingFormPage;
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


    var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../post.service */
    "./src/app/posts/post.service.ts");
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


    var src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/select-city/select-city.component */
    "./src/app/shared/select-city/select-city.component.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var ShippingFormPage = /*#__PURE__*/function () {
      function ShippingFormPage(postService, router, storage, modalController, sanitizer, loadingController) {
        _classCallCheck(this, ShippingFormPage);

        this.postService = postService;
        this.router = router;
        this.storage = storage;
        this.modalController = modalController;
        this.sanitizer = sanitizer;
        this.loadingController = loadingController;
      }

      _createClass(ShippingFormPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.formData = new FormData();
          this.activeTab = 1;
          this.storage.get("auth").then(function (auth) {
            _this9.auth = auth;
          });
          this.shippingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("title", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("description", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("date", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            origin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("origin", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            destination: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("destination", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
          this.shippingForm.controls["title"].setValue(null);
          this.shippingForm.controls["description"].setValue(null);
          this.shippingForm.controls["date"].setValue(null);
          this.shippingForm.controls["origin"].setValue(null);
          this.shippingForm.controls["destination"].setValue(null);
        }
      }, {
        key: "selectPhoto",
        value: function selectPhoto(slide) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var ab;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraSource"].Photos, slide);

                  case 2:
                    ab = _context11.sent;
                    _context11.next = 5;
                    return this.uploadImage(ab, slide);

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "takePicture",
        value: function takePicture(slide) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var ab;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraSource"].Camera, slide);

                  case 2:
                    ab = _context12.sent;
                    _context12.next = 5;
                    return this.uploadImage(ab, slide);

                  case 5:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "getPhoto",
        value: function getPhoto(source, slide) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var image, photo;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Camera.getPhoto({
                      quality: 90,
                      allowEditing: false,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraResultType"].Uri,
                      source: source
                    });

                  case 2:
                    image = _context13.sent;
                    photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);

                    if (slide === 1) {
                      this.photo1 = photo;
                    } else if (slide === 2) {
                      this.photo2 = photo;
                    } else {
                      this.photo3 = photo;
                    }

                    return _context13.abrupt("return", image.webPath);

                  case 6:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(webPath, slide) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var blob;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.loadingController.create({
                      message: "Cargando..."
                    });

                  case 2:
                    this.loading = _context14.sent;
                    _context14.next = 5;
                    return this.loading.present();

                  case 5:
                    _context14.next = 7;
                    return fetch(webPath).then(function (r) {
                      return r.blob();
                    });

                  case 7:
                    blob = _context14.sent;

                    if (slide === 1) {
                      this.formData.append("image1", blob, "profile-picture1.jpg");
                    } else if (slide === 2) {
                      this.formData.append("image2", blob, "profile-picture2.jpg");
                    } else {
                      this.formData.append("image3", blob, "profile-picture3.jpg");
                    }

                    _context14.next = 11;
                    return this.loading.dismiss();

                  case 11:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "openOriginModal",
        value: function openOriginModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var _this10 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.modalController.create({
                      component: src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__["SelectCityComponent"],
                      cssClass: "my-custom-class"
                    });

                  case 2:
                    modal = _context15.sent;
                    _context15.next = 5;
                    return modal.present().then(function () {
                      modal.onWillDismiss().then(function (response) {
                        _this10.origin = response.data.city;

                        if (_this10.origin) {
                          _this10.shippingForm.controls["origin"].setValue(_this10.origin.name);
                        } else {
                          _this10.shippingForm.controls["origin"].setValue(null);
                        }
                      });
                    });

                  case 5:
                    return _context15.abrupt("return", _context15.sent);

                  case 6:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "openDestinationModal",
        value: function openDestinationModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _this11 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.modalController.create({
                      component: src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__["SelectCityComponent"],
                      cssClass: "my-custom-class"
                    });

                  case 2:
                    modal = _context16.sent;
                    _context16.next = 5;
                    return modal.present().then(function () {
                      modal.onWillDismiss().then(function (response) {
                        _this11.destination = response.data.city;

                        if (_this11.destination) {
                          _this11.shippingForm.controls["destination"].setValue(_this11.destination.name);
                        } else {
                          _this11.shippingForm.controls["destination"].setValue(null);
                        }
                      });
                    });

                  case 5:
                    return _context16.abrupt("return", _context16.sent);

                  case 6:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "saveShipping",
        value: function saveShipping() {
          var controls = this.shippingForm.controls;

          if (this.shippingForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
              return controls[controlName].markAsTouched();
            });
            return;
          }

          var body = {
            type: 1,
            title: controls["title"].value,
            description: controls["description"].value,
            date: controls["date"].value,
            origin: this.origin,
            destination: this.destination,
            user: {
              id: this.auth.id
            }
          };
          this.formData.append("postCommand", new Blob([JSON.stringify(body)], {
            type: "application/json"
          }));
          this.postService.save(this.formData, this.auth.token).toPromise().then(function (res) {
            //const result = res.json();
            console.log(res);
          }, function (err) {
            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }, {
        key: "goBackToDashboard",
        value: function goBackToDashboard() {
          this.router.navigate(["/dashboard"]);
        }
      }, {
        key: "goToSellForm",
        value: function goToSellForm() {
          if (this.activeTab !== 2) {
            this.router.navigate(["posts/create-sell"]);
          }
        }
      }, {
        key: "controlHasError",
        value: function controlHasError(controlName, validationType) {
          var control = this.shippingForm.controls[controlName];

          if (!control) {
            return false;
          }

          var result = control.hasError(validationType) && (control.dirty || control.touched);
          return result;
        }
      }]);

      return ShippingFormPage;
    }();

    ShippingFormPage.ctorParameters = function () {
      return [{
        type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }];
    };

    ShippingFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-shipping-form",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./shipping-form.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/shipping-form/shipping-form.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shipping-form.page.scss */
      "./src/app/posts/shipping-form/shipping-form.page.scss"))["default"]]
    })], ShippingFormPage);
    /***/
  }
}]);
//# sourceMappingURL=posts-posts-module-es5.js.map