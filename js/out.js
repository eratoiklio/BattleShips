/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Coordinates = function Coordinates(x, y) {\n    _classCallCheck(this, Coordinates);\n\n    this.x = x;\n    this.y = y;\n};\n\nexports.default = Coordinates;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL19jb29yZGluYXRlcy5qcz8wMTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBDb29yZGluYXRlcyA9IGZ1bmN0aW9uIENvb3JkaW5hdGVzKHgsIHkpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29vcmRpbmF0ZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9fY29vcmRpbmF0ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _board = __webpack_require__(2);\n\nvar _board2 = _interopRequireDefault(_board);\n\nvar _boat = __webpack_require__(3);\n\nvar _boat2 = _interopRequireDefault(_boat);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n$(function () {\n\n    var tabOfBoats = [];\n    var board = new _board2.default(tabOfBoats);\n    $(\".boat\").each(function (index, element) {\n        var boat = new _boat2.default(element.id, board, 3);\n        tabOfBoats.push(boat);\n        // console.log(boat.id);\n        $(element).data(\"boat\", boat);\n    });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2FwcC5qcz9iZjFkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2JvYXJkID0gcmVxdWlyZShcIi4vX2JvYXJkLmpzXCIpO1xuXG52YXIgX2JvYXJkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JvYXJkKTtcblxudmFyIF9ib2F0ID0gcmVxdWlyZShcIi4vX2JvYXQuanNcIik7XG5cbnZhciBfYm9hdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ib2F0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuJChmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgdGFiT2ZCb2F0cyA9IFtdO1xuICAgIHZhciBib2FyZCA9IG5ldyBfYm9hcmQyLmRlZmF1bHQodGFiT2ZCb2F0cyk7XG4gICAgJChcIi5ib2F0XCIpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBib2F0ID0gbmV3IF9ib2F0Mi5kZWZhdWx0KGVsZW1lbnQuaWQsIGJvYXJkLCAzKTtcbiAgICAgICAgdGFiT2ZCb2F0cy5wdXNoKGJvYXQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhib2F0LmlkKTtcbiAgICAgICAgJChlbGVtZW50KS5kYXRhKFwiYm9hdFwiLCBib2F0KTtcbiAgICB9KTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // var boat = require(\"./_boat.js\")\n\n\nvar _coordinates = __webpack_require__(0);\n\nvar _coordinates2 = _interopRequireDefault(_coordinates);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Board = function () {\n    function Board(tabOfBoats) {\n        _classCallCheck(this, Board);\n\n        this.tabOfBoats = tabOfBoats;\n        var boardThis = this;\n\n        $(\"#board\").droppable({\n            drop: function drop(event, ui) {\n                var thisPos = $(ui.draggable).offset();\n                var boardPos = $(\"#board\").offset();\n                var x = thisPos.left - boardPos.left;\n                var y = thisPos.top - boardPos.top;\n                var isRotated = $(ui.draggable).hasClass(\"rotated\");\n                // console.log(\"x: \" + x + \" y: \" + y);\n                boardThis.snap(ui.draggable, x, y, isRotated);\n\n                var yIndex = parseInt($(ui.draggable).css(\"top\")) / 64; //128px/64\n                var xIndex = parseInt($(ui.draggable).css(\"left\")) / 64;\n                if (isRotated) {\n                    yIndex -= 1;\n                    xIndex += 1;\n                }\n                ui.draggable.data(\"boat\").setPosition(new _coordinates2.default(xIndex, yIndex));\n                //    console.log(ui.draggable.data(\"boat\"));\n            }\n\n        });\n    }\n\n    _createClass(Board, [{\n        key: \"shouldRevert\",\n        value: function shouldRevert(divBoat) {\n            // console.log($(divBoaut).css(\"top\"));\n            // console.log($(divBoaut).css(\"left\"));\n            // console.log($(divBoaut).hasClass(\"rotated\"));\n            // console.log($(divBoaut).data(\"boat\").id);\n            var dragBoat = $(divBoat).data(\"boat\");\n            // TODO: nie działa - zdebugować\n            var revert = false;\n            $(this.tabOfBoats).each(function (index, element) {\n                if (!(element.id == dragBoat.id)) {\n                    console.log(dragBoat);\n                    if (dragBoat.startPos.x + (dragBoat.isRotated ? 0 : dragBoat.mast) >= element.privateZone[0].x && element.privateZone[1].x >= dragBoat.startPos.x && dragBoat.startPos.y >= element.privateZone[0].y && element.privateZone[1].y >= dragBoat.startPos.y) {\n                        revert = true;\n                        return false;\n                    }\n                }\n            });\n            return revert;\n        }\n    }, {\n        key: \"snap\",\n        value: function snap(element, x, y, isRotated) {\n            var snapY = y - y % 64;\n            var snapX = x - x % 64;\n            if (isRotated) {\n                snapY += 64;\n                snapX -= 64;\n            }\n            $(element).css({ top: snapY, left: snapX });\n        }\n    }]);\n\n    return Board;\n}();\n\nexports.default = Board;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL19ib2FyZC5qcz8xNmY5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7IC8vIHZhciBib2F0ID0gcmVxdWlyZShcIi4vX2JvYXQuanNcIilcblxuXG52YXIgX2Nvb3JkaW5hdGVzID0gcmVxdWlyZShcIi4vX2Nvb3JkaW5hdGVzLmpzXCIpO1xuXG52YXIgX2Nvb3JkaW5hdGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nvb3JkaW5hdGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvYXJkKHRhYk9mQm9hdHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJvYXJkKTtcblxuICAgICAgICB0aGlzLnRhYk9mQm9hdHMgPSB0YWJPZkJvYXRzO1xuICAgICAgICB2YXIgYm9hcmRUaGlzID0gdGhpcztcblxuICAgICAgICAkKFwiI2JvYXJkXCIpLmRyb3BwYWJsZSh7XG4gICAgICAgICAgICBkcm9wOiBmdW5jdGlvbiBkcm9wKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzUG9zID0gJCh1aS5kcmFnZ2FibGUpLm9mZnNldCgpO1xuICAgICAgICAgICAgICAgIHZhciBib2FyZFBvcyA9ICQoXCIjYm9hcmRcIikub2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgdmFyIHggPSB0aGlzUG9zLmxlZnQgLSBib2FyZFBvcy5sZWZ0O1xuICAgICAgICAgICAgICAgIHZhciB5ID0gdGhpc1Bvcy50b3AgLSBib2FyZFBvcy50b3A7XG4gICAgICAgICAgICAgICAgdmFyIGlzUm90YXRlZCA9ICQodWkuZHJhZ2dhYmxlKS5oYXNDbGFzcyhcInJvdGF0ZWRcIik7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ4OiBcIiArIHggKyBcIiB5OiBcIiArIHkpO1xuICAgICAgICAgICAgICAgIGJvYXJkVGhpcy5zbmFwKHVpLmRyYWdnYWJsZSwgeCwgeSwgaXNSb3RhdGVkKTtcblxuICAgICAgICAgICAgICAgIHZhciB5SW5kZXggPSBwYXJzZUludCgkKHVpLmRyYWdnYWJsZSkuY3NzKFwidG9wXCIpKSAvIDY0OyAvLzEyOHB4LzY0XG4gICAgICAgICAgICAgICAgdmFyIHhJbmRleCA9IHBhcnNlSW50KCQodWkuZHJhZ2dhYmxlKS5jc3MoXCJsZWZ0XCIpKSAvIDY0O1xuICAgICAgICAgICAgICAgIGlmIChpc1JvdGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgeUluZGV4IC09IDE7XG4gICAgICAgICAgICAgICAgICAgIHhJbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1aS5kcmFnZ2FibGUuZGF0YShcImJvYXRcIikuc2V0UG9zaXRpb24obmV3IF9jb29yZGluYXRlczIuZGVmYXVsdCh4SW5kZXgsIHlJbmRleCkpO1xuICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKHVpLmRyYWdnYWJsZS5kYXRhKFwiYm9hdFwiKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJvYXJkLCBbe1xuICAgICAgICBrZXk6IFwic2hvdWxkUmV2ZXJ0XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRSZXZlcnQoZGl2Qm9hdCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJChkaXZCb2F1dCkuY3NzKFwidG9wXCIpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCQoZGl2Qm9hdXQpLmNzcyhcImxlZnRcIikpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJChkaXZCb2F1dCkuaGFzQ2xhc3MoXCJyb3RhdGVkXCIpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCQoZGl2Qm9hdXQpLmRhdGEoXCJib2F0XCIpLmlkKTtcbiAgICAgICAgICAgIHZhciBkcmFnQm9hdCA9ICQoZGl2Qm9hdCkuZGF0YShcImJvYXRcIik7XG4gICAgICAgICAgICAvLyBUT0RPOiBuaWUgZHppYcWCYSAtIHpkZWJ1Z293YcSHXG4gICAgICAgICAgICB2YXIgcmV2ZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAkKHRoaXMudGFiT2ZCb2F0cykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShlbGVtZW50LmlkID09IGRyYWdCb2F0LmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkcmFnQm9hdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkcmFnQm9hdC5zdGFydFBvcy54ICsgKGRyYWdCb2F0LmlzUm90YXRlZCA/IDAgOiBkcmFnQm9hdC5tYXN0KSA+PSBlbGVtZW50LnByaXZhdGVab25lWzBdLnggJiYgZWxlbWVudC5wcml2YXRlWm9uZVsxXS54ID49IGRyYWdCb2F0LnN0YXJ0UG9zLnggJiYgZHJhZ0JvYXQuc3RhcnRQb3MueSA+PSBlbGVtZW50LnByaXZhdGVab25lWzBdLnkgJiYgZWxlbWVudC5wcml2YXRlWm9uZVsxXS55ID49IGRyYWdCb2F0LnN0YXJ0UG9zLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXZlcnQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJzbmFwXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzbmFwKGVsZW1lbnQsIHgsIHksIGlzUm90YXRlZCkge1xuICAgICAgICAgICAgdmFyIHNuYXBZID0geSAtIHkgJSA2NDtcbiAgICAgICAgICAgIHZhciBzbmFwWCA9IHggLSB4ICUgNjQ7XG4gICAgICAgICAgICBpZiAoaXNSb3RhdGVkKSB7XG4gICAgICAgICAgICAgICAgc25hcFkgKz0gNjQ7XG4gICAgICAgICAgICAgICAgc25hcFggLT0gNjQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7IHRvcDogc25hcFksIGxlZnQ6IHNuYXBYIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJvYXJkO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCb2FyZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL19ib2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _coordinates = __webpack_require__(0);\n\nvar _coordinates2 = _interopRequireDefault(_coordinates);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Boat = function () {\n    function Boat(id, board, mast) {\n        _classCallCheck(this, Boat);\n\n        this.id = id;\n        this.board = board;\n        var tempThis = this;\n        this.mast = mast;\n        this.startPos = new _coordinates2.default(0, 0);\n        this.isRotated = $(\"#\" + this.id).hasClass(\"rotated\");\n        this.privateZone = [new _coordinates2.default(this.startPos.x - 1, this.startPos.y - 1), new _coordinates2.default(this.startPos.x + (this.isRotated ? 1 : this.mast), this.startPos.y + (this.isRotated ? this.mast : 1))];\n\n        $(\".boat\").draggable({ revert: function revert(dropped) {\n                return tempThis.board.shouldRevert(this);\n            } });\n        $(\".boat\").each(function (index, element) {\n            $(element).on(\"dblclick\", function () {\n                $(element).toggleClass(\"rotated\");\n            });\n        });\n    }\n\n    _createClass(Boat, [{\n        key: \"setPosition\",\n        value: function setPosition(cord) {\n            this.startPos = cord;\n            this.isRotated = $(\"#\" + this.id).hasClass(\"rotated\");\n            this.privateZone = [new _coordinates2.default(this.startPos.x - 1, this.startPos.y - 1), new _coordinates2.default(this.startPos.x + (this.isRotated ? 1 : this.mast), this.startPos.y + (this.isRotated ? this.mast : 1))];\n            // console.log(this.privateZone);\n        }\n    }]);\n\n    return Boat;\n}();\n\nexports.default = Boat;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL19ib2F0LmpzP2U0MjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jb29yZGluYXRlcyA9IHJlcXVpcmUoXCIuL19jb29yZGluYXRlcy5qc1wiKTtcblxudmFyIF9jb29yZGluYXRlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb29yZGluYXRlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBCb2F0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvYXQoaWQsIGJvYXJkLCBtYXN0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb2F0KTtcblxuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICAgICAgdmFyIHRlbXBUaGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5tYXN0ID0gbWFzdDtcbiAgICAgICAgdGhpcy5zdGFydFBvcyA9IG5ldyBfY29vcmRpbmF0ZXMyLmRlZmF1bHQoMCwgMCk7XG4gICAgICAgIHRoaXMuaXNSb3RhdGVkID0gJChcIiNcIiArIHRoaXMuaWQpLmhhc0NsYXNzKFwicm90YXRlZFwiKTtcbiAgICAgICAgdGhpcy5wcml2YXRlWm9uZSA9IFtuZXcgX2Nvb3JkaW5hdGVzMi5kZWZhdWx0KHRoaXMuc3RhcnRQb3MueCAtIDEsIHRoaXMuc3RhcnRQb3MueSAtIDEpLCBuZXcgX2Nvb3JkaW5hdGVzMi5kZWZhdWx0KHRoaXMuc3RhcnRQb3MueCArICh0aGlzLmlzUm90YXRlZCA/IDEgOiB0aGlzLm1hc3QpLCB0aGlzLnN0YXJ0UG9zLnkgKyAodGhpcy5pc1JvdGF0ZWQgPyB0aGlzLm1hc3QgOiAxKSldO1xuXG4gICAgICAgICQoXCIuYm9hdFwiKS5kcmFnZ2FibGUoeyByZXZlcnQ6IGZ1bmN0aW9uIHJldmVydChkcm9wcGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBUaGlzLmJvYXJkLnNob3VsZFJldmVydCh0aGlzKTtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICQoXCIuYm9hdFwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5vbihcImRibGNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnRvZ2dsZUNsYXNzKFwicm90YXRlZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQm9hdCwgW3tcbiAgICAgICAga2V5OiBcInNldFBvc2l0aW9uXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3NpdGlvbihjb3JkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0UG9zID0gY29yZDtcbiAgICAgICAgICAgIHRoaXMuaXNSb3RhdGVkID0gJChcIiNcIiArIHRoaXMuaWQpLmhhc0NsYXNzKFwicm90YXRlZFwiKTtcbiAgICAgICAgICAgIHRoaXMucHJpdmF0ZVpvbmUgPSBbbmV3IF9jb29yZGluYXRlczIuZGVmYXVsdCh0aGlzLnN0YXJ0UG9zLnggLSAxLCB0aGlzLnN0YXJ0UG9zLnkgLSAxKSwgbmV3IF9jb29yZGluYXRlczIuZGVmYXVsdCh0aGlzLnN0YXJ0UG9zLnggKyAodGhpcy5pc1JvdGF0ZWQgPyAxIDogdGhpcy5tYXN0KSwgdGhpcy5zdGFydFBvcy55ICsgKHRoaXMuaXNSb3RhdGVkID8gdGhpcy5tYXN0IDogMSkpXTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJpdmF0ZVpvbmUpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJvYXQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJvYXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9fYm9hdC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);