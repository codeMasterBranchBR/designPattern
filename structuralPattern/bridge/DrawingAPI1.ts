import { DrawingAPI } from './DrawingAPI';

export class DrawingAPI1 implements DrawingAPI {
    drawCircle(x: number, y: number, radius: number): void {
        console.log(`API1.circle at ${x}:${y} radius ${radius}`);
    }
}