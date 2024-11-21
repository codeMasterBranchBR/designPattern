import { Window } from './Window';

export class SimpleWindow implements Window {
    draw(): void {
        console.log("Drawing a simple window");
    }
}