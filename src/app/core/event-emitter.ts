export class EventEmitter {
  private events = {};

  emit<T>(eventName: string, data?: T) {
    const event = this.events[eventName];
    if (event) {
      event.forEach((fn: () => void) => {
        fn.call(undefined, data);
      });
    }
  }

  subscribe(eventName: string, fn: (res: any) => void): () => void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(fn);

    return () => {
      this.events[eventName] = this.events[eventName].filter(
        (eventFn: () => void) => fn !== eventFn
      );
    };
  }
}
