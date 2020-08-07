(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list-general/posts-list-general.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list-general/posts-list-general.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-fab\r\n    vertical=\"bottom\"\r\n    horizontal=\"end\"\r\n    slot=\"fixed\"\r\n    (click)=\"goToPostCreation()\"\r\n  >\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <h4 class=\"centered-text top-title\">Todas las publicaciones</h4>\r\n  <form [formGroup]=\"searchForm\">\r\n    <ion-item>\r\n      <input\r\n        name=\"query\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"Buscar...\"\r\n        formControlName=\"queryControl\"\r\n        (keyup)=\"search()\"\r\n      />\r\n    </ion-item>\r\n  </form>\r\n  <ion-row class=\"top-tab-container\">\r\n    <ion-col [class.active]=\"activeTab === 1\" (click)=\"changeActiveTab(1)\"\r\n      ><ion-icon name=\"send\"></ion-icon>&nbsp;<span>Envios</span></ion-col\r\n    >\r\n    <ion-col [class.active]=\"activeTab === 2\" (click)=\"changeActiveTab(2)\"\r\n      ><ion-icon name=\"pricetag\"></ion-icon>&nbsp;<span>Ventas</span></ion-col\r\n    >\r\n  </ion-row>\r\n  <div class=\"posts-list\" *ngIf=\"shippings.length > 0 && activeTab === 1\">\r\n    <app-post-card\r\n      *ngFor=\"let shipping of shippings\"\r\n      [imageSrc]=\"shipping.image1\"\r\n      [title]=\"shipping.title\"\r\n      [date]=\"shipping.date\"\r\n      [description]=\"shipping.description\"\r\n      [origin]=\"shipping.origin\"\r\n      [user]=\"shipping.user\"\r\n      [openCommentsModal]=\"openCommentsModal\"\r\n      [openDetailsModal]=\"openDetailsModal\"\r\n      [id]=\"shipping.id\"\r\n      [destination]=\"shipping.destination\"\r\n      [post]=\"shipping\"\r\n      [auth]=\"auth\"\r\n      type=\"1\"\r\n    ></app-post-card>\r\n  </div>\r\n  <div class=\"posts-list\" *ngIf=\"sells.length > 0 && activeTab === 2\">\r\n    <app-post-card\r\n      *ngFor=\"let sell of sells\"\r\n      [imageSrc]=\"sell.image1\"\r\n      [title]=\"sell.title\"\r\n      [price]=\"sell.price\"\r\n      [user]=\"sell.user\"\r\n      [description]=\"sell.description\"\r\n      [openCommentsModal]=\"openCommentsModal\"\r\n      [openDetailsModal]=\"openDetailsModal\"\r\n      [origin]=\"sell.origin\"\r\n      [post]=\"sell\"\r\n      [auth]=\"auth\"\r\n      [id]=\"sell.id\"\r\n      type=\"2\"\r\n    ></app-post-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list/posts-list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list/posts-list.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-fab\r\n    vertical=\"bottom\"\r\n    horizontal=\"end\"\r\n    slot=\"fixed\"\r\n    (click)=\"goToPostCreation()\"\r\n  >\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <h4 class=\"centered-text top-title\">{{title}}</h4>\r\n  <ion-row class=\"top-tab-container\">\r\n    <ion-col [class.active]=\"activeTab===1\" (click)=\"changeActiveTab(1)\"\r\n      ><ion-icon name=\"send\"></ion-icon>&nbsp;<span>Envios</span></ion-col\r\n    >\r\n    <ion-col [class.active]=\"activeTab===2\" (click)=\"changeActiveTab(2)\"\r\n      ><ion-icon name=\"pricetag\"></ion-icon>&nbsp;<span>Ventas</span></ion-col\r\n    >\r\n  </ion-row>\r\n  <div class=\"posts-list\" *ngIf=\"shippings.length > 0 && activeTab === 1\">\r\n    <app-post-card\r\n      *ngFor=\"let shipping of shippings\"\r\n      [imageSrc]=\"shipping.image1\"\r\n      [title]=\"shipping.title\"\r\n      [date]=\"shipping.date\"\r\n      [description]=\"shipping.description\"\r\n      [origin]=\"shipping.origin\"\r\n      [user]=\"shipping.user\"\r\n      [openCommentsModal]=\"openCommentsModal\"\r\n      [openDetailsModal]=\"openDetailsModal\"\r\n      [id]=\"shipping.id\"\r\n      [destination]=\"shipping.destination\"\r\n      [auth]=\"auth\"\r\n      [post]=\"shipping\"\r\n      type=\"1\"\r\n    ></app-post-card>\r\n  </div>\r\n  <div class=\"posts-list\" *ngIf=\"sells.length > 0 && activeTab === 2\">\r\n    <app-post-card\r\n      *ngFor=\"let sell of sells\"\r\n      [imageSrc]=\"sell.image1\"\r\n      [title]=\"sell.title\"\r\n      [price]=\"sell.price\"\r\n      [user]=\"sell.user\"\r\n      [description]=\"sell.description\"\r\n      [openCommentsModal]=\"openCommentsModal\"\r\n      [openDetailsModal]=\"openDetailsModal\"\r\n      [origin]=\"sell.origin\"\r\n      [post]=\"sell\"\r\n      [auth]=\"auth\"\r\n      [id]=\"sell.id\"\r\n      type=\"2\"\r\n    ></app-post-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/sell-form/sell-form.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/sell-form/sell-form.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n    <h4 class=\"centered-text top-title\">{{title}}</h4>\r\n    <ion-row class=\"top-tab-container\">\r\n      <ion-col (click)=\"goToShippingForm()\"\r\n        ><ion-icon name=\"send\"></ion-icon>&nbsp;<span>Envio</span></ion-col\r\n      >\r\n      <ion-col class=\"active\"\r\n        ><ion-icon name=\"pricetag\"></ion-icon>&nbsp;<span>Venta</span></ion-col\r\n      >\r\n    </ion-row>\r\n    <ion-row id=\"form-container\">\r\n      <ion-slides [pager]=\"true\" class=\"form-images-slider\">\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo1\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(1)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(1)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo2\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(2)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(2)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo3\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(3)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(3)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      <ion-col col-12>\r\n        <form [formGroup]=\"sellForm\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">T&iacute;tulo</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('title', 'required')\"\r\n              formControlName=\"title\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('title', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Descripci&oacute;n</label>\r\n            <textarea\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('description', 'required')\"\r\n              formControlName=\"description\"\r\n            ></textarea>\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('description', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Precio</label>\r\n            <input\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('price', 'required')\"\r\n              formControlName=\"price\"\r\n              type=\"number\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('price', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Ubicaci&oacute;n</label>\r\n            <input\r\n              type=\"text\"\r\n              [class.error-input]=\"controlHasError('origin', 'required')\"\r\n              (click)=\"openOriginModal()\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"origin\"\r\n            />\r\n            <input type=\"text\" class=\"display-none\" formControlName=\"origin\" />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('origin', 'required')\"\r\n            >\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button color=\"primary\" (click)=\"saveSell()\" class=\"width-100\">\r\n          Guardar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button\r\n          color=\"danger\"\r\n          (click)=\"goBackToDashboard()\"\r\n          class=\"width-100\"\r\n        >\r\n          Cancelar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/shipping-form/shipping-form.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/shipping-form/shipping-form.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n    <h4 class=\"centered-text top-title\">{{title}}</h4>\r\n    <ion-row class=\"top-tab-container\">\r\n      <ion-col class=\"active\"\r\n        ><ion-icon name=\"send\"></ion-icon>&nbsp;<span>Envio</span></ion-col\r\n      >\r\n      <ion-col (click)=\"goToSellForm()\"\r\n        ><ion-icon name=\"pricetag\"></ion-icon>&nbsp;<span>Venta</span></ion-col\r\n      >\r\n    </ion-row>\r\n    <ion-row id=\"form-container\">\r\n      <ion-slides [pager]=\"true\" class=\"form-images-slider\">\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo1\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(1)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(1)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo2\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(2)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(2)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img [src]=\"photo3\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"takePicture(3)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectPhoto(3)\"\r\n                class=\"width-100\"\r\n              >\r\n                <ion-icon name=\"image-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      <ion-col col-12>\r\n        <form [formGroup]=\"shippingForm\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">T&iacute;tulo</label>\r\n            <input\r\n              type=\"text\"\r\n              [class.error-input]=\"controlHasError('title', 'required')\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"title\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('title', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Descripci&oacute;n</label>\r\n            <textarea\r\n              class=\"form-control width-100\"\r\n              [class.error-input]=\"controlHasError('description', 'required')\"\r\n              formControlName=\"description\"\r\n            ></textarea>\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('description', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Fecha del envio</label>\r\n            <ion-item\r\n              class=\"form-control no-padding-left no-padding-right no-padding-top\"\r\n            >\r\n              <ion-datetime\r\n                id=\"dynamicDisabled\"\r\n                displayFormat=\"MMMM DD YYYY\"\r\n                value=\"1994-12-15\"\r\n                formControlName=\"date\"\r\n              ></ion-datetime>\r\n            </ion-item>\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('date', 'required')\"\r\n            >\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Origen del envio</label>\r\n            <input\r\n              type=\"text\"\r\n              [class.error-input]=\"controlHasError('origin', 'required')\"\r\n              (click)=\"openOriginModal()\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"origin\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('origin', 'required')\"\r\n            >\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Destino del envio</label>\r\n            <input\r\n              type=\"text\"\r\n              [class.error-input]=\"controlHasError('destination', 'required')\"\r\n              (click)=\"openDestinationModal()\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"destination\"\r\n            />\r\n            <span\r\n              class=\"error-input-label\"\r\n              *ngIf=\"controlHasError('destination', 'required')\"\r\n            >\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button color=\"primary\" (click)=\"saveShipping()\" class=\"width-100\">\r\n          Guardar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button\r\n          color=\"danger\"\r\n          (click)=\"goBackToDashboard()\"\r\n          class=\"width-100\"\r\n        >\r\n          Cancelar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/posts/posts-list-general/posts-list-general-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/posts/posts-list-general/posts-list-general-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PostsListGeneralPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListGeneralPageRoutingModule", function() { return PostsListGeneralPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _posts_list_general_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts-list-general.page */ "./src/app/posts/posts-list-general/posts-list-general.page.ts");




const routes = [
    {
        path: '',
        component: _posts_list_general_page__WEBPACK_IMPORTED_MODULE_3__["PostsListGeneralPage"]
    }
];
let PostsListGeneralPageRoutingModule = class PostsListGeneralPageRoutingModule {
};
PostsListGeneralPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostsListGeneralPageRoutingModule);



/***/ }),

/***/ "./src/app/posts/posts-list-general/posts-list-general.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/posts/posts-list-general/posts-list-general.module.ts ***!
  \***********************************************************************/
/*! exports provided: PostsListGeneralPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListGeneralPageModule", function() { return PostsListGeneralPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _posts_list_general_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts-list-general-routing.module */ "./src/app/posts/posts-list-general/posts-list-general-routing.module.ts");
/* harmony import */ var _posts_list_general_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts-list-general.page */ "./src/app/posts/posts-list-general/posts-list-general.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let PostsListGeneralPageModule = class PostsListGeneralPageModule {
};
PostsListGeneralPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _posts_list_general_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostsListGeneralPageRoutingModule"]
        ],
        declarations: [_posts_list_general_page__WEBPACK_IMPORTED_MODULE_6__["PostsListGeneralPage"]]
    })
], PostsListGeneralPageModule);



/***/ }),

/***/ "./src/app/posts/posts-list-general/posts-list-general.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/posts/posts-list-general/posts-list-general.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWxpc3QtZ2VuZXJhbC9wb3N0cy1saXN0LWdlbmVyYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/posts/posts-list-general/posts-list-general.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/posts/posts-list-general/posts-list-general.page.ts ***!
  \*********************************************************************/
/*! exports provided: PostsListGeneralPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListGeneralPage", function() { return PostsListGeneralPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "./src/app/posts/post.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/comments/comments.component */ "./src/app/shared/comments/comments.component.ts");
/* harmony import */ var src_app_shared_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/post-details/post-details.component */ "./src/app/shared/post-details/post-details.component.ts");









let PostsListGeneralPage = class PostsListGeneralPage {
    constructor(route, router, postService, storage, modalController, loadingController) {
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
    ngOnInit() {
        this.storage.get("auth").then((auth) => {
            this.auth = auth;
            this.getShippings();
        });
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            queryControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("queryControl", []),
        });
        this.searchForm.controls["queryControl"].setValue(null);
        this.openCommentsModal = (postId) => {
            this.openCommentsModalImplementation(postId);
        };
        this.openDetailsModal = (post) => {
            this.openDetailsModalImplementation(post);
        };
    }
    openCommentsModalImplementation(postId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_7__["CommentsComponent"],
                componentProps: {
                    postId: postId,
                },
                cssClass: "my-custom-class",
            });
            return yield modal.present().then(() => {
                modal.onWillDismiss().then((response) => {
                    let postId = response.data.postId;
                    let postType = response.data.postType;
                    if (postId && postType) {
                        if (postType === 1) {
                            this.router.navigate([`posts/create-shipping/${postId}`]);
                        }
                        else {
                            this.router.navigate([`posts/create-sell/${postId}`]);
                        }
                    }
                });
            });
        });
    }
    openDetailsModalImplementation(post) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_8__["PostDetailsComponent"],
                componentProps: {
                    post: post,
                },
                cssClass: "my-custom-class",
            });
            return yield modal.present().then(() => {
                modal.onWillDismiss().then((response) => {
                    let postId = response.data.postId;
                    let postType = response.data.postType;
                    let deletePost = response.data.delete;
                    if (postId && postType) {
                        if (postType === 1) {
                            this.router.navigate([`posts/create-shipping/${postId}`]);
                        }
                        else {
                            this.router.navigate([`posts/create-sell/${postId}`]);
                        }
                    }
                    else if (postId && deletePost) {
                        this.deletePost(postId);
                    }
                });
            });
        });
    }
    changeActiveTab(tabNumber) {
        this.activeTab = tabNumber;
        if (this.activeTab === 1) {
            this.getShippings();
        }
        else {
            this.getSells();
        }
    }
    search() {
        let controls = this.searchForm.controls;
        this.query = controls["queryControl"].value;
        if (this.query && this.query.length > 3) {
            if (this.activeTab === 1) {
                this.getShippings();
                this.sells = [];
            }
            else {
                this.getSells();
                this.shippings = [];
            }
        }
        else {
            this.shippings = [];
            this.sells = [];
            if (this.activeTab == 1 && this.query == "") {
                this.getShippings();
            }
            else if (this.query == "") {
                this.getSells();
            }
        }
    }
    getShippings() {
        this.postService
            .search(this.auth, this.query, 1)
            .toPromise()
            .then((res) => {
            const result = res.json();
            this.shippings = result;
        }, (err) => {
            let error = JSON.parse(err._body);
        });
    }
    getSells() {
        this.postService
            .search(this.auth, this.query, 2)
            .toPromise()
            .then((res) => {
            const result = res.json();
            this.sells = result;
        }, (err) => {
            let error = JSON.parse(err._body);
            console.log(error);
        });
    }
    deletePost(postId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: "Cargando...",
            });
            yield this.loading.present();
            this.postService
                .delete(postId, this.auth.token)
                .toPromise()
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
                if (this.activeTab === 1) {
                    this.getShippings();
                }
                else {
                    this.getSells();
                }
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
                let error = JSON.parse(err._body);
                console.log(error);
            }));
        });
    }
    goToPostCreation() {
        this.router.navigate(["posts/create-shipping/0"]);
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
};
PostsListGeneralPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
PostsListGeneralPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-posts-list-general",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./posts-list-general.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list-general/posts-list-general.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./posts-list-general.page.scss */ "./src/app/posts/posts-list-general/posts-list-general.page.scss")).default]
    })
], PostsListGeneralPage);



/***/ }),

/***/ "./src/app/posts/posts-list/posts-list-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/posts/posts-list/posts-list-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PostsListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListPageRoutingModule", function() { return PostsListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _posts_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts-list.page */ "./src/app/posts/posts-list/posts-list.page.ts");




const routes = [
    {
        path: '',
        component: _posts_list_page__WEBPACK_IMPORTED_MODULE_3__["PostsListPage"]
    }
];
let PostsListPageRoutingModule = class PostsListPageRoutingModule {
};
PostsListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostsListPageRoutingModule);



/***/ }),

/***/ "./src/app/posts/posts-list/posts-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/posts/posts-list/posts-list.module.ts ***!
  \*******************************************************/
/*! exports provided: PostsListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListPageModule", function() { return PostsListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _posts_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts-list-routing.module */ "./src/app/posts/posts-list/posts-list-routing.module.ts");
/* harmony import */ var _posts_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts-list.page */ "./src/app/posts/posts-list/posts-list.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let PostsListPageModule = class PostsListPageModule {
};
PostsListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _posts_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostsListPageRoutingModule"]
        ],
        declarations: [_posts_list_page__WEBPACK_IMPORTED_MODULE_6__["PostsListPage"]]
    })
], PostsListPageModule);



/***/ }),

/***/ "./src/app/posts/posts-list/posts-list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/posts/posts-list/posts-list.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#tabs-container {\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdHMtbGlzdC9DOlxcVXNlcnNcXGluZ2RtXFxwcm9qZWN0c1xcb3Rvcm9cXGZyb250L3NyY1xcYXBwXFxwb3N0c1xccG9zdHMtbGlzdFxccG9zdHMtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWxpc3QvcG9zdHMtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFdBQVc7QUNDYiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWxpc3QvcG9zdHMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGFicy1jb250YWluZXIge1xyXG4gIGJvdHRvbTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwiI3RhYnMtY29udGFpbmVyIHtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/posts/posts-list/posts-list.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/posts/posts-list/posts-list.page.ts ***!
  \*****************************************************/
/*! exports provided: PostsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListPage", function() { return PostsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/posts/post.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_shared_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/post-details/post-details.component */ "./src/app/shared/post-details/post-details.component.ts");
/* harmony import */ var src_app_shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/comments/comments.component */ "./src/app/shared/comments/comments.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let PostsListPage = class PostsListPage {
    constructor(route, postService, storage, modalController, router, loadingController) {
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
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sub = this.route.params.subscribe((params) => {
                this.userId = params["user-id"];
                if (this.userId !== 0) {
                    this.title = "Aquí esta lo que has publicado";
                }
                this.storage.get("auth").then((auth) => {
                    this.auth = auth;
                    this.getShippings();
                });
            });
            this.openCommentsModal = (postId) => {
                this.openCommentsModalImplementation(postId);
            };
            this.openDetailsModal = (post) => {
                this.openDetailsModalImplementation(post);
            };
        });
    }
    openCommentsModalImplementation(postId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_6__["CommentsComponent"],
                componentProps: {
                    postId: postId,
                },
                cssClass: "my-custom-class",
            });
            return yield modal.present().then(() => { });
        });
    }
    openDetailsModalImplementation(post) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_5__["PostDetailsComponent"],
                componentProps: {
                    post: post,
                },
                cssClass: "my-custom-class",
            });
            return yield modal.present().then(() => {
                modal.onWillDismiss().then((response) => {
                    let postId = response.data.postId;
                    let postType = response.data.postType;
                    let deletePost = response.data.delete;
                    if (postId && postType) {
                        if (postType === 1) {
                            this.router.navigate([`posts/create-shipping/${postId}`]);
                        }
                        else {
                            this.router.navigate([`posts/create-sell/${postId}`]);
                        }
                    }
                    else if (postId && deletePost) {
                        this.deletePost(postId);
                    }
                });
            });
        });
    }
    deletePost(postId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: "Cargando...",
            });
            yield this.loading.present();
            this.postService
                .delete(postId, this.auth.token)
                .toPromise()
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
                if (this.activeTab === 1) {
                    this.getShippings();
                }
                else {
                    this.getSells();
                }
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
                let error = JSON.parse(err._body);
                console.log(error);
            }));
        });
    }
    changeActiveTab(tabNumber) {
        this.activeTab = tabNumber;
        if (this.activeTab === 1) {
            this.getShippings();
        }
        else {
            this.getSells();
        }
    }
    getShippings() {
        this.postService
            .getByType(this.auth, 1)
            .toPromise()
            .then((res) => {
            const result = res.json();
            this.shippings = result;
        }, (err) => {
            let error = JSON.parse(err._body);
            console.log(error);
        });
    }
    getSells() {
        this.postService
            .getByType(this.auth, 2)
            .toPromise()
            .then((res) => {
            const result = res.json();
            this.sells = result;
        }, (err) => {
            let error = JSON.parse(err._body);
            console.log(error);
        });
    }
    goToPostCreation() {
        this.router.navigate(["posts/create-shipping/0"]);
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
};
PostsListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
PostsListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-posts-list",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./posts-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list/posts-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./posts-list.page.scss */ "./src/app/posts/posts-list/posts-list.page.scss")).default]
    })
], PostsListPage);



/***/ }),

/***/ "./src/app/posts/posts-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/posts/posts-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PostsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsRoutingModule", function() { return PostsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



const routes = [
    {
        path: "create-shipping/:id",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./shipping-form/shipping-form.module */ "./src/app/posts/shipping-form/shipping-form.module.ts")).then((m) => m.ShippingFormPageModule),
    },
    {
        path: "create-sell/:id",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./sell-form/sell-form.module */ "./src/app/posts/sell-form/sell-form.module.ts")).then((m) => m.SellFormPageModule),
    },
    {
        path: "list/:user-id",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./posts-list/posts-list.module */ "./src/app/posts/posts-list/posts-list.module.ts")).then((m) => m.PostsListPageModule),
    },
    {
        path: "posts-list-general",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./posts-list-general/posts-list-general.module */ "./src/app/posts/posts-list-general/posts-list-general.module.ts")).then((m) => m.PostsListGeneralPageModule),
    },
];
let PostsRoutingModule = class PostsRoutingModule {
};
PostsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
    })
], PostsRoutingModule);



/***/ }),

/***/ "./src/app/posts/posts.module.ts":
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts-routing.module */ "./src/app/posts/posts-routing.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _sell_form_sell_form_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sell-form/sell-form.module */ "./src/app/posts/sell-form/sell-form.module.ts");
/* harmony import */ var _shipping_form_shipping_form_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shipping-form/shipping-form.module */ "./src/app/posts/shipping-form/shipping-form.module.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _posts_list_posts_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./posts-list/posts-list.module */ "./src/app/posts/posts-list/posts-list.module.ts");
/* harmony import */ var _posts_list_general_posts_list_general_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./posts-list-general/posts-list-general.module */ "./src/app/posts/posts-list-general/posts-list-general.module.ts");













let PostsModule = class PostsModule {
};
PostsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _posts_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostsRoutingModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _shipping_form_shipping_form_module__WEBPACK_IMPORTED_MODULE_9__["ShippingFormPageModule"],
            _sell_form_sell_form_module__WEBPACK_IMPORTED_MODULE_8__["SellFormPageModule"],
            _posts_list_posts_list_module__WEBPACK_IMPORTED_MODULE_11__["PostsListPageModule"],
            _posts_list_general_posts_list_general_module__WEBPACK_IMPORTED_MODULE_12__["PostsListGeneralPageModule"]
        ],
        providers: [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"]],
        exports: [],
    })
], PostsModule);



/***/ }),

/***/ "./src/app/posts/sell-form/sell-form-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/posts/sell-form/sell-form-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SellFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellFormPageRoutingModule", function() { return SellFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sell_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sell-form.page */ "./src/app/posts/sell-form/sell-form.page.ts");




const routes = [
    {
        path: '',
        component: _sell_form_page__WEBPACK_IMPORTED_MODULE_3__["SellFormPage"]
    }
];
let SellFormPageRoutingModule = class SellFormPageRoutingModule {
};
SellFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellFormPageRoutingModule);



/***/ }),

/***/ "./src/app/posts/sell-form/sell-form.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/posts/sell-form/sell-form.module.ts ***!
  \*****************************************************/
/*! exports provided: SellFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellFormPageModule", function() { return SellFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sell_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sell-form-routing.module */ "./src/app/posts/sell-form/sell-form-routing.module.ts");
/* harmony import */ var _sell_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sell-form.page */ "./src/app/posts/sell-form/sell-form.page.ts");







let SellFormPageModule = class SellFormPageModule {
};
SellFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sell_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellFormPageRoutingModule"],
        ],
        declarations: [_sell_form_page__WEBPACK_IMPORTED_MODULE_6__["SellFormPage"]],
    })
], SellFormPageModule);



/***/ }),

/***/ "./src/app/posts/sell-form/sell-form.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/posts/sell-form/sell-form.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3NlbGwtZm9ybS9zZWxsLWZvcm0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/posts/sell-form/sell-form.page.ts":
/*!***************************************************!*\
  !*** ./src/app/posts/sell-form/sell-form.page.ts ***!
  \***************************************************/
/*! exports provided: SellFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellFormPage", function() { return SellFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "./src/app/posts/post.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/select-city/select-city.component */ "./src/app/shared/select-city/select-city.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");










let SellFormPage = class SellFormPage {
    constructor(alertController, loadingController, modalController, postService, route, router, sanitizer, storage) {
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.storage = storage;
    }
    ngOnInit() {
        this.title = "Que quieres publicar?";
        this.subscription = this.route.params.subscribe((params) => {
            this.sellId = params["id"];
            if (this.sellId !== "0") {
                this.title = "Editar venta";
            }
            this.storage.get("auth").then((auth) => {
                this.auth = auth;
                if (this.sellId !== "0") {
                    this.getPost();
                }
            });
        });
        this.formData = new FormData();
        this.activeTab = 2;
        this.storage.get("auth").then((auth) => {
            this.auth = auth;
        });
        this.sellForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("title", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("description", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("price", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            origin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("origin", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.initializeSellFormControls();
    }
    initializeSellFormControls() {
        this.sellForm.controls["title"].setValue(null);
        this.sellForm.controls["description"].setValue(null);
        this.sellForm.controls["price"].setValue(null);
        this.sellForm.controls["origin"].setValue(null);
        this.origin = null;
    }
    selectPhoto(slide) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ab = yield this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Photos, slide);
            yield this.uploadImage(ab, slide);
        });
    }
    takePicture(slide) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ab = yield this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Camera, slide);
            yield this.uploadImage(ab, slide);
        });
    }
    getPhoto(source, slide) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"].Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraResultType"].Uri,
                source,
            });
            let photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);
            if (slide === 1) {
                this.photo1 = photo;
            }
            else if (slide === 2) {
                this.photo2 = photo;
            }
            else {
                this.photo3 = photo;
            }
            return image.webPath;
        });
    }
    uploadImage(webPath, slide) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: "Cargando...",
            });
            yield this.loading.present();
            const blob = yield fetch(webPath).then((r) => r.blob());
            if (slide === 1) {
                this.formData.append("image1", blob, `profile-picture1.jpg`);
            }
            else if (slide === 2) {
                this.formData.append("image2", blob, `profile-picture2.jpg`);
            }
            else {
                this.formData.append("image3", blob, `profile-picture3.jpg`);
            }
            yield this.loading.dismiss();
        });
    }
    getPost() {
        this.postService
            .getById(this.auth, this.sellId)
            .toPromise()
            .then((res) => {
            const result = res.json();
            this.sellForm.controls["title"].setValue(result.title);
            this.sellForm.controls["description"].setValue(result.description);
            this.sellForm.controls["price"].setValue(result.price);
            this.sellForm.controls["origin"].setValue(result.origin.name);
            this.origin = result.origin;
        }, (err) => {
            let error = JSON.parse(err._body);
            console.log(error);
        });
    }
    openOriginModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__["SelectCityComponent"],
                cssClass: "my-custom-class",
            });
            return yield modal.present().then(() => {
                modal.onWillDismiss().then((response) => {
                    this.origin = response.data.city;
                    if (this.origin) {
                        this.sellForm.controls["origin"].setValue(this.origin.name);
                    }
                    else {
                        this.sellForm.controls["origin"].setValue(null);
                    }
                });
            });
        });
    }
    saveSell() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let controls = this.sellForm.controls;
            if (this.sellForm.invalid) {
                Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
                return;
            }
            let body = {
                type: 2,
                image: "",
                title: controls["title"].value,
                description: controls["description"].value,
                price: controls["price"].value,
                origin: this.origin,
                user: { id: this.auth.id },
            };
            if (this.sellId !== "0") {
                body = Object.assign(Object.assign({}, body), { id: this.sellId });
            }
            this.formData.append("postCommand", new Blob([JSON.stringify(body)], {
                type: "application/json",
            }));
            let action = this.postService.save(this.formData, this.auth.token);
            if (body.id) {
                action = this.postService.update(this.formData, this.auth.token);
            }
            this.loading = yield this.loadingController.create({
                message: "Cargando...",
            });
            yield this.loading.present();
            action.toPromise().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.initializeSellFormControls();
                yield this.loading.dismiss();
                let alert = yield this.alertController.create({
                    header: "Guardado exitoso",
                    message: "Tu publicación se ha guardado correctamente",
                    buttons: [
                        {
                            text: "Aceptar",
                            role: "cancel",
                            handler: () => {
                                this.goBackToDashboard();
                            },
                        },
                    ],
                });
                alert.present();
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
                let error = JSON.parse(err._body);
                console.log(error);
            }));
        });
    }
    goBackToDashboard() {
        this.router.navigate(["/dashboard"]);
    }
    goToShippingForm() {
        if (this.activeTab !== 1) {
            this.router.navigate(["posts/create-shipping/0"]);
        }
    }
    controlHasError(controlName, validationType) {
        const control = this.sellForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
SellFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
SellFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sell-form",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sell-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/sell-form/sell-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sell-form.page.scss */ "./src/app/posts/sell-form/sell-form.page.scss")).default]
    })
], SellFormPage);



/***/ }),

/***/ "./src/app/posts/shipping-form/shipping-form-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/posts/shipping-form/shipping-form-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ShippingFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFormPageRoutingModule", function() { return ShippingFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shipping_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipping-form.page */ "./src/app/posts/shipping-form/shipping-form.page.ts");




const routes = [
    {
        path: '',
        component: _shipping_form_page__WEBPACK_IMPORTED_MODULE_3__["ShippingFormPage"]
    }
];
let ShippingFormPageRoutingModule = class ShippingFormPageRoutingModule {
};
ShippingFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShippingFormPageRoutingModule);



/***/ }),

/***/ "./src/app/posts/shipping-form/shipping-form.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/posts/shipping-form/shipping-form.module.ts ***!
  \*************************************************************/
/*! exports provided: ShippingFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFormPageModule", function() { return ShippingFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shipping_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipping-form-routing.module */ "./src/app/posts/shipping-form/shipping-form-routing.module.ts");
/* harmony import */ var _shipping_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipping-form.page */ "./src/app/posts/shipping-form/shipping-form.page.ts");







let ShippingFormPageModule = class ShippingFormPageModule {
};
ShippingFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shipping_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShippingFormPageRoutingModule"],
        ],
        declarations: [_shipping_form_page__WEBPACK_IMPORTED_MODULE_6__["ShippingFormPage"]],
        providers: [],
        exports: [],
    })
], ShippingFormPageModule);



/***/ }),

/***/ "./src/app/posts/shipping-form/shipping-form.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/posts/shipping-form/shipping-form.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-group {\n  margin: 10px 0;\n}\n\n#tabs-container {\n  bottom: 0;\n  position: static;\n  width: 100%;\n}\n\n.image-container {\n  min-height: 200px;\n  background-size: cover;\n}\n\n@media (min-width: 0px) {\n  .images {\n    -moz-column-count: 2;\n         column-count: 2;\n  }\n}\n\n@media (min-width: 420px) {\n  .images {\n    -moz-column-count: 3;\n         column-count: 3;\n  }\n}\n\n@media (min-width: 720px) {\n  .images {\n    -moz-column-count: 4;\n         column-count: 4;\n  }\n}\n\n.one-image {\n  margin: 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvc2hpcHBpbmctZm9ybS9DOlxcVXNlcnNcXGluZ2RtXFxwcm9qZWN0c1xcb3Rvcm9cXGZyb250L3NyY1xcYXBwXFxwb3N0c1xcc2hpcHBpbmctZm9ybVxcc2hpcHBpbmctZm9ybS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bvc3RzL3NoaXBwaW5nLWZvcm0vc2hpcHBpbmctZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FDQ2hCOztBREVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixXQUFXO0FDQ2I7O0FERUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0FDQ3hCOztBREVBO0VBQ0U7SUFDRSxvQkFBZTtTQUFmLGVBQWU7RUNDakI7QUFDRjs7QURFQTtFQUNFO0lBQ0Usb0JBQWU7U0FBZixlQUFlO0VDQ2pCO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLG9CQUFlO1NBQWYsZUFBZTtFQ0NqQjtBQUNGOztBREVBO0VBQ0UsV0FBVztBQ0NiIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvc2hpcHBpbmctZm9ybS9zaGlwcGluZy1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuI3RhYnMtY29udGFpbmVyIHtcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDBweCkge1xyXG4gIC5pbWFnZXMge1xyXG4gICAgY29sdW1uLWNvdW50OiAyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQyMHB4KSB7XHJcbiAgLmltYWdlcyB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuICAuaW1hZ2VzIHtcclxuICAgIGNvbHVtbi1jb3VudDogNDtcclxuICB9XHJcbn1cclxuXHJcbi5vbmUtaW1hZ2Uge1xyXG4gIG1hcmdpbjogMnB4O1xyXG59XHJcbiIsIi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbiN0YWJzLWNvbnRhaW5lciB7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDBweCkge1xuICAuaW1hZ2VzIHtcbiAgICBjb2x1bW4tY291bnQ6IDI7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQyMHB4KSB7XG4gIC5pbWFnZXMge1xuICAgIGNvbHVtbi1jb3VudDogMztcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgLmltYWdlcyB7XG4gICAgY29sdW1uLWNvdW50OiA0O1xuICB9XG59XG5cbi5vbmUtaW1hZ2Uge1xuICBtYXJnaW46IDJweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/posts/shipping-form/shipping-form.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/posts/shipping-form/shipping-form.page.ts ***!
  \***********************************************************/
/*! exports provided: ShippingFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFormPage", function() { return ShippingFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/posts/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/select-city/select-city.component */ "./src/app/shared/select-city/select-city.component.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");










let ShippingFormPage = class ShippingFormPage {
    constructor(alertController, loadingController, modalController, postService, route, router, sanitizer, storage) {
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.storage = storage;
    }
    ngOnInit() {
        this.title = "Que quieres publicar?";
        this.sub = this.route.params.subscribe((params) => {
            this.shippingId = params["id"];
            if (this.shippingId !== "0") {
                this.title = "Editar envio";
            }
            this.storage.get("auth").then((auth) => {
                this.auth = auth;
                if (this.shippingId !== "0") {
                    this.getPost();
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
            destination: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("destination", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.initializeShippingFormControls();
    }
    initializeShippingFormControls() {
        this.shippingForm.controls["title"].setValue(null);
        this.shippingForm.controls["description"].setValue(null);
        this.shippingForm.controls["date"].setValue(null);
        this.shippingForm.controls["origin"].setValue(null);
        this.shippingForm.controls["destination"].setValue(null);
        this.origin = null;
        this.destination = null;
    }
    selectPhoto(slide) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ab = yield this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraSource"].Photos, slide);
            yield this.uploadImage(ab, slide);
        });
    }
    takePicture(slide) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ab = yield this.getPhoto(_capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraSource"].Camera, slide);
            yield this.uploadImage(ab, slide);
        });
    }
    getPhoto(source, slide) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraResultType"].Uri,
                source,
            });
            let photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);
            if (slide === 1) {
                this.photo1 = photo;
            }
            else if (slide === 2) {
                this.photo2 = photo;
            }
            else {
                this.photo3 = photo;
            }
            return image.webPath;
        });
    }
    uploadImage(webPath, slide) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: "Cargando...",
            });
            yield this.loading.present();
            const blob = yield fetch(webPath).then((r) => r.blob());
            if (slide === 1) {
                this.formData.append("image1", blob, `profile-picture1.jpg`);
            }
            else if (slide === 2) {
                this.formData.append("image2", blob, `profile-picture2.jpg`);
            }
            else {
                this.formData.append("image3", blob, `profile-picture3.jpg`);
            }
            yield this.loading.dismiss();
        });
    }
    openOriginModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__["SelectCityComponent"],
                cssClass: "my-custom-class",
            });
            return yield modal.present().then(() => {
                modal.onWillDismiss().then((response) => {
                    this.origin = response.data.city;
                    if (this.origin) {
                        this.shippingForm.controls["origin"].setValue(this.origin.name);
                    }
                    else {
                        this.shippingForm.controls["origin"].setValue(null);
                    }
                });
            });
        });
    }
    openDestinationModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_7__["SelectCityComponent"],
                cssClass: "my-custom-class",
            });
            return yield modal.present().then(() => {
                modal.onWillDismiss().then((response) => {
                    this.destination = response.data.city;
                    if (this.destination) {
                        this.shippingForm.controls["destination"].setValue(this.destination.name);
                    }
                    else {
                        this.shippingForm.controls["destination"].setValue(null);
                    }
                });
            });
        });
    }
    getPost() {
        this.postService
            .getById(this.auth, this.shippingId)
            .toPromise()
            .then((res) => {
            const result = res.json();
            this.shippingForm.controls["title"].setValue(result.title);
            this.shippingForm.controls["description"].setValue(result.description);
            this.shippingForm.controls["date"].setValue(result.date);
            this.shippingForm.controls["origin"].setValue(result.origin.name);
            this.shippingForm.controls["destination"].setValue(result.destination.name);
            this.origin = result.origin;
            this.destination = result.destination;
        }, (err) => {
            let error = JSON.parse(err._body);
            console.log(error);
        });
    }
    saveShipping() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let controls = this.shippingForm.controls;
            if (this.shippingForm.invalid) {
                Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
                return;
            }
            let body = {
                type: 1,
                title: controls["title"].value,
                description: controls["description"].value,
                date: controls["date"].value,
                origin: this.origin,
                destination: this.destination,
                user: { id: this.auth.id },
            };
            if (this.shippingId !== "0") {
                body = Object.assign(Object.assign({}, body), { id: this.shippingId });
            }
            this.formData.append("postCommand", new Blob([JSON.stringify(body)], {
                type: "application/json",
            }));
            let action = this.postService.save(this.formData, this.auth.token);
            if (body.id) {
                action = this.postService.update(this.formData, this.auth.token);
            }
            this.loading = yield this.loadingController.create({
                message: "Cargando...",
            });
            yield this.loading.present();
            action.toPromise().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.initializeShippingFormControls();
                yield this.loading.dismiss();
                let alert = yield this.alertController.create({
                    header: "Guardado exitoso",
                    message: "Tu publicación se ha guardado correctamente",
                    buttons: [
                        {
                            text: "Aceptar",
                            role: "cancel",
                            handler: () => {
                                this.goBackToDashboard();
                            },
                        },
                    ],
                });
                alert.present();
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
                let error = JSON.parse(err._body);
                console.log(error);
            }));
        });
    }
    goBackToDashboard() {
        this.router.navigate(["/dashboard"]);
    }
    goToSellForm() {
        if (this.activeTab !== 2) {
            this.router.navigate(["posts/create-sell/0"]);
        }
    }
    controlHasError(controlName, validationType) {
        const control = this.shippingForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
};
ShippingFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
ShippingFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-shipping-form",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shipping-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/shipping-form/shipping-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shipping-form.page.scss */ "./src/app/posts/shipping-form/shipping-form.page.scss")).default]
    })
], ShippingFormPage);



/***/ })

}]);
//# sourceMappingURL=posts-posts-module-es2015.js.map