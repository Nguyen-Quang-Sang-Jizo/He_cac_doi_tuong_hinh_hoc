import {Rectangle} from "./Rectangle";


let rectangle: Rectangle = new Rectangle("lightblue", true, 2.5, 3.8);
console.table(rectangle);
console.table(rectangle.getArea());
console.table(rectangle.getPerimeter());
console.table(rectangle.toString());