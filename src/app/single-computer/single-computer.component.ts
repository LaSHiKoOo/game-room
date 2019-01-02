import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-computer',
  templateUrl: './single-computer.component.html',
  styleUrls: ['./single-computer.component.scss']
})
export class SingleComputerComponent implements OnInit {
  computerName = '';
  computerID = 0;
  computerState = 'free';
  computerType = 'standart';
  computerPrice = 0;
  currentCost: any = 0;
  crtTime: any = 0;

  timeSettings = {
    controllers: 0,
    time: 0
  };

  @Input() data;
  @Input() computer;
  @Input() currentTime;
  @Input() maxTime;
  @Input() fixedTime;
  @Input() timerActive;

  @Input() set name(value: string) {
    this.computerName = value;
  }
  @Input() set price(value: number) {
    this.computerPrice = value;
  }
  @Input() set id(value: number) {
    this.computerID = value;
  }
  @Input() set state(value: string) {
    this.computerState = value;
  }
  @Input() set type(value: string) {
    this.computerType = value;
  }

  @Output() start = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  setSettings(msg: string, ev: any) {
    switch (msg) {
      case 'controller': {
        this.timeSettings.controllers = ev.value;
        return;
      }
      case 'time': {
        this.timeSettings.time = ev.value;
        return;
      }
    }
  }

  newTime(ev) {
    switch (this.maxTime) {
      case 0: {
        this.crtTime = ev;
        this.currentCost = parseFloat(
          ((ev / 3600) * this.computerPrice).toString()
        ).toFixed(2);
        break;
      }
      default: {
        const newTime = this.maxTime - ev;
        this.currentCost = parseFloat(
          ((newTime / 3600) * this.computerPrice).toString()
        ).toFixed(2);
        break;
      }
    }
  }
  startTime() {
    this.start.emit(this.timeSettings);
  }
  stopTimer() {
    this.computer.timerActive = false;
    const item = {
      time: '',
      cost: ''
    };
    item.time = this.crtTime;
    item.cost = parseFloat(
      ((this.crtTime / 3600) * this.computerPrice).toString()
    ).toFixed(2);
    this.data.data.currentModal = 'stopTimerModal';
    this.data.data.modalParams[this.data.data.currentModal].info = [];
    this.data.data.modalParams[this.data.data.currentModal].info.push(item);
    this.data.data.modalParams[this.data.data.currentModal].info.push(
      this.computer
    );
  }

  get controllers() {
    return this.data.data.controllers;
  }
  get time() {
    return this.data.data.time;
  }
}
