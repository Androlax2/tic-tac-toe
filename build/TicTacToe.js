/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Board/Board.ts":
/*!****************************!*\
  !*** ./src/Board/Board.ts ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Cell_Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Cell/Cell */ "./src/Cell/Cell.ts");

var Board = (function () {
    function Board(size) {
        this._size = size;
        this._board = new Array(size);
        this.createCells();
    }
    Object.defineProperty(Board.prototype, "board", {
        get: function () {
            return this._board;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Board.prototype.getCells = function () {
        return this.board;
    };
    Board.prototype.getInactiveCells = function () {
        var inactiveCells = [];
        for (var i = 0; i < this.board.length; i++) {
            for (var j = 0; j < this.board[i].length; j++) {
                if (!this.board[i][j].isActive)
                    inactiveCells.push(this.board[i][j]);
            }
        }
        return inactiveCells;
    };
    Board.prototype.getActiveCells = function () {
        var activeCells = [];
        for (var i = 0; i < this.board.length; i++) {
            for (var j = 0; j < this.board[i].length; j++) {
                if (this.board[i][j].isActive)
                    activeCells.push(this.board[i][j]);
            }
        }
        return activeCells;
    };
    Board.prototype.getCell = function (col, row) {
        return this.board[col][row];
    };
    Board.prototype.createCells = function () {
        for (var i = 0; i < this._board.length; i++) {
            this._board[i] = new Array(this.size);
        }
        for (var i = 0; i < this.board.length; i++) {
            for (var j = 0; j < this.board[i].length; j++) {
                this.board[i][j] = new _Cell_Cell__WEBPACK_IMPORTED_MODULE_0__.default();
            }
        }
    };
    return Board;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);


/***/ }),

/***/ "./src/Cell/Cell.ts":
/*!**************************!*\
  !*** ./src/Cell/Cell.ts ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Exceptions_CellHaveOwnerException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Exceptions/CellHaveOwnerException */ "./src/Cell/Exceptions/CellHaveOwnerException.ts");

var Cell = (function () {
    function Cell() {
    }
    Object.defineProperty(Cell.prototype, "owner", {
        get: function () {
            if (!this._owner)
                return null;
            return this._owner;
        },
        set: function (owner) {
            if (this._owner)
                throw new _Exceptions_CellHaveOwnerException__WEBPACK_IMPORTED_MODULE_0__.default('Owner already exists.');
            this._owner = owner;
        },
        enumerable: false,
        configurable: true
    });
    return Cell;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell);


/***/ }),

/***/ "./src/Cell/Exceptions/CellHaveOwnerException.ts":
/*!*******************************************************!*\
  !*** ./src/Cell/Exceptions/CellHaveOwnerException.ts ***!
  \*******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CellHaveOwnerException
/* harmony export */ });
function CellHaveOwnerException(message) {
    this.message = message;
}


/***/ }),

/***/ "./src/Events/Dispatcher.ts":
/*!**********************************!*\
  !*** ./src/Events/Dispatcher.ts ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

var assertValidEventName = function (eventName) {
    if (!eventName || typeof eventName !== 'string') {
        throw new Error('Event name should be a valid non-empty string!');
    }
};
var assertValidHandler = function (handler) {
    if (typeof handler !== 'function') {
        throw new Error('Handler should be a function!');
    }
};
var assertAllowedEventName = function (allowedEvents, eventName) {
    if (allowedEvents && allowedEvents.indexOf(eventName) < 0) {
        throw new Error("Event \"" + eventName + "\" is not allowed!");
    }
};
var p = Object.freeze({
    allowedEvents: Symbol('allowedEvents'),
    listeners: Symbol('listeners')
});
var Dispatcher = (function () {
    function Dispatcher(allowedEvents) {
        if (typeof allowedEvents !== 'undefined' && !Array.isArray(allowedEvents)) {
            throw new Error('Allowed events should be a valid array of strings!');
        }
        this[p.listeners] = new Map();
        this[p.allowedEvents] = allowedEvents;
    }
    Dispatcher.prototype.on = function (eventName, handler) {
        assertValidEventName(eventName);
        assertAllowedEventName(this[p.allowedEvents], eventName);
        assertValidHandler(handler);
        var handlers = this[p.listeners].get(eventName);
        if (!handlers) {
            handlers = new Set();
            this[p.listeners].set(eventName, handlers);
        }
        handlers.add(handler);
    };
    Dispatcher.prototype.once = function (eventName, handler) {
        var _this = this;
        assertValidHandler(handler);
        var once = function (parameters) {
            _this.off(eventName, once);
            handler.call(_this, parameters);
        };
        this.on(eventName, once);
    };
    Dispatcher.prototype.off = function (eventName, handler) {
        assertValidEventName(eventName);
        assertAllowedEventName(this[p.allowedEvents], eventName);
        assertValidHandler(handler);
        var handlers = this[p.listeners].get(eventName);
        if (!handlers) {
            return;
        }
        handlers.delete(handler);
        if (!handlers.size) {
            this[p.listeners].delete(eventName);
        }
    };
    Dispatcher.prototype.offAll = function (eventName) {
        if (typeof eventName === 'undefined') {
            this[p.listeners].clear();
            return;
        }
        assertValidEventName(eventName);
        assertAllowedEventName(this[p.allowedEvents], eventName);
        var handlers = this[p.listeners].get(eventName);
        if (!handlers) {
            return;
        }
        handlers.clear();
        this[p.listeners].delete(eventName);
    };
    Dispatcher.prototype.emit = function (eventName, parameters) {
        var _this = this;
        assertValidEventName(eventName);
        assertAllowedEventName(this[p.allowedEvents], eventName);
        var handlers = this[p.listeners].get(eventName);
        if (!handlers) {
            return;
        }
        handlers.forEach(function (handler) {
            try {
                handler.call(_this, parameters);
            }
            catch (error) {
                console.error(error);
            }
        });
    };
    Dispatcher.prototype.hasListeners = function (eventName) {
        assertValidEventName(eventName);
        assertAllowedEventName(this[p.allowedEvents], eventName);
        return this[p.listeners].has(eventName);
    };
    return Dispatcher;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dispatcher);


/***/ }),

/***/ "./src/Players/Player.ts":
/*!*******************************!*\
  !*** ./src/Players/Player.ts ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var Player = (function () {
    function Player(name, token) {
        this._active = false;
        this._name = name;
        this._token = token;
    }
    Object.defineProperty(Player.prototype, "token", {
        get: function () {
            return this._token;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "isActive", {
        get: function () {
            return this._active;
        },
        set: function (isActive) {
            this._active = isActive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "isComputer", {
        get: function () {
            return this._isComputer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/Players/Players.ts":
/*!********************************!*\
  !*** ./src/Players/Players.ts ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var Players = (function () {
    function Players() {
        this._players = [];
    }
    Object.defineProperty(Players.prototype, "players", {
        get: function () {
            return this._players;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Players.prototype, "all", {
        get: function () {
            return this.players;
        },
        enumerable: false,
        configurable: true
    });
    Players.prototype.get = function (index) {
        return this.players[index];
    };
    Players.prototype.length = function () {
        return this.players.length;
    };
    Players.prototype.getIndexOf = function (player) {
        return this.players.findIndex(function (playerArray) { return playerArray === player; });
    };
    Players.prototype.add = function (player) {
        if (this.tokenExists(player.token))
            throw new Error("The token " + player.token + " already exists in our players collection.");
        this.players.push(player);
    };
    Players.prototype.shuffle = function () {
        this.players.sort(function () { return 0.5 - Math.random(); });
    };
    Players.prototype.getActive = function () {
        var activePlayer = this.players.filter(function (player) { return player.isActive; });
        if (!activePlayer)
            return null;
        return activePlayer[0];
    };
    Players.prototype.tokenExists = function (token) {
        return this.players.filter(function (player) { return player.token === token; }).length !== 0;
    };
    return Players;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Players);


/***/ }),

/***/ "./src/Players/Types/Human.ts":
/*!************************************!*\
  !*** ./src/Players/Types/Human.ts ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Player */ "./src/Players/Player.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Human = (function (_super) {
    __extends(Human, _super);
    function Human() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isComputer = false;
        return _this;
    }
    return Human;
}(_Player__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Human);


/***/ }),

/***/ "./src/TicTacToe.ts":
/*!**************************!*\
  !*** ./src/TicTacToe.ts ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Board_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board/Board */ "./src/Board/Board.ts");
/* harmony import */ var _Players_Types_Human__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Players/Types/Human */ "./src/Players/Types/Human.ts");
/* harmony import */ var _Players_Players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Players/Players */ "./src/Players/Players.ts");
/* harmony import */ var _Events_Dispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Events/Dispatcher */ "./src/Events/Dispatcher.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var TicTacToe = (function (_super) {
    __extends(TicTacToe, _super);
    function TicTacToe(board, players) {
        var _this = _super.call(this, ['boardUpdated']) || this;
        _this._isOver = false;
        _this._board = board;
        _this._players = new _Players_Players__WEBPACK_IMPORTED_MODULE_2__.default();
        _this._turn = 0;
        players.forEach(function (player) { return _this.players.add(player); });
        _this.players.shuffle();
        return _this;
    }
    Object.defineProperty(TicTacToe.prototype, "board", {
        get: function () {
            return this._board;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TicTacToe.prototype, "isFirstTurn", {
        get: function () {
            return this._turn === 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TicTacToe.prototype, "turn", {
        get: function () {
            return this._turn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TicTacToe.prototype, "isOver", {
        get: function () {
            return this._isOver;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TicTacToe.prototype, "winner", {
        get: function () {
            return this._winner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TicTacToe.prototype, "players", {
        get: function () {
            return this._players;
        },
        enumerable: false,
        configurable: true
    });
    TicTacToe.prototype.startGame = function () {
        if (this.isFirstTurn)
            this.players.get(0).isActive = true;
    };
    TicTacToe.prototype.play = function (col, row) {
        var cellIsActive = this.board.getCell(col, row).owner;
        if (cellIsActive)
            return;
        var activePlayer = this.getActivePlayer();
        this._turn++;
        this.board.getCell(col, row).owner = activePlayer;
        this.switchPlayer();
        this.emit('boardUpdated', {
            col: col,
            row: row
        });
        if (this.canBeOver()) {
            console.log('ok');
        }
    };
    TicTacToe.prototype.getActivePlayer = function () {
        return this.players.getActive();
    };
    TicTacToe.prototype.isDraw = function () {
    };
    TicTacToe.prototype.haveWinner = function () {
    };
    TicTacToe.prototype.switchPlayer = function () {
        var activePlayer = this.getActivePlayer();
        activePlayer.isActive = false;
        var playerIndex = this.players.getIndexOf(activePlayer);
        if (playerIndex === (this.players.length() - 1)) {
            playerIndex = 0;
        }
        else {
            playerIndex++;
        }
        this.players.get(playerIndex).isActive = true;
    };
    TicTacToe.prototype.canBeOver = function () {
        return this.turn >= 3;
    };
    TicTacToe.prototype.reset = function () {
    };
    return TicTacToe;
}(_Events_Dispatcher__WEBPACK_IMPORTED_MODULE_3__.default));
window.TicTacToe = TicTacToe;
window.Board = _Board_Board__WEBPACK_IMPORTED_MODULE_0__.default;
window.Human = _Players_Types_Human__WEBPACK_IMPORTED_MODULE_1__.default;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/TicTacToe.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UaWNUYWNUb2UvLi9zcmMvQm9hcmQvQm9hcmQudHMiLCJ3ZWJwYWNrOi8vVGljVGFjVG9lLy4vc3JjL0NlbGwvQ2VsbC50cyIsIndlYnBhY2s6Ly9UaWNUYWNUb2UvLi9zcmMvQ2VsbC9FeGNlcHRpb25zL0NlbGxIYXZlT3duZXJFeGNlcHRpb24udHMiLCJ3ZWJwYWNrOi8vVGljVGFjVG9lLy4vc3JjL0V2ZW50cy9EaXNwYXRjaGVyLnRzIiwid2VicGFjazovL1RpY1RhY1RvZS8uL3NyYy9QbGF5ZXJzL1BsYXllci50cyIsIndlYnBhY2s6Ly9UaWNUYWNUb2UvLi9zcmMvUGxheWVycy9QbGF5ZXJzLnRzIiwid2VicGFjazovL1RpY1RhY1RvZS8uL3NyYy9QbGF5ZXJzL1R5cGVzL0h1bWFuLnRzIiwid2VicGFjazovL1RpY1RhY1RvZS8uL3NyYy9UaWNUYWNUb2UudHMiLCJ3ZWJwYWNrOi8vVGljVGFjVG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RpY1RhY1RvZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVGljVGFjVG9lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVGljVGFjVG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVGljVGFjVG9lL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBS2hDO0lBZ0JJLGVBQVksSUFBWTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBS0Qsc0JBQVcsd0JBQUs7YUFB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QUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM3QyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO2FBQU07WUFDSCxXQUFXLEVBQUUsQ0FBQztTQUNqQjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQU9PLDZCQUFTLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU8seUJBQUssR0FBYjtJQUVBLENBQUM7SUFFTCxnQkFBQztBQUFELENBQUMsQ0FwTHVCLHVEQUFVLEdBb0xqQztBQUVBLE1BQWMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQ3JDLE1BQWMsQ0FBQyxLQUFLLEdBQUcsaURBQUssQ0FBQztBQUM3QixNQUFjLENBQUMsS0FBSyxHQUFHLHlEQUFLLENBQUM7Ozs7Ozs7VUNqTTlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJUaWNUYWNUb2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2VsbCBmcm9tIFwiLi4vQ2VsbC9DZWxsXCI7XG5cbi8qKlxuICogTWFuYWdlIHRoZSBib2FyZCBvZiB0aGUgZ2FtZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCB7XG5cbiAgICAvKipcbiAgICAgKiBPdXIgYm9hcmRcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYm9hcmQ6IGFueVtdO1xuXG4gICAgLyoqXG4gICAgICogU2l6ZSBvZiBvdXIgYm9hcmRcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc2l6ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NpemUgPSBzaXplO1xuICAgICAgICB0aGlzLl9ib2FyZCA9IG5ldyBBcnJheShzaXplKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDZWxscygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBvdXIgYm9hcmRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGJvYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm9hcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNpemUgb2Ygb3VyIGJvYXJkXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0IHNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG91ciBjZWxsc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDZWxscygpOiBDZWxsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgaW5hY3RpdmUgY2VsbHNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0SW5hY3RpdmVDZWxscygpOiBDZWxsW10ge1xuICAgICAgICBsZXQgaW5hY3RpdmVDZWxscyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJvYXJkW2ldW2pdLmlzQWN0aXZlKSBpbmFjdGl2ZUNlbGxzLnB1c2godGhpcy5ib2FyZFtpXVtqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5hY3RpdmVDZWxscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWN0aXZlIGNlbGxzXG4gICAgICovXG4gICAgcHVibGljIGdldEFjdGl2ZUNlbGxzKCk6IENlbGxbXSB7XG4gICAgICAgIGxldCBhY3RpdmVDZWxscyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0uaXNBY3RpdmUpIGFjdGl2ZUNlbGxzLnB1c2godGhpcy5ib2FyZFtpXVtqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aXZlQ2VsbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBDZWxsIGF0IGEgY2VydGFpbiBwb3NpdGlvbiBpbiB0aGUgYm9hcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb2xcbiAgICAgKiBAcGFyYW0gcm93XG4gICAgICovXG4gICAgcHVibGljIGdldENlbGwoY29sOiBudW1iZXIsIHJvdzogbnVtYmVyKTogQ2VsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2NvbF1bcm93XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgY2VsbHNcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVDZWxscygpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fYm9hcmRbaV0gPSBuZXcgQXJyYXkodGhpcy5zaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IG5ldyBDZWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJzL1BsYXllclwiO1xuaW1wb3J0IENlbGxIYXZlT3duZXJFeGNlcHRpb24gZnJvbSBcIi4vRXhjZXB0aW9ucy9DZWxsSGF2ZU93bmVyRXhjZXB0aW9uXCI7XG5cbi8qKlxuICogTWFuYWdlIGEgY2VsbCBpbiB0aGUgZ2FtZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIHtcblxuICAgIC8qKlxuICAgICAqIE93bmVyIG9mIHRoZSBjZWxsXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX293bmVyOiBQbGF5ZXI7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG93bmVyXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgb3duZXIoKTogUGxheWVyIHwgbnVsbCB7XG4gICAgICAgIGlmICghdGhpcy5fb3duZXIpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5fb3duZXI7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZXQgYW4gb3duZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvd25lclxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHVibGljIHNldCBvd25lcihvd25lcjogUGxheWVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9vd25lcikgdGhyb3cgbmV3IENlbGxIYXZlT3duZXJFeGNlcHRpb24oJ093bmVyIGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgICB0aGlzLl9vd25lciA9IG93bmVyO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbGxIYXZlT3duZXJFeGNlcHRpb24obWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhc3NlcnRWYWxpZEV2ZW50TmFtZSA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICBpZiAoIWV2ZW50TmFtZSB8fCB0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V2ZW50IG5hbWUgc2hvdWxkIGJlIGEgdmFsaWQgbm9uLWVtcHR5IHN0cmluZyEnKTtcbiAgICB9XG59O1xuXG5jb25zdCBhc3NlcnRWYWxpZEhhbmRsZXIgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhbmRsZXIgc2hvdWxkIGJlIGEgZnVuY3Rpb24hJyk7XG4gICAgfVxufTtcblxuY29uc3QgYXNzZXJ0QWxsb3dlZEV2ZW50TmFtZSA9IGZ1bmN0aW9uIChhbGxvd2VkRXZlbnRzLCBldmVudE5hbWUpIHtcbiAgICBpZiAoYWxsb3dlZEV2ZW50cyAmJiBhbGxvd2VkRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFdmVudCBcIiR7ZXZlbnROYW1lfVwiIGlzIG5vdCBhbGxvd2VkIWApO1xuICAgIH1cbn07XG5cbmNvbnN0IHAgPSBPYmplY3QuZnJlZXplKHtcbiAgICBhbGxvd2VkRXZlbnRzOiBTeW1ib2woJ2FsbG93ZWRFdmVudHMnKSxcbiAgICBsaXN0ZW5lcnM6IFN5bWJvbCgnbGlzdGVuZXJzJylcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEaXNwYXRjaGVyIHtcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoYWxsb3dlZEV2ZW50cykge1xuICAgICAgICBpZiAodHlwZW9mIGFsbG93ZWRFdmVudHMgIT09ICd1bmRlZmluZWQnICYmICFBcnJheS5pc0FycmF5KGFsbG93ZWRFdmVudHMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FsbG93ZWQgZXZlbnRzIHNob3VsZCBiZSBhIHZhbGlkIGFycmF5IG9mIHN0cmluZ3MhJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzW3AubGlzdGVuZXJzXSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpc1twLmFsbG93ZWRFdmVudHNdID0gYWxsb3dlZEV2ZW50cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgbGlzdGVuZXIgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgb25jZSBldmVudCBvY2N1cnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIE5hbWUgb2YgdGhlIGV2ZW50IHRvIGxpc3RlbiBmb3IuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciBIYW5kbGVyIHRvIGJlIGV4ZWN1dGVkIG9uY2UgZXZlbnQgb2NjdXJzLlxuICAgICAqL1xuICAgIG9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgICBhc3NlcnRWYWxpZEV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICBhc3NlcnRBbGxvd2VkRXZlbnROYW1lKHRoaXNbcC5hbGxvd2VkRXZlbnRzXSwgZXZlbnROYW1lKTtcbiAgICAgICAgYXNzZXJ0VmFsaWRIYW5kbGVyKGhhbmRsZXIpO1xuXG4gICAgICAgIGxldCBoYW5kbGVycyA9IHRoaXNbcC5saXN0ZW5lcnNdLmdldChldmVudE5hbWUpO1xuICAgICAgICBpZiAoIWhhbmRsZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIHRoaXNbcC5saXN0ZW5lcnNdLnNldChldmVudE5hbWUsIGhhbmRsZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldC5hZGQgaWdub3JlcyBoYW5kbGVyIGlmIGl0IGhhcyBiZWVuIGFscmVhZHkgcmVnaXN0ZXJlZC5cbiAgICAgICAgaGFuZGxlcnMuYWRkKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBsaXN0ZW5lciBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBvbmx5IGZpcnN0IHRpbWUgd2hlbiBldmVudFxuICAgICAqIG9jY3Vycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgTmFtZSBvZiB0aGUgZXZlbnQgdG8gbGlzdGVuIGZvci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIEhhbmRsZXIgdG8gYmUgZXhlY3V0ZWQgb25jZSBldmVudCBvY2N1cnMuXG4gICAgICovXG4gICAgb25jZShldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgYXNzZXJ0VmFsaWRIYW5kbGVyKGhhbmRsZXIpO1xuXG4gICAgICAgIGNvbnN0IG9uY2UgPSAocGFyYW1ldGVycykgPT4ge1xuICAgICAgICAgICAgdGhpcy5vZmYoZXZlbnROYW1lLCBvbmNlKTtcblxuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBvbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHJlZ2lzdGVyZWQgbGlzdGVuZXIgZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIE5hbWUgb2YgdGhlIGV2ZW50IHRvIHJlbW92ZSBsaXN0ZW5lciBmb3IuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciBIYW5kbGVyIHRvIHJlbW92ZSwgc28gaXQgd29uJ3QgYmUgZXhlY3V0ZWRcbiAgICAgKiBuZXh0IHRpbWUgZXZlbnQgb2NjdXJzLlxuICAgICAqL1xuICAgIG9mZihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgYXNzZXJ0VmFsaWRFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgICAgYXNzZXJ0QWxsb3dlZEV2ZW50TmFtZSh0aGlzW3AuYWxsb3dlZEV2ZW50c10sIGV2ZW50TmFtZSk7XG4gICAgICAgIGFzc2VydFZhbGlkSGFuZGxlcihoYW5kbGVyKTtcblxuICAgICAgICBjb25zdCBoYW5kbGVycyA9IHRoaXNbcC5saXN0ZW5lcnNdLmdldChldmVudE5hbWUpO1xuICAgICAgICBpZiAoIWhhbmRsZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBoYW5kbGVycy5kZWxldGUoaGFuZGxlcik7XG5cbiAgICAgICAgaWYgKCFoYW5kbGVycy5zaXplKSB7XG4gICAgICAgICAgICB0aGlzW3AubGlzdGVuZXJzXS5kZWxldGUoZXZlbnROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIHJlZ2lzdGVyZWQgbGlzdGVuZXJzIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmc9fSBldmVudE5hbWUgTmFtZSBvZiB0aGUgZXZlbnQgdG8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yLlxuICAgICAqL1xuICAgIG9mZkFsbChldmVudE5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudE5hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzW3AubGlzdGVuZXJzXS5jbGVhcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXNzZXJ0VmFsaWRFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgICAgYXNzZXJ0QWxsb3dlZEV2ZW50TmFtZSh0aGlzW3AuYWxsb3dlZEV2ZW50c10sIGV2ZW50TmFtZSk7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzW3AubGlzdGVuZXJzXS5nZXQoZXZlbnROYW1lKTtcbiAgICAgICAgaWYgKCFoYW5kbGVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFuZGxlcnMuY2xlYXIoKTtcblxuICAgICAgICB0aGlzW3AubGlzdGVuZXJzXS5kZWxldGUoZXZlbnROYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBzcGVjaWZpZWQgZXZlbnQgc28gdGhhdCBhbGwgcmVnaXN0ZXJlZCBoYW5kbGVycyB3aWxsIGJlIGNhbGxlZFxuICAgICAqIHdpdGggdGhlIHNwZWNpZmllZCBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBOYW1lIG9mIHRoZSBldmVudCB0byBjYWxsIGhhbmRsZXJzIGZvci5cbiAgICAgKiBAcGFyYW0ge09iamVjdD19IHBhcmFtZXRlcnMgT3B0aW9uYWwgcGFyYW1ldGVycyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvXG4gICAgICogZXZlcnkgcmVnaXN0ZXJlZCBoYW5kbGVyLlxuICAgICAqL1xuICAgIGVtaXQoZXZlbnROYW1lLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgIGFzc2VydFZhbGlkRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgIGFzc2VydEFsbG93ZWRFdmVudE5hbWUodGhpc1twLmFsbG93ZWRFdmVudHNdLCBldmVudE5hbWUpO1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpc1twLmxpc3RlbmVyc10uZ2V0KGV2ZW50TmFtZSk7XG4gICAgICAgIGlmICghaGFuZGxlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZXJlIGFyZSBhbnkgbGlzdGVuZXJzIHRoYXQgbGlzdGVuIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBOYW1lIG9mIHRoZSBldmVudCB0byBjaGVjayBsaXN0ZW5lcnMgZm9yLlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGhhc0xpc3RlbmVycyhldmVudE5hbWUpIHtcbiAgICAgICAgYXNzZXJ0VmFsaWRFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgICAgYXNzZXJ0QWxsb3dlZEV2ZW50TmFtZSh0aGlzW3AuYWxsb3dlZEV2ZW50c10sIGV2ZW50TmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXNbcC5saXN0ZW5lcnNdLmhhcyhldmVudE5hbWUpO1xuICAgIH1cbn0iLCIvKipcbiAqIFBsYXllciByZWZlcmVuY2UgdG8gYSBwbGF5ZXIgKENvbXB1dGVyIG9yIEh1bWFuKVxuICovXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBQbGF5ZXIge1xuXG4gICAgLyoqXG4gICAgICogSXMgdGhlIHBsYXllciBhIGNvbXB1dGVyID9cbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2lzQ29tcHV0ZXI6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBOYW1lIG9mIHRoZSBwbGF5ZXJcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogSXMgYWN0aXZlXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVG9rZW4gb2YgdGhlIHBsYXllclxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlYWRvbmx5IF90b2tlbjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgcGxheWVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSB0b2tlblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdG9rZW46IHN0cmluZykge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fdG9rZW4gPSB0b2tlbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgVG9rZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHRva2VuKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b2tlbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyB0aGUgcGxheWVyIGFjdGl2ZSA/XG4gICAgICovXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHBsYXllciB0byBhY3RpdmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpc0FjdGl2ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgaXNBY3RpdmUoaXNBY3RpdmU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxheWVyIGlzIGEgY29tcHV0ZXIgP1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNDb21wdXRlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ29tcHV0ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcblxuLyoqXG4gKiBQbGF5ZXJzIHdpbGwgbWFuYWdlIGNvbGxlY3Rpb24gb2YgcGxheWVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllcnMge1xuXG4gICAgLyoqXG4gICAgICogUGxheWVyc1xuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9wbGF5ZXJzOiBQbGF5ZXJbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wbGF5ZXJzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG91ciBwbGF5ZXJzXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcGxheWVycygpOiBQbGF5ZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgcGxheWVyc1xuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldCBhbGwoKTogUGxheWVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIHBsYXllclxuICAgICAqXG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICovXG4gICAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogUGxheWVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc1tpbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGxlbmd0aCBvZiBvdXIgYXJyYXlcbiAgICAgKi9cbiAgICBwdWJsaWMgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcnMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBpbmRleCBvZiBvdXIgcGxheWVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGxheWVyXG4gICAgICovXG4gICAgcHVibGljIGdldEluZGV4T2YocGxheWVyOiBQbGF5ZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzLmZpbmRJbmRleChwbGF5ZXJBcnJheSA9PiBwbGF5ZXJBcnJheSA9PT0gcGxheWVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBwbGF5ZXIgaW4gb3VyIHBsYXllcnMgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHBsYXllciB0aGUgcGxheWVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkKHBsYXllcjogUGxheWVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRva2VuRXhpc3RzKHBsYXllci50b2tlbikpIHRocm93IG5ldyBFcnJvcihgVGhlIHRva2VuICR7cGxheWVyLnRva2VufSBhbHJlYWR5IGV4aXN0cyBpbiBvdXIgcGxheWVycyBjb2xsZWN0aW9uLmApO1xuICAgICAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNodWZmbGUgb3VyIGFycmF5XG4gICAgICovXG4gICAgcHVibGljIHNodWZmbGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheWVycy5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhY3RpdmUgcGxheWVyXG4gICAgICovXG4gICAgcHVibGljIGdldEFjdGl2ZSgpOiBQbGF5ZXIgfCBudWxsIHtcbiAgICAgICAgY29uc3QgYWN0aXZlUGxheWVyID0gdGhpcy5wbGF5ZXJzLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLmlzQWN0aXZlKTtcbiAgICAgICAgaWYgKCFhY3RpdmVQbGF5ZXIpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gYWN0aXZlUGxheWVyWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcmlmeSBpZiB0aGUgdG9rZW4gYWxyZWFkeSBleGlzdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbiB0byB2ZXJpZnlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgdG9rZW5FeGlzdHModG9rZW46IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLnRva2VuID09PSB0b2tlbikubGVuZ3RoICE9PSAwO1xuICAgIH1cblxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL1BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdW1hbiBleHRlbmRzIFBsYXllciB7XG5cbiAgICAvKipcbiAgICAgKiBJcyBub3QgYSBjb21wdXRlclxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfaXNDb21wdXRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG59IiwiaW1wb3J0IEJvYXJkIGZyb20gXCIuL0JvYXJkL0JvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllcnMvUGxheWVyXCI7XG5pbXBvcnQgSHVtYW4gZnJvbSBcIi4vUGxheWVycy9UeXBlcy9IdW1hblwiO1xuaW1wb3J0IFBsYXllcnMgZnJvbSBcIi4vUGxheWVycy9QbGF5ZXJzXCI7XG5pbXBvcnQgRGlzcGF0Y2hlciBmcm9tIFwiLi9FdmVudHMvRGlzcGF0Y2hlclwiO1xuXG4vKipcbiAqIE1hbmFnZSB0aGUgZ2FtZVxuICovXG5jbGFzcyBUaWNUYWNUb2UgZXh0ZW5kcyBEaXNwYXRjaGVyIHtcblxuICAgIC8qKlxuICAgICAqIFBsYXllcnMgb2Ygb3VyIGdhbWVcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcGxheWVyczogUGxheWVycztcblxuICAgIC8qKlxuICAgICAqIEJvYXJkIG9mIHRoZSBnYW1lXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2JvYXJkOiBCb2FyZDtcblxuICAgIC8qKlxuICAgICAqIEdhbWUgaXMgb3ZlciA/XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2lzT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIHR1cm4gaW4gdGhlIGdhbWVcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdHVybjogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogV2lubmVyIG9mIHRoZSBnYW1lXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX3dpbm5lcjogUGxheWVyIHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEluaXQgdGhlIHRpYyB0YWMgdG9lIGdhbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBib2FyZFxuICAgICAqIEBwYXJhbSBwbGF5ZXJzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYm9hcmQ6IEJvYXJkLCBwbGF5ZXJzOiBQbGF5ZXJbXSkge1xuICAgICAgICBzdXBlcihbJ2JvYXJkVXBkYXRlZCddKTtcbiAgICAgICAgdGhpcy5fYm9hcmQgPSBib2FyZDtcbiAgICAgICAgdGhpcy5fcGxheWVycyA9IG5ldyBQbGF5ZXJzKCk7XG4gICAgICAgIHRoaXMuX3R1cm4gPSAwO1xuXG4gICAgICAgIHBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4gdGhpcy5wbGF5ZXJzLmFkZChwbGF5ZXIpKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzLnNodWZmbGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgb3VyIGJvYXJkXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYm9hcmQoKTogQm9hcmQge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm9hcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgZmlyc3QgdHVyblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNGaXJzdFR1cm4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl90dXJuID09PSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdHVyblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdHVybigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyB0aGUgZ2FtZSBvdmVyXG4gICAgICovXG4gICAgcHVibGljIGdldCBpc092ZXIoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc092ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB3aW5uZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHdpbm5lcigpOiBQbGF5ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2lubmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBvdXIgcGxheWVyc1xuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldCBwbGF5ZXJzKCk6IFBsYXllcnMge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBvdXIgZ2FtZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGFydEdhbWUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3RUdXJuKSB0aGlzLnBsYXllcnMuZ2V0KDApLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGF5IGF0IGEgY2VsbFxuICAgICAqIFJldHVybiBmYWxzZSBpZiB0aGUgY2VsbCBpcyBhY3RpdmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb2xcbiAgICAgKiBAcGFyYW0gcm93XG4gICAgICovXG4gICAgcHVibGljIHBsYXkoY29sOiBudW1iZXIsIHJvdzogbnVtYmVyKTogZmFsc2UgfCB2b2lkIHtcbiAgICAgICAgY29uc3QgY2VsbElzQWN0aXZlID0gdGhpcy5ib2FyZC5nZXRDZWxsKGNvbCwgcm93KS5vd25lcjtcbiAgICAgICAgaWYgKGNlbGxJc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGFjdGl2ZVBsYXllciA9IHRoaXMuZ2V0QWN0aXZlUGxheWVyKCk7XG4gICAgICAgIHRoaXMuX3R1cm4rKztcblxuICAgICAgICB0aGlzLmJvYXJkLmdldENlbGwoY29sLCByb3cpLm93bmVyID0gYWN0aXZlUGxheWVyO1xuICAgICAgICB0aGlzLnN3aXRjaFBsYXllcigpO1xuICAgICAgICB0aGlzLmVtaXQoJ2JvYXJkVXBkYXRlZCcsIHtcbiAgICAgICAgICAgIGNvbCxcbiAgICAgICAgICAgIHJvd1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jYW5CZU92ZXIoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ29rJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWN0aXZlIHBsYXllclxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEFjdGl2ZVBsYXllcigpOiBQbGF5ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzLmdldEFjdGl2ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNEcmF3KCk6IGJvb2xlYW4ge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYXZlV2lubmVyKCk6IGJvb2xlYW4ge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3dpdGNoIHBsYXllclxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHN3aXRjaFBsYXllcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYWN0aXZlUGxheWVyOiBQbGF5ZXIgPSB0aGlzLmdldEFjdGl2ZVBsYXllcigpO1xuICAgICAgICBhY3RpdmVQbGF5ZXIuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBsZXQgcGxheWVySW5kZXg6IG51bWJlciA9IHRoaXMucGxheWVycy5nZXRJbmRleE9mKGFjdGl2ZVBsYXllcik7XG4gICAgICAgIGlmIChwbGF5ZXJJbmRleCA9PT0gKHRoaXMucGxheWVycy5sZW5ndGgoKSAtIDEpKSB7XG4gICAgICAgICAgICBwbGF5ZXJJbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwbGF5ZXJJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheWVycy5nZXQocGxheWVySW5kZXgpLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ2FtZSBjb3VsZCBiZSBmaW5pc2hlZFxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGNhbkJlT3ZlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHVybiA+PSAzO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXQoKTogdm9pZCB7XG5cbiAgICB9XG5cbn1cblxuKHdpbmRvdyBhcyBhbnkpLlRpY1RhY1RvZSA9IFRpY1RhY1RvZTtcbih3aW5kb3cgYXMgYW55KS5Cb2FyZCA9IEJvYXJkO1xuKHdpbmRvdyBhcyBhbnkpLkh1bWFuID0gSHVtYW47IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvVGljVGFjVG9lLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==