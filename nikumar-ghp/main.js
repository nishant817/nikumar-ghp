(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n   font-family: 'Poppins', sans-serif;\r\n   background: #fafafa;\r\n   padding-top: 100px;\r\n}\r\n\r\np {\r\n font-family: 'Poppins', sans-serif;\r\n font-size: 1.1em;\r\n font-weight: 300;\r\n line-height: 1.7em;\r\n color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n color: inherit;\r\n text-decoration: none;\r\n transition: all 0.3s;\r\n}\r\n\r\n/* .navbar {\r\n padding: 15px 10px;\r\n background: #fff;\r\n border: none;\r\n border-radius: 0;\r\n margin-bottom: 40px;\r\n box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n} */\r\n\r\n.navbar-btn {\r\n box-shadow: none;\r\n outline: none !important;\r\n border: none;\r\n}\r\n\r\n.line {\r\n width: 100%;\r\n height: 1px;\r\n border-bottom: 1px dashed #ddd;\r\n margin: 40px 0;\r\n}\r\n\r\ni,\r\nspan {\r\n display: inline-block;\r\n}\r\n\r\n.wrapper {\r\n display: flex;\r\n align-items: stretch;\r\n}\r\n\r\n#topnav .nav-item {\r\n  width: 100px;\r\n}\r\n\r\n#topnav .nav-item .active {\r\n  background-color: darkolivegreen;\r\n}\r\n\r\n#sidenav {\r\n min-width: 250px;\r\n max-width: 250px;\r\n background: #7386D5;\r\n color: #fff;\r\n transition: all 0.3s;  \r\n}\r\n\r\n#sidenav.sidenav-collapsed {\r\n min-width: 80px;\r\n max-width: 80px;\r\n text-align: center;\r\n}\r\n\r\n#sidenav.sidenav-collapsed .sidebar-header h3,\r\n#sidenav.sidenav-collapsed .CTAs {\r\n display: none;\r\n}\r\n\r\n#sidenav.sidenav-collapsed .sidebar-header strong {\r\n display: block;\r\n}\r\n\r\n#sidenav ul li a {\r\n text-align: left;\r\n}\r\n\r\n#sidenav.sidenav-collapsed ul li a {\r\n padding: 20px 10px;\r\n text-align: center;\r\n font-size: 0.85em;\r\n}\r\n\r\n#sidenav.sidenav-collapsed ul li a i {\r\n margin-right: 0;\r\n display: block;\r\n font-size: 1.8em;\r\n margin-bottom: 5px;\r\n}\r\n\r\n#sidenav.sidenav-collapsed ul ul a {\r\n   padding: 10px !important;\r\n}\r\n\r\n#sidenav.sidenav-collapsed .dropdown-toggle::after {\r\n top: auto;\r\n bottom: 10px;\r\n right: 50%;\r\n transform: translateX(50%);\r\n}\r\n\r\n#sidenav .sidebar-header {\r\n padding: 20px;\r\n background: #6d7fcc;\r\n}\r\n\r\n#sidenav .sidebar-header strong {\r\n display: none;\r\n font-size: 1.8em;\r\n}\r\n\r\n#sidenav ul.components {\r\n padding: 20px 0;\r\n border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidenav ul li a {\r\n padding: 10px;\r\n font-size: 1.1em;\r\n display: block;\r\n}\r\n\r\n#sidenav ul li a:hover {\r\n color: #7386D5;\r\n background: #fff;\r\n}\r\n\r\n#sidenav ul li a i {\r\n margin-right: 10px;\r\n}\r\n\r\n#sidenav ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n color: #fff;\r\n background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n display: block;\r\n position: absolute;\r\n top: 50%;\r\n right: 20px;\r\n transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n   font-size: 0.9em !important;\r\n   padding-left: 30px !important;\r\n   background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n text-align: center;\r\n font-size: 0.9em !important;\r\n display: block;\r\n border-radius: 5px;\r\n margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n background: #fff;\r\n color: #7386D5;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n background: #6d7fcc !important;\r\n color: #fff !important;\r\n}\r\n\r\n/* -------------------- CONTENT STYLE ------------------------- */\r\n\r\n#content {\r\n width: 100%;\r\n padding: 20px;\r\n min-height: 100vh;\r\n transition: all 0.3s;\r\n}\r\n\r\nul.nav-pills {\r\n top: 20px;\r\n position: fixed;\r\n}\r\n\r\n/* Start Sidebar v1 */\r\n\r\n.sidebar-v1 {\r\n  height: 100%;\r\n  /* width: 100px; */\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #111;\r\n  overflow-x: hidden;\r\n  padding-top: 0px;\r\n}\r\n\r\n.sidebar-v1 a {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n  color: #818181;\r\n  display: block;\r\n}\r\n\r\n.sidebar-v1 a:hover {\r\n  color: #f1f1f1;\r\n}\r\n\r\n.main-v1 {\r\n  /* margin-left: 100px;  */\r\n  /* Same as the width of the sidenav */\r\n  /* padding: 0px -20px; */\r\n  margin-left: -50px;\r\n}\r\n\r\n/* End Sidebar v1 */\r\n\r\n.sidebar-icon-container i {\r\n  font-size: 40px;\r\n}\r\n\r\n/* --------------- MEDIAQUERIES ---------------------- */\r\n\r\n@media (max-width: 768px) {\r\n   #sidenav {\r\n       min-width: 80px;\r\n       max-width: 80px;\r\n       text-align: center;\r\n       margin-left: -80px !important;\r\n   }\r\n   .dropdown-toggle::after {\r\n       top: auto;\r\n       bottom: 10px;\r\n       right: 50%;\r\n       transform: translateX(50%);\r\n   }\r\n   #sidenav.sidenav-collapsed {\r\n       margin-left: 0 !important;\r\n   }\r\n   #sidenav .sidebar-header h3,\r\n   #sidenav .CTAs {\r\n       display: none;\r\n   }\r\n   #sidenav .sidebar-header strong {\r\n       display: block;\r\n   }\r\n   #sidenav ul li a {\r\n       padding: 20px 10px;\r\n   }\r\n   #sidenav ul li a span {\r\n       font-size: 0.85em;\r\n   }\r\n   #sidenav ul li a i {\r\n       margin-right: 0;\r\n       display: block;\r\n   }\r\n   #sidenav ul ul a {\r\n       padding: 10px !important;\r\n   }\r\n   #sidenav ul li a i {\r\n       font-size: 1.3em;\r\n   }\r\n   #sidenav {\r\n       margin-left: 0;\r\n   }\r\n   #sidenav span {\r\n       display: none;\r\n   }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxrQ0FBa0M7R0FDbEMsbUJBQW1CO0dBQ25CLGtCQUFrQjtBQUNyQjs7QUFFQTtDQUNDLGtDQUFrQztDQUNsQyxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1o7O0FBRUE7OztDQUdDLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsb0JBQW9CO0FBQ3JCOztBQUVBOzs7Ozs7O0dBT0c7O0FBRUg7Q0FDQyxnQkFBZ0I7Q0FDaEIsd0JBQXdCO0NBQ3hCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsOEJBQThCO0NBQzlCLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isb0JBQW9CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COztBQUVBOztDQUVDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0dBQ0csd0JBQXdCO0FBQzNCOztBQUVBO0NBQ0MsU0FBUztDQUNULFlBQVk7Q0FDWixVQUFVO0NBR1YsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBOztDQUVDLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixXQUFXO0NBQ1gsMkJBQTJCO0FBQzVCOztBQUVBO0dBQ0csMkJBQTJCO0dBQzNCLDZCQUE2QjtHQUM3QixtQkFBbUI7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0NBQzNCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQyw4QkFBOEI7Q0FDOUIsc0JBQXNCO0FBQ3ZCOztBQUVBLGlFQUFpRTs7QUFDakU7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixvQkFBb0I7QUFDckI7O0FBQ0E7Q0FDQyxTQUFTO0NBQ1QsZUFBZTtBQUNoQjs7QUFNQSxxQkFBcUI7O0FBQ3JCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUNBQXFDO0VBQ3JDLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBQ0EsbUJBQW1COztBQUVuQjtFQUNFLGVBQWU7QUFDakI7O0FBU0Esd0RBQXdEOztBQUN4RDtHQUNHO09BQ0ksZUFBZTtPQUNmLGVBQWU7T0FDZixrQkFBa0I7T0FDbEIsNkJBQTZCO0dBQ2pDO0dBQ0E7T0FDSSxTQUFTO09BQ1QsWUFBWTtPQUNaLFVBQVU7T0FHViwwQkFBMEI7R0FDOUI7R0FDQTtPQUNJLHlCQUF5QjtHQUM3QjtHQUNBOztPQUVJLGFBQWE7R0FDakI7R0FDQTtPQUNJLGNBQWM7R0FDbEI7R0FDQTtPQUNJLGtCQUFrQjtHQUN0QjtHQUNBO09BQ0ksaUJBQWlCO0dBQ3JCO0dBQ0E7T0FDSSxlQUFlO09BQ2YsY0FBYztHQUNsQjtHQUNBO09BQ0ksd0JBQXdCO0dBQzVCO0dBQ0E7T0FDSSxnQkFBZ0I7R0FDcEI7R0FDQTtPQUNJLGNBQWM7R0FDbEI7R0FDQTtPQUNJLGFBQWE7R0FDakI7RUFDRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG5cclxucCB7XHJcbiBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gZm9udC1zaXplOiAxLjFlbTtcclxuIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiBsaW5lLWhlaWdodDogMS43ZW07XHJcbiBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuYSxcclxuYTpob3ZlcixcclxuYTpmb2N1cyB7XHJcbiBjb2xvcjogaW5oZXJpdDtcclxuIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4vKiAubmF2YmFyIHtcclxuIHBhZGRpbmc6IDE1cHggMTBweDtcclxuIGJhY2tncm91bmQ6ICNmZmY7XHJcbiBib3JkZXI6IG5vbmU7XHJcbiBib3JkZXItcmFkaXVzOiAwO1xyXG4gbWFyZ2luLWJvdHRvbTogNDBweDtcclxuIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufSAqL1xyXG5cclxuLm5hdmJhci1idG4ge1xyXG4gYm94LXNoYWRvdzogbm9uZTtcclxuIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gd2lkdGg6IDEwMCU7XHJcbiBoZWlnaHQ6IDFweDtcclxuIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuIG1hcmdpbjogNDBweCAwO1xyXG59XHJcblxyXG5pLFxyXG5zcGFuIHtcclxuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gZGlzcGxheTogZmxleDtcclxuIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG4jdG9wbmF2IC5uYXYtaXRlbSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbiN0b3BuYXYgLm5hdi1pdGVtIC5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtvbGl2ZWdyZWVuO1xyXG59XHJcblxyXG4jc2lkZW5hdiB7XHJcbiBtaW4td2lkdGg6IDI1MHB4O1xyXG4gbWF4LXdpZHRoOiAyNTBweDtcclxuIGJhY2tncm91bmQ6ICM3Mzg2RDU7XHJcbiBjb2xvcjogI2ZmZjtcclxuIHRyYW5zaXRpb246IGFsbCAwLjNzOyAgXHJcbn1cclxuXHJcbiNzaWRlbmF2LnNpZGVuYXYtY29sbGFwc2VkIHtcclxuIG1pbi13aWR0aDogODBweDtcclxuIG1heC13aWR0aDogODBweDtcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3NpZGVuYXYuc2lkZW5hdi1jb2xsYXBzZWQgLnNpZGViYXItaGVhZGVyIGgzLFxyXG4jc2lkZW5hdi5zaWRlbmF2LWNvbGxhcHNlZCAuQ1RBcyB7XHJcbiBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jc2lkZW5hdi5zaWRlbmF2LWNvbGxhcHNlZCAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcclxuIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jc2lkZW5hdiB1bCBsaSBhIHtcclxuIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiNzaWRlbmF2LnNpZGVuYXYtY29sbGFwc2VkIHVsIGxpIGEge1xyXG4gcGFkZGluZzogMjBweCAxMHB4O1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gZm9udC1zaXplOiAwLjg1ZW07XHJcbn1cclxuXHJcbiNzaWRlbmF2LnNpZGVuYXYtY29sbGFwc2VkIHVsIGxpIGEgaSB7XHJcbiBtYXJnaW4tcmlnaHQ6IDA7XHJcbiBkaXNwbGF5OiBibG9jaztcclxuIGZvbnQtc2l6ZTogMS44ZW07XHJcbiBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbiNzaWRlbmF2LnNpZGVuYXYtY29sbGFwc2VkIHVsIHVsIGEge1xyXG4gICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzaWRlbmF2LnNpZGVuYXYtY29sbGFwc2VkIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuIHRvcDogYXV0bztcclxuIGJvdHRvbTogMTBweDtcclxuIHJpZ2h0OiA1MCU7XHJcbiAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xyXG4gLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xyXG4gdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbn1cclxuXHJcbiNzaWRlbmF2IC5zaWRlYmFyLWhlYWRlciB7XHJcbiBwYWRkaW5nOiAyMHB4O1xyXG4gYmFja2dyb3VuZDogIzZkN2ZjYztcclxufVxyXG5cclxuI3NpZGVuYXYgLnNpZGViYXItaGVhZGVyIHN0cm9uZyB7XHJcbiBkaXNwbGF5OiBub25lO1xyXG4gZm9udC1zaXplOiAxLjhlbTtcclxufVxyXG5cclxuI3NpZGVuYXYgdWwuY29tcG9uZW50cyB7XHJcbiBwYWRkaW5nOiAyMHB4IDA7XHJcbiBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ3NzQ4YjtcclxufVxyXG5cclxuI3NpZGVuYXYgdWwgbGkgYSB7XHJcbiBwYWRkaW5nOiAxMHB4O1xyXG4gZm9udC1zaXplOiAxLjFlbTtcclxuIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jc2lkZW5hdiB1bCBsaSBhOmhvdmVyIHtcclxuIGNvbG9yOiAjNzM4NkQ1O1xyXG4gYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuI3NpZGVuYXYgdWwgbGkgYSBpIHtcclxuIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuI3NpZGVuYXYgdWwgbGkuYWN0aXZlPmEsXHJcbmFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xyXG4gY29sb3I6ICNmZmY7XHJcbiBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiBkaXNwbGF5OiBibG9jaztcclxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIHRvcDogNTAlO1xyXG4gcmlnaHQ6IDIwcHg7XHJcbiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbnVsLkNUQXMgYSB7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiBkaXNwbGF5OiBibG9jaztcclxuIGJvcmRlci1yYWRpdXM6IDVweDtcclxuIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYS5kb3dubG9hZCB7XHJcbiBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gY29sb3I6ICM3Mzg2RDU7XHJcbn1cclxuXHJcbmEuYXJ0aWNsZSxcclxuYS5hcnRpY2xlOmhvdmVyIHtcclxuIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcclxuIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tIENPTlRFTlQgU1RZTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4jY29udGVudCB7XHJcbiB3aWR0aDogMTAwJTtcclxuIHBhZGRpbmc6IDIwcHg7XHJcbiBtaW4taGVpZ2h0OiAxMDB2aDtcclxuIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbnVsLm5hdi1waWxscyB7XHJcbiB0b3A6IDIwcHg7XHJcbiBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBTdGFydCBTaWRlYmFyIHYxICovXHJcbi5zaWRlYmFyLXYxIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLyogd2lkdGg6IDEwMHB4OyAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXYxIGEge1xyXG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzgxODE4MTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNpZGViYXItdjEgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5tYWluLXYxIHtcclxuICAvKiBtYXJnaW4tbGVmdDogMTAwcHg7ICAqL1xyXG4gIC8qIFNhbWUgYXMgdGhlIHdpZHRoIG9mIHRoZSBzaWRlbmF2ICovXHJcbiAgLyogcGFkZGluZzogMHB4IC0yMHB4OyAqL1xyXG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxufVxyXG4vKiBFbmQgU2lkZWJhciB2MSAqL1xyXG5cclxuLnNpZGViYXItaWNvbi1jb250YWluZXIgaSB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tIE1FRElBUVVFUklFUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAjc2lkZW5hdiB7XHJcbiAgICAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogLTgwcHggIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICByaWdodDogNTAlO1xyXG4gICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxuICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xyXG4gICB9XHJcbiAgICNzaWRlbmF2LnNpZGVuYXYtY29sbGFwc2VkIHtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgI3NpZGVuYXYgLnNpZGViYXItaGVhZGVyIGgzLFxyXG4gICAjc2lkZW5hdiAuQ1RBcyB7XHJcbiAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICB9XHJcbiAgICNzaWRlbmF2IC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIH1cclxuICAgI3NpZGVuYXYgdWwgbGkgYSB7XHJcbiAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgIH1cclxuICAgI3NpZGVuYXYgdWwgbGkgYSBzcGFuIHtcclxuICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICB9XHJcbiAgICNzaWRlbmF2IHVsIGxpIGEgaSB7XHJcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgfVxyXG4gICAjc2lkZW5hdiB1bCB1bCBhIHtcclxuICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAjc2lkZW5hdiB1bCBsaSBhIGkge1xyXG4gICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgfVxyXG4gICAjc2lkZW5hdiB7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgfVxyXG4gICAjc2lkZW5hdiBzcGFuIHtcclxuICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-spy=\"scroll\" data-target=\".sticky-nav\" data-offset=\"50\">\n\n  <!-- Top Navigation -->\n  <topnav></topnav>\n  \n  <div class=\"main-v1 container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-1\">\n          <div class=\"sidebar-v1\">\n              <div style=\"height: 15%\">\n            \n              </div>\n              <div class=\"sidebar-icon-container\" style=\"height: 60%\">\n                  <a href=\"#home\"><i class=\"fas fa-home\" ></i></a>\n                  <a href=\"#about\"><i class=\"fas fa-user\"></i></a>\n                  <a href=\"#professionalSummary\"><i class=\"fab fa-themeco\"></i></a>\n                  <a href=\"#skills\"><i class=\"fas fa-tools\"></i></a>\n                  <a href=\"#projects\"><i class=\"fas fa-laptop-code\"></i></a>\n                  <a href=\"#education\"><i class=\"fas fa-user-graduate\"></i></a>\n                  <a href=\"#contact\"><i class=\"fas fa-id-card\"></i></a>\n              </div>\n              \n              <div style=\"height: 25%;background-color: aqua\">\n                  <a href=\"https://www.linkedin.com/in/nishant817/\"><i class=\"fab fa-linkedin-in\"></i></a>\n                  <a href=\"https://github.com/nishant817\"><i class=\"fab fa-github\"></i></a>\n                  <a href=\"mailto:nishant817@outlook.com\"><i class=\"far fa-envelope\"></i></a>\n              </div>\n            </div>\n        </div>\n  \n      <div class=\"col-sm-11\">\n        <div id=\"home\" class=\"container-fluid bg-success\" style=\"padding-top:70px;padding-bottom:70px;\">\n            <h1>Section 1</h1>\n            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>\n            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>\n        </div>\n  \n        <div id=\"about\">\n          <about></about>\n        </div>\n  \n        <div id=\"professionalSummary\">\n          <prof></prof>\n        </div>\n  \n        <div id=\"skills\">\n          <skills></skills>\n        </div>\n  \n        <div id=\"projects\" class=\"container-fluid\" style=\"padding-top:70px;padding-bottom:70px\">\n          <projects></projects>\n        </div>\n\n\n        <div id=\"education\">\n          <education></education>\n        </div>\n  \n  \n        <div id=\"contact\">\n          <contact></contact>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n  \n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'nikumar-ghp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/topnav/topnav.component */ "./src/components/topnav/topnav.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/about/about.component */ "./src/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/contact/contact.component */ "./src/components/contact/contact.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/education/education.component */ "./src/components/education/education.component.ts");
/* harmony import */ var _components_prof_prof_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/prof/prof.component */ "./src/components/prof/prof.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/projects/projects.component */ "./src/components/projects/projects.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/skills/skills.component */ "./src/components/skills/skills.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_7__["TopnavComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _components_education_education_component__WEBPACK_IMPORTED_MODULE_10__["EducationComponent"],
                _components_prof_prof_component__WEBPACK_IMPORTED_MODULE_11__["ProfComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"],
                _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_13__["SkillsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/about/about.component.css":
/*!**************************************************!*\
  !*** ./src/components/about/about.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/components/about/about.component.html":
/*!***************************************************!*\
  !*** ./src/components/about/about.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-warning\" style=\"padding-top:70px;padding-bottom:70px\">\r\n      <h1>Section 2</h1>\r\n      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>\r\n      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>\r\n    </div>"

/***/ }),

/***/ "./src/components/about/about.component.ts":
/*!*************************************************!*\
  !*** ./src/components/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/components/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/components/contact/contact.component.css":
/*!******************************************************!*\
  !*** ./src/components/contact/contact.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/components/contact/contact.component.html":
/*!*******************************************************!*\
  !*** ./src/components/contact/contact.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-info\" style=\"padding-top:70px;padding-bottom:70px\">\r\n   <h1>Contact me</h1>          \r\n</div>"

/***/ }),

/***/ "./src/components/contact/contact.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/contact/contact.component.ts ***!
  \*****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/components/contact/contact.component.css")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/components/education/education.component.css":
/*!**********************************************************!*\
  !*** ./src/components/education/education.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/components/education/education.component.html":
/*!***********************************************************!*\
  !*** ./src/components/education/education.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-info\" style=\"padding-top:70px;padding-bottom:70px\">\r\n      <h1>Section 4 Submenu 2</h1>\r\n      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>\r\n      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>\r\n    </div>"

/***/ }),

/***/ "./src/components/education/education.component.ts":
/*!*********************************************************!*\
  !*** ./src/components/education/education.component.ts ***!
  \*********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/components/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/components/education/education.component.css")]
        })
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/components/prof/prof.component.css":
/*!************************************************!*\
  !*** ./src/components/prof/prof.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item {\r\n   background-color: #7386D5;\r\n   height: 500px;\r\n   text-align: center;\r\n   padding: 10% 20% 0% 20%;\r\n }\r\n \r\n .carousel-control-prev,\r\n .carousel-control-next {\r\n   font-size:100px;\r\n   color:red;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3Byb2YvcHJvZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0cseUJBQXlCO0dBQ3pCLGFBQWE7R0FDYixrQkFBa0I7R0FDbEIsdUJBQXVCO0NBQ3pCOztDQUVBOztHQUVFLGVBQWU7R0FDZixTQUFTO0NBQ1giLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvcHJvZi9wcm9mLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM3Mzg2RDU7XHJcbiAgIGhlaWdodDogNTAwcHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgcGFkZGluZzogMTAlIDIwJSAwJSAyMCU7XHJcbiB9XHJcbiBcclxuIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXHJcbiAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICAgZm9udC1zaXplOjEwMHB4O1xyXG4gICBjb2xvcjpyZWQ7XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/components/prof/prof.component.html":
/*!*************************************************!*\
  !*** ./src/components/prof/prof.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-secondary\" style=\"padding-top:70px;padding-bottom:70px\">\r\n   <h1>Professional Summary</h1>\r\n\r\n   <carousel>\r\n      <slide>\r\n         <h2 style=\"width:100%;\">\r\n            An experienced and accomplished Software Engineering with 15+ years of demonstrated history of design & development of enterprise level applications and services.\r\n         </h2>\r\n      </slide>\r\n      <slide>\r\n         <h2 style=\"width:100%;\">Here is the second item</h2>\r\n      </slide>\r\n   </carousel>\r\n</div>\r\n\r\n\r\n\r\n<!-- <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n   \r\n   <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n   </ol> \r\n\r\n   \r\n   <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n      <h2 style=\"width:100%;\">\r\n         An experienced and accomplished Software Engineering with 15+ years of demonstrated history of design & development of enterprise level applications and services.\r\n      </h2>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n      <h2 style=\"width:100%;\">Here is the second item</h2>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n      <h2 style=\"width:100%;\">Here is the third item</h2>\r\n      </div>\r\n\r\n   <div class=\"carousel-item\">\r\n      <h2 style=\"width:100%;\">And the fourth item</h2>\r\n      </div>\r\n   </div> \r\n\r\n   \r\n   <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n      <i class=\"fas fa-chevron-circle-left\" ></i>\r\n      <span class=\"sr-only\">Previous</span>\r\n   </a>\r\n   <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n      <i class=\"fas fa-chevron-circle-right\" ></i>\r\n      <span class=\"sr-only\">Next</span>\r\n   </a>\r\n</div> -->"

/***/ }),

/***/ "./src/components/prof/prof.component.ts":
/*!***********************************************!*\
  !*** ./src/components/prof/prof.component.ts ***!
  \***********************************************/
/*! exports provided: ProfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfComponent", function() { return ProfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfComponent = /** @class */ (function () {
    function ProfComponent() {
    }
    ProfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'prof',
            template: __webpack_require__(/*! ./prof.component.html */ "./src/components/prof/prof.component.html"),
            styles: [__webpack_require__(/*! ./prof.component.css */ "./src/components/prof/prof.component.css")]
        })
    ], ProfComponent);
    return ProfComponent;
}());



/***/ }),

/***/ "./src/components/projects/projects.component.css":
/*!********************************************************!*\
  !*** ./src/components/projects/projects.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* New */\r\n::ng-deep .customClass > a {\r\n   border: none;\r\n   color:#fff;\r\n   background:#272e38;\r\n   border-radius:0;\r\n }\r\n::ng-deep .customClass > a.nav-link,\r\n ::ng-deep .customClass > a.nav-link.active {\r\n   border: none;\r\n   padding: 18px 25px;\r\n   color:#fff;\r\n   background:#272e38;\r\n   border-radius:0;\r\n}\r\n::ng-deep .customClass > a.nav-link.active:after {\r\n   content: \"\";\r\n   position: relative;\r\n   bottom: -60px;\r\n   left: -20%;\r\n   border: 15px solid transparent;\r\n   border-top-color: #e74c3c ;\r\n}\r\n::ng-deep .customClass > a.nav-link:hover,\r\n::ng-deep .customClass > a.nav-link:focus {\r\n   border: none;\r\n   background: #e74c3c;\r\n   color:#fff;\r\n   border-radius:0;\r\n   transition:background 0.20s linear;\r\n}\r\n::ng-deep .tab-content {\r\n   height: 500px;\r\n   background: #fdfdfd;\r\n   line-height: 25px;\r\n   border: 1px solid #ddd;\r\n   border-top:5px solid #e74c3c;\r\n   border-bottom:5px solid #e74c3c;\r\n   padding:30px 25px;\r\n}\r\n/* Original */\r\nnav > .nav.nav-tabs{\r\n   border: none;\r\n   color:#fff;\r\n   background:#272e38;\r\n   border-radius:0;\r\n }\r\nnav > div a.nav-item.nav-link,\r\n nav > div a.nav-item.nav-link.active {\r\n   border: none;\r\n   padding: 18px 25px;\r\n   color:#fff;\r\n   background:#272e38;\r\n   border-radius:0;\r\n }\r\nnav > div a.nav-item.nav-link.active:after {\r\n   content: \"\";\r\n   position: relative;\r\n   bottom: -60px;\r\n   left: -20%;\r\n   border: 15px solid transparent;\r\n   border-top-color: #e74c3c ;\r\n }\r\n.proj-tab-content {\r\n   height: 500px;\r\n   background: #fdfdfd;\r\n   line-height: 25px;\r\n   border: 1px solid #ddd;\r\n   border-top:5px solid #e74c3c;\r\n   border-bottom:5px solid #e74c3c;\r\n   padding:30px 25px;\r\n }\r\nnav > div a.nav-item.nav-link:hover,\r\n nav > div a.nav-item.nav-link:focus {\r\n   border: none;\r\n   background: #e74c3c;\r\n   color:#fff;\r\n   border-radius:0;\r\n   transition:background 0.20s linear;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUTtBQUNSO0dBQ0csWUFBWTtHQUNaLFVBQVU7R0FDVixrQkFBa0I7R0FDbEIsZUFBZTtDQUNqQjtBQUNBOztHQUVFLFlBQVk7R0FDWixrQkFBa0I7R0FDbEIsVUFBVTtHQUNWLGtCQUFrQjtHQUNsQixlQUFlO0FBQ2xCO0FBQ0E7R0FDRyxXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLGFBQWE7R0FDYixVQUFVO0dBQ1YsOEJBQThCO0dBQzlCLDBCQUEwQjtBQUM3QjtBQUNBOztHQUVHLFlBQVk7R0FDWixtQkFBbUI7R0FDbkIsVUFBVTtHQUNWLGVBQWU7R0FDZixrQ0FBa0M7QUFDckM7QUFFQTtHQUNHLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsaUJBQWlCO0dBQ2pCLHNCQUFzQjtHQUN0Qiw0QkFBNEI7R0FDNUIsK0JBQStCO0dBQy9CLGlCQUFpQjtBQUNwQjtBQUtDLGFBQWE7QUFDZDtHQUNHLFlBQVk7R0FDWixVQUFVO0dBQ1Ysa0JBQWtCO0dBQ2xCLGVBQWU7Q0FDakI7QUFDQTs7R0FFRSxZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLFVBQVU7R0FDVixrQkFBa0I7R0FDbEIsZUFBZTtDQUNqQjtBQUVBO0dBQ0UsV0FBVztHQUNYLGtCQUFrQjtHQUNsQixhQUFhO0dBQ2IsVUFBVTtHQUNWLDhCQUE4QjtHQUM5QiwwQkFBMEI7Q0FDNUI7QUFDQTtHQUNFLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsaUJBQWlCO0dBQ2pCLHNCQUFzQjtHQUN0Qiw0QkFBNEI7R0FDNUIsK0JBQStCO0dBQy9CLGlCQUFpQjtDQUNuQjtBQUVBOztHQUVFLFlBQVk7R0FDWixtQkFBbUI7R0FDbkIsVUFBVTtHQUNWLGVBQWU7R0FDZixrQ0FBa0M7Q0FDcEMiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE5ldyAqL1xyXG46Om5nLWRlZXAgLmN1c3RvbUNsYXNzID4gYSB7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgY29sb3I6I2ZmZjtcclxuICAgYmFja2dyb3VuZDojMjcyZTM4O1xyXG4gICBib3JkZXItcmFkaXVzOjA7XHJcbiB9XHJcbiA6Om5nLWRlZXAgLmN1c3RvbUNsYXNzID4gYS5uYXYtbGluayxcclxuIDo6bmctZGVlcCAuY3VzdG9tQ2xhc3MgPiBhLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgcGFkZGluZzogMThweCAyNXB4O1xyXG4gICBjb2xvcjojZmZmO1xyXG4gICBiYWNrZ3JvdW5kOiMyNzJlMzg7XHJcbiAgIGJvcmRlci1yYWRpdXM6MDtcclxufSBcclxuOjpuZy1kZWVwIC5jdXN0b21DbGFzcyA+IGEubmF2LWxpbmsuYWN0aXZlOmFmdGVyIHtcclxuICAgY29udGVudDogXCJcIjtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBib3R0b206IC02MHB4O1xyXG4gICBsZWZ0OiAtMjAlO1xyXG4gICBib3JkZXI6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgIGJvcmRlci10b3AtY29sb3I6ICNlNzRjM2MgO1xyXG59XHJcbjo6bmctZGVlcCAuY3VzdG9tQ2xhc3MgPiBhLm5hdi1saW5rOmhvdmVyLFxyXG46Om5nLWRlZXAgLmN1c3RvbUNsYXNzID4gYS5uYXYtbGluazpmb2N1cyB7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgYmFja2dyb3VuZDogI2U3NGMzYztcclxuICAgY29sb3I6I2ZmZjtcclxuICAgYm9yZGVyLXJhZGl1czowO1xyXG4gICB0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4yMHMgbGluZWFyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRhYi1jb250ZW50IHtcclxuICAgaGVpZ2h0OiA1MDBweDtcclxuICAgYmFja2dyb3VuZDogI2ZkZmRmZDtcclxuICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgIGJvcmRlci10b3A6NXB4IHNvbGlkICNlNzRjM2M7XHJcbiAgIGJvcmRlci1ib3R0b206NXB4IHNvbGlkICNlNzRjM2M7XHJcbiAgIHBhZGRpbmc6MzBweCAyNXB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4gLyogT3JpZ2luYWwgKi9cclxubmF2ID4gLm5hdi5uYXYtdGFic3tcclxuICAgYm9yZGVyOiBub25lO1xyXG4gICBjb2xvcjojZmZmO1xyXG4gICBiYWNrZ3JvdW5kOiMyNzJlMzg7XHJcbiAgIGJvcmRlci1yYWRpdXM6MDtcclxuIH1cclxuIG5hdiA+IGRpdiBhLm5hdi1pdGVtLm5hdi1saW5rLFxyXG4gbmF2ID4gZGl2IGEubmF2LWl0ZW0ubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgYm9yZGVyOiBub25lO1xyXG4gICBwYWRkaW5nOiAxOHB4IDI1cHg7XHJcbiAgIGNvbG9yOiNmZmY7XHJcbiAgIGJhY2tncm91bmQ6IzI3MmUzODtcclxuICAgYm9yZGVyLXJhZGl1czowO1xyXG4gfVxyXG4gXHJcbiBuYXYgPiBkaXYgYS5uYXYtaXRlbS5uYXYtbGluay5hY3RpdmU6YWZ0ZXIge1xyXG4gICBjb250ZW50OiBcIlwiO1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIGJvdHRvbTogLTYwcHg7XHJcbiAgIGxlZnQ6IC0yMCU7XHJcbiAgIGJvcmRlcjogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgYm9yZGVyLXRvcC1jb2xvcjogI2U3NGMzYyA7XHJcbiB9XHJcbiAucHJvai10YWItY29udGVudCB7XHJcbiAgIGhlaWdodDogNTAwcHg7XHJcbiAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7XHJcbiAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICBib3JkZXItdG9wOjVweCBzb2xpZCAjZTc0YzNjO1xyXG4gICBib3JkZXItYm90dG9tOjVweCBzb2xpZCAjZTc0YzNjO1xyXG4gICBwYWRkaW5nOjMwcHggMjVweDtcclxuIH1cclxuIFxyXG4gbmF2ID4gZGl2IGEubmF2LWl0ZW0ubmF2LWxpbms6aG92ZXIsXHJcbiBuYXYgPiBkaXYgYS5uYXYtaXRlbS5uYXYtbGluazpmb2N1cyB7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgYmFja2dyb3VuZDogI2U3NGMzYztcclxuICAgY29sb3I6I2ZmZjtcclxuICAgYm9yZGVyLXJhZGl1czowO1xyXG4gICB0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4yMHMgbGluZWFyO1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/components/projects/projects.component.html":
/*!*********************************************************!*\
  !*** ./src/components/projects/projects.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding-top:70px;padding-bottom:70px\">\r\n   <h1>Projects</h1>\r\n   <!-- good css: https://bootsnipp.com/snippets/exE6D\r\n   vertical: https://bootsnipp.com/snippets/E1XZa -->\r\n\r\n   <div class=\"col-xs-12 \">\r\n      <tabset>\r\n         <tab heading=\"Enterprise Fleets\" customClass=\"customClass\">Enterprise Fleets</tab>\r\n         <tab heading=\"Ameren\" customClass=\"customClass\">Ameren</tab>\r\n         <tab heading=\"Winchester Ammunition\" customClass=\"customClass\">Winchester Ammunition</tab>\r\n         <tab heading=\"Equifax\" customClass=\"customClass\">Equifax</tab>\r\n         <tab heading=\"AT&amp;T\" customClass=\"customClass\">AT&amp;T</tab>\r\n         <!-- <tab *ngFor=\"let tabz of tabs\"\r\n               [heading]=\"tabz.title\"\r\n               [customClass]=\"tabz.customClass\">\r\n            {{tabz?.content}}\r\n         </tab> -->\r\n      </tabset>\r\n\r\n\r\n      <!-- <nav>\r\n         <div class=\"nav nav-tabs nav-fill\" id=\"nav-tab\" role=\"tablist\">\r\n         <a class=\"nav-item nav-link active\" id=\"nav-efm-tab\" data-toggle=\"tab\" href=\"#nav-efm\" role=\"tab\" aria-controls=\"nav-efm\" aria-selected=\"true\">\r\n            Enterprise Fleets\r\n         </a>\r\n         <a class=\"nav-item nav-link\" id=\"nav-ameren-tab\" data-toggle=\"tab\" href=\"#nav-ameren\" role=\"tab\" aria-controls=\"nav-ameren\" aria-selected=\"false\">\r\n            Ameren\r\n         </a>\r\n         <a class=\"nav-item nav-link\" id=\"nav-winchester-tab\" data-toggle=\"tab\" href=\"#nav-winchester\" role=\"tab\" aria-controls=\"nav-winchester\" aria-selected=\"false\">\r\n            Winchester Ammunition\r\n         </a>\r\n         <a class=\"nav-item nav-link\" id=\"nav-equifax-tab\" data-toggle=\"tab\" href=\"#nav-equifax\" role=\"tab\" aria-controls=\"nav-equifax\" aria-selected=\"false\">\r\n            Equifax\r\n         </a>\r\n         <a class=\"nav-item nav-link\" id=\"nav-att-tab\" data-toggle=\"tab\" href=\"#nav-att\" role=\"tab\" aria-controls=\"nav-att\" aria-selected=\"false\">\r\n            AT&amp;T\r\n         </a>\r\n         </div>\r\n      </nav>\r\n      <div class=\"tab-content proj-tab-content py-3 px-3 px-sm-0\" id=\"nav-tabContent\">\r\n         <div class=\"tab-pane fade show active\" id=\"nav-efm\" role=\"tabpanel\" aria-labelledby=\"nav-efm-tab\">\r\n         EFM Details\r\n         </div>\r\n         <div class=\"tab-pane fade\" id=\"nav-ameren\" role=\"tabpanel\" aria-labelledby=\"nav-ameren-tab\">\r\n         Ameren Details\r\n         </div>\r\n         <div class=\"tab-pane fade\" id=\"nav-winchester\" role=\"tabpanel\" aria-labelledby=\"nav-winchester-tab\">\r\n         Winchester details\r\n         </div>\r\n         <div class=\"tab-pane fade\" id=\"nav-equifax\" role=\"tabpanel\" aria-labelledby=\"nav-equifax-tab\">\r\n         Equifax Details\r\n         </div>\r\n         <div class=\"tab-pane fade\" id=\"nav-att\" role=\"tabpanel\" aria-labelledby=\"nav-att-tab\">\r\n         ATT details\r\n         </div>\r\n      </div> -->\r\n      \r\n   </div>\r\n   \r\n</div>"

/***/ }),

/***/ "./src/components/projects/projects.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/projects/projects.component.ts ***!
  \*******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/components/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/components/projects/projects.component.css")]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/components/skills/skills.component.css":
/*!****************************************************!*\
  !*** ./src/components/skills/skills.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/components/skills/skills.component.html":
/*!*****************************************************!*\
  !*** ./src/components/skills/skills.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding-top:70px;padding-bottom:70px\">\r\n   <h1>Skills</h1>\r\n   \r\n   <div class=\"row\">\r\n         <div class=\"col-sm-1\">C#</div>\r\n         <div class=\"progress col-sm-10\">          \r\n            <div class=\"progress-bar bg-success\" style=\"width:90%\">\r\n               9/10\r\n            </div>\r\n         </div>\r\n   </div>\r\n   <br>\r\n   \r\n   <!-- Turquoise -->\r\n   <div class=\"progress\">\r\n      <div class=\"progress-bar bg-info\" style=\"width:30%\"></div>\r\n   </div><br>\r\n   \r\n   <!-- Orange -->\r\n   <div class=\"progress\">\r\n         <div class=\"progress-bar bg-warning\" style=\"width:40%\"></div>\r\n   </div><br>\r\n   \r\n   <!-- Red -->\r\n   <div class=\"progress\">\r\n      <div class=\"progress-bar bg-danger\" style=\"width:50%\"></div>\r\n   </div><br>\r\n   \r\n   <!-- White -->\r\n   <div class=\"progress border\">\r\n      <div class=\"progress-bar bg-white\" style=\"width:60%\"></div>\r\n   </div><br>\r\n   \r\n   <!-- Grey -->\r\n   <div class=\"progress\">\r\n      <div class=\"progress-bar bg-secondary\" style=\"width:70%\"></div>\r\n   </div><br>\r\n   \r\n   <!-- Light Grey -->\r\n   <div class=\"progress border\">\r\n      <div class=\"progress-bar bg-light\" style=\"width:80%\"></div>\r\n   </div><br>\r\n   \r\n   <!-- Dark Grey -->\r\n   <div class=\"progress\">\r\n      <div class=\"progress-bar bg-dark\" style=\"width:90%\"></div>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "./src/components/skills/skills.component.ts":
/*!***************************************************!*\
  !*** ./src/components/skills/skills.component.ts ***!
  \***************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/components/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/components/skills/skills.component.css")]
        })
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/components/topnav/topnav.component.css":
/*!****************************************************!*\
  !*** ./src/components/topnav/topnav.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy90b3BuYXYvdG9wbmF2LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/components/topnav/topnav.component.html":
/*!*****************************************************!*\
  !*** ./src/components/topnav/topnav.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sticky-nav navbar navbar-expand-md bg-dark navbar-dark fixed-top\" id=\"topnav\">\r\n   <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n         <a class=\"navbar-brand\" href=\"#\">Nishant Kumar</a>\r\n      </div>\r\n   \r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\r\n         <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n   \r\n      <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n         <ul class=\"navbar-nav ml-auto\">\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" href=\"#home\">Home</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#about\">About</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#professionalSummary\">Professional Summary</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#skills\">Skills</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#projects\">Projects</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#education\">Education</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#contact\">Contact</a>\r\n         </li>\r\n         </ul>\r\n      </div>\r\n   </div>\r\n</nav>"

/***/ }),

/***/ "./src/components/topnav/topnav.component.ts":
/*!***************************************************!*\
  !*** ./src/components/topnav/topnav.component.ts ***!
  \***************************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopnavComponent = /** @class */ (function () {
    function TopnavComponent() {
    }
    TopnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'topnav',
            template: __webpack_require__(/*! ./topnav.component.html */ "./src/components/topnav/topnav.component.html"),
            styles: [__webpack_require__(/*! ./topnav.component.css */ "./src/components/topnav/topnav.component.css")]
        })
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\CodeGit\nikumar-ghp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map