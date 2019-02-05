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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _game_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game/sidebar/sidebar.component */ "./src/app/game/sidebar/sidebar.component.ts");
/* harmony import */ var _game_field_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game/field/field.component */ "./src/app/game/field/field.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _game_multi_game_multi_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./game-multi/game-multi.component */ "./src/app/game-multi/game-multi.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _playroom_playroom_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./playroom/playroom.component */ "./src/app/playroom/playroom.component.ts");
/* harmony import */ var _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./multiplayer/multiplayer.component */ "./src/app/multiplayer/multiplayer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_10__["GameComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
                _game_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
                _game_field_field_component__WEBPACK_IMPORTED_MODULE_13__["FieldComponent"],
                _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundPageComponent"],
                _game_multi_game_multi_component__WEBPACK_IMPORTED_MODULE_15__["GameMultiComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _playroom_playroom_component__WEBPACK_IMPORTED_MODULE_17__["PlayroomComponent"],
                _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_18__["MultiplayerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_7__["appRoutes"]),
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase, 'firabase-test'),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_8__["MyFirstServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game-multi/game-multi.component.css":
/*!*****************************************************!*\
  !*** ./src/app/game-multi/game-multi.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".existing-rooms {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n\n}\n\n.room {\n  background-color: burlywood;\n  width: 250px;\n  height: 150px;\n  border: 2px solid;\n  margin-right: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.menu-button {\n  border: 1px solid gray;\n  border-radius: 20px;\n  display: inline-block;\n  width: 100px;\n  background-color: rgb(73, 128, 223);\n  color: black;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 5px 15px;\n}\n\n.menu-button:hover {\n    box-shadow: 0 0 5px rgba(0,0,0,0.3);\n    background: rgb(103, 152, 238);\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1tdWx0aS9nYW1lLW11bHRpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDRCQUE0Qjs7Q0FFN0I7O0FBRUQ7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0NBQ25COztBQUVDO0lBQ0Usb0NBQW9DO0lBQ3BDLCtCQUErQjtHQUNoQyIsImZpbGUiOiJzcmMvYXBwL2dhbWUtbXVsdGkvZ2FtZS1tdWx0aS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4aXN0aW5nLXJvb21zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG59XG5cbi5yb29tIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudS1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCAxMjgsIDIyMyk7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cblxuICAubWVudS1idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIGJhY2tncm91bmQ6IHJnYigxMDMsIDE1MiwgMjM4KTtcbiAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/game-multi/game-multi.component.html":
/*!******************************************************!*\
  !*** ./src/app/game-multi/game-multi.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"submit\" (click)=addRoom(setRoomName.value)>\n  Add room\n</button>\n<input #setRoomName placeholder=\"enter room name\">\n\n<p>Select existing room</p>\n<div class=\"existing-rooms\">\n\n<div class=\"room\"\n  *ngFor=\"let room of rooms\">\n  {{room.id}}\n  {{room.name}}\n  Counter: {{room.counter}}\n\n  <a class=\"menu-button\" [routerLink]=\"['/playroom', room.id]\"> Enter room {{room.id}}</a>\n  <!-- <button (click)=\"goToRoom(room.id)\">\n    Enter room\n  </button> -->\n  <button (click)=\"deleteRoom(room.id)\">\n    Delete\n  </button>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/game-multi/game-multi.component.ts":
/*!****************************************************!*\
  !*** ./src/app/game-multi/game-multi.component.ts ***!
  \****************************************************/
/*! exports provided: GameMultiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMultiComponent", function() { return GameMultiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Router } from '@angular/router';
var GameMultiComponent = /** @class */ (function () {
    // public router: Router;
    function GameMultiComponent(_myService, db) {
        this._myService = _myService;
        this.db = db;
        this.rooms = [];
    }
    GameMultiComponent.prototype.addRoom = function (roomName) {
        var roomId = new Date().getUTCMilliseconds();
        var blackJackData = this._myService.getMyData();
        var masterId = blackJackData.userId;
        this.db.object('/rooms/room' + roomId).update({
            name: roomName,
            id: roomId,
            counter: 0,
            masterId: masterId,
            deck: this._myService.createDeck(),
            players: {}
        });
        this.db.object('/rooms/room' + roomId + ("/players/" + masterId)).update({
            id: masterId,
            isBot: false,
            name: 'Master',
            cards: [],
            isWinner: false,
            isFinished: false,
            score: 0
        });
    };
    GameMultiComponent.prototype.deleteRoom = function (roomId) {
        this.db.list('/rooms').remove('room' + roomId);
    };
    // public goToRoom(roomID: number): void {
    //   this.router.navigate(['/room', roomID]);
    // }
    GameMultiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._myService.getRoomData()
            .subscribe(function (rooms) {
            _this.rooms = rooms;
        });
    };
    GameMultiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-multi',
            template: __webpack_require__(/*! ./game-multi.component.html */ "./src/app/game-multi/game-multi.component.html"),
            styles: [__webpack_require__(/*! ./game-multi.component.css */ "./src/app/game-multi/game-multi.component.css")]
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], GameMultiComponent);
    return GameMultiComponent;
}());



/***/ }),

/***/ "./src/app/game/field/field.component.css":
/*!************************************************!*\
  !*** ./src/app/game/field/field.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.cards img {\n  display: block;\n  width: 100px;\n  height: 130px;\n  background-color: white;\n  z-index: 100;\n  margin: 10px;\n  border-radius: 10px;\n  border: 2px solid grey;\n}\n\n.decision-buttons {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.next-card,\n.stop-game {\n  width: 150px;\n  height: 30px;\n  margin: 10px;\n  border-radius: 20px;\n  background-color: rgb(73, 128, 223);\n}\n\n.next-card:hover,\n.stop-game:hover {\n  background-color: rgb(103, 152, 238);\n}\n\n.next-card:active,\n.stop-game:active {\n  background-color: rgb(16, 95, 231);\n}\n\n.game-field {\n  text-align: center;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9maWVsZC9maWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixvQkFBb0I7Q0FDckI7O0FBRUQ7O0VBRUUsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG9DQUFvQztDQUNyQzs7QUFFRDs7RUFFRSxxQ0FBcUM7Q0FDdEM7O0FBRUQ7O0VBRUUsbUNBQW1DO0NBQ3BDOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9maWVsZC9maWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkcyBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTAwO1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG59XG5cbi5kZWNpc2lvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5leHQtY2FyZCxcbi5zdG9wLWdhbWUge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDEyOCwgMjIzKTtcbn1cblxuLm5leHQtY2FyZDpob3Zlcixcbi5zdG9wLWdhbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLCAxNTIsIDIzOCk7XG59XG5cbi5uZXh0LWNhcmQ6YWN0aXZlLFxuLnN0b3AtZ2FtZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYsIDk1LCAyMzEpO1xufVxuXG4uZ2FtZS1maWVsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/game/field/field.component.html":
/*!*************************************************!*\
  !*** ./src/app/game/field/field.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"game-field\">\n  <div class=\"decision-buttons\">\n    <button class=\"next-card\" *ngIf=\"gameInProgress\" (click)=\"cardTaken.emit()\">\n      Pick a card\n    </button>\n\n    <button class=\"stop-game\" *ngIf=\"gameInProgress\" (click)=\"gameStopped.emit()\">\n      Stop\n    </button>\n  </div>\n\n <div *ngFor=\"let player of players\">\n  <div class=\"cards\">\n    <img *ngFor=\"let card of player.cards\"\n         [src]=\"!gameInProgress ? card.face : player.isBot == false ? card.face : card.back\" />\n  </div>\n\n\n  <!-- <div class=\"cards\">\n      <img *ngFor=\"let card of players[0].cards\" [src]=\"card.face\" />\n  </div> -->\n</div>\n</section>\n"

/***/ }),

/***/ "./src/app/game/field/field.component.ts":
/*!***********************************************!*\
  !*** ./src/app/game/field/field.component.ts ***!
  \***********************************************/
/*! exports provided: FieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function() { return FieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldComponent = /** @class */ (function () {
    function FieldComponent() {
        this.cardTaken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gameStopped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // @Input() public cardsPlayerTwo: TCard[];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FieldComponent.prototype, "cardTaken", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FieldComponent.prototype, "gameStopped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FieldComponent.prototype, "gameInProgress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FieldComponent.prototype, "players", void 0);
    FieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-field',
            template: __webpack_require__(/*! ./field.component.html */ "./src/app/game/field/field.component.html"),
            styles: [__webpack_require__(/*! ./field.component.css */ "./src/app/game/field/field.component.css")],
            host: { class: 'game-field' }
        })
    ], FieldComponent);
    return FieldComponent;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.side-bar {\n  padding-top: 40px;\n  background-color: rgb(200, 150, 100);\n  width: 20%;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.game-field {\n  background-color: green;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsWUFBWTtDQUNiOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpZGUtYmFyIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDE1MCwgMTAwKTtcbiAgd2lkdGg6IDIwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nYW1lLWZpZWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-sidebar [allMessages]=\"allMessages\"\n               [players]=\"players\"\n               [gameInProgress]=\"gameInProgress\"\n               (gameStarted)=\"blackJackInit()\">\n  </app-sidebar>\n\n  <app-field (cardTaken)=\"nextRound()\"\n             [players]=\"players\"\n             [gameInProgress]=\"gameInProgress\"\n             (gameStopped)=\"stopGame()\">\n  </app-field>\n</div>\n"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameComponent = /** @class */ (function () {
    function GameComponent(_myService) {
        this._myService = _myService;
        this.players = this.createPlayers(3, 1);
        this.gameInProgress = false;
        this.allMessages = [];
        this._newDeck = this._myService.createDeck();
        this._myDeck = this._myService.shuffleDeck(this._newDeck);
    }
    GameComponent.prototype.Player = function (name, isBot, id) {
        var player = {
            name: name,
            isBot: isBot,
            id: id,
            isWinner: false,
            isFinished: false,
            score: 0,
            cards: []
        };
        return player;
    };
    GameComponent.prototype.createPlayers = function (playersNumber, humansNumber) {
        var players = [];
        var id = 0;
        for (var i = 0; i < playersNumber; i++, id++) {
            var isBot = i < humansNumber ? false : true;
            var newPlayer = this.Player("Vasya" + i, isBot, id);
            players.push(newPlayer);
        }
        return players;
    };
    GameComponent.prototype.blackJackInit = function () {
        this.gameInProgress = true;
        this.startNewGame();
    };
    GameComponent.prototype.startNewGame = function () {
        var _this = this;
        this._refillDeck();
        console.log(this._myDeck);
        this._myDeck = this._myService.shuffleDeck(this._myDeck);
        this._clearBoard();
        this.players.forEach(function (player) {
            player.cards = [];
            player.isFinished = false;
            player.isWinner = false;
            player.score = 0;
        });
        this.players.forEach(function (player) { return _this._takeNewCard(player); });
        console.log(this._myDeck);
    };
    GameComponent.prototype.stopGame = function () {
        this.players[0].isFinished = true;
        this._writeMessage(this.players[0].name + " stopped the game");
        this.nextRound();
    };
    GameComponent.prototype.nextRound = function () {
        var _this = this;
        this.players.forEach(function (player) {
            if (!player.isFinished) {
                _this.nextTurn(player);
            }
        });
        if (this.players.every(function (player) { return player.isFinished; })) {
            if (!this.players.some(function (player) { return player.isWinner; })) {
                var winner = this._myService.evaluateWinner(this.players);
                this._writeMessage(winner.name + " has won");
            }
            this._showNewGameButton();
        }
    };
    GameComponent.prototype.nextTurn = function (player) {
        if (player.isBot && player.score >= 15) {
            player.isFinished = true;
            this._writeMessage(player.name + " stopped the game");
        }
        if (!player.isFinished) {
            var takenCard = this._takeNewCard(player);
            this._writeMessage(player.name + " took " + takenCard.name + " " + takenCard.symbol);
            if (player.score > 21) {
                player.isFinished = true;
                this._writeMessage(player.name + " has too much! Looser!");
            }
            if (player.score === 21) {
                this._finishGame(player);
                this._writeMessage(player.name + " has won! Cheers!");
            }
        }
    };
    GameComponent.prototype._clearBoard = function () {
        this.gameInProgress = true;
        this.allMessages = [];
    };
    GameComponent.prototype._takeNewCard = function (player) {
        var takenCard = this._myDeck.pop();
        player.cards.push(takenCard);
        player.score = this._myService.scoreSum(player);
        return takenCard;
    };
    GameComponent.prototype._showNewGameButton = function () {
        this.gameInProgress = false;
    };
    GameComponent.prototype._refillDeck = function () {
        var _this = this;
        this.players.forEach(function (player) { _this._myDeck = _this._myDeck.concat(player.cards); });
    };
    GameComponent.prototype._finishGame = function (winner) {
        this.players.forEach(function (player) { return (player.isFinished = true); });
        winner.isWinner = true;
    };
    GameComponent.prototype._writeMessage = function (message) {
        this.messageText = message;
        this.allMessages.push(message);
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/game/sidebar/sidebar.component.css":
/*!****************************************************!*\
  !*** ./src/app/game/sidebar/sidebar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-game  {\n  width: 150px;\n  height: 30px;\n  margin: 10px;\n  border-radius: 20px;\n  background-color: rgb(73, 128, 223);\n}\n\n.go-to-menu {\n  border: 2px solid gray;\n  border-radius: 20px;\n  display: inline-block;\n  width: 120px;\n  background-color: rgb(73, 128, 223);\n  color: black;\n  text-decoration: none;\n  font-weight: 100;\n  padding:3px 15px;\n}\n\n.go-to-menu:hover {\n  box-shadow: 0 0 5px rgba(0,0,0,0.3);\n  background: rgb(103, 152, 238);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixvQ0FBb0M7Q0FDckM7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLG9DQUFvQztFQUNwQywrQkFBK0I7Q0FDaEMiLCJmaWxlIjoic3JjL2FwcC9nYW1lL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1nYW1lICB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MywgMTI4LCAyMjMpO1xufVxuXG4uZ28tdG8tbWVudSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDEyOCwgMjIzKTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6M3B4IDE1cHg7XG59XG5cbi5nby10by1tZW51OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuMyk7XG4gIGJhY2tncm91bmQ6IHJnYigxMDMsIDE1MiwgMjM4KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/game/sidebar/sidebar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/game/sidebar/sidebar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"side-bar\">\n  <button class=\"new-game\" (click)=\"gameStarted.emit()\">\n    New game\n  </button>\n  <a class=\"go-to-menu\" routerLink=\"/menu\">To main menu</a>\n\n  <div class=\"game-log\">\n    <h2>Game Log </h2>\n\n    <p *ngFor=\"let message of allMessages\">\n      {{ message }}\n    </p>\n\n  </div>\n\n  <div *ngIf=\"!gameInProgress\" class=\"game-score\">\n\n    <h2>Game score:</h2>\n\n    <p *ngFor=\"let player of players\">{{player.name}}: {{player.score}}</p>\n\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/game/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/game/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.gameStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SidebarComponent.prototype, "allMessages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "players", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidebarComponent.prototype, "gameInProgress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SidebarComponent.prototype, "gameStarted", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/game/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/game/sidebar/sidebar.component.css")],
            host: { class: 'side-bar' }
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-button {\n  border: 1px solid gray;\n  border-radius: 20px;\n  display: inline-block;\n  width: 100px;\n  background-color: rgb(73, 128, 223);\n  color: black;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 5px 15px;\n}\n\n  .menu-button:hover {\n    box-shadow: 0 0 5px rgba(0,0,0,0.3);\n    background: rgb(103, 152, 238);\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0NBQ25COztFQUVDO0lBQ0Usb0NBQW9DO0lBQ3BDLCtCQUErQjtHQUNoQyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCAxMjgsIDIyMyk7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cblxuICAubWVudS1idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIGJhY2tncm91bmQ6IHJnYigxMDMsIDE1MiwgMjM4KTtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"userName\">\n  Hi {{userName}}!\n  <a class=\"menu-button\" routerLink=\"/menu\">To menu</a>\n</p>\n\n<div *ngIf=\"!userName\">\n  <p>Hi, unknown user!</p>\n<input placeholder=\"Please introduce yourself\" #nameInput>\n<button type=\"submit\" (click)=saveUserName(nameInput.value)>\n  Remember me\n</button>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(_myService) {
        this._myService = _myService;
        this.blackJackData = JSON.parse(localStorage.getItem('blackJackData')) || {};
        // public nameIsKnown: string = this.blackJackData.userName;
        this.userName = this.blackJackData.userName;
    }
    LoginComponent.prototype.saveUserName = function (name) {
        console.log(name);
        var userId = new Date().getUTCMilliseconds();
        this.blackJackData.userName = name;
        if (!this.blackJackData.userId) {
            this.blackJackData.userId = userId;
        }
        this.userName = name;
        var stringblackJackData = JSON.stringify(this.blackJackData);
        localStorage.setItem('blackJackData', stringblackJackData);
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: green;\n  text-align: center;\n  padding-top: 200px;\n}\n\n.menu-button {\n  border: 1px solid gray;\n  border-radius: 20px;\n  display: inline-block;\n  width: 100px;\n  background-color: rgb(73, 128, 223);\n  color: black;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 5px 15px;\n}\n\n.menu-button:not(:last-child) {\n  margin-right: 20px;\n}\n\n.menu-button:hover {\n    box-shadow: 0 0 5px rgba(0,0,0,0.3);\n    background: rgb(103, 152, 238);\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVDO0lBQ0Usb0NBQW9DO0lBQ3BDLCtCQUErQjtHQUNoQyIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDIwMHB4O1xufVxuXG4ubWVudS1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCAxMjgsIDIyMyk7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cblxuLm1lbnUtYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbiAgLm1lbnUtYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAzLCAxNTIsIDIzOCk7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main-container\">\n  <h1>Wellcome to Black Jack!</h1>\n\n  <h2>Select your game</h2>\n\n  <a class=\"menu-button\" routerLink=\"/game\">Single player</a>\n\n  <a class=\"menu-button\" routerLink=\"/game-multi\">Multi player</a>\n\n  </main>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/multiplayer/multiplayer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/multiplayer/multiplayer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.side-bar {\n  padding-top: 40px;\n  background-color: rgb(200, 150, 100);\n  width: 20%;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.game-field {\n  background-color: green;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaWRlLWJhciB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAxNTAsIDEwMCk7XG4gIHdpZHRoOiAyMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ2FtZS1maWVsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/multiplayer/multiplayer.component.html":
/*!********************************************************!*\
  !*** ./src/app/multiplayer/multiplayer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-sidebar [allMessages]=\"allMessages\" [players]=\"players\" [gameInProgress]=\"gameInProgress\" (gameStarted)=\"blackJackInit()\">\n  </app-sidebar>\n\n  <app-field (cardTaken)=\"nextRound()\" [players]=\"players\" [gameInProgress]=\"gameInProgress\" (gameStopped)=\"stopGame()\">\n  </app-field>\n</div>\n"

/***/ }),

/***/ "./src/app/multiplayer/multiplayer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/multiplayer/multiplayer.component.ts ***!
  \******************************************************/
/*! exports provided: MultiplayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplayerComponent", function() { return MultiplayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultiplayerComponent = /** @class */ (function () {
    function MultiplayerComponent(_myService) {
        this._myService = _myService;
        this.players = this.createPlayers(3, 1);
        this.gameInProgress = false;
        this.allMessages = [];
        this._newDeck = this._myService.createDeck();
        this._myDeck = this._myService.shuffleDeck(this._newDeck);
    }
    MultiplayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._myService.updateDeck(this._myDeck, this._myService.roomId);
        this.players.forEach(function (player) {
            return _this._myService.updatePlayer(player, _this._myService.roomId);
        });
        this.subRoom = this._myService
            .getThisRoomData(this._myService.roomId)
            .subscribe(function (room) {
            _this._myDeck = room.deck;
            console.log(room.players);
            console.log(room.players ? Object.values(room.players) : 'oops!');
            console.log(_this._myDeck);
            // if (room.players) { this.players = Object.values(room.players);      }
        });
    };
    MultiplayerComponent.prototype.ngOnDestroy = function () {
        this.subRoom.unsubscribe();
    };
    MultiplayerComponent.prototype.Player = function (name, isBot, id) {
        var player = {
            name: name,
            isBot: isBot,
            id: id,
            isWinner: false,
            isFinished: false,
            score: 0,
            cards: []
        };
        return player;
    };
    MultiplayerComponent.prototype.createPlayers = function (playersNumber, humansNumber) {
        var players = [];
        var id = this._myService.blackJackData.userId;
        for (var i = 0; i < playersNumber; i++, id += 100000) {
            var isBot = i < humansNumber ? false : true;
            var newPlayer = this.Player("Vasya" + i, isBot, id);
            players.push(newPlayer);
        }
        return players;
    };
    MultiplayerComponent.prototype.blackJackInit = function () {
        this.gameInProgress = true;
        this.startNewGame();
    };
    MultiplayerComponent.prototype.startNewGame = function () {
        var _this = this;
        this._refillDeck();
        // console.log(this._myDeck);
        this._myDeck = this._myService.shuffleDeck(this._myDeck);
        this._clearBoard();
        this.players.forEach(function (player) {
            player.cards = [];
            player.isFinished = false;
            player.isWinner = false;
            player.score = 0;
        });
        this.players.forEach(function (player) { return _this._takeNewCard(player); });
        this.players.forEach(function (player) {
            _this._myService.updatePlayer(player, _this._myService.roomId);
        });
        this._myService.updateDeck(this._myDeck, this._myService.roomId);
        // console.log(this._myDeck);
    };
    MultiplayerComponent.prototype.stopGame = function () {
        this.players[0].isFinished = true;
        this._writeMessage(this.players[0].name + " stopped the game");
        this.nextRound();
    };
    MultiplayerComponent.prototype.nextRound = function () {
        var _this = this;
        this.players.forEach(function (player) {
            if (!player.isFinished) {
                _this.nextTurn(player);
            }
        });
        if (this.players.every(function (player) { return player.isFinished; })) {
            if (!this.players.some(function (player) { return player.isWinner; })) {
                var winner = this._myService.evaluateWinner(this.players);
                this._writeMessage(winner.name + " has won");
            }
            this._showNewGameButton();
        }
    };
    MultiplayerComponent.prototype.nextTurn = function (player) {
        if (player.isBot && player.score >= 15) {
            player.isFinished = true;
            this._writeMessage(player.name + " stopped the game");
        }
        if (!player.isFinished) {
            var takenCard = this._takeNewCard(player);
            this._writeMessage(player.name + " took " + takenCard.name + " " + takenCard.symbol);
            if (player.score > 21) {
                player.isFinished = true;
                this._writeMessage(player.name + " has too much! Looser!");
            }
            if (player.score === 21) {
                this._finishGame(player);
                this._writeMessage(player.name + " has won! Cheers!");
            }
        }
        this._myService.updateDeck(this._myDeck, this._myService.roomId);
        this._myService.updatePlayer(player, this._myService.roomId);
    };
    MultiplayerComponent.prototype._clearBoard = function () {
        this.gameInProgress = true;
        this.allMessages = [];
    };
    MultiplayerComponent.prototype._takeNewCard = function (player) {
        var takenCard = this._myDeck.pop();
        player.cards.push(takenCard);
        player.score = this._myService.scoreSum(player);
        return takenCard;
    };
    MultiplayerComponent.prototype._showNewGameButton = function () {
        this.gameInProgress = false;
    };
    MultiplayerComponent.prototype._refillDeck = function () {
        var _this = this;
        this.players.forEach(function (player) {
            _this._myDeck = _this._myDeck.concat(player.cards);
        });
    };
    MultiplayerComponent.prototype._finishGame = function (winner) {
        this.players.forEach(function (player) { return (player.isFinished = true); });
        winner.isWinner = true;
    };
    MultiplayerComponent.prototype._writeMessage = function (message) {
        this.messageText = message;
        this.allMessages.push(message);
    };
    MultiplayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiplayer',
            template: __webpack_require__(/*! ./multiplayer.component.html */ "./src/app/multiplayer/multiplayer.component.html"),
            styles: [__webpack_require__(/*! ./multiplayer.component.css */ "./src/app/multiplayer/multiplayer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"]])
    ], MultiplayerComponent);
    return MultiplayerComponent;
}());



/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-found-alert {\n  color: wheat;\n  font-size:50px;\n  font-weight: 600;\n}\n\n.main-container {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: url('not-found-background.jpg') no-repeat;\n  background-size: 100%;\n  text-align: center;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixZQUFZO0VBQ1osc0RBQXFFO0VBQ3JFLHNCQUFzQjtFQUN0QixtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQtcGFnZS9ub3QtZm91bmQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZC1hbGVydCB7XG4gIGNvbG9yOiB3aGVhdDtcbiAgZm9udC1zaXplOjUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL25vdC1mb3VuZC1iYWNrZ3JvdW5kLmpwZykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main-container\">\n  <p class=\"not-found-alert\">\n    We are looking for your page everywhere...\n    <br> but we cannot find it!\n  </p>\n</main>\n"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.css */ "./src/app/not-found-page/not-found-page.component.css")]
        })
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/playroom/playroom.component.css":
/*!*************************************************!*\
  !*** ./src/app/playroom/playroom.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXlyb29tL3BsYXlyb29tLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/playroom/playroom.component.html":
/*!**************************************************!*\
  !*** ./src/app/playroom/playroom.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  playroom works!\n</p>\n\n<div>\n  Room: {{id}}\n</div>\n\n<app-multiplayer></app-multiplayer>\n\n"

/***/ }),

/***/ "./src/app/playroom/playroom.component.ts":
/*!************************************************!*\
  !*** ./src/app/playroom/playroom.component.ts ***!
  \************************************************/
/*! exports provided: PlayroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayroomComponent", function() { return PlayroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlayroomComponent = /** @class */ (function () {
    function PlayroomComponent(route, db, _myService) {
        this.route = route;
        this.db = db;
        this._myService = _myService;
        // public newCount: number;
        this.blackJackData = this._myService.getMyData();
        this.players = {};
        this._destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    PlayroomComponent.prototype.ngOnInit = function () {
        // this._myService.getRoomData().subscribe((rooms: TRoom[]) => {
        //   this.rooms = rooms;
        // });
        var _this = this;
        this.sub = this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroy$$))
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this._myService.roomId = +params['id'];
        });
        this.sub1 = this._myService
            .getThisRoomData(this.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroy$$))
            .subscribe(function (room) {
            _this.thisRoom = room;
            _this.players = room.players;
            // console.log(this.players);
            var playerNumber = _this.players ? Object.keys(_this.players).length : 0;
            _this.db.object('/rooms/room' + _this.id).update({ counter: playerNumber });
        });
        this.db.object('/rooms/room' + this.id + ("/players/" + this.blackJackData.userId)).update({
            id: this.blackJackData.userId,
            isBot: false,
            name: this.blackJackData.userName,
            cards: [],
            isWinner: false,
            isFinished: false,
            score: 0
        });
    };
    PlayroomComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this._destroy$$.next();
        this.db.object('/rooms/room' + this.id + ("/players/" + this.blackJackData.userId)).remove();
        this._myService.myBotsId.forEach(function (botId) {
            _this._myService.removePlayer(botId, _this.id);
        });
        var playerNumber = this.players ? Object.keys(this.players).length - 1 : 0;
        this.db.object('/rooms/room' + this.id).update({ counter: playerNumber });
        // this.sub.unsubscribe();
        // this.sub1.unsubscribe();
    };
    PlayroomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-playroom',
            template: __webpack_require__(/*! ./playroom.component.html */ "./src/app/playroom/playroom.component.html"),
            styles: [__webpack_require__(/*! ./playroom.component.css */ "./src/app/playroom/playroom.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_3__["MyFirstServiceService"]])
    ], PlayroomComponent);
    return PlayroomComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _game_multi_game_multi_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-multi/game-multi.component */ "./src/app/game-multi/game-multi.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _playroom_playroom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playroom/playroom.component */ "./src/app/playroom/playroom.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");






var appRoutes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]
    },
    {
        path: 'game',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_0__["GameComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    },
    {
        path: 'game-multi',
        component: _game_multi_game_multi_component__WEBPACK_IMPORTED_MODULE_2__["GameMultiComponent"]
    },
    {
        path: 'playroom/:id',
        component: _playroom_playroom_component__WEBPACK_IMPORTED_MODULE_4__["PlayroomComponent"]
    },
    {
        path: '**',
        component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundPageComponent"]
    },
];


/***/ }),

/***/ "./src/app/services/my-first-service.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/my-first-service.service.ts ***!
  \******************************************************/
/*! exports provided: MyFirstServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFirstServiceService", function() { return MyFirstServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyFirstServiceService = /** @class */ (function () {
    function MyFirstServiceService(db) {
        this.db = db;
        this.blackJackData = this.getMyData();
        this.roomId = 0;
        this.myBotsId = [
            this.blackJackData.userId + 100000,
            this.blackJackData.userId + 200000,
            this.blackJackData.userId + 300000
        ];
    }
    MyFirstServiceService.prototype.getRoomData = function () {
        return this.db.list('rooms').valueChanges();
    };
    MyFirstServiceService.prototype.getThisRoomData = function (id) {
        return this.db.object('rooms/room' + id).valueChanges();
    };
    MyFirstServiceService.prototype.removePlayer = function (playerId, roomId) {
        this.db.object('/rooms/room' + roomId + ("/players/" + playerId)).remove();
    };
    MyFirstServiceService.prototype.updatePlayer = function (player, roomId) {
        this.db.object('/rooms/room' + roomId + ("/players/" + player.id)).update(player);
    };
    MyFirstServiceService.prototype.updateDeck = function (deck, roomId) {
        this.db.object('/rooms/room' + roomId + "/deck").set(deck);
    };
    MyFirstServiceService.prototype.scoreSum = function (player) {
        var sum = 0;
        player.cards.forEach(function (card) {
            sum += card.value;
        });
        return sum;
    };
    MyFirstServiceService.prototype.getMyData = function () {
        var blackJackData = JSON.parse(localStorage.getItem('blackJackData'));
        return blackJackData;
    };
    MyFirstServiceService.prototype.createDeck = function () {
        var newDeck = [];
        var suits = [
            { name: 'club', symbol: '♣' },
            { name: 'spade', symbol: '♠' },
            { name: 'diamond', symbol: '♦' },
            { name: 'heart', symbol: '♥' }
        ];
        var cards = [
            { name: '6', value: 6 },
            { name: '7', value: 7 },
            { name: '8', value: 8 },
            { name: '9', value: 9 },
            { name: '10', value: 10 },
            { name: 'J', value: 2 },
            { name: 'Q', value: 3 },
            { name: 'K', value: 4 },
            { name: 'A', value: 11 }
        ];
        suits.forEach(function (suit) {
            cards.forEach(function (card) {
                var newCardObj = {
                    name: card.name,
                    suit: suit.name,
                    symbol: suit.symbol,
                    value: card.value,
                    face: "../assets/img/" + suit.name + "_" + card.name + ".svg",
                    back: "../assets/img/back.png"
                };
                newDeck.push(newCardObj);
            });
        });
        return newDeck;
    };
    MyFirstServiceService.prototype.shuffleDeck = function (myDeck) {
        myDeck.forEach(function (card, i, deck) {
            var randomNumber = Math.floor(Math.random() * myDeck.length);
            var changeCard = card;
            deck[i] = deck[randomNumber];
            deck[randomNumber] = changeCard;
        });
        return myDeck;
    };
    MyFirstServiceService.prototype.evaluateWinner = function (players) {
        var winner = players.reduce(function (win, player) {
            if (player.score > win.score && player.score <= 21) {
                win = player;
            }
            return win;
        }, players[1]);
        return winner;
    };
    MyFirstServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], MyFirstServiceService);
    return MyFirstServiceService;
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
    production: false,
    firebase: {
        apiKey: 'AIzaSyDf0Z8gcvhgEf1UmxE0VvJWgzzyeS08urs',
        authDomain: 'fir-test-fc111.firebaseapp.com',
        databaseURL: 'https://fir-test-fc111.firebaseio.com',
        projectId: 'fir-test-fc111',
        storageBucket: 'fir-test-fc111.appspot.com',
        messagingSenderId: '672179703934'
    }
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

module.exports = __webpack_require__(/*! /home/user/MyJS/AngularProjects/blackJackRooms/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map