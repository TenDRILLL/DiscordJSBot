class Event {
    constructor(event,once) {
        this.eventName = event;
        this.runOnce = once;
    }
    getEventName(){return this.eventName;}
    isRunOnce(){return this.runOnce;}
    exec(){return console.log(this.eventName + " ran, but exec method wasn't overridden.");}
}

module.exports = Event;