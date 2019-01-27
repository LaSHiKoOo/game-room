import { Component, OnInit } from '@angular/core';
import appData from './appData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'playTime-admin';
  data = appData;

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.data.data.userStatus = 'authorized';
      const userDetails = JSON.parse(localStorage.getItem('currentUser'));

      this.data.data.user = {
        id: userDetails.id,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        avatarId: userDetails.avatarId,
        email: userDetails.email,
        phone: userDetails.number,
        userRole: userDetails.fK_Role,
        createDate: userDetails.createDate,
        token: userDetails.token
      };
      console.warn(this.data.data.user);
    }
  }
  resetModal(ev) {
    this.data.data.currentModal = ev;
  }
  confirmSell(id, ev) {
    this.data.increaseValue(id, ev);
    this.resetModal('');
  }

  get currentModal() {
    return this.data.data.currentModal;
  }

  get userStatus() {
    return this.data.data.userStatus;
  }

  get modalParams() {
    return this.data.data.modalParams[this.currentModal];
  }
}
