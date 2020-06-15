(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module"],{

/***/ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js ***!
  \***************************************************************************/
/*! exports provided: OutputType, ImagePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputType", function() { return OutputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePicker", function() { return ImagePicker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");




var OutputType;
(function (OutputType) {
    OutputType[OutputType["FILE_URL"] = 0] = "FILE_URL";
    OutputType[OutputType["DATA_URL"] = 1] = "DATA_URL";
})(OutputType || (OutputType = {}));
var ImagePicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ImagePicker, _super);
    function ImagePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImagePicker.prototype.getPictures = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPictures", { "callbackOrder": "reverse" }, arguments); };
    ImagePicker.prototype.hasReadPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePicker.prototype.requestReadPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePicker.pluginName = "ImagePicker";
    ImagePicker.plugin = "cordova-plugin-telerik-imagepicker";
    ImagePicker.pluginRef = "window.imagePicker";
    ImagePicker.repo = "https://github.com/Telerik-Verified-Plugins/ImagePicker";
    ImagePicker.install = "ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION=\"your usage message\"";
    ImagePicker.installVariables = ["PHOTO_LIBRARY_USAGE_DESCRIPTION"];
    ImagePicker.platforms = ["Android", "iOS"];
ImagePicker.ɵfac = function ImagePicker_Factory(t) { return ɵImagePicker_BaseFactory(t || ImagePicker); };
ImagePicker.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImagePicker, factory: function (t) { return ImagePicker.ɵfac(t); } });
var ɵImagePicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ImagePicker);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImagePicker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return ImagePicker;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvaW1hZ2UtcGlja2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQW9EeEUsTUFBTSxDQUFOLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtBQUNyQixJQUFDLG1EQUFZLENBQUE7QUFBQyxJQUNiLG1EQUFRLENBQUE7QUFDVixDQUFDLEVBSFcsVUFBVSxLQUFWLFVBQVUsUUFHckI7QUFDRDtBQUlVLElBbUN1QiwrQkFBaUI7QUFBQztBQUU5QjtBQUVMO0FBQU0sSUFNcEIsaUNBQVcsYUFBQyxPQUEyQjtBQUtLLElBTTVDLHVDQUFpQjtBQU1BLElBS2pCLDJDQUFxQjtBQUlnRDtBQUE0QztBQUErRDtBQUFrRDtBQUFrRjtBQUEySjtBQUF3RTtJQXBDNWdCLFdBQVcsd0JBRHZCLFVBQVUsRUFBRSxRQUNBLFdBQVc7Ozs7OzBCQUFFO0FBQUMsc0JBaEczQjtBQUFFLEVBZ0crQixpQkFBaUI7QUFDakQsU0FEWSxXQUFXO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVBpY2tlck9wdGlvbnMge1xuICAvKipcbiAgICogbWF4IGltYWdlcyB0byBiZSBzZWxlY3RlZCwgZGVmYXVsdHMgdG8gMTUuIElmIHRoaXMgaXMgc2V0IHRvIDEsIHVwb24gc2VsZWN0aW9uIG9mIGEgc2luZ2xlIGltYWdlLCB0aGUgcGx1Z2luIHdpbGwgcmV0dXJuIGl0LiAoQW5kcm9pZCBvbmx5KVxuICAgKi9cbiAgbWF4aW11bUltYWdlc0NvdW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNYXggd2lkdGggdG8gYWxsb3cgaW1hZ2VzIHRvIGJlXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4IGhlaWdodCB0byBhbGxvdyBpbWFnZXMgdG8gYmVcbiAgICovXG4gIGhlaWdodD86IG51bWJlcjtcblxuICAvKipcbiAgICogUXVhbGl0eSBvZiBpbWFnZXMsIGRlZmF1bHRzIHRvIDEwMFxuICAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcblxuICAvKipcbiAgICogVmlkZW9zIGFsbG93ZWQ/XG4gICAqL1xuICBhbGxvd192aWRlbz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIHRoZSBkZWZhdWx0IGlzIHRoZSBtZXNzYWdlIG9mIHRoZSBvbGQgcGx1Z2luIGltcGxcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiB0aGUgb2xkIHBsdWdpbiBpbXBsIGRpZG4ndCBoYXZlIGl0LCBzbyBwYXNzaW5nIG51bGwgYnkgZGVmYXVsdFxuICAgKi9cbiAgbWVzc2FnZT86IHN0cmluZztcblxuICAvKipcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZS5cbiAgICogRGVmaW5lZCBpbiBJbWFnZVBpY2tlci5PdXRwdXRUeXBlLiBEZWZhdWx0IGlzIEZJTEVfVVJJLlxuICAgKiAgICAgIEZJTEVfVVJJIDogMCwgICBSZXR1cm4gaW1hZ2UgZmlsZSBVUkksXG4gICAqICAgICAgREFUQV9VUkwgOiAxLCAgIFJldHVybiBpbWFnZSBhcyBiYXNlNjQtZW5jb2RlZCBzdHJpbmdcbiAgICovXG4gIG91dHB1dFR5cGU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGlPUyBwb3BvdmVyIGFzIHNlZW4gb24gaVBhZFxuICAgKi9cbiAgZGlzYWJsZV9wb3BvdmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGVudW0gT3V0cHV0VHlwZSB7XG4gIEZJTEVfVVJMID0gMCxcbiAgREFUQV9VUkwsXG59XG5cbi8qKlxuICogQG5hbWUgSW1hZ2UgUGlja2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgUGx1Z2luIEZvciBNdWx0aXBsZSBJbWFnZSBTZWxlY3Rpb25cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWltYWdlLXBpY2tlcmAuXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBodHRwczovL2dpdGh1Yi5jb20vVGVsZXJpay1WZXJpZmllZC1QbHVnaW5zL0ltYWdlUGlja2VyXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJbWFnZVBpY2tlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW1hZ2UtcGlja2VyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW1hZ2VQaWNrZXI6IEltYWdlUGlja2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmltYWdlUGlja2VyLmdldFBpY3R1cmVzKG9wdGlvbnMpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAqICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gKiAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UgVVJJOiAnICsgcmVzdWx0c1tpXSk7XG4gKiAgIH1cbiAqIH0sIChlcnIpID0+IHsgfSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSW1hZ2VQaWNrZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSW1hZ2VQaWNrZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10ZWxlcmlrLWltYWdlcGlja2VyJyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LmltYWdlUGlja2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UZWxlcmlrLVZlcmlmaWVkLVBsdWdpbnMvSW1hZ2VQaWNrZXInLFxuICBpbnN0YWxsOlxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tdGVsZXJpay1pbWFnZXBpY2tlciAtLXZhcmlhYmxlIFBIT1RPX0xJQlJBUllfVVNBR0VfREVTQ1JJUFRJT049XCJ5b3VyIHVzYWdlIG1lc3NhZ2VcIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnUEhPVE9fTElCUkFSWV9VU0FHRV9ERVNDUklQVElPTiddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW1hZ2VQaWNrZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBQaWNrIHBpY3R1cmVzIGZyb20gdGhlIGxpYnJhcnkuXG4gICAqIEBwYXJhbSB7SW1hZ2VQaWNrZXJPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdGhlIGltYWdlIGZpbGUgVVJJXG4gICAqIG90aGVyd2lzZSByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXRQaWN0dXJlcyhvcHRpb25zOiBJbWFnZVBpY2tlck9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSBoYXZlIHBlcm1pc3Npb24gdG8gcmVhZCBpbWFnZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB3ZSBoYXZlIHBlcm1pc3Npb25cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICB9KVxuICBoYXNSZWFkUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uIHRvIHJlYWQgaW1hZ2VzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgfSlcbiAgcmVxdWVzdFJlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list-general/posts-list-general.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list-general/posts-list-general.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab\n    vertical=\"bottom\"\n    horizontal=\"end\"\n    slot=\"fixed\"\n    (click)=\"goToPostCreation()\"\n  >\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <h4 class=\"centered-text\">Todas las publicaciones</h4>\n  <form [formGroup]=\"searchForm\">\n    <ion-item>\n      <input\n        name=\"query\"\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"Busca una ciudad\"\n        formControlName=\"queryControl\"\n        (keyup)=\"search()\"\n      />\n    </ion-item>\n  </form>\n  <ion-row class=\"top-tab-container\">\n    <ion-col (click)=\"changeActiveTab(1)\"><span>Envios</span></ion-col>\n    <ion-col (click)=\"changeActiveTab(2)\"><span>Ventas</span></ion-col>\n  </ion-row>\n  <div class=\"posts-list\" *ngIf=\"shippings.length > 0 && activeTab === 1\">\n    <app-post-card\n      *ngFor=\"let shipping of shippings\"\n      imageSrc=\"https://construyored.com/assets/img/logo.png\"\n      [title]=\"shipping.title\"\n      [date]=\"shipping.date\"\n      type=\"1\"\n    ></app-post-card>\n  </div>\n  <div class=\"posts-list\" *ngIf=\"sells.length > 0 && activeTab === 2\">\n    <app-post-card\n      *ngFor=\"let sell of sells\"\n      imageSrc=\"https://construyored.com/assets/img/logo.png\"\n      [title]=\"sell.title\"\n      [price]=\"sell.price\"\n      type=\"2\"\n    ></app-post-card>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list/posts-list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list/posts-list.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab\n    vertical=\"bottom\"\n    horizontal=\"end\"\n    slot=\"fixed\"\n    (click)=\"goToPostCreation()\"\n  >\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <h4 class=\"centered-text\">{{title}}</h4>\n  <ion-row class=\"top-tab-container\">\n    <ion-col (click)=\"changeActiveTab(1)\"><span>Envios</span></ion-col>\n    <ion-col (click)=\"changeActiveTab(2)\"><span>Ventas</span></ion-col>\n  </ion-row>\n  <div class=\"posts-list\" *ngIf=\"shippings.length > 0 && activeTab === 1\">\n    <app-post-card\n      *ngFor=\"let shipping of shippings\"\n      imageSrc=\"https://construyored.com/assets/img/logo.png\"\n      [title]=\"shipping.title\"\n      [date]=\"shipping.date\"\n      type=\"1\"\n    ></app-post-card>\n  </div>\n  <div class=\"posts-list\" *ngIf=\"sells.length > 0 && activeTab === 2\">\n    <app-post-card\n      *ngFor=\"let sell of sells\"\n      imageSrc=\"https://construyored.com/assets/img/logo.png\"\n      [title]=\"sell.title\"\n      [price]=\"sell.price\"\n      type=\"2\"\n    ></app-post-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/sell-form/sell-form.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/sell-form/sell-form.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n    <h4 class=\"centered-text\">Que quieres publicar?</h4>    \r\n    <ion-row>\r\n      <ion-col text-center>\r\n        <ion-button (click)=\"getImages()\">Choose Images</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <!-- More Pinterest floating gallery style -->\r\n        <div class=\"images\">\r\n          <div class=\"one-image\" *ngFor=\"let img of imageResponse\">\r\n            <img src=\"{{img}}\" alt=\"\" srcset=\"\" />\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row id=\"form-container\">\r\n      <ion-col col-12>\r\n        <form [formGroup]=\"sellForm\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">T&iacute;tulo</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"title\"\r\n            />\r\n            <span *ngIf=\"controlHasError('title', 'required')\">\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Descripci&oacute;n</label>\r\n            <textarea\r\n              class=\"form-control width-100\"\r\n              formControlName=\"description\"\r\n            ></textarea>\r\n            <span *ngIf=\"controlHasError('description', 'required')\">\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Precio</label>\r\n            <input\r\n              class=\"form-control width-100\"\r\n              formControlName=\"price\"\r\n              type=\"number\"\r\n            />\r\n            <span *ngIf=\"controlHasError('price', 'required')\">\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Ubicaci&oacute;n</label>\r\n            <ion-item (click)=\"openOriginModal()\">\r\n              <span *ngIf=\"!origin\">Selecciona una ubicaci&oacute;n</span>\r\n              <span *ngIf=\"origin\">{{origin.name}}</span>\r\n            </ion-item>\r\n            <input type=\"text\" class=\"display-none\" formControlName=\"origin\" />\r\n            <span *ngIf=\"controlHasError('origin', 'required')\">\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button color=\"primary\" (click)=\"saveSell()\" class=\"width-100\">\r\n          Guardar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button\r\n          color=\"danger\"\r\n          (click)=\"goBackToDashboard()\"\r\n          class=\"width-100\"\r\n        >\r\n          Cancelar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <ion-grid id=\"tabs-container\">\r\n    <ion-row>\r\n      <ion-col (click)=\"goToShippingForm()\" col-6 class=\"centered-text\">\r\n        <ion-icon name=\"send\"></ion-icon>\r\n        <ion-label>Envio</ion-label>\r\n      </ion-col>\r\n      <ion-col col-6 class=\"centered-text\">\r\n        <ion-icon name=\"pricetag\"></ion-icon>\r\n        <ion-label>Venta</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/shipping-form/shipping-form.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/shipping-form/shipping-form.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ folder }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n    <h4 class=\"centered-text\">Que quieres publicar?</h4>\r\n    <ion-row>\r\n      <ion-col text-center>\r\n        <ion-button (click)=\"getImages()\">Choose Images</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <!-- More Pinterest floating gallery style -->\r\n        <div class=\"images\">\r\n          <div class=\"one-image\" *ngFor=\"let img of imageResponse\">\r\n            <img src=\"{{img}}\" alt=\"\" srcset=\"\" />\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row id=\"form-container\">\r\n      <ion-col col-12>\r\n        <form [formGroup]=\"shippingForm\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">T&iacute;tulo</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control width-100\"\r\n              formControlName=\"title\"\r\n            />\r\n            <span *ngIf=\"controlHasError('title', 'required')\">\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Descripci&oacute;n</label>\r\n            <textarea\r\n              class=\"form-control width-100\"\r\n              formControlName=\"description\"\r\n            ></textarea>\r\n            <span *ngIf=\"controlHasError('description', 'required')\">\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <ion-item>\r\n              <ion-label class=\"bold\">Selecciona fecha</ion-label>\r\n              <ion-datetime\r\n                id=\"dynamicDisabled\"\r\n                displayFormat=\"MMMM DD YYYY\"\r\n                value=\"1994-12-15\"\r\n                formControlName=\"date\"\r\n              ></ion-datetime>\r\n            </ion-item>\r\n            <span *ngIf=\"controlHasError('date', 'required')\">\r\n              <strong class=\"error\">Campo requerido</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Origen del envio</label>\r\n            <ion-item (click)=\"openOriginModal()\">\r\n              <span *ngIf=\"!origin\">Selecciona un origen</span>\r\n              <span *ngIf=\"origin\">{{origin.name}}</span>\r\n            </ion-item>\r\n            <input\r\n              type=\"text\"\r\n              class=\"display-none\"\r\n              formControlName=\"origin\"             \r\n            />\r\n            <span *ngIf=\"controlHasError('origin', 'required')\">\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"bold\">Origen del destino</label>\r\n            <ion-item (click)=\"openDestinationModal()\">\r\n              <span *ngIf=\"!destination\">Selecciona un destino</span>\r\n              <span *ngIf=\"destination\">{{destination.name}}</span>\r\n            </ion-item>\r\n            <input\r\n              type=\"text\"\r\n              class=\"display-none\"\r\n              formControlName=\"destination\"\r\n              display=\"none\"\r\n            />\r\n            <span *ngIf=\"controlHasError('destination', 'required')\">\r\n              <strong class=\"error\">Selecciona una ciudad</strong>\r\n            </span>\r\n          </div>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button color=\"primary\" (click)=\"saveShipping()\" class=\"width-100\">\r\n          Guardar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-12>\r\n        <ion-button\r\n          color=\"danger\"\r\n          (click)=\"goBackToDashboard()\"\r\n          class=\"width-100\"\r\n        >\r\n          Cancelar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <ion-grid id=\"tabs-container\">\r\n    <ion-row>\r\n      <ion-col col-6 class=\"centered-text\">\r\n        <ion-icon name=\"send\"></ion-icon>\r\n        <ion-label>Envio</ion-label>\r\n      </ion-col>\r\n      <ion-col (click)=\"goToSellForm()\" col-6 class=\"centered-text\">\r\n        <ion-icon name=\"pricetag\"></ion-icon>\r\n        <ion-label>Venta</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/posts/post.service.ts":
/*!***************************************!*\
  !*** ./src/app/posts/post.service.ts ***!
  \***************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/rest.service */ "./src/app/core/services/rest.service.ts");



let PostService = class PostService {
    constructor(service) {
        this.service = service;
    }
    save(body, token) {
        let url = `posts`;
        return this.service.queryPost(url, body, token);
    }
    getByType(auth, type) {
        let url = `posts/get-by-type/${type}/${auth.id}`;
        return this.service.queryGet(url, auth.token);
    }
    search(auth, query, type) {
        let url = `posts/search/${type}${undefined != query && null != query && "" != query
            ? `?query=${query}`
            : ``}`;
        return this.service.queryGet(url, auth.token);
    }
};
PostService.ctorParameters = () => [
    { type: _core_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
];
PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], PostService);



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






let PostsListGeneralPage = class PostsListGeneralPage {
    constructor(route, postService, storage) {
        this.route = route;
        this.postService = postService;
        this.storage = storage;
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
            console.log(error);
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
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
PostsListGeneralPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
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





let PostsListPage = class PostsListPage {
    constructor(route, postService, storage) {
        this.route = route;
        this.postService = postService;
        this.storage = storage;
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
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
PostsListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
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
        path: "create-shipping",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./shipping-form/shipping-form.module */ "./src/app/posts/shipping-form/shipping-form.module.ts")).then((m) => m.ShippingFormPageModule),
    },
    {
        path: "create-sell",
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
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _posts_list_posts_list_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./posts-list/posts-list.module */ "./src/app/posts/posts-list/posts-list.module.ts");
/* harmony import */ var _posts_list_general_posts_list_general_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./posts-list-general/posts-list-general.module */ "./src/app/posts/posts-list-general/posts-list-general.module.ts");














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
            _posts_list_posts_list_module__WEBPACK_IMPORTED_MODULE_12__["PostsListPageModule"],
            _posts_list_general_posts_list_general_module__WEBPACK_IMPORTED_MODULE_13__["PostsListGeneralPageModule"]
        ],
        providers: [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["ImagePicker"]],
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
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/select-city/select-city.component */ "./src/app/shared/select-city/select-city.component.ts");









let SellFormPage = class SellFormPage {
    constructor(router, postService, imagePicker, storage, modalController) {
        this.router = router;
        this.postService = postService;
        this.imagePicker = imagePicker;
        this.storage = storage;
        this.modalController = modalController;
    }
    ngOnInit() {
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
        this.sellForm.controls["title"].setValue(null);
        this.sellForm.controls["description"].setValue(null);
        this.sellForm.controls["price"].setValue(null);
        this.sellForm.controls["origin"].setValue(null);
    }
    openOriginModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_8__["SelectCityComponent"],
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
        let controls = this.sellForm.controls;
        if (this.sellForm.invalid) {
            Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
            return;
        }
        const body = {
            type: 2,
            image: "",
            title: controls["title"].value,
            description: controls["description"].value,
            price: controls["price"].value,
            origin: this.origin,
            user: { id: this.auth.id },
        };
        this.postService
            .save(body, this.auth.token)
            .toPromise()
            .then((res) => {
            //const result = res.json();
            console.log(res);
        }, (err) => {
            let error = JSON.parse(err._body);
            console.log(error);
        });
    }
    getImages() {
        this.options = {
            // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
            // selection of a single image, the plugin will return it.
            //maximumImagesCount: 3,
            // max width and height to allow the images to be.  Will keep aspect
            // ratio no matter what.  So if both are 800, the returned image
            // will be at most 800 pixels wide and 800 pixels tall.  If the width is
            // 800 and height 0 the image will be 800 pixels wide if the source
            // is at least that wide.
            width: 200,
            //height: 200,
            // quality of resized image, defaults to 100
            quality: 25,
            // output type, defaults to FILE_URIs.
            // available options are
            // window.imagePicker.OutputType.FILE_URI (0) or
            // window.imagePicker.OutputType.BASE64_STRING (1)
            outputType: 1,
        };
        this.imageResponse = [];
        this.imagePicker.getPictures(this.options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                this.imageResponse.push("data:image/jpeg;base64," + results[i]);
            }
        }, (err) => {
            alert(err);
        });
    }
    goBackToDashboard() {
        this.router.navigate(["/dashboard"]);
    }
    goToShippingForm() {
        if (this.activeTab !== 1) {
            this.router.navigate(["posts/create-shipping"]);
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
};
SellFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
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
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");








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
        providers: [_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"]],
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
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/select-city/select-city.component */ "./src/app/shared/select-city/select-city.component.ts");









let ShippingFormPage = class ShippingFormPage {
    constructor(postService, router, imagePicker, storage, modalController) {
        this.postService = postService;
        this.router = router;
        this.imagePicker = imagePicker;
        this.storage = storage;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.activeTab = 1;
        this.storage.get("auth").then((auth) => {
            this.auth = auth;
        });
        this.shippingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("title", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("description", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("date", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            origin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("origin", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            destination: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("destination", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.shippingForm.controls["title"].setValue(null);
        this.shippingForm.controls["description"].setValue(null);
        this.shippingForm.controls["date"].setValue(null);
        this.shippingForm.controls["origin"].setValue(null);
        this.shippingForm.controls["destination"].setValue(null);
    }
    openOriginModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_8__["SelectCityComponent"],
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
                component: src_app_shared_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_8__["SelectCityComponent"],
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
    saveShipping() {
        let controls = this.shippingForm.controls;
        if (this.shippingForm.invalid) {
            Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
            return;
        }
        const body = {
            type: 1,
            image: "",
            title: controls["title"].value,
            description: controls["description"].value,
            date: controls["date"].value,
            origin: this.origin,
            destination: this.destination,
            user: { id: this.auth.id },
        };
        this.postService
            .save(body, this.auth.token)
            .toPromise()
            .then((res) => {
            //const result = res.json();
            console.log(res);
        }, (err) => {
            let error = JSON.parse(err._body);
            console.log(error);
        });
    }
    getImages() {
        this.options = {
            // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
            // selection of a single image, the plugin will return it.
            //maximumImagesCount: 3,
            // max width and height to allow the images to be.  Will keep aspect
            // ratio no matter what.  So if both are 800, the returned image
            // will be at most 800 pixels wide and 800 pixels tall.  If the width is
            // 800 and height 0 the image will be 800 pixels wide if the source
            // is at least that wide.
            width: 200,
            //height: 200,
            // quality of resized image, defaults to 100
            quality: 25,
            // output type, defaults to FILE_URIs.
            // available options are
            // window.imagePicker.OutputType.FILE_URI (0) or
            // window.imagePicker.OutputType.BASE64_STRING (1)
            outputType: 1,
        };
        this.imageResponse = [];
        this.imagePicker.getPictures(this.options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                this.imageResponse.push("data:image/jpeg;base64," + results[i]);
            }
        }, (err) => {
            alert(err);
        });
    }
    goBackToDashboard() {
        this.router.navigate(["/dashboard"]);
    }
    goToSellForm() {
        if (this.activeTab !== 2) {
            this.router.navigate(["posts/create-sell"]);
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
    { type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
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