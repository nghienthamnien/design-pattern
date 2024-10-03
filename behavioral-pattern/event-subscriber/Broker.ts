import { ISubcriber } from "./ISubcriber";

export class Broker {
  private subscribers: Map<string, ISubcriber[]>;

  constructor(topics: string[]) {
    this.subscribers = new Map<string, ISubcriber[]>();
    topics?.forEach((topic) => {
      this.subscribers.set(topic, []);
    });
  }

  subscribe(topic: string, s: ISubcriber) {
    if (this.subscribers.has(topic)) {
      this.subscribers.get(topic)?.push(s);
    }
  }

  unsubscribe(topic: string, s: ISubcriber) {
    if (this.subscribers.has(topic)) {
      const index = this.subscribers.get(topic)?.indexOf(s) || -1;
      if (index > -1) {
        this.subscribers.get(topic)?.splice(index, 1);
      }
    }
  }
  notify(topic, message) {
    this.subscribers.get(topic)?.forEach((s) => {
      s.updateContext(message);
    });
  }
}
