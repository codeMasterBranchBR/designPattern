import { SimpleWindow } from './SimpleWindow';
import { BorderedWindowDecorator } from './BorderedWindowDecorator';

const simpleWindow = new SimpleWindow();
const decoratedWindow = new BorderedWindowDecorator(simpleWindow);

console.log("Simple Window:");
simpleWindow.draw();

console.log("\nDecorated Window:");
decoratedWindow.draw();