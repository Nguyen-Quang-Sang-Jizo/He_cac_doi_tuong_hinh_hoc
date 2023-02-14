import {Shape} from "./shape";

export class Rectangle extends Shape {
    private width: number = 1;
    private height: number = 1;

    constructor(color: string, filled: boolean, width: number, height: number) {
        super(color, filled);
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width;
    }

    setWidth(value: number) {
        this.width = value;
    }

    getHeight(): number {
        return this.height;
    }

    setHeight(value: number) {
        this.height = value;
    }

    getArea(): number {
        return this.height * this.width;
    }

    getPerimeter(): number {
        return (this.height + this.width) * 2;
    }

    toString(): string {
        return "A Rectangle with width = " + this.getWidth() + "and length = " + this.getHeight() + ", which is a subclass of " + super.toString();
    }
}
