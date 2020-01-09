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

module.exports = ".main {\r\n   font-family: 'Poppins', sans-serif;\r\n   padding-top: 50px;\r\n}\r\n\r\n.separator {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* Start Sidebar v1 */\r\n\r\n.sidebar-v1 {\r\n  height: 100%;\r\n  /* width: 100px; */\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #111;\r\n  overflow-x: hidden;\r\n  padding-top: 0px;\r\n}\r\n\r\n.sidebar-v1 a {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n  color: #818181;\r\n  display: block;\r\n}\r\n\r\n.sidebar-v1 a:hover {\r\n  color: #f1f1f1;\r\n}\r\n\r\n.main-v1 {\r\n  /* margin-left: 100px;  */\r\n  /* Same as the width of the sidenav */\r\n  /* padding: 0px -20px; */\r\n  margin-left: -50px;\r\n}\r\n\r\n/* End Sidebar v1 */\r\n\r\n.sidebar-icon-container i {\r\n  font-size: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxrQ0FBa0M7R0FDbEMsaUJBQWlCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUNBQXFDO0VBQ3JDLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBQ0EsbUJBQW1COztBQUVuQjtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3Ige1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLyogU3RhcnQgU2lkZWJhciB2MSAqL1xyXG4uc2lkZWJhci12MSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8qIHdpZHRoOiAxMDBweDsgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci12MSBhIHtcclxuICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM4MTgxODE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXYxIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4ubWFpbi12MSB7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDEwMHB4OyAgKi9cclxuICAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZW5hdiAqL1xyXG4gIC8qIHBhZGRpbmc6IDBweCAtMjBweDsgKi9cclxuICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbn1cclxuLyogRW5kIFNpZGViYXIgdjEgKi9cclxuXHJcbi5zaWRlYmFyLWljb24tY29udGFpbmVyIGkge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-spy=\"scroll\" data-target=\".sticky-nav\" data-offset=\"50\">\n\n  <!-- Top Navigation -->\n  <topnav></topnav>\n  \n  <!-- Sidebar Navigation -->\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-0 col-md-1 d-none d-md-block\">\n          <div class=\"sidebar-v1\">\n            <div style=\"height: 15%\">            \n            </div>\n\n            <div class=\"sidebar-icon-container\" style=\"height: 60%\">\n              <!-- <a href=\"#home\"><i class=\"fas fa-home\" ></i></a> -->\n              <a href=\"#about\"><i class=\"fas fa-user\"></i></a>\n              <a href=\"#professionalSummary\"><i class=\"fab fa-themeco\"></i></a>\n              <a href=\"#skills\"><i class=\"fas fa-tools\"></i></a>\n              <a href=\"#projects\"><i class=\"fas fa-laptop-code\"></i></a>\n              <a href=\"#education\"><i class=\"fas fa-user-graduate\"></i></a>\n              <a href=\"#contact\"><i class=\"fas fa-id-card\"></i></a>\n            </div>\n            \n            <div style=\"height: 25%;background-color: aqua\">\n              <a href=\"https://www.linkedin.com/in/nishant817/\"><i class=\"fab fa-linkedin-in\"></i></a>\n              <a href=\"https://github.com/nishant817\"><i class=\"fab fa-github\"></i></a>\n              <a href=\"mailto:nishant817@outlook.com\"><i class=\"far fa-envelope\"></i></a>\n            </div>\n          </div>\n        </div>\n  \n      <div class=\"col-sm-12 col-md-10 main\">\n        <!-- <div id=\"home\" class=\"container-fluid\" style=\"padding-top:70px;padding-bottom:70px;\">\n          <h1>Section 1</h1>\n          {{title}}\n        </div> -->\n        \n        <hr class=\"separator\" />\n  \n        <div id=\"about\">\n          <about></about>\n        </div>\n        \n        <hr class=\"separator\" />\n  \n        <div id=\"professionalSummary\">\n          <prof></prof>\n        </div>\n  \n        <div id=\"skills\">\n          <skills></skills>\n        </div>\n        \n        <hr class=\"separator\" />\n  \n        <div id=\"projects\" class=\"container-fluid\" style=\"padding-top:70px;padding-bottom:70px\">\n          <projects></projects>\n        </div>\n        \n        <hr class=\"separator\" />\n\n        <div id=\"education\">\n          <education></education>\n        </div>\n        \n        <hr class=\"separator\" />  \n  \n        <div id=\"contact\">\n          <contact></contact>\n        </div>\n        \n        <hr class=\"separator\" />\n\n      </div>\n  \n    </div>\n  </div>\n  \n</div>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/topnav/topnav.component */ "./src/components/topnav/topnav.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/about/about.component */ "./src/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/contact/contact.component */ "./src/components/contact/contact.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/education/education.component */ "./src/components/education/education.component.ts");
/* harmony import */ var _components_prof_prof_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/prof/prof.component */ "./src/components/prof/prof.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/projects/projects.component */ "./src/components/projects/projects.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/skills/skills.component */ "./src/components/skills/skills.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_8__["TopnavComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _components_education_education_component__WEBPACK_IMPORTED_MODULE_11__["EducationComponent"],
                _components_prof_prof_component__WEBPACK_IMPORTED_MODULE_12__["ProfComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"],
                _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_14__["SkillsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_5__["ProgressbarModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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

module.exports = "<div class=\"container-fluid\">\r\n      <h1>{{title}}</h1>\r\n      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>\r\n      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>\r\n    </div>"

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
        this.title = "About";
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

module.exports = "<div class=\"container-fluid bg-info\" style=\"padding-top:70px;padding-bottom:70px\">\r\n      <h1>{{title}}</h1>\r\n      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>\r\n      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>\r\n    </div>"

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
        this.title = "Education";
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

module.exports = "/* .carousel-item {\r\n   background-color: beige;\r\n   height: 500px;\r\n   text-align: center;\r\n   padding: 10% 20% 0% 20%;\r\n } */\r\n \r\n\r\n::ng-deep .slide {\r\n  width: 100%;\r\n  padding: 50px 100px !important;\r\n  min-height: 500px;\r\n  background-color: sandybrown;\r\n}\r\n \r\n\r\n/* .carousel-item {\r\n  margin: 50px;\r\n} */\r\n \r\n\r\n::ng-deep .carousel-control\r\n{\r\n  font-size: 80px;\r\n  display: block;\r\n  width: 50px;\r\n  height: 50px;\r\n  background: transparent;\r\n  top: 46%;\r\n  border-radius: 50%;\r\n  line-height: 1;\r\n}\r\n \r\n\r\n::ng-deep .carousel-control span {\r\n  background: black !important;\r\n  color: white;\r\n  display: block;\r\n  width: 50px;\r\n  height: 50px;\r\n  top: 46%;\r\n  border-radius: 50%;\r\n  line-height: 1;\r\n}\r\n \r\n\r\n/* ::ng-deep .carousel-control-previous {\r\n\r\n} */\r\n \r\n\r\n/* :host >>>.carousel-control span:before {\r\n  display: block;\r\n  line-height: 0.45;\r\n} */\r\n \r\n\r\n:host >>> .carousel-indicators li {\r\n  width: 50px;\r\n  height: 10px;\r\n  border-radius: 25%;\r\n  transition: 1s;\r\n  margin: 10px;\r\n}\r\n \r\n\r\nh2 {\r\n  color: rebeccapurple;\r\n  margin: 40px;\r\n}\r\n \r\n\r\n.animated {\r\n  -webkit-animation-duration: 2s;\r\n  animation-duration: 2s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n \r\n\r\n@-webkit-keyframes fadeIn {\r\n 0% {opacity: 0;}\r\n 100% {opacity: 1;}\r\n}\r\n \r\n\r\n@keyframes fadeIn {\r\n 0% {opacity: 0;}\r\n 100% {opacity: 1;}\r\n}\r\n \r\n\r\n.fadeIn {\r\n -webkit-animation-name: fadeIn;\r\n animation-name: fadeIn;\r\n}\r\n \r\n\r\n.content {\r\n  height: 250px;\r\n  background: burlywood;\r\n}\r\n \r\n\r\n.content h2:before {\r\n  content: '[';\r\n  left: 0;\r\n}\r\n \r\n\r\n.content h2:after {\r\n  content: ']';\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n \r\n\r\n.content h2:after, .content h2:before {\r\n  position: absolute;\r\n  top: 10%;\r\n  \r\n  color: #16a085;\r\n  font-size: 250px;\r\n  line-height: 60px;\r\n  \r\n  -webkit-animation-name: opacity;\r\n  -webkit-animation-duration: 2s;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-name: opacity;\r\n  animation-duration: 2s;\r\n  animation-iteration-count: infinite;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3Byb2YvcHJvZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztJQUtJOzs7QUFHSjtFQUNFLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7O0FBQ0E7O0dBRUc7OztBQUNIOztFQUVFLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOzs7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOzs7QUFFQTs7R0FFRzs7O0FBRUg7OztHQUdHOzs7QUFDSDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7OztBQUNBO0NBQ0MsSUFBSSxVQUFVLENBQUM7Q0FDZixNQUFNLFVBQVUsQ0FBQztBQUNsQjs7O0FBQ0E7Q0FDQyxJQUFJLFVBQVUsQ0FBQztDQUNmLE1BQU0sVUFBVSxDQUFDO0FBQ2xCOzs7QUFDQTtDQUNDLDhCQUE4QjtDQUM5QixzQkFBc0I7QUFDdkI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osT0FBTztBQUNUOzs7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFROztFQUVSLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCOztFQUVqQiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLDJDQUEyQztFQUMzQyx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1DQUFtQztBQUNyQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9wcm9mL3Byb2YuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbiAgIGhlaWdodDogNTAwcHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgcGFkZGluZzogMTAlIDIwJSAwJSAyMCU7XHJcbiB9ICovXHJcbiBcclxuXHJcbjo6bmctZGVlcCAuc2xpZGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDUwcHggMTAwcHggIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzYW5keWJyb3duO1xyXG59XHJcbi8qIC5jYXJvdXNlbC1pdGVtIHtcclxuICBtYXJnaW46IDUwcHg7XHJcbn0gKi9cclxuOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sXHJcbntcclxuICBmb250LXNpemU6IDgwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHRvcDogNDYlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wgc3BhbiB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHRvcDogNDYlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLyogOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXZpb3VzIHtcclxuXHJcbn0gKi9cclxuXHJcbi8qIDpob3N0ID4+Pi5jYXJvdXNlbC1jb250cm9sIHNwYW46YmVmb3JlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsaW5lLWhlaWdodDogMC40NTtcclxufSAqL1xyXG46aG9zdCA+Pj4gLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbiAgbWFyZ2luOiA0MHB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gMCUge29wYWNpdHk6IDA7fVxyXG4gMTAwJSB7b3BhY2l0eTogMTt9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gMCUge29wYWNpdHk6IDA7fVxyXG4gMTAwJSB7b3BhY2l0eTogMTt9XHJcbn1cclxuLmZhZGVJbiB7XHJcbiAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBiYWNrZ3JvdW5kOiBidXJseXdvb2Q7XHJcbn1cclxuLmNvbnRlbnQgaDI6YmVmb3JlIHtcclxuICBjb250ZW50OiAnWyc7XHJcbiAgbGVmdDogMDtcclxufVxyXG4uY29udGVudCBoMjphZnRlciB7XHJcbiAgY29udGVudDogJ10nO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLmNvbnRlbnQgaDI6YWZ0ZXIsIC5jb250ZW50IGgyOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAlO1xyXG4gIFxyXG4gIGNvbG9yOiAjMTZhMDg1O1xyXG4gIGZvbnQtc2l6ZTogMjUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgXHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/components/prof/prof.component.html":
/*!*************************************************!*\
  !*** ./src/components/prof/prof.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n   <h1>{{title}}</h1>\r\n\r\n   <carousel>\r\n      <slide class=\"animated fadeIn\">\r\n         <div class=\"content\">            \r\n            <h2>\r\n               An accomplished Software Engineering with 15+ years of experience in Full-Stack Application Design & Development.\r\n            </h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div class=\"content\">\r\n            <h2>Specialized in Object-Oriented design and implementation</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div class=\"content\">\r\n            <h2>10+ years of experience in .NET technologies like WCF, ASP.NET, Entity framework</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div>\r\n            <h2>Proficient and skilled in Front-end web development using ASP.NET and JavaScript frameworks like AngularJS, Angular, Vue.Js</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div>\r\n            <h2>REST API (RESTful Services) and Webservice development using ASP.NET, WCF, Node.js</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div>\r\n            <h2>Have worked with different databases including SQL Server, Oracle and Sybase</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div>\r\n            <h2>Highly experienced in Agile/Scrum methodologies as well as Waterfall model</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div>\r\n            <h2>Skilled in SDLC, configuration management, requirement specification, application design, release management</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div>\r\n            <h2>Out of the box thinking and Creative drive towards improvement and optimization at any stage from design to deployment</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div>\r\n            <h2>Fast learner and open to new technologies and work environment</h2>\r\n         </div>\r\n      </slide>\r\n      <!-- <slide>\r\n         <h2 style=\"width:100%;\">Text</h2>\r\n      </slide> -->\r\n   </carousel>\r\n</div>\r\n\r\n\r\n\r\n<!-- <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n   \r\n   <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n   </ol> \r\n\r\n   \r\n   <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n      <h2 style=\"width:100%;\">\r\n         An experienced and accomplished Software Engineering with 15+ years of demonstrated history of design & development of enterprise level applications and services.\r\n      </h2>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n      <h2 style=\"width:100%;\">Here is the second item</h2>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n      <h2 style=\"width:100%;\">Here is the third item</h2>\r\n      </div>\r\n\r\n   <div class=\"carousel-item\">\r\n      <h2 style=\"width:100%;\">And the fourth item</h2>\r\n      </div>\r\n   </div> \r\n\r\n   \r\n   <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n      <i class=\"fas fa-chevron-circle-left\" ></i>\r\n      <span class=\"sr-only\">Previous</span>\r\n   </a>\r\n   <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n      <i class=\"fas fa-chevron-circle-right\" ></i>\r\n      <span class=\"sr-only\">Next</span>\r\n   </a>\r\n</div> -->"

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
        this.title = 'Professional Summary';
        this.profData = [
            { id: 1, text: "An experienced and accomplished Software Engineering with 15+ years of demonstrated history of design & development of enterprise level applications and services" },
            { id: 2, text: "•	Full-Stack software development with Diverse skill set" },
            { id: 2, text: "•	Specialized in Object-Oriented design and implementation" },
            { id: 2, text: "•	10+ years of experience in .NET technologies like WCF, ASP.NET, Entity framework" },
            { id: 2, text: "•	Proficient and skilled in Front-end web development using ASP.NET and JavaScript frameworks like AngularJS, Angular, Vue.Js" },
            { id: 2, text: "•	REST API (RESTful Services) and Webservice development using ASP.NET, WCF, Node.js" },
            { id: 2, text: "•	Have worked with different databases including SQL Server, Oracle and Sybase" },
            { id: 2, text: "•	Highly experienced in Agile/Scrum methodologies as well as Waterfall model" },
            { id: 2, text: "•	Skilled in SDLC, configuration management, requirement specification, application design, release management" },
            { id: 2, text: "•	Out of the box thinking and Creative drive towards improvement and optimization at any stage from design to deployment" },
            { id: 2, text: "•	Fast learner and open to new technologies and work environment" }
        ];
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

module.exports = "<div class=\"container-fluid\" style=\"padding-top:70px;padding-bottom:70px\">\r\n   <h1>Projects</h1>\r\n   <!-- good css: https://bootsnipp.com/snippets/exE6D\r\n   vertical: https://bootsnipp.com/snippets/E1XZa -->\r\n\r\n   <div class=\"col-xs-12 \">\r\n      <tabset>\r\n         <tab heading=\"Enterprise Fleets\" customClass=\"customClass\">\r\n            <h2>05/01/2018 – TILL DATE</h2>\r\n            Design & Development of RESTFull APIs and AngularJS based websites to manager and process citations of leased vehicles.\r\n            <h1>Technologies</h1>\r\n            .NET 4.6, C#, WCF, ASP.NET MVC, AngularJS, Angular, Vue.js, NodeJS, Jasmine, Karma, JavaScript, HTML, CSS, Entity Framework, SoapUI, Fiddler, \r\n            SQL Server, State Machine, SSIS, OBI, \r\n            Jira, Kanban, Confluence, Agile Methodologies \r\n\r\n         </tab>\r\n         <tab heading=\"Ameren\" customClass=\"customClass\">Ameren</tab>\r\n         <tab heading=\"Winchester Ammunition\" customClass=\"customClass\">Winchester Ammunition</tab>\r\n         <tab heading=\"Equifax\" customClass=\"customClass\">Equifax</tab>\r\n         <tab heading=\"AT&amp;T\" customClass=\"customClass\">AT&amp;T</tab>\r\n         <!-- <tab *ngFor=\"let tabz of tabs\"\r\n               [heading]=\"tabz.title\"\r\n               [customClass]=\"tabz.customClass\">\r\n            {{tabz?.content}}\r\n         </tab> -->\r\n      </tabset>\r\n\r\n\r\n      <!-- <nav>\r\n         <div class=\"nav nav-tabs nav-fill\" id=\"nav-tab\" role=\"tablist\">\r\n         <a class=\"nav-item nav-link active\" id=\"nav-efm-tab\" data-toggle=\"tab\" href=\"#nav-efm\" role=\"tab\" aria-controls=\"nav-efm\" aria-selected=\"true\">\r\n            Enterprise Fleets\r\n         </a>\r\n         <a class=\"nav-item nav-link\" id=\"nav-ameren-tab\" data-toggle=\"tab\" href=\"#nav-ameren\" role=\"tab\" aria-controls=\"nav-ameren\" aria-selected=\"false\">\r\n            Ameren\r\n         </a>\r\n         <a class=\"nav-item nav-link\" id=\"nav-winchester-tab\" data-toggle=\"tab\" href=\"#nav-winchester\" role=\"tab\" aria-controls=\"nav-winchester\" aria-selected=\"false\">\r\n            Winchester Ammunition\r\n         </a>\r\n         <a class=\"nav-item nav-link\" id=\"nav-equifax-tab\" data-toggle=\"tab\" href=\"#nav-equifax\" role=\"tab\" aria-controls=\"nav-equifax\" aria-selected=\"false\">\r\n            Equifax\r\n         </a>\r\n         <a class=\"nav-item nav-link\" id=\"nav-att-tab\" data-toggle=\"tab\" href=\"#nav-att\" role=\"tab\" aria-controls=\"nav-att\" aria-selected=\"false\">\r\n            AT&amp;T\r\n         </a>\r\n         </div>\r\n      </nav>\r\n      <div class=\"tab-content proj-tab-content py-3 px-3 px-sm-0\" id=\"nav-tabContent\">\r\n         <div class=\"tab-pane fade show active\" id=\"nav-efm\" role=\"tabpanel\" aria-labelledby=\"nav-efm-tab\">\r\n         EFM Details\r\n         </div>\r\n         <div class=\"tab-pane fade\" id=\"nav-ameren\" role=\"tabpanel\" aria-labelledby=\"nav-ameren-tab\">\r\n         Ameren Details\r\n         </div>\r\n         <div class=\"tab-pane fade\" id=\"nav-winchester\" role=\"tabpanel\" aria-labelledby=\"nav-winchester-tab\">\r\n         Winchester details\r\n         </div>\r\n         <div class=\"tab-pane fade\" id=\"nav-equifax\" role=\"tabpanel\" aria-labelledby=\"nav-equifax-tab\">\r\n         Equifax Details\r\n         </div>\r\n         <div class=\"tab-pane fade\" id=\"nav-att\" role=\"tabpanel\" aria-labelledby=\"nav-att-tab\">\r\n         ATT details\r\n         </div>\r\n      </div> -->\r\n      \r\n   </div>\r\n   \r\n</div>"

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

module.exports = "<div class=\"container-fluid\" style=\"padding-top:70px;padding-bottom:70px\">\r\n   <h1>{{title}}</h1>\r\n\r\n   <div class=\"row\">\r\n      <div class=\"col-sm-12 col-md-11 offset-md-1\">\r\n         <div *ngFor=\"let skill of skills; index as id\">\r\n            <h4>{{skill.sec}}</h4>\r\n            <div class=\"row mb-2\" *ngFor=\"let item of skill.items; index as id\">\r\n               <div class=\"column col-sm-2\" style=\"text-align: right;\">{{item.nm}}</div>\r\n               <progressbar class=\"column col-sm-10 col-md-8\" [max]=\"max\" [value]=\"item.rt\" [type]=\"getType(item.rt)\">\r\n                  <span class=\"text-nowrap\">{{item.rt}}/10</span>\r\n               </progressbar>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <!-- <div *ngFor=\"let skill of skills; index as id\">\r\n      <h4>{{skill.sec}}</h4>\r\n      <div class=\"mb-2\" *ngFor=\"let item of skill.items; index as id\">\r\n         <progressbar [max]=\"max\" [value]=\"item.rt\" [type]=\"getType(item.rt)\">\r\n            <span class=\"text-nowrap\">{{item.nm}} {{item.rt}}/10</span>\r\n         </progressbar>\r\n      </div>\r\n   </div> -->\r\n   \r\n\r\n   <!-- <h2>Hardcoded</h2>\r\n   <div class=\"row\">\r\n         <div class=\"col-sm-1\">C#</div>\r\n         <div class=\"progress col-sm-10\">          \r\n            <div class=\"progress-bar bg-success\" style=\"width:90%\">\r\n               9/10\r\n            </div>\r\n         </div>\r\n   </div>\r\n   <br>\r\n   \r\n   \r\n   <div class=\"progress\">\r\n      <div class=\"progress-bar bg-info\" style=\"width:30%\"></div>\r\n   </div><br>\r\n   \r\n   <div class=\"progress\">\r\n         <div class=\"progress-bar bg-warning\" style=\"width:40%\"></div>\r\n   </div><br>\r\n   \r\n   <div class=\"progress\">\r\n      <div class=\"progress-bar bg-danger\" style=\"width:50%\"></div>\r\n   </div><br>\r\n   \r\n   <div class=\"progress border\">\r\n      <div class=\"progress-bar bg-white\" style=\"width:60%\"></div>\r\n   </div><br>\r\n   \r\n   <div class=\"progress\">\r\n      <div class=\"progress-bar bg-secondary\" style=\"width:70%\"></div>\r\n   </div><br>\r\n   \r\n   <div class=\"progress border\">\r\n      <div class=\"progress-bar bg-light\" style=\"width:80%\"></div>\r\n   </div><br>\r\n   \r\n   <div class=\"progress\">\r\n      <div class=\"progress-bar bg-dark\" style=\"width:90%\"></div>\r\n   </div> -->\r\n</div>"

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
        this.title = 'My Tech Skills';
        this.max = 10;
        this.skills = [{
                id: 1,
                sec: 'Programming Languages',
                items: [
                    { id: 1, nm: 'c#', rt: 9 },
                    { id: 2, nm: 'Javascript', rt: 8 },
                    { id: 3, nm: 'HTML5', rt: 7 },
                    { id: 4, nm: 'Java', rt: 4 },
                    { id: 5, nm: 'C/C++', rt: 5 },
                    { id: 6, nm: 'SQL', rt: 7 },
                    { id: 7, nm: 'R', rt: 7 }
                ]
            }, {
                id: 2,
                sec: 'Backend Development',
                items: [
                    { id: 1, nm: 'ASP.NET MVC', rt: 8 },
                    { id: 2, nm: 'Entity Framework', rt: 7 }
                ]
            }, {
                id: 3,
                sec: 'Frontend Development',
                items: [
                    { id: 1, nm: 'Angular', rt: 8 },
                    { id: 2, nm: 'Vue.js', rt: 8 }
                ]
            }, {
                id: 4,
                sec: 'Database',
                items: [
                    { id: 1, nm: 'SQL Server', rt: 6 },
                    { id: 2, nm: 'Oracle', rt: 5 }
                ]
            }];
    }
    SkillsComponent.prototype.getType = function (rating) {
        var type;
        if (rating >= 8) {
            type = 'success';
        }
        else if (rating >= 6) {
            type = 'info';
        }
        else if (rating >= 4) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        return type;
    };
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

module.exports = "\r\na,\r\na:hover,\r\na:focus {\r\n color: inherit;\r\n text-decoration: none;\r\n transition: all 0.3s;\r\n}\r\n\r\n/* .navbar {\r\n padding: 15px 10px;\r\n background: #fff;\r\n border: none;\r\n border-radius: 0;\r\n margin-bottom: 40px;\r\n box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n} */\r\n\r\n.navbar-btn {\r\n box-shadow: none;\r\n outline: none !important;\r\n border: none;\r\n}\r\n\r\n.line {\r\n width: 100%;\r\n height: 1px;\r\n border-bottom: 1px dashed #ddd;\r\n margin: 40px 0;\r\n}\r\n\r\ni,\r\nspan {\r\n display: inline-block;\r\n}\r\n\r\n.wrapper {\r\n display: flex;\r\n align-items: stretch;\r\n}\r\n\r\n#topnav .nav-item {\r\n  width: 100px;\r\n}\r\n\r\n#topnav .nav-item .active {\r\n  background-color: darkolivegreen;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3RvcG5hdi90b3BuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7OztDQUdDLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsb0JBQW9CO0FBQ3JCOztBQUVBOzs7Ozs7O0dBT0c7O0FBRUg7Q0FDQyxnQkFBZ0I7Q0FDaEIsd0JBQXdCO0NBQ3hCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsOEJBQThCO0NBQzlCLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isb0JBQW9CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL3RvcG5hdi90b3BuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuIGNvbG9yOiBpbmhlcml0O1xyXG4gdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi8qIC5uYXZiYXIge1xyXG4gcGFkZGluZzogMTVweCAxMHB4O1xyXG4gYmFja2dyb3VuZDogI2ZmZjtcclxuIGJvcmRlcjogbm9uZTtcclxuIGJvcmRlci1yYWRpdXM6IDA7XHJcbiBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59ICovXHJcblxyXG4ubmF2YmFyLWJ0biB7XHJcbiBib3gtc2hhZG93OiBub25lO1xyXG4gb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiB3aWR0aDogMTAwJTtcclxuIGhlaWdodDogMXB4O1xyXG4gYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xyXG4gbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbmksXHJcbnNwYW4ge1xyXG4gZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4gYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbiN0b3BuYXYgLm5hdi1pdGVtIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuI3RvcG5hdiAubmF2LWl0ZW0gLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya29saXZlZ3JlZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/components/topnav/topnav.component.html":
/*!*****************************************************!*\
  !*** ./src/components/topnav/topnav.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sticky-nav navbar navbar-expand-md bg-dark navbar-dark fixed-top\" id=\"topnav\">\r\n   <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n         <a class=\"navbar-brand\" href=\"#\">Nishant Kumar</a>\r\n      </div>\r\n   \r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\r\n         <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n   \r\n      <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n         <ul class=\"navbar-nav ml-auto\">\r\n         <!-- <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" href=\"#home\">Home</a>\r\n         </li> -->\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#about\">About</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#professionalSummary\">Professional Summary</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#skills\">Skills</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#projects\">Projects</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#education\">Education</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#contact\">Contact</a>\r\n         </li>\r\n         </ul>\r\n      </div>\r\n   </div>\r\n</nav>"

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