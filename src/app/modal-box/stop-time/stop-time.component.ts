import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stop-time',
  templateUrl: './stop-time.component.html',
  styleUrls: ['./stop-time.component.scss']
})
export class StopTimeComponent implements OnInit {
  computers = [];
  currentComputer: any;
  fullPrice = 0;
  @Input() modalContent;
  @Output() stopTimer = new EventEmitter<number>();
  @Output() closeModal = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.computers.push(this.modalContent.info[0]);
    this.currentComputer = this.modalContent.info[1];
  }
  doAction(type) {
    switch (type) {
      case 'accept': {
        this.stopTimer.emit(this.computers[0].cost);
        this.currentComputer.state = 'free';
        this.currentComputer.timerActive = true;
        break;
      }
      case 'decline': {
        this.closeModal.emit('');
        this.currentComputer.timerActive = true;
        break;
      }
    }
  }
  displayTime(time) {
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = time % 60;
    return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s]
      .filter(a => a)
      .join(':');
  }
  get computerName() {
    return `${this.currentComputer.name} #${this.currentComputer.id}`;
  }
}
