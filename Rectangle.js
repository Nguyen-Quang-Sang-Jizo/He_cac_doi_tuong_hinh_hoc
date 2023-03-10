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
exports.Rectangle = void 0;
var shape_1 = require("./shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, filled, width, height) {
        var _this = _super.call(this, color, filled) || this;
        _this.width = 1;
        _this.height = 1;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setWidth = function (value) {
        this.width = value;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.setHeight = function (value) {
        this.height = value;
    };
    Rectangle.prototype.getArea = function () {
        return this.height * this.width;
    };
    Rectangle.prototype.getPerimeter = function () {
        return (this.height + this.width) * 2;
    };
    Rectangle.prototype.toString = function () {
        return "A Rectangle with width =" + this.getWidth() + "and length = " + this.getHeight() + ", which is a subclass of " + _super.prototype.toString.call(this);
    };
    return Rectangle;
}(shape_1.Shape));
exports.Rectangle = Rectangle;
