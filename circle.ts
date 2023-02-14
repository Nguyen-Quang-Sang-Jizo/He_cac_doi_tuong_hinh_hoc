import {Shape} from "./shape";

export class Circle extends Shape {
    private radius: number = 1;

    constructor(radius: number, color: string, filled: boolean ) {
        super(color, filled);
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(value: number) {
        this.radius = value;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }

    getPerimeter() {
        return this.radius * 2 * Math.PI;
    }

    toString(): string {
        return "A Circle with radius = " + this.getRadius() + " which is a subclass of " + super.toString();
    }
}