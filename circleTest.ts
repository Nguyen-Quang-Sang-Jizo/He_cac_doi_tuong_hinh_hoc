import {Circle} from "./Circle";

let circle: Circle = new Circle(3.5, "indigo", false);
console.table(circle);
console.table(circle.getArea());
console.table(circle.getPerimeter());
console.table(circle.toString());