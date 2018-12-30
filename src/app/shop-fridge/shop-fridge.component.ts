import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-fridge',
  templateUrl: './shop-fridge.component.html',
  styleUrls: ['./shop-fridge.component.scss']
})
export class ShopFridgeComponent implements OnInit {
  itemsToSale = [];
  @Input() data;
  constructor() {}

  ngOnInit() {}

  sellItem(ind, event) {
    if (event.data !== undefined) {
      if (parseInt(event.data, 10) > this.shopContent[ind].quantity) {
        event.target.valueAsNumber = Math.min(
          parseInt(event.data, 10),
          this.shopContent[ind].quantity
        );
      }
    }
    let counter = 0;
    const item = {
      index: 0,
      quantity: 0
    };
    item.index = ind;
    item.quantity = event.target.valueAsNumber;

    for (let i = 0; i < this.itemsToSale.length; i++) {
      if (item.index === this.itemsToSale[i].index) {
        this.itemsToSale[i] = item;
        counter++;
      }
    }
    if (counter === 0) {
      this.itemsToSale.push(item);
    }
  }

  confirmSell() {
    console.log(this.itemsToSale);
    this.data.data.currentModal = 'confirmSaleModal';
    this.data.data.modalParams[this.data.data.currentModal].info.push(
      this.itemsToSale
    );
    this.data.data.modalParams[this.data.data.currentModal].info.push(
      this.shopContent
    );
    console.log(this.shopContent);
  }

  getMax(val) {
    return parseInt(val.quantity, 10);
  }

  get shopContent() {
    return this.data.data.shopContent.filter(item => item.quantity > 0);
  }
}
