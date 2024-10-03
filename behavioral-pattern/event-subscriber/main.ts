import { Broker } from "./Broker";
import { ConcretePublisher } from "./ConcretePublishers";
import { ConcreteSubscriber } from "./ConcreteSubscribers";

const broker = new Broker(["topic1", "topic2"]);
const publisher = new ConcretePublisher(broker);
const subscribe1 = new ConcreteSubscriber(broker);
const subscribe2 = new ConcreteSubscriber(broker);
broker.subscribe("topic1", subscribe1);
broker.subscribe("topic2", subscribe2);

publisher.send("topic1", "abc");
publisher.send("topic2", "def");
