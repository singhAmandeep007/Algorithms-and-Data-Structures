// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  events: { [key: string]: Function[] };
  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName: string, callback: Function) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName: string) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName: string) {
    delete this.events[eventName];
  }
}

export { Events };
