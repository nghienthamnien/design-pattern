import { Broker } from "./Broker";
import { ISubcriber } from "./ISubcriber";

export class ConcreteSubscriber implements ISubcriber {
  constructor(private broker: Broker) {}

  updateContext(message: string) {
    console.log(`Retrive message: ${message}`);
  }
}
