import { Component } from '@angular/core';
import appData from './appData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playTime-admin';
  data: appData = new appData();

  resetModal(ev) {
    this.data.data.currentModal = ev;
  }

  get currentModal() {
    return this.data.data.currentModal;
  }
  get modalParams() {
    return this.data.data.modalParams[this.currentModal];
  }
}
