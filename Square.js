"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Square = void 0;
var rectangle_1 = require("./rectangle");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, filled, size) {
        return _super.call(this, color, filled, size, size) || this;
    }
    Square.prototype.getSide = function () {
        return this.getWidth();
    };
    Square.prototype.setSide = function (side) {
        this.setWidth(side);
        this.setLength(side);
    };
    Square.prototype.setWidth = function (width) {
        this.setSide(width);
    };
    Square.prototype.setLength = function (length) {
        this.setSide(length);
    };
    Square.prototype.toString = function () {
        return "A Square with side=" + this.getSide() + ", which is a subclass of " + _super.prototype.toString.call(this);
    };
    return Square;
}(rectangle_1.Rectangle));
exports.Square = Square;
