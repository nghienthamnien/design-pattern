export interface IPublisher {
  send(topic: string, message: string);
}
