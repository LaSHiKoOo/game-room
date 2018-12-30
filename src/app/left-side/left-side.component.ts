import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {
  data: any;

  @Input() set appData(val: any) {
    this.data = val;
  }

  constructor() {}

  ngOnInit() {}

  get userStatus() {
    return this.data.data.userStatus;
  }

  CustmerMenuToggle() {
    document.getElementById('left-panel').classList.toggle('OpenRight');
    // document.getElementsByClassName('fas')[0].classList.remove("fa-caret-right");
    document.getElementsByClassName('fas')[0].classList.toggle('fa-caret-left');
  }
}
