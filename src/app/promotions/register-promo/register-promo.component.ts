import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register-promo',
  templateUrl: './register-promo.component.html',
  styleUrls: ['./register-promo.component.scss']
})
export class RegisterPromoComponent implements OnInit {

  @ViewChild('dateRange') dateRange: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
