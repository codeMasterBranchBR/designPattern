import { SubsystemA } from './SubsystemA';
import { SubsystemB } from './SubsystemB';
import { SubsystemC } from './SubsystemC';

export class Facade {
    private subsystemA: SubsystemA;
    private subsystemB: SubsystemB;
    private subsystemC: SubsystemC;

    constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
        this.subsystemC = new SubsystemC();
    }

    operation1(): void {
        console.log("Facade: operation 1");
        this.subsystemA.operationA();
        this.subsystemB.operationB();
    }

    operation2(): void {
        console.log("Facade: operation 2");
        this.subsystemB.operationB();
        this.subsystemC.operationC();
    }
}