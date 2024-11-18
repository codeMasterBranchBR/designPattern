import { DrawingAPI } from './DrawingAPI';

export class DrawingAPI2 implements DrawingAPI {
    drawCircle(x: number, y: number, radius: number): void {
        console.log(`API2.circle at ${x}:${y} radius ${radius}`);
    }
}