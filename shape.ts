export class Shape {
    private color: string = "lightblue";
    private filled: boolean = true;

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }

    setColor(color: string) {
        this.color = color;
    }

    getColor(): string {
        return this.color;
    }

    setFilled(boolean: boolean) {
        this.filled = boolean;
    }

    getFilled(): boolean {
        return this.filled;
    }

    toString(): string {
        return "A Shape with color of " + this.getColor() + " and " + (this.getFilled() ? "filled" : "not filled");
    }
}