import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @ViewChild('userStat') userStat: ElementRef;

  constructor() {}

  ngOnInit() {}

  changeSize() {
    this.userStat.nativeElement.classList.toggle('extended');
  }
}
