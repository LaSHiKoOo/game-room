import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data: any;
  elementRef: any;

  @Input()
  set appData(val: any) {
    this.data = val;
  }
  constructor(private _eref: ElementRef) {}

  ngOnInit() {
    const windowWidth = window.screen.width;
    if (windowWidth < 1025) {
      console.log(
        (document.getElementsByTagName('img')[0].src =
          '../../assets/images/logo2.png')
      );
      document.getElementsByTagName('img')[0].classList.add('img_edit');
      this.CustomerPanel();
    }
  }
  menuToggle() {
    const windowWidth = window.screen.width;
    if (windowWidth < 1010) {
      document.getElementsByTagName('body')[0].classList.remove('open');
      if (windowWidth < 760) {
        document.getElementById('left-panel').classList.toggle('open-menu');
      } else {
        document.getElementById('left-panel').classList.toggle('open-menu');
      }
    } else {
      document.getElementsByTagName('body')[0].classList.toggle('open');
      document.getElementById('left-panel').classList.remove('open-menu');
    }
  }

  get userRole() {
    return this.data.data.user.userRole;
  }

  changeState(state: string) {
    this.data.changeState(state);
  }

  logOut() {
    localStorage.clear();
    location.reload();
  }
  get userAvatar() {
    return this.data.data.avatars[this.data.data.user.avatarId - 1];
  }

  CustomerPanel() {
    const element = document.getElementsByClassName('left-panel')[0];
    const ForCustomer = document.getElementsByClassName('ForCustomer');
    const windowWidth = window.screen.width;
    console.log(windowWidth);
    if (windowWidth < 1025) {
      if (ForCustomer.length > 0) {
        document
          .getElementsByClassName('left-panel')[0]
          .classList.add('CustomerPanel');
        document
          .getElementsByClassName('right-panel')[0]
          .classList.add('CustomerPanelR');
      } else {
        document
          .getElementsByClassName('left-panel')[0]
          .classList.remove('CustomerPanel');
        document
          .getElementsByClassName('right-panel')[0]
          .classList.remove('CustomerPanelR');
      }
    }
  }
}
