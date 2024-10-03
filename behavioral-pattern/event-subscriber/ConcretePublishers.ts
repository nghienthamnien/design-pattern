import { Broker } from "./Broker";
import { IPublisher } from "./IPublisher";

export class ConcretePublisher implements IPublisher {
  constructor(private broker: Broker) {}

  send(topic: string, message: string) {
    console.log(`publish {topic: ${topic}, message: ${message}}`);
    this.broker.notify(topic, message);
  }
}
