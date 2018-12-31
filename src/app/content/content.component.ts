import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  data: any;

  @Input()
  set appData(val: any) {
    this.data = val;
  }

  constructor() {}

  ngOnInit() {}

  get state() {
    return this.data.gameState;
  }

  get tableContent() {
    return this.data.data.tableContent;
  }
  get tableHeading() {
    return this.data.data.tableHeading;
  }
  get computers() {
    return this.data.data.computers;
  }

  get WidgetContent() {
    return this.data.data.WidgetContent;
  }

  startTime(computer, ev) {
    switch (ev.controllers) {
      case 1:
      case 2: {
        computer.currentPrice = computer.defaultPrice;
        break;
      }
      case 3: {
        computer.currentPrice =
          computer.defaultPrice + computer.defaultPrice / 2;
        break;
      }
      case 4: {
        computer.currentPrice = computer.defaultPrice * 2;
        break;
      }
    }
    if (ev.time === 0) {
      computer.fixedTime = false;
    } else {
      computer.fixedTime = true;
    }
    if (ev.time === 5) {
      computer.currentTime = 0.5 * 3600;
      computer.maxTime = 0.5 * 3600;
    } else {
      computer.currentTime = ev.time * 3600;
      computer.maxTime = ev.time * 3600;
    }
    computer.state = 'busy';
    console.log(computer);
  }
}
