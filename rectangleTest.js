"use strict";
exports.__esModule = true;
var Rectangle_1 = require("./Rectangle");
var rectangle = new Rectangle_1.Rectangle("lightblue", true, 2.5, 3.8);
console.table(rectangle);
console.table(rectangle.getArea());
console.table(rectangle.getPerimeter());
console.table(rectangle.toString());
