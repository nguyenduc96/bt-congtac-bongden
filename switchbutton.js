class Switchbutton {
    status;
    constructor(status, lamp) {
        this.status = status;
        this.lamp = lamp;
    }
    connectToLamp(newLamp) {
        this.lamp = newLamp;
    }
    switchOn() {
            this.lamp.turnOn();
    }
    switchOff() {
            this.lamp.turnOff();
    }
}
let switchbutton = new Switchbutton(true, electriclamp);
switchbutton.connectToLamp(electriclamp);
switchbutton.switchOn(electriclamp);
console.log("on");
switchbutton.switchOff(electriclamp);
console.log('off');
