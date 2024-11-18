import { Window } from './Window';

export class WindowDecorator implements Window {
    protected window: Window;

    constructor(window: Window) {
        this.window = window;
    }

    draw(): void {
        this.window.draw();
    }
}