import { DrawingAPI1 } from './DrawingAPI1';
import { DrawingAPI2 } from './DrawingAPI2';
import { Circle } from './Circle';

const circle1 = new Circle(1, 2, 3, new DrawingAPI1());
const circle2 = new Circle(5, 7, 11, new DrawingAPI2());

circle1.draw();
circle2.draw();