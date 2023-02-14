"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = "lightblue";
        this.filled = true;
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setFilled = function (boolean) {
        this.filled = boolean;
    };
    Shape.prototype.getFilled = function () {
        return this.filled;
    };
    Shape.prototype.toString = function () {
        return "A Shape with color of " + this.getColor() + " and " + (this.getFilled() ? "filled" : "not filled");
    };
    return Shape;
}());
exports.Shape = Shape;
