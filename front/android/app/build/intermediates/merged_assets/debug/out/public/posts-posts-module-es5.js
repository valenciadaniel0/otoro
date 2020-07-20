function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-fab\r\n    vertical=\"bottom\"\r\n    horizontal=\"end\"\r\n    slot=\"fixed\"\r\n    (click)=\"goToPostCreation()\"\r\n  >\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <h4 class=\"centered-text\">Todas las publicaciones</h4>\r\n  <form [formGroup]=\"searchForm\">\r\n    <ion-item>\r\n      <input\r\n        name=\"query\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"Buscar...\"\r\n        formControlName=\"queryControl\"\r\n        (keyup)=\"search()\"\r\n      />\r\n    </ion-item>\r\n  </form>\r\n  <ion-row class=\"top-tab-container\">\r\n    <ion-col [class.active]=\"activeTab === 1\" (click)=\"changeActiveTab(1)\"\r\n      ><ion-icon name=\"send\"></ion-icon>&nbsp;<span>Envios</span></ion-col\r\n    >\r\n    <ion-col [class.active]=\"activeTab === 2\" (click)=\"changeActiveTab(2)\"\r\n      ><ion-icon name=\"pricetag\"></ion-icon>&nbsp;<span>Ventas</span></ion-col\r\n    >\r\n  </ion-row>\r\n  <div class=\"posts-list\" *ngIf=\"shippings.length > 0 && activeTab === 1\">\r\n    <app-post-card\r\n      *ngFor=\"let shipping of shippings\"\r\n      [imageSrc]=\"shipping.image1\"\r\n      [title]=\"shipping.title\"\r\n      [date]=\"shipping.date\"\r\n      [description]=\"shipping.description\"\r\n      [origin]=\"shipping.origin\"\r\n      [user]=\"shipping.user\"\r\n      [openCommentsModal]=\"openCommentsModal\"\r\n      [openDetailsModal]=\"openDetailsModal\"\r\n      [id]=\"shipping.id\"\r\n      [destination]=\"shipping.destination\"\r\n      [post]=\"shipping\"\r\n      [auth]=\"auth\"\r\n      type=\"1\"\r\n    ></app-post-card>\r\n  </div>\r\n  <div class=\"posts-list\" *ngIf=\"sells.length > 0 && activeTab === 2\">\r\n    <app-post-card\r\n      *ngFor=\"let sell of sells\"\r\n      [imageSrc]=\"sell.image1\"\r\n      [title]=\"sell.title\"\r\n      [price]=\"sell.price\"\r\n      [user]=\"sell.user\"\r\n      [description]=\"sell.description\"\r\n      [openCommentsModal]=\"openCommentsModal\"\r\n      [openDetailsModal]=\"openDetailsModal\"\r\n      [origin]=\"sell.origin\"\r\n      [post]=\"sell\"\r\n      [auth]=\"auth\"\r\n      [id]=\"sell.id\"\r\n      type=\"2\"\r\n    ></app-post-card>\r\n  </div>\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-fab\r\n    vertical=\"bottom\"\r\n    horizontal=\"end\"\r\n    slot=\"fixed\"\r\n    (click)=\"goToPostCreation()\"\r\n  >\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <h4 class=\"centered-text\">{{title}}</h4>\r\n  <ion-row class=\"top-tab-container\">\r\n    <ion-col [class.active]=\"activeTab===1\" (click)=\"changeActiveTab(1)\"\r\n      ><ion-icon name=\"send\"></ion-icon>&nbsp;<span>Envios</span></ion-col\r\n    >\r\n    <ion-col [class.active]=\"activeTab===2\" (click)=\"changeActiveTab(2)\"\r\n      ><ion-icon name=\"pricetag\"></ion-icon>&nbsp;<span>Ventas</span></ion-col\r\n    >\r\n  </ion-row>\r\n  <div class=\"posts-list\" *ngIf=\"shippings.length > 0 && activeTab === 1\">\r\n    <app-post-card\r\n      *ngFor=\"let shipping of shippings\"\r\n      [imageSrc]=\"shipping.image1\"\r\n      [title]=\"shipping.title\"\r\n      [date]=\"shipping.date\"\r\n      [description]=\"shipping.description\"\r\n      [origin]=\"shipping.origin\"\r\n      [user]=\"shipping.user\"\r\n      [openCommentsModal]=\"openCommentsModal\"\r\n      [openDetailsModal]=\"openDetailsModal\"\r\n      [id]=\"shipping.id\"\r\n      [destination]=\"shipping.destination\"\r\n      [auth]=\"auth\"\r\n      [post]=\"shipping\"\r\n      type=\"1\"\r\n    ></app-post-card>\r\n  </div>\r\n  <div class=\"posts-list\" *ngIf=\"sells.length > 0 && activeTab === 2\">\r\n    <app-post-card\r\n      *ngFor=\"let sell of sells\"\r\n      [imageSrc]=\"sell.image1\"\r\n      [title]=\"sell.title\"\r\n      [price]=\"sell.price\"\r\n      [user]=\"sell.user\"\r\n      [description]=\"sell.description\"\r\n      [openCommentsModal]=\"openCommentsModal\"\r\n      [openDetailsModal]=\"openDetailsModal\"\r\n      [origin]=\"sell.origin\"\r\n      [post]=\"sell\"\r\n      [auth]=\"auth\"\r\n      [id]=\"sell.id\"\r\n      type=\"2\"\r\n    ></app-post-card>\r\n  </div>\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n    <h4 class=\"centered-text\">{{title}}</h4>\r\n    <ion-row class=\"top-tab-container\">\r\n      <ion-col (click)=\"goToShippingForm()\"\r\n        ><ion-icon name=\"send\"></ion-icon>&nbsp;<span>Envio</span></ion-col\r\n      >\r\n      <ion-col class=\"active\"\r\n        ><ion-icon name=\"pricetag\"></ion-icon>&nbsp;<span>Venta</span></ion-col\r\n      >\r\n    </ion-row>\r\n    <ion-row id=\"form-container\">\r\n      <ion-slides>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo1\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(1)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(1)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo2\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(2)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(2)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo3\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(3)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(3)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      <ion-col col-12>\r\n        <form [formGroup]=\"sellForm\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">T&iacute;tulo</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('title', 'required')\"\r\n              formControlName=\"title\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('title', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Descripci&oacute;n</label>\r\n            <textarea\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('description', 'required')\"\r\n              formControlName=\"description\"\r\n            ></textarea>\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('description', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Precio</label>\r\n            <input\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('price', 'required')\"\r\n              formControlName=\"price\"\r\n              type=\"number\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('price', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Ubicaci&oacute;n</label>\r\n            <input\r\n              type=\"text\"\r\n              [class.error-input]=\"controlHasError('origin', 'required')\"\r\n              (click)=\"openOriginModal()\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"origin\"\r\n            />\r\n            <input type=\"text\" class=\"display-none\" formControlName=\"origin\" />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('origin', 'required')\"\r\n            >\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button color=\"primary\" (click)=\"saveSell()\" class=\"width-100\">\r\n          Guardar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button\r\n          color=\"danger\"\r\n          (click)=\"goBackToDashboard()\"\r\n          class=\"width-100\"\r\n        >\r\n          Cancelar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n    <h4 class=\"centered-text\">{{title}}</h4>\r\n    <ion-row class=\"top-tab-container\">\r\n      <ion-col class=\"active\"\r\n        ><ion-icon name=\"send\"></ion-icon>&nbsp;<span>Envio</span></ion-col\r\n      >\r\n      <ion-col (click)=\"goToSellForm()\"\r\n        ><ion-icon name=\"pricetag\"></ion-icon>&nbsp;<span>Venta</span></ion-col\r\n      >\r\n    </ion-row>\r\n    <ion-row id=\"form-container\">\r\n      <ion-slides>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo1\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(1)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(1)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo2\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(2)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(2)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo3\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(3)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(3)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      <ion-col col-12>\r\n        <form [formGroup]=\"shippingForm\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">T&iacute;tulo</label>\r\n            <input\r\n              type=\"text\"\r\n              [class.error-input]=\"controlHasError('title', 'required')\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"title\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('title', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Descripci&oacute;n</label>\r\n            <textarea\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('description', 'required')\"\r\n              formControlName=\"description\"\r\n            ></textarea>\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('description', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Fecha del envio</label>\r\n            <ion-item\r\n              class=\"form-control no-padding-left no-padding-right no-padding-top\"\r\n            >\r\n              <ion-datetime\r\n                id=\"dynamicDisabled\"\r\n                displayFormat=\"MMMM DD YYYY\"\r\n                value=\"1994-12-15\"\r\n                formControlName=\"date\"\r\n              ></ion-datetime>\r\n            </ion-item>\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('date', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Origen del envio</label>\r\n            <input\r\n              type=\"text\"\r\n              [class.error-input]=\"controlHasError('origin', 'required')\"\r\n              (click)=\"openOriginModal()\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"origin\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('origin', 'required')\"\r\n            >\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Destino del envio</label>\r\n            <input\r\n              type=\"text\"\r\n              [class.error-input]=\"controlHasError('destination', 'required')\"\r\n              (click)=\"openDestinationModal()\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"destination\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('destination', 'required')\"\r\n            >\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button color=\"primary\" (click)=\"saveShipping()\" class=\"width-100\">\r\n          Guardar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button\r\n          color=\"danger\"\r\n          (click)=\"goBackToDashboard()\"\r\n          class=\"width-100\"\r\n        >\r\n          Cancelar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n";
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
      function PostsListGeneralPage(route, router, postService, storage, modalController, loadingController) {
        _classCallCheck(this, PostsListGeneralPage);

        this.route = route;
        this.router = router;
        this.postService = postService;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingController = loadingController;
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
            var _this2 = this;

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
                    return modal.present().then(function () {
                      modal.onWillDismiss().then(function (response) {
                        var postId = response.data.postId;
                        var postType = response.data.postType;

                        if (postId && postType) {
                          if (postType === 1) {
                            _this2.router.navigate(["posts/create-shipping/".concat(postId)]);
                          } else {
                            _this2.router.navigate(["posts/create-sell/".concat(postId)]);
                          }
                        }
                      });
                    });

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
            var _this3 = this;

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
                    return modal.present().then(function () {
                      modal.onWillDismiss().then(function (response) {
                        var postId = response.data.postId;
                        var postType = response.data.postType;
                        var deletePost = response.data["delete"];

                        if (postId && postType) {
                          if (postType === 1) {
                            _this3.router.navigate(["posts/create-shipping/".concat(postId)]);
                          } else {
                            _this3.router.navigate(["posts/create-sell/".concat(postId)]);
                          }
                        } else if (postId && deletePost) {
                          _this3.deletePost(postId);
                        }
                      });
                    });

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
          var _this4 = this;

          this.postService.search(this.auth, this.query, 1).toPromise().then(function (res) {
            var result = res.json();
            _this4.shippings = result;
          }, function (err) {
            var error = JSON.parse(err._body);
          });
        }
      }, {
        key: "getSells",
        value: function getSells() {
          var _this5 = this;

          this.postService.search(this.auth, this.query, 2).toPromise().then(function (res) {
            var result = res.json();
            _this5.sells = result;
          }, function (err) {
            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }, {
        key: "deletePost",
        value: function deletePost(postId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingController.create({
                      message: "Cargando..."
                    });

                  case 2:
                    this.loading = _context5.sent;
                    _context5.next = 5;
                    return this.loading.present();

                  case 5:
                    this.postService["delete"](postId, this.auth.token).toPromise().then(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.next = 2;
                                return this.loading.dismiss();

                              case 2:
                                if (this.activeTab === 1) {
                                  this.getShippings();
                                } else {
                                  this.getSells();
                                }

                              case 3:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        var error;
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                _context4.next = 2;
                                return this.loading.dismiss();

                              case 2:
                                error = JSON.parse(err._body);
                                console.log(error);

                              case 4:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "goToPostCreation",
        value: function goToPostCreation() {
          this.router.navigate(["posts/create-shipping/0"]);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) {
            this.sub.unsubscribe();
          }
        }
      }]);

      return PostsListGeneralPage;
    }();

    PostsListGeneralPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
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
      function PostsListPage(route, postService, storage, modalController, router, loadingController) {
        _classCallCheck(this, PostsListPage);

        this.route = route;
        this.postService = postService;
        this.storage = storage;
        this.modalController = modalController;
        this.router = router;
        this.loadingController = loadingController;
        this.activeTab = 1;
        this.sells = [];
        this.shippings = [];
        this.title = "Todas las publicaciones";
        this.userId = 0;
      }

      _createClass(PostsListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.sub = this.route.params.subscribe(function (params) {
                      _this7.userId = params["user-id"];

                      if (_this7.userId !== 0) {
                        _this7.title = "Aquí esta lo que has publicado";
                      }

                      _this7.storage.get("auth").then(function (auth) {
                        _this7.auth = auth;

                        _this7.getShippings();
                      });
                    });

                    this.openCommentsModal = function (postId) {
                      _this7.openCommentsModalImplementation(postId);
                    };

                    this.openDetailsModal = function (post) {
                      _this7.openDetailsModalImplementation(post);
                    };

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "openCommentsModalImplementation",
        value: function openCommentsModalImplementation(postId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var modal;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalController.create({
                      component: src_app_shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_6__["CommentsComponent"],
                      componentProps: {
                        postId: postId
                      },
                      cssClass: "my-custom-class"
                    });

                  case 2:
                    modal = _context7.sent;
                    _context7.next = 5;
                    return modal.present().then(function () {});

                  case 5:
                    return _context7.abrupt("return", _context7.sent);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "openDetailsModalImplementation",
        value: function openDetailsModalImplementation(post) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this8 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.modalController.create({
                      component: src_app_shared_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_5__["PostDetailsComponent"],
                      componentProps: {
                        post: post
                      },
                      cssClass: "my-custom-class"
                    });

                  case 2:
                    modal = _context8.sent;
                    _context8.next = 5;
                    return modal.present().then(function () {
                      modal.onWillDismiss().then(function (response) {
                        var postId = response.data.postId;
                        var postType = response.data.postType;
                        var deletePost = response.data["delete"];

                        if (postId && postType) {
                          if (postType === 1) {
                            _this8.router.navigate(["posts/create-shipping/".concat(postId)]);
                          } else {
                            _this8.router.navigate(["posts/create-sell/".concat(postId)]);
                          }
                        } else if (postId && deletePost) {
                          _this8.deletePost(postId);
                        }
                      });
                    });

                  case 5:
                    return _context8.abrupt("return", _context8.sent);

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "deletePost",
        value: function deletePost(postId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this9 = this;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.loadingController.create({
                      message: "Cargando..."
                    });

                  case 2:
                    this.loading = _context11.sent;
                    _context11.next = 5;
                    return this.loading.present();

                  case 5:
                    this.postService["delete"](postId, this.auth.token).toPromise().then(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this.loading.dismiss();

                              case 2:
                                if (this.activeTab === 1) {
                                  this.getShippings();
                                } else {
                                  this.getSells();
                                }

                              case 3:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                        var error;
                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                          while (1) {
                            switch (_context10.prev = _context10.next) {
                              case 0:
                                _context10.next = 2;
                                return this.loading.dismiss();

                              case 2:
                                error = JSON.parse(err._body);
                                console.log(error);

                              case 4:
                              case "end":
                                return _context10.stop();
                            }
                          }
                        }, _callee10, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
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
          var _this10 = this;

          this.postService.getByType(this.auth, 1).toPromise().then(function (res) {
            var result = res.json();
            _this10.shippings = result;
          }, function (err) {
            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }, {
        key: "getSells",
        value: function getSells() {
          var _this11 = this;

          this.postService.getByType(this.auth, 2).toPromise().then(function (res) {
            var result = res.json();
            _this11.sells = result;
          }, function (err) {
            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }, {
        key: "goToPostCreation",
        value: function goToPostCreation() {
          this.router.navigate(["posts/create-shipping/0"]);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) {
            this.sub.unsubscribe();
          }
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
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
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
      path: "create-shipping/:id",
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./shipping-form/shipping-form.module */
        "./src/app/posts/shipping-form/shipping-form.module.ts")).then(function (m) {
          return m.ShippingFormPageModule;
        });
      }
    }, {
      path: "create-sell/:id",
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
      function SellFormPage(alertController, loadingController, modalController, postService, route, router, sanitizer, storage) {
        _classCallCheck(this, SellFormPage);

        this.alertController = alertController;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.storage = storage;
      }

      _createClass(SellFormPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.title = "Que quieres publicar?";
          this.subscription = this.route.params.subscribe(function (params) {
            _this12.sellId = params["id"];

            if (_this12.sellId !== "0") {
              _this12.title = "Editar venta";
            }

            _this12.storage.get("auth").then(function (auth) {
              _this12.auth = auth;

              if (_this12.sellId !== "0") {
                _this12.getPost();
              }
            });
          });
          this.formData = new FormData();
          this.activeTab = 2;
          this.storage.get("auth").then(function (auth) {
            _this12.auth = auth;
          });
          this.sellForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("title", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("description", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("price", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            origin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("origin", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          });
          this.initializeSellFormControls();
        }
      }, {
        key: "initializeSellFormControls",
        value: function initializeSellFormControls() {
          this.sellForm.controls["title"].setValue(null);
          this.sellForm.controls["description"].setValue(null);
          this.sellForm.controls["price"].setValue(null);
          this.sellForm.controls["origin"].setValue(null);
          this.origin = null;
        }
      }, {
        key: "selectPhoto",
        value: function selectPhoto(slide) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var ab;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Photos, slide);

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
        key: "takePicture",
        value: function takePicture(slide) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var ab;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Camera, slide);

                  case 2:
                    ab = _context13.sent;
                    _context13.next = 5;
                    return this.uploadImage(ab, slide);

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "getPhoto",
        value: function getPhoto(source, slide) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var image, photo;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"].Camera.getPhoto({
                      quality: 90,
                      allowEditing: false,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraResultType"].Uri,
                      source: source
                    });

                  case 2:
                    image = _context14.sent;
                    photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);

                    if (slide === 1) {
                      this.photo1 = photo;
                    } else if (slide === 2) {
                      this.photo2 = photo;
                    } else {
                      this.photo3 = photo;
                    }

                    return _context14.abrupt("return", image.webPath);

                  case 6:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(webPath, slide) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var blob;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.loadingController.create({
                      message: "Cargando..."
                    });

                  case 2:
                    this.loading = _context15.sent;
                    _context15.next = 5;
                    return this.loading.present();

                  case 5:
                    _context15.next = 7;
                    return fetch(webPath).then(function (r) {
                      return r.blob();
                    });

                  case 7:
                    blob = _context15.sent;

                    if (slide === 1) {
                      this.formData.append("image1", blob, "profile-picture1.jpg");
                    } else if (slide === 2) {
                      this.formData.append("image2", blob, "profile-picture2.jpg");
                    } else {
                      this.formData.append("image3", blob, "profile-picture3.jpg");
                    }

                    _context15.next = 11;
                    return this.loading.dismiss();

                  case 11:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "getPost",
        value: function getPost() {
          var _this13 = this;

          this.postService.getById(this.auth, this.sellId).toPromise().then(function (res) {
            var result = res.json();

            _this13.sellForm.controls["title"].setValue(result.title);

            _this13.sellForm.controls["description"].setValue(result.description);

            _this13.sellForm.controls["price"].setValue(result.price);

            _this13.sellForm.controls["origin"].setValue(result.origin.name);

            _this13.origin = result.origin;
          }, function (err) {
            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }, {
        key: "openOriginModal",
        value: function openOriginModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _this14 = this;

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
                        _this14.origin = response.data.city;

                        if (_this14.origin) {
                          _this14.sellForm.controls["origin"].setValue(_this14.origin.name);
                        } else {
                          _this14.sellForm.controls["origin"].setValue(null);
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
        key: "saveSell",
        value: function saveSell() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var _this15 = this;

            var controls, body, action;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    controls = this.sellForm.controls;

                    if (!this.sellForm.invalid) {
                      _context19.next = 4;
                      break;
                    }

                    Object.keys(controls).forEach(function (controlName) {
                      return controls[controlName].markAsTouched();
                    });
                    return _context19.abrupt("return");

                  case 4:
                    body = {
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

                    if (this.sellId !== "0") {
                      body = Object.assign(Object.assign({}, body), {
                        id: this.sellId
                      });
                    }

                    this.formData.append("postCommand", new Blob([JSON.stringify(body)], {
                      type: "application/json"
                    }));
                    action = this.postService.save(this.formData, this.auth.token);

                    if (body.id) {
                      action = this.postService.update(this.formData, this.auth.token);
                    }

                    _context19.next = 11;
                    return this.loadingController.create({
                      message: "Cargando..."
                    });

                  case 11:
                    this.loading = _context19.sent;
                    _context19.next = 14;
                    return this.loading.present();

                  case 14:
                    action.toPromise().then(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee17$(_context17) {
                          while (1) {
                            switch (_context17.prev = _context17.next) {
                              case 0:
                                this.initializeSellFormControls();
                                _context17.next = 3;
                                return this.loading.dismiss();

                              case 3:
                                _context17.next = 5;
                                return this.alertController.create({
                                  header: "Guardado exitoso",
                                  message: "Tu publicación se ha guardado correctamente",
                                  buttons: [{
                                    text: "Aceptar",
                                    role: "cancel",
                                    handler: function handler() {
                                      return false;
                                    }
                                  }]
                                });

                              case 5:
                                alert = _context17.sent;
                                alert.present();

                              case 7:
                              case "end":
                                return _context17.stop();
                            }
                          }
                        }, _callee17, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
                        var error;
                        return regeneratorRuntime.wrap(function _callee18$(_context18) {
                          while (1) {
                            switch (_context18.prev = _context18.next) {
                              case 0:
                                _context18.next = 2;
                                return this.loading.dismiss();

                              case 2:
                                error = JSON.parse(err._body);
                                console.log(error);

                              case 4:
                              case "end":
                                return _context18.stop();
                            }
                          }
                        }, _callee18, this);
                      }));
                    });

                  case 15:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
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
            this.router.navigate(["posts/create-shipping/0"]);
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
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return SellFormPage;
    }();

    SellFormPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
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
      function ShippingFormPage(alertController, loadingController, modalController, postService, route, router, sanitizer, storage) {
        _classCallCheck(this, ShippingFormPage);

        this.alertController = alertController;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.storage = storage;
      }

      _createClass(ShippingFormPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.title = "Que quieres publicar?";
          this.sub = this.route.params.subscribe(function (params) {
            _this16.shippingId = params["id"];

            if (_this16.shippingId !== "0") {
              _this16.title = "Editar envio";
            }

            _this16.storage.get("auth").then(function (auth) {
              _this16.auth = auth;

              if (_this16.shippingId !== "0") {
                _this16.getPost();
              }
            });
          });
          this.formData = new FormData();
          this.activeTab = 1;
          this.shippingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("title", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("description", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("date", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            origin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("origin", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            destination: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("destination", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
          this.initializeShippingFormControls();
        }
      }, {
        key: "initializeShippingFormControls",
        value: function initializeShippingFormControls() {
          this.shippingForm.controls["title"].setValue(null);
          this.shippingForm.controls["description"].setValue(null);
          this.shippingForm.controls["date"].setValue(null);
          this.shippingForm.controls["origin"].setValue(null);
          this.shippingForm.controls["destination"].setValue(null);
          this.origin = null;
          this.destination = null;
        }
      }, {
        key: "selectPhoto",
        value: function selectPhoto(slide) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var ab;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraSource"].Photos, slide);

                  case 2:
                    ab = _context20.sent;
                    _context20.next = 5;
                    return this.uploadImage(ab, slide);

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
        value: function takePicture(slide) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var ab;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraSource"].Camera, slide);

                  case 2:
                    ab = _context21.sent;
                    _context21.next = 5;
                    return this.uploadImage(ab, slide);

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
        value: function getPhoto(source, slide) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var image, photo;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Camera.getPhoto({
                      quality: 90,
                      allowEditing: false,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraResultType"].Uri,
                      source: source
                    });

                  case 2:
                    image = _context22.sent;
                    photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);

                    if (slide === 1) {
                      this.photo1 = photo;
                    } else if (slide === 2) {
                      this.photo2 = photo;
                    } else {
                      this.photo3 = photo;
                    }

                    return _context22.abrupt("return", image.webPath);

                  case 6:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(webPath, slide) {
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

                    if (slide === 1) {
                      this.formData.append("image1", blob, "profile-picture1.jpg");
                    } else if (slide === 2) {
                      this.formData.append("image2", blob, "profile-picture2.jpg");
                    } else {
                      this.formData.append("image3", blob, "profile-picture3.jpg");
                    }

                    _context23.next = 11;
                    return this.loading.dismiss();

                  case 11:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "openOriginModal",
        value: function openOriginModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var _this17 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.modalController.create({
                      component: src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__["SelectCityComponent"],
                      cssClass: "my-custom-class"
                    });

                  case 2:
                    modal = _context24.sent;
                    _context24.next = 5;
                    return modal.present().then(function () {
                      modal.onWillDismiss().then(function (response) {
                        _this17.origin = response.data.city;

                        if (_this17.origin) {
                          _this17.shippingForm.controls["origin"].setValue(_this17.origin.name);
                        } else {
                          _this17.shippingForm.controls["origin"].setValue(null);
                        }
                      });
                    });

                  case 5:
                    return _context24.abrupt("return", _context24.sent);

                  case 6:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "openDestinationModal",
        value: function openDestinationModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var _this18 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.modalController.create({
                      component: src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__["SelectCityComponent"],
                      cssClass: "my-custom-class"
                    });

                  case 2:
                    modal = _context25.sent;
                    _context25.next = 5;
                    return modal.present().then(function () {
                      modal.onWillDismiss().then(function (response) {
                        _this18.destination = response.data.city;

                        if (_this18.destination) {
                          _this18.shippingForm.controls["destination"].setValue(_this18.destination.name);
                        } else {
                          _this18.shippingForm.controls["destination"].setValue(null);
                        }
                      });
                    });

                  case 5:
                    return _context25.abrupt("return", _context25.sent);

                  case 6:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "getPost",
        value: function getPost() {
          var _this19 = this;

          this.postService.getById(this.auth, this.shippingId).toPromise().then(function (res) {
            var result = res.json();

            _this19.shippingForm.controls["title"].setValue(result.title);

            _this19.shippingForm.controls["description"].setValue(result.description);

            _this19.shippingForm.controls["date"].setValue(result.date);

            _this19.shippingForm.controls["origin"].setValue(result.origin.name);

            _this19.shippingForm.controls["destination"].setValue(result.destination.name);

            _this19.origin = result.origin;
            _this19.destination = result.destination;
          }, function (err) {
            var error = JSON.parse(err._body);
            console.log(error);
          });
        }
      }, {
        key: "saveShipping",
        value: function saveShipping() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            var _this20 = this;

            var controls, body, action;
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    controls = this.shippingForm.controls;

                    if (!this.shippingForm.invalid) {
                      _context28.next = 4;
                      break;
                    }

                    Object.keys(controls).forEach(function (controlName) {
                      return controls[controlName].markAsTouched();
                    });
                    return _context28.abrupt("return");

                  case 4:
                    body = {
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

                    if (this.shippingId !== "0") {
                      body = Object.assign(Object.assign({}, body), {
                        id: this.shippingId
                      });
                    }

                    this.formData.append("postCommand", new Blob([JSON.stringify(body)], {
                      type: "application/json"
                    }));
                    action = this.postService.save(this.formData, this.auth.token);

                    if (body.id) {
                      action = this.postService.update(this.formData, this.auth.token);
                    }

                    _context28.next = 11;
                    return this.loadingController.create({
                      message: "Cargando..."
                    });

                  case 11:
                    this.loading = _context28.sent;
                    _context28.next = 14;
                    return this.loading.present();

                  case 14:
                    action.toPromise().then(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee26$(_context26) {
                          while (1) {
                            switch (_context26.prev = _context26.next) {
                              case 0:
                                this.initializeShippingFormControls();
                                _context26.next = 3;
                                return this.loading.dismiss();

                              case 3:
                                _context26.next = 5;
                                return this.alertController.create({
                                  header: "Guardado exitoso",
                                  message: "Tu publicación se ha guardado correctamente",
                                  buttons: [{
                                    text: "Aceptar",
                                    role: "cancel",
                                    handler: function handler() {
                                      return false;
                                    }
                                  }]
                                });

                              case 5:
                                alert = _context26.sent;
                                alert.present();

                              case 7:
                              case "end":
                                return _context26.stop();
                            }
                          }
                        }, _callee26, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
                        var error;
                        return regeneratorRuntime.wrap(function _callee27$(_context27) {
                          while (1) {
                            switch (_context27.prev = _context27.next) {
                              case 0:
                                _context27.next = 2;
                                return this.loading.dismiss();

                              case 2:
                                error = JSON.parse(err._body);
                                console.log(error);

                              case 4:
                              case "end":
                                return _context27.stop();
                            }
                          }
                        }, _callee27, this);
                      }));
                    });

                  case 15:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
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
            this.router.navigate(["posts/create-sell/0"]);
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
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
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