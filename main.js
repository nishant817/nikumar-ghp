(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div data-spy=\"scroll\" data-target=\".sticky-nav\" data-offset=\"50\">\n\n  <!-- Top Navigation -->\n  <topnav></topnav>\n  \n  <!-- Sidebar Navigation -->\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-0 col-md-1 d-none d-md-block\">\n          <div class=\"sidebar-v1\">\n            <div style=\"height: 15%\">            \n            </div>\n\n            <div class=\"sidebar-icon-container\" style=\"height: 60%\">\n              <!-- <a href=\"#home\"><i class=\"fas fa-home\" ></i></a> -->\n              <a href=\"#about\"><i class=\"fas fa-user\"></i></a>\n              <a href=\"#professionalSummary\"><i class=\"fab fa-themeco\"></i></a>\n              <a href=\"#skills\"><i class=\"fas fa-tools\"></i></a>\n              <a href=\"#projects\"><i class=\"fas fa-laptop-code\"></i></a>\n              <a href=\"#education\"><i class=\"fas fa-user-graduate\"></i></a>\n              <a href=\"#contact\"><i class=\"fas fa-id-card\"></i></a>\n            </div>\n            \n            <div style=\"height: 25%;background-color: aqua\">\n              <a href=\"https://www.linkedin.com/in/nishant817/\"><i class=\"fab fa-linkedin-in\"></i></a>\n              <a href=\"https://github.com/nishant817\"><i class=\"fab fa-github\"></i></a>\n              <a href=\"mailto:nishant817@outlook.com\"><i class=\"far fa-envelope\"></i></a>\n            </div>\n          </div>\n        </div>\n  \n      <div class=\"col-sm-12 col-md-10 main\">\n        <!-- <div id=\"home\" class=\"container-fluid\" style=\"padding-top:70px;padding-bottom:70px;\">\n          <h1>Section 1</h1>\n          {{title}}\n        </div> -->\n        \n        <hr class=\"separator\" />\n  \n        <div id=\"about\">\n          <about></about>\n        </div>\n        \n        <hr class=\"separator\" />\n  \n        <div id=\"professionalSummary\">\n          <prof></prof>\n        </div>\n  \n        <div id=\"skills\">\n          <skills></skills>\n        </div>\n        \n        <hr class=\"separator\" />\n  \n        <div id=\"projects\" class=\"container-fluid\" style=\"padding-top:70px;padding-bottom:70px\">\n          <projects></projects>\n        </div>\n        \n        <hr class=\"separator\" />\n\n        <div id=\"education\">\n          <education></education>\n        </div>\n        \n        <hr class=\"separator\" />  \n  \n        <div id=\"contact\">\n          <contact></contact>\n        </div>\n        \n        <hr class=\"separator\" />\n\n      </div>\n  \n    </div>\n  </div>\n  \n</div>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/about/about.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/about/about.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n      <h1>{{title}}</h1>\r\n      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>\r\n      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/contact/contact.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/contact/contact.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid bg-info\" style=\"padding-top:70px;padding-bottom:70px\">\r\n   <h1>Contact me</h1>          \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/education/education.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/education/education.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"padding-top:70px;padding-bottom:70px; \">\r\n  <h1 style=\"margin-left: 20%;\">{{title}}</h1>\r\n\r\n  <div style=\"margin-left: 30%;\">\r\n    <h4>MASTER OF SCIENCE in Computer Information Systems</h4>\r\n    <p>\r\n      Boston University, Boston, MA\r\n      <br/>\r\n      2017 - 2018\r\n    </p>\r\n    \r\n    <br/><br/>\r\n\r\n    <h4>BACHELOR OF TECHNOLOGY in Mining Engineering</h4>\r\n    <p>\r\n      Indian Institute of Technology - Banaras Hindu University (IIT-BHU), Varanasi, India\r\n      <br/>\r\n      1998 - 2002\r\n    </p>\r\n\r\n    <br/><br/>\r\n\r\n    <h4>Certifications</h4>\r\n    <ul>\r\n      <li>Full Stack Web Development | The Hong Kong University of Science and Technology</li>\r\n      <li>Microsoft Certified Professional | Programming in C#</li>\r\n      <li>Microsoft Certified Technology Specialist | WPF Application Development</li>\r\n      <li>Foundation of IBM Cloud Computing Architecture (000-032)</li>\r\n    </ul>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/prof/prof.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/prof/prof.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n   <h1>{{title}}</h1>\r\n\r\n   <!-- <div id=\"profCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\r\n   </div> -->\r\n\r\n\r\n   <!-- <carousel>\r\n      <slide class=\"animated fadeIn\">\r\n         <div class=\"content\">            \r\n            <h2>\r\n               An accomplished Software Engineering with 15+ years of experience in Full-Stack Application Design & Development.\r\n            </h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div class=\"content\">\r\n            <h2>Specialized in Object-Oriented design and implementation</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div class=\"content\">\r\n            <h2>10+ years of experience in .NET technologies like WCF, ASP.NET, Entity framework</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div>\r\n            <h2>Proficient and skilled in Front-end web development using ASP.NET and JavaScript frameworks like AngularJS, Angular, Vue.Js</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div>\r\n            <h2>REST API (RESTful Services) and Webservice development using ASP.NET, WCF, Node.js</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div>\r\n            <h2>Have worked with different databases including SQL Server, Oracle and Sybase</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div>\r\n            <h2>Highly experienced in Agile/Scrum methodologies as well as Waterfall model</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div>\r\n            <h2>Skilled in SDLC, configuration management, requirement specification, application design, release management</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div>\r\n            <h2>Out of the box thinking and Creative drive towards improvement and optimization at any stage from design to deployment</h2>\r\n         </div>\r\n      </slide>\r\n\r\n      <slide class=\"animated fadeIn\">\r\n         <div>\r\n            <h2>Fast learner and open to new technologies and work environment</h2>\r\n         </div>\r\n      </slide>\r\n   </carousel>\r\n</div> -->\r\n\r\n\r\n\r\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n   \r\n   <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"5\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"6\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"7\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"8\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"9\"></li>\r\n   </ol> \r\n\r\n   \r\n   <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n         <div class=\"c-carousel-item-content\">\r\n            An accomplished Software Engineering with 15+ years of experience in Full-Stack Application Design & Development.\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n         <div class=\"c-carousel-item-content\">\r\n            Specialized in Object-Oriented design and implementation\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n         <div class=\"c-carousel-item-content\">\r\n            10+ years of experience in .NET technologies like C#, WCF, ASP.NET, Entity framework\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n         <div class=\"c-carousel-item-content\">\r\n            Proficient and skilled in Front-end web development using ASP.NET and JavaScript frameworks like AngularJS, Angular, Vue.Js\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n         <div class=\"c-carousel-item-content\">\r\n            REST API (RESTful Services) and Webservice development using ASP.NET, WCF, Node.js\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n         <div class=\"c-carousel-item-content\">\r\n            Have worked with different databases including SQL Server, Oracle and Sybase\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n         <div class=\"c-carousel-item-content\">\r\n            Highly experienced in Agile/Scrum methodologies as well as Waterfall model\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n         <div class=\"c-carousel-item-content\">\r\n            Skilled in SDLC, configuration management, requirement specification, application design, release management\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n         <div class=\"c-carousel-item-content\">\r\n            Out of the box thinking and Creative drive towards improvement and optimization at any stage from design to deployment\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n         <div class=\"c-carousel-item-content\">\r\n            Fast learner and open to new technologies and work environment\r\n         </div>\r\n      </div>\r\n   </div> \r\n\r\n   \r\n   <a class=\"carousel-control-prev c-carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n      <i class=\"fas fa-chevron-circle-left\" ></i>\r\n      <span class=\"sr-only\">Previous</span>\r\n   </a>\r\n   <a class=\"carousel-control-next c-carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n      <!-- <i class=\"fas fa-level-up-alt\"></i> -->\r\n      <i class=\"fas fa-chevron-circle-right\" ></i>\r\n      <span class=\"sr-only\">Next</span>\r\n   </a>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/projects/projects.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/projects/projects.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"padding-top:70px;padding-bottom:70px;\">\r\n   <h1>Projects</h1>\r\n   <!-- good css: https://bootsnipp.com/snippets/exE6D\r\n   vertical: https://bootsnipp.com/snippets/E1XZa -->\r\n\r\n   <div class=\"col-xs-12 \">\r\n\r\n      <nav>\r\n         <div class=\"nav nav-tabs nav-fill\" id=\"nav-tab\" role=\"tablist\">\r\n            <a *ngFor=\"let project of projects; index as id\"\r\n               class=\"nav-item nav-link\" data-toggle=\"tab\" role=\"tab\"\r\n               [ngClass]=\"{'active focus': project.id===projects[0].id}\"\r\n               id=\"nav-{{project.clientId}}-tab\" href=\"#nav-{{project.clientId}}\"\r\n               attr.aria-controls=\"nav-{{project.clientId}}\" attr.aria-selected=\"false\"\r\n               [attr.aria-selected]=\"project.id===projects[0].id ? 'true' : 'false'\">\r\n               {{project.clientName}}\r\n            </a>\r\n\r\n            <!-- <a class=\"nav-item nav-link active\" id=\"nav-efm-tab\" data-toggle=\"tab\" href=\"#nav-efm\" role=\"tab\" aria-controls=\"nav-efm\" aria-selected=\"true\">\r\n               Enterprise Fleets\r\n            </a>\r\n            <a class=\"nav-item nav-link\" id=\"nav-ameren-tab\" data-toggle=\"tab\" href=\"#nav-ameren\" role=\"tab\" aria-controls=\"nav-ameren\" aria-selected=\"false\">\r\n               Ameren\r\n            </a> -->\r\n         </div>\r\n      </nav>\r\n\r\n      <div class=\"tab-content c-tab-content py-3 px-3 px-sm-0\" id=\"nav-tabContent\">\r\n         <div *ngFor=\"let project of projects; index as id\"\r\n            class=\"tab-pane fade c-tab-pane\" role=\"tabpanel\" \r\n            id='nav-{{project.clientId}}' attr.aria-labelledby=\"nav-{{project.clientId}}-tab\"             \r\n            [ngClass]=\"{'active show': project.id===projects[0].id}\">\r\n            <div>\r\n               <h3>Responsibilities</h3>\r\n               <ul>\r\n                  <li *ngFor=\"let responsibility of project.responsibilities\">{{responsibility}}</li>\r\n               </ul>\r\n\r\n               <h3>Technologies</h3>\r\n               <ul>\r\n                  <li *ngFor=\"let technology of project.technologies\">{{technology}}</li>\r\n               </ul>\r\n\r\n               <h3>Projects</h3>\r\n               <div *ngFor=\"let app of project.applications; index as id\">\r\n                  <h5>{{app.name}}</h5>\r\n                  <p class=\"app-overview\">{{app.overview}}</p>\r\n               </div>\r\n            </div>\r\n         </div>\r\n\r\n         <!-- <div class=\"tab-pane fade show active\" id=\"nav-efm\" role=\"tabpanel\" aria-labelledby=\"nav-efm-tab\">\r\n         EFM Details\r\n         </div>\r\n         <div class=\"tab-pane fade\" id=\"nav-ameren\" role=\"tabpanel\" aria-labelledby=\"nav-ameren-tab\">\r\n         Ameren Details\r\n         </div>\r\n         <div class=\"tab-pane fade\" id=\"nav-winchester\" role=\"tabpanel\" aria-labelledby=\"nav-winchester-tab\">\r\n         Winchester details\r\n         </div>\r\n         <div class=\"tab-pane fade\" id=\"nav-equifax\" role=\"tabpanel\" aria-labelledby=\"nav-equifax-tab\">\r\n         Equifax Details\r\n         </div>\r\n         <div class=\"tab-pane fade\" id=\"nav-att\" role=\"tabpanel\" aria-labelledby=\"nav-att-tab\">\r\n         ATT details\r\n         </div> -->\r\n      </div>\r\n\r\n\r\n      <!-- <tabset>\r\n         <tab heading=\"Enterprise Fleets\" customClass=\"customClass\">\r\n            <h2>05/01/2018 – TILL DATE</h2>\r\n            Design & Development of RESTFull APIs and AngularJS based websites to manager and process citations of leased vehicles.\r\n            <h1>Technologies</h1>\r\n            .NET 4.6, C#, WCF, ASP.NET MVC, AngularJS, Angular, Vue.js, NodeJS, Jasmine, Karma, JavaScript, HTML, CSS, Entity Framework, SoapUI, Fiddler, \r\n            SQL Server, State Machine, SSIS, OBI, \r\n            Jira, Kanban, Confluence, Agile Methodologies \r\n\r\n         </tab>\r\n         <tab heading=\"Ameren\" customClass=\"customClass\">Ameren</tab>\r\n         <tab heading=\"Winchester Ammunition\" customClass=\"customClass\">Winchester Ammunition</tab>\r\n         <tab heading=\"Equifax\" customClass=\"customClass\">Equifax</tab>\r\n         <tab heading=\"AT&amp;T\" customClass=\"customClass\">AT&amp;T</tab>\r\n      </tabset> -->\r\n\r\n\r\n      \r\n      \r\n   </div>\r\n   \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/skills/skills.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/skills/skills.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"padding-top:70px;padding-bottom:70px; margin-left: 20%;\">\r\n   <h1>{{title}}</h1>\r\n\r\n   <div class=\"row\">\r\n\r\n      <div class=\"col-sm-12 col-md-11 offset-md-1\">\r\n         <div *ngFor=\"let skill of skills; index as id\">\r\n            <h4>{{skill.sec}}</h4>\r\n            <div class=\"row mb-2\" *ngFor=\"let item of skill.items; index as id\">\r\n               <div class=\"column col-sm-2\" style=\"text-align: right;\">{{item.nm}}</div>\r\n               \r\n               <div class=\"column col-sm-10 col-md-8\">\r\n                  <div class=\"progress\">          \r\n                     <div class=\"progress-bar bg-success\" role=\"progressbar\"\r\n                        [ngClass]=\"getType(item.rt)\"\r\n                        [style.width]=\"item.rt*10 + '%'\"\r\n                        aria-valuemin=0 aria-valuemax=10>\r\n                        {{item.rt}}/10\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               \r\n               <!-- <progressbar class=\"column col-sm-10 col-md-8\" [max]=\"max\" [value]=\"item.rt\" [type]=\"getType(item.rt)\">\r\n                  <span class=\"text-nowrap\">{{item.rt}}/10</span>\r\n               </progressbar> -->\r\n\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/topnav/topnav.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/topnav/topnav.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"sticky-nav navbar navbar-expand-md bg-dark navbar-dark fixed-top\" id=\"topnav\">\r\n   <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n         <a class=\"navbar-brand\" href=\"#\">Nishant Kumar</a>\r\n      </div>\r\n   \r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\r\n         <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n   \r\n      <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n         <ul class=\"navbar-nav ml-auto\">\r\n         <!-- <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" href=\"#home\">Home</a>\r\n         </li> -->\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#about\">About</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#professionalSummary\">Professional Summary</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#skills\">Skills</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#projects\">Projects</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#education\">Education</a>\r\n         </li>\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#contact\">Contact</a>\r\n         </li>\r\n         </ul>\r\n      </div>\r\n   </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\r\n   font-family: 'Poppins', sans-serif;\r\n   padding-top: 50px;\r\n}\r\n\r\n.separator {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* Start Sidebar v1 */\r\n\r\n.sidebar-v1 {\r\n  height: 100%;\r\n  /* width: 100px; */\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #111;\r\n  overflow-x: hidden;\r\n  padding-top: 0px;\r\n}\r\n\r\n.sidebar-v1 a {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n  color: #818181;\r\n  display: block;\r\n}\r\n\r\n.sidebar-v1 a:hover {\r\n  color: #f1f1f1;\r\n}\r\n\r\n.main-v1 {\r\n  /* margin-left: 100px;  */\r\n  /* Same as the width of the sidenav */\r\n  /* padding: 0px -20px; */\r\n  margin-left: -50px;\r\n}\r\n\r\n/* End Sidebar v1 */\r\n\r\n.sidebar-icon-container i {\r\n  font-size: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxrQ0FBa0M7R0FDbEMsaUJBQWlCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUNBQXFDO0VBQ3JDLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBQ0EsbUJBQW1COztBQUVuQjtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3Ige1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLyogU3RhcnQgU2lkZWJhciB2MSAqL1xyXG4uc2lkZWJhci12MSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8qIHdpZHRoOiAxMDBweDsgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci12MSBhIHtcclxuICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM4MTgxODE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXYxIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4ubWFpbi12MSB7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDEwMHB4OyAgKi9cclxuICAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZW5hdiAqL1xyXG4gIC8qIHBhZGRpbmc6IDBweCAtMjBweDsgKi9cclxuICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbn1cclxuLyogRW5kIFNpZGViYXIgdjEgKi9cclxuXHJcbi5zaWRlYmFyLWljb24tY29udGFpbmVyIGkge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufSJdfQ== */");

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
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/topnav/topnav.component */ "./src/components/topnav/topnav.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/about/about.component */ "./src/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/contact/contact.component */ "./src/components/contact/contact.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/education/education.component */ "./src/components/education/education.component.ts");
/* harmony import */ var _components_prof_prof_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/prof/prof.component */ "./src/components/prof/prof.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/projects/projects.component */ "./src/components/projects/projects.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/skills/skills.component */ "./src/components/skills/skills.component.ts");



// import { CarouselModule } from 'ngx-bootstrap/carousel';
// import { TabsModule } from 'ngx-bootstrap/tabs';
// import { ProgressbarModule } from 'ngx-bootstrap/progressbar';









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__["TopnavComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _components_education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"],
                _components_prof_prof_component__WEBPACK_IMPORTED_MODULE_9__["ProfComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
                _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/about/about.component.css":
/*!**************************************************!*\
  !*** ./src/components/about/about.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIn0= */");

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
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/about/about.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/components/about/about.component.css")).default]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/components/contact/contact.component.css":
/*!******************************************************!*\
  !*** ./src/components/contact/contact.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJ9 */");

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
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/contact/contact.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/components/contact/contact.component.css")).default]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/components/education/education.component.css":
/*!**********************************************************!*\
  !*** ./src/components/education/education.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

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
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/education/education.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.css */ "./src/components/education/education.component.css")).default]
        })
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/components/prof/prof.component.css":
/*!************************************************!*\
  !*** ./src/components/prof/prof.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.c-carousel-item-content {\r\n   background-color: transparent;\r\n   height: 500px;\r\n   text-align: center;\r\n   font-size: xx-large;\r\n   padding: 10% 20% 0% 20%;\r\n }\r\n .carousel-indicators li {\r\n   width: 50px;\r\n   height: 5px;\r\n   border-radius: 25%;\r\n   -webkit-transition: 1s;\r\n   transition: 1s;\r\n   margin: 10px;\r\n }\r\n .c-carousel-control {\r\n   font-size: 70px;\r\n }\r\n ::ng-deep .c-carousel-control span {\r\n   background: black !important;\r\n   color: white;\r\n   display: block;\r\n   width: 50px;\r\n   height: 50px;\r\n   top: 46%;\r\n   border-radius: 50%;\r\n   line-height: 1;\r\n }\r\n ::ng-deep .slide {\r\n  width: 100%;\r\n  padding: 50px 100px !important;\r\n  min-height: 500px;\r\n  background-color: sandybrown;\r\n}\r\n /* .carousel-item {\r\n  margin: 50px;\r\n} */\r\n h2 {\r\n  color: rebeccapurple;\r\n  margin: 40px;\r\n}\r\n .animated {\r\n  -webkit-animation-duration: 2s;\r\n  animation-duration: 2s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n @-webkit-keyframes fadeIn {\r\n 0% {opacity: 0;}\r\n 100% {opacity: 1;}\r\n}\r\n @keyframes fadeIn {\r\n 0% {opacity: 0;}\r\n 100% {opacity: 1;}\r\n}\r\n .fadeIn {\r\n -webkit-animation-name: fadeIn;\r\n animation-name: fadeIn;\r\n}\r\n .content {\r\n  height: 250px;\r\n  background: burlywood;\r\n}\r\n .content h2:before {\r\n  content: '[';\r\n  left: 0;\r\n}\r\n .content h2:after {\r\n  content: ']';\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n .content h2:after, .content h2:before {\r\n  position: absolute;\r\n  top: 10%;\r\n  \r\n  color: #16a085;\r\n  font-size: 250px;\r\n  line-height: 60px;\r\n  \r\n  -webkit-animation-name: opacity;\r\n  -webkit-animation-duration: 2s;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-name: opacity;\r\n  animation-duration: 2s;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3Byb2YvcHJvZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtHQUNHLDZCQUE2QjtHQUM3QixhQUFhO0dBQ2Isa0JBQWtCO0dBQ2xCLG1CQUFtQjtHQUNuQix1QkFBdUI7Q0FDekI7Q0FDQTtHQUNFLFdBQVc7R0FDWCxXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLHNCQUFjO0dBQWQsY0FBYztHQUNkLFlBQVk7Q0FDZDtDQUNBO0dBQ0UsZUFBZTtDQUNqQjtDQUNBO0dBQ0UsNEJBQTRCO0dBQzVCLFlBQVk7R0FDWixjQUFjO0dBQ2QsV0FBVztHQUNYLFlBQVk7R0FDWixRQUFRO0dBQ1Isa0JBQWtCO0dBQ2xCLGNBQWM7Q0FDaEI7Q0FHRDtFQUNFLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5QjtDQUNBOztHQUVHO0NBRUg7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtBQUNkO0NBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7Q0FDQTtDQUNDLElBQUksVUFBVSxDQUFDO0NBQ2YsTUFBTSxVQUFVLENBQUM7QUFDbEI7Q0FDQTtDQUNDLElBQUksVUFBVSxDQUFDO0NBQ2YsTUFBTSxVQUFVLENBQUM7QUFDbEI7Q0FDQTtDQUNDLDhCQUE4QjtDQUM5QixzQkFBc0I7QUFDdkI7Q0FFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7Q0FDQTtFQUNFLFlBQVk7RUFDWixPQUFPO0FBQ1Q7Q0FDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0NBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTs7RUFFUixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjs7RUFFakIsK0JBQStCO0VBQy9CLDhCQUE4QjtFQUM5QiwyQ0FBMkM7RUFDM0MsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQ0FBbUM7QUFDckMiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvcHJvZi9wcm9mLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmMtY2Fyb3VzZWwtaXRlbS1jb250ZW50IHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgIGhlaWdodDogNTAwcHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgcGFkZGluZzogMTAlIDIwJSAwJSAyMCU7XHJcbiB9XHJcbiAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XHJcbiAgIHdpZHRoOiA1MHB4O1xyXG4gICBoZWlnaHQ6IDVweDtcclxuICAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG4gICB0cmFuc2l0aW9uOiAxcztcclxuICAgbWFyZ2luOiAxMHB4O1xyXG4gfVxyXG4gLmMtY2Fyb3VzZWwtY29udHJvbCB7XHJcbiAgIGZvbnQtc2l6ZTogNzBweDtcclxuIH1cclxuIDo6bmctZGVlcCAuYy1jYXJvdXNlbC1jb250cm9sIHNwYW4ge1xyXG4gICBiYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB3aWR0aDogNTBweDtcclxuICAgaGVpZ2h0OiA1MHB4O1xyXG4gICB0b3A6IDQ2JTtcclxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICBsaW5lLWhlaWdodDogMTtcclxuIH1cclxuIFxyXG5cclxuOjpuZy1kZWVwIC5zbGlkZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNTBweCAxMDBweCAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNhbmR5YnJvd247XHJcbn1cclxuLyogLmNhcm91c2VsLWl0ZW0ge1xyXG4gIG1hcmdpbjogNTBweDtcclxufSAqL1xyXG5cclxuaDIge1xyXG4gIGNvbG9yOiByZWJlY2NhcHVycGxlO1xyXG4gIG1hcmdpbjogNDBweDtcclxufVxyXG5cclxuLmFuaW1hdGVkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuIDAlIHtvcGFjaXR5OiAwO31cclxuIDEwMCUge29wYWNpdHk6IDE7fVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuIDAlIHtvcGFjaXR5OiAwO31cclxuIDEwMCUge29wYWNpdHk6IDE7fVxyXG59XHJcbi5mYWRlSW4ge1xyXG4gLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgYmFja2dyb3VuZDogYnVybHl3b29kO1xyXG59XHJcbi5jb250ZW50IGgyOmJlZm9yZSB7XHJcbiAgY29udGVudDogJ1snO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuLmNvbnRlbnQgaDI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICddJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jb250ZW50IGgyOmFmdGVyLCAuY29udGVudCBoMjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwJTtcclxuICBcclxuICBjb2xvcjogIzE2YTA4NTtcclxuICBmb250LXNpemU6IDI1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gIFxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuIl19 */");

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
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prof.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/prof/prof.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prof.component.css */ "./src/components/prof/prof.component.css")).default]
        })
    ], ProfComponent);
    return ProfComponent;
}());



/***/ }),

/***/ "./src/components/projects/projects.component.css":
/*!********************************************************!*\
  !*** ./src/components/projects/projects.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" /* Original */\r\n nav > .nav.nav-tabs{\r\n  border: none;\r\n  color:#fff;\r\n  background:#272e38;\r\n  border-radius:0;\r\n}\r\n nav > div a.nav-item.nav-link,\r\nnav > div a.nav-item.nav-link.active {\r\n  border: none;\r\n  padding: 18px 25px;\r\n  color:#fff;\r\n  background:#272e38;\r\n  border-radius:0;\r\n}\r\n nav > div a.nav-item.nav-link.active:after {\r\n  content: \"\";\r\n  position: relative;\r\n  bottom: -60px;\r\n  left: -20%;\r\n  border: 15px solid transparent;\r\n  border-top-color: #e74c3c ;\r\n}\r\n .c-tab-content {\r\n  height: 500px;\r\n  background: #fdfdfd;\r\n  line-height: 25px;\r\n  border: 1px solid #ddd;\r\n  border-top:5px solid #e74c3c;\r\n  border-bottom:5px solid #e74c3c;\r\n  overflow: auto;\r\n}\r\n .c-tab-pane {\r\n  margin-left: 15px;\r\n  margin-right: 15px;\r\n}\r\n .app-overview {\r\n  text-align: justify;\r\n  padding-left: 5%;\r\n  padding-right: 5%;;\r\n}\r\n nav > div a.nav-item.nav-link:hover,\r\nnav > div a.nav-item.nav-link.active {\r\n  border: none;\r\n  background: #e74c3c;\r\n  color: black;\r\n  font-size: larger;\r\n  border-radius:0;\r\n  -webkit-transition:background 0.20s linear;\r\n  transition:background 0.20s linear;\r\n}\r\n /* New */\r\n /* ::ng-deep .customClass > a {\r\n   border: none;\r\n   color:#fff;\r\n   background:#272e38;\r\n   border-radius:0;\r\n }\r\n ::ng-deep .customClass > a.nav-link,\r\n ::ng-deep .customClass > a.nav-link.active {\r\n   border: none;\r\n   padding: 18px 25px;\r\n   color:#fff;\r\n   background:#272e38;\r\n   border-radius:0;\r\n} \r\n::ng-deep .customClass > a.nav-link.active:after {\r\n   content: \"\";\r\n   position: relative;\r\n   bottom: -60px;\r\n   left: -20%;\r\n   border: 15px solid transparent;\r\n   border-top-color: #e74c3c ;\r\n}\r\n::ng-deep .customClass > a.nav-link:hover,\r\n::ng-deep .customClass > a.nav-link:focus {\r\n   border: none;\r\n   background: #e74c3c;\r\n   color:#fff;\r\n   border-radius:0;\r\n   transition:background 0.20s linear;\r\n}\r\n\r\n::ng-deep .tab-content {\r\n   height: 500px;\r\n   background: #fdfdfd;\r\n   line-height: 25px;\r\n   border: 1px solid #ddd;\r\n   border-top:5px solid #e74c3c;\r\n   border-bottom:5px solid #e74c3c;\r\n   padding:30px 25px;\r\n} */\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUMsYUFBYTtDQUNiO0VBQ0MsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtDQUNBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0NBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1QjtDQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsY0FBYztBQUNoQjtDQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtDQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7Q0FFQTs7RUFFRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDBDQUFrQztFQUFsQyxrQ0FBa0M7QUFDcEM7Q0FHQSxRQUFRO0NBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVDRyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC8qIE9yaWdpbmFsICovXHJcbiBuYXYgPiAubmF2Lm5hdi10YWJze1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjojZmZmO1xyXG4gIGJhY2tncm91bmQ6IzI3MmUzODtcclxuICBib3JkZXItcmFkaXVzOjA7XHJcbn1cclxubmF2ID4gZGl2IGEubmF2LWl0ZW0ubmF2LWxpbmssXHJcbm5hdiA+IGRpdiBhLm5hdi1pdGVtLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDE4cHggMjVweDtcclxuICBjb2xvcjojZmZmO1xyXG4gIGJhY2tncm91bmQ6IzI3MmUzODtcclxuICBib3JkZXItcmFkaXVzOjA7XHJcbn1cclxuXHJcbm5hdiA+IGRpdiBhLm5hdi1pdGVtLm5hdi1saW5rLmFjdGl2ZTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAtNjBweDtcclxuICBsZWZ0OiAtMjAlO1xyXG4gIGJvcmRlcjogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wLWNvbG9yOiAjZTc0YzNjIDtcclxufVxyXG4uYy10YWItY29udGVudCB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmRmZGZkO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXRvcDo1cHggc29saWQgI2U3NGMzYztcclxuICBib3JkZXItYm90dG9tOjVweCBzb2xpZCAjZTc0YzNjO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5jLXRhYi1wYW5lIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5hcHAtb3ZlcnZpZXcge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTs7XHJcbn1cclxuXHJcbm5hdiA+IGRpdiBhLm5hdi1pdGVtLm5hdi1saW5rOmhvdmVyLFxyXG5uYXYgPiBkaXYgYS5uYXYtaXRlbS5uYXYtbGluay5hY3RpdmUge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBib3JkZXItcmFkaXVzOjA7XHJcbiAgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDAuMjBzIGxpbmVhcjtcclxufVxyXG5cclxuXHJcbi8qIE5ldyAqL1xyXG4vKiA6Om5nLWRlZXAgLmN1c3RvbUNsYXNzID4gYSB7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgY29sb3I6I2ZmZjtcclxuICAgYmFja2dyb3VuZDojMjcyZTM4O1xyXG4gICBib3JkZXItcmFkaXVzOjA7XHJcbiB9XHJcbiA6Om5nLWRlZXAgLmN1c3RvbUNsYXNzID4gYS5uYXYtbGluayxcclxuIDo6bmctZGVlcCAuY3VzdG9tQ2xhc3MgPiBhLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgcGFkZGluZzogMThweCAyNXB4O1xyXG4gICBjb2xvcjojZmZmO1xyXG4gICBiYWNrZ3JvdW5kOiMyNzJlMzg7XHJcbiAgIGJvcmRlci1yYWRpdXM6MDtcclxufSBcclxuOjpuZy1kZWVwIC5jdXN0b21DbGFzcyA+IGEubmF2LWxpbmsuYWN0aXZlOmFmdGVyIHtcclxuICAgY29udGVudDogXCJcIjtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBib3R0b206IC02MHB4O1xyXG4gICBsZWZ0OiAtMjAlO1xyXG4gICBib3JkZXI6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgIGJvcmRlci10b3AtY29sb3I6ICNlNzRjM2MgO1xyXG59XHJcbjo6bmctZGVlcCAuY3VzdG9tQ2xhc3MgPiBhLm5hdi1saW5rOmhvdmVyLFxyXG46Om5nLWRlZXAgLmN1c3RvbUNsYXNzID4gYS5uYXYtbGluazpmb2N1cyB7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgYmFja2dyb3VuZDogI2U3NGMzYztcclxuICAgY29sb3I6I2ZmZjtcclxuICAgYm9yZGVyLXJhZGl1czowO1xyXG4gICB0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4yMHMgbGluZWFyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRhYi1jb250ZW50IHtcclxuICAgaGVpZ2h0OiA1MDBweDtcclxuICAgYmFja2dyb3VuZDogI2ZkZmRmZDtcclxuICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgIGJvcmRlci10b3A6NXB4IHNvbGlkICNlNzRjM2M7XHJcbiAgIGJvcmRlci1ib3R0b206NXB4IHNvbGlkICNlNzRjM2M7XHJcbiAgIHBhZGRpbmc6MzBweCAyNXB4O1xyXG59ICovXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");

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
        this.projects = [
            {
                id: 6,
                clientId: "efm",
                clientName: "Enterprise Fleets",
                responsibilities: [
                    "Develop RESTful APIs using .NET framework for microservice application",
                    "Develop web based Single Page Application using AngularJS, Angular and Vue.js",
                    "Code client side unit test using NodeJS, Jasmine & Karma and server side unit test using C# and Microsoft Fakes framework",
                    "Design data model and application",
                    "Develop data warehouse reports and dashboards using OBI (Oracle Business Intelligence)",
                    "Develop SSIS packages and SQL Server Jobs",
                    "Follow Agile methodology for Requirements, Estimation, development and peer review",
                    "Perform load testing and performance testing and analysis of application and services using Visual Studio, Soap UI and Fiddler",
                    "Follow Agile methodologies",
                ],
                technologies: [
                    ".NET 4.6, C#, WCF, ASP.NET MVC, AngularJS, Angular, Vue.js, NodeJS, Jasmine, Karma, JavaScript, HTML, CSS, Entity Framework, SoapUI, Fiddler,",
                    "SQL Server, State Machine, SSIS, OBI, TFS, Git",
                    "Agile Methodologies, Jira, Kanban, Confluence"
                ],
                applications: [{
                        name: "Citation Management Service development",
                        overview: "\nThe project primarily involves the development of REST APIs and web based applications for Electronic Citations Management System. \nREST APIs for Microservices are developed in C# and .NET and are used for serving Web Applications as well as for interfacing with external services. Web based SPA is developed using AngularJS, Angular, Vue.js, Javascript, Node, HTML5 and Foundation CSS. Unit tests are writted using Karma and Jasmine. SSIS packages are developed to process heavy loads. OBI (Oracle Business Intelligence) reports are developed to interface with Data Warehouse and generate reports & dashboards.\nThe developed system will be used to manage, process and payment of citations (traffic violations) of fleet vehicles. The citations are issues by different agencies. They are processed by the digital scanner and fed to the system. They undergo a series of validations before processing for the payment. Once validated, the payment is processed using either check or credit card issued by external bank and then a payment is issued to the bank for credit card usage and bill.\n        "
                    }]
            },
            {
                id: 5,
                clientId: "ameren",
                clientName: "Ameren",
                responsibilities: [
                    "Lead and Mentor the development team",
                    "Design & Develop web applications using AngularJS and ASP.NET MVC.",
                    "Develop Windows Service using .NET framework and C#",
                    "Develop Windows Surface application using Microsoft WPF framework",
                    "Gather Requirements. Estimate, Impact Analysis and Design",
                    "Unit Test. Integrate User Interface, Data Access layer, Webservice",
                    "Integrate business application",
                    "Deploy and configure web applications on IIS server",
                    "Peer review of the code",
                    "Follow Agile methodologies",
                ],
                technologies: [
                    ".NET 4.5, .NET 4.6.1, C#, ADO.NET, WCF, ASP.NET MVC, Java, WPF, XAML, Microsoft Surface SDK 2.0, Prism, Unity, Entity Framework, ADO.NET, ",
                    "HTML, AngularJS, JavaScript, CSS, ",
                    "SQL Server 2008 R2, Oracle 11g, Sybase"
                ],
                applications: [{
                        name: "Ameren’s internal & external websites Development",
                        overview: "Development, enhancement and maintenance of Ameren’s customer facing website (www.ameren.com), several internal websites used by business personnel and several external web application used by various organizations like companies, vendors, suppliers, etc. Most of these applications were developed in ASP.NET MVC with Oracle at backend and COBOL business layer."
                    }, {
                        name: "EMPRV-Primavera Interface Rewrite",
                        overview: "The development of middleware interface to transfer data from EMPRV (A PowerBuilder based system with Sybase database) to Primavera (Java based system with Oracle database). Additionally, the development of a website using ASP.NET and AngularJS where users can monitor transactions status, view transfer logs & error reports, and take corrective actions & re-initiate failed transactions."
                    }, {
                        name: "Application development for Tabletop Surface Device",
                        overview: "\n        Design and development of a document management and version control application with a front-end to allow engineers to view and edit documents. Documents and Books consisted of large and high-resolution blueprints and design sketches of machineries and factories. The front end was developed using C#, Microsoft WPF and Microsoft Surface SDK to run mainly on large screen (3 feet x 4 feet) Table-Top Surface devices. Touch controls and various motion gestures were developed to enable browsing, viewing and editing the documents.\n        "
                    },
                ]
            },
            {
                id: 4,
                clientId: "winchester",
                clientName: "Winchester Ammunition",
                responsibilities: [
                    "Develop Windows based applications using Microsoft WPF framework",
                    "Develop Data Access layer and Webservice using WCF",
                    "Application integration and unit testing ",
                    "Gather Requirements. Estimate, Impact Analysis and Design",
                    "Peer review of the code",
                ],
                technologies: [
                    ".NET 4, C#, WPF, XAML, Entity Framework, WCF, Microsoft SQL Server 2008 R2"
                ],
                applications: [{
                        name: "QDMS Application Development",
                        overview: "The development of Quality Data Management System (QDMS) used by Quality Systems to track, monitor and report on product non-conformances within the supply chain, during manufacturing and post-production."
                    }
                ]
            },
            {
                id: 3,
                clientId: "aspect",
                clientName: "Aspect Software",
                responsibilities: [
                    "Develop Microsoft Lync plug-in app using Microsoft Silverlight",
                    "Develop SQL Server Report using SSRS",
                    "Gather Requirements. Estimate, Impact Analysis and Design",
                    "Unit Test and Integrate User Interface",
                ],
                technologies: [
                    ".NET 4, C#, SSRS 2008, SQL Server 2008   .NET 4, C#, Silverlight, XAML, Entity Framework, WCF, SQL Server 2008 R2"
                ],
                applications: [{
                        name: "Reporting application for NGCC",
                        overview: "The development of Case priority reports using SQL Server Reporting Service 2008 (SSRS) for Next Generation Customer Care (NGCC). The reports were generated using the SSRS Bubble chart and the tables."
                    }
                ]
            },
            {
                id: 2,
                clientId: "equifax",
                clientName: "Equifax",
                responsibilities: [
                    "Develop Windows based application using Microsoft WPF and CCA (Customer Care Accelerator) framework",
                    "Develop web application using ASP.NET MVC 3",
                    "Develop data access layer using Entity Framework and SQL server.",
                    "Gather Requirements. Estimate, Impact Analysis and Design",
                    "Peer review of the code",
                ],
                technologies: [
                    ".NET 4, C#, WPF, XAML, Entity Framework, WCF, Microsoft SQL Server 2008 R2 "
                ],
                applications: [{
                        name: "CSA Application development",
                        overview: "Rewriting of an existing CSR application using WPF, Microsoft Dynamics CRM and CCA framework in order to improve the efficiency of customer service representative and to reduce the average call handling time."
                    }
                ]
            },
            {
                id: 1,
                clientId: "att",
                clientName: "AT&T",
                responsibilities: [
                    "Design and architect the applications",
                    "Understand business requirements. Propose efficient solutions.",
                    "Impact Analysis, Estimation and cost analysis",
                    "Implement best practices, design patterns in the code",
                    "Develop and unit test applications using C#, .NET framework and web technologies",
                    "Integrate business applications",
                    "Integrate User Interface, Data Access layer, Webservice",
                    "Deploy and configure of web applications on IIS",
                    "Peer Review and cross project review the code to ensure quality and scalability",
                    "Performance testing using Visual Studio Team System",
                    "Team mentoring and technical guidance",
                ],
                technologies: [
                    ".NET 2.0, .NET 3.0, C#, ASP.NET, ADO.NET, Web Service, WCF , AJAX, Enterprise Library, C/C++, VC++",
                    "SQL server, Oracle, Tandem, Windows 2003 server, IIS 7.0, Tortoise SVN"
                ],
                applications: [{
                        name: "ASSET application design & development",
                        overview: "ASSET is a productivity improvement tool which uses PROTON framework to integrate and automate multiple business applications. It enhances the productivity by workflow automation and context passing. It also generates a 360-degree view of the application and automates the data analysis."
                    }, {
                        name: "PROTON Framework design & development",
                        overview: "PROTON is a framework to integrate and automate the customer care applications. It can be used to build productivity improvement tool which integrates and automates the business application to save the agent’s time. It also extracts the critical data from different LOB applications and analyses them together to present a 360-degree view."
                    }, {
                        name: "ExecuStar application development and maintenance",
                        overview: "ExecuStar is a suite of applications which integrates various business application used at different layers of telecom industry. It provides single-sign-on, emulation for mainframe and UNIX based applications. It can also integrate with various windows based and web application providing a seamless experience to users and avoid frequent switching between multiple systems. The project involved the development of the new applications, emulations as well as enhancement and maintenance of existing ones."
                    }
                ]
            }
        ];
    }
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'projects',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/projects/projects.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/components/projects/projects.component.css")).default]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/components/skills/skills.component.css":
/*!****************************************************!*\
  !*** ./src/components/skills/skills.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MifQ== */");

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
        this.title = 'Technical Skills';
        this.max = 10;
        this.skills = [{
                id: 1,
                sec: 'Programming Languages',
                items: [
                    { id: 1, nm: 'c#', rt: 9 },
                    { id: 2, nm: 'Javascript', rt: 8 },
                    { id: 3, nm: 'HTML5', rt: 8 },
                    { id: 4, nm: 'SQL', rt: 7 },
                    { id: 5, nm: 'R', rt: 7 },
                    { id: 6, nm: 'C/C++', rt: 5 },
                    { id: 7, nm: 'Java', rt: 4 }
                ]
            }, {
                id: 2,
                sec: 'Backend Development',
                items: [
                    { id: 1, nm: 'ASP.NET MVC', rt: 8 },
                    { id: 2, nm: 'Entity Framework', rt: 8 },
                    { id: 3, nm: 'LINQ', rt: 8 },
                    { id: 4, nm: 'ADO.NET', rt: 7 },
                    { id: 5, nm: 'Node.js/Express', rt: 6 }
                ]
            }, {
                id: 3,
                sec: 'Frontend Development',
                items: [
                    { id: 1, nm: 'Angular', rt: 8 },
                    { id: 2, nm: 'Angularjs', rt: 8 },
                    { id: 3, nm: 'Vue.js', rt: 8 },
                    { id: 4, nm: 'ASP.NET', rt: 7 },
                    { id: 5, nm: 'Jasmine/Karma', rt: 7 },
                    { id: 6, nm: 'CSS', rt: 7 },
                    { id: 7, nm: 'Bootstrap', rt: 7 },
                    { id: 8, nm: 'WPF', rt: 8 }
                ]
            }, {
                id: 4,
                sec: 'Database',
                items: [
                    { id: 1, nm: 'SQL Server', rt: 7 },
                    { id: 2, nm: 'Oracle', rt: 6 },
                    { id: 3, nm: 'Sybase', rt: 6 },
                    { id: 4, nm: 'SSIS', rt: 6 },
                    { id: 5, nm: 'OBI', rt: 6 },
                    { id: 6, nm: 'MongoDB', rt: 3 }
                ]
            }, {
                id: 4,
                sec: 'Others',
                items: [
                    { id: 1, nm: 'OOAD Concepts', rt: 8 },
                    { id: 2, nm: 'Design patterns', rt: 6 },
                    { id: 3, nm: 'Dependency Injections', rt: 7 },
                    { id: 4, nm: 'UML diagrams', rt: 6 },
                    { id: 5, nm: 'Cloud concepts', rt: 6 }
                ]
            }];
    }
    SkillsComponent.prototype.getType = function (rating) {
        var type;
        if (rating >= 8) {
            type = 'bg-success';
        }
        else if (rating >= 6) {
            type = 'bg-info';
        }
        else if (rating >= 4) {
            type = 'bg-warning';
        }
        else {
            type = 'bg-danger';
        }
        return type;
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'skills',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/skills/skills.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.css */ "./src/components/skills/skills.component.css")).default]
        })
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/components/topnav/topnav.component.css":
/*!****************************************************!*\
  !*** ./src/components/topnav/topnav.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\na,\r\na:hover,\r\na:focus {\r\n color: inherit;\r\n text-decoration: none;\r\n -webkit-transition: all 0.3s;\r\n transition: all 0.3s;\r\n}\r\n\r\n/* .navbar {\r\n padding: 15px 10px;\r\n background: #fff;\r\n border: none;\r\n border-radius: 0;\r\n margin-bottom: 40px;\r\n box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n} */\r\n\r\n.navbar-btn {\r\n box-shadow: none;\r\n outline: none !important;\r\n border: none;\r\n}\r\n\r\n.line {\r\n width: 100%;\r\n height: 1px;\r\n border-bottom: 1px dashed #ddd;\r\n margin: 40px 0;\r\n}\r\n\r\ni,\r\nspan {\r\n display: inline-block;\r\n}\r\n\r\n.wrapper {\r\n display: -webkit-box;\r\n display: flex;\r\n -webkit-box-align: stretch;\r\n         align-items: stretch;\r\n}\r\n\r\n#topnav .nav-item {\r\n  width: 100px;\r\n}\r\n\r\n#topnav .nav-item .active {\r\n  background-color: darkolivegreen;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3RvcG5hdi90b3BuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7OztDQUdDLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsNEJBQW9CO0NBQXBCLG9CQUFvQjtBQUNyQjs7QUFFQTs7Ozs7OztHQU9HOztBQUVIO0NBQ0MsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtDQUN4QixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLDhCQUE4QjtDQUM5QixjQUFjO0FBQ2Y7O0FBRUE7O0NBRUMscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0Msb0JBQWE7Q0FBYixhQUFhO0NBQ2IsMEJBQW9CO1NBQXBCLG9CQUFvQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy90b3BuYXYvdG9wbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYSxcclxuYTpob3ZlcixcclxuYTpmb2N1cyB7XHJcbiBjb2xvcjogaW5oZXJpdDtcclxuIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4vKiAubmF2YmFyIHtcclxuIHBhZGRpbmc6IDE1cHggMTBweDtcclxuIGJhY2tncm91bmQ6ICNmZmY7XHJcbiBib3JkZXI6IG5vbmU7XHJcbiBib3JkZXItcmFkaXVzOiAwO1xyXG4gbWFyZ2luLWJvdHRvbTogNDBweDtcclxuIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufSAqL1xyXG5cclxuLm5hdmJhci1idG4ge1xyXG4gYm94LXNoYWRvdzogbm9uZTtcclxuIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gd2lkdGg6IDEwMCU7XHJcbiBoZWlnaHQ6IDFweDtcclxuIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuIG1hcmdpbjogNDBweCAwO1xyXG59XHJcblxyXG5pLFxyXG5zcGFuIHtcclxuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gZGlzcGxheTogZmxleDtcclxuIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG4jdG9wbmF2IC5uYXYtaXRlbSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbiN0b3BuYXYgLm5hdi1pdGVtIC5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtvbGl2ZWdyZWVuO1xyXG59XHJcbiJdfQ== */");

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
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topnav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/topnav/topnav.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topnav.component.css */ "./src/components/topnav/topnav.component.css")).default]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\CodeGit\nikumar-ghp-dev\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map