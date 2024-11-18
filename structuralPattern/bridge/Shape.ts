import { DrawingAPI } from './DrawingAPI';

export abstract class Shape {
    protected drawingAPI: DrawingAPI;

    protected constructor(drawingAPI: DrawingAPI) {
        this.drawingAPI = drawingAPI;
    }

    public abstract draw(): void;
}