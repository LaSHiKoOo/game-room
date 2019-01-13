import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-single-promotion',
  templateUrl: './single-promotion.component.html',
  styleUrls: ['./single-promotion.component.scss']
})
export class SinglePromotionComponent implements OnInit {
  promotionID: number;
  promotionTitle: string;
  promotionShortInfo: string;
  promotionConsoles: string[];
  promotionisAlltime: boolean;
  promotionAllTimeText: string;
  promotionDateFrom: string;
  promotionDateTo: string;
  promotionPrice: number;
  promotionCurrency: string;
  promotionFullInfo: string;

  @ViewChild('cardBody') cardBody: ElementRef;

  @Input() set promotion(val: any) {
    this.promotionID = val.id;
    this.promotionTitle = val.title;
    this.promotionShortInfo = val.shortInfo;
    this.promotionConsoles = val.consoles;
    this.promotionisAlltime = val.allTime;
    this.promotionAllTimeText = val.allTimeText;
    this.promotionDateFrom = val.dateFrom;
    this.promotionDateTo = val.dateTo;
    this.promotionPrice = val.price;
    this.promotionCurrency = val.currency;
    this.promotionFullInfo = val.fullInfo;
  }

  @Output() removePromo = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  changeSize() {
    this.cardBody.nativeElement.classList.toggle('extended');
  }
  removePromotion() {
    this.changeSize();
    setTimeout(() => {
      this.removePromo.emit(this.promotionID);
    }, 1000);
  }
}
