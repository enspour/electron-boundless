import { Service, Destroyer } from ".";

export type Event = string;
export type EventArgs = any;

export type EventHandler = (args: EventArgs) => void;

class EventEmitterService implements Service {
    private events;

    constructor() {
        this.events = new Map<Event, EventHandler[]>();
    }

    initialize(): Destroyer {
        return () => {
            this.clearAll();
        };
    }

    add<Handler extends EventHandler>(type: Event, handler: Handler) {
        let listeners = this.events.get(type);

        if (listeners && listeners.length) {
            listeners.push(handler);
        } else {
            listeners = [handler];
            this.events.set(type, listeners);
        }

        return () => {
            const listenerIndex = listeners.findIndex(
                (item) => item === handler
            );

            if (listenerIndex !== -1) {
                listeners.splice(listenerIndex, 1);
            }
        };
    }

    emit<Args extends EventArgs>(type: Event, args: Args) {
        const listeners = this.events.get(type);

        if (listeners) {
            listeners.forEach((listener) => listener(args));
        }
    }

    clear(type: Event) {
        this.events.delete(type);
    }

    clearAll() {
        this.events.clear();
    }
}

export default EventEmitterService;
