import { Shape } from './Shape';
import { DrawingAPI } from './DrawingAPI';

export class Circle extends Shape {
    private x: number;
    private y: number;
    private radius: number;

    constructor(x: number, y: number, radius: number, drawingAPI: DrawingAPI) {
        super(drawingAPI);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    public draw(): void {
        this.drawingAPI.drawCircle(this.x, this.y, this.radius);
    }
}