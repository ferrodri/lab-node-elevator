/*jshint esversion: 6*/
class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.waitingList = [];
    this.passengers = [];
    this.requests = [];
    this.direction = "UP";
    this.intervalId = "";
  }

  start(person) {
    this.call(person);
    this.intervalId = setInterval(() => {
      this._passengersEnter();
     }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
  }
  update() {
    this.log();
  }
  _passengersEnter() {
    for ( let i= this.waitingList.length; i > 0; i--) {
      if (this.waitingList[0].originFloor === this.floor) {
        this.passengers.push(this.waitingList[0]);
        this.requests.push(this.waitingList[0]);
        this.waitingList.splice(0, 1);
        console.log(this.passengers);
        this.floorUp();
      } else {
        this.floorUp();
      }
    }
  }
  _passengersLeave() {}

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.direction = "UP";
      this.floor++;
      this.update();
    } else {
      console.log("Maximum floor reached!");
      this.floorDown();
    }
  }
  floorDown() {
    // while (this.requests.length > 0) {
      if (this.floor > 0) {
        this.direction = "DOWN";
        this.floor--;
        this.update();
      } else {
        console.log("Minimum floor reached!");
        this.floorUp();
      }
    // }
  }
  call(person) {
    this.waitingList.push(person);
  }
  log() {
    console.log("Floor: " + this.floor + " | Direction: " + this.direction);
  }
}

module.exports = Elevator;
