import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-promolist',
  templateUrl: './promolist.component.html',
  styleUrls: ['./promolist.component.scss']
})
export class PromolistComponent implements OnInit {
  promotionList: any[];

  @Input() set promotions(val: any[]) {
    this.promotionList = val;
  }
  @Input() data;

  constructor() {}

  ngOnInit() {}

  removePromo(ev) {
    this.data.removePromotion(ev);
  }
}
