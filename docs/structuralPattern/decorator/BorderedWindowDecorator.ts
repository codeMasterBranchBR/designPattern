import { WindowDecorator } from './WindowDecorator';

export class BorderedWindowDecorator extends WindowDecorator {
    draw(): void {
        super.draw();
        this.drawBorder();
    }

    private drawBorder(): void {
        console.log("Drawing a border around the window");
    }
}